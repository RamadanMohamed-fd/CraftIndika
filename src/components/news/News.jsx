import React from 'react'

const News = () => {
  return (
    <div className="relative flex flex-col justify-between items-center px-3 lg:px-14 py-3 bg-[#870827] text-white lg:flex-row lg:justify-center">
        <div className="w-full lg:w-2/4">
          <h3 className="text-md font-bold uppercase text-center lg:text-left">Know it all first</h3>
          <p className="text-sm hidden lg:block">
            Never Miss Anything From Multikart By Signing Up To Our Newsletter.
          </p>
        </div>
        <div className="flex gap-4 w-full justify-center mt-6 lg:mt-0 lg:w-2/4 lg:justify-end">
          <input
            type="text"
            placeholder="Enter your email"
            className=" text-slate-700 outline-none border-none px-8 py-4 text-sm w-3/4 md:w-2/4"
          />
          <button className="text-sm px-3 lg:px-8 btn text-white bg-red-700 animate-pulse rounded-5xl uppercase ">
            Subscribe
          </button>
        </div>
      </div>

  )
}

export default News