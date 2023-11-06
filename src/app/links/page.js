import React from 'react'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Media = () => {
  return (
    <div  className= 'text-white flex-col  h-screen w-full '>

        <div className='hidden lg:flex flex-col justify-center items-center h-full w-full'>
            <p className='text-2xl'>YOU'RE viewing this page on larger device, </p> 
            <p className='text-2xl' >this page only work in <span className='text-red-600'> mobiles </span> and <span className='text-red-600'>  ipads</span></p>
            <p className='text-2xl'>you can see my Hands on left middle-corner  of the screen </p>
        </div>
        
         <div  className='w-full bg-img  h-full flex justify-center lg:hidden items-center'>
          
            <ul>
              <li className='flex hover:scale-125 sm:w-[300px] hover:border-2 hover:border-blue-900 bg-blue-600 justify-between items-center w-[240px] h-[60px] rounded-md my-5'>
                <a  className='flex justify-between items-center w-full text-gray-300 p-2' 
                 href="https://www.linkedin.com/in/senthil-k-17629824a">LinkedIn <FaLinkedin size={30}/> </a>
              </li>
              <li className='flex justify-between hover:scale-125 sm:w-[300px] hover:border-2 hover:border-black bg-black items-center w-[240px] h-[60px] rounded-md my-5'>
                <a  className='flex justify-between items-center w-full text-gray-300 p-2 
                ' href="https://github.com/senthil-developer">Github <FaGithub size={30}/> </a>
              </li>
              <li className='flex justify-between hover:scale-125 sm:w-[300px] hover:border-2 hover:border-green-900 bg-green-600 items-center w-[240px] h-[60px] rounded-md my-5'>
                <a  className='flex justify-between items-center w-full text-gray-300 p-2 
                ' href="mailto:senthildeveloper4@gmail.com">Email <HiOutlineMail size={30}/> </a>
              </li>
              <li className='flex justify-between hover:scale-125 sm:w-[300px] hover:border-2 hover:border-gray-900 bg-gray-600 items-center w-[240px] h-[60px] rounded-md my-5'>
                <a  className='flex justify-between items-center w-full text-gray-300 p-2 
                ' href='/resume.pdf' download>Resume <BsFillPersonLinesFill size={30}/> </a>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Media
