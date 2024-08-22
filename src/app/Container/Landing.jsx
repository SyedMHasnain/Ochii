"use client";
import Image from 'next/image';
import React from 'react'
import "animate.css";
import { MdArrowOutward } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeIn } from 'framer-motion/dom';

//animate__fadeInLeft
function Landing() {
   
  return (
    <div className=" headingfont w-full  flex flex-col  bg-zinc-900 pt-1  ">
      <div className=' flex flex-col   mt-3  ml-8   w-5/6 font-["Founders_Grotesk"] mt-60 '>
        <h1 className='  headingfont text-7xl font-["Founders_Grotesk"]'>
          WE CREATE
        </h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.1 }}
          className="headingfont font-['Founders_Grotesk'] text-7xl   ">
          EYE-OPENING
        </motion.h1>
        <h1 className='headingfont text-7xl font-["Founders_Grotesk"]'>
          PRESENTATIONS
        </h1>
      </div>
      <div className='ml-16 mt-40  head text-[6vw] leading-[5.5vw]  font-["Founders_Grotesk"] '>
       
      </div>

      <div className="headingfont">
        <hr />
        <div className=" flex flex-wrap justify-between  align-middle px-6 py-3 ">
          {[
            "For publice and private companies",
            "From the first pitch to IPO",
          ].map(function (item, index) {
            return (
              <h4
                key={index}
                className="font-['Founders_Grotesk'] mt-3 mr-22 text-base  font-light tracking-tight leading-none text-md">
                {item}
              </h4>
            );
          })}
          <div className="landing-footer    flex gap-4 justify-center align-middle  ">
            <h2 className=" border-[0.1vw] p-2  text-sm rounded-3xl hover:bg-white hover:text-black ">
              START THE PROJECT
            </h2>

            <h5 className="arrow-icon rounded-full border-[1px] p-2 hover:bg-white hover:text-black">
              <MdArrowOutward />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing
