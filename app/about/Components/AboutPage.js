"use client";
import React, { useState, useEffect, useRef } from "react";
import Banner from "@/component/Banner";
import Image from "next/image";
import BannerImg from "../../../public/Components/Banner/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import background from "../../../public/AboutDehradun/background.png";
import { Fade } from "react-awesome-reveal";
import Location from "./Location";
import Management from "./Management";
import AboutManagement from "./AboutManagement";

const button = [
  {
    title: "# Placements In Core Companies",
  },
  {
    title: "# Faculty",
  },
  {
    title: "# Infrastructure",
  },
  {
    title: "# Industry Exposure",
  },
];

export default function AboutPage() {
  const managementRef = useRef(null); // Ref for the Management component
  const statsRef = useRef(null);

  const [ inView, setInView ] = useState(false);
  const [ stats, setStats ] = useState([
    {
      start: 0,
      end: 22,
      description: "ACRE WIFI CAMPUS",
    },
    {
      start: 0,
      end: 150,
      description: "QUALIFIED TEACHERS",
    },
    {
      start: 1800,
      end: 2000,
      description: "STUDENTS ENROLLED",
    },
    {
      start: 0,
      end: 17,
      description: "YEARS OF EXPERIENCE",
    },
  ]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1, // Trigger when at least 100% of the component is visible
    });
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const animateNumbers = () => {
        stats.forEach((stat, index) => {
          let start = stat.start;
          const end = stat.end;
          const duration = 2000; // 2 seconds
          const stepTime = Math.abs(Math.floor(duration / (end - start)));

          const timer = setInterval(() => {
            start += 1;
            setStats((prevStats) =>
              prevStats.map((item, i) =>
                i === index
                  ? { ...item, animatedStatNo: Math.min(start, end) }
                  : item
              )
            );
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
        });
      };
      animateNumbers();
    }
  }, [inView]);

  // Listen to the URL changes and scroll to the section when the hash changes
  useEffect(() => {
    if (
      window.location.pathname === "/about/management-messages/" &&
      managementRef.current
    ) {
      managementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="max-w-[100vw] md:max-w-none overflow-x-hidden">
      <Navbar />
      <Banner
        title={
          <>
            OUR <span className="text-[#007A83]">STORY</span>
          </>
        }
        image={BannerImg}
        description={
          "Tula's Institute is dedicated to serve the community by recognizing the diverse needs of the individuals. We encourage personal and professional development through respect, appreciation and a commitment to general education, as a foundation for life-long learning. Tula’s Institute is the Ranked as No. 9 College in the North India"
        }
        belowTitle={"Sunil Kumar Jain, Founder"}
        belowPara={
          <>
            <span className="text-[#760135] text-[30px]">“</span>
            Education is not only a way of learning new things but also looking
            at the world differently. My 35 Years of Experience in Business,
            Social & Public space has enabled me to provide an ECO system that
            will help you make a correct decision in matters of careers & life.
            <span className="text-[#760135] text-[30px]">“</span>
          </>
        }
      />
      {/* fixed background */}
        <Image
          src={background}
          className="w-full max-w-screen md:max-w-none fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      {/* --- */}

      <div className="w-full pb-8 overflow-x-hidden">
        <div className="bg-transparent w-full pt-2 px-10 flex flex-wrap items-center justify-between gap-x-4">
          {button.map((button, index) => (
            <Fade key={index}>
              <button
                key={index}
                className="text-[#fff] font-bold text-sm md:text-[1.7rem] font-[TTChocolatesBold] rounded-full py-2"
              >
                {button.title}
              </button>
            </Fade>
          ))}
        </div>

        <div className="flex w-full flex-col-reverse md:flex-row items-center justify-center">
          <div
            ref={statsRef}
            className="bg-transparent w-1/2 py-4 flex flex-col items-center justify-center gap-8"
          >
            {stats.map((cards, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-4 w-[300px]"
            >
              <div className="border border-white rounded-full w-20 aspect-square"></div>
              <div className="flex flex-col items-start justify-center gap-0">
                <h3 className="text-[#fff] font-[TTChocolatesBold] text-[45px] font-black">
                  {cards.animatedStatNo || cards.start}
                  {index === 1 && <>+</>}
                  {index === 2 && <>+</>}
                </h3>
                <h2 className="text-white font-[TTChocolates] text-[18px] font-normal">
                  {cards.description}
                </h2>
              </div>
            </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-start h-full px-10 md:px-0 md:pr-20 md:py-12">
              <div className="bg-white w-full md:h-full py-12 md:min-h-[50rem] max-w-[40rem] flex items-start justify-center flex-col px-4 md:px-12 rounded-r-xl">
                <p className="text-[#760135] font-medium font-[TTChocolates] text-[1.4rem] md:text-[2.5rem] text-wrap tracking-widest">
                  <span className="font-bold font-[TTChocolatesBold]">TULA'S</span> IS AN INSPIRING <span className="font-bold font-[TTChocolatesBold]">COLLEGE</span>
                </p>
                <p className="text-[#404040] md:text-[1.8rem] font-medium font-[TTChocolates]">
                  Tula's Institute believes in providing the <span className="font-[TTChocolatesBold] font-black">best possible facilities</span> to its students. We endeavour to create a congenial atmosphere to nurture talent through the support and <span className="font-[TTChocolatesBold] font-bold">guidance of experienced faculty members</span> 
                </p>
              </div>
          </div>
        </div>
      </div>
      <AboutManagement />
      <Location />
      {/* Add ref to the Management component */}
      <div ref={managementRef}>
        <Management  />
      </div>
      <Footer />
    </div>
  );
}
