"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/intellectual/background.png";
import { Fade } from "react-awesome-reveal";
import intellectual from "../../../public/research/intellectual/intellectual.png";
import { useInView } from "react-intersection-observer";
import Vision from "@/component/Programs/Vision";

function instituteInnovationCouncilIic() {
  const sections = [
    {
      title: "Institute Innovation Council (IIC)",
      description: (
        <>
          The primary role of the IIC is to engage a large number of faculty,
          students, and staff in diverse innovation and entrepreneurship
          activities. These activities include ideation sessions,
          problem-solving exercises, proof-of-concept development, design
          thinking workshops, intellectual property rights (IPR) awareness, and
          project management at the pre-incubation and incubation stages.
          <br />
          <br />
          By actively involving stakeholders in these innovation and
          entrepreneurship initiatives, the IIC aims to establish and stabilize
          a robust ecosystem that nurtures creativity, fosters entrepreneurial
          thinking, and promotes the translation of ideas into tangible
          solutions and ventures.
          <br />
          <br />
          The key objectives of Tula’s IIC program are as follows:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Encouraging Innovation: The IIC fosters a supportive environment
              that encourages innovative thinking and experimentation. It
              provides platforms for brainstorming, idea generation, and
              collaboration among students, faculty, and staff.
            </li>
            <br />

            <li>
              Problem-Solving: The IIC facilitates problem-solving activities
              where participants identify real-world challenges and work
              collectively to develop innovative solutions. These exercises
              enhance critical thinking, creativity, and the ability to address
              complex problems.
            </li>
            <br />
            <li>
              Proof of Concept Development: The IIC supports the development of
              proof of concepts, allowing participants to validate their ideas
              and transform them into tangible prototypes or minimum viable
              products (MVPs). This hands-on experience helps in understanding
              market viability and refining innovative solutions.
            </li>
            <br />
            <li>
              Design Thinking: The IIC promotes design thinking methodologies,
              enabling participants to adopt a user-centric approach to
              problem-solving. It emphasizes empathy, collaboration, and
              iterative ideation, leading to human-centred and innovative
              solutions.
            </li>
            <br />
            <li>
              IPR Awareness: The IIC creates awareness among participants about
              intellectual property rights (IPR) and their significance in
              protecting innovative ideas and inventions. It educates them about
              patent filing, copyright, and other forms of IPR protection.
            </li>
            <br />
            <li>
              Project Handling and Management: The IIC provides guidance and
              support in project handling and management, ensuring that
              participants develop the necessary skills to execute and manage
              innovative projects effectively.
            </li>
          </ul>
          <br />
          Through the Institution’s Innovation Council, Tula’s Institute strives
          to create a dynamic ecosystem that nurtures innovation, fosters
          entrepreneurship, and empowers individuals to become drivers of
          change. By engaging a diverse range of stakeholders, the IIC aims to
          establish a culture of continuous innovation and contribute to the
          growth of the start-up ecosystem within the institution and beyond.
        </>
      ),
      image: intellectual,
    },
  ];

  return (
    <>
      <head>
        <title>
          Institute Innovation Council (IIC) | Best Engineering College in
          Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the Institute Innovation Council (IIC) at Tula's Institute, dedicated to fostering innovation, entrepreneurship, and research. Learn about the initiatives, projects, and opportunities for students to engage in cutting-edge research and technological advancements."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                Institute Innovation{" "}
                <span className="text-[#007A83]">Council (IIC)</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              "Tula’s Institute takes pride in its Institution’s Innovation Council (IIC), which is supported by the Ministry of Education (MoE) through the MoE’s Innovation Cell (MIC) and launched in collaboration with the All India Council for Technical Education (AICTE). The IIC program is designed to systematically cultivate a culture of innovation and a thriving start-up ecosystem within educational institutions."
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
          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default instituteInnovationCouncilIic;
