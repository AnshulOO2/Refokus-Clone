import { motion } from 'framer-motion'
import React from 'react'

function Marquee({images, direction}) {
  return (
    <div motion={motion} className='flex w-full whitespace-nowrap gap-20 overflow-hidden'>

        <motion.div 
          initial={{x:direction === 'left' ? "0" : "-100%"}} 
          animate={{x:direction === 'left' ? "-100%" : "0"}} 
          transition={{ease:'linear', duration:13, repeat: Infinity}}

          className='flex shrink-0 gap-20 py-6'>
              {images.map(url => (
                <img src={url} className='h-7' />
              ))}

        </motion.div>


        <motion.div 

        initial={{x:direction === 'left' ? "0" : "-100%"}} 
          animate={{x:direction === 'left' ? "-100%" : "0"}} 
          transition={{ease:'linear', duration:13, repeat: Infinity}}

          className='flex shrink-0 gap-20 py-6'>
              {images.map(url =>( 
                <img src={url} className='h-7' />
              ))}

        </motion.div>
    </div>
  )
}

export default Marquee