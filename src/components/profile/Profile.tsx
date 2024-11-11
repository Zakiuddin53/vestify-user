// import React from 'react'
// import Image from 'next/image'

// function Profile({ profile, logo }) {
//   return (
//     <div className='w-[419.26px] h-[131.18px] justify-start items-center gap-[13.70px] inline-flex'>
//       <div className='w-[131.18px] h-[131.18px]  '>
//         <div className='w-[131.18px] h-[131.18px] bg-[#f3f3f3] rounded-xl flex-col justify-center align-center items-center  inline-flex'>
//           <Image src={logo} alt='Profile Image' width='76' height='92' className=' rounded-xl' />
//         </div>
//       </div>
//       <div className='w-[250.26px]   h-[131.18px] flex-col justify-start items-start gap-[18.68px] inline-flex'>
//         <text className=" h-[19px] mb-[6.23px] text-[#303138] text-[27px] font-bold font-['Urbanist'] leading-[52.89px]">
//           {profile?.info?.email}
//         </text>
//         <div className='flex-col justify-start items-start gap-[6.23px] flex'>
//           <div className=' h-[24.90px] p-[6.23px] bg-[#039be5]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
//             <text className="text-[#5865f2] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
//               {profile?.info?.discord}
//             </text>
//           </div>
//           <div className=' h-[24.90px] p-[6.23px] bg-[#5865f2]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
//             <text className="text-[#5865f2] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
//               {profile?.info?.x}
//             </text>
//           </div>
//           <div className='justify-start items-center gap-[6.23px] inline-flex'>
//             <div className=' h-[25.79px] p-[6.23px] bg-[#00b828]/5 rounded-[17.43px] justify-start items-center gap-[11.21px] flex'>
//               <div className=' flex-col justify-start items-center inline-flex' />
//               <div>
//                 <span className="text-[#303138] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
//                   KYC:{' '}
//                 </span>
//                 <span className="text-[#00b828] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
//                   {profile?.info?.kycDone ? 'Approved' : 'pending'}
//                 </span>
//               </div>
//             </div>
//             <div className='w-[14.93px] h-[14.94px] relative' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile
