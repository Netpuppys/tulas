'use client';

const STATS = [
  { val: '550',    lbl: 'Seating Capacity' },
  { val: 'Dolby',  lbl: 'Surround Sound' },
  { val: '100%',   lbl: 'Central AC' },
  { val: 'Top 10', lbl: 'College in Uttarakhand' },
];

export default function HeroSection() {
  return (
<section className="relative min-h-screen md:min-h-[90vh] flex flex-col items-stretch overflow-hidden pt-[70px] max-[600px]:pt-[60px]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('https://tulas.edu.in/_next/static/media/bannerImg.fa6baefa.webp')" }}
      />

      {/* Gradient overlay */}
       <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.18) 100%)' }}
        />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-[7%] max-[600px]:px-[4%]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[0.78rem] max-[600px]:text-[0.7rem] text-white/55 mb-[22px] max-[600px]:mb-4 font-medium tracking-[0.05em] uppercase">
          <span className="text-[#f26522]">Home</span>
          <span className="opacity-35">/</span>
          <span>Infrastructure</span>
          <span className="opacity-35">/</span>
          <span>Auditorium</span>
        </div>

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[#f26522] text-white rounded-[6px] px-[14px] py-[5px] max-[600px]:py-[4px] max-[600px]:px-[12px] font-montserrat font-bold text-[0.72rem] max-[600px]:text-[0.67rem] tracking-[0.12em] uppercase mb-5 max-[600px]:mb-[14px] w-fit">
          🎭 Events &amp; Performances
        </div>

        {/* Title */}
        <h1
          className="font-montserrat font-extrabold text-white leading-[1.05] mb-5 max-[600px]:mb-[14px] max-[600px]:text-[2rem] max-[380px]:text-[1.75rem]"
          style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
        >
          Tula&apos;s<br />
          <em className="text-[#f26522] not-italic">Auditorium</em>
        </h1>

        {/* Description */}
        <p className="text-[1.05rem] max-[600px]:text-[0.9rem] leading-[1.75] text-white/80 max-w-[620px] mb-9 max-[600px]:mb-6">
          A state-of-the-art multi-purpose concert hall at the heart of the campus — designed with precision, equipped with world-class acoustics, Dolby surround sound, and a 550-seat capacity. One of its kind in Northern India.
        </p>

        {/* Buttons */}
        <div className="flex gap-[14px] max-[600px]:flex-col max-[600px]:gap-[10px] flex-wrap mb-[60px] max-[600px]:mb-10">
          <a
            href="tel:+91-9837983721"
            className="font-montserrat bg-[#f26522] hover:bg-[#e05510] text-white px-8 py-[14px] max-[600px]:py-[13px] max-[600px]:px-5 rounded-[10px] font-bold text-[0.92rem] max-[600px]:text-[0.86rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(242,101,34,0.4)] inline-flex items-center gap-2 max-[600px]:justify-center max-[600px]:w-full"
          >
            📞 Enquire Now
          </a>
          <a
            href="https://tulas.edu.in/virtual-tour/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat bg-transparent text-white border-[1.5px] border-white/40 hover:border-[#f26522] hover:text-[#f26522] px-8 py-[14px] max-[600px]:py-[13px] max-[600px]:px-5 rounded-[10px] font-semibold text-[0.92rem] max-[600px]:text-[0.86rem] tracking-[0.03em] transition-all duration-200 inline-flex items-center gap-2 max-[600px]:justify-center max-[600px]:w-full"
          >
            🏛 Virtual Tour
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 grid grid-cols-4 max-[600px]:grid-cols-2 bg-[#1e1e1e]">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="py-[22px] max-[600px]:py-[14px] max-[600px]:px-2 text-center border-r border-white/[0.08] last:border-r-0 max-[600px]:[&:nth-child(2)]:border-r-0 max-[600px]:[&:nth-child(3)]:border-t max-[600px]:[&:nth-child(3)]:border-t-white/[0.08] max-[600px]:[&:nth-child(4)]:border-t max-[600px]:[&:nth-child(4)]:border-t-white/[0.08]"
          >
            <span className="font-montserrat font-extrabold text-[#f26522] text-[1.7rem] max-[600px]:text-[1.35rem] max-[380px]:text-[1.2rem] block leading-none">{s.val}</span>
            <span className="text-[0.7rem] max-[600px]:text-[0.6rem] text-white/[0.42] tracking-[0.08em] uppercase mt-[5px] block">{s.lbl}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
