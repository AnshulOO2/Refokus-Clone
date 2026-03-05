import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";


function Button({title = 'Get Started'}) {
  return (
    <div className='w-38.5 h-9 px-4 py-2 flex items-center justify-between bg-[#F1ECFF] rounded-full text-black'>
        <span className='font-regular text-sm'>{title}</span>
        <BsArrowReturnRight className='inline-block ml-2' />
    </div>
  )
}

export default Button