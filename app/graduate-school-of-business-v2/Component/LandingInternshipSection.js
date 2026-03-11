import Image from "next/image";

export default function LandingInternshipSection() {
  return (

    <>
<section className="bg-white pb-6">
            {/* Heading */}
      <h3 className="text-center text-[clamp(26px,5.5vw,34px)] font-medium">
        <span className="text-orange-500">Internship</span>{" "}
        <span className="text-gray-800 font-light">Offered By Tula’s</span>
      </h3>
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* TEXT */}
      <div className="w-full order-1">
        {/* <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-2">
        <span className="text-orange-500 block mb-2">
            INTERNSHIP
        </span>
        OFFERED BY TULA’S
        </h2> */}

        {/* IMAGE (mobile only position) */}
        <div className="relative w-full h-[260px] md:h-[560px] rounded-2xl overflow-hidden mb-6">
          <Image
            src="/landingPage/intershipbanner.png"
            alt="Internship at Tula's"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[#6b7280] leading-relaxed text-base md:text-lg">
          The Training and Placement Cell at Tula’s supports students in preparing for real corporate opportunities through structured training, internship support and campus recruitment initiatives. With resume building, aptitude preparation, mock interviews and regular corporate interactions, students gain the skills, confidence and industry exposure needed to begin their MBA careers.
        </p>
        <br/>
        <p className="text-[#6b7280] leading-relaxed text-base md:text-lg">
          Complementing this is TCCI (Tula’s Career Catalyst Initiative) - a Professional Capability Acceleration Framework designed to bridge the gap between academic learning and real workplace expectations through diagnostic assessments, targeted development and real-world simulations. It helps students graduate with practical capabilities and the readiness to contribute effectively from day one.
        </p>
      </div>

      {/* IMAGE (desktop only position) */}
      {/* <div className="hidden md:block relative w-full md:w-1/2 h-[420px] rounded-2xl overflow-hidden order-2">
        <Image
          src="/landingPage/intershipbanner.png"
          alt="Internship at Tula's"
          fill
          className="object-cover"
          priority
        />
      </div> */}

    </div>
  </div>
</section>

<section className="w-full py-14">
      <div className="max-w-[1200px] mx-auto px-12 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16">

          {/* Item 1 */}
          <div className="flex items-center gap-6">
            <span className="text-[70px] md:text-[90px] text-orange-500 leading-none">
              20
            </span>
            <p className="text-gray-700 text-lg md:text-2xl leading-snug font-medium max-w-[280px]">
              <span className="font-bold">Years</span> of Academic Excellence
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-6">
            <span className="text-[70px] md:text-[90px] text-orange-500 leading-none">
              03
            </span>
            <p className="text-gray-700 text-lg md:text-2xl leading-snug font-medium max-w-[280px]">
              <span className="font-bold">250+ Global</span> Recruiter Network
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-6">
            <span className="text-[70px] md:text-[90px] text-orange-500 leading-none">
              02
            </span>
            <p className="text-gray-700 text-lg md:text-2xl leading-snug font-medium max-w-[280px]">
              <span className="font-bold">100+</span> Corporate Interactions & Projects
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-6">
            <span className="text-[70px] md:text-[90px] text-orange-500 leading-none">
              04
            </span>
            <p className="text-gray-700 text-lg md:text-2xl leading-snug font-medium max-w-[280px]">
              <span className="font-bold">5000+ Successful</span> Alumni Stories
            </p>
          </div>

        </div>

      </div>
    </section>
</>
  );
}
