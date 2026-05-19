'use client';

const SAFETY_POINTS = [
  '24×7 Trained Guards (Male/Female)',
  'CCTV Throughout',
  'MBBS Doctor',
  'Standby Ambulance',
  'Anti-Ragging Committee',
  'Female Wardens',
];

export default function SafetyBanner() {
  return (
    <section className="bg-[#f26522] py-[72px] max-[600px]:py-12 px-[7%] max-[600px]:px-[4%] relative overflow-hidden">
      {/* Watermark text */}
      <span
        className="font-montserrat absolute right-[5%] top-1/2 -translate-y-1/2 font-extrabold text-[8rem] text-white/[0.08] tracking-[-0.04em] pointer-events-none whitespace-nowrap select-none max-[960px]:hidden"
        aria-hidden="true"
      >
        SAFETY
      </span>

      <div className="relative z-10 grid grid-cols-[1fr_auto] max-[960px]:grid-cols-1 gap-12 max-[960px]:gap-9 items-center">

        {/* Left */}
        <div>
          <h2
            className="font-montserrat font-extrabold text-white mb-3 max-[600px]:text-[1.7rem]"
            style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)' }}
          >
            Your Safety Is Our<br />First Priority
          </h2>
          <p className="text-[0.97rem] text-white/[0.83] leading-[1.65] max-w-[560px]">
            Tulas maintains one of the most secure campus environments in Uttarakhand.
            From trained security personnel and CCTV surveillance to on-call medical staff — your
            wellbeing is guaranteed, always.
          </p>

          <div className="flex gap-[22px] max-[600px]:gap-3 mt-7 flex-wrap">
            {SAFETY_POINTS.map((pt, i) => (
              <div key={i} className="flex items-center gap-2 text-[0.85rem] text-white font-semibold max-[600px]:w-[calc(50%-6px)] max-[380px]:w-full">
                <div className="w-[22px] h-[22px] bg-white/20 rounded-full flex items-center justify-center text-[0.65rem] flex-shrink-0">
                  ✓
                </div>
                {pt}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 flex-shrink-0 max-[600px]:flex-row max-[600px]:flex-wrap max-[600px]:w-full max-[600px]:gap-[10px]">
          <a
            href="tel:+91-9837983721"
            className="font-montserrat bg-[#111111] hover:bg-[#333] text-white px-[30px] max-[600px]:px-4 py-[14px] max-[600px]:py-[13px] rounded-[10px] font-bold text-[0.88rem] max-[600px]:text-[0.82rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)] text-center flex-1"
          >
            📞 Call Admissions
          </a>
          <a
            href="https://tulas.edu.in/virtual-tour/index.html"
            className="font-montserrat bg-transparent text-white border-2 border-white/55 hover:border-white px-[30px] max-[600px]:px-4 py-[12px] max-[600px]:py-[13px] rounded-[10px] font-semibold text-[0.84rem] max-[600px]:text-[0.82rem] transition-all duration-200 text-center flex-1"
          >
            🏛 Virtual Tour
          </a>
        </div>
      </div>
    </section>
  );
}
