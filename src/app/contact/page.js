import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center px-4 pt-8 ">
      <form action='https://getform.io/f/e4a4af45-2975-4f24-ab37-35ad9eb37113' method='POST' className='flex flex-col h-full max-w-[600px] w-full'>
          <div className='pt-8'>
            <p className='text-4xl text-white font-bold inline border-b-4 border-[#f83bff]'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me
            <a  className='w-[100px] text-blue-600' href="mailto:senthilk2003k@gmail.com"> E-mail  </a> </p>
          </div>
          <input  className="bg-[#ccd6f6] p-2"type="text" placeholder='Name' name='user_name' required/>
          <input className='my-4  bg-[#ccd6f6] p-2' type="email" placeholder='E-mail' name='user_email' required/>
          <textarea placeholder="Message" className='bg-[#ccd6f6] p-2' required name='message' rows='10'></textarea>
          <button className='text-white border-2 hover:hover:bg-[#f83bff]  hover:border-[#f83bff] p-4 my-8 mx-auto w-30'>contact me</button>
      </form>
    </div>
  )
}

export default Contact