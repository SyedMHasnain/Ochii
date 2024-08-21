import Image from 'next/image';
import React from 'react'
import land from '../../../public/land.jpg'
import "animate.css";
import { MdArrowOutward } from "react-icons/md";

//animate__fadeInLeft
function Landing() {
  return (
    <div className=" headingfont w-full   bg-zinc-900 pt-1  ">
      <div className='mt-32 ml-8   w-1/2  font-["Founders_Grotesk"] '>
        <h1 className=" mt-10  text-7xl font-['Founders_Grotesk']">WE CREATE </h1>
        <h1 className="headingfont text-7xl font-['Founders_Grotesk']">EYE-OPENING</h1>
        <h1 className='headingfont text-7xl font-["Founders_Grotesk"]'>
          PRESENTATIONS
        </h1>
      </div>
      <div className='ml-16 mt-40  head text-[6vw] leading-[5.5vw]  font-["Founders_Grotesk"] '>
        {/* <div className="flex">
          <Image
            src={land}
            className="imageicon  animate__animated animate__fadeInLeft mt-[0.2%] 
            w-[9vw] h-[5vw] rounded-lg "
          />
        </div> */}
      </div>

      <div className="py-[4.1vw]">
        <hr />
        <div className=" flex flex-wrap justify-between  align-middle px-6 py-3 ">
          {[
            "For publice and private companies",
            "From the first pitch to IPO",
          ].map(function (item, index) {
            return (
              <h4
                key={index}
                className="mt-3 mr-22 text-sm  font-light tracking-tight leading-none text-md">
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
