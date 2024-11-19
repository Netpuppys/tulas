import React from "react";
import image1 from "../../public/engineering/image1.png";
import image2 from "../../public/engineering/image2.png";
import image3 from "../../public/engineering/image3.png";
import logo from "../../public/Components/Navbar/TulasLogo.png";
import tulasLogo from "../../public/engineering/logo.png";
import engineerIcon from "../../public/engineering/engineerIcon.png";

import deleteForm from "../../public/engineering/deleteForm.png";

import { BiSolidPencil } from "react-icons/bi";
import Image from "next/image";

const images = [image1, image2, image3];

const page = () => {
  return (
    <>
      <head>
        <title>
          B.Tech at Tula's College: Engineering Excellence - B.Tech Degree
          Program
        </title>
        <meta
          name="description"
          content="B.Tech at Tula's College: Offering cutting-edge engineering education across various disciplines, fostering innovation and enabling graduates to make a significant impact in the engineering field."
        />
      </head>
      <body>
        <div className="w-screen min-h-screen h-full relative">
          <div className="absolute top-0 w-full flex items-center justify-between left-0 z-20 px-6 pt-16">
            <button className="">
              <Image src={logo} className="max-w-44" alt="" />
            </button>

            <button className="border-4 border-white bg-[#3D001B] w-14 aspect-square rounded-full flex items-center justify-center text-2xl">
              <BiSolidPencil />
            </button>
          </div>

          {/* banner */}
          <div className="min-w-[101vw] h-screen overflow-hidden flex top-0 left-0 mb-[37rem]">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-1/3 h-full animate-decreaseWidth hover:animate-increaseWidth min-w-0 hover:w-2/3 overflow-hidden flex items-center justify-center relative"
              >
                <div className="bg-black w-full h-full bg-opacity-60 z-10 absolute top-0 left-0"></div>
                <Image
                  src={image}
                  className="h-full object-cover w-full"
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="w-full absolute flex flex-col pt-40 items-center justify-start z-50 top-[50vh] px-5">
            <p className="text-center text-white text-5xl tracking-wide leading-relaxed">
              Department of{" "}
              <span className="font-semibold text-[#007A83]">Engineering</span>
            </p>

            <div className="bg-[#3D001B] mt-6 w-full h-fit rounded-2xl shadow-2xl relative">
              <div className="p-2 pb-20">
                <Image src={deleteForm} className="w-full" alt="" />
              </div>
              <div className="absolute z-50 bottom-0 translate-y-1/2 right-2">
                <Image src={tulasLogo} className="" alt="" />
              </div>
            </div>
          </div>
          <div className="h-screen w-full">
            <p className="text-[2rem] w-full text-center font-light text-[#373737] uppercase tracking-wider leading-relaxed">
              One of <br />
              <span className="font-normal">Dehradun's</span>
            </p>
            <p className="text-[#007A83] text-[2.5rem] tracking-wider font-[Fasthand] text-center">
              ' Most Prestigious '
            </p>
            <p className="text-[2rem] tracking-wider font-light text-[#373737] text-center">
              COLLEGES
            </p>
            <p className="text-black text-justify text-lg font-light tracking-wide px-10 pt-5">
              Nestled in the beautiful Niagara Region, our stunning 90-acre
              campus is a home-away-from-home for our students to learn, grow
              and thrive. We offer a global education anchored in Canadian
              values, where our students attend school 'with the world' sharing
              life-shaping experiences and preparing for a life of leadership
              and impact.
            </p>
          </div>
        </div>
      </body>
    </>
  );
};

export default page;
