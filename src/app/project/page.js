import React from 'react'
const Project = () => {
  return (
    <div  className=' h-screen w-full bg-[#0a192f]  text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pt-12 md:p-0' >
          <p className='text-4xl font-bold  inline border-b-4 border-[#f83bff] '> project</p>
          <p className='py-6'> check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
          <div  className='project-bg shadow-lg  shadow-[#040c16]  container rounded-md flex justify-center item-center mx-auto group content-div  w-[250px]'>
            {/* hover effect */}
                <span className='text-2xl pl-6 opacity-0 group-hover:opacity-100 text-black font-bold tracking-wider'>
                    react js applications
                </span>
          </div>
          <div  className='project-bg shadow-lg  shadow-[#040c16]  container rounded-md flex justify-center item-center mx-auto group content-div  w-[250px]'>
            {/* hover effect */}
                <span className='text-2xl pl-6 opacity-0 group-hover:opacity-100 text-black font-bold tracking-wider'>
                    react js applications
                </span>
          </div>
          <div  className='project-bg shadow-lg  shadow-[#040c16]  container rounded-md flex justify-center item-center mx-auto group content-div  w-[250px]'>
            {/* hover effect */}
                <span className='text-2xl pl-6 opacity-0 group-hover:opacity-100 text-black font-bold tracking-wider'>
                    react js applications
                </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project