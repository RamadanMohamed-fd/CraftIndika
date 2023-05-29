import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import {  useEffect, useState } from "react"
import Swiper from 'swiper'
import Swip from "./Swip"
const Hero = () => {

    const [heroSliderCurr, setHeroSliderCurr] = useState(0)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setHeroSliderCurr((heroSliderCurr + 1) % 3)
    }, 3000)

    return () => clearTimeout(timeOut)
  }, [heroSliderCurr])

  const getHeroSliderContent = () => {
    if (heroSliderCurr === 0) {
      return (
        <div className="relative h-full transition duration-350 translate-x-100 ease-in-out">
          <video src="" className="w-full h-full" controls  />
        </div>
      )
    } else if (heroSliderCurr === 1) {
      return (
        <div className="flex flex-col justify-center bg-center bg-cover h-full bg-[url('/baner_image/Banner_1.jpg')] transition duration-350 ease-in-out">
          <h3 className="font-semibold tracking-[4px] text-white text-[1.2rem]">
            Welcome to Fashion
          </h3>
          <h1 className="text-[2.2rem] text-red-400 font-bold uppercase md:text-[4rem]">
            Women Fashion
          </h1>
          <div className="w-fit px-10 py-2 bg-red-400 text-white">Shop</div>
        </div>
      )
    } 

    else if (heroSliderCurr === 2) {
      return (
        <div className="flex flex-col justify-center items-center bg-center bg-cover h-full bg-[url('/baner_image/Banner-2.jpg')] transition duration-350 ease-in-out">
          <h3 className="font-semibold tracking-[4px] text-white text-[1.2rem]">
            Welcome to Fashion
          </h3>
          <h1 className="text-[2.2rem] text-red-400 font-bold uppercase md:text-[4rem]">
            Women Fashion
          </h1>
          <div className="w-fit px-10 py-2 bg-red-400 text-white">Shop</div>
        </div>
      )
    } 
    
    else {
      return (
        <div className="flex flex-col justify-center items-center bg-center bg-cover h-full bg-[url('/baner_image/Banner_3.jpg')] transition duration-350 ease-in-out">
          <h3 className="font-semibold tracking-[4px] text-white text-[1.2rem]">
            Welcome to Fashion
          </h3>
          <h1 className="text-[2.2rem] text-red-400 font-bold uppercase md:text-[4rem]">
            Men Fashion
          </h1>
          <div className="w-fit px-10 py-2 bg-red-400 text-white">Shop</div>
        </div>
      )
    }
  }

  return (
  //   <div className="h-[570px]  relative group ">
  //   <div className="h-full">{getHeroSliderContent()}</div>
  //   <div className="absolute top-[50%] flex justify-between w-full">
  //     <span
  //       onClick={() =>
  //         setHeroSliderCurr((heroSliderCurr) => (heroSliderCurr - 1) % 4)
  //       }
  //       className="text-md p-3 rounded-full cursor-pointer bg-white opacity-50 -translate-x-10 group-hover:translate-x-8 transition duration-350 ease-in-out md:group-hover:translate-x-12"
  //     >
  //       <IoIosArrowBack />
  //     </span>
  //     <span
  //       onClick={() =>
  //         setHeroSliderCurr((heroSliderCurr) => (heroSliderCurr + 1) % 4)
  //       }
  //       className="text-md p-3 rounded-full cursor-pointer bg-white opacity-50 translate-x-10 group-hover:-translate-x-8 transition duration-350 ease-in-out md:group-hover:-translate-x-12"
  //     >
  //       <IoIosArrowForward />
  //     </span>
  //   </div>
  // </div>
    <div className="">
      <Swip/>
    </div>


  )
}

export default Hero