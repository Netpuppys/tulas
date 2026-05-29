'use client';

const PHIL_CARDS = [
  { icon: '💪', title: 'Discipline That Builds Character',  desc: 'Structured training that instills self-discipline, punctuality, and resilience.' },
  { icon: '🎯', title: 'Leadership Through Experiences',    desc: 'Real-world opportunities to lead, decide, and take ownership.' },
  { icon: '🌍', title: 'Growth Through Community',          desc: 'Creating meaningful impact beyond campus boundaries.' },
  { icon: '⚡', title: 'Building Leaders With Purpose',     desc: 'Empowering students to become change-makers in society.' },
];

export default function AboutLeadershipService() {
  return (
    <section
      id="about"
      className="py-[96px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]"
      style={{ background: '#f5f6fa' }}
    >
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[60px] max-[960px]:gap-10 items-center">

        {/* Left — text + philosophy cards */}
        <div>
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
            <span className="block w-[24px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
            Our Philosophy
          </div>
          <h2
            className="text-[#1B2D5B] mb-5 leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 800 }}
          >
            Service Beyond Self.<br />
            <em className="not-italic" style={{ color: '#E06B1B' }}>Leadership Through Action.</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#5a6a8a] max-w-[720px] mb-8">
            NCC and NSS at Tula&apos;s isn&apos;t just about participation—it&apos;s about transformation. We cultivate leaders who understand that true growth comes through responsibility, service, and community engagement.
          </p>

          {/* 2×2 Philosophy cards */}
          <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-5">
            {PHIL_CARDS.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-[12px] px-6 py-6 border-l-4 transition-all duration-300 hover:translate-x-2"
                style={{ borderLeftColor: '#E06B1B' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(224,107,27,.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <span className="block text-[2rem] mb-2">{c.icon}</span>
                <h3
                  className="font-bold text-[1.05rem] text-[#1B2D5B] mb-[6px]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-[0.88rem] leading-[1.6] text-[#5a6a8a]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — main image + floating accent */}
        <div className="relative">
          <div
            className="rounded-[16px] overflow-hidden group"
            style={{ boxShadow: '0 20px 60px rgba(27,45,91,.15)' }}
          >
            <img
              src="/campus-life/newncc/img1.jpg"
              alt="NCC training"
              className="w-full object-cover transition-transform duration-[6000ms] group-hover:scale-[1.08]"
              style={{ height: '520px' }}
            />
          </div>
          {/* Floating accent image — hidden on mobile */}
          <div
            className="hidden md:block absolute top-[-30px] right-[-30px] w-[240px] h-[240px] rounded-[12px] overflow-hidden z-[2]"
            style={{ boxShadow: '0 16px 48px rgba(27,45,91,.2)', border: '4px solid #fff' }}
          >
            <img
              src="/campus-life/newncc/img2.jpg"
              alt="NSS volunteering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
