import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[25%] border-t border-b border-r border-zinc-600 flex items-center justify-between px-6 py-10 mt-25'>
      <img src={val.url}></img>
      <span>{val.number}</span>
    </div>
  )
}

export default Stripe