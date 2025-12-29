import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        <div inline-flex >
            <img src={assets.group_profile} className='w-20' alt="group_profile" />
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </div>

    </div>
  )
}

export default Hero