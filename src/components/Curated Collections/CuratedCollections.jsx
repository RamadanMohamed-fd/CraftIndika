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
import SliderHover from '../Intricate Handlooms/SliderHover';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper";
import {useRef} from 'react';
import useWindowSize from '../useWindowSize';
// import SliderHover from './SliderHover';
const CuratedCollections = () => {
    const [data_length,setData_length]=useState(4)
    const [show_button,setShow_button]=useState(false);
    const [show,setShow]=useState(false);
    const size=useWindowSize();
 
  
    let x=3
    if(size.width <= 960 && size.width >=600){
      x=2
    }else if(size.width <= 600){
      x=1
    }
 return (
  <div id='curated_collections' className=" ">
    <Title title="Curated Collections" style="p-2"/>
    <div className=" flex p-10 bg-white ">
      <Swiper
          slidesPerView={x}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        {TopCollection_data.map((product, i) => (
          <div className=" ">
            <SwiperSlide>       
            <div key={i} className=" shadow-lg  h-[200px] rounded-lg cursor-pointer flex">
          <div className="group relative w-[100%] h-full  ">
                <Image src={product.img1} fill/>
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                 <SliderHover/>
                </div>
            
              </div>
           
      </div>
         <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-[var(--color-default)] text-lg">29 January 2022</h4>
              
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-[var(--color-default)]"></div>
              </div>
            </SwiperSlide>
          </div>
         ))}  
      </Swiper>
    </div>
  </div>
  )
}

export default CuratedCollections