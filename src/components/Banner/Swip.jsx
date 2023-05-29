import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
          <Image src={"/baner_image/Banner_1.jpg"} alt="Banner_Image" width={"5000"} height={5000} />
          </div>
        </SwiperSlide>
        <SwiperSlide><Image src={"/baner_image/Banner-2.jpg"} alt="Banner_Image" width={"5000"} height={5000} /></SwiperSlide>
        <SwiperSlide><Image src={"/baner_image/Banner_3.jpg"} alt="Banner_Image" width={"5000"} height={5000}  /></SwiperSlide>
   
      </Swiper>
    </>
  );
}