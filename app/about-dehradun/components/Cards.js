import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Cards = ({ title, image, description }) => {
  return (
    <div className="py-3 px-5 pb-5 max-w-[20rem] h-full shadow-2xl rounded-lg bg-white bg-opacity-20 backdrop-blur-3xl">
      <Fade delay={300}>
        <Image
          src={image}
          className="w-full h-full object-cover rounded-lg aspect-video mb-4"
          alt={title}
        />
      </Fade>

      <p className="text-xl font-medium text-[#E69706]">{title}</p>
      <p className="text-[#D1D1D1] min-h-[200px]">{description}</p>
    </div>
  );
};

export default Cards;
