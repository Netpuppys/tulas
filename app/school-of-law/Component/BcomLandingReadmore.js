"use client";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function BcomLandingReadmore() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="max-w-3xl md:max-w-6xl mx-auto px-4 pt-5">
      {/* Heading */}
          <h2 className="text-center text-[clamp(39px,5vw,38px)] font-montserrat font-medium mb-2">
          <span className="text-orange-500 font-bold">BA LL.B (Hons.)</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas, Dehradun</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4 capitalize">
        Build a Career in Law with a Strong Understanding of Society and Governance
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        Recognised as one of the best law college in Dehradun, Uttarakhand, Tulas offers a dynamic environment for graduates who want to build a professional career in law. The BA LL.B (Hons.) program focuses on developing a clear understanding of legal systems along with practical skills required for litigation, corporate law, and other legal roles.
      </p>

      {/* Expandable content */}
      <div
        ref={contentRef}
        style={!isDesktop ? { maxHeight: height } : {}}
        className={`transition-[max-height] duration-700 ease-in-out ${
          isDesktop ? "" : "overflow-hidden"
        }`}
      >
        <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mt-4">
         The BA LL.B (Hons.) program at Tulas Dehradun is designed for students who aspire to build careers in litigation, judiciary, civil services, and public policy. The program combines legal education with subjects such as political science, sociology, and economics, helping students understand how law interacts with society and governance.
          <br/>
          <br/>
         Students study core legal areas such as constitutional law, criminal law, and contract law, along with social and political frameworks that shape legal systems. Through case-based learning, research, and drafting exercises, students develop the ability to analyse legal issues within real-world social and institutional contexts. Practical exposure is a key part of the program. Internships with law firms, corporate legal teams, and organisations provide insight into real-world legal and business environments. This ensures that students graduate with not only legal knowledge, but also the professional skills and confidence required for careers in corporate law and allied fields.
        </p>
      </div>

      {/* Read more button (mobile only) */}
      {!isDesktop && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-6 w-full bg-[#2b2b2b] text-white py-2 flex items-center justify-center gap-2 text-md font-light"
        >
          {open ? "Read less" : "Read more"}
          <IoChevronDown
            className={`transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}