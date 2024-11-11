import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { joinVC } from '../../lib/api'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'

interface DecodedToken {
  user: { id: string }
  iat: number
}

interface ProfileProps {
  profile: {
    id: string
    name: string
  }
}

function Navbar({ profile }: ProfileProps) {
  const router = useRouter()

  const handleJoinVC = async () => {
    try {
      const token = Cookies.get('access_token')
      if (!token) {
        throw new Error('No access token found')
      }

      const decodedToken = jwtDecode<DecodedToken>(token)
      const userId = decodedToken.user.id

      const vcId = profile.id

      const response = await joinVC({ userId, vcId })
      if (response.success) {
        alert('Successfully joined VC!')
        router.push(`/dashboard?vcId=${vcId}`)
      } else {
        alert('Failed to join VC: ' + response.message)
      }
    } catch (error) {
      console.error('Error joining VC:', error)
      alert('An error occurred while trying to join the VC')
    }
  }

  return (
    <div className='w-full py-[34.15px] justify-between items-start flex'>
      <div className='ml-8 justify-start items-center gap-[17.07px] flex'>
        <div className="text-[#18191c] text-[25.61px] font-extrabold font-['Plus Jakarta Sans'] leading-10">
          Hi, {profile?.name}
        </div>
      </div>

      <button
        onClick={handleJoinVC}
        className='bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 flex items-center transition duration-300'
      >
        <FaPlus className='mr-2' />
        Join Now
      </button>
    </div>
  )
}

export default Navbar
