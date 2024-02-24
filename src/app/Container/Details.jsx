
'use client'
import Image from 'next/image';
import React from 'react'
import imgperson from "../../../public/p1.jpg"
import { RxArrowTopRight } from "react-icons/rx";

const Details=()=>{
  return (
    <div className="w-full h-full bg-[#CDEA68]  text-black ">
    
      <div className=' leading-none  p-20 font-["NeueMontrealRegular"]  text-[3.9vw]  border-b-[1px]  border-zinc-900 '>
        <p>
          Ochi is a strategic partner for fast-growing tech businesses that need
          to <u>raise funds, sell products, explain complex ideas,</u>
          and <u>hire great people.</u>
        </p>
      </div>

    <div className=' textcenter flex justify-between p-14 flex-wrap'>
     <div className="text-3xl font-medium   ">
        <h1>
          <span className="text-4xl">O</span>ur approuch:
        </h1>


        <div className="mt-[2vw]   border-2 flex px-6 py-4 border-black rounded-full bg-black text-white  justify-between align-middle p-3">
          <h2 className="text-base text-center ">READ MORE </h2>
          {/* icon here */}
          <RxArrowTopRight className=" items-center p-1 text-black bg-white rounded-full" />
        </div>



      </div>

      {/* image  */}

      <div className="flex p-20  pt-5 ml-5 ">
        <Image className='rounded-3xl '
          src={imgperson}
          width={500}
          height={300}
        />
      </div>
      </div>


    </div>
  );
}

export default Details