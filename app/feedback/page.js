"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/footer/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import { GoDownload } from "react-icons/go";
import Alumni23 from "../../public/FooterPDf/Alumni23.pdf";
import Employers23 from "../../public/FooterPDf/Employers23.pdf";
import students23 from "../../public/FooterPDf/students23.pdf";
import Teacher23 from "../../public/FooterPDf/Teacher23.pdf";
import Alumni22 from "../../public/FooterPDf/Alumni22.pdf";
import Employers22 from "../../public/FooterPDf/Employers22.pdf";
import students22 from "../../public/FooterPDf/students22.pdf";
import Teacher22 from "../../public/FooterPDf/Teacher22.pdf";
import Alumni21 from "../../public/FooterPDf/Alumni21.pdf";
import Employers21 from "../../public/FooterPDf/Employers21.pdf";
import Parents21 from "../../public/FooterPDf/Parents21.pdf";
import students21 from "../../public/FooterPDf/students21.pdf";
import Teacher21 from "../../public/FooterPDf/Teacher21.pdf";
import Alumni19 from "../../public/FooterPDf/Alumni19.pdf";
import Employers19 from "../../public/FooterPDf/Employers19.pdf";
import Parents19 from "../../public/FooterPDf/Parents19.pdf";
import Students19 from "../../public/FooterPDf/Students19.pdf";
import Teachers19 from "../../public/FooterPDf/Teachers19.pdf";
import Alumni18 from "../../public/FooterPDf/Alumni18.pdf";
import Parents18 from "../../public/FooterPDf/Parents18.pdf";
import Students18 from "../../public/FooterPDf/Students18.pdf";
import Teacher18 from "../../public/FooterPDf/Teacher18.pdf";
import Alumni17 from "../../public/FooterPDf/Alumni17.pdf";
import Parents17 from "../../public/FooterPDf/Parents17.pdf";
import Students17 from "../../public/FooterPDf/Students17.pdf";
import Teachers17 from "../../public/FooterPDf/Teachers17.pdf";
import Alumni16 from "../../public/FooterPDf/Alumni16.pdf";
import Parents16 from "../../public/FooterPDf/Parents16.pdf";
import Students16 from "../../public/FooterPDf/Students16.pdf";
import Teachers16 from "../../public/FooterPDf/Teacher16.pdf";
import Link from "next/link";

function Feedback() {
  const button = [
    {
      title: "Feedback 2023-2024",
      nestedLink: [
        { title: "Alumni Feedback", linkTo: Alumni23 },
        {
          title: "Employers Feedback",
          linkTo: Employers23,
        },
        {
          title: "Students Feedback",
          linkTo: students23,
        },
        {
          title: "Teachers Feedback",
          linkTo: Teacher23,
        },
      ],
    },
    {
      title: "Feedback 2022-2023",
      nestedLink: [
        { title: "Alumni Feedback", linkTo: Alumni22 },
        {
          title: "Employers Feedback",
          linkTo: Employers22,
        },
        {
          title: "Students Feedback",
          linkTo: students22,
        },
        {
          title: "Teachers Feedback",
          linkTo: Teacher22,
        },
      ],
    },
    {
      title: "Feedback 2021-2022",
      nestedLink: [
        { title: "Alumni Feedback", linkTo: Alumni21 },
        {
          title: "Employers Feedback",
          linkTo: Employers21,
        },
        { title: "Parents Feedback", linkTo: Parents21 },
        {
          title: "Students Feedback",
          linkTo: students21,
        },
        {
          title: "Teachers Feedback",
          linkTo: Teacher21,
        },
      ],
    },
    {
      title: "Feedback 2019-2020",
      nestedLink: [
        { title: "Alumni Feedback", linkTo: Alumni19 },
        {
          title: "Employers Feedback",
          linkTo: Employers19,
        },
        { title: "Parents Feedback", linkTo: Parents19 },
        {
          title: "Students Feedback",
          linkTo: Students19,
        },
        {
          title: "Teachers Feedback",
          linkTo: Teachers19,
        },
      ],
    },
    {
      title: "Feedback 2018-2019",
      nestedLink: [
        { title: "Alumni Feedback", linkTo: Alumni18 },
        { title: "Parents Feedback", linkTo: Parents18 },
        {
          title: "Students Feedback",
          linkTo: Students18,
        },
        {
          title: "Teachers Feedback",
          linkTo: Teacher18,
        },
      ],
    },
    {
      title: "Feedback 2017-2018",
      nestedLink: [
        { title: "Alumni Feedback", linkTo: Alumni17 },
        { title: "Parents Feedback", linkTo: Parents17 },
        {
          title: "Students Feedback",
          linkTo: Students17,
        },
        {
          title: "Teachers Feedback",
          linkTo: Teachers17,
        },
      ],
    },
    {
      title: "Feedback 2016-2017",
      nestedLink: [
        { title: "Alumni Feedback", linkTo: Alumni16 },
        { title: "Parents Feedback", linkTo: Parents16 },
        {
          title: "Students Feedback",
          linkTo: Students16,
        },
        {
          title: "Teachers Feedback",
          linkTo: Teachers16,
        },
      ],
    },
  ];
  return (
    <>
      <head>
        <title>
          Feedback | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="We value your feedback at Tula's Institute, Dehradun. Share your thoughts and suggestions to help us improve and continue providing top-quality education and student support. Your feedback matters to us."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={"Feedback"}
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
              className="py-8 w-[90%] md:w-[85%] px-[5%] md:px-[6%] border border-white rounded-2xl bg-transparent text-white"
            >
              <h3 className="border-l-2 md:border-l-4 border-white font-[TTChocolatesMedium] font-medium mb-8 rounded-md px-2 md:px-4 text-[clamp(10px,2.5vw,50px)]">
                {button.title}
              </h3>
              {button.nestedLink.map((nested, index) => (
                <Link key={index} href={nested.linkTo} target="_blank">
                  <ul className="flex justify-between items-center ml-5 list-disc gap-2 underline text-[clamp(10px,1vw,50px)]">
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

export default Feedback;
