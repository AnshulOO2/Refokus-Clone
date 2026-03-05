import React from 'react'
import Navbar from './Navbar'
import Work from './Work'
import Stripes from './Stripes'
import Products from './Products'
import Marquees from './Marquees'
import Cards from './Cards'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const scroll = new LocomotiveScroll();

  return (
    <div scroll={scroll} className=' w-full h-full bg-[#161618] pb-10 pt-3 text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
