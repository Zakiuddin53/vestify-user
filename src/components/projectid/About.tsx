import React from 'react'

interface Project {
  name: string
  description: string
}

function About({ project }: { project: Project }) {
  return (
    <div className='w-full flex-col justify-start items-start gap-2.5 flex'>
      <div className="w-full text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
        About {project.name}
      </div>
      <div className="w-full text-[#18191c] text-lg font-medium font-['Inter'] leading-7">
        Participate in the Universal Investment Platform Token Event
      </div>
      <div className="w-full text-[#2c2c2c] text-[17px] font-normal font-['Urbanist'] leading-normal">
        {project.description}
      </div>
    </div>
  )
}

export default About
