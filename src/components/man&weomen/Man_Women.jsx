import React from 'react'
import WM_Section from "./MW_Section"
const Man_Women = () => {
  const man_image="/man.jpg";
  const women_image="/women.jpg";
  return (
    <section className=" flex justify-center gap-4 max-sm:flex-col p-10 pt-[70px] bg-white">
      <WM_Section src_image={man_image} alt={"Man_Image"} title="MEN" off="10"/>
      <WM_Section src_image={women_image} alt={"Women_Image"} title="WOMEN" off="10"/>
      
      {/* <div className="flex w-full gap-3 items-center justify-evenely flex-col  py-[6rem] bg-white sm:flex-row px-14">
        <div className="flex flex-center items-end w-[50%] h-[240px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] sm:w-[60%]">
          <div className="bg-white px-2 py-4 mx-auto text-center w-[90%] shadow-md -translate-y-8 sm:translate-y-4">
            <h3 className="text-red-400 text-xl font-bold">
              Casual Collection
            </h3>
            <p>Festival Sale</p>
          </div>
        </div> */}
{/* 
        <div className="flex flex-center items-end w-[50%] h-[240px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1591980607210-8ea99bee96f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] sm:w-[60%]">
          <div className="bg-white px-2 py-4 mx-auto text-center w-[90%] shadow-md -translate-y-8 sm:translate-y-4">
            <h3 className="text-red-400 text-xl font-bold">
              Going Out Collection
            </h3>
            <p>Festival Sale</p>
          </div>
        </div> */}
        

     
    </section>
  )
}

export default Man_Women