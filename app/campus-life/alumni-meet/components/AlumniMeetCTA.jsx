'use client';

export default function AlumniMeetCTA() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-am-cta{position:relative;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);overflow:hidden;min-height:550px;display:flex;align-items:center;justify-content:center}.cl-am-cta::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 35% 50%,rgba(255,255,255,.12) 0%,transparent 55%)}.cl-am-cta::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(50deg,transparent,transparent 35px,rgba(255,255,255,.04) 35px,rgba(255,255,255,.04) 70px)}`}} />

      <section className="cl-am-cta">
        <div className="relative z-[2] text-center py-[70px] px-[7%] max-w-[950px]">
          <h2
            className="text-white mb-7 leading-[.95] tracking-[.02em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3.2rem,7vw,7rem)', textShadow: '0 6px 24px rgba(0,0,0,.25)' }}
          >
            Some Journeys<br />
            Never Truly End
          </h2>

          <p
            className="text-[1.22rem] leading-[1.9] mb-[45px] font-medium"
            style={{ color: 'rgba(255,255,255,.92)' }}
          >
            Stay connected with the Tula&apos;s community. Share your journey, mentor students, and keep the bonds that shaped you alive and strong.
          </p>

          <div className="flex gap-5 justify-center flex-wrap">
            <a
              href="https://tulas.edu.in/tulas-campus-life/"
              className="inline-flex items-center gap-2 px-[38px] py-[17px] rounded-[10px] font-extrabold text-[.96rem] transition-all duration-300 hover:-translate-y-[3px]"
              style={{ background: '#fff', color: '#DF5400', boxShadow: '0 4px 18px rgba(0,0,0,.2)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,.3)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,.2)'}
            >
              Join Alumni Network →
            </a>
            <a
              href="https://tulas.edu.in/virtual-tour/"
              className="inline-flex items-center gap-2 px-[38px] py-[17px] rounded-[10px] font-bold text-[.96rem] text-white transition-all duration-300"
              style={{ background: 'transparent', border: '2px solid #fff' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#DF5400'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
            >
              Visit Campus
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
