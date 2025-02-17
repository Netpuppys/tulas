"use client";
import React from "react";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import btechBannerImg from "../../public/courses/btech/btechBanner.webp";
import BannerProgram from "@/component/Programs/BannerProgram";
import Form from "../Component/Form";
import comprehensiveCurriculam from "../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../public/graduate-school-of-business/mba/globalAccredetation.png";
import marketingIcon from "../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../public/graduate-school-of-business/mba/finance.png";
import entreprenurship from "../../public/graduate-school-of-business/mba/entreprenurship.png";
import BusinessAnalytics from "../../public/graduate-school-of-business/mba/BusinessAnalytics.png";
import HumanResource from "../../public/graduate-school-of-business/mba/HumanResource.png";
import InternationalBusiness from "../../public/graduate-school-of-business/mba/InternationalBusiness.png";
import AgriBusiness from "../../public/graduate-school-of-business/mba/AgriBusiness.png";
import healthCare from "../../public/graduate-school-of-business/mba/healthCare.png";
import cuttingEdgeBackground from "../../public/graduate-school-of-business/mba/cuttingEdgeBackground.png";
import Image from "next/image";
import Link from "next/link";
import { selectedCardTable } from "../courses/btech/civil-engineering/data/data";
import TableProgram from "@/component/Programs/tableProgram";
function BTech() {
  const whyData = [
    {
      icon: comprehensiveCurriculam,
      title: "Industry-Oriented Curriculum",
      description: "Designed to meet the demands of modern industries.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Diverse Career Opportunities",
      description: "Expands career prospects across multiple domains.",
    },
    {
      icon: highCareerDemand,
      title: "Higher Earning Potential",
      description: "Competitive salaries and rewarding careers.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Hands-on Training",
      description: "Practical lab sessions to enhance technical proficiency.",
    },
    {
      icon: highCareerDemand,
      title: "Internship & Project Opportunities",
      description: "Exposure to real-world applications.",
    },
    {
      icon: industryReleventSkills,
      title: "High Demand for Skilled Engineers",
      description: "National and international job opportunities.",
    },
    {
      icon: globalAccredetation,
      title: "Lucrative Career Prospects",
      description: "Strong job market demand in India and abroad.",
    },
  ];
  const department = [
    {
      title: "Civil Engineering",
      icon: marketingIcon,
      link: "/courses/btech/civil-engineering",
    },
    {
      title: "Computer Science & Engineering",
      icon: finance,
      link: "/courses/btech/computer-science",
    },
    {
      title: "Data Science",
      icon: entreprenurship,
      link: "/courses/btech/computer-science-engineering-data-science",
    },
    {
      title: "Cyber Security",
      icon: BusinessAnalytics,
      link: "/courses/btech/computer-science-engineering-cyber-security",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: HumanResource,
      link: "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning",
    },
    {
      title: "Electronics & Communication Engineering",
      icon: InternationalBusiness,
      link: "/courses/btech/electronics-and-communication-engg",
    },
    {
      title: "Electrical & Electronics Engineering",
      icon: AgriBusiness,
      link: "/courses/btech/electrical-and-electronics-engg",
    },
    {
      title: "Mechanical Engineering",
      icon: healthCare,
      link: "/courses/btech/mechanical-engineering",
    },
  ];
  return (
    <>
      <head>
        <title>
          Best Engineering College in Dehradun, India | Tula's Institute
        </title>
        <meta
          name="description"
          content="Looking for the Top Engineering and Degree College in Dehradun(Uttarakhand)? Look No Further Than Tula's Institute. We Offer the Best Engineering Courses Across India. Visit Now!"
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={btechBannerImg}
          title={"Bachelor of Technology (B.Tech)"}
        />
        <div className="py-8 md:py-[4%] w-full h-fit">
          <div className="w-full h-fit">
            <div className="w-[92%] mx-auto">
              <div
                className={`flex flex-col-reverse md:flex-row justify-center w-full items-start gap-8 md:gap-[2%]`}
              >
                <div className="w-full text-[#353535] md:w-full px-4 md:px-0">
                  <h5 className="w-fit mx-auto text-[#353535] text-center pb-4 md:pb-[3%] leading-tight text-[clamp(10px,5.5vw,30px)] md:text-[clamp(10px,2.5vw,45px)] font-[CarotSlab] font-medium">
                    About the Course
                    <div className="h-[4px] bg-[#007A83] w-[55%] mx-auto rounded-full"></div>
                  </h5>
                  <h5 className="w-full text-[#353535] md:w-full text-justify mx-auto leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] font-[MontserratLight] font-normal">
                    The Bachelor of Technology (B.Tech) is a four-year
                    undergraduate program designed to equip students with a
                    strong foundation in engineering principles, technical
                    expertise, and practical skills. The course fosters
                    innovation, critical thinking, and problem-solving
                    abilities, enabling graduates to excel in various
                    engineering and technological fields. The curriculum blends
                    theoretical knowledge with hands-on training, preparing
                    students for industry, research, and entrepreneurship.
                    <div className="mt-4 md:mt-[1%]"></div>
                    The B.Tech program is structured to provide a balanced mix
                    of classroom instruction, laboratory experience, industrial
                    exposure, and real-world applications. Students are
                    introduced to fundamental engineering concepts in the early
                    semesters, followed by specialized subjects and electives
                    tailored to their chosen discipline. This ensures a
                    well-rounded education that not only builds technical
                    proficiency but also enhances analytical and creative
                    problem-solving skills.
                    <div className="mt-4 md:mt-[1%]"></div>A key feature of the
                    B.Tech program is its emphasis on practical learning.
                    Students engage in hands-on training through laboratory
                    work, workshops, live projects, and internships with leading
                    companies. Many universities collaborate with industry
                    leaders, research organizations, and government agencies to
                    offer students exposure to real-world engineering
                    challenges. This interaction with professionals helps
                    students develop an understanding of industry standards,
                    technological advancements, and business applications.
                    <div className="mt-4 md:mt-[1%]"></div>
                    The curriculum is continuously updated to keep pace with the
                    rapid evolution of technology. Subjects such as artificial
                    intelligence, cybersecurity, data science, renewable energy,
                    and automation are integrated to ensure graduates remain
                    competitive in the job market. The interdisciplinary nature
                    of the program encourages students to explore innovative
                    solutions and research opportunities beyond their core
                    engineering specialization.
                  </h5>
                </div>
                <div className="w-full max-w-[500px] bg-[#007a83] overflow-hidden backdrop-blur-xl h-fit mx-auto rounded-2xl">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-6 flex flex-col items-center justify-center w-full">
          <h8 className="text-[#353535] px-4 text-center text-[clamp(10px,5.5vw,50px)] leading-tight md:text-[clamp(10px,2.5vw,45px)] font-[CarotSlab] font-medium">
            Why Choose TULA’s
            <div className="h-[4px] bg-[#007A83] w-[55%] mx-auto rounded-full"></div>
          </h8>
          <div className="flex flex-wrap gap-4 w-full pt-8 md:pt-[3%] md:w-[95%] mx-auto">
            {whyData.map((card, index) => (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row md:w-[calc(25%-1rem)] mb-[2%] relative"
              >
                <div className="flex flex-col justify-between items-start w-full h-full">
                  <div className="rounded-md px-4 font-semibold">
                    <Image
                      src={card.icon}
                      alt=""
                      className="w-[80px] aspect-square"
                    />
                  </div>
                  <h3 className="text-[#4E4E4E] px-4 mt-4 leading-tight text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1vw,45px)] text-wrap font-[MontserratMedium] font-normal">
                    {card.title}
                  </h3>
                  <h3 className="text-[#4E4E4E] px-4 mt-2 text-[clamp(10px,3.8vw,30px)] md:text-[clamp(10px,0.9vw,45px)] leading-tight text-wrap font-[MontserratLight] font-normal">
                    {card.description}
                  </h3>
                </div>
                {whyData.length - 1 != index && index != 3 && (
                  <div className="bg-[#4E4E4E] border-dotted h-[1px] w-[calc(100%-32px)] md:w-[1px] md:h-auto mx-auto mt-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[95%] mx-auto pt-6 md:pt-[3%]  h-full">
          <div className="relative w-full h-full rounded-xl overflow-hidden z-20">
            <Image
              src={cuttingEdgeBackground}
              alt=""
              className="w-full absolute -z-10 h-full object-cover"
            />
            <div className="py-8 md:py-[4%] flex flex-col  gap-8 items-center">
              <h8 className="text-white px-4 text-center text-[clamp(10px,5.5vw,50px)] leading-tight md:text-[clamp(10px,2.5vw,45px)] font-[CarotSlab] font-medium">
                Specializations Offered
              </h8>
              {department && (
                <div className="flex items-start flex-wrap gap-4 gap-y-8 w-[90%] mx-auto">
                  {department.map((card, index) => (
                    <Link
                      key={index}
                      href={card.link}
                      className="w-full md:w-[calc(25%-1rem)] group items-start justify-start flex"
                    >
                      <div className="flex gap-6 justify-start items-center w-full h-full">
                        <Image
                          src={card.icon}
                          alt=""
                          className="bg-white p-2 w-[65px] aspect-square rounded-xl"
                        />
                        <h3 className="text-[#FFFFFF] group-hover:underline underline-offset-4 transition-all duration-200 leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-wrap font-[MontserratLight] font-normal">
                          {card.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <TableProgram selectedCardTable={selectedCardTable} />
        <div className="pt-8 md:pt-[3%]"></div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default BTech;
