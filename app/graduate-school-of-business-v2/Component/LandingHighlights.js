// import {
//   AcademicCapIcon,
//   BriefcaseIcon,
//   UserGroupIcon,
//   BookOpenIcon,
//   LightBulbIcon,
//   UserIcon,
// } from "@heroicons/react/24/outline";

export default function LandingHighlights() {
  const highlights = [
    {
    //   icon: AcademicCapIcon,
      title: "SPECIALISATION OF CHOICE",
      desc: "Tula’s offers over 6 programs and specialisations across management",
    },
    {
    //   icon: BriefcaseIcon,
      title: "PLACEMENT FOCUSED PROGRAM",
      desc: "100% placement assistance for eligible students, with 750+ recruiters participating in campus drives.",
    },
    {
    //   icon: UserGroupIcon,
      title: "ALUMNI NETWORK",
      desc: "7,000+ strong alumni community spread across sectors and geographies, supporting mentorship and networking.",
    },
    {
    //   icon: BookOpenIcon,
      title: "LIBRARY BANK",
      desc: "52,000+ books, 17,500 e-books, 2,200+ e-journals and digital resources like NPTEL.",
    },
    {
    //   icon: LightBulbIcon,
      title: "INCUBATOR & ENTREPRENEURSHIP",
      desc: "Innovation & Incubation Center supporting research, prototypes and startup thinking.",
    },
    {
    //   icon: UserIcon,
      title: "LEARN FROM INDUSTRY EXPERTS",
      desc: "Industry exposure through guest lectures, workshops, and real-world practice.",
    },
  ];

  return (
    <section className="py-5 bg-white">
            <h3 className="text-center text-[clamp(29px,5.5vw,34px)] font-medium">
        <span className="text-orange-500">Tula’s</span>{" "}
        <span className="text-gray-800 font-light">Highlights</span>
      </h3>
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        {/* <h2 className="text-4xl md:text-5xl font-medium text-[#1a1a1a]">
          TULA’S <br />
          <span className="text-orange-500">HIGHLIGHTS</span>
        </h2> */}

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* <item.icon className="w-7 h-7 text-[#1a1a1a] flex-shrink-0 mt-1" /> */}

              <div>
                <h3 className="font-medium tracking-wide text-[#1a1a1a] text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 font-light text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
