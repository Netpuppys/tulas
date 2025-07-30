"use client";
import React, { useState, useEffect, useRef } from "react";
import Banner from "@/component/Banner";
import Image from "next/image";
import BannerImg from "../../../public/About/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import background from "../../../public/AboutDehradun/background.png";
import { Fade } from "react-awesome-reveal";
import Location from "./Location";
import Management from "./Management";
import AboutManagement from "./AboutManagement";
import BannerHome from "@/app/Component/BannerHome";
import BannerImage from "../../../public/Homepage/BannerHome/banner.png";
import BannerImage1 from "../../../public/Homepage/BannerHome/BannerImage1.webp";
import BannerImage2 from "../../../public/Homepage/BannerHome/BannerImage2.webp";
import BannerImage3 from "../../../public/Homepage/BannerHome/BannerImage3.webp";
import BannerImage4 from "../../../public/Homepage/BannerHome/BannerImage4.webp";
import BannerImage5 from "../../../public/Homepage/BannerHome/BannerImage5.webp";
import BannerImage6 from "../../../public/Homepage/BannerHome/BannerImage6.webp";
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

  const bannerImages = [
    BannerImage,
    BannerImage1,
    BannerImage2,
    BannerImage3,
    BannerImage4,
    BannerImage5,
    BannerImage6,
  ];

  return (
    <div className="max-w-[100vw] md:max-w-none overflow-x-hidden">
      <Navbar />
      <BannerHome
        bannerImages={bannerImages}
      />
      <div className="bg-white w-full">
        <div className="min-h-fit py-8 md:py-[3%] h-fit md:min-h-[15vh] w-full overflow-hidden flex flex-col justify-center max-w-[1200px] mx-auto">
          <h3 className="text-2xl font-[CarotSlab] font-bold md:text-4xl text-[#760135] text-left mb-3">
            <span className="text-[#000]">ABOUT</span> TULA'S
          </h3>
          <h4 className="leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] text-[#404040]">
            <>
              Tula's Institute is dedicated to serve the community by recognizing the diverse needs of the individuals.  Tula's Institute is recognized as one of the 'Top Engineering Colleges in Uttarakhand. Known for its excellence in academic programs from undergraduate to postgraduate level, Tula's Institute attracts students from different states of India and neighbouring countries at priority. At Tula's Institute, we believe in maintaining a balance between academics and extra/co- curricular activities while keeping a healthy teacher-student ratio and in providing equal opportunities for all.
            </>
          </h4>
        </div>
      </div>
      {/* fixed background */}
     

      <Footer />
    </div>
  );
}
