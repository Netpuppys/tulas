import React from "react";
import DrRanitKishore from "../../../../public/courses/bba/facultyData/DrRanitKishore.webp";
import Emmanuel from "../../../../public/courses/bba/facultyData/EmanuelGabriel.webp";
import AnupamNautiyal from "../../../../public/courses/bba/facultyData/AnupamNautiyal.webp";
import MeghaAhuja from "../../../../public/courses/bba/facultyData/MeghaAhuja.webp";
import SonalBahuguna from "../../../../public/courses/bba/facultyData/SonalBahuguna.webp";
import BharatBhushan from "../../../../public/courses/bba/facultyData/BharatBhushan.webp";
import Image from "next/image";
function FacultyData() {
  const facultyData = [
    {
      name: "Dr Ranit Kishore",
      education: "B.Com, MBA , Ph.D.",
      experience: "23 Years",
      designation: "Dean",
      specialization: "Marketing and Information Technology",
      publications: "22+",
      imageUrl: DrRanitKishore, // Add the path for the image
    },
    {
      name: "Emmanuel Elgin Gabriel",
      education: "MBA, Ph.D.(P)",
      experience: "07 Years",
      designation: "Assistant Professor",
      specialization: "Finance and Marketing",
      publications: "02",
      imageUrl: Emmanuel,
    },
    {
      name: "Anupam Nautiyal",
      education: "MBA, Ph.D.(P)",
      experience: "07 Years",
      designation: "Assistant Professor",
      specialization: "MBA HR",
      publications: "1",
      imageUrl: AnupamNautiyal,
    },
    {
      name: "Megha Ahuja",
      education:
        "MBA (Educational Leadership) from Finland, M.Com., PGDBA (Finance), IPTE from Finland",
      experience: "7 Years",
      designation: "Assistant Professor (Finance)",
      specialization: "Finance",
      publications: "",
      imageUrl: MeghaAhuja,
    },
    {
      name: "Sonal Bahuguna",
      education: "MBA, PhD(P)",
      experience: "03 Years",
      designation: "Assistant professor",
      specialization: "Finance and Marketing",
      publications: "",
      imageUrl: SonalBahuguna,
    },
    {
      name: "Mr. Bharat Bhushan",
      education: "MBA, Ph.D.(P)",
      experience: "01 Years",
      designation: "Assistant Professor",
      specialization: "HRM",
      publications: "",
      imageUrl: BharatBhushan,
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
