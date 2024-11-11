'use client'
import React, { useState, useEffect } from 'react'
import { Search } from '@/components/dashboard/Search'
import { Filters } from '@/components/dashboard/Filters'
import { CapitalCard } from '@/components/capitalProfile/CapitalCard'
import { getAllVCs } from '@/lib/api'

interface VCData {
  name: string
  description: string
  logoBase64: string
  subscriptionFee: string
  id: string
}

const DashboardContent: React.FC = () => {
  const [data, setData] = useState<VCData[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const result = await getAllVCs(controller.signal)
        if (isMounted) {
          if (result.success) {
            setData(result.data)
          } else {
            setError(result.message)
          }
        }
      } catch (error: unknown) {
        if (isMounted) {
          if (error instanceof Error && error.name !== 'AbortError') {
            setError('An error occurred. Please try again later.')
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='px-12 py-4'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-[#1E293B]'>Capitals</h1>
        <div className='flex space-x-4'>
          <Search />
          <Filters />
        </div>
      </div>
      <div className='max-w-7xl '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {data && data.length > 0 ? (
            data.map(item => (
              <CapitalCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.subscriptionFee}
                interval='Monthly'
              />
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
