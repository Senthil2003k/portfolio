"use client";

import {useState} from 'react'
import logo from '../assets/logo.png'
import {FaBars,FaTimes ,FaLinkedin,FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';



const Navbar = () => {
  const router = usePathname();
  const [nav, setNav] = useState(false)
  const handleCLick =  () => setNav(!nav);
  return(
    <div className='  z-10 text-white sticky top-0 w-full h-[60px]  px-4 flex items-center justify-between'>
        <div>
          <Image  style={{width:"50px"}}  src={logo} alt='logo'/>
        </div>
          <ul className='hidden md:flex' >
                  <li className='media'><Link href="/">Home</Link></li>
                  <li className='media'><Link href="/about" className={router === "/about" ? " underline-offset-8 underline decoration-4  decoration-[#f83bff]" : '' }>About</Link></li>
                  <li className='media'><Link href="/skill" className={router === "/skill" ? " underline-offset-8 underline decoration-4  decoration-[#f83bff]" : '' }>Skills</Link></li>
                  <li className='media'><Link href="/project" className={router === "/project" ? " underline-offset-8 underline decoration-4  decoration-[#f83bff]" : '' }>Project</Link></li>
                  <li className='media'><Link href="/contact" className={router === "/contact" ? " underline-offset-8 underline decoration-4  decoration-[#f83bff]" : '' }>Contact</Link></li>
          </ul>

        {/* hamburger*/}
        <div onClick={handleCLick} className='md:hidden  z-10'>
          {nav ?<FaTimes/>: <FaBars/> } 
        </div >


        {/* mobile menu */}
        <ul className= {!nav ? 'hidden': 
          ' absolute top-0 left-0 w-full h-screen bg-black flex flex-col  justify-center items-center'} > 
          <li onClick={handleCLick}  className='py-6 text-4xl media'><Link href="/">Home</Link></li>
          <li onClick={handleCLick}  className='py-6 text-4xl media'><Link href="/about">About</Link></li>
          <li onClick={handleCLick}  className='py-6 text-4xl media'><Link href="/skill">Skills</Link></li>
          <li onClick={handleCLick}  className='py-6 text-4xl media'><Link href="/project">Project</Link></li>
          <li onClick={handleCLick}  className='py-6 text-4xl media'><Link href="/contact">Contact</Link></li>
          <li onClick={handleCLick}  className='py-6 text-4xl media'><Link href="/links">My Hands</Link></li>
      </ul> 

      
        {/*social icons*/}
        <div className= ' hidden  lg:flex fixed  flex-col top-[35%] left-0  '>
            <ul>
              <li className='flex justify-between items-center w-[160px] media h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a  className='flex justify-between items-center w-full text-gray-300 ' href="https://www.linkedin.com/in/senthil-k-17629824a">LinkedIn <FaLinkedin size={30}/> </a>
              </li>
              <li className='flex justify-between items-center w-[160px] media h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                <a  className='flex justify-between items-center w-full text-gray-300 ' 
                href="https://github.com/senthil-developer">Github <FaGithub size={30}/> </a>
              </li>
              <li className='flex justify-between items-center w-[160px] media h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                <a  className='flex justify-between items-center w-full text-gray-300 ' href="mailto:senthildeveloper4@gmail.com">Email <HiOutlineMail size={30}/> </a>
              </li>
              <li className='flex justify-between items-center w-[160px] media h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                <a  className='flex justify-between items-center w-full text-gray-300 ' href='/resume.pdf' download>Resume <BsFillPersonLinesFill size={30}/> </a>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
