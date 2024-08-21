"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Marque = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.4], [0, -600]);

  return (
    <div className="w-full py-10 bg-[#004D43] rounded-lg">
      <div className="py-2 border-t-2 border-b-2 flex whitespace-nowrap gap-1 overflow-hidden">
        <motion.h1
          style={{ x }}
          className="text-[16vw] leading-none mt-8 font-['Founders_Grotesk'] font-semibold mb-[2vw]
         ml-6
          ">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 
        style={{ x }} 
        className="mt-8 ml-6 font-['Founders_Grotesk'] text-[16vw] leading-none font-semibold mb-10">
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
