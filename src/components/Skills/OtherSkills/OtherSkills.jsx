import React from 'react'
import English from './images/english.png'
export default function OtherSkills() {
  return (
    <div className='hidden lg:block w-full justify-center lg:justify-start font-project-Montserrat px-5 mt-20'>
        <h4 className='font-bold font-project-Montserrat text-[24px] mb-20'>OTHER SKILLS:</h4>
        <div className='flex justify-start gap-20'>
            <figure className='flex flex-col items-center w-2/3 md:w-1/6'>
                <img src={English} alt="" />
                <h5>ENGLISH B2</h5>
            </figure>
        </div>
    </div> 
  )
}
