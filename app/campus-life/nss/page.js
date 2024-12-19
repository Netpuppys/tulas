"use client";
import React from "react";
import background from "../../../public/campus-life/nss/background.png";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import nss from "../../../public/campus-life/nss/nss.png";

function NSS() {
  return (
    <>
      <head>
        <title>
          NSS at Tula's Institute | Fostering Social Responsibility & Community
          Service
        </title>
        <meta
          name="description"
          content="Join the National Service Scheme (NSS) at Tula's Institute, where students engage in impactful community service initiatives. From cleanliness drives and blood donation camps to GreenX sustainability projects, our NSS club fosters leadership, teamwork, and a commitment to societal welfare."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={<span className="text-[#007A83]">NSS</span>}
          // belowPara={
          //   "At Tula’s Institute, NSS is all about stepping up, having fun, and making a difference! Students take on roles that not only build leadership and teamwork but also spark a passion for social and environmental causes, all while creating real change in the community."
          // }
        />
        {/* fixed background */}
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <h3 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            National Service Scheme (NSS)
          </h3>
          <Image
            src={nss}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%] py-4 md:py-8 mx-auto mb-4"
          />
          <div className="text-lg md:text-2xl w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-black">
            The NSS (National Service Scheme) club at Tula's Institute is
            dedicated to fostering a sense of social responsibility and
            community service among students.
            <br />
            <br />
            <ul className="list-disc ml-5">
              <li>
                The club's primary objective is to engage students in various
                social service activities, such as cleanliness drives, blood
                donation camps, and awareness programs on health and hygiene.
              </li>

              <li>
                The NSS club aims to develop students' leadership skills,
                teamwork, and a commitment to societal welfare.
              </li>
            </ul>
            <br />
            One of the prominent initiatives under the NSS club is GreenX, which
            focuses on environmental sustainability.
            <br />
            <br />
            <ul className="list-disc ml-5">
              <li>
                GreenX works on various projects to promote environmental
                awareness and conservation, such as tree planting, waste
                management, and organizing eco-friendly events.
              </li>
              <li>
                The club encourages students to adopt sustainable practices and
                contribute to a greener future.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default NSS;
