// Carousel.js
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import { RiArrowRightSFill } from "react-icons/ri";
import ActiveCardModal from "./ActiveCardModal";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import { HiPlus } from "react-icons/hi2";
//import { PiArrowRight } from "react-icons/pi";

const CarouselProgram = ({
  heading,
  items,
  background,
  backgroundCrousel,
  color,
  pdf,
  downloadBtnText,
}) => {
  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        left: cardWidth + 16, // Adjust this value to control the scroll amount
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
        left: -cardWidth - 16, // Scroll left to go back
        behavior: "smooth",
      });
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    } else {
      setActiveIndex(0); // Handle edge case for the first item
    }
  };

  return (
    <div className="relative">
      <Image
        src={backgroundCrousel}
        alt=""
        className="w-full h-full absolute -z-10"
      />
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
        <div className="flex w-full py-8 md:py-[3%] justify-between items-center px-8 md:px-[5%]">
          <h8 className="w-full text-start text-[clamp(10px,7vw,30px)] md:text-[3vw] leading-none font-[CarotSlab] text-white [text-shadow:_0.5vw_0px_0_#000] md:[text-shadow:_0.2vw_0px_0_#000]">
            {heading}
          </h8>
        </div>
      )}
      <div
        className={`flex flex-col md:flex-row justify-between items-start w-full overflow-hidden h-full ${
          items.length > 4 ? "" : "md:pb-[3%]"
        }`}
      >
        <div className="w-full h-full relative overflow-y-visible">
          <div
            ref={carouselRef}
            className={`w-full flex gap-4  overflow-scroll scrollbarHidden ${
              items.length > 4
                ? "pr-8 md:pr-[5%] pl-8 md:pl-[5%]"
                : "pr-8 md:pr-[0%] pl-8 md:pl-[0%] md:justify-center"
            }`}
          >
            {items.map((item, index) => (
              <div
                key={index}
                ref={cardRef}
                onClick={() => setActiveCard(item)}
                className={`relative group min-w-[calc(95%-1.5rem)] max-w-[calc(95%-1.5rem)] md:min-w-[calc(22%-1.5rem)] md:max-w-[calc(22%-1.5rem)] h-full aspect-[1/1.1] transition-all duration-500 ease-in-out`}
              >
                <Image
                  src={item?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute block inset-0 bg-[linear-gradient(288deg,rgba(0,0,0,0.00)_5.32%,rgba(0,0,0,0.70)_97.09%)]"></div>
                <div className="w-full absolute top-0 p-6">
                  <h3 className="flex flex-col w-fit text-[clamp(10px,4.3vw,30px)] md:text-[clamp(10px,1.3vw,45px)] leading-tight font-[TTChocolatesMedium] text-white">
                    <span className="line-clamp-1">{item?.title}</span>
                    <div className="h-[4px] bg-[#E69706] w-[80px] rounded-full"></div>
                  </h3>
                </div>
                <button className="w-full text-[clamp(10px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)] absolute bottom-0 flex justify-center items-center gap-4 py-3 bg-white text-[#007A83]">
                  Click to Expand{" "}
                  <span className="bg-[#007A83] text-white p-1 rounded-full aspect-square">
                    <HiPlus />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {pdf && (
            <div
              className={`relative pt-3  z-[9] flex space-x-4 ${
                items.length > 4
                  ? "pl-8 md:pl-[5%]"
                  : "pl-8 md:pl-0 md:justify-center"
              }`}
            >
              <Link
                href={pdf}
                target="_blank"
                className={`py-3 bg-[#007A83] group relative px-10 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full `}
              >
                <div className="absolute z-10 bg-white w-1/2 h-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] transition-all duration-300 rounded-full"></div>
                <p className="z-20 flex items-center text-white group-hover:text-[#007A83] transition-all duration-200 justify-center gap-2 text-[clamp(10px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)]">
                  {downloadBtnText} <FaDownload />
                </p>
              </Link>
            </div>
          )}

          {/* Navigation Controls */}
          <div
            className={`pt-8 md:pt-[1%] pb-8 md:pb-[2%] z-[9] w-fit mx-auto text-[30px] space-x-4 ${
              items.length > 4 ? "flex" : "md:hidden"
            }`}
          >
            <button
              disabled={disabled}
              onClick={handlePrev}
              className={`py-2 bg-white px-2 text-[#007A83] disabled:opacity-50 disabled:cursor-not-allowed rounded-full ${
                activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <PiCaretLeftThin />
            </button>
            <button
              disabled={disabled}
              onClick={handleNext}
              className={`py-2 bg-white px-2 text-[#007A83] disabled:opacity-50 disabled:cursor-not-allowed rounded-full ${
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
