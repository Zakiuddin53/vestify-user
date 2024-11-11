import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export interface SignUpData {
  username: string
  email: string
  password: string
  accountType: string
}

export type ProjectRound = 'PRE SEED' | 'SEED' | 'PRIVATE 1' | 'PRIVATE 2' | 'PRIVATE 3' | 'PUBLIC'

export interface ProjectInfo {
  name: string
  categories: string[]
  description: string
  vcId: string
}

export interface TokenMetrics {
  round: ProjectRound
  fdv: string
  price: string
  tgeUnlock: string
  tge: string
  tgeSummary: string
}

export interface Deals {
  maximum: number
  minimum: number
  acceptedTokens: string
  poolFee: number
  startDate: string
  endDate: string
}

export interface TeamMember {
  name: string
  title: string
  description: string
  imgBase64?: string
}

export interface Partner {
  name: string
  logoBase64: string | null
}

export interface ProjectSocials {
  x?: string
  instagram?: string
  discord?: string
  telegram?: string
  medium?: string
  youtube?: string
}

export interface ProjectData {
  info: ProjectInfo
  tokenMetrics: TokenMetrics[]
  deals: Deals
  teamAndAdvisors: TeamMember[]
  partnersAndInvestors: Partner[]
  projectSocials: ProjectSocials
}

export interface VCProfile {
  name: string
  description: string
  logoBase64: string
  subscriptionFee: string
  tags: string[]
  kycDone: boolean
  fundSize: string

  projects: {
    id: string
    name: string
    pledgeAmount: string
    marketCap: string
    topGainer: string
    raisedAmount: string
    ongoingClaim: number
  }[]
}

export interface USERProfile {
  name: string
  description: string
  logoBase64: string
  subscriptionFee: string
  tags: string[]
  kycDone: boolean
  fundSize: string

  projects: {
    id: string
    name: string
    pledgeAmount: string
    marketCap: string
    topGainer: string
    raisedAmount: string
    ongoingClaim: number
  }[]
}

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

interface DecodedToken {
  user: {
    id: string
  }
  iat: number
}

export interface Project {
  id: string
  name: string
  description: string
  round: string
  status: 'Success' | 'In Progress'
  progress: number
}

export interface VCProjectsResponse {
  vcId: string
  projects: Project[]
}

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for adding auth token
api.interceptors.request.use(
  config => {
    const token = Cookies.get('access_token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// Response interceptor for handling errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API Error:', error.response.data)
      throw new Error(error.response.data.message || 'An error occurred')
    } else if (error.request) {
      console.error('No response received:', error.request)
      throw new Error('No response received from server')
    } else {
      console.error('Error setting up request:', error.message)
      throw error
    }
  }
)

export const signUp = async (data: SignUpData): Promise<ApiResponse<{ access_token: string }>> => {
  const response = await api.post<ApiResponse<{ access_token: string }>>('api/auth/signup', data)
  return response.data
}

export interface LoginData {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data?: {
    access_token: string
  }
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('api/auth/login', data)
  return response.data
}

export const getVCProfile = async (): Promise<ApiResponse<VCProfile>> => {
  try {
    const token = Cookies.get('access_token')
    if (!token) {
      throw new Error('No access token found')
    }

    const decodedToken = jwtDecode<DecodedToken>(token)
    const vcId = decodedToken.user.id

    const response = await api.get<ApiResponse<VCProfile>>(`/api/vc/${vcId}/profile`)
    return response.data
  } catch (error) {
    console.error('Error fetching VC profile:', error)
    throw error
  }
}

export const logout = async (): Promise<ApiResponse<null>> => {
  try {
    const response = await api.post<ApiResponse<null>>('/api/auth/logout')
    if (response.data.success) {
      Cookies.remove('access_token')
    }
    return response.data
  } catch (error) {
    console.error('Error during logout:', error)
    throw error
  }
}

export const getVCProjects = async (vcId: string): Promise<ApiResponse<Project[]>> => {
  try {
    const response = await api.get<ApiResponse<VCProjectsResponse>>(`/api/vc/${vcId}/projects`)
    if (response.data.success && Array.isArray(response.data.data.projects)) {
      return {
        success: true,
        message: response.data.message,
        data: response.data.data.projects.map(project => ({
          id: project.id,
          name: project.name,
          description: project.description || '',
          round: project.round || '',
          status: project.status || 'In Progress',
          progress: project.progress || 0,
        })),
      }
    } else {
      throw new Error('Invalid response format')
    }
  } catch (error) {
    console.error('Error fetching VC projects:', error)
    throw error
  }
}

export const getUSERProfile = async (): Promise<ApiResponse<USERProfile>> => {
  try {
    const token = Cookies.get('access_token')
    if (!token) {
      throw new Error('No access token found')
    }

    const decodedToken = jwtDecode<DecodedToken>(token)
    const userId = decodedToken.user.id

    const response = await api.get<ApiResponse<VCProfile>>(`/api/user/${userId}/profile`)
    return response.data
  } catch (error) {
    console.error('Error fetching VC profile:', error)
    throw error
  }
}

export interface VCListItem {
  name: string
  description: string
  logoBase64: string
  subscriptionFee: string
  id: string
}

export const getAllVCs = async (signal?: AbortSignal): Promise<ApiResponse<VCListItem[]>> => {
  try {
    const response = await api.get<ApiResponse<VCListItem[]>>('/api/vc/getAll', { signal })
    return response.data
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.log('Request was aborted')
      return {
        success: false,
        message: 'Request was cancelled',
        data: [],
      }
    }
    if (axios.isAxiosError(error)) {
      console.error('Error fetching all VCs:', error.response?.data || error.message)
      return {
        success: false,
        message: error.response?.data?.message || 'An error occurred while fetching VCs',
        data: [],
      }
    }
    console.error('Unexpected error:', error)
    return {
      success: false,
      message: 'An unexpected error occurred',
      data: [],
    }
  }
}

export interface VCProfileByID {
  id: string
  description: string
  kycDone: boolean
  logoBase64: string
  name: string
  subscriptionFee: string
  tags: string[]
  projects: {
    id: string
    name: string
  }[]
  vcId: string
}

export const getVCProfileById = async (vcId: string): Promise<ApiResponse<VCProfileByID>> => {
  try {
    const response = await api.get<ApiResponse<VCProfileByID>>(`/api/vc/${vcId}/profile`)
    return response.data
  } catch (error) {
    console.error('Error fetching VC profile by ID:', error)
    throw error
  }
}

export interface JoinVCData {
  userId: string
  vcId: string
}

export interface JoinVCResponse {
  success: boolean
  message: string
}

export const joinVC = async (data: JoinVCData): Promise<ApiResponse<JoinVCResponse>> => {
  try {
    const response = await api.post<ApiResponse<JoinVCResponse>>('/api/user/joinVc', data)
    return response.data
  } catch (error) {
    console.error('Error joining VC:', error)
    throw error
  }
}

export interface ProjectDetails {
  id: string
  name: string
  description: string
  token: {
    price: number
    allocation: string
    vesting: string
    tge: string
    tgeUnlock: string
  }
  round: string
  tokensReceived: number
  partnersAndInvestors: Array<{
    name: string
    logoBase64: string
  }>
  info: {
    name: string
    description: string
    round: string
    categories: string[]
  }
  socialLink: {
    medium?: string
    discord?: string
    x?: string
    telegram?: string
    instagram?: string
    youtube?: string
  }
  teamAndAdvisors: Array<{
    name: string
    title: string
    imgBase64: string
    description: string
  }>
}

export const getProjectDetails = async (
  projectId: string
): Promise<ApiResponse<ProjectDetails>> => {
  try {
    const response = await api.get<ApiResponse<ProjectDetails>>(`/api/project/${projectId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching project details:', error)
    throw error
  }
}

export interface UserProfileInfo {
  email: string
  discord: string
  x: string
  kycDone: boolean
}

export interface InvestmentSummary {
  deals: number
  otcTrades: number
  totInvestment: number
  avgInvestment: number
}

export interface Wallet {
  current: string
  last5Used: string[]
}

export interface Transaction {
  contributed: { amount: number; count: number }
  refunded: { amount: number; count: number }
  otc: { amount: number; count: number }
}

export interface DealSummary {
  projName: string
  allocation: string
  tokenRecvd: number
  recEvm: string
  transaction: Transaction
}

export interface UserProfile {
  info: UserProfileInfo
  investmentSummary: InvestmentSummary
  wallet: Wallet
  dealsSummary: DealSummary[]
}

export const getUserProfile = async (userId: string): Promise<ApiResponse<UserProfile>> => {
  try {
    const response = await api.get<ApiResponse<UserProfile>>(`/api/user/${userId}/profile`)
    return response.data
  } catch (error) {
    console.error('Error fetching user profile:', error)
    throw error
  }
}
