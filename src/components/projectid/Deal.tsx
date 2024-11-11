import React from 'react'
import { ProjectDetails } from '../../lib/api' // Adjust the import path as needed

interface DealProps {
  project: ProjectDetails
}

function Deal({ project }: DealProps) {
  const { socialLink, token } = project

  return (
    <div className='p-5 h-full bg-neutral-100 rounded-[10px] flex-col justify-start items-start gap-[30px] inline-flex'>
      <div className="text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
        Deal Info
      </div>
      <div className='h-full flex-col justify-start items-center gap-5 flex'>
        <div className='self-stretch h-full flex-col justify-start items-start gap-2.5 flex'>
          <div className='self-stretch justify-between items-center inline-flex'>
            <div className="text-[#18191c] text-[17px] font-bold font-['Urbanist'] leading-loose">
              Token price
            </div>
            <div className="text-right text-[#a5a5a5] text-[17px] font-bold font-['Urbanist'] leading-loose">
              {`${project.round} $${token.price}`}
            </div>
          </div>
          <div className='justify-start items-start gap-[89px] inline-flex'>
            <div className="text-[#18191c] text-[17px] font-bold font-['Urbanist'] leading-loose">
              Vesting
            </div>
            <div className="text-right text-[#a5a5a5] text-[17px] font-bold font-['Urbanist'] leading-[33px]">
              {token.vesting}
            </div>
          </div>
        </div>
        <div className='flex-col justify-start items-center gap-2.5 flex'>
          <div className='justify-start items-center gap-2.5 inline-flex'>
            {socialLink.medium && <SocialLink name='Medium' link={socialLink.medium} />}
            {/* Add a website link if available in your data structure */}
            <SocialLink name='Website' link='#' />
          </div>
          <div className='h-full self-stretch justify-start items-center gap-2.5 inline-flex'>
            {socialLink.x && <SocialLink name='Twitter' link={socialLink.x} />}
            {socialLink.telegram && <SocialLink name='Telegram' link={socialLink.telegram} />}
          </div>
        </div>
      </div>
    </div>
  )
}

interface SocialLinkProps {
  name: string
  link: string
}

function SocialLink({ name }: SocialLinkProps) {
  return (
    <div className='px-[15px] py-3 bg-white rounded-lg justify-start items-center gap-[25.34px] flex'>
      <div className='justify-start items-center gap-[16.89px] flex'>
        <div
          className={`w-[42.23px] h-[42.23px] bg-[${getBgColor(name)}] rounded-lg justify-center items-center gap-[0.84px] flex`}
        />
        <div className="text-[#18191c] text-sm font-semibold font-['Urbanist'] leading-tight">
          {name}
        </div>
      </div>
      <div className='w-[13.51px] h-[13.51px] relative' />
    </div>
  )
}

function getBgColor(name: string): string {
  switch (name.toLowerCase()) {
    case 'medium':
      return '#f3f3f3'
    case 'website':
      return '#ffeee8'
    case 'twitter':
      return '#eef9ff'
    case 'telegram':
      return '#eaf7fd'
    default:
      return '#f3f3f3'
  }
}

export default Deal
