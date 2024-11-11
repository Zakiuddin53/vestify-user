import React from 'react'

interface PartnerProps {
  partnersAndInvestors: Array<{
    name: string
    logoBase64: string
  }>
}

function Partner({ partnersAndInvestors }: PartnerProps) {
  return (
    <>
      <div className='w-full h-[0px] border border-[#18191c]/20'></div>
      <div className='w-full p-[30px] bg-[#f8f8f8] rounded-lg flex-col justify-start items-center gap-[30px] flex'>
        <div className="w-full text-center text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
          Partners and Investors
        </div>
        <div className='self-stretch justify-center items-center gap-[85px] flex flex-wrap'>
          {partnersAndInvestors.map((partner, index) => (
            <img
              key={index}
              className='w-[124.27px] h-[25px] object-contain'
              src={partner.logoBase64}
              alt={partner.name}
            />
          ))}
        </div>
      </div>
      <div className='w-full px-2.5 py-5 bg-indigo-600/10 rounded-lg justify-center items-center gap-2.5 inline-flex'>
        <div className="text-indigo-600 text-xl font-bold font-['Urbanist'] leading-[29px]">
          Join the Universal SEED round today at $2 per token.
        </div>
      </div>
      <div className='w-full flex-col justify-start items-start gap-2.5 flex'>
        <div className="w-full text-[#18191c] text-lg font-medium font-['Inter'] leading-7">
          Sale details
        </div>
        <div className="w-full text-[#2c2c2c] text-[17px] font-normal font-['Urbanist'] leading-normal">
          Seed Sale starts on the 2nd of June 2024.
          <br />
          Continues until the maximum token allocation is reached or the end of August 2024. • A
          total of 250.000 tokens for sale in this raise.
          <br />
          Minimum purchase amount: $500.
        </div>
      </div>
      <div className='w-full flex-col justify-start items-start gap-2.5 flex'>
        <div className="w-full text-[#18191c] text-lg font-medium font-['Inter'] leading-7">
          Investment rounds
        </div>
        <div className="w-full text-[#2c2c2c] text-[17px] font-normal font-['Urbanist'] leading-normal">
          Founding Team: | $1/token | 12 month lock. Linear release over 36 months.
          <br />
          Seed Round: | $2/token | 6 month lock-up period. Linear release over 24 months.
          <br />
          Strategic Round: | $3/token | 9-month lock-up period. Linear release over 18 months.
          <br />
          Ecosystem Development: Linear release over 24 months.
        </div>
      </div>
    </>
  )
}

export default Partner
