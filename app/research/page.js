"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useContext } from "react";
import BannerImg from "../../public/research/bannerImg.png";
import background from "../../public/research/r-and-cell/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import Link from "next/link";
import CIRE from "../../public/research/CIRE.png";
import Vision from "@/component/Programs/Vision";
import { UtmContext } from "@/component/utmParams";
function Research() {
  const { utmParams } = useContext(UtmContext);
  const sections = [
    {
      title: "Sections Under CIRE",
      description: (
        <ul className="list-disc ml-5 underline">
          <li>
            <Link
              href={`/research/research-and-development-rd-cell/${utmParams}`}
            >
              Research and Development (R&D) Cell
            </Link>
          </li>
          <li>
            <Link
              href={`/research/intellectual-property-rights-ipr-cell/${utmParams}`}
            >
              Intellectual Property Rights (IPR) Cell
            </Link>
          </li>
          <li>
            <Link
              href={`/research/entrepreneurship-development-cell/${utmParams}`}
            >
              Entrepreneurship Development Cell
            </Link>
          </li>
          <li>
            <Link
              href={`/research/institute-innovation-council-iic/${utmParams}`}
            >
              Institute Innovation Council (IIC)
            </Link>
          </li>
          <li>
            <Link href={`/research/web-development-cell/${utmParams}`}>
              Web Development Cell
            </Link>
          </li>
          <li>
            <Link href={`/research/ieee-student-branch-stb17561/${utmParams}`}>
              IEEE Student Branch
            </Link>
          </li>
          <li>
            <Link href={`/research/iaas-student-branch/${utmParams}`}>
              IAAS Student Chapter
            </Link>
          </li>
          <li>
            <Link href={"https://www.tulasincubator.com"} target="_blank">
              Tula’s Technology and Business Incubator (TTBIF)
            </Link>
          </li>
        </ul>
      ),
      image: CIRE,
    },
  ];

  return (
    <>
      <head>
        <title>
          Research | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Explore cutting-edge research initiatives at Tula's Institute, a leading engineering college in Dehradun. Our research programs foster innovation and contribute to technological advancements in various fields."
        />
      </head>
      <body>
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
            <>
              Tula’s Institute is dedicated to advancing research and
              development initiatives, driven by a clear vision and mission to
              explore and advance research in cutting-edge technologies and
              various fields of engineering. To foster an environment conducive
              to such pursuits, the institute has established the Centre for
              Innovation, Research, and Entrepreneurship (CIRE). The primary
              objective of CIRE is to nurture a culture of innovation, research,
              and entrepreneurship. It oversees the Institute’s research and
              development activities, intellectual property rights (IPR),
              entrepreneurship programs, and monitors outcomes such as research
              publications, project grants, intellectual property assets, and
              the successful incubation of start-ups.
              <br />
              <br />
              CIRE comprises various sections, each section plays a vital role
              in driving innovation, research, and entrepreneurial endeavours
              within the Institute.
            </>
          }
        />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <Vision sections={sections} />
        <div className="w-full h-fit z-50">
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default Research;
