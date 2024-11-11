import '../globals.css'
import { SideNavbar } from '../../components/ui/SideNavbar'

import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex h-screen overflow-hidden'>
        <SideNavbar />
        <main className='flex-1 overflow-auto bg-gray-50'>
          <div className='p-4'>{children}</div>
        </main>
      </body>
    </html>
  )
}
