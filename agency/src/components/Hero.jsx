import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        <div className='inline-flex items-center gap-2 border border-black p-1.5 pr-4 rounded-full dark:border-gray-300'>
            <img src={assets.group_profile} className='w-20' alt="group_profile" />
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl'>Turning imagination into <span className='bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.</h1>
        {/*bg-linear-to-r = bg-gradient-to-r */} 
        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaning full connections and turning big ideas into interactive digital experiences</p> 

    </div>
  )
}

export default Hero