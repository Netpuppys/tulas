'use client';

const STATS = [
  { num: '800+',  lbl: 'Active Volunteers'          },
  { num: '120+',  lbl: 'Community Projects'         },
  { num: '15K+',  lbl: 'Service Hours Logged'       },
  { num: '98%',   lbl: 'Report Leadership Growth'   },
];

const SKILLS = [
  { icon: '🎯', txt: 'Decision Making'  },
  { icon: '🗣️', txt: 'Public Speaking'  },
  { icon: '🤝', txt: 'Teamwork'         },
  { icon: '💡', txt: 'Problem Solving'  },
  { icon: '⚖️', txt: 'Responsibility'   },
  { icon: '🌟', txt: 'Confidence'       },
  { icon: '🔄', txt: 'Adaptability'     },
  { icon: '🎓', txt: 'Social Awareness' },
];

export default function LeadershipDevelopment() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-lead-container{display:grid;grid-template-columns:45% 55%;align-items:center}@media(max-width:968px){.cl-lead-container{grid-template-columns:1fr}}.cl-lead-left{position:relative;height:720px;background:#1B2D5B;border-radius:0 20px 20px 0;overflow:hidden}@media(max-width:968px){.cl-lead-left{height:400px;border-radius:20px;margin-bottom:40px}}`}} />

      <section id="leadership" className="bg-white py-0">
        <div className="cl-lead-container">
          {/* Image side */}
          <div className="cl-lead-left">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
              alt="Leadership moment"
              className="w-full h-full object-cover"
              style={{ opacity: '.85', mixBlendMode: 'luminosity' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg,rgba(27,45,91,.85) 0%,rgba(224,107,27,.65) 100%)' }}
            />
          </div>

          {/* Content side */}
          <div className="py-[96px] max-[960px]:py-[60px] px-[7%] max-[960px]:px-[7%]">
            <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
              <span className="block w-[24px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
              Growth &amp; Development
            </div>
            <h2
              className="text-[#1B2D5B] mb-5 leading-[1.15]"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 800 }}
            >
              Experiential Learning<br />
              <em className="not-italic" style={{ color: '#E06B1B' }}>Through Leadership.</em>
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-[#5a6a8a] max-w-[720px] mb-10">
              NCC &amp; NSS participation transforms students. What starts as service becomes a journey of self-discovery, skill building, and personal growth.
            </p>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-6 mb-12">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="rounded-[12px] px-7 py-7 border-l-4"
                  style={{ background: '#f5f6fa', borderLeftColor: '#E06B1B' }}
                >
                  <span
                    className="block font-extrabold text-[2.8rem] leading-[1] mb-2"
                    style={{ fontFamily: "'Syne', sans-serif", color: '#E06B1B' }}
                  >
                    {s.num}
                  </span>
                  <div className="font-semibold text-[0.95rem] text-[#1B2D5B]">{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Skills sub-heading */}
            <h3
              className="text-[#1B2D5B] mb-5 leading-[1.15]"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.6rem', fontWeight: 800 }}
            >
              Skills Developed Through Service
            </h3>

            {/* Skills 2-col grid */}
            <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-3">
              {SKILLS.map((sk, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-[18px] py-[14px] rounded-[8px] transition-transform duration-200 hover:translate-x-[6px]"
                  style={{ background: '#f5f6fa' }}
                >
                  <span className="text-[1.4rem] leading-none">{sk.icon}</span>
                  <span className="font-semibold text-[0.92rem] text-[#1B2D5B]">{sk.txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
