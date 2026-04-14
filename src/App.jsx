import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Work from './Work'
import Stripes from './Stripes'
import Products from './Products'
import Marquees from './Marquees'
import Cards from './Cards'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';
import CustomCursor from './CustomCursor';

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!isPreloading) {
      setTimeout(() => {
        new LocomotiveScroll();
      }, 800);
    }
  }, [isPreloading]);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {isPreloading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[999] bg-[#161618] flex items-center justify-center pointer-events-none"
          >
            <h1 className="text-4xl text-white font-semibold tracking-tight leading-none flex overflow-hidden">
              {"working...".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.15 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className=' w-full h-full bg-[#161618] pb-10 pt-3 text-white'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default App
