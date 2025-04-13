import React from 'react'
import html from './images/html.png'
import css from './images/csslogo.png'
import javascript from './images/javascript.png'
import react from './images/react.png'
import git from './images/git.png'
import tailwind from './images/tailwind.webp'

export default function UsingNow() {
  return (
    <div className='w-full justify-center lg:justify-start font-project-Montserrat px-5 mt-20'>
        <h4 className='font-bold text-center lg:text-left text-3xl md:text-2xl mb-20'>USING NOW:</h4>
        <div className='flex flex-wrap justify-evenly lg:justify-start gap-20 mt-4'>
            <figure className='flex flex-wrap w-2/3 lg:w-1/6 justify-center items-center gap-5'>
                <img src={html} alt="HTML5" className='' />
                <h5 className='text-center w-full'>HTML5</h5>
            </figure>
            <figure className='flex flex-wrap w-2/3 lg:w-1/6 justify-center items-center gap-5'>
                <img src={css} alt="CSS3" className='' />
                <h5 className='text-center w-full'>CSS3</h5>
            </figure>
            <figure className='flex flex-wrap w-2/3 lg:w-1/6 justify-center items-center gap-5'>
                <img src={tailwind} alt="Tailwind CSS" className='' />
                <h5 className='text-center w-full'>TAILWIND CSS</h5>
            </figure>
            <figure className='flex flex-wrap w-2/3 lg:w-1/6 justify-center items-center gap-5'>
                <img src={javascript} alt="JavaScript" className='' />
                <h5 className='text-center w-full'>JAVASCRIPT</h5>
            </figure>
            <figure className='flex flex-wrap w-2/3 lg:w-1/6 justify-center items-center gap-5'>
                <img src={react} alt="React" className='' />
                <h5 className='text-center w-full'>REACT</h5>
            </figure>
            <figure className='flex flex-wrap w-2/3 lg:w-1/6 justify-center items-center gap-5'>
                <img src={git} alt="Git" className='' />
                <h5 className='text-center w-full'>GIT</h5>
            </figure>
        </div>
    </div> 
  )
}
