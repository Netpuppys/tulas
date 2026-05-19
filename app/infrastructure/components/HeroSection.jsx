'use client';

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h-anim-1 { animation: fadeUp 0.6s ease both; }
        .h-anim-2 { animation: fadeUp 0.6s 0.1s ease both; }
        .h-anim-3 { animation: fadeUp 0.6s 0.2s ease both; }
        .h-anim-4 { animation: fadeUp 0.6s 0.3s ease both; }
        .h-anim-5 { animation: fadeUp 0.6s 0.45s ease both; }
      `}</style>

      <section className="relative flex flex-col min-h-screen overflow-hidden pt-[70px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/infrastructure/HostelMess/1st-banner-desktop.png')" }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.18) 100%)' }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-end w-full">
          <div className="w-full px-[7%] max-[600px]:px-[4%] flex flex-col">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[0.78rem] max-[600px]:text-[0.7rem] text-white/65 mb-6 max-[600px]:mb-4 font-medium tracking-[0.05em] uppercase">
              <span className="text-[#f26522]">Home</span>
              <span className="opacity-40">/</span>
              <span>Infrastructure</span>
              <span className="opacity-40">/</span>
              <span>Hostel &amp; Mess</span>
            </div>

            {/* Tag pill */}
            <div className="h-anim-1 inline-flex items-center gap-2 bg-[#f26522] text-white rounded-[6px] px-[14px] max-[600px]:px-3 py-[5px] max-[600px]:py-1 font-montserrat text-[0.72rem] max-[600px]:text-[0.67rem] font-bold tracking-[0.12em] uppercase mb-5 max-[600px]:mb-[14px] w-fit">
              🏠 Campus Living
            </div>

            {/* Title */}
            <h1
              className="h-anim-2 font-montserrat font-extrabold leading-[1.05] text-white mb-5 max-[600px]:mb-[14px] max-[380px]:text-[1.75rem]"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
            >
              Hostel &amp; Mess<br />
              <em className="text-[#f26522] not-italic">Facilities</em>
            </h1>

            {/* Description */}
            <p className="h-anim-3 text-[1.05rem] max-[600px]:text-[0.9rem] leading-[1.75] text-white/80 max-w-[580px] mb-9 max-[600px]:mb-6">
              A home away from home. Six well-maintained hostel blocks, nutritious vegetarian mess,
              round-the-clock amenities — everything designed so you can focus on what matters: your growth.
            </p>

            {/* Buttons */}
            <div className="h-anim-4 flex gap-[14px] flex-wrap max-[600px]:flex-col max-[600px]:gap-[10px] mb-[60px] max-[600px]:mb-10">
              <a
                href="tel:+91-9837983721"
                className="font-montserrat inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#e05510] text-white px-8 max-[600px]:px-5 py-[14px] max-[600px]:py-[13px] rounded-[10px] font-bold text-[0.92rem] max-[600px]:text-[0.86rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(242,101,34,0.4)] max-[600px]:w-full"
              >
                📞 Enquire Now
              </a>
              <a
                href="https://tulas.edu.in/virtual-tour/index.html"
                className="font-montserrat inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/45 hover:border-[#f26522] hover:text-[#f26522] px-8 max-[600px]:px-5 py-[14px] max-[600px]:py-[13px] rounded-[10px] font-semibold text-[0.92rem] max-[600px]:text-[0.86rem] tracking-[0.03em] transition-all duration-200 max-[600px]:w-full"
              >
                🏛 Virtual Tour
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="h-anim-5 relative z-10 bg-[#1e1e1e] grid grid-cols-2 md:grid-cols-4">
          {[
            { val: '6',    lbl: 'Hostel Blocks' },
            { val: '24×7', lbl: 'Security & Wi-Fi' },
            { val: '3',    lbl: 'Cuisine Varieties' },
            { val: '100%', lbl: 'Vegetarian Mess' },
          ].map((s, i) => (
            <div key={i} className="py-[22px] max-[600px]:py-[14px] max-[600px]:px-2 text-center border-r border-white/[0.08] last:border-r-0">
              <span className="font-montserrat block font-extrabold text-[#f26522] text-[1.8rem] max-[600px]:text-[1.45rem] max-[380px]:text-[1.3rem] leading-none">
                {s.val}
              </span>
              <span className="block text-[0.74rem] max-[600px]:text-[0.62rem] text-white/50 tracking-[0.08em] uppercase mt-[5px]">
                {s.lbl}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
