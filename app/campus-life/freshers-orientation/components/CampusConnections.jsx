'use client';

const CARDS = [
  { icon: '🤝', title: 'Peer Connections',   count: '500+',  sub: 'New friendships formed'  },
  { icon: '👥', title: 'Group Activities',   count: '25+',   sub: 'Interactive sessions'     },
  { icon: '💬', title: 'Mentor Support',     count: '100%',  sub: 'Students paired'          },
  { icon: '🌟', title: 'Community Events',   count: '15+',   sub: 'Welcome events'           },
];

export default function CampusConnections() {
  return (
    <section
      className="relative py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%] overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#1B2D5B 0%,#0d2044 100%)' }}
    >
      {/* Radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%,rgba(224,107,27,.15) 0%,transparent 50%)' }}
      />

      <div className="relative z-[2]">
        {/* Header — centred */}
        <div className="text-center max-w-[800px] mx-auto mb-[60px]">
          <div className="inline-flex items-center gap-[10px] text-[0.75rem] font-bold text-[#E06B1B] uppercase tracking-[.15em] mb-4">
            <span className="block w-[30px] h-[3px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
            Building Bonds
          </div>
          <h2
            className="text-white mb-5 leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}
          >
            Where Friendships<br />
            <em className="not-italic" style={{ color: '#E06B1B' }}>Begin</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.8] max-w-[650px] mx-auto" style={{ color: 'rgba(255,255,255,.65)' }}>
            The connections you make during orientation become the relationships that define your university experience. At Tula&apos;s, every student finds their community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 max-[1200px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5 mt-12">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className="rounded-[16px] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-[6px] cursor-default"
              style={{
                background: 'rgba(255,255,255,.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,.12)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,.12)';
                e.currentTarget.style.borderColor = '#E06B1B';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)';
              }}
            >
              <div className="text-[2.5rem] mb-4" style={{ filter: 'drop-shadow(0 4px 8px rgba(224,107,27,.4))' }}>
                {c.icon}
              </div>
              <h3 className="font-extrabold text-[1.05rem] text-white mb-2">{c.title}</h3>
              <span
                className="block text-[1.8rem] leading-none mt-[6px] mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#E06B1B' }}
              >
                {c.count}
              </span>
              <p className="text-[0.85rem] mt-2" style={{ color: 'rgba(255,255,255,.6)' }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
