import React from 'react'
import { ProjectDetails } from '@/lib/api/projects'

function Profile({
  token,
  project,
}: {
  token: ProjectDetails['token']
  project: Pick<ProjectDetails, 'round' | 'tokensReceived'>
}) {
  return (
    <>
      <div className='justify-start items-start gap-6 inline-flex'>
        <div className='p-[15px] bg-[#f3f3f3] rounded-[10px] flex-col justify-start items-start gap-[15px] inline-flex'>
          <div className="text-black text-[25px] font-extrabold font-['Urbanist'] leading-9">
            ${token.price}
          </div>
          <div className="text-[#6c6c6c] text-base font-semibold font-['Urbanist'] leading-normal">
            {project.round}
          </div>
        </div>
        <div className='p-[15px] bg-[#f3f3f3] rounded-[10px] flex-col justify-start items-start gap-[15px] inline-flex'>
          <div className="text-black text-[25px] font-extrabold font-['Urbanist'] leading-9">
            {project.tokensReceived}
          </div>
          <div className="text-[#6c6c6c] text-base font-semibold font-['Urbanist'] leading-normal">
            Tokens received
          </div>
        </div>
      </div>
      <div className='justify-start items-start gap-6 inline-flex'>
        <div className='p-[15px] bg-indigo-600/10 rounded-lg justify-start items-start gap-[15px] flex'>
          <div className="text-[#574ee9] text-base font-semibold font-['Urbanist'] leading-normal">
            Edit Profile
          </div>
          <div className='w-[13.01px] h-[13px] relative' />
        </div>
      </div>
      <div className='justify-start items-center gap-2.5 inline-flex'>
        <div className='w-[1012.05px] h-[16.08px] relative'>
          <div className='w-[1012.05px] h-[16.08px] left-0 top-0 absolute bg-[#f3f3f3] rounded-[18px]' />
          <div className='w-[543.72px] h-[16.08px] left-0 top-0 absolute bg-gradient-to-r from-[#5047e6] to-[#7068f5] rounded-[18px]' />
        </div>
        <div className="text-black text-[17px] font-bold font-['Urbanist'] leading-normal">50%</div>
      </div>
    </>
  )
}

export default Profile
