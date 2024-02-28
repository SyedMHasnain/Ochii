import React from 'react'
import Button from './Button'
function Cardshoriz() {
  return (
    <div className="w-full h-full  bg-zinc-800 px-8 ">
      <div className="flex  gap-4 wrap ">
        <div className="cardscont wh flex-grow w-[90vw] h-[50vh]">
          <div className="w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <Button />
              <img
                className="w-32  "
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                alt=""
                srcset=""
              />
              
           
          </div>
        </div>

        <div className="cardscont flex flex-shrink px6 w-[90vw]  h-[50vh] gap-4">
          <div className="w-full h-full rounded-xl bg-[#20423e]"></div>
          <div className="w-full h-full rounded-xl bg-[#20423E]"></div>
        </div>
      </div>
    </div>
  );
}

export default Cardshoriz
