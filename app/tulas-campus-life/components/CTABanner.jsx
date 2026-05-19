'use client';

export default function CTABanner() {
  return (
    <>
    <style dangerouslySetInnerHTML={{__html:`.cl-cta-grid{display:grid;grid-template-columns:1fr auto;gap:44px;align-items:center;position:relative;z-index:10}@media(max-width:960px){.cl-cta-grid{grid-template-columns:1fr;gap:24px}}`}} />
    <section
      className="py-[70px] max-[960px]:py-12 px-[7%] max-[960px]:px-[5%] relative overflow-hidden"
      style={{ background: '#f26522' }}
    >
      {/* Watermark — hidden on tablet */}
      <span
        className="absolute right-[5%] top-1/2 -translate-y-1/2 select-none pointer-events-none max-[960px]:hidden"
        style={{
          fontSize: '11rem',
          color: 'rgba(255,255,255,.08)',
          letterSpacing: '-.04em',
          whiteSpace: 'nowrap',
        }}
      >
        TULAS
      </span>

      <div className="cl-cta-grid">
        {/* Left */}
        <div>
          <h2
            className="text-white text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] mb-3"
          >
            Come For the Degree.<br />
            Stay For the Experiences.
          </h2>
          <p className="text-[0.97rem] text-white/82 max-w-[520px] leading-[1.65]">
            Over 7,000 alumni started their story the same way — by choosing Tulas. Admissions for 2026 are open. Your campus life begins now.
          </p>
          <div className="flex gap-[18px] mt-5 flex-wrap">
            {['✓ 1,000+ Events', '✓ 50+ Celebrity Visits', '✓ 11 Student Clubs', '✓ NAAC A+ Campus'].map((pt, i) => (
              <div key={i} className="flex items-center gap-[7px] text-[0.83rem] text-white font-semibold">
                <div
                  className="w-[19px] h-[19px] rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,.22)' }}
                >
                  ✓
                </div>
                {pt.replace('✓ ', '')}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-[11px] flex-shrink-0 max-[960px]:flex-row max-[600px]:flex-col">
          <a
            href="tel:+91-9837983721"
            className="inline-flex items-center justify-center gap-[7px] px-7 py-[13px] rounded-[10px] font-bold text-[0.88rem] text-white bg-[#111111] transition-all duration-200 hover:bg-[#333] hover:-translate-y-0.5"
          >
            📞 Call Admissions
          </a>
          <a
            href="mailto:info@tulas.edu.in"
            className="inline-flex items-center justify-center gap-[7px] px-7 py-[11px] rounded-[10px] font-semibold text-[0.84rem] text-white transition-all duration-200 hover:border-white"
            style={{
              background: 'transparent',
              border: '2px solid rgba(255,255,255,.45)',
            }}
          >
            ✉ Email Us
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
