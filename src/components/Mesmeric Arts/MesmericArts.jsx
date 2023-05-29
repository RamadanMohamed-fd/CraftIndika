import React from 'react'
import Title from '../Title'

const MesmericArts = () => {
  return (
    
  <div id='mesmeric_arts' className=''>
    <Title title="Mesmeric Arts" style="p-10"/>
   <div className="flex items-center  justify-center h-[80vh] ">
    <div className="flex flex-col items-center  shadow-xl justify-center p-2 border-2 bg-slate-50/50 sm:w-[100%] md:w-[90%] lg:w-[70%]  md: py-8">
      <h1 className="text-[var(--color-default)] font-bold text-[5rem]  uppercase">Arts</h1>
      <h1 className=" font-bold md:text-[5rem] text-[3rem] mb-6  text-slate-800 text-center  uppercase">Mesmeric Arts</h1>
      <h3 className="font-semibold tracking-[4px] text-slate-600 text-[1.5rem]">Special Offer</h3>
      <div className="w-fit px-10 py-1 tracking-wider border-2 text-white  text-xl btn shadow-xl ">Shop</div>
    </div>
  </div>
  </div>
  )
}

export default MesmericArts