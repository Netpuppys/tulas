'use client';

const FEATURES = [
  {
    icon: '🏗',
    title: 'Live ERP Projects',
    text: "Students build and manage the institute's actual ERP systems, gaining unmatched hands-on exposure to real enterprise software development from day one.",
  },
  {
    icon: '🖥',
    title: 'High-End Servers & Client Machines',
    text: 'The cell is equipped with powerful server-grade hardware and workstations, supporting everything from web development to database management and machine learning projects.',
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Faculty Mentorship',
    text: 'Experienced faculty members actively assist students in completing their projects, providing guidance on architecture, coding best practices, and software deployment.',
  },
];

export default function SoftwareDevCell() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Text side */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Exclusive Facility
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Software<br />
            <em className="text-[#f26522] not-italic">Development Cell</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            Tulas Institute houses an exclusive Software Development Cell equipped with high-end servers,
            client machines, and all necessary software accessories. Experienced faculty guide students
            through real projects — all ERP and software development work for the institute&apos;s
            administration is delegated as live projects to students.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-4 mt-8">
            {FEATURES.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-4 max-[600px]:gap-3 px-5 max-[600px]:px-4 py-[18px] max-[600px]:py-[14px] bg-white border border-[#e8e8e8] hover:border-[#f26522] hover:translate-x-1 rounded-[12px] transition-all duration-200"
              >
                <div className="w-10 h-10 max-[600px]:w-9 max-[600px]:h-9 bg-[#fff3ec] rounded-[10px] flex items-center justify-center text-[1.15rem] max-[600px]:text-[1rem] flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[0.92rem] max-[600px]:text-[0.88rem] text-[#111111] mb-1">{f.title}</div>
                  <div className="text-[0.83rem] max-[600px]:text-[0.8rem] text-[#6b7280] leading-[1.6]">{f.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image side */}
        <div className="relative">
          {/* Orange corner accent bottom-right */}
          <div className="absolute -bottom-3 -right-3 w-[80px] h-[80px] border-b-4 border-r-4 border-[#f26522] rounded-[4px] pointer-events-none max-[600px]:hidden" />

          <img
            src="/infrastructure/computerScience/img5.webp"
            alt="Software Dev Cell"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block shadow-[0_24px_64px_rgba(0,0,0,0.1)]"
          />

          {/* Float badge */}
          <div className="font-montserrat absolute top-5 left-5 max-[600px]:top-[14px] max-[600px]:left-[14px] bg-[#f26522] text-white rounded-[10px] px-[18px] max-[600px]:px-[14px] py-[14px] max-[600px]:py-[10px] font-extrabold shadow-[0_8px_24px_rgba(242,101,34,0.4)] text-center">
            <div className="text-[1.6rem] max-[600px]:text-[1.3rem] leading-none">Live</div>
            <span className="block text-[0.68rem] opacity-88 tracking-[0.06em] uppercase mt-[2px]">ERP Projects</span>
          </div>
        </div>

      </div>
    </section>
  );
}
