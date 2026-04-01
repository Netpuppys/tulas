"use client";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function HomeEligibilitySection() {
  return (
    <section className="w-full mt-12 py-6 bg-white flex justify-center">
      <div className="w-full max-w-6xl px-3">

        {/* Wrapper */}
        <div className="flex flex-col md:flex-row gap-8 md:items-stretch">

          {/* LEFT SECTION */}
          <div className="md:w-1/2 w-full flex">
            <div className="h-full flex flex-col">

              {/* Heading */}
              <h2 className="text-center text-[clamp(28px,5vw,38px)] font-medium mb-2">
                <span className="text-orange-500 font-extrabold">
                  Where Future-Ready
                </span>{" "}
                <span className="text-gray-800 font-extrabold">
                  Careers Begin
                </span>
              </h2>

              {/* Description */}
              <p className="text-black text-[15px] md:text-[17px] leading-relaxed mb-5 md:text-left">
                At Tulas, a future-focused curriculum blends industry relevance, AI-driven learning, and innovation-led thinking, helping students build the skills, confidence, and clarity to lead, adapt, and succeed in a rapidly evolving world. Join Tulas if you are ready to move beyond learning into real-world impact.
              </p>

              {/* Check Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                
                <div className="flex items-center gap-3 text-lg font-medium text-black">
                  <IoCheckmarkSharp className="text-2xl text-orange-500" />
                  <span className="text-orange-500 font-bold">750+</span> Global Recruiters
                </div>

                <div className="flex items-center gap-3 text-lg font-medium text-black">
                  <IoCheckmarkSharp className="text-2xl text-orange-500" />
                  <span className="text-orange-500 font-bold">AI</span> Native Specialisations
                </div>

                <div className="flex items-center gap-3 text-lg font-medium text-black">
                  <IoCheckmarkSharp className="text-2xl text-orange-500" />
                  <span className="text-orange-500 font-bold">100%</span> Paid Internships
                </div>

                <div className="flex items-center gap-3 text-lg font-medium text-black">
                  <IoCheckmarkSharp className="text-2xl text-orange-500" />
                  <span className="text-orange-500 font-bold">100%</span> Placement Support
                </div>

              </div>

            </div>
          </div>

          {/* CTA SECTION */}
<div className="md:w-1/2 w-full flex">
  <div className="bg-orange-500 rounded-[28px] px-6 py-5 text-center text-white w-full flex flex-col justify-center">

    <h4 className="text-[18px] md:text-3xl font-light leading-relaxed space-y-3">
      <div>Shape Your Future</div>

      <div className="font-bold text-[46px]">Career</div>

      <div>Step Into New</div>

      <div className="font-bold text-[46px]">Opportunities</div>
    </h4>

    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="bg-[#f3d1b2] text-gray-900 px-2 py-2 mt-6 rounded-full text-lg font-medium shadow-xl hover:scale-105 transition"
    >
      Begin Your Application
    </button>

  </div>
  
</div>

        </div>

      </div>
    </section>
  );
}