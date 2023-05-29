import React from 'react'
import Image from 'next/image';
const MW_Section = (props) => {
  return (
    <div className=" relative flex  justify-center items-center group overflow-hidden cursor-pointer ">
          <div className=" group-hover:scale-[1.1] duration-500"><Image src={props.src_image} alt={props.alt} width={550} height={550} /></div>
          <div className=" absolute ml-40 text-center">
            <h3 className="text-[var(--color-default)] text-xl font-bold">{props.off}% off</h3>
            <p className=' text-5xl max-md:text-2xl font-semibold text-slate-900'>{props.title} </p>
          </div>
          
    </div>
  )
}

export default MW_Section