"use client";

export default function LandingEligibilitySection() {
  return (
    <section className="w-full py-6 bg-white flex justify-center">
      <div className="w-full max-w-6xl px-3">

        {/* Top Heading */}
        <h2 className="text-center text-[clamp(28px,5vw,38px)] font-medium mb-6">
          <span className="text-orange-500 font-extrabold">
            Where Leaders
          </span>{" "}
          <span className="text-gray-800 font-extrabold">Create Impact</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mb-5 md:text-left">
          Built for individuals who aim to move beyond participation and into leadership. B.Tech at Tulas develops strategic thinking, analytical clarity and executive confidence preparing graduates to influence organisations, not just work within them.
        </p>

        {/* Wrapper for Eligibility + CTA */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Program Eligibility */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-center md:text-left text-orange-500 font-bold text-xl md:text-2xl mb-5">
              Program Eligibility
            </h3>

            <h3 className="text-gray-900 md:text-leftfont-medium text-xl md:text-xl my-4">
              B. Tech (4 Years)
            </h3>

            <ul className="space-y-2 text-gray-700 text-[15px] md:text-[17px] leading-relaxed list-disc pl-5">
              <li>
                Passed 10+2 with Physics and Mathematics as compulsory subjects
              </li>
              <li>
                Minimum 45% marks in the above subjects ( 40% for reserved category candidates)
              </li>
            </ul>

            <h3 className="text-gray-900 md:text-leftfont-medium text-xl md:text-xl my-4">
              B. Tech (Lateral Entry-Second Year)
            </h3>

            <ul className="space-y-2 text-gray-700 text-[15px] md:text-[17px] leading-relaxed list-disc pl-5">
              <li>
                Passed Diploma in Engineering & Technology in any branch with at least 45% marks (40% for reserved category candidates).
              </li>
              <li>
                Passed B.Sc. Degree from a UGC-recognized university with 45% marks (40% for reserved category candidates) and Mathematics in 10+2.
              </li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="md:w-1/2 w-full">
            <div className="bg-orange-500 rounded-[28px] px-6 py-8 text-center text-white">

              <h4 className="text-[22px] md:text-4xl font-light leading-snug mb-3">
                Design the Future of {" "}
                <br />
                <span className="font-bold text-[36px]">Technology</span>
                <br />
                Step Into the World of{" "}
                <br />
                <span className="font-bold text-[36px]">Innovation</span>
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