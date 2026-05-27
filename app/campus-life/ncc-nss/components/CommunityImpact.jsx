'use client';

// colSpan 8=ig-l, 4=ig-m, 6=ig-s  |  rowSpan 2=ig-tall
const ITEMS = [
  {
    src:     'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
    cat:     'Community Service',
    title:   'Cleanliness Drives',
    desc:    'Regular campaigns transforming public spaces and creating lasting awareness.',
    colSpan: 8, rowSpan: 2,
  },
  {
    src:     'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600',
    cat:     'Healthcare',
    title:   'Blood Donation Camps',
    desc:    null,
    colSpan: 4, rowSpan: 1,
  },
  {
    src:     'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
    cat:     'Environment',
    title:   'Green Initiatives',
    desc:    null,
    colSpan: 4, rowSpan: 1,
  },
  {
    src:     'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
    cat:     'Social Awareness',
    title:   'Health & Safety Campaigns',
    desc:    null,
    colSpan: 6, rowSpan: 1,
  },
  {
    src:     'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    cat:     'Community Outreach',
    title:   'Rural Development Programs',
    desc:    'Bridging gaps through education and skill development in rural areas.',
    colSpan: 6, rowSpan: 2,
  },
  {
    src:     'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600',
    cat:     'Youth Impact',
    title:   'Empowerment Workshops',
    desc:    null,
    colSpan: 4, rowSpan: 1,
  },
  {
    src:     'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200',
    cat:     'Humanitarian',
    title:   'Disaster Relief & Community Support',
    desc:    'Rapid response teams ready to serve during emergencies.',
    colSpan: 8, rowSpan: 1,
  },
];

export default function CommunityImpact() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-impact-grid{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:280px;gap:16px}@media(max-width:968px){.cl-impact-grid{grid-template-columns:1fr;grid-auto-rows:240px}.cl-ig-item{grid-column:span 1!important;grid-row:span 1!important}}`}} />

      <section
        id="impact"
        className="bg-white py-[96px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]"
      >
        {/* Header — centred */}
        <div className="text-center max-w-[800px] mx-auto mb-[64px]">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
            <span className="block w-[24px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
            Real Impact
          </div>
          <h2
            className="text-[#1B2D5B] mb-5 leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 800 }}
          >
            Creating Impact<br />
            <em className="not-italic" style={{ color: '#E06B1B' }}>Beyond Campus.</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#5a6a8a]">
            Our students don&apos;t just learn about social responsibility—they live it. Through cleanliness drives, awareness campaigns, and community outreach, they create tangible change.
          </p>
        </div>

        {/* Documentary grid */}
        <div className="cl-impact-grid">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="cl-ig-item relative overflow-hidden rounded-[14px] cursor-pointer transition-all duration-[400ms] hover:-translate-y-2 group"
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: item.rowSpan > 1 ? `span ${item.rowSpan}` : undefined,
                boxShadow: '0 8px 32px rgba(27,45,91,.1)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 48px rgba(27,45,91,.2)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(27,45,91,.1)'}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.12]"
              />

              {/* Overlay — appears on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                style={{ background: 'linear-gradient(to top,rgba(27,45,91,.88) 0%,rgba(27,45,91,.3) 50%,transparent 100%)' }}
              >
                <div className="text-[0.68rem] font-bold tracking-[.12em] uppercase mb-[6px]" style={{ color: '#E06B1B' }}>
                  {item.cat}
                </div>
                <h3
                  className="font-bold text-[1.3rem] text-white leading-[1.25]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="text-[0.86rem] leading-[1.5] mt-2" style={{ color: 'rgba(255,255,255,.7)' }}>
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
