'use client';

const STATEMENTS = [
  {
    title: 'Connections That Continue Beyond Campus',
    text:  "Alumni remain an integral part of the Tula's family, contributing to campus culture, mentoring students, and building networks that span industries and continents.",
  },
  {
    title: 'Memories That Grow Stronger With Time',
    text:  'Every reunion brings back the laughter, friendships, and moments that defined those formative years — proving that some bonds truly never graduate.',
  },
  {
    title: "Journeys Connected Through Tula's",
    text:  "From classrooms to boardrooms, from startups to leadership roles, Tula's alumni carry the university's values into every journey they embark upon.",
  },
];

export default function AboutAlumniCommunity() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-aac-grid{display:grid;grid-template-columns:1fr 1fr;gap:90px;align-items:center;margin-top:50px}@media(max-width:968px){.cl-aac-grid{grid-template-columns:1fr;gap:40px}}.cl-aac-visual img{transition:transform .7s,filter .4s;filter:sepia(0.08)}.cl-aac-visual:hover img{transform:scale(1.06);filter:sepia(0)}`}} />

      <section
        id="about"
        className="py-[100px] px-[7%] max-[640px]:py-[65px] max-[640px]:px-[5%] relative overflow-hidden"
        style={{ background: '#FFF8F0' }}
      >
        {/* Radial accent */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(223,84,0,.08) 0%,transparent 70%)' }}
        />

        <div className="cl-aac-grid relative z-[1]">
          {/* Image */}
          <div
            className="cl-aac-visual relative rounded-[20px] overflow-hidden"
            style={{ boxShadow: '0 24px 70px rgba(0,31,76,.14)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85"
              alt="Alumni Community"
              className="w-full object-cover"
              style={{ height: '650px' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top,rgba(0,31,76,.65) 0%,transparent 55%)' }}
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.16em] mb-[18px]" style={{ color: '#DF5400' }}>
              <span className="block w-[32px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Lifelong Community
            </div>

            <h2
              className="mb-5 leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,5.5vw,6rem)', color: '#001F4C' }}
            >
              A Network Built On<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Shared Experiences</em>
            </h2>

            <p className="text-[1.08rem] leading-[1.85] mb-8 max-w-[800px]" style={{ color: '#5a6a8a' }}>
              The Tula&apos;s alumni community is a lifelong network of professionals, mentors, and friends who share the bond of experiences, growth, and memories that shaped their journeys.
            </p>

            {STATEMENTS.map((s, i) => (
              <div
                key={i}
                className="bg-white border-l-[5px] rounded-[14px] px-[30px] py-[26px] mb-[22px] transition-all duration-[350ms] hover:translate-x-[10px] cursor-default"
                style={{ borderLeftColor: '#DF5400', boxShadow: '0 4px 16px rgba(0,31,76,.06)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(223,84,0,.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,31,76,.06)'}
              >
                <div className="font-extrabold text-[1.2rem] mb-[10px]" style={{ color: '#001F4C' }}>{s.title}</div>
                <div className="text-[.98rem] leading-[1.8]" style={{ color: '#5a6a8a' }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
