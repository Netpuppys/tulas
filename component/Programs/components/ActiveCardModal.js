import Image from "next/image";
import React, { useRef } from "react";
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
    <div className="w-full h-screen z-[999] pointer-events-auto top-0 left-0 fixed bg-black bg-opacity-40 backdrop-blur-sm flex items-start justify-end">
      <div
        onClick={() => setActiveCard(null)}
        className="cursor-pointer w-[55vw] h-full hidden md:block"
      ></div>
      <div
        ref={scrollRef}
        className="animate-translateRight pointer-events-auto overflow-y-scroll z-[999] bg-white w-full md:w-[45vw] h-full"
      >
        {/* top bar */}
        <div
          className={`w-full md:w-[45vw] h-20 ${
            color ? "bg-[#007A83]" : "bg-[#760135]"
          } flex items-center justify-between px-[1.3rem] py-4`}
        >
          <p className="font-[CarotSlab] text-[1.6rem] font-medium">
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
        <div className="flex-col-reverse md:flex-row items-center md:items-start flex gap-6 justify-between px-10 py-16">
          <div className="">
            <p
              className={`${
                color ? "text-[#007A83]" : "text-[#760135]"
              } underline underline-offset-8 text-3xl font-[CarotSlab] font-medium`}
            >
              {card?.title}
            </p>
            <p className=" text-[#1b1b1b] text-justify text-wrap text-lg font-light mt-6">
              {card.description}
            </p>
            <div className="mt-6">
              {card?.points?.map((item, index) => (
                <p
                  key={index}
                  className=" text-[#1b1b1b] text-justify text-wrap text-lg font-light mt-6"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-[#007a83] min-w-60 overflow-hidden w-60 min-h-[20rem] h-[20rem] shadow-2xl">
            <Image
              src={card.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        {/* explore more */}
        <div
          className={`px-4 md:px-12 w-full py-3 md:py-10 relative text-center flex flex-col items-center justify-start`}
        >
          <Image
            src={background}
            alt=""
            className="absolute w-full -z-10 top-0 h-full object-cover"
          />
          <p className=" text-[clamp(2.5rem,4vw,4.5rem)] text-center leading-none font-[Arapey] text-white [text-shadow:_5px_0px_0_black] md:[text-shadow:_0.4vw_0vw_0_black]">
            {heading}
          </p>

          <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-10 py-10">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardChange(item)}
                className={`relative w-[calc(50%-0.75rem)] md:w-[calc(50%-2.5rem)] group transition-all text-left duration-500 ease-in-out ${
                  item.title === card.title ? "hidden" : "block"
                } `}
              >
                <Image
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute group-hover:animate-overlay inset-0 group-hover:bg-white group-hover:opacity-60"></div>
                <div className="absolute block group-hover:hidden inset-0 bg-black opacity-60"></div>

                <div className="w-full text-left absolute bottom-0 p-2">
                  <h3 className="text-wrap flex items-center gap-1 text-[16px] md:text-[30px] font-[TTChocolatesBold] w-full border border-b-white group-hover:border-b-black border-transparent text-white group-hover:text-black">
                    <RiArrowRightSFill />
                    <span className="line-clamp-1">{item.title}</span>
                  </h3>
                  <ul className="ml-5 list-disc">
                    <li className="text-wrap text-[10px] md:text-[15px] line-clamp-1 pt-2 text-white group-hover:text-black">
                      {item.description}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCardModal;
