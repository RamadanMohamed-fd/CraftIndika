import React, { useContext, useState } from 'react'
import Title from '../Title'
import { TopCollection_data } from '../top_collection/TopCollection_data';
import { AiOutlineHeart,AiTwotoneHeart,AiOutlineEye } from "react-icons/ai";
import {GrFormView } from "react-icons/gr";
import Heart from '../top_collection/Heart';
import Image from 'next/image';
import View from '../top_collection/View';
import Product from '../top_collection/Product';
import Cart from '../top_collection/Cart';

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper";
import SliderHover from './SliderHover';
const IntricateHandlooms = () => {
    const [data_length,setData_length]=useState(4)
    const [show_button,setShow_button]=useState(false);
    const [show,setShow]=useState(false);
    let x=3

 

  return (
    <div id='intricate_handlooms' className="  flex items-center  justify-center flex-col py-10 w-full relative bg-white">
      <Title title="Intricate Handlooms"/>
    <div className=" grid grid-cols-1 text-center  grid-rows-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center lg:grid-cols-4 gap-5 mt-12 w-[90%]">
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
           
            <div className='flex justify-evenly items-center my-2 '>
              <div className=' flex flex-col justify-evenly items-center text-center'>
                <h3 className="text-lg font-semibold pr-2">{product.name}</h3>
                <h1 className="text-lg text-center text-red-700 ">{product.price}</h1>
              </div>
              <Cart item={product}/>
            </div>
        </div>
      ))}
    </div>
    <div className=' bg-red-500  hover:bg-[var(--color-default)] shadow-xl px-5 py-2 rounded-lg duration-300 cursor-pointer
     w-fit text-white text-xl mt-10' onClick={()=>{setData_length(show_button ? 4:undefined ); setShow_button(!show_button)}}><a href='#intricate_handlooms'>{show_button ?"Show Less":"Show More"}</a></div>
  </div>
  )
}

export default IntricateHandlooms







{/* <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                 <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide> */}