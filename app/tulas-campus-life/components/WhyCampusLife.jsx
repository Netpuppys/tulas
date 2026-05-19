'use client';

const CARDS = [
  { icon: '🎓', title: 'Experiential Learning',   desc: 'Real projects, live events, industry challenges.',              stat: '20+ Yrs'  },
  { icon: '🎭', title: 'Student-Led Culture',      desc: 'Students run clubs, fests, media, communication.',             stat: '11 Clubs' },
  { icon: '⭐', title: 'Celebrity Interactions',   desc: 'Film stars, musicians, athletes & industry leaders.',          stat: '50+ Visits' },
  { icon: '🏆', title: 'National-Level Events',    desc: 'DIFF, Utkrisht, Sanskriti — events that matter.',             stat: '1,000+'   },
  { icon: '🎨', title: 'Creative Communities',     desc: 'Photography, art, writing — every passion finds a tribe.',    stat: null       },
  { icon: '🗣️', title: 'Leadership Exposure',      desc: 'Chhatra Sansad, Student Council, debating.',                  stat: null       },
  { icon: '🤝', title: 'Industry Networking',      desc: '750+ hiring partners, alumni, live sessions.',                 stat: '750+'     },
  { icon: '🌍', title: 'Cultural Diversity',       desc: 'Students from 20+ states — infinite perspectives.',           stat: null       },
  { icon: '🎉', title: 'Campus Celebrations',      desc: 'Diwali, Holi, Freshers, Farewell — every season.',            stat: null       },
  { icon: '🏋️', title: 'Sports & Wellness',        desc: 'Cricket, badminton, gym, yoga — body and mind.',              stat: null       },
  { icon: '💡', title: 'Innovation Culture',       desc: 'Hackathons, robotics — ideas find their wings.',              stat: null       },
  { icon: '🏠', title: 'Hostel Life',              desc: '6 blocks, friendships forged for life.',                       stat: '6 Blocks' },
  { icon: '📸', title: 'Open Expression',          desc: 'Media, theatre, fashion, spoken word.',                       stat: null       },
  { icon: '🎬', title: 'Film Festival DIFF',       desc: '10 editions of international cinema.',                        stat: '10 Editions' },
  { icon: '🤞', title: 'Lifelong Bonds',           desc: '7,000+ alumni who still call Tulas home.',                    stat: '7,000+'   },
];

const STATS = [
  { val: '200+', lbl: 'Events Every Year'    },
  { val: '50+',  lbl: 'Campus Experiences'   },
  { val: '11',   lbl: 'Student Clubs'        },
  { val: '20+',  lbl: 'Years of Memories'    },
];

export default function WhyCampusLife() {
  return (
    <section className="bg-[#f7f8fc] py-[88px] max-[960px]:py-[60px] px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div
        className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[56px] max-[960px]:gap-6 items-end mb-[52px]"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-[22px] h-[2px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            15 Reasons
          </div>
          <h2
            className="text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] text-[#111111] tracking-[0.01em]"
          >
            Why Campus Life<br />
            at Tula&apos;s Hits <span className="text-[#f26522]">Different</span>
          </h2>
        </div>
        <div>
          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            Students from across India choose Tulas — not just for the degree, but for everything that comes with it.
          </p>
        </div>
      </div>

      {/* 15-card grid */}
      <div className="grid grid-cols-5 max-[1100px]:grid-cols-3 max-[600px]:grid-cols-2 gap-[13px]">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="bg-white border border-[#e8e8e8] rounded-[15px] px-4 py-5 transition-all duration-[250ms] hover:border-[#f26522] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(242,101,34,.1)]"
          >
            <span className="block text-[1.4rem] mb-[11px]">{card.icon}</span>
            <div
              className="font-bold text-[0.84rem] text-[#111111] mb-1"
             
            >
              {card.title}
            </div>
            <div className="text-[0.76rem] text-[#6b7280] leading-[1.55]">{card.desc}</div>
            {card.stat && (
              <span
                className="block font-extrabold text-[0.9rem] text-[#f26522] mt-[9px]"
               
              >
                {card.stat}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Stat strip */}
      <div
        className="grid grid-cols-4 max-[600px]:grid-cols-2 mt-11 rounded-[14px] overflow-hidden"
        style={{ background: '#111111' }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className="py-7 px-5 text-center"
            style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}
          >
            <span
              className="block text-[#f26522] text-[2.8rem] leading-[1]"
             
            >
              {s.val}
            </span>
            <span className="block text-[0.72rem] text-white/45 tracking-[0.07em] uppercase mt-[5px]">
              {s.lbl}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
