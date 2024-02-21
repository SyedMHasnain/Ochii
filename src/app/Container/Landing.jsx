import Image from 'next/image';
import React from 'react'
import land from '../../../public/land.jpg'
import "animate.css";
import { MdArrowOutward } from "react-icons/md";

//animate__fadeInLeft
function Landing() {
  return (
    <div className=" w-full  bg-zinc-900 pt-1  ">
      <div className='ml-16 mt-48 text-[6vw] leading-[5.5vw]  font-["Founders_Grotesk"] '>
        <h1>WE CREATE </h1>
        <div className="flex">
          <Image
            src={land}
            className=" animate__animated animate__fadeInLeft -mt-[1vw]
            w-[9vw] h-[5vw] rounded-lg "
          />
          <h1>EYE-OPENING </h1>
        </div>
        <h1 className='font-["Founders_Grotesk"]'>PRESENTATIONS</h1>
      </div>

      <div className="py-[6.5vw]">
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
