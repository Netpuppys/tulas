"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/r-and-cell/background.png";
import { Fade } from "react-awesome-reveal";
import ICTImage from "../../../public/research/r-and-cell/r-and-cell.png";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

function RAndCell() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            Research and{" "}
            <span className="text-[#007A83]">Development (R&D) Cell</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "The Research and Development (R&D) Cell at Tula’s Institute is an integral part of the Centre for Innovation, Research, and Entrepreneurship (CIRE). Its primary focus is to facilitate and drive cutting-edge research activities across various disciplines within the Institute."
        }
      />
      <div className="w-full relative overflow-hidden -mb-[6vh]">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div
        ref={ref}
        className="pt-40 pb-20 bg-transparent w-[95%] ml-[5%] h-fit flex items-center justify-between"
      >
        <Fade delay={300} className="w-[45%]">
          <div className="w-full block">
            <h3 className="px-10 font-[TTChocolatesBold] font-semibold rounded-md text-[52px] border-l-4 border-white">
              R&D Cell
            </h3>
            <br />
            <h4 className="text-[22px] font-[TTChocolates] text-[#D9D9D9]">
              The R&D Cell plays a crucial role in facilitating the smooth
              conduction of various government and non-government research
              projects at Tula’s Institute. It acts as a central point of
              contact and support for researchers, ensuring that projects are
              executed efficiently and effectively.
              <br />
              <br />
              One of the key responsibilities of the R&D Cell is to assist
              faculty members in securing research grants. It actively seeks out
              funding opportunities from government agencies, foundations, and
              other organizations that support research initiatives. The cell
              provides guidance and resources to faculty members, helping them
              navigate the complex process of grant applications. By
              streamlining this process, the R&D Cell enhances the chances of
              obtaining research funding and supports the faculty in pursuing
              their research interests.
              <br />
              <br />
              Additionally, the R&D Cell facilitates and encourages faculty and
              student members to publish their research work in various reputed
              journals. It recognizes the importance of disseminating research
              findings and contributing to the wider scientific community. The
              cell provides guidance on identifying suitable journals,
              manuscript preparation, and submission procedures. By assisting in
              the publication process, the R&D Cell ensures that the valuable
              research conducted by faculty and students receives the
              recognition it deserves.
              <br />
              <br />
              Details of various on-going and completed research grants and
              Publications are as follows are as follows: <br />
              <ul className="list-disc ml-5">
                <li>
                  <Link href="/research/research-and-development-rd-cell/funded-projects-and-grants/">
                    Funded Projects and Grants
                  </Link>
                </li>
                <li>
                  <Link href="/research/research-and-development-rd-cell/journal-publications/">
                    Journal Publications
                  </Link>
                </li>
                <li>
                  <Link href="/research/research-and-development-rd-cell/conference-publications/">
                    Conference Publications
                  </Link>
                </li>
                <li>
                  <Link href="/research/research-and-development-rd-cell/conferences-organized/">
                    Conferences Organized
                  </Link>
                </li>
              </ul>
            </h4>
          </div>
        </Fade>
        <Fade className="w-[45%]">
          <Image
            src={ICTImage}
            alt=""
            className={`w-full h-fit ${
              inView ? "animate-translateRight" : "opacity-0"
            }`}
          />
        </Fade>
      </div>
      <div className="w-full h-fit z-50">
        <Footer color={true} />
      </div>
    </div>
  );
}

export default RAndCell;
