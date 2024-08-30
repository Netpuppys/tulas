import React from 'react'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";

const Testimonials = () => {
  return (
    <div className="w-full py-20">
        <div className="w-full h-full flex items-center justify-between px-40">
            <button className="bg-transparent p-2 rounded-full hover:bg-black bg-opacity-80 text-4xl text-black hover:text-white text-opacity-80 flex items-center justify-center">
                <HiOutlineChevronLeft />
            </button>

            <button className="bg-transparent p-2 rounded-full hover:bg-black bg-opacity-80 text-4xl text-black hover:text-white text-opacity-80 flex items-center justify-center">
                <HiOutlineChevronRight />
            </button>
        </div>
    </div>
  )
}

export default Testimonials