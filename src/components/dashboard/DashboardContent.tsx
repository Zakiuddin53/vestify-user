'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Project, getVCProjects } from '@/lib/api'
import { FaSearch, FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { ProjectCard } from './ProjectCard'

const DashboardContent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const vcId = searchParams.get('vcId')
  const router = useRouter()

  useEffect(() => {
    const fetchProjects = async () => {
      if (!vcId) return

      setLoading(true)
      setError(null)

      try {
        const { success, data, message } = await getVCProjects(vcId)
        if (success) {
          setProjects(data)
        } else {
          throw new Error(message)
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
        setError(`Error fetching VC projects: ${errorMessage}`)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [vcId])

  const filteredProjects = useMemo(
    () => projects.filter(project => project.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [projects, searchTerm]
  )

  return (
    <div>
      <header>
        <div className='mx-auto py-4 px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
            </div>
            <div className='flex items-center'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search projects'
                  className='pl-10 pr-4 py-2 border rounded-full'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
              </div>
            </div>
          </div>
          <div className='mt-8 bg-gray-200 p-2 rounded-full w-[30px]'>
            <FaArrowLeft className='text-gray-500 cursor-pointer' onClick={() => router.back()} />
          </div>
        </div>
      </header>

      <main className='flex-grow'>
        <div className='mx-auto py-2 px-4 sm:px-6 lg:px-8'>{renderContent()}</div>
      </main>
    </div>
  )

  function renderContent() {
    if (loading) {
      return <div className='text-center py-8'>Loading...</div>
    }

    if (error) {
      return <div className='text-red-500 mb-4 text-center'>{error}</div>
    }

    if (filteredProjects.length === 0) {
      return (
        <div className='text-center py-8'>
          <p className='text-gray-600 mb-4'>
            {searchTerm
              ? 'No projects found matching your search.'
              : 'No projects found. Create your first project!'}
          </p>
        </div>
      )
    }

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    )
  }
}

export default DashboardContent
