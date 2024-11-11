'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { login } from '@/lib/api'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

const LoginForm: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>('')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true)
    setError('')

    try {
      const response = await login(data)
      if (response.success && response.data?.access_token) {
        Cookies.set('access_token', response.data.access_token, {
          expires: 7,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
        })
        router.push('/vc')
      } else {
        setError(response.message || 'Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full h-screen bg-[#f7f9fc] flex justify-center items-center'>
      <div className='w-[456px] px-7 py-8 bg-white rounded-[10px] border border-[#d0d4dd]'>
        <div className='flex flex-col items-center gap-8'>
          <h1 className='text-[#101828] text-[28px] font-semibold leading-[33.60px]'>
            WELCOME TO MAMBAX
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-6'>
              <div>
                <label className='text-[#101828] text-sm font-medium leading-tight'>Email</label>
                <input
                  type='email'
                  className={`w-full h-14 p-4 bg-white rounded-md border ${errors.email ? 'border-red-600' : 'border-[#d0d5dd]/60'} text-[#98a1b2] text-sm leading-tight`}
                  placeholder='Enter Email'
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
              </div>
              <div>
                <label className='text-[#101828] text-sm font-medium leading-tight'>Password</label>
                <input
                  type='password'
                  className={`w-full h-14 p-4 bg-white rounded-md border ${errors.password ? 'border-red-600' : 'border-[#d0d5dd]/60'} text-[#98a1b2] text-sm leading-tight`}
                  placeholder='Enter Password'
                  {...register('password')}
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
              </div>
            </div>
            <button
              type='submit'
              className='w-full h-[55px] bg-indigo-600 rounded-lg text-white text-base font-semibold flex justify-center items-center'
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'SIGN IN'}
            </button>
            {error && <p className='text-red-600 text-center'>{error}</p>}
            <p className='text-center text-sm text-gray-600'>
              Create an account?{' '}
              <Link
                href='/auth/signup'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
