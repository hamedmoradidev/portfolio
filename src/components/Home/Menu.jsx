import React from 'react'

export default function Menu() {
  return (
        <ul className='hidden lg:flex justify-around text-project-white-first w-[600px] *:rounded-3xl *:w-[100px] *:h-[50px] *:flex *:justify-center *:items-center *:font-bold *:text-[17px] *:hover:bg-project-white-first *:hover:text-project-black-first'>
            <li className='flex justify-center align-middle items-center'><a className='w-full h-full flex justify-center items-center' href="#About-me">About Me</a></li>
            <li className='flex justify-center align-middle items-center'><a className='w-full h-full flex justify-center items-center' href="#Skills">Skills</a></li> 
            <li className='flex justify-center align-middle items-center'><a className='w-full h-full flex justify-center items-center' href="#Portfolio">Portfolio</a></li>
            <li className='flex justify-center align-middle items-center'><a className='w-full h-full flex justify-center items-center' href="#Contact-me">Contact Me</a></li>
            <li className='flex justify-center align-middle items-center bg-project-white-first text-project-black-first'><a className='w-full h-full flex justify-center items-center' href="">MY CV</a></li>
        </ul>
  )
}
