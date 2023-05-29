import Head from "next/head"
// import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"
// import Layout from "@modules/layout/templates"
import { ReactElement, useEffect, useState } from "react"
// import { NextPageWithLayout } from "types/global"

import { RiTruckLine } from "react-icons/ri"
import {
  AiOutlineGooglePlus,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineWifi,
  AiOutlineClockCircle,
  AiFillCreditCard,
} from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

import { ImLocation } from "react-icons/im"
import {  IoMdCall } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { FaXRay } from "react-icons/fa"

import { GrAnnounce } from "react-icons/gr"

import { RiLoader3Line } from "react-icons/ri"
import { BsFillCartFill, BsInstagram } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { BsFillPlusCircleFill } from "react-icons/bs"

import Navbar from "@/components/Navbar/Navbar"
import FirstHead from "@/components/Navbar/temp/FirstHead"
import Hero from "@/components/Banner/Hero"
import Man_Women from "@/components/man&weomen/Man_Women"
import TopCollection from "@/components/top_collection/TopCollection"
import { TopCollection_data } from "@/components/top_collection/TopCollection_data"
import MesmericArts from "@/components/Mesmeric Arts/MesmericArts"
import Footer_s from "@/components/Footer_s"
import CartProvider from "@/store/CartProvider"
import ExquisiteHandicrafts from "@/components/Exquisite Handicrafts/ExquisiteHandicrafts"
import IntricateHandlooms from "@/components/Intricate Handlooms/IntricateHandlooms"
import CuratedCollections from "@/components/Curated Collections/CuratedCollections"
import News from "@/components/news/News"


const Home = () => {
   
  
  // Top Collection Data
  return (
   <CartProvider>
     <div >
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
     {/* First Header */}
     <FirstHead/>
      <div>
      <Navbar />
      </div>
      {/* Hero Slider */}
        <Hero/>
      {/* man&women */}
      <Man_Women/>

      {/* Top Collection */}
        <TopCollection/>
      {/* MesmericArts */}
      <MesmericArts/>
      {/* Exquisite Handicrafts */}
        <ExquisiteHandicrafts/>
        <IntricateHandlooms/>
        <CuratedCollections/>

      {/* services */}
      {/* <div className="grid items-center grid-cols-1 px-14 py-16 border-t-2 border-b-2 bg-white md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center flex-col mb-14 md:mb-20 lg:mb-0">
          <span className="text-[60px] text-red-400 lg:mb-0">
            <RiTruckLine />
          </span>
          <h3 className="text-lg w-full text-center">Special Offer</h3>
          <p className="text-[30px] sm:text-[36px] text-center font-bold w-full">top collection</p>
        </div>
        <div className="flex items-center flex-col mb-14 md:mb-20 lg:mb-0">
          <span className="text-[60px] text-red-400">
            <AiOutlineClockCircle />
          </span>
          <h3 className="font-bold">FREE SHIPPING</h3>
          <p className="font-sm">free shipping worldwide</p>
        </div>
        <div className="flex items-center flex-col mb-14 md:mb-0">
          <span className="text-[60px] text-red-400">
            <GrAnnounce />
          </span>
          <h3 className="font-bold">FREE SHIPPING</h3>
          <p className="font-sm">free shipping worldwide</p>
        </div>
        <div className="flex items-center flex-col mb-14 md:mb-0">
          <span className="text-[60px] text-red-400">
            <AiFillCreditCard />
          </span>
          <h3 className="font-bold">FREE SHIPPING</h3>
          <p className="font-sm">free shipping worldwide</p>
        </div>
      </div> */}

      {/* Special Collection */}
       
      {/* Instagram */}
      {/* <div className="flex items-center flex-col px-18 py-10 w-full bg-white">
        <h1 className="text-[3rem] font-bold">#INSTAGRAM</h1>
        <div className="flex w-3/4 h-3/4 relative">
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
          <div className="w-[20%] h-[240px] relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-red-400/70 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
            <span className="absolute top-[50%] left-[50%] text-[8rem] text-white opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:-rotate-90 group-hover:scale-50 group-hover:opacity-100 transition duration-[0.7s] ease-in-out">
              <BsInstagram />
            </span>
          </div>
        </div>
      </div> */}

      {/* logos */}
      {/* <div className="w-full h-[300px] px-18 py-8 bg-white flex items-center justify-center">
        <div className="flex h-full items-center justify-between gap-5">
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
          <div className="relative w-full h-full group">
            <img
              src="https://th.bing.com/th/id/R.3fc5b5134e2be742c3b6cc9fa4ff8d45?rik=xXKpzijxzvkOhw&riu=http%3a%2f%2fblog.codepen.io%2fwp-content%2fuploads%2f2012%2f06%2fButton-Black-Large.png&ehk=aWfesgTfG9fKcM64nrA4xx%2fLiT7dfvzMIt0R4WRY4Bs%3d&risl=&pid=ImgRaw&r=0"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 group-hover:bg-gray-200/0 transition duration-300 ease-in-out"></div>
          </div>
        </div>
      </div> */}

      {/* newsletter */}
      {/* <div className="flex flex-col justify-between items-center px-14 py-7 bg-red-400 text-white md:flex-row">
        <div>
          <h3 className="text-md font-bold uppercase">Know it all first</h3>
          <p className="text-sm">
            Never Miss Anything From Multikart By Signing Up To Our Newsletter.
          </p>
        </div>
        <div className="flex gap-4 w-2/4 justify-end">
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none border-none px-8 py-4 text-sm w-[300px]"
          />
          <button className="text-sm px-10 text-white uppercase font-semibold">
            Subscribe
          </button>
        </div>
      </div> */}
      <News/>

      {/* footer */}
      <Footer_s/>
    </div>
   </CartProvider>
  )
}

Home.getLayout = (page) => {
  return { page }
}

export default Home
