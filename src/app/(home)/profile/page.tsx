import { Suspense } from 'react'
export default function Profile() {
  return <Suspense fallback={<div>Loading...</div>}></Suspense>
}
