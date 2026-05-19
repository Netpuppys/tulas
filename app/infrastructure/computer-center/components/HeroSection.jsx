'use client';

const STATS = [
  { val: '757+',   lbl: 'Desktops' },
  { val: '869+',   lbl: 'Network Nodes' },
  { val: '3 Gbps', lbl: 'Internet Speed' },
  { val: '24×7',   lbl: 'Wi-Fi Access' },
  { val: '100%',   lbl: 'Licensed Software' },
];

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes cc-fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cc-anim-1 { animation: cc-fadeUp 0.6s ease both; }
        .cc-anim-2 { animation: cc-fadeUp 0.6s 0.1s ease both; }
        .cc-anim-3 { animation: cc-fadeUp 0.6s 0.2s ease both; }
        .cc-anim-4 { animation: cc-fadeUp 0.6s 0.3s ease both; }
        .cc-anim-5 { animation: cc-fadeUp 0.6s 0.42s ease both; }
      `}</style>

      <section className="relative flex flex-col min-h-screen overflow-hidden pt-[70px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/infrastructure/computerScience/banner.jpg')" }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.18) 100%)' }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        {/* Tech grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-end w-full">
          <div className="w-full px-[7%] max-[600px]:px-[4%] flex flex-col">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[0.78rem] max-[600px]:text-[0.7rem] text-white/55 mb-[22px] max-[600px]:mb-4 font-medium tracking-[0.05em] uppercase">
              <span className="text-[#f26522]">Home</span>
              <span className="opacity-35">/</span>
              <span>Infrastructure</span>
              <span className="opacity-35">/</span>
              <span>Computer Centre</span>
            </div>

            {/* Tag */}
            <div className="cc-anim-1 inline-flex items-center gap-2 bg-[#f26522] text-white rounded-[6px] px-[14px] max-[600px]:px-3 py-[5px] max-[600px]:py-1 font-montserrat text-[0.72rem] max-[600px]:text-[0.67rem] font-bold tracking-[0.12em] uppercase mb-5 max-[600px]:mb-[14px] w-fit">
              💻 IT Infrastructure
            </div>

            {/* Title */}
            <h1
              className="cc-anim-2 font-montserrat font-extrabold leading-[1.05] text-white mb-5 max-[600px]:mb-[14px] max-[380px]:text-[1.75rem]"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
            >
              Computer<br />
              <em className="text-[#f26522] not-italic">Centre</em>
            </h1>

            {/* Description */}
            <p className="cc-anim-3 text-[1.05rem] max-[600px]:text-[0.9rem] leading-[1.75] text-white/78 max-w-[620px] mb-9 max-[600px]:mb-6">
              Tula&apos;s Institute is poised to be the most E-enabled engineering and business school in
              Uttarakhand — with world-class IT infrastructure, 1 Gbps internet, campus-wide networking,
              and an exclusive Software Development Cell built for real-world learning.
            </p>

            {/* Buttons */}
            <div className="cc-anim-4 flex gap-[14px] flex-wrap max-[600px]:flex-col max-[600px]:gap-[10px] mb-[60px] max-[600px]:mb-10">
              <a
                href="tel:+91-9837983721"
                className="font-montserrat inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#e05510] text-white px-8 max-[600px]:px-5 py-[14px] max-[600px]:py-[13px] rounded-[10px] font-bold text-[0.92rem] max-[600px]:text-[0.86rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(242,101,34,0.4)] max-[600px]:w-full"
              >
                📞 Enquire Now
              </a>
              <a
                href="https://tulas.edu.in/virtual-tour/index.html"
                className="font-montserrat inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/40 hover:border-[#f26522] hover:text-[#f26522] px-8 max-[600px]:px-5 py-[14px] max-[600px]:py-[13px] rounded-[10px] font-semibold text-[0.92rem] max-[600px]:text-[0.86rem] tracking-[0.03em] transition-all duration-200 max-[600px]:w-full"
              >
                🏛 Virtual Tour
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar — 5 cols desktop, 3 at 1100px, 2 on mobile */}
        <div className="cc-anim-5 relative z-10 bg-[#1e1e1e] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <div key={i} className="py-[20px] max-[600px]:py-[14px] max-[600px]:px-2 text-center border-r border-white/[0.08] last:border-r-0">
              <span className="font-montserrat block font-extrabold text-[#f26522] text-[1.7rem] max-[600px]:text-[1.35rem] max-[380px]:text-[1.2rem] leading-none">
                {s.val}
              </span>
              <span className="block text-[0.7rem] max-[600px]:text-[0.6rem] text-white/42 tracking-[0.08em] uppercase mt-[5px]">
                {s.lbl}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
