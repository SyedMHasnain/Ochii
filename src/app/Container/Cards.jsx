import React from 'react'


function Cards() {
  return (
    <div className="  w-full  bg-zinc-800  pb-32">
      <div className="border-b-[1px]">
        <h1 className='text-[4vw] font-["Founders_Grotesk"]  leading-none pt-[10vw]  px-14 '>
          Featured Projects
        </h1>
      </div>

      <div className=" w-full h-full px-10   ">
        <div className="card flex  gap-10 pt-10">
          {/* card1 start  */}
          <div className=" cardscontainer  w-[60vw] rounded-xl   overflow-hidden ">
            <div className=" ">
              <img
                className=" w-full h-full "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </div>
          {/* card1 end  */}

          <div className="cardscontainer w-[60vw]  rounded-xl bg-slate-400 overflow-hidden ">
            <div className=" ">
              <img
                className=" w-full h-full "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
}

export default Cards
