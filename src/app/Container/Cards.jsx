import React from 'react'

function Cards() {
  return (
    <div className="w-full h-full bg-zinc-800 ">
      <div className="border-b-[1px] border-zinc-700 pb-1">
        <h1 className='text-[4vw] font-["Founders_Grotesk"]  leading-none py-16   px-14 '>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 pt-6">
          <div className=" cardscontainer w-1/2 rounded-xl h-[75 vh]  overflow-hidden ">
            <div className="w-full h-full  ">
              <img
                className=" w-full h-full "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </div>

          <div className="cardscontainer w-1/2 h-[75vh] rounded-xl bg-slate-400 overflow-hidden ">
            <div className="w-full h-full ">
              <img
                className="w-full h-full "
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
