// Carousel.js
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import { RiArrowRightSFill } from "react-icons/ri";
import ActiveCardModal from "./ActiveCardModal";
//import { PiArrowRight } from "react-icons/pi";

const CarouselProgram = ({ heading, items, background, color }) => {
  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCard]);

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setDisabled(true);
      setActiveIndex(activeIndex + 1);
      carouselRef.current.scrollBy({
        left: 372, // Adjust this value to control the scroll amount
        behavior: "smooth",
      });
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    } else {
      setActiveIndex(items.length - 1); // Handle edge case for the last item
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDisabled(true);
      setActiveIndex(activeIndex - 1);
      carouselRef.current.scrollBy({
        left: -372, // Scroll left to go back
        behavior: "smooth",
      });
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    } else {
      setActiveIndex(0); // Handle edge case for the first item
    }
  };

  const handleItemClick = (index) => {
    setDisabled(true);
    setActiveIndex(index);
    const scrollAmount = 372 * index; // Calculate scroll amount based on index
    carouselRef.current.scrollTo({
      left: scrollAmount, // Scroll to the specific item
      behavior: "smooth",
    });
    setTimeout(() => {
      setDisabled(false);
    }, 500);
  };

  // Prevent scrolling of the carousel
  useEffect(() => {
    const carouselElement = carouselRef.current;

    // Handle wheel event for desktop devices
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > 0) {
        e.preventDefault(); // Prevent horizontal scroll
      }
      // Allow vertical scrolling (deltaY)
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    // Handle touch start (mobile)
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    // Handle touch move (mobile)
    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // If horizontal swipe is greater than vertical swipe, prevent horizontal scrolling
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault(); // Prevent horizontal scrolling
      } else {
        // Allow vertical scroll, no need to preventDefault here
      }

      touchStartX = touchEndX;
      touchStartY = touchEndY;
    };

    // Add wheel event listener for desktop
    carouselElement.addEventListener("wheel", handleWheel, { passive: false });

    // Add touch event listeners for mobile devices
    carouselElement.addEventListener("touchstart", handleTouchStart);
    carouselElement.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      // Clean up event listeners
      carouselElement.removeEventListener("wheel", handleWheel);
      carouselElement.removeEventListener("touchstart", handleTouchStart);
      carouselElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="relative z-[99]">
      {activeCard && (
        <ActiveCardModal
          card={activeCard}
          setActiveCard={setActiveCard}
          items={items}
          heading={heading}
          color={color}
          background={background}
        />
      )}

      {heading && (
        <div className="flex w-full justify-between items-center px-0 md:px-[5%]">
          <h8 className="text-[80px] w-full text-center md:text-start md:text-[12vw] leading-none font-[Arapey] text-black [text-shadow:_5px_0px_0_#760135] md:[text-shadow:_1vw_0px_0_#760135]">
            {heading}
          </h8>
          {/* <button className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]">
          <h3 className="font-inter text-left text-[18px] md:text-[25px] -mr-4 font-light transition-color">
            See More
          </h3>
          <div className="p-[10px] md:p-[20px] text-[20px] md:text-[30px] border-2 rounded-[50%] aspect-square border-l-transparent">
            <PiArrowRight />
          </div>
        </button> */}
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-between items-center pl-4 md:pl-10 py-10 w-full overflow-hidden h-full">
        {/* Left side text and scroll */}
        <div className="px-4 w-80">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={`cursor-pointer font-[TTChocolates] text-xl md:text-2xl flex gap-2 items-center ${
                  activeIndex === index
                    ? "text-black font-[TTChocolatesBold] font-semibold"
                    : "text-black"
                }`}
              >
                {activeIndex === index && (
                  <p className="w-4 bg-black h-[1px]"></p>
                )}
                {item?.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-full md:w-[calc(100vw-26.5rem)] py-8 relative overflow-y-visible">
          {/* Right side - CarouselProgram display */}
          <div
            ref={carouselRef}
            className="w-full flex gap-6 py-10 overflow-scroll scrollbarHidden pr-[20vw] md:pr-[100vw]"
          >
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveCard(item)}
                className={`relative min-w-[348px] group max-w-[348px] h-[460px] transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "" : ""
                }`}
              >
                <Image
                  src={item?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute group-hover:animate-overlay inset-0 group-hover:bg-white group-hover:opacity-60"></div>
                <div className="absolute block group-hover:hidden inset-0 bg-black opacity-60"></div>

                <div className="w-full absolute bottom-0 p-2">
                  <h3 className="text-wrap flex items-center gap-1 text-[30px] font-[TTChocolatesBold] w-full border border-b-white group-hover:border-b-black border-transparent text-white group-hover:text-black">
                    <RiArrowRightSFill />
                    <span className="line-clamp-1">{item?.title}</span>
                  </h3>
                  <ul className="ml-5 list-disc">
                    <li className="text-wrap text-[15px] line-clamp-1 pt-2 text-white group-hover:text-black">
                      {item?.description}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 z-[9] right-14 md:right-20 text-[30px] md:text-[50px] flex space-x-4">
            <button
              disabled={disabled}
              onClick={handlePrev}
              className={`py-2 bg-[#3d001b] px-2 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full ${
                activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <PiCaretLeftThin />
            </button>
            <button
              disabled={disabled}
              onClick={handleNext}
              className={`py-2 bg-[#3d001b] px-2 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full ${
                activeIndex === items.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <PiCaretRightThin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProgram;
