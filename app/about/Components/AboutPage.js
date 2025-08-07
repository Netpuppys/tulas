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
import AccreditationLogo from "@/app/Component/AccreditationLogo";
import { FaWifi, FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Virtual from "@/app/Component/Virtual";
import dynamic from 'next/dynamic';


// import hallfame1 from "/public/About/hallfame1.png";
// import hallfame2 from "/public/About/hallfame2.png";
// import hallfame3 from "/public/About/hallfame3.png";

import hallfame1 from "/public/About/hallfame/Aanchal.png";
import hallfame2 from "/public/About/hallfame/ABHISHEK PANDY.png";
import hallfame3 from "/public/About/hallfame/Dheeraj Kumar.png";
import hallfame4 from "/public/About/hallfame/Divya Shankar.png";
import hallfame5 from "/public/About/hallfame/Nainsee Singh.png";
import hallfame6 from "/public/About/hallfame/Nitin.png";
import hallfame7 from "/public/About/hallfame/Rahul Bauri.png";
import hallfame8 from "/public/About/hallfame/Rishabh Singh Kathait.png";
import hallfame9 from "/public/About/hallfame/Rishita Patel.png";
import hallfame10 from "/public/About/hallfame/Shambhavi Raj Chauhan.png";
import hallfame11 from "/public/About/hallfame/Shristi Saumya.png";
import hallfame12 from "/public/About/hallfame/Srishti Gupta.png";
import hallfame13 from "/public/About/hallfame/Untitled-1.png";


import abtgallery from "/public/About/aboutgallery/lat1.jpg";
import abtgallery1 from "/public/About/aboutgallery/lat2.jpg";
import abtgallery2 from "/public/About/aboutgallery/lat3.jpg";
import abtgallery3 from "/public/About/aboutgallery/lat4.jpg";
import abtgallery4 from "/public/About/aboutgallery/lat5.jpg";
import abtgallery5 from "/public/About/aboutgallery/lat6.jpg";
import abtgallery6 from "/public/About/aboutgallery/lat7.jpg";
import abtgallery7 from "/public/About/aboutgallery/lat8.jpg";
import abtgallery8 from "/public/About/aboutgallery/lat9.jpg";
import ImageGallery from "./ImageGallery";






const HallFame = dynamic(() => import("./HallFame"), {
  ssr: false,
});

const AboutGallery = dynamic(() => import("./AboutGallery"), {
  ssr: false,
});

 const features = [
    {
      image: hallfame1,
      image2: hallfame2,
      image3: hallfame3 ,
    },
    {
       image: hallfame4,
      image2: hallfame5,
      image3: hallfame6 ,
    },
        {
       image: hallfame7,
      image2: hallfame8,
      image3: hallfame9 ,
    },
        {
       image: hallfame10,
      image2: hallfame11,
      image3: hallfame12 ,
    },
    
  ];

   const aboutimages = [
    {
      image: abtgallery,
      image2: abtgallery1,
      image3: abtgallery2 ,
    },
    {
       image: abtgallery3,
      image2: abtgallery4,
      image3: abtgallery5 ,
    },
        {
       image: abtgallery6,
      image2: abtgallery7,
      image3: abtgallery8 ,
    },

    
  ];

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
    BannerImage3,
    BannerImage2,
    BannerImage1,
    BannerImage4,
    BannerImage5,
    BannerImage6,
  ];

    const name = [
    "Ranked 86th by Times of B School in India.",
    "Ranked Amongst Top 50 Private College in India.",
    "NAAC A+ Highest Ranking in Uttrakhand.",
    "65th best Engineering Colleges in India by Outlook.",
    "Ranked 86th by Times of B School in India.",
    "Ranked Amongst Top 50 Private College in India.",
    "NAAC A+ Highest Ranking in Uttrakhand.",
    "65th best Engineering Colleges in India by Outlook.",
    "Ranked 86th by Times of B School in India.",
    "Ranked Amongst Top 50 Private College in India.",
    "NAAC A+ Highest Ranking in Uttrakhand.",
    "65th best Engineering Colleges in India by Outlook.",
  ];

    const newstats = [
    {
      icon: <FaWifi className="text-[#760135] text-5xl mb-2" />,
      value: "22",
      label: ["ACRES", "WIFI ENABLED"],
    },
    {
      icon: <FaUserGraduate className="text-[#760135] text-5xl mb-2" />,
      value: "200+",
      label: ["QUALIFIED", "FACULTY MEMBERS"],
    },
    {
      icon: <PiStudentFill className="text-[#760135] text-5xl mb-2" />,
      value: "3000+",
      label: ["STUDENTS", "ENROLLED"],
    },
    {
      icon: <FaBriefcase className="text-[#760135] text-5xl mb-2" />,
      value: "20+",
      label: ["YEARS OF", "EXPERIENCE"],
    },
  ];




  return (
    <div className="max-w-[100vw] md:max-w-none overflow-x-hidden">
      <Navbar />
      <BannerHome
        bannerImages={bannerImages}
      />
      <div className="bg-white w-full px-3">
        <div className="min-h-fit py-8 md:py-[3%] h-fit md:min-h-[15vh] w-full overflow-hidden flex flex-col justify-center max-w-[1200px] mx-auto">
          <h3 className="text-2xl font-[] font-bold md:text-5xl text-[#760135] text-left mb-3">
            <span className="text-[#000]">ABOUT</span> TULA'S
          </h3>
          <h4 className="leading-tight text-[clamp(13px,4vw,30px)] md:text-[clamp(13px,1.1vw,45px)] font-[TTChocolates] text-[#404040]">
            <>
              Tula's Institute is dedicated to serve the community by recognizing the diverse needs of the individuals.  Tula's Institute is recognized as one of the 'Top Engineering Colleges in Uttarakhand. Known for its excellence in academic programs from undergraduate to postgraduate level, Tula's Institute attracts students from different states of India and neighbouring countries at priority. At Tula's Institute, we believe in maintaining a balance between academics and extra/co- curricular activities while keeping a healthy teacher-student ratio and in providing equal opportunities for all.
            </>
          </h4>
        </div>
      </div>
      
<div className="w-full my-8">
  {/* Desktop Image */}
  <img
    src="/About/bannerabout.png"
    alt="About Us Banner"
    className="w-full h-auto hidden md:block"
  />

  {/* Mobile Image */}
  <img
    src="/About/bannerabout-mobile.jpg"
    alt="About Us Banner Mobile"
    className="w-full h-auto block md:hidden"
  />
</div>

      <AccreditationLogo/>

          <div className="relative overflow-hidden my-8">
          {/* Blurred sides */}
          <div className="pointer-events-none absolute top-0 left-0 w-[7%] h-full z-10  bg-gradient-to-r from-[#760135] to-transparent" />
          {/* Scrolling text */}
          <marquee
            direction="left"
            scrollamount="10"
            className="ml-[7%] w-[93%]"
          >
            <div className="w-fit py-2 md:py-6 flex gap-4 md:gap-[2%] whitespace-nowrap">
              {name.map((item, index) => (
                <div key={index} className="relative w-fit mx-auto">
                  <h2 className="text-[clamp(10px,3.5vw,50px)] text-center md:text-[clamp(10px,1.2vw,50px)] bg-gradient-to-r from-[#E69706] via-[#760135] to-[#007A83] text-transparent bg-clip-text font-[TTChocolates] leading-tight font-extrabold">
                    {item}
                  </h2>
                </div>
              ))} 
            </div>
          </marquee>
            <div className="pointer-events-none absolute top-0 right-0 w-[7%] h-full z-10 bg-gradient-to-l from-[#760135] to-transparent" />

        </div>

        <div className="bg-white py-5">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6">
            {newstats.map((item, idx) => (
              <div
                key={idx}
                className="w-[250px] bg-[#eee] shadow-md p-6 text-center rounded"
              >
                <div className="flex justify-center mb-2">{item.icon}</div>
                <div className="text-[#760135] text-2xl font-bold">{item.value}</div>
                <div className="text-sm text-black font-medium leading-tight mt-1">
                  <div>{item.label[0]}</div>
                  <div className="font-bold">{item.label[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white py-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-20">

    {/* Left Section */}
    <div className="text-center md:text-left md:w-[40%]">
      <h3 className="text-[#760135] text-3xl font-semibold mb-1">
        Innovate, Create & Lead
      </h3>
      <h2 className="text-5xl font-bold text-[#760135]">
        <span className="text-black">The </span>TULA’S way
      </h2>
    </div>

    {/* Right Section */}
    <div className="md:w-[60%] text-md text-[#222] tracking-wide leading-relaxed text-justify">
      <p>
        Tula’s Institute is redefining the future of education. It goes beyond mere textbooks and lectures; it involves cultivating an environment conducive to invention. At Tula’s, each project serves as a chance to challenge conventions, every concept represents a progression towards innovation, and every student is enabled to reimagine the realm of possibility. Education ignites curiosity and propels transformation.
      </p>
    </div>

  </div>
        </div>

        <div className="bg-[#760135] text-white py-10 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <h2 className="text-center text-4xl font-extrabold mb-12">University Highlights</h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      
      {/* Box 1 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-5xl font-extrabold leading-none">22</div>
        <div className="text-base mt-2 font-medium">
          <span className="text-sm">Years of</span><br />
          Excellence
        </div>
      </div>

      {/* Box 2 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-5xl font-extrabold leading-none">₹60</div>
        <div className="text-base mt-2 font-medium">
          <span className="text-sm">LPA</span><br />
          Package
        </div>
      </div>

      {/* Box 3 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-5xl font-extrabold leading-none">
          750<sup className="text-2xl align-super">+</sup>
        </div>
        <div className="text-base mt-2 font-medium">
          Tie-Ups With<br />
          Companies
        </div>
      </div>

      {/* Box 4 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-5xl font-extrabold leading-none">
          1.5<sup className="text-2xl align-super">+</sup>
        </div>
        <div className="text-base mt-2 font-medium">
          Crore Funded<br />
          Projects
        </div>
      </div>

      {/* Box 5 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-5xl font-extrabold leading-none">
          50<sup className="text-2xl align-super">+</sup>
        </div>
        <div className="text-base mt-2 font-medium">
          Patents
        </div>
      </div>

      {/* Box 6 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-sm font-semibold mb-1">Ranked</div>
        <div className="text-5xl font-extrabold leading-none">9</div>
        <div className="text-base mt-2 font-medium">
          Private College<br />
          In North India
        </div>
      </div>

      {/* Box 7 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-sm font-semibold mb-1">Ranked</div>
        <div className="text-5xl font-extrabold leading-none">31</div>
        <div className="text-base mt-2 font-medium">
          Private College<br />
          In India
        </div>
      </div>

      {/* Box 8 */}
      <div className="bg-[#11867D] rounded-xl py-5 px-4 flex items-center gap-4 text-left">
        <div className="text-sm font-semibold mb-1">Ranked</div>
        <div className="text-5xl font-extrabold leading-none">41</div>
        <div className="text-base mt-2 font-medium">
          Private College<br />
          For Placements
        </div>
      </div>

    </div>
  </div>
        </div>

        <Virtual/>

        {/* <AboutGallery aboutimages={aboutimages} />         */}

        <ImageGallery/>

        <HallFame halltitle="Hall Of Fame" features={features} />



      <Footer />
    </div>
  );
}
