import React, { useState } from 'react'
import { useScroll } from "motion/react"

function Work() {

    const [images,setImages]= useState([
        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top:"55%",
            left:"50%", 
            isActive:false
        },
        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top:"57%", 
            left:"48%", 
            isActive:false
        },
        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top:"53%", 
            left:"52%", 
            isActive:false
        },
        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top:"59%", 
            left:"46%", 
            isActive:false
        },
        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top:"50%", 
            left:"45%", 
            isActive:false
        },
        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png"
            ,top:"62%", 
            left:"55%", 
            isActive:false
        }
        

    ]   );
    
    const {scrollYProgress} = useScroll();

    scrollYProgress.on("change", (data)=>{
        function imagesShow(arr){
            setImages((prev) => 
                prev.map((elem, index)=>
                    arr.indexOf(index) === -1 
                        ? {...elem, isActive:false}
                        : {...elem, isActive:true}
                )
            ); 
        }
        switch (Math.floor(data*100)){
            case 0:
                imagesShow([]);
                break;
            case 3:
                imagesShow([0]);
                break;
            case 4:
                imagesShow([0,1]);
                break;
            case 6:
                imagesShow([0,1,2]);
                break;
            case 7:
                imagesShow([0,1,2,3]);
                break;
            case 8:
                imagesShow([0,1,2,3,4]);   
                break;
            case 9:
                imagesShow([0,1,2,3,4,5]);
                break;
        }
    })

  return (
    <div className='w-full flex relative flex-col items-center mt-17'>
        <div className="max-w-8xl mx-auto text-center">
            <h1 className='text-[40vw] font-semibold leading-none tracking-tight'>work</h1>
        </div>
        <div className='text-zinc-500 text-xl font-semibold mt-4'>
            Web Design, Webflow Development, Creative Development
        </div>
        <div className='images w-full h-full t-0 absolute'>
            {images.map((elem)=>
                (elem.isActive && <img className='w-60 rounded-md absolute translate-x-[-50%] translate-y-[-50%]' src={elem.url} style={{top:elem.top, left:elem.left}}></img>))}
        </div>
    </div>
    
  )
}

export default Work