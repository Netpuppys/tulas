"use client";
import React, { useState, useEffect, useRef } from "react";
import Banner from "@/component/Banner";
import Image from "next/image";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import background from "../../public/AboutDehradun/background.png";
import { Fade } from "react-awesome-reveal";
import Location from "./Components/Location";
import Management from "./Components/Management";
import AboutManagement from "./Components/AboutManagement";
export default function About() {
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
  const [inView, setInView] = useState(false);
  const [stats, setStats] = useState([
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
  const statsRef = useRef(null);

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
          const duration = 2000; // 1 seconds
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
  return (
    <>
      <Navbar />
      <Banner
        title={
          <>
            OUR <span className="text-[#007A83]">STORY</span>
          </>
        }
        image={BannerImg}
        description={
          "Tula’s Institute is dedicated to serve the community by recognizing the diverse needs of the individuals. We encourage personal and professional development through respect, appreciation and a commitment to general education, as a foundation for life-long learning. Tula’s Institute is the Ranked as No. 9 College in the North India"
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
      <div className="w-full relative overflow-hidden -mb-[6vh]">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div className="py-8">
        <div className="bg-transparent w-full pt-20 flex items-center justify-center gap-4">
          {button.map((button, index) => (
            <Fade>
              <button
                key={index}
                className="text-[#E69706] text-[18px] font-[TTChocolates] rounded-full py-2 px-10 bg-white"
              >
                {button.title}
              </button>
            </Fade>
          ))}
        </div>
        <div
          ref={statsRef}
          className="bg-transparent w-full py-4 flex items-center justify-center gap-4"
        >
          {stats.map((cards, index) => (
            <Fade>
              <div
                key={index}
                className="backdrop-blur-md bg-white bg-opacity-30 w-[227px] flex flex-col items-center justify-center gap-3 rounded-2xl h-[208px]"
              >
                <h3 className="text-[#E69706] font-[TTChocolatesBold] text-[45px] font-black">
                  {cards.animatedStatNo || cards.start}
                  {index === 1 && <>+</>}
                  {index === 2 && <>+</>}
                </h3>
                <h2 className="text-white font-[TTChocolates] text-[18px] font-normal">
                  {cards.description}
                </h2>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <AboutManagement />
      <Location />
      <Management />
      <Footer />
    </>
  );
}
