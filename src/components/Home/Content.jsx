import React from 'react'
import email from './images/email.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import githubwhite from './images/githubwhite.png'
import emailwhite from './images/emailwhite.png'
import linkedinwhite from './images/linkedinwhite.png'

export default function Content() {

  return (
    <div className='font-project-Raleway w-full lg:flex-wrap lg:w-1/2 lg:mx-30 lg:mt-20 z-30 absolute lg:static bottom-0 left-0 lg:px-0 px-10 py-20 flex justify-between items-baseline-last lg:items-center backdrop-contrast-75 lg:backdrop-filter-none bg-blend-darken'>
        <div className='flex flex-wrap gap-2'>
        <p className='w-full text-3xl lg:text-4xl 2xl:text-[58px] font-bold text-white lg:text-project-black-first z-50'>Hi, I am</p>
        <h1 className='w-full text-4xl lg:w-6xl 2xl:text-[80px] font-bold text-white lg:text-project-black-first z-50'>Hamed Moradi</h1>
        <h2 className='w-full text-[15px] lg:text-[20px] 2xl:text-[25px] font-bold 2xl:font-extrabold text-project-white-first lg:text-project-dark-gray-third z-50'>Front-end Developer / Software Engineer</h2>
        </div>
        <div className='flex w-1/2 flex-col gap-5 justify-center items-end lg:hidden'>
          <a href="mailto:haameddev@gmail.com"><img src={emailwhite} alt="" /></a>
          <a href="https://github.com/hamedmoradidev"><img src={githubwhite} alt="" /></a>
          <a href="https://www.linkedin.com/in/haamedmoradiidev"><img src={linkedinwhite} alt="" /></a>
        </div>
        <div className='mt-20 *:mr-5 *:shadow-[0px_10px_10px_0px_rgba(50,_50,_93,_0.25)] hidden w-full lg:flex'>
            <div className='w-[61px] h-[56px] text-project-white-first lg:bg-project-dark-gray-second flex justify-center items-center'>
                <a href="mailto:haameddev@gmail.com"><img src={email} alt="" /></a>
            </div>
            <div className='w-[61px] h-[56px] text-project-white-first lg:bg-project-dark-gray-second flex justify-center items-center'>
                <a href="https://github.com/hamedmoradidev"><img src={github} alt="" /></a>
            </div>
            <div className='w-[61px] h-[56px] text-project-white-first lg:bg-project-dark-gray-second flex justify-center items-center'>
            <a href="https://www.linkedin.com/in/haamedmoradiidev"><img src={linkedin} alt="" /></a>
            </div>
        </div>
    </div>

  )
}
