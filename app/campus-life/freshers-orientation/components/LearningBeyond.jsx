'use client';

const OPPS = [
  {
    icon: '🎭',
    title: 'Cultural Clubs',
    desc:  'Express yourself through music, dance, drama, and arts. Join vibrant cultural communities that celebrate creativity.',
  },
  {
    icon: '🏆',
    title: 'Leadership Opportunities',
    desc:  'Take on leadership roles in student councils, event committees, and organizational bodies.',
  },
  {
    icon: '💡',
    title: 'Innovation & Startups',
    desc:  'Join incubation programs, hackathons, and entrepreneurship cells to turn your ideas into reality.',
  },
  {
    icon: '⚽',
    title: 'Sports & Fitness',
    desc:  'Stay active with athletics, intramural sports, fitness programs, and outdoor adventures.',
  },
  {
    icon: '🎤',
    title: 'Public Speaking & Debate',
    desc:  'Develop communication skills through debate societies, public speaking forums, and MUN.',
  },
  {
    icon: '🌍',
    title: 'Social Impact',
    desc:  'Contribute to meaningful causes through community service, sustainability initiatives, and outreach programs.',
  },
];

export default function LearningBeyond() {
  return (
    <>
      {/* CSS for top-border reveal on hover (::before not possible in Tailwind) */}
      <style dangerouslySetInnerHTML={{__html:`.cl-opp-card{position:relative;overflow:hidden}.cl-opp-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:#E06B1B;transform:scaleX(0);transform-origin:left;transition:transform .35s}.cl-opp-card:hover::before{transform:scaleX(1)}`}} />

      <section className="bg-white py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]">

        {/* Two-col header */}
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[60px] max-[960px]:gap-6 items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-[10px] text-[0.75rem] font-bold text-[#E06B1B] uppercase tracking-[.15em] mb-4">
              <span className="block w-[30px] h-[3px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
              Beyond Academics
            </div>
            <h2
              className="text-[#1B2D5B] leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}
            >
              Experiences That<br />
              <em className="not-italic" style={{ color: '#E06B1B' }}>Shape You</em>
            </h2>
          </div>
          <div>
            <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a] max-w-[500px]">
              Orientation introduces you to opportunities that extend far beyond the classroom — clubs, leadership roles, cultural activities, and collaborative experiences.
            </p>
          </div>
        </div>

        {/* Opportunities grid */}
        <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6 items-start">
          {OPPS.map((op, i) => (
            <div
              key={i}
              className="cl-opp-card rounded-[18px] px-7 py-8 transition-all duration-[350ms] hover:bg-white hover:-translate-y-[6px]"
              style={{ background: '#f5f6fa', border: '2px solid #dde2ef' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#E06B1B';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(224,107,27,.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#dde2ef';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="block text-[2.2rem] mb-[18px]">{op.icon}</span>
              <h3 className="font-extrabold text-[1.18rem] text-[#1B2D5B] mb-3">{op.title}</h3>
              <p className="text-[0.92rem] text-[#5a6a8a] leading-[1.75] mb-4">{op.desc}</p>
              {/* <a
                href="#"
                className="inline-flex items-center gap-[6px] font-bold text-[0.85rem] transition-all duration-200 hover:gap-[10px]"
                style={{ color: '#E06B1B' }}
              >
                {op.cta}
              </a> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
