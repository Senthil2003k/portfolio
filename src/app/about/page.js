import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f83bff]'>
                        About
                    </p>
                </div>
                <div>
                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 px-4 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm senthil, nice to meet you. please take a look around.</p>
                    </div>
                    <div>
                        <p>Aspiring front-end developer with a solid grasp of HTML, CSS, and JavaScript. Eager to learn and passionate about creating engaging and interactive web interfaces. Adept at using modern front-end frameworks such as ReactJS and NextJS to build responsive web applications. Excited to embark on a journey to contribute to innovative web projects.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About