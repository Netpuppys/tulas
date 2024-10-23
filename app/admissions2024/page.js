"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Updated import for modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import deleteForm from "../../public/admissions/deleteForm.png";
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
import icon5 from "../../public/admissions/icon5.png";
import icon6 from "../../public/admissions/icon6.png";
import icon7 from "../../public/admissions/icon7.png";
import rankingsBanner from "../../public/admissions/rankingsBanner.png";
import lifeAtTulas from "../../public/admissions/lifeAtTulas.png";
import placement1 from "../../public/admissions/placements/placement1.png";
import placement2 from "../../public/admissions/placements/placement2.png";
import placement3 from "../../public/admissions/placements/placement3.png";
import placement4 from "../../public/admissions/placements/placement4.png";
import placement5 from "../../public/admissions/placements/placement5.png";
import placement6 from "../../public/admissions/placements/placement6.png";
import backgroundImage from "../../public/bsc-agriculture/background.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const programsOffered = [
  "B.TECH",
  "BCA",
  "BJMC",
  "M.TECH",
  "MCA",
  "B.SC AGRICULTURE",
  "POLYTECHNIC",
  "B.COM HONS",
  "BBA",
  "MBA",
];

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
    icon: icon5,
    text: "Focus on Innovation, Research, Paper Writing & Entrepreneurship",
  },
  {
    icon: icon6,
    text: "On-campus separate hostel for girls & boys",
  },
  {
    icon: icon7,
    text: "Nutritious, Hygienic & Food Variety available in Mess & Cafeteria",
  },
];

const rankings = [
  {
    rank: "#9",
    title: "Private Engineering College in North India",
  },
  {
    rank: "#32",
    title: "Private Engineering College in India",
  },
  {
    rank: "#41",
    title: "Private College for Placement in India THE TIMES OF INDIA",
  },
  {
    rank: "#42",
    title: "Top B-School in India TIMES OF INDIA 2019",
  },
  {
    rank: "#128",
    title: "India's Top Professional College OUTLOOK 2019",
  },
  {
    rank: "AAA",
    title: "Ranking By Careers 360",
  },
];

const placements = [
  {
    image1: placement1,
    image2: placement2,
  },
  {
    image1: placement3,
    image2: placement4,
  },
  {
    image1: placement5,
    image2: placement6,
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
    <div className="w-full min-h-screen relative font-[TTChocolatesBold]">
      <Link href={"/"} className="absolute top-10 left-10 z-20 w-48">
        <Image src={tulasLogo} className="w-full" alt="" />
      </Link>

      {/* banner */}
      <div className="w-screen h-[80vh] relative overflow-hidden flex items-center justify-center">
        <Image
          src={bannerImage}
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="h-[50vh] absolute top-[15vh] right-[10vw]">
          <Image src={deleteForm} className="w-full h-full" alt="" />
        </div>
      </div>

      {/* banner text */}
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

      {/* programs offered */}
      <div className="w-full pb-28">
        <p className="text-white text-4xl font-[TTChocolatesBold] font-semibold pt-16 text-center">
          Programs Offered at TULA's
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-10 px-24 mt-16">
          {programsOffered.map((item, index) => (
            <div
              className="w-[calc(33%-0.5rem)] rounded-xl h-16 bg-white flex items-center justify-center text-[1.55rem] font-medium text-[#760135]"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRY COLLABORATIONS */}
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

      {/* why tula's */}
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

      {/* icon carousel */}
      <div className="w-full bg-white pt-24 flex flex-col items-center justify-center px-20 pb-6 relative">
        <div
          ref={carouselRef}
          className="max-w-[70rem] w-full flex overflow-x-scroll"
        >
          {iconCarousel.map((item, index) => (
            <div
              key={index}
              className="flex w-1/4 min-w-[25%] px-14 flex-col items-center justify-start"
            >
              <Image
                src={item.icon}
                className="h-16 w-fit max-h-16 mb-6"
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
            className="absolute top-1/2 right-6 -translate-y-1/2 text-[#AADFE3] hover:text-[#9fedf2] text-6xl"
          >
            <HiChevronRight />
          </button>
        )}

        {scrolled && (
          <button
            onClick={handleScrollBack}
            className="absolute top-1/2 left-6 -translate-y-1/2 text-[#AADFE3] hover:text-[#9fedf2] text-6xl"
          >
            <HiChevronLeft />
          </button>
        )}
      </div>

      {/* tulas ranking */}
      <div className="flex flex-col items-center justify-start pt-20 pb-24">
        <p className="text-white text-6xl font-semibold">Tula's Rankings</p>
        <div className="w-80 mt-3 mb-6 h-1 bg-white"></div>
        <p className="max-w-[40rem] text-[#D9D9D9] text-xl text-center ">
          Join a top-rated institute: Tula's Institute constantly endeavours to
          innovate a business learning environment. Down the line, our
          accomplishments have been recognised by noteworthy global rankings
          including:
        </p>
        <div className="flex gap-8 mt-20 relative">
          <div className="w-[calc(100%-8rem)] h-[3px] -translate-x-1/2 absolute bg-[#ECCAE3] rounded-full top-[calc(3rem-1.5px)] left-1/2"></div>
          {rankings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start gap-6"
            >
              <div
                className={`w-24 relative shadow-[0px_4px_53.3px_5px_rgba(0,0,0,0.8)] group transition-all ease-linear duration-300 aspect-square rounded-full flex items-center justify-center border-2 border-white ${
                  index > 2 ? "bg-transparent backdrop-blur-lg" : "bg-white"
                }`}
              >
                <div className="absolute hidden z-0 transition-all ease-linear duration-300 group-hover:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7.5rem] aspect-square rounded-full bg-transparent border-2 border-white"></div>
                <p
                  className={`text-3xl z-10 font-semibold ${
                    index > 2 ? "text-white" : "text-[#3D001B]"
                  }`}
                >
                  {item.rank}
                </p>
              </div>
              <p className="text-center text-xl font-[TTChocolates] font-medium max-w-48">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <Image
          src={rankingsBanner}
          className="w-full mt-40 object-contain h-fit"
          alt=""
        />
        <div className="pb-10 mt-32 w-full flex items-center justify-center px-20 relative">
          <div className="flex w-full max-w-[70rem] items-center justify-center gap-10">
            <button className="prev-btn border-2 absolute top-1/2 -translate-y-1/2 left-20 border-white rounded-full w-16 aspect-square bg-transparent text-white hover:text-[#007A83] hover:bg-white text-3xl flex items-center justify-center">
              <BsArrowLeft />
            </button>
            <div className="max-w-[80rem] w-full relative">
              <Swiper
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
                loop={true}
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {placements.map((item, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="flex w-full h-fit items-center justify-center gap-8">
                      <div className="w-[calc(50%-1rem)] h-80 flex items-center justify-center bg-white rounded-3xl shadow-lg overflow-hidden">
                        {/* Left Card Content */}
                        <Image
                          src={item.image1}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="w-[calc(50%-1rem)] h-80 flex items-center justify-center bg-white rounded-3xl shadow-lg overflow-hidden">
                        {/* Right Card Content */}
                        <Image
                          src={item.image2}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button className="next-btn border-2 absolute top-1/2 -translate-y-1/2 right-20 border-white rounded-full w-16 aspect-square bg-transparent text-white hover:text-[#007A83] hover:bg-white text-3xl flex items-center justify-center">
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* life at tula's */}
      <div className="bg-white w-full pt-10 pb-16 flex flex-col items-center justify-start px-10">
        <p className="text-5xl text-[#3D001B] text-center font-semibold">
          Life At TULA's
        </p>
        <div className="w-80 h-[3px] bg-[#3D001B] rounded-full"></div>
        <div className="max-w-[70rem] w-full h-fit mt-12">
          <Image
            src={lifeAtTulas}
            className="w-full object-cover h-fit"
            alt=""
          />
        </div>
        <p className="max-w-[70rem] mt-14 w-full text-wrap text-center text-[#434343] text-2xl font-[TTChocolates]">
          <span className="font-[TTChocolatesBold] font-bold text-[#007A83]">
            Tula's Institute
          </span>{" "}
          is spread in 20 acres of lush green campus and has been rated as the
          No. 1 college in Dehradun having state of the art facilities like
          auditorium, high-tech computer labs and with world class library
          having a collection of 32,000 books, play grounds, hostels,
          multi-cuisine cafeteria, fully wi-fi enabled campus, virtual labs,
          skill development center etc for holistic development of the students.
        </p>
      </div>

      {/* awards */}
      <div className="w-full text-5xl bg-white h-[40rem] flex items-center justify-center font-[TTChocolatesBold] font-bold text-[#3D001B]">
        Awards
      </div>

      {/* A Glimpse of TULA's */}
      <div className="w-full bg-transparent py-24 flex flex-col items-center justify-center px-20">
        <p className="text-white text-4xl font-semibold">A Glimpse of TULA's</p>

        <div className="max-w-[65rem] bg-opacity-50 mt-12 w-full aspect-video bg-[#3D001B]"></div>

        <div className="max-w-[50rem] w-full mx-auto flex mt-20 justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-[#fff] bg-opacity-55"></div>
          <div className="w-full h-[2px] bg-[#fff] bg-opacity-55"></div>
          <div className="w-3 h-3 rounded-full bg-[#fff] bg-opacity-55"></div>
        </div>

        <p className="text-[#DEDEDE] text-center text-2xl font-medium mt-8">
          © Copyright 2024 Tula's Institute All Right Reserved
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
