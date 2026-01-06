"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import phoneCallGif from "../../../public/Components/Navbar/phone_ringing.gif";
import NBA from "../../../public/Components/Navbar/NBA.png";
import NAAC from "../../../public/Components/Navbar/NAAC.png";
import TulasLogo from "../../../public/Components/Navbar/TulasLogo.png";
import TulasLogoMobile from "../../../public/Components/Navbar/TulasLogomd.png";
import Years20 from "../../../public/graduate-school-of-business/mba/20Years.png";
import Image from "next/image";

function NavbarLanding({ handleScrollArrow, nba = false }) {
  return (
    <div className="fixed w-full z-[9999] pointer-events-none">

      {/* ================= DESKTOP TOP BAR ================= */}
      <div className="bg-[rgba(19,19,19,0.50)] backdrop-blur-xl w-full hidden md:block pointer-events-auto">
        <div className="w-[95%] mx-auto flex items-center justify-center gap-4 border-b border-[#9A9A9A] py-2">
          <a
            href="tel:+91-8069204028"
            className="flex gap-2 items-center"
          >
            <Image src={phoneCallGif} alt="" className="w-5" />
            Admissions Helpline Number - +91-8069204028
          </a>
          <button
            onClick={handleScrollArrow}
            className="px-8 bg-white text-[#3D001B] rounded-full"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="bg-[rgba(19,19,19,0.50)] backdrop-blur-xl pointer-events-auto">
        <div className="px-0 md:px-[2%] pb-3 md:pt-2 pt-0">

          {/* ===== MOBILE STRUCTURE ===== */}
{/* ===== MOBILE STRUCTURE ===== */}
<div className="flex flex-col gap-2 md:hidden">

  {/* TOP ROW: YEARS + NBA + NAAC with RED BACKGROUND */}
  <div className="flex justify-between items-center gap-3 bg-[#3D001B] px-4 pb-2 pt-1">
    <Image src={Years20} alt="" className="w-[50px]" />
    {nba && <Image src={NBA} alt="" className="w-[45px]" />}
    <Image src={NAAC} alt="" className="w-[60px]" />
  </div>

  {/* BOTTOM ROW: LOGO + CALL BUTTON */}
  <div className="flex justify-between items-center px-4">
    <Image
      src={TulasLogoMobile}
      alt=""
      className="w-[10vw]"
    />

    <button
      onClick={() => (window.location.href = "tel:+91-8069204028")}
      className="bg-[#3D001B] rounded-full w-14 aspect-square flex justify-center items-center"
    >
      <Image src={phoneCallGif} alt="" className="w-8" />
    </button>
  </div>
</div>


          {/* ===== DESKTOP STRUCTURE (UNCHANGED) ===== */}
          <div className="hidden md:flex justify-between items-center">
            <Image
              src={TulasLogo}
              alt=""
              className="w-[12vw]"
            />

            <div className="flex items-center gap-6">
              <Image src={Years20} alt="" className="w-[7vw]" />
              <div className="h-[60px] w-[1px] bg-white"></div>

              {nba && (
                <>
                  <Image src={NBA} alt="" className="w-[5vw]" />
                  <div className="h-[60px] w-[1px] bg-white"></div>
                </>
              )}

              <Image src={NAAC} alt="" className="w-[10vw]" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 w-full bg-[#007A83] md:hidden pointer-events-auto z-50">
        <div className="flex py-2">
          <a
            href="tel:+91-8069204028"
            className="w-1/2 flex justify-center items-center gap-2 text-white"
          >
            <IoCall /> Call
          </a>
          <div className="w-[1px] bg-white"></div>
          <button
            onClick={handleScrollArrow}
            className="w-1/2 flex justify-center items-center gap-2 text-white"
          >
            <SiGoogleforms /> Enquire
          </button>
        </div>
      </div>

      {/* ================= WHATSAPP FLOAT ================= */}
      <button
        onClick={() =>
          (window.location.href =
            "https://api.whatsapp.com/send/?phone=%2B919456540269")
        }
        className="fixed right-4 bottom-[90px] md:bottom-[2.5vw] md:right-[2.5vw] bg-white shadow-2xl rounded-full w-16 aspect-square flex justify-center items-center z-50 pointer-events-auto"
      >
        <FaWhatsapp className="w-10 h-10 text-[#25D366]" />
      </button>
    </div>
  );
}

export default NavbarLanding;
