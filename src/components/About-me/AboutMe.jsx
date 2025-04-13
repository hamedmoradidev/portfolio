import React from 'react'
import SectionHeading from '../Constants/SectionHeading'
import Seperator from './images/separatorBlack1.webp'

export default function AboutMe() {
  return (
    <div id='About-me' className='bg-project-light-gray-home text-project-black-first flex justify-center flex-wrap w-full items-center px-6 sm:px-10 2xl:px-[300px] py-16 lg:py-20'>
        <SectionHeading title={"ABOUT ME"} />
        <div className='flex flex-wrap justify-center items-center mt-5 w-full'>
            <p className='w-full px-6 sm:px-10 text-justify lg:text-center my-5 sm:text-[14px]'>
                I focus on writing clean, purposeful code, designing with user needs in mind, and constantly evolving to stay ahead in tech. Each project is an opportunity to create meaningful, scalable solutions.
            </p>
            <span className='border-x-3 w-[200px] h-[50px] font-semibold text-[15px] p-5 flex justify-center items-center mt-3 lg:mt-10 font-project-Montserrat my-20'>
                EXPLORE
            </span>
            <div className='flex justify-center w-full mb-16 lg:mb-32'>
                <img src={Seperator} alt="" />
            </div>
        </div>
        <div className='flex justify-center flex-wrap'>
            <div className='w-full sm:w-1/2 h-[250px] px-6 sm:px-10'>
                <h4 className='text-[22px] font-bold font-project-Montserrat mb-5'>Code with Purpose</h4>
                <p>
                    I write clean, maintainable code that others can read, understand, and build on with ease. For me, code should be a solid foundation — not a puzzle to solve.
                </p>
            </div>
            <div className='w-full sm:w-1/2 h-[250px] px-6 sm:px-10'>
                <h4 className='text-[22px] font-bold font-project-Montserrat mb-5'>User-Centered Thinking</h4>
                <p>
                    I design with empathy, focusing on the real needs of users and turning them into smooth, intuitive experiences. I believe functionality means little without usability.
                </p>
            </div>
            <div className='w-full sm:w-1/2 h-[250px] px-6 sm:px-10'>
                <h4 className='text-[22px] font-bold font-project-Montserrat mb-5'>Always Evolving</h4>
                <p>
                    I constantly learn and explore new tools to stay ahead. Growing beyond my current limits is part of my daily mindset.
                </p>
            </div>
        </div>
        <div className='flex justify-center w-full'>
            <img src={Seperator} alt="" />
        </div>
    </div>
  )
}
