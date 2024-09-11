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

function EntrepreneurshipDevelopmentCell() {
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
            Entrepreneurship <span className="text-[#007A83]">Development</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "Tula’s Entrepreneurship Development Cell is a dynamic unit within the institute that focuses on fostering an entrepreneurial ecosystem and nurturing aspiring entrepreneurs among students, faculty, and alumni. The cell collaborates closely with Tula’s Technology and Business Incubator (TTBIF), which is owned by the institute and is recognized by the Uttarakhand Start-up and MSME India."
        }
      />
      <div className="w-full relative overflow-hidden -mb-[6vh]">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div
        ref={ref}
        className="pt-40 pb-20 bg-transparent w-[95%] ml-[5%] h-fit flex items-center justify-between"
      >
        <Fade delay={300} className="w-[45%]">
          <div className="w-full block">
            <h3 className="px-10 font-[TTChocolatesBold] font-semibold rounded-md text-[52px] border-l-4 border-white">
              Entrepreneurship Development
            </h3>
            <br />
            <h4 className="text-[22px] font-[TTChocolates] text-[#D9D9D9]">
              The Entrepreneurship Development Cell, in conjunction with TTBIF,
              fulfills the following key roles and functions:
              <br />
              <br />
              <ul className="ml-5 list-disc">
                <li>
                  Incubation Support: The cell provides comprehensive support to
                  innovative start-ups and aspiring entrepreneurs, guiding them
                  through the various stages of business development. It offers
                  incubation services, including mentoring, infrastructure
                  support, access to networks, and business development
                  resources.
                </li>
                <br />

                <li>
                  Entrepreneurship Education and Training: The cell organizes
                  workshops, training programs, and boot camps that equip
                  students and budding entrepreneurs with the necessary skills,
                  knowledge, and mindset required to start and manage successful
                  ventures. These initiatives cover areas such as ideation,
                  business planning, market research, financial management, and
                  pitching.{" "}
                </li>
                <br />
                <li>
                  Networking and Collaboration: The Entrepreneurship Development
                  Cell facilitates networking opportunities for entrepreneurs by
                  organizing events, guest lectures, and industry interactions.
                  It encourages collaboration among entrepreneurs, mentors,
                  investors, and industry experts, fostering a vibrant
                  entrepreneurial community.
                </li>
                <br />
                <li>
                  Funding and Investment: The cell assists start-ups in
                  accessing funding opportunities, connecting them with angel
                  investors, venture capitalists, and government schemes
                  supporting entrepreneurship. It helps entrepreneurs prepare
                  investment pitches, business plans, and financial projections
                  to attract potential investors.
                </li>
                <br />
                <li>
                  Incubation Facilities: TTBIF, the incubator owned by the
                  institute, provides physical infrastructure, co-working
                  spaces, and access to necessary amenities for start-ups. It
                  offers a conducive environment for collaboration, innovation,
                  and growth, ensuring that start-ups have the resources they
                  need to thrive.
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
            </h4>
          </div>
        </Fade>
        <Fade className="w-[45%]">
          <Image
            src={intellectual}
            alt=""
            className={`w-full h-fit ${
              inView ? "animate-translateRight" : "opacity-0"
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

export default EntrepreneurshipDevelopmentCell;
