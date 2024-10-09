"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/computerScience/background.png";
import { Fade } from "react-awesome-reveal";
import it from "../../../public/infrastructure/computerScience/it.png";
import sdc from "../../../public/infrastructure/computerScience/sdc.png";

function ComputerScience() {
  const sections = [
    {
      title: "World Class IT Infrastructure to facilitate e-learning",
      description:
        "The institute has chosen a system based on high end servers and work stations under Windows and Linux, which provide the interconnection and exchange of information between the various systems thereby providing the students and faculty a work environment adapted to their requirements and latest technology reflecting the standards of the computer industry.",
      image: it,
    },
    {
      title: "Exclusive Software Develoment Cell",
      description: (
        <>
          Tula’s Institute has an Exclusive Software Development Cell equipped
          with high end servers and client machines, software and other
          accessories. The experienced faculty members assist the students to
          finish their projects in this cell. All the work of ERP and software
          development for administration of the institute is delegated as live
          projects to the students, who gain comprehensive practical experience
          on computer applications and software development.
          <br />
          The Institute visualizes centralized computing facility, campus wide
          networking and information technology as a means to enrich the
          educational experience and invigorate emerging areas of scholarly
          research and education.
          <ul className="list-disc ml-5">
            <li>
              More than 500 + desktops with 24×7 Wi-Fi internet facility up-to
              1-Gbps loaded with latest licensed software at the students
              disposal.
            </li>
            <li>
              The commissioning of the Campus Area Network has been done for
              650+ nodes.
            </li>
          </ul>
        </>
      ),
      image: sdc,
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            OUR COMPUTER <span className="text-[#007A83]">CENTRE</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          <p className="text-sm md:text-lg">
            Information Technology is unarguably the defining force of this
            millennium, and Tula’s Institute is poised to break new ground as
            the most e-enabled Engineering cum Business School in Uttarakhand.
            Wireless technology has emerged as a vital and indispensable means
            of communication in the twenty first century. Irrespective of the
            size of an organization, its efficient running depends a lot upon
            the presence of proper networking systems that enables both the
            students and faculty to access vital data and information easily at
            the click of a button. Having understood the importance, Tula’s
            Institute has invested heavily towards developing World Class IT
            Infrastructure to facilitate e-learning in today’s day and age and
            is thus regarded amongst the ‘best engineering colleges in
            Dehradun’.
          </p>
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
      <div className="pt-8 md:pt-20 px-3 md:px-0 w-full md:w-[90%] mx-auto bg-transparent h-fit">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 md:gap-0 md:flex-row mb-8 md:mb-20 justify-between w-full h-fit items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } `}
          >
            <Fade delay={300} className="w-full px-3 md:px-0 md:w-[45%]">
              <div className="w-full block">
                <h3 className="px-4 md:px-10 font-[TTChocolatesBold] font-semibold rounded-md text-[30px] md:text-[52px] border-l-4 border-white">
                  {section.title}
                </h3>
                <br />
                <h4 className="text-[16px] md:text-[22px] font-[TTChocolates] text-[#D9D9D9]">
                  {section.description}
                </h4>
              </div>
            </Fade>
            <Fade className="w-full md:w-[45%]">
              <Image
                src={section.image}
                alt=""
                className="w-full h-fit rounded-xl md:rounded-3xl"
              />
            </Fade>
          </div>
        ))}
      </div>
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default ComputerScience;
