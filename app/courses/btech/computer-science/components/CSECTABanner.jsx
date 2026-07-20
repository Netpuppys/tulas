'use client';

export default function CSECTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cse-cta::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%)}
        .cl-cse-cta::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px)}
      `}} />

      <section
        className="cl-cse-cta relative overflow-hidden flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)', minHeight: 560 }}
      >
        <div className="relative z-[2] text-center py-[80px] px-[7%] max-w-[1000px]">
          <h2
            className="text-white mb-[26px] tracking-[.02em]"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 'clamp(3rem,6.5vw,6.5rem)',
              lineHeight: '.97',
              textShadow: '0 8px 28px rgba(0,0,0,.3)',
            }}
          >
            Code The Future.<br />
            Create The Next Big Innovation.
          </h2>

          <p className="text-[1.2rem] leading-[1.9] mb-[44px] font-medium" style={{ color: 'rgba(255,255,255,.94)' }}>
            Join a Computer Science program designed for the AI era and prepare for high-growth technology careers.
          </p>

          <div className="flex gap-[18px] justify-center flex-wrap">
            <a
              href="https://tulas.edu.in/admissions/"
              className="inline-flex items-center gap-2 px-[38px] py-[17px] rounded-[10px] font-extrabold text-[.96rem] transition-all duration-300 hover:-translate-y-[3px]"
              style={{ background: '#fff', color: '#DF5400', boxShadow: '0 4px 20px rgba(0,0,0,.2)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 38px rgba(0,0,0,.3)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.2)'}
            >
              Apply Now →
            </a>
            {[
              { label: 'Download Brochure',    href: 'https://tulas.edu.in/btech/' },
              { label: 'Schedule Campus Visit', href: 'https://tulas.edu.in/virtual-tour/' },
              { label: 'Contact Admissions',   href: 'https://tulas.edu.in/contact/' },
            ].map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="inline-flex items-center gap-2 px-[38px] py-[17px] rounded-[10px] font-bold text-[.96rem] text-white transition-all duration-300"
                style={{ background: 'transparent', border: '2px solid #fff' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#DF5400'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
