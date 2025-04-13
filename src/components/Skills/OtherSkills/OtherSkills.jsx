import React from 'react'
import English from './images/english.png'
export default function OtherSkills() {
  return (
    <div className='hidden lg:block w-full justify-center lg:justify-start font-project-Montserrat px-5 mt-20'>
        <h4 className='font-bold font-project-Montserrat text-[24px] mb-20'>OTHER SKILLS:</h4>
        <div className='flex justify-start gap-20'>
            <figure className='flex flex-wrap w-2/3 lg:w-1/6 justify-center items-center gap-5'>
                <img src={English} alt="" />
                <h5 className='text-center w-full'>ENGLISH B2</h5>
            </figure>
        </div>
    </div> 
  )
}
