import Image from 'next/image'
import React from 'react'

const Cards = ({
    title, 
    image,
    description
}) => {
  return (
    <div className="p-2 max-w-[20rem] shadow-2xl h-full rounded-lg bg-white bg-opacity-20 backdrop-blur-3xl">
        <div className="w-full mb-4 aspect-video overflow-hidden rounded-md">
            <Image
                src={image}
                className="w-full h-full object-cover"
                alt={title}
            />
        </div>
        <p className="text-xl font-medium text-[#E69706]">
            {title}
        </p>
        <p className="text-[#D1D1D1]">
            {description}
        </p>
    </div>
  )
}

export default Cards