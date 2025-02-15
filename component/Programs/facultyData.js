"use client";
import React, { useContext, useEffect, useRef } from "react";

import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa";
import Link from "next/link";
import { UtmContext } from "../utmParams";
function FacultyData({ facultyData }) {
  const { utmParams } = useContext(UtmContext);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 2; // Speed of scrolling
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset to start for continuous effect
        }
      }
    };
    const interval = setInterval(scroll, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-transparent overflow-auto flex flex-wrap justify-center gap-4 md:gap-8 w-full">
      {facultyData.map((faculty, index) => (
        <div
          key={index}
          className={`flex group relative flex-col w-[calc(50%-1rem)] md:min-w-[15vw] md:max-w-[15vw] border border-[#323232] rounded-xl overflow-hidden items-start justify-center transition-all ease-in duration-300 ${
            faculty.linkTo ? "cursor-pointer" : ""
          }`}
        >
          <div className="w-full !aspect-[0.75/1] h-full group-hover:opacity-0 flex flex-col justify-end items-center relative rounded-xl overflow-hidden transition-all ease-in duration-300">
            <Image
              onClick={() => {
                if (faculty.linkTo) {
                  window.location.href = `${faculty.linkTo}/${utmParams}`;
                }
              }}
              src={faculty.imageUrl}
              alt=""
              className="rounded-xl  w-full h-full object-cover"
            />
          </div>
          <div
            onClick={() => {
              if (faculty.linkTo) {
                window.location.href = `${faculty.linkTo}/${utmParams}`;
              }
            }}
            className="px-4 text-[#353535] py-4 flex group-hover:opacity-0 flex-col transition-all ease-in duration-300 "
          >
            <h3 className="text-[#007A83] font-[MontserratMedium] leading-tight font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)]">
              {faculty.name}
            </h3>
            {faculty.designation && (
              <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                {faculty.designation}
              </p>
            )}
          </div>
          <div
            onClick={() => {
              if (faculty.linkTo) {
                window.location.href = `${faculty.linkTo}/${utmParams}`;
              }
            }}
            className="px-4 opacity-0 absolute pb-[40px] bg-[#007A83] w-full h-full text-white py-4 group-hover:opacity-100 flex flex-col justify-center gap-2 transition-all ease-in duration-300"
          >
            <h3 className="text-white font-[MontserratMedium] leading-tight font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] w-fit border-b border-white">
              {faculty.name}
            </h3>
            {faculty.designation && (
              <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                <strong>Designation:- </strong> {faculty.designation}
              </p>
            )}
            {faculty.education && (
              <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                <strong>Education:- </strong>
                {faculty.education}
              </p>
            )}
            {faculty.experience && (
              <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                <strong>Experience:- </strong>
                {faculty.experience}
              </p>
            )}

            {faculty.specialization && (
              <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                <strong>Specialization:- </strong>
                {faculty.specialization}
              </p>
            )}
            {faculty.publications && (
              <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                <strong>Publications:- </strong>
                {faculty.publications}
              </p>
            )}
          </div>
          {faculty.resume && (
            <Link
              href={faculty.resume}
              target="_blank"
              className="relative h-[40px] bottom-0 cursor-pointer w-full pointer-events-auto flex gap-3 justify-center items-center bg-[#007A83] group-hover:bg-white text-[clamp(10px,1.1vw,50px)] text-white group-hover:text-[#007A83] font-[MontserratMedium] transition-all ease-in duration-300 font-[600]"
            >
              Resume
              <FaRegFilePdf />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default FacultyData;
