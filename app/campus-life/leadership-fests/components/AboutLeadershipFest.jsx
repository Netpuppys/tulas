'use client';

const PRINCIPLES = [
  {
    title: 'Learning Beyond Classrooms',
    text:  "Leadership isn't just taught — it's experienced through dialogue, debates, and real conversations with influential voices.",
  },
  {
    title: 'Youth Voices. Real Conversations.',
    text:  'Students engage with policymakers, industry leaders, and thought leaders in discussions that shape perspectives and inspire action.',
  },
  {
    title: 'Dialogue, Governance & Growth',
    text:  'From keynote sessions to panel discussions, every moment is designed to build civic awareness and leadership mindset.',
  },
];

export default function AboutLeadershipFest() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:100px;align-items:center;margin-top:60px}@media(max-width:968px){.cl-about-grid{grid-template-columns:1fr;gap:40px}}.cl-about-visual img{transition:transform .8s}.cl-about-visual:hover img{transform:scale(1.06)}`}} />

      <section
        id="about"
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%] relative overflow-hidden"
        style={{ background: '#f8f9fc' }}
      >
        {/* Radial accent */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(223,84,0,.06) 0%,transparent 70%)' }}
        />

        <div className="cl-about-grid relative z-[1]">
          {/* Image */}
          <div
            className="cl-about-visual relative rounded-[20px] overflow-hidden"
            style={{ boxShadow: '0 28px 80px rgba(0,31,76,.16)' }}
          >
            <img
              src="/campus-life/leadershipfest/img19.jpg"
              alt="Leadership Discussion"
              className="w-full object-cover"
              style={{ height: '700px' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top,rgba(0,31,76,.7) 0%,transparent 60%)' }}
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-5" style={{ color: '#DF5400' }}>
              <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Our Vision
            </div>

            <h2
              className="mb-[22px] leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3.2rem,6vw,6.5rem)', color: '#001F4C' }}
            >
              Leadership Through<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Perspectives</em>
            </h2>

            <p className="text-[1.1rem] leading-[1.9] mb-8 max-w-[850px]" style={{ color: '#5a6a8a' }}>
              Leadership Fest at Tulas University is a platform for youth to engage with governance, policy, and intellectual discourse — building awareness, confidence, and future-ready thinking.
            </p>

            {/* Principle cards */}
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                className="bg-white border-l-[5px] rounded-[16px] px-8 py-7 mb-6 transition-all duration-[350ms] hover:translate-x-[10px] cursor-default"
                style={{ borderLeftColor: '#DF5400', boxShadow: '0 4px 18px rgba(0,31,76,.06)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(223,84,0,.18)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,31,76,.06)'}
              >
                <div className="font-extrabold text-[1.25rem] mb-3" style={{ color: '#001F4C' }}>{p.title}</div>
                <div className="text-[1rem] leading-[1.85]" style={{ color: '#5a6a8a' }}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
