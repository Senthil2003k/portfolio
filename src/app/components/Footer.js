
import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 text-sm text-white w-full font-[400] border-t-8 border-slate-900 bg-[#0a192f]'>
        <ul className=' flex items-center justify-evenly my-2'>
                <li><a href='https://github.com/senthil-developer/portfolio'>Source code</a></li>
                <li><a href='https://www.linkedin.com/in/senthil-k-17629824a'>Linkedin</a></li>
                <li><a href="mailto:senthildeveloper4@gmail.com">EMAIL</a></li>
            </ul>
            <ul className='flex justify-center items-center font-[400]'>
                <li>senthilportfolio.vercel.app &#169;2023 All rights reserved</li>
            </ul>
    </footer>
  )
}

export default Footer