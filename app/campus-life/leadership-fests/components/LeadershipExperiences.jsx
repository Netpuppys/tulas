'use client';

const CARDS = [
  { icon: '🎤', title: 'Public Speaking Excellence', desc: 'Students develop communication skills through debates, presentations, and stage interactions with influential speakers.',     link: 'Learn More →'       },
  { icon: '🧠', title: 'Policy Awareness',           desc: 'Exposure to governance, economic policy, and legislative processes builds civic understanding and analytical thinking.',       link: 'Explore Sessions →'  },
  { icon: '🤝', title: 'Networking & Mentorship',    desc: 'Direct interactions with leaders, policymakers, and industry experts create mentorship opportunities and professional networks.', link: 'Connect →'          },
  { icon: '💼', title: 'Leadership Development',     desc: 'Hands-on participation in governance simulations and policy debates builds real leadership competencies.',                      link: 'Discover →'         },
  { icon: '📚', title: 'Critical Thinking',          desc: 'Engaging with complex policy issues and diverse perspectives sharpens analytical and problem-solving skills.',                  link: 'Engage →'           },
  { icon: '🌟', title: 'Confidence Building',        desc: 'Stage experience, audience engagement, and intellectual discourse build self-confidence and poise.',                            link: 'Participate →'      },
];

export default function LeadershipExperiences() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-le-card{background:#fff;border:2px solid #e0e4ed;border-radius:20px;padding:40px 34px;transition:all .4s;position:relative;overflow:hidden}.cl-le-card::before{content:'';position:absolute;top:0;left:0;right:0;height:5px;background:#DF5400;transform:scaleX(0);transform-origin:left;transition:transform .4s}.cl-le-card:hover{background:#f8f9fc;border-color:#DF5400;transform:translateY(-10px);box-shadow:0 16px 42px rgba(223,84,0,.16)}.cl-le-card:hover::before{transform:scaleX(1)}.cl-le-card:hover .cl-le-link{letter-spacing:.06em}`}} />

      <section
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]"
        style={{ background: '#fafbfd' }}
      >
        {/* 2-col header */}
        <div className="grid grid-cols-2 max-[968px]:grid-cols-1 gap-[80px] items-end mb-[70px]">
          <div>
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-5" style={{ color: '#DF5400' }}>
              <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Student Growth
            </div>
            <h2
              className="leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3.2rem,6vw,6.5rem)', color: '#001F4C' }}
            >
              Experiential Learning<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Through Dialogue</em>
            </h2>
          </div>
          <div>
            <p className="text-[1.1rem] leading-[1.9] max-w-[850px]" style={{ color: '#5a6a8a' }}>
              Leadership events at Tulas build confidence, communication skills, analytical thinking, and civic awareness — preparing students for real-world impact.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1 gap-8">
          {CARDS.map((c, i) => (
            <div key={i} className="cl-le-card">
              <span className="block text-[2.6rem] mb-6">{c.icon}</span>
              <h3 className="font-extrabold text-[1.3rem] mb-4" style={{ color: '#001F4C' }}>{c.title}</h3>
              <p className="text-[.98rem] leading-[1.85] mb-5" style={{ color: '#5a6a8a' }}>{c.desc}</p>
              {/* <a
                href="#"
                className="cl-le-link inline-flex items-center gap-[6px] font-bold text-[.88rem] transition-all duration-200"
                style={{ color: '#DF5400' }}
              >
                {c.link}
              </a> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
