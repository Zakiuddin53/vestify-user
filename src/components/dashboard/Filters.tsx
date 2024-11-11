export function Filters() {
  return (
    <button className='flex justify-center items-center p-[10px_16px] w-[103px] h-[40px] bg-[#F7F6F9] border border-[#D0D5DD] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] gap-2'>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 10H15M2.5 5H17.5M7.5 15H12.5'
          stroke='#344054'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <span className="font-['Inter'] font-semibold text-[14px] leading-[20px] text-[#344054]">
        Filters
      </span>
    </button>
  )
}
