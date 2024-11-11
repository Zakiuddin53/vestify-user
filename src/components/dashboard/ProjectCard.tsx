'use client'
import React, { useState } from 'react'
import { Twitter, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface ProjectCardProps {
  project: {
    id: string
    name: string
    description: string
    round: string
    status: 'Success' | 'In Progress'
    progress: number
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const description = project.description || 'No description available.'

  const handleDetailsClick = () => {
    router.push(`/project/${project.id}`)
  }

  return (
    <div className='w-[315px] bg-white p-5 rounded-3xl border border-gray-300 flex flex-col h-full'>
      <div className='flex justify-between items-start mb-4'>
        <div className='flex items-center gap-3'>
          <div className='bg-blue-500 rounded-full p-2'>
            <Twitter className='h-5 w-5 text-white' />
          </div>
          <h2 className='font-urbanist text-xl font-semibold'>{project.name}</h2>
        </div>
        <div
          className={`px-3 py-1 rounded-full ${
            project.status === 'Success'
              ? 'bg-green-100 text-green-600'
              : 'bg-gray-100 text-gray-600'
          } text-xs font-medium`}
        >
          {project.status}
        </div>
      </div>

      <div className='px-2 bg-indigo-100 rounded-lg self-start mb-3'>
        <span className='text-indigo-600 text-xs font-bold'>{project.round}</span>
      </div>

      <div
        className={`font-urbanist text-sm leading-6 text-gray-600 mb-4 ${
          isExpanded ? '' : 'max-h-[120px] overflow-hidden'
        }`}
      >
        {description}
      </div>

      {description.length > 120 && (
        <button
          onClick={toggleExpand}
          className='font-urbanist text-xs font-medium text-blue-500 mb-4 hover:underline'
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}

      <div className='w-full flex items-center gap-2 mb-4'>
        <div className='flex-grow bg-gray-200 rounded-full h-2'>
          <div
            className='bg-blue-400 h-2 rounded-full'
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <span className='text-sm font-medium text-gray-600'>{project.progress}%</span>
      </div>

      <div className='mt-auto'>
        <Button
          className='w-full bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-indigo-700'
          onClick={handleDetailsClick}
        >
          Details
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
