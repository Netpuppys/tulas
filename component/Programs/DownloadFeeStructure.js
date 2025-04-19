import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import FormPopup from "../formPopup";

function DownloadFeeStructure({ pdf }) {
  const [formPopup, setFormPopup] = useState(false);
  return (
    <>
      <button
        onClick={() => setFormPopup(true)}
        className={`w-fit mx-auto mt-6 md:mt-[3%] py-3 bg-[#007A83] group relative px-10 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full `}
      >
        <div className="absolute z-10 bg-white w-1/2 h-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] transition-all duration-300 rounded-full"></div>
        <p className="z-20 flex items-center text-white group-hover:text-[#007A83] transition-all duration-200 justify-center gap-2 text-[clamp(10px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)]">
          Download Fee Structure <FaDownload />
        </p>
      </button>
      {formPopup && (
        <FormPopup
          formPopup={formPopup}
          setFormPopup={setFormPopup}
          pdf={pdf}
        />
      )}
    </>
  );
}

export default DownloadFeeStructure;
