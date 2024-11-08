"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/research/r-and-cell/background.png";
import Meeting1 from "../../public/FooterPDf/1st.pdf";
import Meeting2 from "../../public/FooterPDf/Meeting2.pdf";
import Meeting3 from "../../public/FooterPDf/Meeting3.pdf";
import Meeting4 from "../../public/FooterPDf/Meeting4.pdf";
import Meeting5 from "../../public/FooterPDf/Meeting5.pdf";
import Meeting6 from "../../public/FooterPDf/Meeting6.pdf";
import Meeting7 from "../../public/FooterPDf/Meeting7.pdf";
import Meeting8 from "../../public/FooterPDf/Meeting8.pdf";
import Meeting9 from "../../public/FooterPDf/Meeting9.pdf";
import Meeting10 from "../../public/FooterPDf/Meeting10.pdf";
import Meeting11 from "../../public/FooterPDf/Meeting11.pdf";
import Meeting12 from "../../public/FooterPDf/Meeting12.pdf";
import Meeting13 from "../../public/FooterPDf/Meeting13.pdf";
import Meeting14 from "../../public/FooterPDf/Meeting14.pdf";
import Meeting15 from "../../public/FooterPDf/Meeting15.pdf";
import Meeting16 from "../../public/FooterPDf/Meeting16.pdf";
import Meeting17 from "../../public/FooterPDf/Meeting17.pdf";
import Meeting18 from "../../public/FooterPDf/Meeting18.pdf";
import Meeting19 from "../../public/FooterPDf/Meeting19.pdf";
import Meeting20 from "../../public/FooterPDf/Meeting20.pdf";
import Meeting21 from "../../public/FooterPDf/Meeting21.pdf";
import Meeting22 from "../../public/FooterPDf/Meeting22.pdf";
import Meeting23 from "../../public/FooterPDf/Meeting23.pdf";
import Meeting24 from "../../public/FooterPDf/Meeting24.pdf";
import Meeting25 from "../../public/FooterPDf/Meeting25.pdf";
import Meeting26 from "../../public/FooterPDf/Meeting26.pdf";
import Meeting27 from "../../public/FooterPDf/Meeting27.pdf";
import Meeting28 from "../../public/FooterPDf/Meeting28.pdf";
import Meeting29 from "../../public/FooterPDf/Meeting29.pdf";
import Meeting30 from "../../public/FooterPDf/Meeting30.pdf";
import Meeting31 from "../../public/FooterPDf/Meeting31.pdf";
import Meeting32 from "../../public/FooterPDf/Meeting32.pdf";
import Meeting33 from "../../public/FooterPDf/Meeting33.pdf";
import Meeting34 from "../../public/FooterPDf/Meeting34.pdf";
import Meeting35 from "../../public/FooterPDf/Meeting35.pdf";
import Meeting36 from "../../public/FooterPDf/Meeting36.pdf";
import Meeting37 from "../../public/FooterPDf/Meeting37.pdf";
import Meeting38 from "../../public/FooterPDf/Meeting38.pdf";
import Meeting39 from "../../public/FooterPDf/Meeting39.pdf";

function MinuteOfMeeting() {
  const button = [
    {
      title: "1st Meeting of IQAC 2014-15",
      linkTo: Meeting1,
    },
    {
      title: "2nd Meeting of IQAC 2014-15",
      linkTo: Meeting2,
    },
    {
      title: "3rd Meeting of IQAC 2014-15",
      linkTo: Meeting3,
    },
    {
      title: "4th Meeting of IQAC 2014-15",
      linkTo: Meeting4,
    },

    {
      title: "5th Meeting of IQAC 2015-16",
      linkTo: Meeting5,
    },

    {
      title: "6th Meeting of IQAC 2015-16",
      linkTo: Meeting6,
    },

    {
      title: "7th Meeting of IQAC 2015-16",
      linkTo: Meeting7,
    },

    {
      title: "8th Meeting of IQAC 2015-16",
      linkTo: Meeting8,
    },

    {
      title: "9th Meeting of IQAC 2016-17",
      linkTo: Meeting9,
    },

    {
      title: "10th Meeting of IQAC 2016-17",
      linkTo: Meeting10,
    },

    {
      title: "11th Meeting of IQAC 2016-17",
      linkTo: Meeting11,
    },

    {
      title: "12th Meeting of IQAC 2016-17",
      linkTo: Meeting12,
    },

    {
      title: "13th Meeting of IQAC 2017-18",
      linkTo: Meeting13,
    },

    {
      title: "14th Meeting of IQAC 2017-18",
      linkTo: Meeting14,
    },

    {
      title: "15th Meeting of IQAC 2017-18",
      linkTo: Meeting15,
    },

    {
      title: "16th Meeting of IQAC 2017-18",
      linkTo: Meeting16,
    },

    {
      title: "17th Meeting of IQAC 2018-19",
      linkTo: Meeting17,
    },

    {
      title: "18th Meeting of IQAC 2018-19",
      linkTo: Meeting18,
    },

    {
      title: "19th Meeting of IQAC 2018-19",
      linkTo: Meeting19,
    },

    {
      title: "20th Meeting of IQAC 2018-19",
      linkTo: Meeting20,
    },

    {
      title: "21st Meeting of IQAC 2019-20",
      linkTo: Meeting21,
    },

    {
      title: "22nd Meeting of IQAC 2019-20",
      linkTo: Meeting22,
    },

    {
      title: "23rd Meeting of IQAC 2019-20",
      linkTo: Meeting23,
    },

    {
      title: "24th Meeting of IQAC 2019-20",
      linkTo: Meeting24,
    },

    {
      title: "25th Meeting of IQAC 2020-21",
      linkTo: Meeting25,
    },

    {
      title: "26th Meeting of IQAC 2020-21",
      linkTo: Meeting26,
    },

    {
      title: "27th Meeting of IQAC 2020-21",
      linkTo: Meeting27,
    },

    {
      title: "28th Meeting of IQAC 2020-21",
      linkTo: Meeting28,
    },

    {
      title: "29th Meeting of IQAC 2021-22",
      linkTo: Meeting29,
    },

    {
      title: "30th Meeting of IQAC 2021-22",
      linkTo: Meeting30,
    },

    {
      title: "31st Meeting of IQAC 2021-22",
      linkTo: Meeting31,
    },

    {
      title: "32nd Meeting of IQAC 2021-22",
      linkTo: Meeting32,
    },

    {
      title: "33rd Meeting of IQAC 2022-23",
      linkTo: Meeting33,
    },

    {
      title: "34th Meeting of IQAC 2022-23",
      linkTo: Meeting34,
    },

    {
      title: "35th Meeting of IQAC 2022-23",
      linkTo: Meeting35,
    },

    {
      title: "36th Meeting of IQAC 2022-23",
      linkTo: Meeting36,
    },

    {
      title: "37th Meeting of IQAC 2023-24",
      linkTo: Meeting37,
    },

    {
      title: "38th Meeting of IQAC 2023-24",
      linkTo: Meeting38,
    },

    {
      title: "39th Meeting of IQAC 2023-24",
      linkTo: Meeting39,
    },
  ];
  return (
    <>
      <head>
        <title>
          Minutes of Meeting | Best Engineering College in Dehradun, Uttarakhand
          | Tula's Institute
        </title>
        <meta
          name="description"
          content="Access the minutes of meetings at Tula's Institute, Dehradun, highlighting discussions, decisions, and initiatives aimed at fostering academic excellence and institutional growth. Stay informed on our continuous commitment to quality education."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={
            <>
              Minute of <span className="text-[#005D64]">Meeting</span>
            </>
          }
          description={<></>}
          belowTitle={""}
          belowPara={
            "The Internal Quality Assurance Cell (IQAC) was established in 2014 at Tula’s Institute, Dehradun as an accreditation quality measure. The IQAC has been constituted as per the recommendations of the National Assessment and Accreditation Council (NAAC). The IQAC ensures the effective implementation of quality initiatives through continuous reviews and periodic meetings. The IQAC works towards attaining excellence in all academic and administrative endeavors of the institution."
          }
        />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <div className="py-8 px-4 md:px-20 md:py-20 w-full bg-transparent overflow-hidden flex flex-wrap justify-center items-center gap-4">
          {button.map((button, index) => (
            <button
              key={index}
              onClick={() => (window.location.href = `${button.linkTo}`)}
              className="py-2 w-[170px] md:w-[30%] text-[14px] underline md:text-[clamp(15px,1vw,50px)] text-white"
            >
              {button.title}
            </button>
          ))}
        </div>
        <div className="w-full h-fit z-50">
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default MinuteOfMeeting;
