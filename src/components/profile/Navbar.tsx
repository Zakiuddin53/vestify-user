import React from 'react'

function Navbar() {
  return (
    <div className='self-stretch justify-between items-center inline-flex'>
      <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-3 flex'>
        <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
          Search Investors, allocations, deals..
        </div>
        <div className='w-[18px] h-[18px] relative' />
      </div>
      <div className='justify-start items-center gap-2.5 flex'>
        <div className='w-[15.36px] h-[15.36px] bg-[#3ede8b] rounded-full shadow' />
        <div className="text-[#303138] text-sm font-medium font-['Inter'] leading-7 ml-2">
          0x8855.,87a4
        </div>
      </div>
    </div>
  )
}

export default Navbar
