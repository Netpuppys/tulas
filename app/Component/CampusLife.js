"use client";

import campusLifeImages from "@/data/campusLifeImages";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const CampusLife = () => {
  const contRef = useRef();
  const scrollRef = useRef();

  const [contHeight, setContHeight] = useState();
  const [contWidth, setContWidth] = useState();
  const [albumIndex, setAlbumIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [autoPlayActive, setAutoPlayActive] = useState(false); // New state for autoplay toggle

  useEffect(() => {
    const updateDimensions = () => {
      if (contRef.current) {
        const { height, width } = contRef.current.getBoundingClientRect();
        setContHeight(height);
        setContWidth(width);
      }
    };

    // Initial setting of dimensions
    updateDimensions();

    // Adding event listener for window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const handleAlbumIndex = (index, startAutoPlay = false) => {
    setTimeout(() => {
      setAlbumIndex(index);
    }, 500);

    if (index < campusLifeImages.length) {
      // setImageIndex(0);
      setAutoPlayActive(startAutoPlay); // Toggle autoplay if "Explore More" is clicked
    }
  };

  const handleNextImage = () => {
    const currentAlbumImages = campusLifeImages[albumIndex].images.length;
    setImageIndex((prev) => (prev + 1) % currentAlbumImages); // Loop to the first image after the last one
  };

  useEffect(() => {
    const vw = window.innerWidth;

    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: albumIndex * vw,
        behavior: "smooth",
      });
    }
  }, [albumIndex, scrollRef]);

  useEffect(() => {
    if (scrollRef.current && contHeight) {
      scrollRef.current.scrollTo({
        top: imageIndex * contHeight,
        behavior: "smooth",
      });
    }
  }, [imageIndex, scrollRef, contHeight]);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNextImage();
    }, 3000);

    return () => clearInterval(autoPlay); // Clear interval on unmount
  }, [albumIndex, imageIndex, autoPlayActive]);

  return (
    <div className="w-full pt-1 flex flex-col items-center justify-start py-0">
      {/* <p className="uppercase text-4xl text-[#007A83] font-semibold tracking-[0.15em]">
        Campus Life
      </p> */}
      <div className="w-full relative h-[30rem] md:h-[35rem]">
        <div ref={contRef} className="w-full h-full relative">
          <div
            ref={scrollRef}
            className="absolute top-0 left-0 flex overflow-hidden w-full max-h-full"
          >
            {campusLifeImages.map((item, index) => (
              <div key={index} className="">
                {item.images.map((image, index) => (
                  <div
                    key={index}
                    style={{ width: contWidth, height: contHeight }}
                    className="w-full h-full relative overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src={image}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* up and down btns */}
        </div>
        {/* bottom selector */}
      </div>
      <div className="w-full z-30 h-28 -mt-[56px] bg-transparent px-4 md:px-5 flex items-center justify-center">
        <div className="shadow-2xl bg-white max-w-[85rem] w-full h-full flex flex-col items-center justify-center px-5 md:px-14 rounded-xl md:rounded-2xl relative">
          <button className="absolute -top-8 left-5 uppercase tracking-widest text-xs">
            explore more
          </button>

          <div className="w-full flex items-center justify-around">
            {campusLifeImages.map((item, index) => (
              <button
                key={index}
                onClick={() => handleAlbumIndex(index)}
                style={{
                  transform: `translateY(-5px)`,
                }}
                className={`uppercase text-[#050505] font-light text-[0.5rem] md:text-base text-nowrap
                            w-1/2`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="w-full mt-6 relative bg-black bg-opacity-25 h-[0.15rem] rounded-full flex items-center justify-center">
            <div
              style={{ width: `${25 * (albumIndex + 1)}%` }}
              className="h-full bg-black rounded-full absolute z-0 top-0 left-0"
            ></div>
            <div className="w-full flex items-center justify-around z-10 h-6 md:h-10">
              {campusLifeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleAlbumIndex(index)}
                  style={{
                    borderWidth: `${albumIndex < index ? "0px" : "2px"}`,
                  }}
                  className="h-full aspect-square rounded-full bg-white p-1 md:p-3 border-black hover:!border-2"
                >
                  <div className="w-full h-full bg-black rounded-full"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
