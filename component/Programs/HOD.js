import Image from "next/image";
import React from "react";

function HOD({ hod, HODcontent }) {
  return (
    <>
      <div className="bg-transparent flex justify-center items-center w-full">
        {hod.map((faculty, index) => (
          <div
            key={index}
            className="flex w-fit bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl overflow-hidden items-start"
          >
            <Image
              src={faculty.imageUrl}
              alt=""
              className="rounded-2xl w-[40%] md:w-[225px] h-full object-cover"
            />
            <div className="px-4 text-white py-4 md:px-8 flex flex-col gap-2 md:gap-4">
              <h3 className="text-[#EAFEFF] font-[TTChocolatesBold] font-semibold text-[20px] md:text-[30px]">
                {faculty.name}
              </h3>
              {faculty.email && (
                <p className="text-[14px] md:text-[16px]">
                  <strong>Email ID:- </strong>
                  {faculty.email}
                </p>
              )}
              {faculty.designation && (
                <p className="text-[14px] md:text-[16px]">
                  {faculty.designation}
                </p>
              )}

              {faculty.department && (
                <p className="text-[14px] md:text-[16px]">
                  {faculty.department}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="z-[9] bg-transparent h-fit relative pl-4">
        <h5 className="w-full text-white  px-4 mx-auto py-10 md:py-20 text-[16px] md:text-[22px] font-[TTChocolates] font-normal">
          {HODcontent}
        </h5>
      </div>
    </>
  );
}

export default HOD;
