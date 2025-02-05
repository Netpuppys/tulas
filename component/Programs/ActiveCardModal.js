import Image from "next/image";
import React, { useRef } from "react";
import { HiPlus } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { RiArrowRightSFill } from "react-icons/ri";

const ActiveCardModal = ({
  card,
  setActiveCard,
  items,
  heading,
  background,
  color = false,
}) => {
  const scrollRef = useRef();
  const handleCardChange = (item) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setActiveCard(item);
  };
  return (
    <div className="w-full h-screen z-[9999] pointer-events-auto top-0 left-0 fixed bg-black bg-opacity-40 backdrop-blur-sm flex items-start justify-end">
      <div
        onClick={() => setActiveCard(null)}
        className="cursor-pointer w-[55vw] h-full hidden md:block"
      ></div>
      <div
        ref={scrollRef}
        className="animate-translateRight relative pointer-events-auto overflow-y-scroll z-[9999] bg-white w-full md:w-[45vw] h-full"
      >
        {/* top bar */}
        <div
          className={`w-full md:w-[45vw] h-20 ${
            color ? "bg-[#007A83]" : "bg-[#760135]"
          } flex items-center justify-between px-[1.3rem] py-4`}
        >
          <p className="font-[CarotSlab] text-[clamp(10px,5vw,40px)] md:text-[clamp(10px,1.5vw,40px)] leading-tight font-medium">
            {heading}
          </p>
          <button
            onClick={() => setActiveCard(null)}
            className={`h-full aspect-square bg-white flex items-center justify-center ${
              color ? "text-[#007A83]" : "text-[#760135]"
            } text-2xl`}
          >
            <IoClose />
          </button>
        </div>

        {/* content div */}
        {!card.imagesArray && (
          <div className="px-[4%] py-[5%]">
            <div className="flex-col-reverse md:flex-row items-center md:items-start flex gap-6 justify-between">
              <div className="">
                <p
                  className={`${
                    color ? "text-[#007A83]" : "text-[#760135]"
                  } underline underline-offset-8 text-[clamp(10px,4.5vw,40px)] md:text-[clamp(10px,1.3vw,40px)] font-[CarotSlab] font-medium`}
                >
                  {card?.title}
                </p>
                <p className="mt-[1.5%]">
                  {card?.description?.map((item, index) => (
                    <h2
                      key={index}
                      className=" text-[#1b1b1b] text-wrap text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-snug font-light mt-[1.5%]"
                    >
                      {item}
                    </h2>
                  ))}
                </p>
              </div>
              <div className="bg-[#007a83] min-w-60 overflow-hidden w-60 min-h-[20rem] h-[20rem] shadow-2xl">
                <Image
                  src={card.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              {card?.points?.map((item, index) => (
                <h2
                  key={index}
                  className=" text-[#1b1b1b] text-wrap text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-snug font-light mt-[1.5%]"
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>
        )}
        {card.imagesArray && (
          <div className="px-10 py-16">
            <div className="flex-col-reverse md:flex-row items-center md:items-start flex gap-6 justify-between">
              <div className="">
                <p
                  className={`${
                    color ? "text-[#007A83]" : "text-[#760135]"
                  } underline underline-offset-8 text-[clamp(20px,1.5vw,40px)] font-[CarotSlab] font-medium`}
                >
                  {card?.title}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              {card.imagesArray.map((image, index) => (
                <div
                  key={index}
                  className="w-[calc(50%-1rem)] h-[12rem] md:min-w-60 overflow-hidden md:w-60 md:min-h-[20rem] md:h-[20rem] shadow-2xl"
                >
                  <Image
                    src={image}
                    className="w-full h-full object-cover"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* explore more */}
        <div
          className={`px-4 w-full py-3 md:py-10 relative text-center flex flex-col items-center justify-start`}
        >
          <Image
            src={background}
            alt=""
            className="absolute w-full -z-10 top-0 h-full object-cover"
          />
          <p className="text-[clamp(2.5rem,3vw,4.5rem)] text-center leading-none font-[CarotSlab] text-white [text-shadow:_5px_0px_0_black] md:[text-shadow:_0.2vw_0vw_0_black]">
            {heading}
          </p>

          <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-6 py-10">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardChange(item)}
                className={`relative w-[calc(50%-0.75rem)] md:w-[calc(33%-1.5rem)] aspect-[1/1.2] group transition-all text-left duration-500 ease-in-out ${
                  item.title === card.title ? "hidden" : "block"
                } `}
              >
                <Image
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute block inset-0 bg-[linear-gradient(288deg,rgba(0,0,0,0.00)_5.32%,rgba(0,0,0,0.70)_97.09%)]"></div>
                <div className="w-full absolute top-0 p-4">
                  <h3 className="flex flex-col w-fit text-[clamp(15px,4.3vw,30px)] md:text-[clamp(10px,1.3vw,45px)] leading-tight font-[TTChocolatesBold] text-white">
                    <span className="line-clamp-1">{item?.title}</span>
                    <div className="h-[4px] bg-[#E69706] w-[80px] rounded-full"></div>
                  </h3>
                </div>
                <button className="w-full absolute bottom-0 flex justify-center items-center gap-4 py-3 bg-white text-[#007A83]">
                  Click to Expand{" "}
                  <span className="bg-[#007A83] text-white p-1 rounded-full aspect-square">
                    <HiPlus />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCardModal;
