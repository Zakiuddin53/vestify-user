'use client'
import { ArrowRight, Bookmark, Twitter } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import Link from 'next/link'

interface CapitalCardProps {
  id: string
  name: string
  description: string
  price: string
  interval: string
}

function ExpandableDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <div className='flex-grow overflow-auto'>
      <div
        className={`font-urbanist text-sm leading-6 text-gray-600 mb-1 ${
          isExpanded ? '' : 'line-clamp-4'
        }`}
      >
        {description}
      </div>
      {description.length > 150 && (
        <button
          onClick={toggleExpand}
          className='font-urbanist text-sm font-semibold text-blue-500 mt-2 hover:underline text-left'
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  )
}

export function CapitalCard({ id, name, description, price, interval }: CapitalCardProps) {
  return (
    <div className='w-[315px] bg-white p-5 rounded-3xl border border-gray-300 flex flex-col h-[400px] shadow-sm'>
      <div className='flex justify-between items-start mb-4'>
        <div className='bg-blue-500 rounded-full p-2'>
          <Twitter className='h-5 w-5 text-white' />
        </div>
        <button className='text-gray-400'>
          <Bookmark className='h-5 w-5' />
        </button>
      </div>

      <h2 className='font-urbanist text-xl font-semibold mb-3 text-black'>{name}</h2>

      <ExpandableDescription description={description} />

      <div className='flex justify-between items-center mt-auto'>
        <div className='font-urbanist'>
          <span className='font-bold text-lg text-black'>${price}</span>
          {interval && <span className='text-gray-600 text-sm ml-1'>/{interval}</span>}
        </div>
        <Link href={`/vc/${id}`} passHref>
          <Button className='bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition duration-300'>
            Details
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </Link>
      </div>
    </div>
  )
}
