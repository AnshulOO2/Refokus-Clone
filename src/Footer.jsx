import React from 'react'

function Footer() {
  return (
    <div className='max-w-5xl mx-auto mt-40 '>
        <div className='text-sm flex gap-45'>
            <div className='text-9xl font-bold pt-3'>
                <h1>refokus.</h1>
            </div>
            <div className='flex gap-15 text-zinc-500'>
                <div className='Socials flex flex-col gap-10 '>
                    <div>
                        <h1>Socials</h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1>Instagram</h1>
                        <h1>Twitter (X?)</h1>
                        <h1>LinkedIn</h1>
                    </div>
                </div>
                <div className='Sitemap flex flex-col gap-10'>
                    <div>
                        <h1 className='text-zinc-500'>Sitemap</h1>
                    </div>
                    <div className='flex flex-col gap-3 text-zinc-200'>
                        <h1>Home</h1>
                        <h1>Work</h1>
                        <h1>Careers</h1>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='flex gap-5 mt-5 text-zinc-400'>
                <a href="#">Privacy Policy</a>
                <a href="#">Cokkie Policy</a>
                <a href="#">Impressum</a>
                <a href="#">Terms</a>
            </div>
        </div>
    </div>
  )
}

export default Footer