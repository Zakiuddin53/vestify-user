import React from 'react'
import Image from 'next/image'
import { VCProfileByID } from '@/lib/api'
import discordicon from '../../../public/Discord.svg'

interface ProfileProps {
  profile: VCProfileByID | null
}

function Profile({ profile }: ProfileProps) {
  console.log(profile)
  return (
    <div className='w-full self-stretch h-[291.32px] flex-col justify-start items-start gap-[21.34px] flex'>
      <div className='w-full justify-between items-start gap-[25.61px] inline-flex'>
        <div className='w-[316.50px] h-[139.05px] relative'>
          <div className='w-[316.50px] h-[139.05px] left-0 top-0 absolute bg-[#f8f8f8] rounded-3xl border border-black/10' />
          <div className='w-[250.53px] h-[73.21px] left-[32.99px] top-[32.92px] absolute justify-start items-center gap-[20.06px] inline-flex'>
            <img
              src={profile?.logoBase64}
              className='w-[73.21px] h-[73.21px] bg-[#bad7ff] rounded-full'
              alt={profile?.name || 'Profile logo'}
            />
            <div className="text-[#18191c] text-[35px] font-bold font-['Urbanist'] leading-[46.12px]">
              {profile?.name}
            </div>
          </div>
        </div>
        <div className='w-[271.45px] h-[139.75px] relative'>
          <div className='w-[271.45px] h-[139.75px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10' />
          <div className="left-[20.69px] top-[20.29px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
            KYC Status
          </div>
          {profile?.kycDone ? (
            <div className='h-[49.09px] p-[16.05px] left-[60px] top-[60.65px] absolute bg-[#00b800]/5 rounded-lg justify-start items-center gap-2 inline-flex'>
              <div className="text-[#00ea00] text-2xl font-semibold font-['Urbanist'] leading-[32.81px]">
                Approved
              </div>
            </div>
          ) : (
            <div className='h-[49.09px] p-[16.05px] left-[60px] top-[60.65px] absolute bg-[#b80000]/5 rounded-lg justify-start items-center gap-2 inline-flex'>
              <div className="text-[#ea0000] text-2xl font-semibold font-['Urbanist'] leading-[32.81px]">
                Required
              </div>
            </div>
          )}
        </div>
        <div className='w-[276.89px] h-[139.75px] bg-[#f8f8f8] rounded-[20.29px] border border-black/10'>
          <div className="p-5 flex-col justify-between h-full w-full  inline-flex text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
            <span>Social Media:</span>
            <div className='flex gap-5 py-4 flex-row justify-start items-start '>
              <Image className='w-[30.57px] h-[23.57px] ' alt='' src={discordicon} />
              <Image className='w-[30.57px] h-[23.57px] ' alt='' src={discordicon} />
            </div>
          </div>
        </div>
        <div className='w-[354.31px] h-[124.31px] relative'>
          <div className='w-[354.31px] h-[124.31px] left-0 top-0 absolute bg-[#fff9f4] rounded-[26.99px] border border-[#e5bf46]/10' />
          <div className="left-[20.52px] top-[20.31px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
            Fund Size
          </div>
          <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
            $1,00,000
          </div>
        </div>
      </div>

      <div className='w-full justify-between items-center gap-[21.34px] inline-flex'>
        <div className='w-[401.71px] h-[124.31px] relative'>
          <div className='w-[401.71px] h-[124.31px] left-0 top-0 absolute bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10' />
          <div className='h-[82.69px] left-[20.52px] top-[20.31px] absolute flex-col justify-start items-start gap-[29.88px] inline-flex'>
            <div className="text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
              Tags
            </div>
            <div className='self-stretch justify-start items-center gap-[8.54px] inline-flex'>
              {profile?.tags.map((tag, index) => (
                <div
                  key={index}
                  className='px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex'
                >
                  <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-[274.17px] h-[130.23px] relative'>
          <div className='w-[274.17px] h-[130.23px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10' />
          <div className="left-[20.78px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
            Last project ROI
          </div>
          <div className='w-[81.76px] h-[82.61px] left-[174.28px] top-[20.70px] absolute'>
            <div className='w-[81.34px] h-[82.18px] left-0 top-[0.42px] absolute rounded-full border-8 border-white' />
            <div className='w-[81.34px] h-[82.18px] left-[0.42px] top-0 absolute rounded-full border-8 border-[#46d5e5]' />
          </div>
          <div className="left-[20.78px] top-[65.83px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-[38.92px]">
            32%
          </div>
        </div>
        <div className='w-[286.19px] h-[130.23px] relative'>
          <div className='w-[286.19px] h-[130.23px] left-0 top-0 absolute bg-[#039be5]/5 rounded-[20.29px] border border-[#039be5]/20' />
          <div className="left-[24.83px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
            Average ROI
          </div>
          <div className='w-[224.97px] h-[0px] left-[30.17px] top-[96.25px] absolute'></div>
          <div className="left-[199.96px] top-[20.31px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-7">
            72%
          </div>
        </div>
        <div className='w-[269.89px] h-[130.23px] relative'>
          <div className='w-[269.89px] h-[130.23px] left-0 top-0 absolute bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10' />
          <div className="left-[20.52px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
            Subscription price
          </div>
          <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
            $ {profile?.subscriptionFee}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
