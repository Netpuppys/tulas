import React from "react";

import { IoClose } from "react-icons/io5";
import FormEnquire from "./FormEnquire";

function FormPopup({ formPopup, setFormPopup }) {
  return (
    <>
      <div className="w-full h-screen flex bg-black bg-opacity-75  items-center backdrop-blur-md fixed z-[99999] top-0 left-0 justify-center">
        <div
          onClick={() => setFormPopup(false)}
          className="w-full h-screen absolute "
        ></div>

        <div className="w-full md:w-[80%] flex items-center justify-center gap-[10%]">
          <div className="hidden md:flex w-fit">
            <h3 className="text-[4vw] font-[CarotSlab] font-black tracking-wider text-white">
              <span className="border-b border-[#FFF]">YOUR DREAMS</span>
              <br />
              <span className="text-[#007A83]">BEGIN HERE</span>
            </h3>
          </div>
          <div className="shadow-2xl relative w-[95%] md:w-full max-w-[480px] pointer-events-auto">
            <button
              onClick={() => setFormPopup(false)}
              className="p-2 bg-[#007A83] text-xl text-white aspect-square rounded-full absolute -translate-y-1/2 right-2"
            >
              <IoClose />
            </button>
            <FormEnquire formPopup={formPopup} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPopup;
