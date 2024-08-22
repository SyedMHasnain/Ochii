"use client";
import React from 'react'
import {motion} from 'framer-motion'
function Button(props) {
  return (
    <div className='w-full h full'>
      <motion.button whileTap={{scale:0.9}}
      whileHover={{scale:1.1}} 
      className=' w-full h-10  p-3  text-[14px] '  >
      {props.title}
      </motion.button>
    </div>
  )
}

export default Button
