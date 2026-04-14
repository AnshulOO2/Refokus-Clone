import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='fixed left-[50%] z-50 bg-[#161618] top-0 translate-x-[-50%] w-5xl pt-3 pb-6 flex items-center justify-between border-b border-zinc-600'>
      <div className="nleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt='refokus logo'></img>
        <div className='links flex gap-15 ml-22 font-light'>
            {['Home','Work','Careers',"",'News'].map((elem, index)=>(
                    elem.length === 0 ? <span className='w-[0.5px] h-5 bg-zinc-600' ></span>: (<a className='text-sm font-regular items-center' key={elem} href='#'>
                    {index === 1 ? (<span style={{boxShadow:"0 0 0.5em #00FF19"}} className='w-1.5 h-1.5 rounded-full bg-[#00FF19] mb-0.5 inline-block mr-1'></span>) : null}
            {elem}</a>)))}
        </div>
      </div>
      <div className="nright">
          <Button />
      </div>
    </div>
  )
}

export default Navbar