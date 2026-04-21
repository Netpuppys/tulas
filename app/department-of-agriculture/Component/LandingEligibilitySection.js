"use client";

export default function LandingEligibilitySection() {
  return (
    <section className="w-full py-6 bg-white flex justify-center">
      <div className="w-full max-w-6xl px-3">

        {/* Top Heading */}
        <h2 className="text-center text-[clamp(28px,5vw,38px)] font-medium mb-6">
          <span className="text-orange-500 font-extrabold">
            Where Research Meets
          </span>{" "}
          <span className="text-gray-800 font-extrabold">Real-World Impact</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mb-5 md:text-left">
          M.Sc Agronomy at Tulas, Dehradun builds scientific thinking, research capability, and applied knowledge. Students graduate with the ability to improve crop productivity, implement sustainable practices, and contribute to modern agri-tech ecosystems.
        </p>

        {/* Wrapper for Eligibility + CTA */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Program Eligibility */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-center md:text-left text-orange-500 font-bold text-xl md:text-2xl mb-5">
              Program Eligibility
            </h3>

            <h3 className="text-gray-900 md:text-leftfont-medium text-xl md:text-xl my-4">
              M.Sc Agronomy
            </h3>

            <ul className="space-y-2 text-gray-700 text-[15px] md:text-[17px] leading-relaxed list-disc pl-5">
              <li>
                Bachelor’s degree in Agriculture or related field
              </li>
              <li>
                Minimum 50% marks (as per university norms)
              </li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="md:w-1/2 w-full">
            <div className="bg-orange-500 rounded-[28px] px-6 py-8 text-center text-white">

              <h4 className="text-[22px] md:text-4xl font-light leading-snug mb-3">
                Shape the Future of {" "}
                <br />
                <span className="font-bold text-[36px]">Agriculture</span>
                <br />
                Sustain the Planet{" "}
                <br />
                <span className="font-bold text-[36px]">Lead Change</span>
              </h4>

              <button onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
               className="bg-[#f3d1b2] text-gray-900 px-8 py-2 mt-4 rounded-full text-lg font-medium shadow-xl hover:scale-105 transition">
                Begin Your Application
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}