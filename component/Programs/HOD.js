import Image from "next/image";
import React from "react";

function HOD({ hod, HODcontent }) {
  return (
    <>
      <div className="bg-transparent max-w-[1200px] mx-auto flex justify-center items-center w-full">
        {hod.map((faculty, index) => (
          <div
            key={index}
            className="flex w-fit bg-black bg-opacity-20 backdrop-blur-lg rounded-3xl overflow-hidden items-start"
          >
            <Image
              src={faculty.imageUrl}
              alt=""
              className="rounded-2xl w-[40%] md:w-[225px] h-full object-cover"
            />
            <div className="px-4 text-black py-4 md:px-8 flex flex-col gap-2 md:gap-4">
              <h3 className="text-[#760135] font-[TTChocolatesBold] leading-tight font-semibold text-[clamp(15px,4.5vw,30px)] md:text-[clamp(10px,1.4vw,45px)]">
                {faculty.name}
              </h3>
              {faculty.email && (
                <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                  <strong>Email ID:- </strong>
                  {faculty.email}
                </p>
              )}
              {faculty.designation && (
                <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                  {faculty.designation}
                </p>
              )}

              {faculty.department && (
                <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                  {faculty.department}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto bg-transparent h-fit relative pl-4">
        <h5 className="w-full text-black px-4 mx-auto pt-8 md:pt-[3%] text-[16px] md:text-[22px] font-[TTChocolates] font-normal">
          {HODcontent}
        </h5>
      </div>
    </>
  );
}

export default HOD;
