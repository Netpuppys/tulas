"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/entrepreneurship-development-cell/background.png";
import { Fade } from "react-awesome-reveal";
import intellectual from "../../../public/research/intellectual/intellectual.png";
import { useInView } from "react-intersection-observer";

function WebDevelopmentCell() {
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
            Web <span className="text-[#007A83]">Development Cell</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "Tula’s Institute houses a dedicated Web Development Cell that plays a vital role in managing and maintaining the institute’s online presence and digital platforms. The Web Development Cell consists of a team of skilled professionals and enthusiastic students who work together to ensure an effective and engaging online experience for the institute’s stakeholders."
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
          <h3 className="px-4 md:px-10 font-[TTChocolatesBold] font-semibold rounded-md text-[30px] md:text-[52px] border-l-4 border-white">
              Web Development Cell
            </h3>
            <br />
            <h4 className="text-[16px] md:text-[22px] font-[TTChocolates] text-[#D9D9D9]">
              The key responsibilities and activities of Tula’s Web Development
              Cell include:
              <br />
              <br />
              <ul className="ml-5 list-disc">
                <li>
                  Website Development and Maintenance: The cell is responsible
                  for designing, developing, and regularly updating the
                  institute’s official website. This includes creating
                  user-friendly interfaces, implementing responsive design
                  principles for optimal viewing across devices, and ensuring
                  that the website’s content remains up to date.
                </li>
                <br />
                <li>
                  Web Application Development: The cell develops web-based
                  applications to support various functionalities and services
                  within the institute. These applications may include online
                  admission portals, student information systems, examination
                  management systems, and other tools that enhance
                  administrative efficiency and user experience.
                </li>
                <br />
                <li>
                  Content Management: The Web Development Cell collaborates with
                  different departments and stakeholders to ensure that relevant
                  and engaging content is published on the institute’s website.
                  This involves creating and updating web pages, managing
                  multimedia elements, and optimizing content for search engine
                  visibility.
                </li>
                <br />
                <li>
                  Website Security and Performance: The cell focuses on
                  maintaining website security by implementing appropriate
                  measures to protect against cyber threats and unauthorized
                  access. It also monitors the performance and speed of the
                  website, optimizing it to deliver a seamless browsing
                  experience to visitors.
                </li>
                <br />
                <li>
                  SEO and Analytics: The Web Development Cell utilizes Search
                  Engine Optimization (SEO) techniques to improve the visibility
                  and ranking of the institute’s website in search engine
                  results. It also analyses website traffic and user behaviour
                  through analytics tools to gain insights and make data-driven
                  decisions for website optimization.
                </li>
                <br />
                <li>
                  Integration of Online Tools and Platforms: The cell integrates
                  various online tools and platforms to enhance communication,
                  collaboration, and user engagement. This may include
                  integrating social media platforms, implementing online chat
                  systems, or incorporating e-learning platforms within the
                  website.
                </li>
              </ul>
            </h4>
          </div>
        </Fade>
        <Fade className="w-full md:w-[45%]">
          <Image
            src={intellectual}
            alt=""
            className={`w-full h-fit rounded-xl md:rounded-none md:rounded-s-3xl ${
              inView ? "md:animate-translateRight" : "opacity-0"
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

export default WebDevelopmentCell;
