import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import phoneCallGif from "../../../public/Components/Navbar/phone_ringing.gif";
import NBA from "../../../public/Components/Navbar/NBA.png";
import NAAC from "../../../public/Components/Navbar/NAAC.png";
import TulasLogo from "../../../public/Components/Navbar/TulasLogo.png";
import Years20 from "../../../public/graduate-school-of-business/mba/20Years.png";
import Image from "next/image";
function NavbarLanding({ handleScrollArrow, nba = false }) {
  return (
    <div className="fixed w-full h-full z-[9999]  pointer-events-none">
      {/* top bar */}
      <div className="bg-[rgba(19,19,19,0.50)] backdrop-blur-xl w-full h-fit">
        <div className={`w-full pointer-events-auto hidden md:flex`}>
          <div className="w-[95%] mx-auto flex items-center justify-center gap-4 top-0 border-b-[0.5px] border-[#9A9A9A] h-fit py-2">
            <a
              className="flex gap-2 items-center justify-center"
              href="tel:+91-8069204028"
            >
              <Image src={phoneCallGif} alt="" className="w-5 h-full" />
              Admissions Helpline Number - +91-8069204028
            </a>
            <button
              onClick={handleScrollArrow}
              className={`px-8  bg-white text-[#3D001B] rounded-full`}
            >
              Enquire Now
            </button>
          </div>
        </div>
        <div className="w-full px-4 md:px-[2%] py-2 flex justify-between gap-3 items-center">
          <div
            className={`w-full relative h-fit  flex flex-col justify-center`}
          >
            <div className="h-fit w-full flex flex-col md:flex-row gap-2 justify-between md:items-center">
              <div className="w-full md:w-fit flex relative items-center justify-between">
                <Image
                  src={TulasLogo}
                  alt=""
                  className="w-[60vw] md:w-[12vw] h-fit"
                />
                <button
                  title="Admission Helpline No. +91-8069204028"
                  className="bg-[#3D001B] pointer-events-auto rounded-full text-3xl shadow-lg w-16 aspect-square flex md:hidden flex-row justify-center items-center cursor-pointer relative"
                  onClick={() => (window.location.href = "tel:+91-8069204028")}
                >
                  <div className="w-[40px] h-[40px]">
                    <Image
                      src={phoneCallGif}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
              <div className="w-fit flex relative items-center gap-3 md:gap-6">
                <Image
                  src={Years20}
                  alt=""
                  className="w-[20vw] md:w-[7vw] h-fit"
                />
                <div className="h-[30px] md:h-[60px] w-[1px] bg-white"></div>
                {nba && (
                  <>
                    <Image
                      src={NBA}
                      alt=""
                      className="w-[15vw] md:w-[5vw] h-fit"
                    />
                    <div className="h-[30px] md:h-[60px] w-[1px] bg-white"></div>
                  </>
                )}
                <Image
                  src={NAAC}
                  alt=""
                  className="w-[30vw] md:w-[10vw] h-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full bottom-0 fixed z-50 pointer-events-auto bg-[#007A83] md:hidden`}
      >
        <div className="w-full mx-auto flex justify-between h-fit py-2">
          <a
            className="flex px-1 w-[calc(50%-0.5px)] text-white gap-2 items-center justify-center"
            href="tel:+91-8069204028"
          >
            <IoCall />
            +91-8069204028
          </a>
          <div className="w-[1px] bg-white"></div>
          <button
            onClick={handleScrollArrow}
            className={`w-[calc(50%-0.5px)] gap-2 flex justify-center items-center text-white rounded-full`}
          >
            <SiGoogleforms /> Enquire Now
          </button>
        </div>
      </div>
      <button
        onClick={() =>
          (window.location.href =
            "https://api.whatsapp.com/send/?phone=%2B919456540269&text&type=phone_number&app_absent=0")
        }
        className="fixed bottom-[8vw] pointer-events-auto flex justify-center items-center right-4 md:bottom-[2.5vw] md:right-[2.5vw] text-[#25D366] z-50 w-16 md:w-[74px] bg-white aspect-square shadow-2xl rounded-full"
      >
        <FaWhatsapp className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
      </button>
    </div>
  );
}

export default NavbarLanding;
