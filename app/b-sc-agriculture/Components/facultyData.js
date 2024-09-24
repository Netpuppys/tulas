import React from "react";
import drSatendra from "../../../public/bsc-agriculture/facultyData/drSatendra.webp";
import PrernaBadoni from "../../../public/bsc-agriculture/facultyData/PrernaBadoni.webp";
import AgriAshishUpadhyay from "../../../public/bsc-agriculture/facultyData/AgriAshishUpadhyay.webp";
import DrPremSinghVerma from "../../../public/bsc-agriculture/facultyData/DrPremSinghVerma.webp";
import DrRupinder from "../../../public/bsc-agriculture/facultyData/DrRupinder.webp";
import drrekha from "../../../public/bsc-agriculture/facultyData/drrekha.webp";
import DrShivangi from "../../../public/bsc-agriculture/facultyData/DrShivangi.webp";
import BhawnaGahtori from "../../../public/bsc-agriculture/facultyData/BhawnaGahtori.webp";
import AgriDivyaRawat from "../../../public/bsc-agriculture/facultyData/AgriDivyaRawat.webp";
import AniketSharma from "../../../public/bsc-agriculture/facultyData/AniketSharma.webp";
import PankajSingh from "../../../public/bsc-agriculture/facultyData/PankajSingh.webp";
import shivendra from "../../../public/bsc-agriculture/facultyData/shivendra.webp";
import rupalikaushik from "../../../public/bsc-agriculture/facultyData/rupalikaushik.webp";
import Image from "next/image";
function FacultyData() {
  const facultyData = [
    {
      name: "Dr. Satendra",
      education: "Ph.D.",
      experience: "14 Years",
      designation: "Assistant Professor",
      specialization: "Lycopersicon esculantum Mill",
      publications: "04",
      imageUrl: drSatendra, // Add the path for the image
    },
    {
      name: "Dr. Prerana Badoni",
      education: "Ph.D.",
      experience: "10 Years (Academics, Research and Industry)",
      designation: "Associate Professor",
      specialization: "Microbiology",
      publications: "12",
      imageUrl: PrernaBadoni,
    },
    {
      name: "Mr. Ashish Upadhyay",
      education: "M.Sc., Ph.D. (P)",
      experience: "14 Years",
      designation: "Assistant Professor",
      specialization: "Plant Breeding",
      publications: "11",
      imageUrl: AgriAshishUpadhyay,
    },
    {
      name: "Dr. Prem Singh Verma",
      education: "Ph.D.",
      experience: "14 Years",
      designation: "Assistant Professor",
      specialization: "Animal Nutrition.",
      publications: "",
      imageUrl: DrPremSinghVerma,
    },
    {
      name: "Dr. Rupinder Kaur",
      education: "Ph.D.",
      experience: "10 Years",
      designation: "Associate Professor",
      specialization: "Botany",
      publications: "16",
      imageUrl: DrRupinder,
    },
    {
      name: "Dr. Rekha Dhanai",
      education: "Ph.D. NET(ICAR).",
      experience: "11 Years",
      designation: "Associate Professor",
      specialization: "Agricultural Extension",
      publications: "34",
      imageUrl: drrekha,
    },
    {
      name: "Dr. Shivangi Negi",
      education: "M.Sc., Ph.D.",
      experience: "2 Years",
      designation: "Assistant Professor",
      specialization: "Seed Science and Technology",
      publications: "24",
      imageUrl: DrShivangi,
    },
    {
      name: "Ms. Bhawana Gahtori",
      education: "M.Sc.,",
      experience: "5 Years",
      designation: "Assistant Professor",
      specialization: "Agriculture",
      publications: "11",
      imageUrl: BhawnaGahtori,
    },
    {
      name: "Ms. Divya Rawat",
      education: "M.Sc., Entomology",
      designation: "Assistant Professor",
      specialization: "Entomology",
      imageUrl: AgriDivyaRawat,
    },
    {
      name: "Mr. Anikesh Sharma",
      education: "M.Sc., Environmental Science.",
      designation: "Assistant Professor",
      specialization: "Natural resource management",
      imageUrl: AniketSharma,
    },
    {
      name: "Mr. Pankaj Singh Negi",
      education: "M.Sc., Environmental science.",
      designation: "Assistant Professor",
      specialization: "Environmental science",
      imageUrl: PankajSingh,
    },
    {
      name: "Mr. Shivendra Mishra",
      education: "M.Sc., Agronomy.",
      designation: "Assistant Professor",
      specialization: "Agronomy",
      imageUrl: shivendra,
    },
    {
      name: "Ms. Rupali Kaushik",
      education: "M.Sc., Ph.D.(P)",
      designation: "Assistant Professor",
      specialization: "Plant Pathology",
      imageUrl: rupalikaushik,
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
