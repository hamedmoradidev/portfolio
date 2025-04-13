import React from 'react'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
import mail from './images/mail.png'
import arrow from './images/arrow.png'

export default function Footer() {
  return (
    <footer className='bg-project-dark-gray-first flex justify-center flex-wrap *:w-full *:text-center py-15 gap-5'>
        <div className='flex justify-center'>
          <a className='' href="#home"><img src={arrow} alt="" /></a>
        </div>
        <a className='text-4 font-bold font-project-Montserrat' href="#home">BACK TO TOP</a>
        <div className='flex justify-center *:px-2 gap-3 mt-5'>
          <a href="https://www.linkedin.com/in/haamedmoradiidev"><img src={linkedin} alt="" /></a>
          <a href="https://instagram.com/hamed.moradi.dev"><img src={instagram} alt="" /></a>
          <a href="mailto:haameddev@gmail.com"><img src={mail} alt="" /></a>
        </div>
        <p className='text-4 mt-5'><b>@2025 Hamed Moradi </b>All Rights Reserved.</p>
    </footer>
  )
}
