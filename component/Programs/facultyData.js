import React from "react";

import Image from "next/image";
function FacultyData({ facultyData }) {
  return (
    <div className="bg-transparent flex flex-wrap gap-4 md:gap-8 w-full">
      {facultyData.map((faculty, index) => (
        <div
          key={index}
          className="flex w-full md:w-[48%] bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl overflow-hidden items-start"
        >
          <Image
            src={faculty.imageUrl}
            alt=""
            className="rounded-2xl w-[225px] h-full object-cover"
          />
          <div className="px-4 text-white py-4 md:px-8 flex flex-col gap-2 md:gap-4">
            <h3 className="text-[#EAFEFF] font-[TTChocolatesBold] font-semibold text-[20px] md:text-[30px]">
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
