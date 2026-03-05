import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from './Button';
import { motion } from 'framer-motion';

function Card({width, start, para, heading, description,hover="false"}) {
  return (
    <motion.div motion={motion} whileHover={{backgroundColor: hover === "true" ? "#7443ff" : "#52525B" ,paddingLeft: "25px"}} className={`w-1/2 bg-zinc-800 pt-5 pr-5 pl-5 pb-3 flex flex-col justify-between rounded-xl ${width}`}>
      <div className='w-full'> 
        <div className='w-full flex justify-between items-center text-medium font-semibold'>
          <h4>{heading}</h4>
          <FaLongArrowAltRight />
        </div>
        <h1 className={`text-xl mt-3 font-semibold ${para ? 'w-50':'w-60'}`}>{description}</h1>
      </div>
      <div className='w-full mt-25'>
          {
          start === true ? 
            <> 
            <h1 className='text-[80px] font-semibold mb-2'>Start a Project</h1>
            <Button title={'Contact Us'} />
            </>:null
          }
          {
          para === true ?
            <>
            <p className='mt-3 text-zinc-400'>Explore what drives our team.</p>
            </>:null
          }
      </div>
    </motion.div>
  )
}

export default Card