import React from 'react'
import SectionHeading from '../Constants/SectionHeading'
import UsingNow from './UsingNow/UsingNow'
import OtherSkills from './OtherSkills/OtherSkills'
import Learning from './Learning/Learning'
export default function Skills() {
  return (
    <div id='Skills' className='bg-project-light-gray-home text-project-black-first flex justify-center flex-wrap items-center w-full sm:px-10 md:px-[300px] py-24'>
        <SectionHeading title={"SKILLS"} />
        <UsingNow />
        <Learning />
        <OtherSkills />
    </div>
  )
}
