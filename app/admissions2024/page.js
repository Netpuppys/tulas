"use client";

import bannerImage from "../../public/admissions/admissionsBaner.png";
import collaborator1 from "../../public/admissions/collaborator1.png";
import collaborator2 from "../../public/admissions/collaborator2.png";
import collaborator3 from "../../public/admissions/collaborator3.png";
import collaborator4 from "../../public/admissions/collaborator4.png";
import girl from "../../public/admissions/girl.png";
import icon1 from "../../public/admissions/icon1.png";
import icon2 from "../../public/admissions/icon2.png";
import icon3 from "../../public/admissions/icon3.png";
import icon4 from "../../public/admissions/icon4.png";
import tulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import backgroundImage from "../../public/bsc-agriculture/background.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const collaboraters = [
  collaborator1,
  collaborator2,
  collaborator3,
  collaborator4,
];

const iconCarousel = [
  {
    icon: icon1,
    text: "Well Equipped Faculty",
  },
  {
    icon: icon2,
    text: "TCS certified computer centers equipped with 600 desktops",
  },
  {
    icon: icon3,
    text: "Sports complex with indoor and outdoor Games",
  },
  {
    icon: icon4,
    text: "Shoping arcade with laundry facility salon & stationery shops",
  },
  {
    icon: icon1,
    text: "Well Equipped Faculty",
  },
  {
    icon: icon2,
    text: "TCS certified computer centers equipped with 600 desktops",
  },
  {
    icon: icon3,
    text: "Sports complex with indoor and outdoor Games",
  },
  {
    icon: icon4,
    text: "Shoping arcade with laundry facility salon & stationery shops",
  },
];

const page = () => {
  const carouselRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  const handleScrollForward = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      // Scroll forward by the width of the carousel
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrolled(true);
    }
  };

  const handleScrollBack = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      // Scroll back by the width of the carousel
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setScrolled(false);
    }
  };

  return (
    <div className="w-full min-h-screen relative font-[TTChocolates]">
      <Link href={"/"} className="absolute top-10 left-10 z-20 w-48">
        <Image src={tulasLogo} className="w-full" alt="" />
      </Link>

      <div className="w-screen h-[80vh] relative overflow-hidden flex items-center justify-center">
        <Image
          src={bannerImage}
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="bg-[#760135] w-80 h-96 rounded-3xl absolute top-[15vh] right-[20vw] bg-opacity-40"></div>
      </div>

      <div className="w-full bg-white pt-12 pb-24 flex items-center justify-center">
        <div className="text-left max-w-[45rem]">
          <p className="text-[#760135] text-4xl pb-4 font-medium font-[CarotSlab]">
            ABOUT TULA'S
          </p>
          <p className=" text-[#404040] text-xl font-[TTChocolates]">
            Ranked amongst top colleges in India, Tula's Institute not only
            offers the excellent academics but also a happening campus life.
            Life at Tula’s is full of opportunities that provide freedom and
            flexibility to engage in one’s passion and innate skills.
            <br />
            <br />
            Sprawled over 22 acres of lush green campus, the institute is
            equipped with excellent infrastructural facilities Comparable to the
            World-Wide. Tula’s Institute is situated in the ideal environment of
            the Doon Valley which provides the best environment to students for
            learning.
          </p>
        </div>
      </div>

      <div className="w-full h-[60rem]">
        <p className="text-white text-4xl font-[TTChocolates] font-semibold pt-16 text-center">
          Programs Offered at TULA's
        </p>
      </div>

      <div className="w-full bg-white text-center pt-20 pb-20">
        <p className="underline-offset-4 underline text-[#760135] font-[CarotSlab] text-3xl font-medium">
          INDUSTRY COLLABORATIONS
        </p>
        <div className="w-full mt-12 flex items-center justify-center gap-5">
          {collaboraters.map((image, id) => (
            <Image src={image} key={id} className="scale-75" alt="" />
          ))}
        </div>
      </div>

      <div className="w-full h-[40rem] flex items-center justify-between px-40 font-[TTChocolates]">
        <div className="w-3/5">
          <p className="text-white text-4xl font-semibold">| Why TULA's</p>
          <p className="text-[#D9D9D9] mt-6 text-xl">
            Tula’s institute has been focused in placing the right student at
            the right job. Placements have been an integral part of the
            institute. Tula has best placements records in association with 750+
            big companies including Sterlite, Adobe, Deutsche Bank, Oracle, etc.
          </p>
        </div>
        <div className="2/5 h-full pt-16">
          <Image src={girl} className="h-full object-contain" alt="" />
        </div>
      </div>

      <div className="w-full bg-white pt-24 flex flex-col items-center justify-center px-20 pb-6 relative">
        <div
          ref={carouselRef}
          className="max-w-[70rem] w-full flex overflow-x-scroll"
        >
          {iconCarousel.map((item, index) => (
            <div
              key={index}
              className="flex w-1/4 min-w-[25%] px-8 flex-col items-center justify-start"
            >
              <Image
                src={item.icon}
                className="h-20 w-fit max-h-20 mb-6"
                alt=""
              />
              <p className="text-center text-[#746470]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="13"
            viewBox="0 0 112 13"
            fill="none"
          >
            <rect
              width="12.3386"
              height="12.3386"
              rx="6.16929"
              fill="#006A72"
            />
            <rect
              x="18.0339"
              width="12.3386"
              height="12.3386"
              rx="6.16929"
              fill="#1B8F98"
            />
            <rect
              x="36.0671"
              width="12.3386"
              height="12.3386"
              rx="6.16929"
              fill="#3E9AA0"
            />
            <rect
              x="54.1003"
              width="12.3386"
              height="12.3386"
              rx="6.16929"
              fill="#6DC2C8"
            />
            <rect
              x="71.4409"
              y="1"
              width="10.3386"
              height="10.3386"
              rx="5.16929"
              fill="#90D5DA"
            />
            <rect
              x="86.5513"
              y="1"
              width="10.3386"
              height="10.3386"
              rx="5.16929"
              fill="#AFE5E9"
            />
            <rect
              x="101.662"
              y="1"
              width="10.3386"
              height="10.3386"
              rx="5.16929"
              fill="#C5EDF0"
            />
          </svg>
        </div>

        {!scrolled && (
          <button
            onClick={handleScrollForward}
            className="absolute top-1/2 right-6 -translate-y-1/2 text-[#ECCAE3] hover:text-[#f0b5e1] text-6xl"
          >
            <HiChevronRight />
          </button>
        )}

        {scrolled && (
          <button
            onClick={handleScrollBack}
            className="absolute top-1/2 left-6 -translate-y-1/2 text-[#ECCAE3] hover:text-[#f0b5e1] text-6xl"
          >
            <HiChevronLeft />
          </button>
        )}
      </div>

      <div className="flex flex-col items-center justify-start pt-20 pb-48">
        <p className="text-white text-6xl font-semibold">Tula's Rankings</p>
        <div className="w-80 mt-3 mb-6 h-1 bg-white"></div>
        <p className="max-w-[40rem] text-[#D9D9D9] text-xl text-center ">
          Join a top-rated institute: Tula's Institute constantly endeavours to
          innovate a business learning environment. Down the line, our
          accomplishments have been recognised by noteworthy global rankings
          including:
        </p>
      </div>

      {/* background image */}
      <div className="w-screen min-h-screen fixed top-0 left-0 -z-10 flex items-center justify-center">
        <Image
          src={backgroundImage}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
