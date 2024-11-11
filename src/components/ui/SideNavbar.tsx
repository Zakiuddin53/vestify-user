'use client'

import { User, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { logout } from '@/lib/api'
import { useRouter } from 'next/navigation'
import Logo from '@/components/ui/Icons/Logo'
import Capital from '@/components/ui/Icons/Capital'
import Home from '@/components/ui/Icons/Home'
import profileimg from '../../../public/profile.svg'

export function SideNavbar() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await logout()
      if (response.success) {
        document.cookie = 'access_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        router.push('/auth/login')
      } else {
        console.error('Logout failed:', response.message)
      }
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <nav className='AppSidebar w-[80px] h-screen bg-indigo-600 flex flex-col justify-between items-center py-6 px-2'>
      <div className='flex flex-col items-center space-y-8'>
        <div className='w-12 h-12 flex justify-center items-center'>
          <Logo />
        </div>

        <div className='flex flex-col space-y-[16px]'>
          <Link href='/vc'>
            <Button
              variant='ghost'
              size='icon'
              className='w-12 h-12 rounded-full text-white hover:bg-indigo-500 transition-colors'
            >
              <Home />
              <span className='sr-only'>Home</span>
            </Button>
          </Link>

          <Link href='/dashboard'>
            <Button
              variant='ghost'
              size='icon'
              className='w-12 h-12 rounded-full text-white hover:bg-indigo-500 transition-colors'
            >
              <Capital />
              <span className='sr-only'>Capital</span>
            </Button>
          </Link>

          <Link href='/profile'>
            <Button
              variant='ghost'
              size='icon'
              className='w-12 h-12 bg-indigo-500 rounded-full text-white hover:bg-indigo-400 transition-colors'
            >
              <User className='w-6 h-6' />
              <span className='sr-only'>Profile</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col space-y-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='w-12 h-12 rounded-full text-white hover:bg-indigo-500 transition-colors'
            >
              <Settings className='w-6 h-6' />
              <span className='sr-only'>Settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='bg-white text-black'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href='/dashboard'>
          <Image src={profileimg} alt='avatar' className='w-12 h-12' />
        </Link>
      </div>
    </nav>
  )
}
