'use client';

const EVENTS = [
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/biggestAuditorium.33536442.png',
    tag:   '🎬 10th Edition',
    title: 'Dehradun International Film Festival (DIFF)',
    desc:  'A decade of cinema, storytelling, and culture. DIFF has grown into one of the most prestigious student-led film festivals in India ',
    cta:   'Explore DIFF →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/bannerImgComputer.71a0ea86.webp',
    tag:   '⚡ Tech Fest',
    title: 'Utkrisht',
    desc:  'Where ideas stop being ideas. Hackathons, robotics, coding wars, and innovation showcases — the campus goes full power mode.',
    cta:   'Explore →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/multiUse.4a21bb41.png',
    tag:   '🎶 Cultural Fest',
    title: 'Sanskriti',
    desc:  'The nights we never wanted to end. Dance, music, fashion, comedy — Sanskriti is the cultural heartbeat of Tulas. Thousands of memories, one fest.',
    cta:   'Explore →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/img1.cdb374cf.webp',
    tag:   '🌟 Welcome',
    title: 'Freshers Orientation',
    desc:  'The first day of the rest of your life. A warm, electric welcome that instantly makes you feel at home and part of something bigger.',
    cta:   'Read More →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/img3.ad931c1f.png',
    tag:   '🏛 Leadership',
    title: 'Leadership Fest & Chhatra Sansad 2026',
    desc:  'Where young voices learn to lead. Policy debates, governance discussions, and Uttarakhand\'s biggest student conclave in one place.',
    cta:   'Explore →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/img1.2971fc59.png',
    tag:   '💛 Nostalgia',
    title: 'Alumni Meet',
    desc:  '"Some bonds never graduate." 7,000+ alumni return every year to relive memories and remind themselves why Tulas changed their lives.',
    cta:   'Read More →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/img2.709bd723.png',
    tag:   '🎭 VIBGYOR',
    title: 'Student Clubs & Committees',
    desc:  '11 clubs, one vibrant student body — from Quill to Sargam to Footloose to Capture, every passion finds its community at Tulas.',
    cta:   'Explore Clubs →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/img2.29683b1b.png',
    tag:   '🎖 Service',
    title: 'Leadership & Service (NCC & NSS)',
    desc:  'Discipline, community, and purpose. NCC and NSS at Tulas build the leaders and citizens of tomorrow through service and commitment.',
    cta:   'Explore →',
  },
  {
    wide: false,
    img:   'https://tulas.edu.in/_next/static/media/img3.71a497c2.png',
    tag:   '✨ And More',
    title: 'Events & Experiences',
    desc:  'Surprise workshops, guest sessions, pop culture moments, spontaneous celebrations — campus life at Tulas is alive, spontaneous and emotionally rich.',
    cta:   'See All →',
  },
];

export default function MajorExperiences() {
  return (
    <section
      id="experiences"
      className="bg-white py-[88px] max-[960px]:py-[60px] px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]"
    >
      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-[22px] h-[2px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Major Events
          </div>
          <h2
            className="text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] text-[#111111] tracking-[0.01em]"
          >
            The Experiences That<br />
            <span className="text-[#f26522]">Define Us</span>
          </h2>
        </div>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] max-w-[320px]">
          Every semester has a story. Here are the chapters that make campus life at Tulas unforgettable.
        </p>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5 items-start">
        {EVENTS.map((ev, i) => (
          <div
            key={i}
            className={[
              'bg-[#f7f8fc] border border-[#e8e8e8] rounded-[18px] overflow-hidden flex transition-all duration-[250ms] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,.1)]',
              ev.wide
                ? 'flex-row max-[960px]:flex-col max-[600px]:flex-col max-[600px]:col-span-1'
                : 'flex-col',
            ].join(' ')}
            style={ev.wide ? { gridColumn: 'span 2' } : {}}
          >
            {/* Image */}
            <div
              className={[
                'overflow-hidden relative flex-shrink-0',
                ev.wide
                  ? 'w-[42%] max-[960px]:w-full h-[240px] max-[960px]:h-[200px]'
                  : 'h-[200px]',
              ].join(' ')}
            >
              <img
                src={ev.img}
                alt={ev.title}
                className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top,rgba(0,0,0,.5) 0%,transparent 55%)' }}
              />
            </div>

            {/* Body */}
            <div
              className={[
                'flex flex-col flex-1',
                ev.wide ? 'p-[26px_30px] justify-center' : 'p-[20px_22px_24px]',
              ].join(' ')}
            >
              <span className="inline-block bg-[#fff3ec] border border-[rgba(242,101,34,.22)] rounded-[6px] px-[10px] py-[3px] text-[0.67rem] font-bold text-[#f26522] tracking-[0.07em] uppercase mb-[9px]">
                {ev.tag}
              </span>
              <div
                className={[
                  'font-extrabold text-[#111111] mb-[7px]',
                  ev.wide ? 'text-[1.22rem]' : 'text-[1.05rem]',
                ].join(' ')}
               
              >
                {ev.title}
              </div>
              <p className="text-[0.84rem] text-[#6b7280] leading-[1.65] flex-1 mb-[15px]">{ev.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-[5px] font-bold text-[0.79rem] text-[#f26522] tracking-[0.04em] transition-all duration-200 hover:gap-[9px]"
               
              >
                {ev.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
