'use client';

const CARDS = [
  { icon: '🏆', title: 'Leadership Excellence', desc: 'Alumni holding C-suite positions in Fortune 500 companies, leading teams, and driving innovation across industries.',                         link: 'Read Stories →'      },
  { icon: '🚀', title: 'Startup Success',        desc: 'Over 200 startups founded by Tula\'s alumni, creating jobs, solving problems, and building the future.',                                    link: 'Explore Ventures →'  },
  { icon: '🌟', title: 'Social Impact',          desc: 'Alumni driving change through NGOs, sustainability initiatives, and community development projects.',                                        link: 'Discover Impact →'   },
  { icon: '📚', title: 'Academic Excellence',    desc: 'Alumni pursuing PhDs, conducting groundbreaking research, and teaching at premier institutions worldwide.',                                  link: 'Learn More →'        },
  { icon: '💡', title: 'Innovation Leaders',     desc: 'Patents filed, technologies developed, and innovations that are shaping industries and markets.',                                            link: 'View Innovations →'  },
  { icon: '🎯', title: 'Career Transitions',     desc: 'Alumni successfully pivoting careers, exploring new fields, and proving that growth never stops.',                                          link: 'Read Journeys →'     },
];

export default function SuccessStories() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-ss-card{background:#f8f9fc;border:2px solid #e0e4ed;border-radius:18px;padding:36px 30px;transition:all .4s;position:relative;overflow:hidden}.cl-ss-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:5px;background:#DF5400;transform:scaleX(0);transform-origin:left;transition:transform .4s}.cl-ss-card:hover{background:#fff;border-color:#DF5400;transform:translateY(-8px);box-shadow:0 14px 36px rgba(223,84,0,.14)}.cl-ss-card:hover::before{transform:scaleX(1)}.cl-ss-card:hover .cl-ss-link{letter-spacing:.04em}`}} />

      <section
        className="py-[100px] px-[7%] max-[640px]:py-[65px] max-[640px]:px-[5%]"
        style={{ background: '#fff' }}
      >
        {/* 2-col header */}
        <div className="grid grid-cols-2 max-[968px]:grid-cols-1 gap-[70px] items-end mb-[60px]">
          <div>
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.16em] mb-[18px]" style={{ color: '#DF5400' }}>
              <span className="block w-[32px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Life After Tula&apos;s
            </div>
            <h2
              className="leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,5.5vw,6rem)', color: '#001F4C' }}
            >
              Stories Of Progress<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>&amp; Possibility</em>
            </h2>
          </div>
          <div>
            <p className="text-[1.08rem] leading-[1.85] max-w-[800px]" style={{ color: '#5a6a8a' }}>
              From career milestones to entrepreneurial ventures, Tula&apos;s alumni are making their mark across industries and inspiring the next generation.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1 gap-7">
          {CARDS.map((c, i) => (
            <div key={i} className="cl-ss-card">
              <span className="block text-[2.4rem] mb-5">{c.icon}</span>
              <h3 className="font-extrabold text-[1.22rem] mb-[14px]" style={{ color: '#001F4C' }}>{c.title}</h3>
              <p className="text-[.95rem] leading-[1.8] mb-[18px]" style={{ color: '#5a6a8a' }}>{c.desc}</p>
              <a
                href="#"
                className="cl-ss-link inline-flex items-center gap-[6px] font-bold text-[.86rem] transition-all duration-200"
                style={{ color: '#DF5400' }}
              >
                {c.link}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
