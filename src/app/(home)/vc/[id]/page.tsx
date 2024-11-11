'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { VCProfileByID, getVCProfileById } from '@/lib/api'
import Navbar from '@/components/capitalProfile/Navbar'
import Profile from '@/components/capitalProfile/Profile'
import Descp from '@/components/capitalProfile/Descp'
import Projects from '@/components/capitalProfile/Projects'

export default function VCProfilePage() {
  const { id } = useParams()
  const [profile, setProfile] = useState<VCProfileByID | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true)
        const result = await getVCProfileById(id as string)
        if (result.success) {
          setProfile(result.data)
        } else {
          setError(result.message)
        }
      } catch (error) {
        setError('An error occurred while fetching the profile.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [id])

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />
  if (!profile) return <NoProfileData />

  return (
    <div className='w-full px-4 pb-4'>
      <div className='w-full flex-col justify-start items-end flex'>
        <Navbar profile={profile} />
        <Profile profile={profile} />
      </div>
      <Descp profile={profile} />
      <Projects profile={profile} />
    </div>
  )
}

const LoadingSpinner: React.FC = () => (
  <div className='flex justify-center items-center h-screen'>
    <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600'></div>
  </div>
)

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className='flex justify-center items-center h-screen text-red-500'>Error: {message}</div>
)

const NoProfileData: React.FC = () => (
  <div className='flex justify-center items-center h-screen'>No profile data available</div>
)
