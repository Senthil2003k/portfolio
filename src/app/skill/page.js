import React from 'react'
import html from '@/assets/html.png'
import css3 from '../assets/css-3.png'
import github from '../assets/github.png'
import js from '../assets/js.png'
import tailwindcss from '../assets/tailwindcss.svg'
import react_img from '../assets/react.png'
import Image from 'next/image'

const Skill = () => {
  return (
    <div name='skill' className=' w-full h-screen bg-[#0a192f] text-white'>
      {/* container */}
      <div className='max-w-[1000px] mx-[auto]  my-[auto]  flex flex-col justify-evenly w-full h-full'>
        <div className='pt-20 pl-4  md:pt-[60px] ' > 
          <p className='text-4xl font-bold pt-4 inline border-b-4 border-[#f83bff]'>
              Skills
          </p>
          <p className='pt-4 pl-4'>// these are the technologies I've have experiences</p>
        </div>
        
        <div className=' grid grid-cols-2 sm:grid-cols-3  text-center '>
          <div className='shadow-md   shadow-[#040c16] hover:scale-110 duration-500 p-3 m-3'>
            <Image className='w-20 mx-auto' src={html}  alt="HTML ICON" />
            <p className='pt-2'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3 m-3'>
            <Image className='w-20 mx-auto' src={css3}  alt="CSS ICON" />
            <p className='pt-2'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3 m-3'>
            <Image className='w-20 mx-auto' src={js}  alt="JAVASCRIPT ICON" />
            <p className='pt-2'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3 m-3'>
            <Image className='w-20 mx-auto' src={react_img}  alt="REACT JS ICON" />
            <p className='pt-2'>REACT JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3 m-3'>
            <Image className='w-[8rem] mx-auto' src={tailwindcss}  alt="TAILWIND CSS ICON" />
            <p className='pt-2'>TAILWIND CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3 m-3'>
            <Image className='w-20 mx-auto ' src={github}  alt="GITHUB ICON" />
            <p className='pt-2'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill