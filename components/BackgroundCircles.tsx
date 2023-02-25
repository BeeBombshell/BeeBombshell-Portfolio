import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-purple-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-purple-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-purple-500 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute border border-[#00C1CB] rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52'/>
    </div>
  )
}

export default BackgroundCircles