'use client';

const CELEBS = [
  { img: 'https://tulas.edu.in/_next/static/media/biggestAuditorium.33536442.png', name: 'Celebrity Name', role: 'Film Actor · DIFF Edition'      },
  { img: 'https://tulas.edu.in/_next/static/media/multiUse.4a21bb41.png',         name: 'Celebrity Name', role: 'Musician · Sanskriti Night'       },
  { img: 'https://tulas.edu.in/_next/static/media/img1.2971fc59.png',             name: 'Celebrity Name', role: 'Industry Leader · Summit'         },
  { img: 'https://tulas.edu.in/_next/static/media/img2.709bd723.png',             name: 'Celebrity Name', role: 'Sports Icon · Leadership Fest'    },
];

const TAGS = [
  { label: '⭐ 50+ Celebrity Visits', orange: true  },
  { label: 'Film Stars',              orange: false },
  { label: 'Musicians',               orange: false },
  { label: 'Athletes',                orange: false },
  { label: 'Industry Leaders',        orange: false },
];

export default function CelebsSection() {
  return (
    <section
      className="py-[88px] max-[960px]:py-[60px] px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]"
      style={{ background: '#1e1e1e' }}
    >
      {/* Header */}
      <div
        className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[56px] max-[960px]:gap-6 items-end mb-12"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-[22px] h-[2px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Celebrity Visits
          </div>
          <h2
            className="text-white text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] tracking-[0.01em]"
          >
            Stars Who Walked<br />
            Our <span className="text-[#f26522]">Campus</span>
          </h2>
        </div>
        <div>
          <p className="text-[0.97rem] leading-[1.78] text-white/50 mb-[18px]">
            When Tulas hosts an event, it isn&apos;t just an event — it&apos;s a moment. From Bollywood stars to industry titans, the Tulas stage has seen them all. And our students were right there, living every second of it.
          </p>
          <div className="flex gap-[9px] flex-wrap">
            {TAGS.map((tag, i) => (
              <span
                key={i}
                className="rounded-full px-[14px] py-[6px] text-[0.77rem] font-medium"
                style={
                  tag.orange
                    ? { background: 'rgba(242,101,34,.15)', border: '1px solid rgba(242,101,34,.3)', color: '#f26522' }
                    : { background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.68)' }
                }
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Celebrity cards */}
      <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[15px]">
        {CELEBS.map((celeb, i) => (
          <div
            key={i}
            className="relative rounded-[16px] overflow-hidden cursor-pointer group"
            style={{ aspectRatio: '3/4', background: '#222' }}
          >
            <img
              src={celeb.img}
              alt={celeb.name}
              className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-[450ms]"
            />
            <div
              className="absolute inset-0 transition-all duration-300"
              style={{ background: 'linear-gradient(to top,rgba(0,0,0,.88) 0%,rgba(0,0,0,.08) 60%)' }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top,rgba(242,101,34,.72) 0%,rgba(0,0,0,.18) 60%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div
                className="font-extrabold text-[0.93rem] text-white mb-[2px]"
               
              >
                {celeb.name}
              </div>
              <div className="text-[0.71rem] text-white/55">{celeb.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
