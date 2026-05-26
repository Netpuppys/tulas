'use client';

const VIDEOS = [
  {
    thumb: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    title: 'My First Week at Tula\'s',
    meta:  'Priya Sharma • B.Tech CSE',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    title: 'Orientation Day Highlights',
    meta:  'Rahul Verma • BBA',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
    title: 'Finding My Community',
    meta:  'Aisha Khan • B.Sc Agriculture',
  },
];

const TESTIMONIALS = [
  {
    quote:  '"Orientation week changed everything for me. I went from feeling nervous about college to being genuinely excited. The people I met during those first few days are now my closest friends."',
    name:   'Aarav Malhotra',
    detail: 'B.Tech Mechanical • Batch 2026',
    init:   'A',
  },
  {
    quote:  '"The faculty and seniors made us feel so welcome. They didn\'t just introduce us to the campus — they introduced us to a culture of belonging and growth."',
    name:   'Simran Kaur',
    detail: 'BBA • Batch 2026',
    init:   'S',
  },
  {
    quote:  '"I was anxious about leaving home, but orientation helped me realize I was joining a new family. The activities, the bonding, and the support made all the difference."',
    name:   'Karan Bhatt',
    detail: 'B.Sc Agriculture • Batch 2026',
    init:   'K',
  },
  {
    quote:  '"Orientation wasn\'t just informative — it was transformative. It gave me the confidence to step out of my comfort zone and explore everything this campus has to offer."',
    name:   'Meera Patel',
    detail: 'B.Tech CSE • Batch 2026',
    init:   'M',
  },
];

export default function FreshersStudentStories() {
  return (
    <section
      id="stories"
      className="py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]"
      style={{ background: 'linear-gradient(to bottom,#f5f6fa 0%,#fff 100%)' }}
    >
      {/* Header — centred */}
      <div className="text-center max-w-[750px] mx-auto mb-[60px]">
        <div className="inline-flex items-center gap-[10px] text-[0.75rem] font-bold text-[#E06B1B] uppercase tracking-[.15em] mb-4">
          <span className="block w-[30px] h-[3px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
          Real Voices
        </div>
        <h2
          className="text-[#1B2D5B] mb-5 leading-[.95] tracking-[.01em]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}
        >
          Stories From<br />
          <em className="not-italic" style={{ color: '#E06B1B' }}>New Beginnings</em>
        </h2>
        <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a]">
          Hear from students who experienced their first days at Tula&apos;s — the nerves, the excitement, and the unforgettable moments.
        </p>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6">
        {VIDEOS.map((v, i) => (
          <div
            key={i}
            className="relative rounded-[18px] overflow-hidden cursor-pointer bg-black transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,.2)] group"
            style={{ aspectRatio: '16/10' }}
          >
            <img
              src={v.thumb}
              alt={v.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.08] group-hover:opacity-70"
            />
            {/* Play button */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full flex items-center justify-center text-white text-[1.8rem] transition-all duration-300 group-hover:scale-[1.15]"
              style={{ background: 'rgba(224,107,27,.95)', boxShadow: '0 4px 20px rgba(224,107,27,.5)' }}
            >
              ▶
            </div>
            {/* Info overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: 'linear-gradient(to top,rgba(0,0,0,.85) 0%,transparent 100%)' }}
            >
              <div className="font-bold text-[0.95rem] text-white mb-1">{v.title}</div>
              <div className="text-[0.78rem]" style={{ color: 'rgba(255,255,255,.7)' }}>{v.meta}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-7 mt-[60px]">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="bg-white border-l-4 rounded-[14px] p-8 transition-all duration-300 hover:translate-x-[6px]"
            style={{ borderLeftColor: '#E06B1B', boxShadow: '0 8px 24px rgba(0,0,0,.06)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(224,107,27,.15)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,.06)'}
          >
            <p className="italic font-medium text-[1.05rem] leading-[1.8] text-[#1B2D5B] mb-5">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center font-extrabold text-[1.1rem] text-white flex-shrink-0"
                style={{ background: '#E06B1B' }}
              >
                {t.init}
              </div>
              <div>
                <span className="block font-bold text-[0.95rem] text-[#1B2D5B]">{t.name}</span>
                <span className="text-[0.82rem] text-[#5a6a8a]">{t.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
