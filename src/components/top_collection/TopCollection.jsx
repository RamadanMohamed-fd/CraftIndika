import React, { useContext, useState } from 'react'
import Title from '../Title'
import {TopCollection_data} from "./TopCollection_data";
import { AiOutlineHeart,AiTwotoneHeart } from "react-icons/ai";
import {GrFormView } from "react-icons/gr";
import Heart from './Heart';
import Image from 'next/image';
import View from './View';
import Product from './Product';
import Cart from './Cart';

const TopCollection = (props) => {
  const [data_length,setData_length]=useState(4)
  const [show_button,setShow_button]=useState(false);
  const [show,setShow]=useState(false);

  return (
    <div id='top_collection' className="  flex items-center  justify-center flex-col py-10 w-full relative bg-white">
      <Title title="Top Collectoin"/>
    <div className=" grid grid-cols-1 text-center grid-rows-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center lg:grid-cols-4 gap-5 mt-12 w-[90%]">
      {TopCollection_data.slice(0,data_length).map((product, i) => (
        <div key={i} className="   max-w-[300px]  shadow-md rounded-md cursor-pointer">
            <div className="group relative w-[100%]  overflow-hidden">
              <div className=' object-cover rounded-md transition duration-300 ease-in-out'>
                  <Image src={product.img1} alt='Product_Image' width={500} height={500}/>
                  <div className='text-3xl absolute z-40 right-0 bottom-0 m-2 '>
                    <Heart icon1={AiOutlineHeart} icon2={AiTwotoneHeart}/>
                    </div>
              </div>
              <div className=' object-cover absolute top-0 left-0 -translate-x-[100vw] group-hover:translate-x-[0vw] rounded-md transition duration-500 ease-in-out'>
                <Image src={product.img2} alt='Product_Image' width={500} height={500}/>
              </div>
            </div>
           
            <div className='flex justify-between items-center  my-5 mx-5'>
              <div className=' flex flex-col items-center text-center'>
                <h3 className="text-xl font-semibold ">{product.name}</h3>
                <h1 className="text-2xl text-center text-red-700 mb-2">{product.price}</h1>
                <span className=' rounded-md shadow-md duration-100 hover:scale-[1.05]
                 text-xl flex justify-between items-center  px-6 py-1' onClick={()=>setShow(!show)}>
                  view
                <span className=' text-2xl ml-1'><GrFormView/></span>
                </span>
                <View show={show} onClose={()=>setShow(false)}>
                  <Product product={product}/>
                </View>
              </div>
              <Cart item={product}/>
            </div>
        </div>
      ))}
    </div>
    <div className=' bg-red-500  hover:bg-[var(--color-default)] shadow-xl px-5 py-2 rounded-lg duration-300 cursor-pointer
     w-fit text-white text-xl mt-10' onClick={()=>{setData_length(show_button ? 4:undefined ); setShow_button(!show_button)}}><a href='#top_collection'>{show_button ?"Show Less":"Show More"}</a></div>
  </div>
  )
}

export default TopCollection