import React from "react";
import TauseefIqbal from "../../../../public/courses/bjmc/facultyData/TauseefIqbal.webp";
import NeerajKotiyal from "../../../../public/courses/bjmc/facultyData/NeerajKotiyal.webp";
import deepkarawat from "../../../../public/courses/bjmc/facultyData/deepkarawat.webp";
import AnkitGhildiyal from "../../../../public/courses/bjmc/facultyData/AnkitGhildiyal.webp";
import Image from "next/image";
function FacultyData() {
  const facultyData = [
    {
      name: "Tauseef Iqbal",
      education: "Master’s in Mass Communication,  Ph.D. (P)",
      experience: "8 Years",
      designation: "Assistant Professor",
      specialization: "Film Studies, Radio Production & Photography",
      publications: "",
      imageUrl: TauseefIqbal, // Add the path for the image
    },
    {
      name: "Neeraj Kotiyal",
      education: "Bachelors & Masters in media and communication studies",
      experience: "2 Years",
      designation: "Assistant Professor",
      specialization: "Radio / Advertising and Public relations",
      publications: "",
      imageUrl: NeerajKotiyal,
    },
    {
      name: "Ms. Deepika Rawat",
      education: "Master’s in Mass Communication",
      experience: "3 Years",
      designation: "Assistant Professor",
      specialization: "Development Communication",
      publications: "",
      imageUrl: deepkarawat,
    },
    {
      name: "Dr. Ankit Ghildiyal",
      education: "Ph.D. ",
      experience: "14 Years",
      designation: "Assistant Professor",
      specialization: "Journalism and Mass Communication (New Media)",
      publications: "3",
      imageUrl: AnkitGhildiyal,
    },
  ];
  return (
    <div className="bg-transparent flex flex-wrap gap-4 md:gap-8 w-full">
      {facultyData.map((faculty, index) => (
        <div
          key={index}
          className="flex w-full md:w-[48%] bg-white rounded-3xl overflow-hidden items-center"
        >
          <Image
            src={faculty.imageUrl}
            alt=""
            className="rounded-2xl w-[40%] h-full object-cover md:w-fit"
          />
          <div className="px-4 py-4 md:px-8 flex flex-col gap-2 md:gap-4">
            <h3 className="text-[#3D001B] font-[TTChocolatesBold] font-semibold text-[20px] md:text-[30px]">
              {faculty.name}
            </h3>
            <p className="text-[#656565] text-[14px] md:text-[16px]">
              <strong className="text-black">Education:- </strong>
              {faculty.education}
            </p>
            {faculty.experience && (
              <p className="text-[#656565] text-[14px] md:text-[16px]">
                <strong className="text-black">Experience:- </strong>
                {faculty.experience}
              </p>
            )}
            <p className="text-[#656565] text-[14px] md:text-[16px]">
              <strong className="text-black">Designation:- </strong>
              {faculty.designation}
            </p>
            <p className="text-[#656565] text-[14px] md:text-[16px]">
              <strong className="text-black">Specialization:- </strong>
              {faculty.specialization}
            </p>
            {faculty.publications && (
              <p className="text-[#656565] text-[14px] md:text-[16px]">
                <strong className="text-black">Publications:- </strong>
                {faculty.publications}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FacultyData;
