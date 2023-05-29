import React, { useContext, useState } from 'react'
import Title from '../Title'
import { TopCollection_data } from '../top_collection/TopCollection_data';
import { AiOutlineHeart,AiTwotoneHeart ,AiOutlineEye} from "react-icons/ai";
import {FaRegEye} from "react-icons/fa";
import Heart from '../top_collection/Heart';
import Image from 'next/image';
import View from '../top_collection/View';
import Product from '../top_collection/Product';
import Cart from '../top_collection/Cart';
const ExquisiteHandicrafts = () => {
    const [data_length,setData_length]=useState(5)
    const [show_button,setShow_button]=useState(false);
    const [show,setShow]=useState(false);
  return (
    <div id='exquisite_handicrafts' className=" flex items-center  justify-center flex-col py-10 w-full m-0 relative bg-white">
    <Title title="Exquisite Handicrafts" style="p-4"/>
  <div className=" grid grid-cols-1 grid-rows-2 mt-12 gap-x-3 gap-y-10 m-auto w-[80%] place-items-center md:grid-cols-2 lg:grid-cols-3">
    {TopCollection_data.slice(0,data_length).map((product, i) => (
      <div key={i} className=" relative h-[180px] w-[95%] shadow-md rounded-md cursor-pointer flex">
          <div className="group relative w-[45%] h-full">
                <img
                  className="w-full h-full object-cover rounded-t-md transition duration-300 ease-in-out"
                  src={product.img1}
                />
                  <div className='text-3xl absolute z-40 right-0 bottom-0 m-2 '>
                    <Heart icon1={AiOutlineHeart} icon2={AiTwotoneHeart}/>
                    </div>
                <img
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 rounded-t-md transition duration-300 ease-in-out"
                  src={product.img2}
                />
              </div>
         
        <div className=' w-[55%] h-[180px]'>
                <h3 className="text-md ml-2 text-lg">{product.name}</h3>
                <h2 className="text-xl font-semibold ml-2 pb-1  border-b-2 text-[var(--color-default)]">{product.price}</h2>
            <div className='flex items-center  gap-3   p-3  justify-start'>
            <Cart item={product}/>
            <span className='  flex justify-center items-center  rounded-lg  text-black  text-center py-1 tracking-wider   ' onClick={()=>setShow(!show)}>
                
                <span className=' text-2xl hover:scale-[1.1] hover:text-[var(--color-default)]'><AiOutlineEye/></span>
                </span>
                <View show={show} onClose={()=>setShow(false)}>
                <Product product={product}/>
              </View>
            </div>
            
        </div>
          
      </div>
    ))}
  </div>
  <div className=' bg-red-500  hover:bg-[var(--color-default)] shadow-xl px-5 py-2 rounded-lg duration-300 cursor-pointer
   w-fit text-white text-xl mt-10' onClick={()=>{setData_length(show_button ? 5:undefined ); setShow_button(!show_button)}}><a href='#exquisite_handicrafts'>{show_button ?"Show Less":"Show More"}</a></div>
</div>

  )
}

export default ExquisiteHandicrafts