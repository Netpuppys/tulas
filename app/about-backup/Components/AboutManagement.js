import React from "react";
import sunil from "../../../public/About/sunilAbout.png";
import school from "../../../public/About/school.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
function AboutManagement() {
  const sections = [
    {
      title: "WHO WE ARE",
      description: (
        <>
          Mr. Sunil Kumar Jain is a well-known Entrepreneur in Dehradun. In
          2004, he formed a Trust in the name of Rishabh Educational Trust. He
          established Tula’s Institute in 2006, under Rishabh Educational Trust
          and today Tula’s Institute is recognized as one of the{" "}
          <span className="font-[TTChocolatesMedium]">
            ‘Top engineering colleges in Uttarakhand.’
          </span>{" "}
          Known for its excellence in academic programs from undergraduate to
          postgraduate level, Tula’s Institute attracts students from different
          states of India and neighbouring countries at priority. At Tula’s
          Institute, we believe in maintaining a balance between academics and
          extra/co-curricular activities while keeping a healthy teacher-student
          ratio and in providing equal opportunities for all.
        </>
      ),
      imgSrc: sunil,
    },
    {
      title: "WHAT WE DO",
      description:
        "Tula’s Institute believes in providing the best possible facilities to its students. We endeavour to create a congenial atmosphere to nurture talent through the support and guidance of experienced faculty members with access to state of the art infrastructure. The institute is committed to offer the best possible facilities to ensure quality education for the students. The institute provides excellent infrastructural and ICT facilities with well-equipped laboratories, a modern computer centre, spacious and well-furnished classrooms, seminar hall, library, workshop, and fully air-conditioned & spacious auditorium. Tula’s creates a perfect blend of academicians, researchers and professionals from both public and private sectors who contribute to the Institute’s academic excellence in the state of Uttarakhand.",
      imgSrc: school,
    },
  ];

  return (
    <div className="bg-transparent w-full h-fit">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row justify-center min-h-[85vh] mb-8 md:mb-0 w-full md:max-w-[90vw] mx-auto px-10 items-center gap-10 md:gap-20 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          } `}
        >
          <Fade>
            <Image
              src={section.imgSrc}
              alt=""
              className="max-w-[659px] max-h-[700px] w-full h-full object-cover"
            />
          </Fade>
          <div className="w-fit">
            <h3 className="text-[36px] md:text-[60px] pb-6 font-[CarotSlab] text-white">
              {section.title}
            </h3>
            <h4 className="leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] text-white max-w-[659px]">
              {section.description}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutManagement;
