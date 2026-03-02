import Image from "next/image";

export default function LandingInternshipSection() {
  return (
<section className="bg-white pb-6">
            {/* Heading */}
      <h3 className="text-center text-[clamp(26px,5.5vw,34px)] font-medium">
        <span className="text-orange-500">Internship</span>{" "}
        <span className="text-gray-800 font-light">Offered By Tula’s</span>
      </h3>
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* TEXT */}
      <div className="w-full md:w-1/2 order-1">
        {/* <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-2">
        <span className="text-orange-500 block mb-2">
            INTERNSHIP
        </span>
        OFFERED BY TULA’S
        </h2> */}

        {/* IMAGE (mobile only position) */}
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden mb-6 md:hidden">
          <Image
            src="/landingPage/intershipbanner.png"
            alt="Internship at Tula's"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[#6b7280] leading-relaxed text-base md:text-lg">
          The MBA journey is built around real career momentum. From
          industry-aligned internships to focused placement training,
          students are prepared to step confidently into the corporate
          world. Live projects, hands-on exposure, mock interviews, and
          corporate mentoring help students move from classroom learning
          to boardroom impact.
        </p>
      </div>

      {/* IMAGE (desktop only position) */}
      <div className="hidden md:block relative w-full md:w-1/2 h-[420px] rounded-2xl overflow-hidden order-2">
        <Image
          src="/landingPage/intershipbanner.png"
          alt="Internship at Tula's"
          fill
          className="object-cover"
          priority
        />
      </div>

    </div>
  </div>
</section>

  );
}
