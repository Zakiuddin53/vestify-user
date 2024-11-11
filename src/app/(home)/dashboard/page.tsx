import { Suspense } from 'react'
import DashboardContent from '@/components/dashboard/DashboardContent'

export default function HomeDashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}
