'use client';

const FEATURES = [
  {
    icon:  '🎯',
    title: 'Student-Driven Leadership',
    desc:  'Empowering students to lead initiatives and shape campus culture',
  },
  {
    icon:  '🌟',
    title: 'Community Engagement',
    desc:  'Building connections through inclusive events and activities',
  },
  {
    icon:  '🚀',
    title: 'Event Culture Excellence',
    desc:  'Delivering memorable experiences across cultural, technical, and social domains',
  },
  {
    icon:  '💪',
    title: 'Holistic Development',
    desc:  'Fostering skills, confidence, and character through active participation',
  },
];

export default function VibgyorSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-vibgyor-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:70px;align-items:center;margin-top:50px}@media(max-width:960px){.cl-vibgyor-grid{grid-template-columns:1fr;gap:40px}}`}} />

      <section
        className="relative py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%] overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#f8f9fd 0%,#fff 100%)' }}
      >
        {/* Decorative blurred circle */}
        <div
          className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-[.04] pointer-events-none"
          style={{ background: '#E06B1B', filter: 'blur(80px)' }}
        />

        {/* Header */}
        <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
          <span className="block w-[32px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
          Powered By Students
        </div>
        <h2
          className="text-[#1B2D5B] mb-5 leading-[1.15]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800 }}
        >
          <em className="not-italic" style={{ color: '#E06B1B' }}>VIBGYOR</em> — The Heart of Campus Life
        </h2>
        <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a] max-w-[720px]">
          The student council of Tula&apos;s University, dedicated to creating meaningful, engaging and unforgettable experiences through its diverse clubs and committees.
        </p>

        {/* 1.2fr / 1fr grid */}
        <div className="cl-vibgyor-grid">
          {/* Content side */}
          <div>
            {/* Intro quote card */}
            <div
              className="text-[1.08rem] leading-[1.85] text-[#5a6a8a] mb-[35px] p-[30px] rounded-[16px] border-l-[5px]"
              style={{ background: '#fff', borderLeftColor: '#E06B1B', boxShadow: '0 10px 30px rgba(27,45,91,.08)' }}
            >
              VIBGYOR is the student council of Tula&apos;s University dedicated to creating meaningful, engaging and unforgettable student experiences. Through its diverse clubs and committees, VIBGYOR encourages creativity, leadership, collaboration and skill-building beyond academics.
            </div>

            {/* Feature rows */}
            <div className="flex flex-col gap-4">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-[18px] bg-white rounded-[12px] transition-all duration-300 hover:translate-x-2"
                  style={{ boxShadow: '0 4px 12px rgba(27,45,91,.06)' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(27,45,91,.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(27,45,91,.06)'}
                >
                  <div
                    className="w-[50px] h-[50px] rounded-[10px] flex items-center justify-center text-[1.4rem] flex-shrink-0"
                    style={{ background: '#fdf0e8' }}
                  >
                    {f.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[0.95rem] text-[#1B2D5B] mb-1">{f.title}</div>
                    <div className="text-[0.85rem] text-[#5a6a8a]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div>
            <div
              className="w-full rounded-[20px] overflow-hidden"
              style={{ height: '450px', boxShadow: '0 20px 60px rgba(27,45,91,.15)', border: '8px solid #fff' }}
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600"
                alt="VIBGYOR student council"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
