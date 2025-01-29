"use client";
import React, { useState, useEffect, useRef } from "react";
import Banner from "@/component/Banner";
import Image from "next/image";
import BannerImg from "../../../public/About/bannerImg.png";
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

  const [inView, setInView] = useState(false);
  const [stats, setStats] = useState([
    {
      start: 0,
      end: 22,
      description: "Acre Wi-Fi Enabled Campus",
    },
    {
      start: 0,
      end: 150,
      description: "Qualified Faculty Members",
    },
    {
      start: 2850,
      end: 3000,
      description: "Students Enrolled",
    },
    {
      start: 0,
      end: 19,
      description: "Years of Excellence in Education",
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
      threshold: 0.5, // Trigger when at least 50% of the component is visible
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
          const duration = 1000; // 2 seconds
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
            ABOUT <span className="text-[#007A83]">TULA'S</span>
          </>
        }
        image={BannerImg}
        description={
          "Tula’s Institute, proudly ranked as the 9th best college in North India, is a hub for innovation, personal growth, and lifelong learning. We are committed to recognizing individual potential and helping students transform it into success stories. We create an environment of respect, encouragement, and lifelong learning to help students achieve their dreams."
        }
        belowTitle={"Sunil Kumar Jain, Founder"}
        belowPara={
          <>
            <span className="text-[#760135] text-[30px] leading-none">“</span>
            Education is not just about learning new things, but about seeing
            the world in a different light. With over 35 years of experience in
            business, social, and public spaces, I have built an ecosystem
            designed to guide students in making the right decisions for their
            career and life.
            <span className="text-[#760135] text-[30px] leading-none">“</span>
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

      <div className="w-full pb-8 md:pb-20 overflow-x-hidden">
        <div className="bg-transparent w-full md:w-[70%] mx-auto py-8 md:pt-2 pb-16 md:pb-0 px-4 md:px-10 flex flex-wrap items-center justify-between gap-x-4">
          {button.map((button, index) => (
            <Fade key={index}>
              <button
                key={index}
                className="text-[#fff] font-bold leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolatesBold] rounded-full py-2"
              >
                {button.title}
              </button>
            </Fade>
          ))}
        </div>

        <div className="flex w-full flex-col-reverse md:flex-row items-center gap-16 md:gap-0 mb-16 md:mb-0 justify-center">
          <div
            ref={statsRef}
            className="bg-transparent w-full md:w-1/2 py-4 pb-8 md:pb-0 flex flex-wrap md:flex-col items-center justify-center gap-2 md:gap-8"
          >
            {stats.map((cards, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-4 w-[calc(50%-1rem)] md:w-[300px]"
              >
                <div className="border border-white shadow-inner rounded-full w-12 md:w-20 aspect-square"></div>
                <div className="flex flex-col items-start justify-center gap-0">
                  <h3 className="text-[#fff] font-[TTChocolatesBold] text-[28px] md:text-[45px] font-black">
                    {cards.animatedStatNo || cards.start}
                    {index === 1 && <>+</>}
                    {index === 2 && <>+</>}
                    {index === 3 && <>+</>}
                  </h3>
                  <h2 className="text-white font-[TTChocolates] text-[14px] md:text-[18px] font-normal">
                    {cards.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-start h-full px-6 md:px-0 md:pr-20 md:py-12">
            <div className="bg-white w-full md:h-full py-8 md:min-h-[50rem] max-w-[40rem] flex items-start justify-center flex-col px-8 md:px-12 ">
              <p className="text-[#760135] font-medium font-[TTChocolatesBold] text-[1.4rem] md:text-[2.5rem] text-wrap tracking-widest">
                Innovate, Create, Lead – The Tula’s Way
              </p>
              <p className="text-[#404040] text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-medium font-[TTChocolates] leading-tight">
                Tula’s Institute is where the future of education is being
                reimagined. It’s not just about textbooks and lectures; it’s
                about creating a playground for innovation. At Tula’s, every
                project is an opportunity to challenge norms, every idea is a
                step towards something groundbreaking, and every student is
                empowered to redefine what's possible. It’s education that
                sparks curiosity and drives change.
              </p>
            </div>
          </div>
        </div>
        <AboutManagement />
      </div>

      <Location />
      {/* Add ref to the Management component */}
      <div ref={managementRef}>
        <Management />
      </div>
      <Footer />
    </div>
  );
}
