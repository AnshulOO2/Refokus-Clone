import React from 'react'
import Button from './Button'

function Product({data,index,Mover}) {
  return (
    
    <div className='w-full py-5 h-50 text-white'>
        <div onMouseEnter={()=>{Mover(index)}} className="max-w-6xl max-h-37.5 mx-auto flex items-center justify-between">
            <h1 className='text-4xl font-medium'>{data.title}</h1>
            <div className='w-97 pr-10'>
                <p className='text-medium font-light'>{data.desc}</p>
                <div className='mt-5'>
                    <Button title='Live Website' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product