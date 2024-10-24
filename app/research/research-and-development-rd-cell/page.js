"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/r-and-cell/background.png";
import { Fade } from "react-awesome-reveal";
import ICTImage from "../../../public/research/r-and-cell/r-and-cell.png";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Collaborators from "./Component/Collaborators";
import graph1 from "../../../public/research/r-and-cell/graph1.png";
import graph2 from "../../../public/research/r-and-cell/graph2.png";

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
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div
        ref={ref}
        className="py-8 md:py-20 bg-transparent px-3 md:px-0 w-full md:w-[95%] md:ml-[5%] h-fit flex gap-8 md:gap-0 flex-col md:flex-row items-center justify-between"
      >
        <Fade delay={300} className="w-full px-3 md:px-0 md:w-[45%]">
          <div className="w-full block">
            <h3 className="px-4 md:px-10 text-white font-[TTChocolatesBold] font-semibold rounded-md text-[30px] md:text-[52px] border-l-4 border-white">
              R&D Cell
            </h3>
            <br />
            <h4 className="text-[16px] md:text-[22px] font-[TTChocolates] text-[#D9D9D9]">
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
        <Fade className="w-full md:w-[45%]">
          <Image
            src={ICTImage}
            alt=""
            className={`w-full h-fit rounded-xl md:rounded-none md:rounded-s-3xl ${
              inView ? "md:animate-translateRight" : "opacity-0"
            }`}
          />
        </Fade>
      </div>
      <Collaborators />
      <h3 className="text-white text-center text-[25px] md:text-[40px] font-[CarotSlab]">
        Cumulative Citations
      </h3>
      <div className="flex items-center flex-col md:flex-row justify-center gap-6 md:gap-[10%] py-8 md:py-14">
        <Image src={graph1} alt="" className="w-[80%] md:w-[40%]" />
        <Image src={graph2} alt="" className="w-[80%] md:w-[40%]" />
      </div>
      <Link
        href="/research/research-and-development-rd-cell/funded-projects-and-grants/"
        className="px-12 md:px-20 py-2 mb-20 bg-white text-[20px] md:text-[28px] font-[TTChocolatesBold] text-[#00383D] rounded-full hover:bg-[#00383D] hover:text-white"
      >
        Funded Projects and Grants
      </Link>
      <div className="w-full h-fit z-50">
        <Footer color={true} />
      </div>
    </div>
  );
}

export default RAndCell;
