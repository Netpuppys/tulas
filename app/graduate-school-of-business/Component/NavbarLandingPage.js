import React, { useEffect, useState } from "react";
import logo from "../../../public/Components/Navbar/TulasLogoRed.png";
import logoGreen from "../../../public/Components/Navbar/TulasLogoGreen.png";
import Years19 from "../../../public/graduate-school-of-business/mba/19Years.png";
import Image from "next/image";
import phoneCallGif from "../../../public/Components/Navbar/phone_ringing.gif";
import { FaWhatsapp } from "react-icons/fa";
function NavbarLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 0.5;
      // 60vh in pixels
      const sixtyVH = window.innerHeight * threshold;

      if (window.scrollY > sixtyVH) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button className="fixed z-50 left-0 pt-[8vw] pl-[8vw] md:pt-[2.5vw] md:pl-[2.5vw]">
        {!scrolled && (
          <Image
            src={logoGreen}
            className="w-fit max-w-[40vw] animate-fadeIn md:max-w-[10vw]"
            alt=""
          />
        )}
        {scrolled && (
          <Image
            src={logo}
            className="w-fit max-w-[40vw] animate-fadeIn md:max-w-[10vw]"
            alt=""
          />
        )}
      </button>
      {!scrolled && (
        <div className="fixed z-50 flex items-center justify-center gap-[5%] right-0 pt-[8vw] pr-[8vw] md:pt-[2.5vw] md:pr-[2.5vw]">
          <button
            title="Admission Helpline No. +91-8069204028"
            className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]"
            onClick={() => (window.location.href = "tel:+91-8069204028")}
          >
            <div
              className={`w-16 md:w-[74px] flex items-center justify-center border-2 rounded-[50%] aspect-square border-r-transparent`}
            >
              <div className="w-[40px] h-[40px]">
                <Image src={phoneCallGif} alt="" className="w-full h-full" />
              </div>
            </div>
            <h3
              style={{ fontFamily: "Zilla Slab" }}
              className={`hidden md:block text-left text-[25px] -ml-4 font-semibold transition-color`}
            >
              Contact
            </h3>
          </button>
          <Image
            src={Years19}
            className="hidden md:block w-fit max-w-[10vw]"
            alt=""
          />
        </div>
      )}
      {scrolled && (
        <div className="fixed flex animate-fadeIn items-center justify-center gap-[5%] right-0 z-50 pt-[8vw] pr-[8vw] md:pt-[2.5vw] md:pr-[2.5vw]">
          <button
            title="Admission Helpline No. +91-8069204028"
            className="bg-[#E69706] rounded-full text-3xl shadow-lg w-16 md:w-[74px] aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
            onClick={() => (window.location.href = "tel:+91-8069204028")}
          >
            <div className="w-[40px] h-[40px]">
              <Image src={phoneCallGif} alt="" className="w-full h-full" />
            </div>
          </button>
        </div>
      )}
      <button
        onClick={() =>
          (window.location.href =
            "https://api.whatsapp.com/send/?phone=%2B919258159248&text&type=phone_number&app_absent=0")
        }
        className="fixed bottom-[8vw] flex justify-center items-center right-[8vw] md:bottom-[2.5vw] md:right-[2.5vw] text-[#760135B2] z-50 w-16 md:w-[74px] bg-white aspect-square rounded-full"
      >
        <FaWhatsapp className="w-[40px] h-[40px]" />
      </button>
    </div>
  );
}

export default NavbarLandingPage;
