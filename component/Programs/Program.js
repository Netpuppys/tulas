"use client";

import React, { useEffect, useRef, useState } from "react";
function Program({ parentRef, images, content }) {
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [randomImage, setRandomImage] = useState(images[0]);
  // Function to pick a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Change image on component mount and every specific event
  useEffect(() => {
    const randomImg = getRandomImage();
    setRandomImage(randomImg);
  }, []); // Run on mount, or you can trigger this on specific events (e.g., onClick)

  const [componentHeight, setComponentHeight] = useState();

  const ref = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    if (childRef.current) {
      const compHeight = childRef.current.getBoundingClientRect().height;
      setComponentHeight(compHeight);
      // console.log(compHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && childRef.current) {
        const parentTop = parentRef.current.getBoundingClientRect().top;
        const childTop = childRef.current.getBoundingClientRect().top;

        const positionFromTop = childTop - parentTop;
        const scrollValue = Math.max(window.scrollY - positionFromTop, 0);
        const scroll = Math.min(scrollValue, componentHeight);

        setScrollY(scroll);
        setScaleLeaf(1 + scroll * 0.001);
        setOpacity(Math.max(1 - scroll * 0.001, 0));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [componentHeight]);

  return (
    <div ref={childRef} className="w-full h-fit">
      <div className="w-full relative  overflow-hidden">
        {/* <div
          className={`${
            scrollY > 0 && opacity === 0
              ? "absolute"
              : scrollY > 0
              ? "fixed"
              : "absolute"
          } top-0 left-0 w-full h-screen z-[9] bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `url(${randomImage.src})`,
            transform: `scale(${scaleLeaf})`,
            opacity: opacity,
          }}
        ></div> */}
      </div>

      <div ref={ref} className="z-[9] bg-transparent h-fit relative pl-4">
        <h5 className="w-full text-black md:max-w-[80%] px-4 mx-auto py-10 md:py-20 text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates] font-normal">
          {content}
        </h5>
      </div>
    </div>
  );
}

export default Program;
