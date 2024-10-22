"use client";
import React from "react";

import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa";
function FacultyData({ facultyData }) {
  return (
    <div className="bg-transparent flex justify-center flex-wrap gap-4 md:gap-8 w-full">
      {facultyData.map((faculty, index) => (
        <div
          key={index}
          className="flex w-full  md:w-[48%] bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl overflow-hidden items-start"
        >
          <div className="min-w-[40%] max-w-[40%] md:min-w-[225px] md:max-w-[225px] h-full flex flex-col justify-end items-center relative rounded-2xl overflow-hidden">
            <Image
              src={faculty.imageUrl}
              alt=""
              className="rounded-2xl w-full h-full object-cover"
            />
            <button
              onClick={() => (window.location.href = faculty.resume)}
              className="absolute w-full flex gap-3 justify-center items-center bg-white py-1 text-[20px] text-[#760135] font-[TTChocolatesBold] font-[600]"
            >
              Resume
              <FaRegFilePdf />
            </button>
          </div>
          <div className="px-4 text-white py-4 md:px-8 flex flex-col gap-2 md:gap-4">
            <h3 className="text-[#FFE0EE] font-[TTChocolatesBold] font-semibold text-[20px] md:text-[30px]">
              {faculty.name}
            </h3>
            {faculty.experience && (
              <p className="text-[14px] md:text-[16px]">
                <strong>Education:- </strong>
                {faculty.education}
              </p>
            )}
            {faculty.experience && (
              <p className="text-[14px] md:text-[16px]">
                <strong>Experience:- </strong>
                {faculty.experience}
              </p>
            )}
            {faculty.designation && (
              <p className="text-[14px] md:text-[16px]">
                <strong>Designation:- </strong>
                {faculty.designation}
              </p>
            )}
            {faculty.specialization && (
              <p className="text-[14px] md:text-[16px]">
                <strong>Specialization:- </strong>
                {faculty.specialization}
              </p>
            )}
            {faculty.publications && (
              <p className="text-[14px] md:text-[16px]">
                <strong>Publications:- </strong>
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
