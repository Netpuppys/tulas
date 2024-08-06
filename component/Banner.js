"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Banner1 from "../public/Components/Banner/Banner1.webp";
import Banner2 from "../public/Components/Banner/Banner1.webp";
import Banner3 from "../public/Components/Banner/Banner1.webp";
import Banner4 from "../public/Components/Banner/Banner1.webp";
import Banner5 from "../public/Components/Banner/Banner1.webp";

function Banner() {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const [currentIndex, setCurrentIndex] = useState(2);
  const [fade, setFade] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const changeImage = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 300); // Duration of fade out/in
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      changeImage(index);
      resetInterval();
    }
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    changeImage(currentIndex);
  }, [currentIndex]);

  return (
    <div ref={containerRef} className="w-screen h-screen relative -z-10">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          fade ? "opacity-20" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col self-center items-center pt-4 absolute top-1/2 gap-2 transform -translate-y-1/2 right-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${
              index === currentIndex
                ? "border-2 border-white p-[2px] rounded-full"
                : "border-none"
            } `}
          >
            <div
              className={`w-[20px] h-[20px] rounded-full flex items-center justify-center cursor-pointer ${
                index === currentIndex
                  ? " bg-white"
                  : " bg-gray-400 blur-[0.6px]"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
