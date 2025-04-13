import React, { useState } from 'react'
import Menu from './Menu'
import Logo from './images/logo.png'
import LogoMobile from './images/logomobile.png'
import Hamburger from './images/hamburger.png'
import Menumobile from './MenuMobile'
import Close from './images/close.png'
import { useInView } from "react-intersection-observer";

export default function Nav() {
  const { ref, inView} = useInView ({
    threshold: 0,
  })
  const [showMobile, setShowMobie] = useState(false)
  return (
    <>
    <div ref={ref} className='h-1' />
    <nav
        className={`h-[80px] flex items-center justify-between z-50 w-full transition-all duration-100 top-0 right-0 py-7 px-10 lg:py-2 lg:px-30 ${
          inView ? 'lg:absolute lg:mt-10 fixed' : 'fixed bg-project-black-first shadow-md'
        }`}
      > 
        <img className='lg:invisible lg:hidden' src={LogoMobile}></img>
        <img className='invisible hidden lg:block lg:visible' src={Logo} alt="Hamed Moradi Website Logo" />
        <Menu />
        <img onClick={() => setShowMobie(!showMobile)} className='lg:invisible lg:hidden cursor-pointer' src={showMobile ? Close : Hamburger}></img>
    </nav>
    {showMobile && <Menumobile showMobile={showMobile} setShowMobie={setShowMobie} />}
    </>
  )
}
