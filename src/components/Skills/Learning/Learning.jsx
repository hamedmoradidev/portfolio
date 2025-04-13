import React from 'react'
import Next from './images/next.webp'
import Typescript from './images/typescript.png'

export default function Learning() {
  return (
    <div className='hidden lg:block w-full justify-center lg:justify-start font-project-Montserrat px-5 mt-20'>
        <h4 className='font-bold font-project-Montserrat text-[24px] mb-20'>LEARNING:</h4>
        <div className='flex flex-wrap justify-start gap-20 mt-4'>
            <figure className='flex flex-col items-center w-2/3 md:w-1/6'>
                <img src={Next} alt="Next.js" className='w-16 h-16 object-contain mb-2' />
                <h5 className='text-center'>NEXT.JS</h5>
            </figure>
            <figure className='flex flex-col items-center w-2/3 md:w-1/6'>
                <img src={Typescript} alt="TypeScript" className='w-16 h-16 object-contain mb-2' />
                <h5 className='text-center'>TYPESCRIPT</h5>
            </figure>
        </div>
    </div> 
  )
}
