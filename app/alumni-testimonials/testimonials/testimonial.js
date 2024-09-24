"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import SrishtiTiwari from "../../../public/alumni/Srishti-Tiwari-2018-21.webp";
import DiptanuDebnath from "../../../public/alumni/Diptanu-Debnath-2018-20.webp";
import NikitaBhoomia from "../../../public/alumni/Nikita-Bhoomia-2018-20.webp";
import RichaMunola from "../../../public/alumni/Richa-Munola.webp";
import Lakshya from "../../../public/alumni/Lakshya.webp";
import AvneetKaur from "../../../public/alumni/Avneet-Kaur.webp";
import anubhav from "../../../public/alumni/anubhav-pagotra-convert.io_.webp";
import Divyangna from "../../../public/alumni/Divyangna-sharma-convert.io_.webp";
import ARVIND from "../../../public/alumni/ARVIND.webp";
import Himanshu from "../../../public/alumni/Himanshu.webp";
import Mirza from "../../../public/alumni/Mirza.webp";
import abdul from "../../../public/alumni/abdul.webp";
import Image from "next/image";
function Testimonial() {
  const features = [
    {
      image: SrishtiTiwari,
      name: "SRISHTI TIWARI",
      batch: "Planet Spark (Batch: 2018-21)",
      description: (
        <>
          The faculties, have a unique combination of knowledge and industry
          experience that enables students to gain the necessary skill sets that
          the business requires. Students are shaped up with the support of
          professors and given the ideal opportunity for employment, which is
          something that every Management student want after completing their
          degree!!
          <br />
          Tula’s Institute, thank you for a wonderful journey.
        </>
      ),
    },
    {
      image: DiptanuDebnath,
      name: "Diptanu Debnath ",
      batch: "Ebullient Securities Pvt. Ltd (Batch: 2018-20)",
      description: (
        <>
          Tula’s Institute prepared me for the business world from the start.
          The placement cell (which could be described as a "Mini Corporate
          World") has taught me to be creative and precise in my approach to any
          strategic goals set for a professional. A proper method can solve any
          challenges in hand, whether the work scope is within sphere of
          expertise or not. My teachers/mentors were important in motivating me
          to THINK BIG & GET BIG. Thank you, Tula’s Institute, for imparting an
          optimistic outlook in the face of adversity.
        </>
      ),
    },
    {
      image: NikitaBhoomia,
      name: "Nikita Bhoomia",
      batch: "MNR Solution Pvt. Ltd. (Batch: 2018-20)",
      description: (
        <>
          During my two years with an MBA from Tula’s Institute, I had countless
          opportunities to acquire analytical, leadership, and positive thinking
          through a variety of programs and events. These qualities were the key
          to my success as HR recruiter at MNR Solution Pvt. Ltd. A big thank
          you to all my faculty and friends for making a wonderful journey at
          Tula’s Institute.
        </>
      ),
    },
    {
      image: RichaMunola,
      name: "RICHA MANOLA",
      batch: "TCS (B.Tech. CSE-2015-2019) ",
      description: (
        <>
          My life at Tula’s Institute made me stronger and took me a step ahead
          for being an independent women. I am thankful to all the teachers who
          supported us and corrected us throughout our bachelors. I loved the
          infrastructure of Tula’s Institute and its International life. The
          events that I took part helped me to grow my confidence level. I would
          like to specially thank the placement cell for guiding me and
          providing me a good platform (company) for my career.
        </>
      ),
    },
    {
      image: Lakshya,
      name: "LAKSHAY JOSHI",
      batch: "UX Researcher Dainik Bhaskar (B.Tech. CSE-2013-2017)",
      description: (
        <>
          My four years at Tula’s were great and a memory to cherish for
          lifetime. It was full of learning and grooming oneself. It gave me an
          opportunity to meet different kind of people and learned many things.
          I am thankful to all the faculties, mentors as well as placement cell.
          Overall it was a great experience and lifetime memory at Tula’s.
        </>
      ),
    },
    {
      image: AvneetKaur,
      name: "AVNEET KAUR",
      batch: "Growth Natives (B.Tech. CSE-2015-2019)",
      description: (
        <>
          My bachelor degree at Tula’s Institute in computer science consisted
          of many projects based evaluation and faculty connect. The mentors at
          Tula’s Institute helped us enhance my academic and interpersonal
          skills. The regular interaction with the Placement team also
          encouraged me to excel in my interview and developing skills that are
          required for future use.
        </>
      ),
    },
    {
      image: anubhav,
      name: "ANUBHAV PAGOTRA",
      batch: "Ebullient Securities Pvt. Ltd (Batch: 2018-20)",
      description: (
        <>
          Tula’s Institute prepared me for the business world from the start.
          The placement cell (which could be described as a "Mini Corporate
          World") has taught me to be creative and precise in my approach to any
          strategic goals set for a professional. A proper method can solve any
          challenges in hand, whether the work scope is within sphere of
          expertise or not. My teachers/mentors were important in motivating me
          to THINK BIG & GET BIG. Thank you, Tula’s Institute, for imparting an
          optimistic outlook in the face of adversity.
        </>
      ),
    },
    {
      image: Divyangna,
      name: "DIVYANGNA SHARMA",
      batch:
        "Dearch designs and constructions pvt ltd (B.TECH CIVIL-2014-2018)",
      description: (
        <>
          My four years at Tula’s Institute were great and a memory to cherish
          for lifetime. It was full of learning and grooming oneself. It gave me
          an opportunity to meet different kind of people and learned many
          things. I am thankful to all the faculties, mentors and entire
          department . Overall it was a great experience and lifetime memory at
          Tula’s Institute.
        </>
      ),
    },
    {
      image: ARVIND,
      name: "Arvind Manral",
      batch: "Galfar Engineering & Contracting (B.TECH CIVIL-2016-2020)",
      description: (
        <>
          Tula’s Institute is great place to learn. It gives me great to say
          with pride that i have completed my B.Tech in Civil from this
          Institute. The relationship between faculities and student is very
          cordial, which gave me an opportunity to excel in my area of interest.
          The T and P cell is very supportive and they have conducted various
          sessions which helped me to get placed.
        </>
      ),
    },

    {
      image: Himanshu,
      name: "Himanshu Negi",
      batch: "Software Developer, Infosys (B.Tech EEE 2013-17)",
      description: (
        <>
          Tula’s Institute has competent and capable teachers who are
          proactively involved in providing the very best to their students.
          Thanks to the entire staff for their guidance, boost, motivation, and
          support. I had an amazing two years of experience at this campus, and
          I will always miss this place.
        </>
      ),
    },
    {
      image: Mirza,
      name: "Mirja Haider beg",
      batch: "BDM Byjus Learning Application (B.Tech EEE 2013-17)",
      description: (
        <>
          Tula’s Institute has always been a place to learn, enjoy, and life
          preaching activities. The memories here are that I would like to
          cherish for a lifetime. Whether it be academics or other activities,
          the faculties here have put in all the efforts to groom us in the best
          possible way. Not to forget the training and placement cell team, who
          were very supportive at times. Their various sessions and mentoring
          guided me to get placed in an esteemed company.
        </>
      ),
    },
    {
      image: abdul,
      name: "Addul Rehman",
      batch:
        "Commisioning Engineer, Tata advanced system limited (B.Tech EEE 2013-17) ",
      description: (
        <>
          “It is all because of the efforts put by our faculty and training and
          placement department which always make sure that students get placed
          in the best company in the market. I am really thankful towards Tula’s
          Institute and our training and placement cell for providing platform
          to enhance my career. It is dream come true to work with such an
          amazing company in the beginning of my career.”
        </>
      ),
    },
  ];

  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (activeIndex < features.length - 1) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div>
      <h3 className="text-white text-center font-[TTChocolatesBold] text-[50px]">
        Testimonials
      </h3>
      <div>
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={swiperRef}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex py-10 h-full w-[85%] gap-12 mx-auto items-center justify-center">
                <Image
                  src={feature.image}
                  alt=""
                  className="w-[417px] rounded-3xl h-[412px] object-cover"
                />
                <div className="border-[#E69706] bg-[#D9D9D9] bg-opacity-20 backdrop-blur-md w-[80%] rounded-2xl mx-auto flex flex-col justify-between gap-8 border-2 px-8 py-10 cursor-pointer">
                  <div>
                    <h2 className="text-[40px] leading-none text-white font-[TTChocolatesBold] font-extrabold text-left mb-4">
                      {feature.name}
                    </h2>
                    <h3 className="text-[35px] leading-none text-white font-[TTChocolatesBold] font-extrabold text-left mb-4">
                      {feature.batch}
                    </h3>
                  </div>
                  <p className="text-white mb-4 text-[22px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex space-x-10 pt-4 justify-center self-center">
          <button
            onClick={handlePrevClick}
            className={`pointer-events-auto shadow-2xl text-[#007A83] h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center text-[40px] ${
              activeIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "active:scale-90"
            }`}
            disabled={activeIndex === 0}
          >
            <HiMiniArrowLongLeft />
          </button>
          <button
            onClick={handleNextClick}
            className={`pointer-events-auto shadow-2xl text-[#007A83] h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center text-[40px] ${
              activeIndex === features.length - 1
                ? "cursor-not-allowed opacity-50"
                : "active:scale-90"
            }`}
            disabled={activeIndex === features.length - 1}
          >
            <HiMiniArrowLongRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
