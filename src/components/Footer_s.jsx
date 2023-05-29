import Image from 'next/image';
import React from 'react'
import {AiOutlineGooglePlus,AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF,FaXRay } from "react-icons/fa"
import {FiMail } from "react-icons/fi"
import {ImLocation } from "react-icons/im"
import {IoMdCall } from "react-icons/io"


const Footer_s = () => {
  return (
    // grid grid-rows-4  text-sm  px-14 py-12 bg-[#f5f2f2] text-slate-500 h-fit  sm:gap-10 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1
    <div className=" flex p-10  max-[650px]:pb-20 duration-150  justify-between flex-wrap bg-[#f5f2f2] text-slate-500 gap-10 max-[650px]:flex-col">
      <div className=" mr-10">
        <div className=' -ml-10 -mt-5 mb-5'><Image src="/CraftIndika.png" width={300} height={300} placeholder='blure'/></div>
        <div className="flex flex-col row-gap-3">
          <p>Lorem ipsum is placeholder text commonly used in</p>
          <p>the graphic, print, and publishing industries for</p>
          <p>previewing layouts and visual mockups.</p>
        </div>
        <div className="flex mt-8 mb-4 gap-7  ">
          <span className=" icon_hover">
            <FaFacebookF />
          </span>
          <span className=" icon_hover">
            <AiOutlineGooglePlus />
          </span>
          <span className="icon_hover">
            <AiOutlineTwitter />
          </span>
          <span className="icon_hover">
            <AiOutlineInstagram />
          </span>
        </div>
      </div>
      <div className=" group/i    max-[650px]:border-b-2 max-[650px]:pb-4 ">
        <h3 className="text-lg uppercase font-semibold text-slate-700  sm:mb-5 cursor-pointer">My Account</h3>
        <ul className=" min-[660px]:flex flex-col max-[660px]:hidden  group-hover/i:flex n-li">
          <li className='hover:no-underline underline '><a href="#">Womens</a></li>
          <li className='hover:no-underline underline'><a href="#">Clothing</a></li>
          <li className='hover:no-underline underline'><a href="#">Accessories</a></li>
          <li className='hover:no-underline underline'><a href="#">Featured</a></li>
        </ul>
      </div>
      <div className="group  max-[650px]:border-b-2 max-[650px]:pb-4 ">       
        <h3 className="text-lg uppercase font-semibold sm:mb-5 text-slate-700"> Why We Choose</h3>
        <ul className="flex flex-col gap-1 max-[660px]:hidden group-hover:flex  n-li">
          <li className='hover:no-underline underline'><a href="#">Shopping & Return</a></li>
          <li className='hover:no-underline underline'><a href="#">Secure Shopping</a></li>
          <li className='hover:no-underline underline'><a href="#">Gallery</a></li>
          <li className='hover:no-underline underline'><a href="#">Affiliates</a></li>
        </ul>
      </div>
      <div className="group ">
        <h3 className="text-lg text-slate-700 uppercase font-semibold  mb-8">
          Store Information
        </h3>
        <ul className="flex flex-col gap-6  max-[660px]:hidden group-hover:flex ">
          <li className="flex items-start  ">
            <span className='icon_hover'>
              <ImLocation />
            </span>
            <div className='ml-1'>
              <p>Multikart Demo Store, Demo</p>
              <p>Store India 345-659</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className='icon_hover'>
              <IoMdCall />
            </span>
            <p className='ml-1'>Call Us: 123-456-7890</p>
          </li>
          <li className="flex items-start ">
            <span className='icon_hover'>
              <FiMail />
            </span>
            <p className='ml-1'>Email Us: Support@Flot.Com</p>
          </li>
          <li className="flex items-start  ">
            <span className='icon_hover'>
              <FaXRay />
            </span>
            <p className='ml-1'>Fax: 123456</p>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default Footer_s
