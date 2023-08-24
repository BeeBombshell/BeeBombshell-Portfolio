import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* Projects */}
            {/* Projects */}
            {/* Projects */}
        </div>

        <div className='w-full absolute top-[30%] bg-[#00C1CB]/10 left-0 h-[500px] -skew-y-12'> 
        </div>
    </div>
  )
}

export default Projects