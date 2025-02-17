import React from "react";
import Form from "./Form";
const aboutTulas = (
  <>
    <strong className="text-[#007A83]">Tula's Institute</strong> is dedicated to
    providing top-notch education, preparing students for success in their
    professional careers.
    <br />
    This commitment to excellence has earned{" "}
    <strong className="text-[#007A83]">Tula's Institute</strong> prestigious
    accolades:
    <ul className="list-disc ml-5 mt-3">
      <li>
        Ranked among the Top 50 Private Colleges in India for eight consecutive
        years (2016–2024)
      </li>
      <li>
        Secured a spot in the Top 20 Private Engineering Colleges of North India
        for the past three years, as per The Times of India Engineering Survey
      </li>
      <li>
        Awarded an AA+ rating by Career360, cementing its reputation as a
        leading educational institution
      </li>
    </ul>
  </>
);

function AboutTulas() {
  return (
    <div
      id="2"
      className="flex flex-col-reverse md:flex-row md:gap-[10%] relative px-4 py-8 md:px-[10%] md:py-[5%] justify-between items-center"
    >
      <div className="w-full px-6 md:px-0 md:w-[50%] pt-8 md:py-0">
        <h2 className="text-[#3A3A3A] text-[clamp(10px,6vw,30px)] pb-4 md:pb-[1%] font-[CarotSlab] md:text-[clamp(10px,2.5vw,50px)] leading-tight">
          About <span className="text-[#760135]">TULA’s</span>
        </h2>
        <h3 className="text-[#6F6C6C] font-[MontserratMedium] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] ml-0 mr-auto">
          {aboutTulas}
        </h3>
      </div>
      <div className="w-full md:w-[40%]  flex flex-col justify-center items-center">
        <div className="w-full max-w-[500px] bg-[#760135] overflow-hidden backdrop-blur-xl h-fit mx-auto rounded-2xl">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default AboutTulas;
