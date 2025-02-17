"use client";
import React from "react";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import btechBannerImg from "../../public/courses/btech/btechBanner.webp";
import BannerProgram from "@/component/Programs/BannerProgram";
import Form from "../Component/Form";
import comprehensiveCurriculam from "../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import highCareerDemand from "../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import marketingIcon from "../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../public/graduate-school-of-business/mba/finance.png";
import entreprenurship from "../../public/graduate-school-of-business/mba/entreprenurship.png";
import cuttingEdgeBackground from "../../public/graduate-school-of-business/mba/cuttingEdgeBackground.png";
import Image from "next/image";
import TableProgram from "@/component/Programs/tableProgram";
function MTech() {
  const whyData = [
    {
      icon: comprehensiveCurriculam,
      title: "Specialized Knowledge",
      description: "Advanced expertise in emerging technologies.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Career Advancement",
      description: "Enhanced job prospects with a higher qualification.",
    },
    {
      icon: highCareerDemand,
      title: "Research Opportunities",
      description: "Engage in innovative and impactful research.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Industry Collaboration",
      description:
        "Opportunities to work with leading companies and institutions.",
    },
  ];
  const department = [
    {
      title: "Computer Science & Engineering",
      icon: marketingIcon,
    },
    {
      title: "Thermal Engineering",
      icon: finance,
    },
    {
      title: "Civil Engineering",
      icon: entreprenurship,
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
          title={"Master of Technology (M.Tech)"}
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
                    The Master of Technology (M.Tech) is a two-year postgraduate
                    program aimed at professionals and students looking to
                    deepen their expertise in engineering and technology. This
                    advanced degree offers a robust curriculum that integrates
                    theoretical concepts with practical applications, focusing
                    on specialized knowledge, research methodologies, and
                    industry-driven innovations.
                    <div className="mt-4 md:mt-[1%]"></div>
                    M.Tech programs provide students with an opportunity to
                    enhance their technical acumen and analytical abilities in
                    specific domains such as Computer Science, Mechanical
                    Engineering, Electrical Engineering, Civil Engineering, and
                    emerging fields like Artificial Intelligence, Robotics, and
                    Data Science. The curriculum is designed to equip students
                    with cutting-edge skills, ensuring they remain competitive
                    in the rapidly evolving technological landscape.
                    <div className="mt-4 md:mt-[1%]"></div>
                    One of the key aspects of an M.Tech degree is its emphasis
                    on research and development (R&D). Students engage in thesis
                    work, innovative projects, and industrial collaborations
                    that foster independent thinking and innovation. Many
                    universities and institutes have dedicated research centers
                    where students work on breakthrough technologies, patents,
                    and solutions for real-world challenges.
                    <div className="mt-4 md:mt-[1%]"></div>
                    The program also includes industry exposure through
                    internships, guest lectures from industry experts, and
                    collaborations with global technology firms. This practical
                    learning component helps students understand the nuances of
                    contemporary engineering problems and prepares them for
                    leadership roles in academia, R&D, and high-tech industries.
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
                <div className="flex justify-center flex-wrap gap-4 gap-y-8 w-[90%] mx-auto">
                  {department.map((card, index) => (
                    <div
                      key={index}
                      className="w-full md:w-[calc(25%-1rem)] items-start justify-start flex"
                    >
                      <div className="flex gap-6 justify-start items-center w-full h-full">
                        <Image
                          src={card.icon}
                          alt=""
                          className="bg-white p-2 w-[65px] aspect-square rounded-xl"
                        />
                        <h3 className="text-[#FFFFFF] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-wrap font-[MontserratLight] font-normal">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <TableProgram
          selectedCard1={
            <>
              <span className="font-[Arapey] pb-[1%] leading-tight">
                Admission Eligibility
              </span>
              <ul className="list-disc ml-5 font-[MontserratLight] leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] text-[#353535]">
                <li>
                  <strong>Duration:</strong> 2 years (4 semesters).
                </li>
                <li>
                  <strong>Eligibility:</strong> B.Tech/B.E. in a relevant field
                  with qualifying entrance exam scores (GATE or
                  university-specific tests).
                </li>
                <li>
                  <strong>Mode:</strong> Full-time.
                </li>
              </ul>
            </>
          }
        />
        <div className="pt-8 md:pt-[3%]"></div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default MTech;
