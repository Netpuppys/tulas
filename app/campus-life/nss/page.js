"use client";
import React from "react";
import background from "../../../public/campus-life/nss/background.png";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import nss from "../../../public/campus-life/nss/nss.png";
import Vision from "@/component/Programs/Vision";

function NSS() {
  const sections = [
    {
      title: "National Service Scheme (NSS)",
      description: (
        <>
          The NSS (National Service Scheme) club at Tula's Institute is
          dedicated to fostering a sense of social responsibility and community
          service among students.
          <ul className="list-disc ml-5 mt-4">
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
          <ul className="list-disc ml-5 mt-4">
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
        </>
      ),
      image: nss,
    },
  ];
  return (
    <div>
      <Navbar />
      <Banner
        image={BannerImg}
        title={<span className="text-[#007A83]">NSS</span>}
        belowPara={
          "Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit."
        }
      />
      {/* fixed background */}
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <Vision sections={sections} />
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default NSS;
