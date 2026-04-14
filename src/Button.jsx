import React from 'react'
import { BsArrowReturnRight, BsArrowRight } from "react-icons/bs";


function Button({title = 'Get Started'}) {
  return (
    <div className='w-38.5 h-9 px-4 py-2 flex items-center justify-between bg-[#F1ECFF] rounded-full text-black group cursor-pointer'>
        <span className='font-regular text-sm'>{title}</span>
        <div className='relative w-4 h-4 overflow-hidden ml-2 flex items-center justify-center'>
            <BsArrowReturnRight className='absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full' />
            <BsArrowRight className='absolute transition-all duration-300 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0' />
        </div>
    </div>
  )
}

export default Button