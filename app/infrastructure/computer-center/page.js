"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/computerScience/background.png";
import img1 from "../../../public/infrastructure/computerScience/img1.png";
import img2 from "../../../public/infrastructure/computerScience/img2.png";
import img3 from "../../../public/infrastructure/computerScience/img3.png";

import { Fade } from "react-awesome-reveal";
import it from "../../../public/infrastructure/computerScience/it.png";
import sdc from "../../../public/infrastructure/computerScience/sdc.png";
import Vision from "@/component/Programs/Vision";
import GalleryCrousel from "@/component/GalleryCrousel";

function ComputerScience() {
  const sections = [
    {
      title: "World Class IT Infrastructure To Facilitate E-Learning",
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
              The commissioning of the campus area network has been done for
              650+ nodes.
            </li>
          </ul>
        </>
      ),
      image: sdc,
    },
  ];
  const images = [{ image: img1 }, { image: img2 }, { image: img3 }];
  return (
    <>
      <head>
        <title>Computer Center in Tula's | Best College in Dehradun</title>
        <meta
          name="description"
          content="Tula's has big in house computer centre.Ranked No-1 college in dehradun"
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center">
          <Banner
            image={BannerImg}
            title={
              <>
                COMPUTER <span className="text-[#007A83]">CENTRE</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              <p>
                Information Technology is unarguably the defining force of this
                millennium, and Tula’s Institute is poised to break new ground
                as the most E-enabled engineering cum business school in
                Uttarakhand. Wireless technology has emerged as a vital and
                indispensable means of communication in the twenty first
                century. Irrespective of the size of an organization, its
                efficient running depends a lot upon the presence of proper
                networking systems that enables both the students and faculty to
                access vital data and information easily at the click of a
                button. Having understood the importance, Tula’s Institute has
                invested heavily towards developing world class IT
                infrastructure to facilitate E-Learning in today’s day and age
                and is thus regarded amongst the ‘best engineering colleges in
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
          <Vision sections={sections} />
          <h3
            className={`px-4 md:px-10 text-center text-white border-white font-[TTChocolatesMedium] rounded-md font-semibold text-[30px] md:text-[clamp(10px,2.5vw,50px)] border-l-4 `}
          >
            Gallery
          </h3>
          <div className="py-8 md:py-20 w-full h-fit">
            <GalleryCrousel images={images} />
          </div>
          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default ComputerScience;
