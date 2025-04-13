import React from 'react'
export default function MenuMobile({showMobile, setShowMobie}) {
  console.log({showMobile, setShowMobie})
  return (
    <div onClick={() => setShowMobie(false)} className={`${showMobile ? 'fixed top-[80px] left-0 z-30 w-full backdrop-contrast-50 lg:backdrop-filter-none bg-blend-darken text-project-white-first lg:hidden':'hidden'}`}>
      <ul className='w-full'>
      <li className='w-full flex justify-center items-center hover:bg-project-white-first hover:text-project-black-first'><a className='py-3 w-full h-full flex justify-center items-center font-semibold' href="#About-me">About Me</a></li>
      <li className='w-full flex justify-center items-center hover:bg-project-white-first hover:text-project-black-first'><a className='py-3 w-full h-full flex justify-center items-center font-semibold' href="#Skills">Skills</a></li> 
      <li className='w-full flex justify-center items-center hover:bg-project-white-first hover:text-project-black-first'><a className='py-3 w-full h-full flex justify-center items-center font-semibold' href="#Portfolio">Portfolio</a></li>
      <li className='w-full flex justify-center items-center hover:bg-project-white-first hover:text-project-black-first'><a className='py-3 w-full h-full flex justify-center items-center font-semibold' href="#Contact-me">Contact Me</a></li>
      <li className='w-full flex justify-center items-center hover:bg-project-white-first hover:text-project-black-first'><a className='py-3 w-full h-full flex justify-center items-center font-semibold' href="">MY CV</a></li>
      </ul>
    </div>
  )
}
