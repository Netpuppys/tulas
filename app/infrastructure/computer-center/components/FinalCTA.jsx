'use client';

export default function FinalCTA() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[600px]:py-16 px-[7%] max-[600px]:px-[4%] text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-[#fff3ec] -top-[140px] -left-[80px] pointer-events-none" />
      <div className="absolute w-[220px] h-[220px] rounded-full bg-[#fff3ec] -bottom-[100px] -right-[60px] pointer-events-none" />

      {/* Tag */}
      <div className="relative z-10 inline-flex items-center gap-2 bg-[#fff3ec] border border-[rgba(242,101,34,0.25)] rounded-full px-[18px] py-[6px] text-[0.75rem] font-bold text-[#f26522] tracking-[0.1em] uppercase mb-[22px]">
        🎓 Admissions 2026 Open
      </div>

      {/* Title */}
      <h2
        className="relative z-10 font-montserrat font-extrabold text-[#111111] mb-[14px] max-[600px]:text-[1.7rem]"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
      >
        Be a Part of the<br />
        <em className="text-[#f26522] not-italic">Tulas Family</em>
      </h2>

      {/* Description */}
      <p className="relative z-10 text-[1rem] max-[600px]:text-[0.92rem] text-[#6b7280] max-w-[500px] mx-auto mb-[38px] leading-[1.7]">
        Join 7000+ alumni who built their careers starting right here in Tulas&apos; state-of-the-art
        Computer Centre. Applications for 2026 are open now.
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex gap-[14px] justify-center flex-wrap max-[600px]:flex-col max-[600px]:gap-[10px] max-[600px]:items-stretch">
        <a
          href="tel:+91-9837983721"
          className="font-montserrat inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333] text-white px-9 py-[15px] max-[600px]:py-[14px] max-[600px]:px-6 rounded-[10px] font-bold text-[0.95rem] max-[600px]:text-[0.88rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
        >
          Apply Today →
        </a>
        <a
          href="mailto:info@tulas.edu.in"
          className="font-montserrat inline-flex items-center justify-center gap-2 bg-transparent text-[#f26522] border-2 border-[#f26522] hover:bg-[#f26522] hover:text-white px-9 py-[15px] max-[600px]:py-[14px] max-[600px]:px-6 rounded-[10px] font-bold text-[0.95rem] max-[600px]:text-[0.88rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5"
        >
          ✉ Email Us
        </a>
      </div>
    </section>
  );
}
