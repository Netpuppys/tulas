import React from "react";
import DrRanitKishore from "../../../../public/courses/mba/facultyData/DrRanitKishore.webp";
import araghyaSarkar from "../../../../public/courses/mba/facultyData/araghyaSarkar.png";
import AnantLakshedra from "../../../../public/courses/mba/facultyData/AnantLakshedra.png";
import LalitGoel from "../../../../public/courses/mba/facultyData/LalitGoel.png";
import ShikhaDabral from "../../../../public/courses/mba/facultyData/ShikhaDabral.png";
import JasmeetKaur from "../../../../public/courses/mba/facultyData/JasmeetKaur.png";
import AbdalAhemad from "../../../../public/courses/mba/facultyData/AbdalAhemad.png";
import AnupamNautiyal from "../../../../public/courses/mba/facultyData/AnupamNautiyal.png";
import Emmanuel from "../../../../public/courses/mba/facultyData/Emmanuel.png";
import BharatBhushan from "../../../../public/courses/mba/facultyData/BharatBhushan.png";
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
      name: "Dr. Agroha Sarkar",
      education: "MBA, Ph.D.",
      experience: "11 Years",
      designation: "Assistant Professor",
      specialization: "",
      publications: "09",
      imageUrl: araghyaSarkar,
    },
    {
      name: "Dr. Anant Lakshendra",
      education: "MBA, Ph.D.",
      experience: "15 Years",
      designation: "Associate Professor",
      specialization: "",
      publications: "03",
      imageUrl: AnantLakshedra,
    },
    {
      name: "Dr. Lalit Goel",
      education: "MBA, Ph.D.",
      experience: "18 Years",
      designation: "Associate Professor & ACOE",
      specialization: "",
      publications: "6",
      imageUrl: LalitGoel,
    },
    {
      name: "Dr. Shikha Dabral",
      education: "MBA, Ph.D.",
      experience: "4 Years",
      designation: "Assistant Professor",
      specialization: "",
      publications: "8",
      imageUrl: ShikhaDabral,
    },
    {
      name: "Dr. Jasmeet Kaur",
      education: "MBA, Ph.D.",
      experience: "4 Years",
      designation: "Assistant Professor",
      specialization: "",
      publications: "5",
      imageUrl: JasmeetKaur,
    },
    {
      name: "Dr. Abdal Ahmad",
      education: "MBA, Ph.D.",
      experience: "8 Years",
      designation: "Assistant Professor",
      specialization: "",
      publications: "29",
      imageUrl: AbdalAhemad,
    },
    {
      name: "Mr. Anupam Nautiyal",
      education: "MBA, Ph.D.(P)",
      experience: "09 Years",
      designation: "Assistant Professor",
      specialization: "",
      publications: "3",
      imageUrl: AnupamNautiyal,
    },
    {
      name: "Mr. Emmanuel Gabriel",
      education: "MBA, Ph.D.(P)",
      experience: "06 Years",
      designation: "Assistant Professor",
      specialization: "",
      publications: "02",
      imageUrl: Emmanuel,
    },
    {
      name: "Mr. Bharat Bhushan",
      education: "MBA, Ph.D.(P)",
      experience: "03 Years",
      designation: "Assistant Professor",
      specialization: "",
      publications: "02",
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
            {faculty.specialization && (
              <p className="text-[#656565] text-[14px] md:text-[16px]">
                <strong className="text-black">Specialization:- </strong>
                {faculty.specialization}
              </p>
            )}
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
