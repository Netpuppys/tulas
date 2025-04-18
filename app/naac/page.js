"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.webp";
import background from "../../public/footer/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import AQAR21 from "../../public/FooterPDf/AQAR21.pdf";
import AQAR22 from "../../public/FooterPDf/AQAR22.pdf";
import SSR from "../../public/FooterPDf/SSR.pdf";
import IIQA from "../../public/FooterPDf/IIQA.pdf";
import STRATEGIC from "../../public/FooterPDf/STRATEGIC.pdf";
import STRATEGICplan from "../../public/FooterPDf/STRATEGICplan.pdf";
import Link from "next/link";

function NAAC() {
  const button = [
    { title: "Strategic Plan 2023-24", linkTo: STRATEGICplan },
    { title: "Strategic Plan 2022-23", linkTo: STRATEGIC },
    { title: "IIQA", linkTo: IIQA },
    { title: "SSR", linkTo: SSR },
    { title: "AQAR 2021-22", linkTo: AQAR21 },
    { title: "AQAR 2022-23", linkTo: AQAR22 },
  ];
  return (
    <>
      <head>
        <title>
          NAAC Accreditation | Best Engineering College in Dehradun, Uttarakhand
          | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the NAAC accreditation of Tula's Institute, Dehradun, showcasing our dedication to quality education and academic standards. Learn about our commitment to continuous improvement and excellence in higher education."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={"NAAC"}
          description={<></>}
          belowTitle={<></>}
          belowPara={
            "The National Assessment and Accreditation Council (NAAC) plays a pivotal role in assessing and accrediting institutions of higher education in India, promoting quality benchmarks across all spheres of academic, administrative, and infrastructural performance. we take immense pride in maintaining a NAAC- A+ accredited status that underscores our commitment to excellence. This accreditation reflects our dedication to providing quality education, fostering a culture of continuous improvement, and promoting student-centric learning. Our institution continually strives to uphold and enhance its standards through innovative teaching practices, extensive research contributions, and a robust support system for students, faculty, and staff. We are deeply committed to fostering a nurturing and dynamic educational environment that meets global standards and prepares our students to excel in their professional endeavors and societal responsibilities."
          }
        />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <div className="py-8 md:py-20 w-full bg-transparent overflow-hidden px-3 md:px-0 flex flex-col justify-center items-center gap-4">
          {button.map((button, index) => (
            <Link
              target="_blank"
              key={index}
              href={`${button.linkTo}`}
              className="py-2 w-[210px] text-center md:w-[400px] rounded-full bg-white text-[clamp(10px,1.2vw,50px)] text-[#007A83]"
            >
              {button.title}
            </Link>
          ))}
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default NAAC;
