"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/footer/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import { GoDownload } from "react-icons/go";
import Overall2024 from "../../public/FooterPDf/Overall24.pdf";
import Engineering24 from "../../public/FooterPDf/Engineering24.pdf";
import Management24 from "../../public/FooterPDf/Management24.pdf";
import Agri24 from "../../public/FooterPDf/Agri24.pdf";
import Overall23 from "../../public/FooterPDf/Overall23.pdf";
import Engineering23 from "../../public/FooterPDf/Engineering23.pdf";
import Management23 from "../../public/FooterPDf/Management23.pdf";
import Overall22 from "../../public/FooterPDf/Overall22.pdf";
import Engineering22 from "../../public/FooterPDf/Engineering22.pdf";
import Management22 from "../../public/FooterPDf/Management22.pdf";
import Overall21 from "../../public/FooterPDf/Overall21.pdf";
import Engineering21 from "../../public/FooterPDf/Engineering21.pdf";
import Management21 from "../../public/FooterPDf/Management21.pdf";
import Overall19 from "../../public/FooterPDf/Overall19.pdf";
import Engineering19 from "../../public/FooterPDf/Engineering19.pdf";
import Link from "next/link";

function NIRFRanking() {
  const button = [
    {
      title: "Documents for 2024 NIRF Ranking",
      nestedLink: [
        { title: "Overall – click here to Download", linkTo: Overall2024 },
        {
          title: "Engineering – click here to Download",
          linkTo: Engineering24,
        },
        { title: "Management – click here to Download", linkTo: Management24 },
        {
          title: "Agriculture and Allied Sector – click here to Download",
          linkTo: Agri24,
        },
      ],
    },
    {
      title: "Documents for 2023 NIRF Ranking",
      nestedLink: [
        { title: "Overall – click here to Download", linkTo: Overall23 },
        {
          title: "Engineering – click here to Download",
          linkTo: Engineering23,
        },
        { title: "Management – click here to Download", linkTo: Management23 },
      ],
    },
    {
      title: "Documents for 2022 NIRF Ranking",
      nestedLink: [
        { title: "Overall – click here to Download", linkTo: Overall22 },
        {
          title: "Engineering – click here to Download",
          linkTo: Engineering22,
        },
        { title: "Management – click here to Download", linkTo: Management22 },
      ],
    },
    {
      title: "Documents for 2021 NIRF Ranking",
      nestedLink: [
        { title: "Overall – click here to Download", linkTo: Overall21 },
        {
          title: "Engineering – click here to Download",
          linkTo: Engineering21,
        },
        { title: "Management – click here to Download", linkTo: Management21 },
      ],
    },
    {
      title: "Documents for 2019 NIRF Ranking",
      nestedLink: [
        { title: "Overall – click here to Download", linkTo: Overall19 },
        {
          title: "Engineering – click here to Download",
          linkTo: Engineering19,
        },
      ],
    },
  ];
  return (
    <>
      <head>
        <title>NIRF Ranking 2024 | Tula's Institute</title>
        <meta
          name="description"
          content="Discover Tula's Institute's NIRF Ranking for 2024, a testament to our commitment to academic excellence and quality education. Learn why we are recognized among the top engineering colleges in Dehradun, Uttarakhand."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={"NIRF Ranking"}
          description={<></>}
          belowTitle={<></>}
          belowPara={
            "Tula’s Institute is dedicated to advancing Research and Development initiatives, driven by a clear vision and mission to explore and advance research in cutting-edge technologies and various fields of Engineering. To foster an environment conducive to such pursuits, the Institute has established the Centre for Innovation, Research, and Entrepreneurship (CIRE). "
          }
        />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <div className="py-8 md:py-20 font-[TTChocolates] w-full bg-transparent overflow-hidden px-3 md:px-0 flex flex-col justify-center items-center gap-4">
          {button.map((button, index) => (
            <div
              key={index}
              className="py-8 w-[95%] md:w-[85%] px-[2%] md:px-[6%] border border-white rounded-2xl bg-transparent text-white"
            >
              <h3 className="border-l-2 md:border-l-4 border-white font-[TTChocolatesBold] font-medium mb-8 rounded-md px-2 md:px-4 text-[clamp(18px,2.5vw,50px)]">
                {button.title}
              </h3>
              {button.nestedLink.map((nested, index) => (
                <Link key={index} href={nested.linkTo}>
                  <ul className="flex justify-between items-center ml-5 list-disc gap-2 underline text-[clamp(15px,1vw,50px)]">
                    <li>{nested.title}</li>
                    <GoDownload />
                  </ul>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default NIRFRanking;
