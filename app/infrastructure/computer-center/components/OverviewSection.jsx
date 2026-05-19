'use client';

const CHIPS = [
  { icon: '💻', label: '800+ Licensed Desktops' },
  { icon: '🌐', label: '3 Gbps Internet Speed' },
  { icon: '📡', label: '869+ Network Nodes' },
  { icon: '📶', label: '24×7 Campus Wi-Fi' },
  { icon: '🐧', label: 'Windows & Linux Servers' },
  { icon: '🔧', label: 'Software Dev Cell' },
  { icon: '🏗',  label: 'ERP Live Projects' },
  { icon: '🔒', label: 'Secure Campus Network' },
];

export default function OverviewSection() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Image side */}
        <div className="relative rounded-[20px]">
          {/* Orange corner accent */}
          <div className="absolute -top-3 -left-3 w-[100px] h-[100px] border-t-4 border-l-4 border-[#f26522] rounded-[4px] pointer-events-none z-[2] max-[600px]:hidden" />

          <img
            src="/infrastructure/computerScience/world-class-centre.jpg"
            alt="Computer Centre"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block shadow-[0_24px_64px_rgba(0,0,0,0.12)]"
          />

          {/* Badge */}
          <div className="font-montserrat absolute bottom-[-20px] right-[-20px] max-[960px]:bottom-[-16px] max-[960px]:right-0 z-[3] max-[600px]:static max-[600px]:flex max-[600px]:items-center max-[600px]:gap-[14px] max-[600px]:text-left max-[600px]:mt-4 bg-[#111111] text-white rounded-[14px] p-[18px_22px] max-[600px]:p-[14px_18px] shadow-[0_12px_32px_rgba(0,0,0,0.22)] min-w-[140px] max-[600px]:min-w-0 max-[600px]:w-fit text-center">
            <div className="text-[1.9rem] max-[600px]:text-[1.7rem] leading-none text-[#f26522] font-extrabold">500+</div>
            <span className="block text-[0.68rem] max-[600px]:text-[0.67rem] text-white/55 tracking-[0.07em] uppercase mt-1 max-[600px]:mt-0">
              Desktops on<br />Campus
            </span>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            About the Centre
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            World-Class IT<br />
            <em className="text-[#f26522] not-italic">Infrastructure</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            Information Technology is the defining force of this millennium, and Tulas Institute is
            built to lead. With heavy investment in IT infrastructure, the institute has created a
            fully interconnected, E-learning-ready environment where students and faculty can access
            data and knowledge at the click of a button — from classrooms, labs, hostels, and
            everywhere in between.
          </p>
          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] mt-[14px]">
            The system is built on high-end servers and workstations running both Windows and Linux,
            providing seamless interconnection and exchange of information across all departments,
            reflecting the standards of the modern computer industry.
          </p>

          {/* Chips */}
          <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-3 max-[600px]:gap-[10px] mt-8 max-[600px]:mt-6">
            {CHIPS.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-[10px] bg-white border border-[#e8e8e8] hover:border-[#f26522] hover:shadow-[0_4px_16px_rgba(242,101,34,0.12)] hover:-translate-y-0.5 rounded-[10px] px-4 py-3 text-[0.84rem] max-[600px]:text-[0.83rem] text-[#1e1e1e] font-medium transition-all duration-200 cursor-default"
              >
                <span className="text-[1.05rem] flex-shrink-0">{c.icon}</span>
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
