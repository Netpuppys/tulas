"use client";
import React from "react";
import Navbar from "@/component/Navbar/Navbar";
import bannerImage from "../../../public/placements/placemnetnewbanner.png";
import placement1 from "../../../public/placements/placement1.webp";
import placement2 from "../../../public/placements/placement2.webp";
import placement3 from "../../../public/placements/placement3.webp";
import Footer from "@/component/Footer";
import { FaWifi, FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaIdBadge, FaHandshake, FaUserTie } from "react-icons/fa";
import NewBannerProgram from "@/component/Programs/NewBannerProgram";
import AccreditationLogo from "@/app/Component/AccreditationLogo";
import HallFame from "@/app/about/Components/HallFame";

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

import leader1 from "/public/placement-team/leader1.png";
import leader2 from "/public/placement-team/leader2.png";
import leader3 from "/public/placement-team/leader3.png";
import leader4 from "/public/placement-team/leader4.png";
import leader5 from "/public/placement-team/leader5.png";
import leader6 from "/public/placement-team/leader6.png";
import leader7 from "/public/placement-team/leader7.png";
import leader8 from "/public/placement-team/leader8.png";
import leader9 from "/public/placement-team/leader9.png";
import leader10 from "/public/placement-team/leader10.png";


import TopRecruiters from "@/app/about/Components/TopRecruiters";

import {
  FaClipboardList,
  FaChalkboardTeacher,
  FaBuilding,
  FaCalendarAlt,
  FaSearch,
  FaEnvelopeOpenText,
  FaHandsHelping,
} from 'react-icons/fa';
import PlacementProcess from "../components/PlacementProcess";
import TeamSection from "../components/TeamSection";
import PlacementDrive from "../components/PlacementDrive";
import Leaders from "../components/Leaders";
import TopPlacements from "../components/TopPlacements";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Placementpagebanner from "../components/Placementpagebanner";

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

       const leaders = [
      {
        image: leader1,
        image2: leader2,
      },
      {
         image: leader3,
        image2: leader4,
      },
      {
         image: leader5,
        image2: leader6,
      },
      {
         image: leader7,
        image2: leader8,
      },
      {
         image: leader9,
        image2: leader10,
      },
      
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
      icon: <PiStudentFill className="text-[#760135] text-5xl mb-2" />,
      value: "400+",
      label: ["Overall Students placed"],
    },
    {
      icon: <FaIdBadge className="text-[#760135] text-5xl mb-2" />,
      value: "1.4 CR",
      label: ["Top Packages"],
    },
    {
      icon: <FaHandshake className="text-[#760135] text-6xl mb-2" />,
      value: "79%",
      label: ["Overall Placements"],
    },
    {
      icon: <FaUserTie className="text-[#760135] text-5xl mb-2" />,
      value: "700+",
      label: ["Recruiters Tie-Ups"],
    },
  ];

const stepsData = [
  {
    placementtitle: 'Registration',
    description: 'Students register for placement activities.',
    icon: <FaClipboardList className="text-3xl text-[#74043D]" />,
  },
  {
    placementtitle: 'Pre-Placement',
    description: 'Skill-building sessions for job readiness.',
    icon: <FaChalkboardTeacher className="text-3xl text-[#74043D]" />,
  },
  {
    placementtitle: 'Employer Engagement',
    description: 'Companies invited for recruitment drives.',
    icon: <FaBuilding className="text-3xl text-[#74043D]" />,
  },
  {
    placementtitle: 'Date Allotment',
    description: 'Recruitment dates scheduled with firms.',
    icon: <FaCalendarAlt className="text-3xl text-[#74043D]" />,
  },
  {
    placementtitle: 'Screening & Evaluation',
    description: 'Eligibility check, tests, and GDs.',
    icon: <FaSearch className="text-3xl text-[#74043D]" />,
  },
  {
    placementtitle: 'Interviews',
    description: 'Personal interviews with shortlisted candidates.',
    icon: <FaUserTie className="text-3xl text-[#74043D]" />,
  },
  {
    placementtitle: 'Offer Letters',
    description: 'Job offers shared with selected students.',
    icon: <FaEnvelopeOpenText className="text-3xl text-[#74043D]" />,
  },
  {
    placementtitle: 'Post-Placement Support',
    description: 'Joining help, documentation, and counseling.',
    icon: <FaHandsHelping className="text-3xl text-[#74043D]" />,
  },
];


// Our mission is to foster a forward-thinking approach to career growth by integrating cutting-edge tools, personalized guidance, and industry connections."

const page = () => {
  return (
    <>
      <head>
        <title>
          Career Innovation Centre | Tula's Institute | Shaping Future Leaders
        </title>
        <meta
          name="description"
          content="Discover the Career Innovation Centre at Tula's Institute, where students are empowered with career planning, skills development, and industry connections to excel in their chosen fields."
        />
      </head>
      <body>
        <Navbar />
        <Placementpagebanner image={bannerImage} mobileImage={bannerImage}/>

              <div className="bg-white w-full px-3">
        <div className="min-h-fit pt-8 md:py-[3%] h-fit md:min-h-[15vh] w-full overflow-hidden flex flex-col justify-center max-w-[1200px] mx-auto">
          <h3 className="text-2xl font-bold md:text-5xl text-[#760135] text-left mb-3 font-[Merriweather]">
            <span className="text-[#000]">Placement at</span> TULA'S
          </h3>
          <h4 className="leading-tight text-[clamp(13px,4vw,30px)] md:text-[clamp(13px,1.1vw,45px)] font-[TTChocolates] text-[#404040]">
            <>
              Tula's Institute is dedicated to serve the community by recognizing the diverse needs of the individuals.  Tula's Institute is recognized as one of the 'Top Engineering Colleges in Uttarakhand. Known for its excellence in academic programs from undergraduate to postgraduate level, Tula's Institute attracts students from different states of India and neighbouring countries at priority. At Tula's Institute, we believe in maintaining a balance between academics and extra/co- curricular activities while keeping a healthy teacher-student ratio and in providing equal opportunities for all.
            </>
          </h4>
        </div>
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
        className="w-[250px] bg-white shadow-[0_2px_6px_rgba(16,105,103,0.2)] hover:shadow-[0_10px_25px_rgba(16,105,103,0.4)] transition-shadow duration-300 p-6 text-center rounded"
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

<h2 className="text-center pt-5 text-[clamp(24px,4vw,42px)] font-[Merriweather]">
  <span className="font-bold text-[#760135]">World's Leading Brands</span>{' '}
  <span className="font-light text-[#106967]">Hire Our Talented Students</span>
</h2>


    <HallFame features={features}/>

    <TopRecruiters/>

    <Leaders features={leaders} halltitle={'Learners to Leaders'}/>

    <TopPlacements/>

    <PlacementProcess steps={stepsData}/>

    <TeamSection/>

    <YouTubeEmbed/>

    <PlacementDrive/>
    


        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
};

export default page;
