'use client';

const CARDS = [
  {
    img:   '/campus-life/leadershipfest/img18.jpg',
    title: 'Creating Leaders Through Experiences',
    text:  "Leadership isn't a title — it's a mindset shaped through participation, dialogue, and real-world exposure to governance and policy.",
  },
  {
    img:   '/campus-life/leadershipfest/img23.jpg',
    title: 'Perspectives That Shape The Future',
    text:  'Exposure to diverse viewpoints, policy debates, and thought leadership builds well-rounded, future-ready graduates.',
  },
  {
    img:   '/campus-life/leadershipfest/img20.jpg',
    title: 'Leadership Through Participation',
    text:  'Every student has a voice at Tulas — whether in debates, committees, or leadership forums, participation drives growth.',
  },
  {
    img:   '/campus-life/leadershipfest/img27.jpg',
    title: 'Awareness-Driven Learning',
    text:  'From governance to economics, sustainability to technology — students engage with the issues that define our times.',
  },
];

export default function LeadershipCultureSection() {
  return (
    <section
      className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]"
      style={{ background: '#f8f9fc' }}
    >
      {/* Header */}
      <div className="text-center max-w-[900px] mx-auto mb-[70px]">
        <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-5" style={{ color: '#DF5400' }}>
          <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
          Campus Impact
        </div>
        <h2
          className="mb-[22px] leading-[.95] tracking-[.01em]"
          style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3.2rem,6vw,6.5rem)', color: '#001F4C' }}
        >
          A Campus Culture<br />
          <em className="not-italic" style={{ color: '#DF5400' }}>Built Around Ideas</em>
        </h2>
        <p className="text-[1.1rem] leading-[1.9]" style={{ color: '#5a6a8a' }}>
          Leadership events shape Tulas campus culture — creating an environment where students think critically, speak confidently, and engage meaningfully with the world.
        </p>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 max-[968px]:grid-cols-1 gap-8">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] overflow-hidden transition-all duration-[400ms] hover:-translate-y-2"
            style={{ boxShadow: '0 12px 36px rgba(0,31,76,.1)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 56px rgba(223,84,0,.18)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,31,76,.1)'}
          >
            <div className="h-[280px] overflow-hidden relative">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-[700ms]"
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div className="p-9">
              <h3 className="font-extrabold text-[1.35rem] mb-4" style={{ color: '#001F4C' }}>{c.title}</h3>
              <p className="text-[1rem] leading-[1.85]" style={{ color: '#5a6a8a' }}>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
