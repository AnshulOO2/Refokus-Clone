import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-275 flex gap-1 ml-7 mt-60'>
            <Card width={'w-1/3'} start={false} para={true} heading={'Up Next: News'} description={"Insights and behind the scenes"} />
            <Card width={'w-2/3'} start={true} para={false} hover="true" heading={'Get in Touch'} description={"Let's get to it, together."} />
        </div>
    </div>
  )
}

export default Cards