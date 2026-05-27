'use client';

const EXPERIENCES = [
  {
    img:   '/campus-life/tulasfresher/img1.jpg',
    badge: 'Day 1',
    title: 'Welcome Sessions',
    text:  'Meet the leadership team, understand the university culture, and get inspired about what lies ahead.',
  },
  {
    img:   '/campus-life/tulasfresher/img2.jpg',
    badge: 'Explore',
    title: 'Campus Tours',
    text:  'Navigate your new home — from libraries and labs to cafeterias and hangout spots.',
  },
  {
    img:   '/campus-life/tulasfresher/img5.jpg',
    badge: 'Connect',
    title: 'Ice-Breaking Activities',
    text:  'Fun, interactive sessions designed to help you meet your batch mates & make first connections.',
  },
  {
    img:   '/campus-life/tulasfresher/img6.jpg',
    badge: 'Guidance',
    title: 'Faculty Introductions',
    text:  'Meet your mentors, professors, and academic advisors who will guide your learning journey.',
  },
  {
    img:   '/campus-life/tulasfresher/img9.jpg',
    badge: 'Home',
    title: 'Hostel Introductions',
    text:  'Settle into your new home away from home and meet your hostel family.',
  },
  {
    img:   '/campus-life/tulasfresher/img8.jpg',
    badge: 'Discover',
    title: 'Clubs & Committees Fair',
    text:  'Explore student clubs, cultural groups, and leadership opportunities waiting for you.',
  },
];

export default function FirstDayExperiences() {
  return (
    <section
      id="experiences"
      className="py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]"
      style={{ background: '#f5f6fa' }}
    >
      {/* Header */}
      <div className="inline-flex items-center gap-[10px] text-[0.75rem] font-bold text-[#E06B1B] uppercase tracking-[.15em] mb-4">
        <span className="block w-[30px] h-[3px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
        First Impressions
      </div>
      <h2
        className="text-[#1B2D5B] mb-4 leading-[.95] tracking-[.01em]"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}
      >
        Your First Days<br />
        <em className="not-italic" style={{ color: '#E06B1B' }}>On Campus</em>
      </h2>
      <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a] max-w-[750px] mb-12">
        The excitement, emotions, and energy of your first days at Tula&apos;s — captured in moments that mark the beginning of something extraordinary.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6 items-start">
        {EXPERIENCES.map((ex, i) => (
          <div
            key={i}
            className="bg-white rounded-[16px] overflow-hidden border-2 cursor-pointer transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(224,107,27,.15)]"
            style={{ borderColor: '#dde2ef' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#E06B1B'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#dde2ef'}
          >
            {/* Image */}
            <div className="h-[240px] overflow-hidden relative">
              <img
                src={ex.img}
                alt={ex.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 60%)' }}
              />
              <span
                className="absolute top-4 right-4 rounded-[20px] px-[14px] py-[6px] text-[0.72rem] font-bold tracking-[.05em] uppercase text-white"
                style={{ background: '#E06B1B' }}
              >
                {ex.badge}
              </span>
            </div>
            {/* Body */}
            <div className="p-6">
              <h3 className="font-extrabold text-[1.1rem] text-[#1B2D5B] mb-[10px]">{ex.title}</h3>
              <p className="text-[0.9rem] text-[#5a6a8a] leading-[1.7]">{ex.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
