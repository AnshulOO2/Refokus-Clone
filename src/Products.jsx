import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import LayoutVideo from "./assets/Layout-Land.mp4";
import ManivVideo from "./assets/Maniv-Video.mp4";
import CulaVideo from "./assets/Cula-Video.mp4";
import TTRvideo from "./assets/TTR-Video.webm";
import ArqitelVideo from "./assets/Arqitel-Video.webm";

function Products() {

    var items = [
        {
            title: 'Arqitel', 
            desc: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
            live:true
        },
        {
            title: 'Cula', 
            desc:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live:true
        },
        {
            title: 'Layout Land', 
            desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live:true
        },
        {
            title: 'TTR', 
            desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live:true
        },
        {
            title: 'Maniv', 
            desc:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live:true
        },
    ]

   const [pos, setPos] = useState(0);

    const Mover = (val)=>(
        setPos(val*100)
    )

  return (
    <div motion={motion} className='mt-20 relative'>
        {items.map((item, index) => (
            <Product Mover={Mover} key={index} index={index} data={item} />
        ))}
        <div className='absolute w-full h-full top-0 pointer-events-none'>
            <motion.div 
            initial={{y: pos}}
            animate={{y:pos+'%'}}
            transition={{ease:[0, 0.55, 0.45, 1], duration:0.8}}
            className='absolute w-75 h-50 left-[29%] rounded-md overflow-hidden'>
                <motion.div 
                    animate={{y: -pos+'%'}} 
                    transition={{ease:[0, 0.55, 0.45, 1], duration:0.8}} 
                    className=' bg-blue-400 w-75 h-50 left-[29%] rounded-md'>
                        <video 
                            src={ArqitelVideo}
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                </motion.div>

                <motion.div 
                    animate={{y: -pos+'%'}} 
                    transition={{ease:[0, 0.55, 0.45, 1], duration:0.8}} 
                    className=' bg-blue-500 w-75 h-50 left-[29%] rounded-md'>
                        <video 
                            src={CulaVideo}
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                </motion.div>

                <motion.div 
                    animate={{y: -pos+'%'}} 
                    transition={{ease:[0, 0.55, 0.45, 1], duration:0.8}} 
                    className=' bg-blue-600 w-75 h-50 left-[29%] rounded-md'>
                        <video 
                            src={LayoutVideo}
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                </motion.div>
                <motion.div 
                    animate={{y: -pos+'%'}} 
                    transition={{ease:[0, 0.55, 0.45, 1], duration:0.8}} 
                    className=' bg-blue-700 w-75 h-50 left-[29%] rounded-md'>
                        <video 
                            src={TTRvideo}
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                </motion.div>
                <motion.div 
                    animate={{y: -pos+'%'}} 
                    transition={{ease:[0, 0.55, 0.45, 1], duration:0.8}} 
                    className=' bg-blue-800 w-75 h-50 left-[29%] rounded-md'>
                        <video 
                            src={ManivVideo}
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        />
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products