"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/entrepreneurship-development-cell/background.png";
import { Fade } from "react-awesome-reveal";
import intellectual from "../../../public/research/intellectual/intellectual.png";
import Vision from "@/component/Programs/Vision";

function AICTEIDEALAB() {
  const sections = [
    {
      title: "Web Development Cell",
      description: (
        <>
          The key responsibilities and activities of Tula’s Web Development Cell
          include:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Website Development and Maintenance: The cell is responsible for
              designing, developing, and regularly updating the institute’s
              official website. This includes creating user-friendly interfaces,
              implementing responsive design principles for optimal viewing
              across devices, and ensuring that the website’s content remains up
              to date.
            </li>
            <br />
            <li>
              Web Application Development: The cell develops web-based
              applications to support various functionalities and services
              within the institute. These applications may include online
              admission portals, student information systems, examination
              management systems, and other tools that enhance administrative
              efficiency and user experience.
            </li>
            <br />
            <li>
              Content Management: The Web Development Cell collaborates with
              different departments and stakeholders to ensure that relevant and
              engaging content is published on the institute’s website. This
              involves creating and updating web pages, managing multimedia
              elements, and optimizing content for search engine visibility.
            </li>
            <br />
            <li>
              Website Security and Performance: The cell focuses on maintaining
              website security by implementing appropriate measures to protect
              against cyber threats and unauthorized access. It also monitors
              the performance and speed of the website, optimizing it to deliver
              a seamless browsing experience to visitors.
            </li>
            <br />
            <li>
              SEO and Analytics: The Web Development Cell utilizes Search Engine
              Optimization (SEO) techniques to improve the visibility and
              ranking of the institute’s website in search engine results. It
              also analyses website traffic and user behaviour through analytics
              tools to gain insights and make data-driven decisions for website
              optimization.
            </li>
            <br />
            <li>
              Integration of Online Tools and Platforms: The cell integrates
              various online tools and platforms to enhance communication,
              collaboration, and user engagement. This may include integrating
              social media platforms, implementing online chat systems, or
              incorporating E-Learning platforms within the website.
            </li>
          </ul>
        </>
      ),
      image: intellectual,
    },
  ];
  return (
    <>
      <head>
        <title>
          AICTE IDEA Lab | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the AICTE IDEA Lab at Tula's Institute, fostering innovation and skills in web technologies through collaborative projects, workshops, and expert guidance."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                AICTE IDEA <span className="text-[#007A83]">Lab</span>
              </>
            }
            description={<></>}
            belowTitle={"Page Under Development"}
            belowPara={""}
          />
          <div className="w-full h-fit z-50">
            <Footer color={true} />
          </div>
        </div>
      </body>
    </>
  );
}

export default AICTEIDEALAB;
