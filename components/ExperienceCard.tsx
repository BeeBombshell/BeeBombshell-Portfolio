import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
        <motion.img 
            initial = {{
                y: -100,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="/rainbow-strings.png" 
            alt="Rainbow Strings" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineer at Rowy</h4>
            <p className='font-blod text-2xl mt-1'>Rowy</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='Javascript'/>
                <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='Javascript'/>
                <img className='h-10 w-10' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='Javascript'/>
                {/* Tech Stack used */}
                {/* Tech Stack used */}
                {/* Tech Stack used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... -  Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg h-[200px] overflow-y-scroll'>
                <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
            </ul>
        </div>
    </article>
  )
}
