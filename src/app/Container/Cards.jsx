import React from 'react'

function Cards() {
  return (
    <div className="w-full h-full bg-zinc-900 ">
      <div className="border-b-[1px] border-zinc-700 pb-3">
        <h1 className='text-5xl font-["Founders_Grotesk"]  leading-none   px-10 '>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className=" flex gap-10 pt-6">
          <div className="w-1/2 rounded-xl h-[80vh] bg-slate-400"></div>
          <div className="w-1/2 h-[80vh] rounded-xl bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Cards
