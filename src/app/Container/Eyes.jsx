"use client";

import Image from "next/image";
import React from "react";

function Eyes() {
  return (
    <div className="w-full h-full overflow-hidden">
    
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>

        <div className="absolute flex gap-4 top-1/2 left-1/2 w-96 h-60 -translate-x-[50%] -translate-y-[50%]  ">
          {/* eyes Ball inside */}

          <div className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white">
            <div className=" flex items-center justify-center w-[8vw] h-[8vw] rounded-full bg-black">
              <div className=" w-[1vw] h-[1vw] rounded-full  bg-white">
                {/* inside eyes  */}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[13vw] h-[13vw]  rounded-full bg-white">
            <div className="flex items-center justify-center w-[8vw] h-[8vw] rounded-full  bg-black ">
              <div className="  w-[1vw] h-[1vw] rounded-full  bg-white"></div>
            </div>
          </div>
        </div>
        {/* eyes  Ball inside End*/}
      </div>
    </div>
  );
}

export default Eyes;
