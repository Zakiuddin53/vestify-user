import { api } from '../api'

interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

// Project Types
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

export interface Project {
  id: string
  name: string
  description: string
  round: string
  status: 'Success' | 'In Progress'
  progress: number
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

interface VCProjectsResponse {
  vcId: string
  projects: Project[]
}

// API Functions
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
