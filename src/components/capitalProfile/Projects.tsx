import React from 'react'
import { useRouter } from 'next/navigation'

function Projects({ profile }: { profile: any }) {
  const router = useRouter()
  return (
    <div className='w-full self-stretch h-[409.50px] flex-col justify-start items-start gap-[30px] flex'>
      <div className="text-[#18191c] text-[25px] font-bold font-['Urbanist'] leading-7">
        Last 5 projects
      </div>
      <div className='w-full self-stretch h-[351.50px] flex-col justify-between items-start gap-5 flex'>
        <div className='w-full h-[31.50px] relative'>
          <div className='w-full '>
            <div className='w-full h-auto relative grid grid-cols-8 items-center text-[#afafaf] text-[15px] font-semibold gap-[10px]'>
              <div className='col-span-2'> Project Name</div>
              <div> Pledge Amount</div>
              <div> Market Cap</div>
              <div> Top Gainers</div>
              <div> Raised Amount</div>
              <div> Ongoing Claim</div>
              <div></div>

              {/* <br className="h-[1px] bg-gray w-full "></br> */}

              {profile?.projects.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <div className='h-[55.36px] col-span-2 flex justify-start items-center'>
                    <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9]' />
                    <div className=" ml-4 text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                      {item?.name}
                    </div>
                  </div>
                  <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    {item?.pledgeAmount}
                  </div>
                  <div className=''>
                    <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                      {item?.marketCap}
                    </div>
                  </div>
                  <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    43
                  </div>
                  <div className=''>
                    <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                      {item.raisedAmount}
                    </span>
                  </div>
                  <div className=''>
                    <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                      {item.ongoingClaim}
                    </span>
                  </div>
                  <div className=''>
                    <div className='w-24 h-[35px] p-2.5 bg-[#443cc4] rounded-[28px] justify-center items-center gap-2.5 inline-flex'>
                      <button
                        className="text-white text-sm font-semibold font-['Urbanist'] capitalize tracking-tight"
                        onClick={() => {
                          router.push('/deal')
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
