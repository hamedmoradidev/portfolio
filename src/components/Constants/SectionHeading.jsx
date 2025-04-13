import React from 'react'

export default function SectionHeading({title}) {
  return (
    <h3 className='lg:text-2xl font-bold lg:font-semibold tracking-[10px] border-8 lg:border-6 border-project-black-first w-50 h-20 lg:w-80 lg:h-22 flex items-center justify-center'>{title}</h3>
  )
}
