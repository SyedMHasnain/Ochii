import React from 'react'
import Button from './Button'
function Cardshoriz() {
  return (
    <div className="w-full h-full  bg-zinc-800 px-8 ">
      <div className="flex  gap-4 wrap ">
        <div className="cardscont wh flex-grow w-[90vw] h-[50vh]">
          <div className=" flex relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
            <img
              className="w-32  "
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
              srcset=""
            />
            <div className="  flex flex-wrap mt-9  text-[#CDEA68] border-[#CDEA68] border-[1px] w-40 h-10 rounded-2xl absolute top-60   left-10 ">
              <Button title="&copy;2019-2022" />
            </div>
          </div>
        </div>

        <div className="cardscont flex flex-shrink px6 w-[90vw]  h-[50vh] gap-4">
          <div className="w-full h-full rounded-xl bg-[#20423e]">
            <div className="relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
              <img
                className="w-32  "
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                alt=""
                srcset=""
              />
              <div className="   mt-9  leading-none  text-white hover:bg-black border-white border-[1px]  h-10 rounded-2xl absolute top-60   left-10 ">
                <Button className=" " title="RATING 5.0 ON CLUTCH" />
              </div>
            </div>
          </div>
          <div className="w-full flex-wrap flex h-full rounded-xl bg-[#20423E]">
            <div className="relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
              <img
                className="w-32  "
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                alt=""
                srcset=""
              />
              <div className="   mt-9  leading-none  text-white hover:bg-black border-white border-[1px]  h-10 rounded-2xl absolute top-60   left-10 ">
                <Button className=" " title="BUSSINES BOOTCAMP ALLUMNI" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardshoriz
