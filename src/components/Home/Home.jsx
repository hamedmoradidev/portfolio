import React from 'react'
import Nav from './Nav'
import Content from './Content'
import me1 from './images/me1.webp'
import me2 from './images/me2.png'


export default function Home() {
  return (
    <>
        <div id='home' className='bg-project-light-gray-home h-lvh text-project-black-first flex justify-start flex-wrap items-center align-middle relative overflow-hidden'>
        <div className='bg-project-black-first h-[2000px] w-[1500px] lg:absolute lg:left-2/5 lg:-top-20 lg:rotate-10 lg:transform-3d'>
        </div>
        <Nav />
        <Content />
        <img className='hidden lg:block z-20 h-4/5 absolute bottom-0 right-40' src={me1} alt="" />
        <img className='lg:hidden z-20 h-4/5 absolute bottom-0 right-0 object-contain' src={me2} alt="" />
        </div>
    </>
  )
}
