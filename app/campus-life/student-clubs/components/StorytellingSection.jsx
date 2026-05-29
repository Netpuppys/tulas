'use client';

const POINTS = [
  {
    title: 'Leadership Beyond Academics',
    desc:  'Student committees provide real-world leadership experiences through event coordination, team management, and decision-making responsibilities.',
  },
  {
    title: 'Creativity & Collaboration',
    desc:  'From stage performances to technical innovations, clubs foster creative expression and collaborative problem-solving in diverse teams.',
  },
  {
    title: 'Communities That Build Confidence',
    desc:  'Through consistent participation and peer support, students develop communication skills, self-assurance, and social connections that last beyond graduation.',
  },
  {
    title: 'Experiences That Shape Personality',
    desc:  'Every event, rehearsal, and collaboration contributes to holistic development — transforming students into well-rounded professionals ready for the world.',
  },
];

export default function StorytellingSection() {
  return (
    <section className="bg-white py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]">
      {/* Header */}
      <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
        <span className="block w-[32px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
        Communities That Matter
      </div>
      <h2
        className="text-[#1B2D5B] mb-5 leading-[1.15]"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800 }}
      >
        Learning Through <em className="not-italic" style={{ color: '#E06B1B' }}>Participation.</em>
      </h2>
      <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a] max-w-[720px] mb-[60px]">
        Student clubs and committees at Tula&apos;s are more than activities — they&apos;re platforms for personality development, leadership opportunities, and experiential growth that build confidence and skills beyond academics.
      </p>

      {/* 2-col grid */}
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[60px] max-[960px]:gap-10 items-center">

        {/* Visual — main image + floating inset */}
        <div className="relative">
          <div
            className="w-full rounded-[20px] overflow-hidden group"
            style={{ height: '500px', boxShadow: '0 20px 60px rgba(27,45,91,.15)' }}
          >
            <img
              src="/campus-life/studentclub/img1.jpg"
              alt="Students collaborating"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          {/* Floating inset — hidden on mobile when grid is 1-col */}
          <div
            className="hidden md:block absolute bottom-[-30px] right-[-30px] w-[250px] h-[180px] rounded-[16px] overflow-hidden"
            style={{ boxShadow: '0 15px 40px rgba(27,45,91,.2)', border: '4px solid #fff' }}
          >
            <img
              src="/campus-life/studentclub/img2.jpg"
              alt="Event planning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Story points */}
        <div className="flex flex-col gap-5 max-[960px]:mt-0">
          {POINTS.map((pt, i) => (
            <div
              key={i}
              className="rounded-[12px] px-7 py-5 border-l-4 transition-all duration-300"
              style={{ background: '#f5f6fa', borderLeftColor: '#E06B1B' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(224,107,27,.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f5f6fa'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div
                className="font-bold text-[1rem] text-[#1B2D5B] mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {pt.title}
              </div>
              <div className="text-[0.92rem] text-[#5a6a8a] leading-[1.65]">{pt.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
