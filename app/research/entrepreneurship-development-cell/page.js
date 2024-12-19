"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/entrepreneurship-development-cell/background.png";
import intellectual from "../../../public/research/intellectual/intellectual.png";
import Vision from "@/component/Programs/Vision";
import innovationAndStartupPolicy from "../../../public/research/innovation-and-startup-policy.pdf";
import SlidingCarousel from "../intellectual-property-rights-ipr-cell/patent/components/SlidingCarousel";
import EPR1 from "../../../public/research/entrepreneurship-development-cell/EPR1.png";
import EPR2 from "../../../public/research/entrepreneurship-development-cell/EPR2.png";
import EPR3 from "../../../public/research/entrepreneurship-development-cell/EPR3.png";
import EPR4 from "../../../public/research/entrepreneurship-development-cell/EPR4.png";
import EPR5 from "../../../public/research/entrepreneurship-development-cell/EPR5.png";
import EPR6 from "../../../public/research/entrepreneurship-development-cell/EPR6.png";
import EPR7 from "../../../public/research/entrepreneurship-development-cell/EPR7.png";
import EPR8 from "../../../public/research/entrepreneurship-development-cell/EPR8.png";
import EPR9 from "../../../public/research/entrepreneurship-development-cell/EPR9.png";
import EPR10 from "../../../public/research/entrepreneurship-development-cell/EPR10.png";
import EPR11 from "../../../public/research/entrepreneurship-development-cell/EPR11.png";
import EPR12 from "../../../public/research/entrepreneurship-development-cell/EPR12.png";
import EPR13 from "../../../public/research/entrepreneurship-development-cell/EPR13.png";
import EPR14 from "../../../public/research/entrepreneurship-development-cell/EPR14.png";
import EPR15 from "../../../public/research/entrepreneurship-development-cell/EPR15.png";
import EPR16 from "../../../public/research/entrepreneurship-development-cell/EPR16.png";
import EPR17 from "../../../public/research/entrepreneurship-development-cell/EPR17.png";

function EntrepreneurshipDevelopmentCell() {
  const patentImages = [
    EPR1,
    EPR2,
    EPR3,
    EPR4,
    EPR5,
    EPR6,
    EPR7,
    EPR8,
    EPR9,
    EPR10,
    EPR11,
    EPR12,
    EPR13,
    EPR14,
    EPR15,
    EPR16,
    EPR17,
  ];
  const sections = [
    {
      title: "Entrepreneurship Development",
      description: (
        <>
          The Entrepreneurship Development Cell, in conjunction with TTBIF,
          fulfills the following key roles and functions:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Incubation Support: The cell provides comprehensive support to
              innovative start-ups and aspiring entrepreneurs, guiding them
              through the various stages of business development. It offers
              incubation services, including mentoring, infrastructure support,
              access to networks, and business development resources.
            </li>
            <br />

            <li>
              Entrepreneurship Education and Training: The cell organizes
              workshops, training programs, and boot camps that equip students
              and budding entrepreneurs with the necessary skills, knowledge,
              and mindset required to start and manage successful ventures.
              These initiatives cover areas such as ideation, business planning,
              market research, financial management, and pitching.{" "}
            </li>
            <br />
            <li>
              Networking and Collaboration: The Entrepreneurship Development
              Cell facilitates networking opportunities for entrepreneurs by
              organizing events, guest lectures, and industry interactions. It
              encourages collaboration among entrepreneurs, mentors, investors,
              and industry experts, fostering a vibrant entrepreneurial
              community.
            </li>
            <br />
            <li>
              Funding and Investment: The cell assists start-ups in accessing
              funding opportunities, connecting them with angel investors,
              venture capitalists, and government schemes supporting
              entrepreneurship. It helps entrepreneurs prepare investment
              pitches, business plans, and financial projections to attract
              potential investors.
            </li>
            <br />
            <li>
              Incubation Facilities: TTBIF, the incubator owned by the
              institute, provides physical infrastructure, co-working spaces,
              and access to necessary amenities for start-ups. It offers a
              conducive environment for collaboration, innovation, and growth,
              ensuring that start-ups have the resources they need to thrive.
            </li>
            <br />
            <li>
              Start-up Support Services: TTBIF and the Entrepreneurship
              Development Cell extend support services to start-ups in areas
              such as legal compliance, intellectual property rights, market
              research, and product development. They help entrepreneurs
              navigate challenges and overcome barriers to success.
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
          Conferences | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the various conferences hosted by Tula's Institute, providing a platform for students, faculty, and industry experts to discuss cutting-edge research, innovations, and advancements in engineering and technology."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                Entrepreneurship{" "}
                <span className="text-[#007A83]">Development</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              "Tula’s Entrepreneurship Development Cell is a dynamic unit within the institute that focuses on fostering an entrepreneurial ecosystem and nurturing aspiring entrepreneurs among students, faculty, and alumni. The cell collaborates closely with Tula’s Technology and Business Incubator (TTBIF), which is owned by the institute and is recognized by the Uttarakhand Start-up and MSME India."
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
          <button
            onClick={() => {
              window.location.href = innovationAndStartupPolicy;
            }}
            className="px-12 md:px-20 py-2 mb-20 bg-white text-[20px] md:text-[28px] font-[TTChocolatesBold] text-[#00383D] rounded-full hover:bg-[#00383D] hover:text-white"
          >
            Innovation and Startup Policy
          </button>
          <div className="px-8 md:px-32 w-full flex flex-col items-center justify-center">
            <h3 className="font-[CarotSlab] text-[clamp(25px,3vw,75px)]">
              Startup & Entrepreneurship development Cell
            </h3>
          </div>
          <div className="w-full">
            <SlidingCarousel items={patentImages} />
          </div>
          <div className="w-full h-fit z-50">
            <Footer color={true} />
          </div>
        </div>
      </body>
    </>
  );
}

export default EntrepreneurshipDevelopmentCell;
