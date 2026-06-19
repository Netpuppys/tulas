'use client';

export default function BtechCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bct::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%)}
        .cl-bct::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px)}
      `}} />

      <section
        className="cl-bct relative overflow-hidden flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)', minHeight: 560 }}
      >
        <div className="relative z-[2] text-center py-[80px] px-[7%] max-w-[1000px]">
          <h2
            className="text-white mb-[26px] leading-[.95] tracking-[.02em]"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 'clamp(3.2rem,7vw,7rem)',
              textShadow: '0 8px 28px rgba(0,0,0,.3)',
            }}
          >
            Design The Future.<br />
            Build The Impossible.
          </h2>

          <p
            className="text-[1.22rem] leading-[1.9] mb-[44px] font-medium"
            style={{ color: 'rgba(255,255,255,.94)' }}
          >
            Future technologies need future engineers. Start your engineering journey at Tulas University.
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
              { label: 'Download Brochure',       href: 'https://tulas.edu.in/btech/' },
              { label: 'Contact Admissions',      href: 'https://tulas.edu.in/contact/' },
              { label: 'Schedule Campus Visit',   href: 'https://tulas.edu.in/virtual-tour/' },
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
