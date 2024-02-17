"use client";
import { motion } from "framer-motion";
import React from "react";

const Marque = () => {
  return (
    <div className="   w-full  py-10 bg-[#004D43] rounded-lg">
      <div className=" py-6 border-t-2 border-b-2  flex whitespace-nowrap gap-5 overflow-hidden">
        <motion.h1
          // initial={{ x: 0 }}
          // animate={{ x: "-100%" }}
          // transition={{ ease: "linear", repeat: Infinity , duration: 5 }}
          className=" text-[16vw] leading-none mt-8 font-['Founders_Grotesk'] font-semibold -mb-[2vw] ">
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          // initial={{ x: 0 }}
          // animate={{ x: "-100%" }}
          // transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="  mt-8 font-['Founders_Grotesk'] text-[16vw] leading-none font-semibold -mb-10">
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
