import { FiSearch } from 'react-icons/fi'

export function Search() {
  return (
    <div className='flex items-center'>
      <div className='w-10 h-10 flex items-center justify-center mr-2'>
        <FiSearch className='text-[#475569] text-xl' />
      </div>
      <input
        type='text'
        placeholder='Search'
        className='box-border w-[174px] h-[40px] px-4 py-2 rounded-[1234px] border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm font-bold font-["Plus_Jakarta_Sans"] text-[#475569] tracking-[-0.006em]'
      />
    </div>
  )
}
