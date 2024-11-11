'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { signUp } from '@/lib/api'
import TwitterIcon from '../ui/Icons/TwitterIcon'
import DiscordIcon from '../ui/Icons/DiscordIcon'
import EyeIcon from '../ui/Icons/EyeIcon'

interface FormData {
  username: string
  email: string
  password: string
  accountType: string
}

const initialFormData: FormData = {
  username: '',
  email: '',
  password: '',
  accountType: 'USER',
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))

    if (name === 'password') {
      setPasswordError('')
    }
  }

  const validateForm = (): boolean => {
    const { username, email, password } = formData
    if (!username || !email || !password) {
      setError('Please fill in all fields.')
      return false
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 6 characters long, start with a capital letter, and contain a number.'
      )
      return false
    }

    setPasswordError('')
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setError('')

    try {
      const response = await signUp(formData)

      if (response.success) {
        const accessToken = response.data.access_token
        Cookies.set('access_token', accessToken, {
          expires: 7,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
        })

        router.push('/vc')
      } else {
        setError(response.message || 'An error occurred during signup.')
      }
    } catch (error) {
      setError('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const renderInputField = (label: string, name: keyof FormData, type: string) => (
    <div className='w-full mb-6'>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700 mb-2'>
        {label.toUpperCase()}
      </label>
      <div className='relative'>
        <input
          id={name}
          name={name}
          type={name === 'password' ? (showPassword ? 'text' : 'password') : type}
          value={formData[name]}
          onChange={handleInputChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black'
          required
        />
        {name === 'password' && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
          >
            <EyeIcon className={`h-5 w-5 ${showPassword ? 'text-indigo-600' : 'text-gray-400'}`} />
          </button>
        )}
      </div>
      {name === 'password' && passwordError && (
        <p className='text-xs text-red-500 mt-1'>{passwordError}</p>
      )}
    </div>
  )

  return (
    <div className='w-[456px] px-7 py-8 bg-white rounded-[10px] border border-[#d0d4dd]'>
      <div className='w-[400px] flex-col justify-start items-center gap-8 flex'>
        <div className='w-[400px] h-[34px] flex-col justify-start items-center flex'>
          <h1 className="text-[#101828] text-[28px] font-semibold font-['Urbanist'] leading-[33.60px]">
            WELCOME TO MAMBAX
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className='w-full flex-col justify-start items-center gap-[30px] flex'
        >
          <div className='self-stretch flex-col justify-start items-start gap-6 flex'>
            <div className='w-full flex-col gap-6'>
              {renderInputField('Username', 'username', 'text')}
              {renderInputField('Email', 'email', 'email')}
              {renderInputField('Password', 'password', 'password')}
            </div>
            <div className='w-full flex justify-between gap-4'>
              <button
                type='button'
                className='w-[200px] h-[60px] bg-[#ecf9ff] rounded-[10px] flex items-center justify-center gap-3'
              >
                <TwitterIcon className='w-6 h-6 text-[#1DA1F2]' />
                <span className="text-black text-base font-semibold font-['Urbanist'] leading-normal">
                  Twitter
                </span>
              </button>
              <button
                type='button'
                className='w-[200px] h-[60px] bg-[#f1f2ff] rounded-[10px] flex items-center justify-center gap-3'
              >
                <DiscordIcon className='w-6 h-6 text-[#5865F2]' />
                <span className="text-black text-base font-semibold font-['Urbanist'] leading-normal">
                  Discord
                </span>
              </button>
            </div>
            <button
              type='submit'
              className="w-full h-[55px] px-6 py-4 bg-indigo-600 rounded-lg text-white text-base font-semibold font-['Urbanist'] leading-normal flex justify-center items-center gap-2.5"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'SIGN UP'}
            </button>
            {error && <p className='text-red-600 text-center'>{error}</p>}
          </div>
          <p className='text-center text-gray-700'>
            Already have an account?{' '}
            <Link href='/auth/login' className='text-blue-500 hover:underline'>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignupForm
