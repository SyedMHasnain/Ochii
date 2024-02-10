import Image from 'next/image';
import React from 'react'
import land from '../../../public/land.jpg'
import "animate.css";
import { MdArrowOutward } from "react-icons/md";

//animate__fadeInLeft
function Landing() {
  return (
    <div className=" w-full h-full bg-zinc-900 ">
      <div className=' mr-[6vw] py-16 px-16 text-[6vw]  leading-[5.5vw]  font-["Founders_Grotesk"] '>
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

      <div className="py-16">
        <hr />
        <div className="flex justify-between px-6 py-3">
          {[
            "For publice and private companies",
            "From the first pitch to IPO",
          ].map(function (item, index) {
            return (
              <h4
                key={index}
                className="text-[1vw] font-light tracking-tight leading-none text-md">
                {item}
              </h4>
            );
          })}
          <div className="flex gap-2 justify-center  ">
            <h2 className=" border-[0.1vw] p-1 px-3 text-sm rounded-3xl hover:bg-white hover:text-black ">
              START THE PROJECT
            </h2>
            <h5 className="rounded-full border-[1px] p-2 hover:bg-white hover:text-black">
              <MdArrowOutward />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing
