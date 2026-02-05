import React from "react";
import { FaUsers } from "react-icons/fa";

function StudentPlacement({ pdf, buttonText = "Read More" }) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit mx-auto mt-6 md:mt-[1%] py-3 bg-[#007A83] group relative px-10 flex items-center justify-center text-white rounded-full"
    >
      <div className="absolute z-10 bg-white w-1/2 h-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] transition-all duration-300 rounded-full"></div>

      <p className="z-20 flex items-center text-white group-hover:text-[#007A83] transition-all duration-200 justify-center gap-2 text-[clamp(10px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)]">
        {buttonText}
      </p>
    </a>
  );
}

export default StudentPlacement;
