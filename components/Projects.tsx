import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project) => (
              <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <img
                  src={`https://camo.githubusercontent.com/cbd55750b53c01dc18830d377c7364b01077e8a675a79d454a3f1ea549efe129/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646f636b65722f646f636b65722d6f726967696e616c2e737667`}
                  alt='project'
                />

                <div><h4>Case Study 1 of 3: UPS Clone</h4></div>
              </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#00C1CB]/10 left-0 h-[500px] -skew-y-12'> 
        </div>
    </div>
  )
}

export default Projects