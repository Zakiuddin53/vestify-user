// import React from 'react'

// function Deals({ profile }) {
//   return (
//     <div className='w-[100%] h-[494.95px] flex-col justify-start items-center gap-[30px] flex'>
//       <div className='self-stretch h-12 flex-col justify-start items-start flex'>
//         <div className='justify-center items-start gap-[39px] inline-flex'>
//           <div className=' p-[10px] bg-[#f7f7ff] rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 flex'>
//             <div className='justify-center items-center  flex'>
//               <div className="text-[#7870fc] text-lg font-semibold font-['Urbanist'] capitalize">
//                 deals
//               </div>
//             </div>
//           </div>
//           <div className='p-[10px] justify-center items-center flex'>
//             <div className="text-[#505050] text-lg font-semibold font-['Urbanist'] capitalize">
//               Compliance
//             </div>
//           </div>
//         </div>
//         <div className='w-full h-[0px] relative'>
//           <div className='w-full h-[0px] left-0 top-0 absolute border border-[#e1e1e1]'></div>
//           <div className='w-[75px] h-[0px] left-0 top-0 absolute border-2 border-[#7870fc]'></div>
//         </div>
//       </div>

//       <div className='w-full px-[20px]  flex-col justify-start items-end gap-[30px] flex'>
//         <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-20 inline-flex'>
//           <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
//             Search deals..
//           </div>
//           <div className='w-[18px] h-[18px] relative' />
//         </div>

//         <div className='w-full '>
//           <div className='w-full h-auto relative grid grid-cols-8 items-center text-[#afafaf] text-[15px] font-semibold gap-[10px]'>
//             <div className='col-span-2'>Deal</div>
//             <div>Allocation</div>
//             <div>Tokens received</div>
//             <div>Receiving EVM</div>

//             <div>Contributed</div>
//             <div>Refunded</div>
//             <div>OTC</div>

//             {profile?.dealsSummary?.map((item, index) => (
//               <React.Fragment key={index}>
//                 <div className='h-[55.36px] col-span-2 flex justify-start items-center'>
//                   <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
//                   <div className=" ml-4 text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                     {item.projName}
//                   </div>
//                 </div>
//                 <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                   {item.allocation}
//                 </div>
//                 <div className=''>
//                   <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
//                     {item.tokenRecvd}
//                   </div>
//                   {/* <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
//                   165.67 UNI
//                 </div> */}
//                 </div>
//                 <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                   {/* {item.recEvm} */}
//                   Error
//                 </div>
//                 <div className=''>
//                   <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                     {item.transaction.contributed.amount}
//                   </span>
//                   <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                     {' '}
//                     {item.transaction.contributed.count}
//                   </span>
//                 </div>
//                 <div className=''>
//                   <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                     {item.transaction.refunded.amount}
//                   </span>
//                   <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                     {' '}
//                     {item.transaction.refunded.count}
//                   </span>
//                 </div>
//                 <div className=''>
//                   <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                     {item.transaction.otc.amount}
//                   </span>
//                   <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
//                     {' '}
//                     {item.transaction.otc.count}
//                   </span>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Deals
