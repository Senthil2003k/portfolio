import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Link from 'next/link'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
           {/* Container */}
           <div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full text-white'>
              <p className=' text-[#f83bff]  '>Hi, my name is </p>
              <h1 className='text-4xl sm:text-5xl text-gray-200 font-bold '>SENTHIL</h1>
              <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'> I'm a <span class='bg-[#8892b080] text-gray-300'>FRONTEND</span> Developer.</h2>
              <p className='text-[#8892b0] py-4 max-w-[700px]' >I'm a FRONTEND Developer specializing in building (and occasionally designing) expectional digital experiences. Currently, I'm focused on building responsive FRONTEND web applications </p>
           
           <div className='flex '>
              <Link href='/project' className='text-white group border-2 px-6 py-3 my-2 mr-5 flex items-center  w-fit hover:bg-[#f83bff] hover:border-[#f83bff] '>View project
                <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3 '/> 
                </span> 
              </Link>
              <Link href='/links' className='text-white group border-2 px-6 py-3 my-2 flex items-center lg:hidden w-fit hover:bg-[#f83bff] hover:border-[#f83bff] '>My Hands
                <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3 '/> 
                </span> 
              </Link>              
           </div>
           </div>
    </div>
  )
}

export default Home