"use client";
import { useState } from "react";
import Image from "next/image";

const programsData = {
  Undergraduate: {
    "B.Tech": [
      {
        title: "Civil Engineering",
        description: "Learn to design and build infrastructure that shapes everyday life",
        image: "/programs/civil.jpg",
        eligibility: "Passed 10+2 with at least 45% marks in PCM",
        duration: "4 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
      {
        title: "Computer Science",
        description: "Create software, apps, and systems that solve real-world problems today",
        image: "/programs/cs.jpg",
        eligibility: "Passed 10+2 with at least 45% marks in PCM",
        duration: "4 Years",
        intake: "120 Seats",
        affiliation: "UTU",
      },
      {
        title: "Data Science",
        description: "Learn to analyze data and uncover insights that drive decisions",
        image: "/programs/ds.jpg",
        eligibility: "Passed 10+2 with at least 45% marks in PCM",
        duration: "4 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
      {
        title: "Cyber Security",
        description: "Learn to protect systems, networks, and data from cyber threats",
        image: "/programs/cyber.jpg",
        eligibility: "Passed 10+2 with at least 45% marks in PCM",
        duration: "4 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
      {
        title: "Mechanical Engineering",
        description: "Build innovative machines and lead complex engineering problems",
        image: "/programs/mech.jpg",
        eligibility: "Passed 10+2 with at least 45% marks in PCM",
        duration: "4 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
      {
        title: "Electronics & Communication",
        description: "Design circuits, systems and cutting-edge communication technology",
        image: "/programs/ece.jpg",
        eligibility: "Passed 10+2 with at least 45% marks in PCM",
        duration: "4 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
    BBA: [
      {
        title: "General Management",
        description: "Core business management principles for future leaders",
        image: "/programs/bba.jpg",
        eligibility: "Passed 10+2 with at least 45% marks",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
      {
        title: "Finance",
        description: "Deep dive into financial markets and corporate finance",
        image: "/programs/finance.jpg",
        eligibility: "Passed 10+2 with at least 45% marks",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
    BJMC: [
      {
        title: "Journalism & Mass Communication",
        description: "Report stories that shape public discourse across all media platforms",
        image: "/programs/bjmc.jpg",
        eligibility: "Passed 10+2 with at least 45% marks",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
    BCA: [
      {
        title: "Computer Applications",
        description: "Build applications and master software development fundamentals",
        image: "/programs/bca.jpg",
        eligibility: "Passed 10+2 with at least 45% marks in Mathematics",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
    BComm: [
      {
        title: "Bachelor of Commerce",
        description: "Understand trade, economics and business fundamentals",
        image: "/programs/bcom.jpg",
        eligibility: "Passed 10+2 with at least 45% marks",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
    "BCom Hons.": [
      {
        title: "Commerce Honours",
        description: "Advanced commerce with research and deep analytical skills",
        image: "/programs/bcom-hons.jpg",
        eligibility: "Passed 10+2 with Commerce & at least 50% marks",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
    "BSc Agriculture": [
      {
        title: "Agriculture Science",
        description: "Modern agricultural techniques, agri-business and rural development",
        image: "/programs/agri.jpg",
        eligibility: "Passed 10+2 with Biology/Agriculture & 45% marks",
        duration: "4 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
    "B Pharma": [
      {
        title: "Bachelor of Pharmacy",
        description: "Pharmaceutical sciences, drug discovery and patient care",
        image: "/programs/pharma.jpg",
        eligibility: "Passed 10+2 with PCB/PCM & 45% marks",
        duration: "4 Years",
        intake: "60 Seats",
        affiliation: "PCI / UTU",
      },
    ],
    "BA (Hons.)": [
      {
        title: "Bachelor of Arts Honours",
        description: "In-depth study in humanities, social sciences and liberal arts",
        image: "/programs/ba.jpg",
        eligibility: "Passed 10+2 with at least 45% marks",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UTU",
      },
    ],
  },
  "Post Graduate": {
    "M.Tech": [
      {
        title: "Computer Science & Engineering",
        description: "Advanced computing concepts and research-driven engineering",
        image: "/programs/mtech-cs.jpg",
        eligibility: "B.Tech/BE in relevant discipline with 55% marks",
        duration: "2 Years",
        intake: "18 Seats",
        affiliation: "UTU",
      },
      {
        title: "Mechanical Engineering",
        description: "Advanced thermal, manufacturing and design engineering",
        image: "/programs/mtech-me.jpg",
        eligibility: "B.Tech/BE in ME or related field with 55% marks",
        duration: "2 Years",
        intake: "18 Seats",
        affiliation: "UTU",
      },
    ],
    MBA: [
      {
        title: "Business Administration",
        description: "Industry-oriented MBA with specializations across management domains",
        image: "/programs/mba.jpg",
        eligibility: "Graduation in any discipline with 50% marks",
        duration: "2 Years",
        intake: "120 Seats",
        affiliation: "UTU",
      },
    ],
    MCA: [
      {
        title: "Master of Computer Applications",
        description: "Advanced software development, AI and system design",
        image: "/programs/mca.jpg",
        eligibility: "Graduation with Mathematics & 50% marks",
        duration: "2 Years",
        intake: "30 Seats",
        affiliation: "UTU",
      },
    ],
    "M Pharma": [
      {
        title: "Master of Pharmacy",
        description: "Advanced pharmaceutical research, drug design and clinical practice",
        image: "/programs/mpharma.jpg",
        eligibility: "B.Pharma with 55% marks",
        duration: "2 Years",
        intake: "15 Seats",
        affiliation: "PCI / UTU",
      },
    ],
  },
  Diploma: {
    "Diploma Engg.": [
      {
        title: "Diploma in Engineering",
        description: "Hands-on technical education for direct industry readiness",
        image: "/programs/diploma-engg.jpg",
        eligibility: "Passed Class 10 with at least 35% marks",
        duration: "3 Years",
        intake: "60 Seats",
        affiliation: "UBTER",
      },
    ],
    "Diploma Pharma": [
      {
        title: "Diploma in Pharmacy",
        description: "Pharmaceutical practice, dispensing and pharmacy operations",
        image: "/programs/diploma-pharma.jpg",
        eligibility: "Passed 10+2 with PCB/PCM & 45% marks",
        duration: "2 Years",
        intake: "60 Seats",
        affiliation: "PCI",
      },
    ],
  },
};

// Icons for card details
const BookIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BadgeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

export default function ProgramsSection() {
  const [activeLevel, setActiveLevel] = useState("Undergraduate");
  const [activeStream, setActiveStream] = useState("B.Tech");

  const levels = Object.keys(programsData);
  const streams = Object.keys(programsData[activeLevel] || {});
  const cards = programsData[activeLevel]?.[activeStream] || [];

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setActiveStream(Object.keys(programsData[level])[0]);
  };

  return (
    <section className="w-full py-16 px-6" style={{ backgroundColor: "#fdf6ee" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-orange-500">Programs</span>{" "}
          <span className="text-gray-900">Offered</span>
        </h2>

        {/* Level Tabs */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => handleLevelChange(level)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeLevel === level
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-orange-400"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Stream Pills - horizontally scrollable */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-3 scrollbar-hide">
          {streams.map((stream) => (
            <button
              key={stream}
              onClick={() => setActiveStream(stream)}
              className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap flex-shrink-0 transition-all border-2 ${
                activeStream === stream
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-orange-500 border-orange-400 hover:bg-orange-50"
              }`}
            >
              {stream}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((program, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
              {/* Image */}
              <div className="relative h-44 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">🎓</div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                {/* Title & description */}
                <h4 className="text-orange-500 font-bold text-base mb-1">{program.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{program.description}</p>

                {/* Dynamic details */}
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="text-orange-400 mt-0.5"><BookIcon /></span>
                    <div>
                      <div className="font-bold uppercase tracking-wide text-gray-500">Eligibility</div>
                      <div className="text-gray-700">{program.eligibility}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="text-orange-400 mt-0.5"><ClockIcon /></span>
                    <div>
                      <div className="font-bold uppercase tracking-wide text-gray-500">Duration</div>
                      <div className="text-gray-700">{program.duration}</div>
                    </div>
                  </div>

                  {program.intake && (
                    <div className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-orange-400 mt-0.5"><UsersIcon /></span>
                      <div>
                        <div className="font-bold uppercase tracking-wide text-gray-500">Intake</div>
                        <div className="text-gray-700">{program.intake}</div>
                      </div>
                    </div>
                  )}

                  {program.affiliation && (
                    <div className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-orange-400 mt-0.5"><BadgeIcon /></span>
                      <div>
                        <div className="font-bold uppercase tracking-wide text-gray-500">Affiliation</div>
                        <div className="text-gray-700">{program.affiliation}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <button className="w-full border-2 border-orange-400 text-orange-500 font-semibold text-sm py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2">
                  Explore Programme
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
