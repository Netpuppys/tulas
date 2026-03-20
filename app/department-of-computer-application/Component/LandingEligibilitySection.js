"use client";

export default function LandingEligibilitySection() {
  return (
    <section className="w-full py-6 bg-white flex justify-center">
      <div className="w-full max-w-6xl px-3">

        {/* Top Heading */}
        <h2 className="text-center text-[clamp(28px,5vw,38px)] font-medium mb-6">
          <span className="text-orange-500 font-extrabold">
            Where Stories
          </span>{" "}
          <span className="text-gray-800 font-extrabold">Become Careers</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mb-5 md:text-left">
          Built for individuals who want to move beyond consuming content to creating, expressing and storytelling. BJMC/BAJMC at Tulas helps students develop creative confidence, communication skills and media awareness, preparing them to work across different media platforms and formats.
        </p>

        {/* Wrapper for Eligibility + CTA */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Program Eligibility */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-center md:text-left text-orange-500 font-bold text-xl md:text-2xl mb-5">
              Program Eligibility
            </h3>
            <ul className="space-y-2 text-gray-700 text-[15px] md:text-[17px] leading-relaxed list-disc pl-5">
              <li>
                10+2 or equivalent examination from a recognised board in any stream (Arts, Commerce or Science).
              </li>
              <li>
                Minimum 50% aggregate marks for general and minimum 45% aggregate marks for reserved categories.
              </li>
              <li>
                Minimum age of 17 years for BAJMC.
              </li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="md:w-1/2 w-full">
            <div className="bg-orange-500 rounded-[28px] px-6 py-8 text-center text-white">

              <h4 className="text-[22px] md:text-2xl font-light leading-snug mb-3">
                Shape Your Career in {" "}
                <br />
                <span className="font-bold text-[36px]">Media</span>
                <br />
                Step Into the Media &{" "}
                <br />
                <span className="font-bold text-[36px]">Communication</span>
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