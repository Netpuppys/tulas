'use client';

const CARDS = [
  {
    img:   'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    emoji: '🎪',
    tag:   'Pop-Up Events',
    title: 'Surprise Campus Activations',
    desc:  'Flash performances, pop-up stalls, and spontaneous celebrations that keep campus energy alive.',
  },
  {
    img:   '/campus-life/tulasexperience/img5.jpg',
    emoji: '🎨',
    tag:   'Creative Sessions',
    title: 'Art, Music & Expression',
    desc:  'Creative workshops, jam sessions, and artistic collaborations that fuel imagination.',
  },
  {
    img:   '/campus-life/tulasexperience/img6.jpg',
    emoji: '🎮',
    tag:   'Competitions',
    title: 'Compete, Learn, Win',
    desc:  'Gaming tournaments, hackathons, debates, and competitions that challenge and excite.',
  },
  {
    img:   '/campus-life/tulasexperience/img4.jpg',
    emoji: '🍕',
    tag:   'Community Moments',
    title: 'Food Fests & Social Hours',
    desc:  'Food festivals, social mixers, and informal gatherings that build community.',
  },
  {
    img:   '/campus-life/tulasexperience/img10.jpg',
    emoji: '🎭',
    tag:   'Themed Nights',
    title: 'Movie Nights & DJ Parties',
    desc:  'Themed celebrations, movie screenings, and DJ nights that bring campus together.',
  },
  {
    img:   '/campus-life/tulasexperience/img1.jpg',
    emoji: '💡',
    tag:   'Interactive',
    title: 'Open Mic & Talent Shows',
    desc:  'Platforms for students to showcase talents, share stories, and express themselves.',
  },
];

export default function SpontaneousCampusLife() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-spont-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}@media(max-width:1200px){.cl-spont-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.cl-spont-grid{grid-template-columns:1fr}}.cl-spont-card img{transition:transform .7s}.cl-spont-card:hover img{transform:scale(1.12)}`}} />

      <section
        className="py-[80px] px-[7%] max-[768px]:py-[55px] max-[768px]:px-[5%]"
        style={{ background: '#f8f9fb' }}
      >
        {/* Header */}
        <div className="mb-[60px]">
          <div className="inline-flex items-center gap-3 text-[.72rem] font-extrabold uppercase tracking-[.18em] mb-[18px]" style={{ color: '#DF5400' }}>
            <span className="block w-[45px] h-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Always Alive
          </div>
          <h2
            className="font-black leading-[.98] tracking-[-0.015em] mb-5"
            style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(2.5rem,5vw,4.8rem)', color: '#001F4C' }}
          >
            Campus Energy{' '}
            <em className="not-italic" style={{ color: '#DF5400' }}>In Action.</em>
          </h2>
          <p className="text-[1.15rem] leading-[1.8] max-w-[720px] font-medium" style={{ color: '#4a5568' }}>
            The spontaneous, vibrant moments that make campus life unforgettable — from flash celebrations to creative activations, there&apos;s always something exciting happening.
          </p>
        </div>

        {/* Cards */}
        <div className="cl-spont-grid">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className="cl-spont-card relative overflow-hidden rounded-[20px] transition-all duration-[450ms] hover:-translate-y-[10px] hover:scale-[1.02]"
              style={{ height: '420px', background: '#fff', boxShadow: '0 12px 40px rgba(0,31,76,.1)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 64px rgba(0,31,76,.15)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,31,76,.1)'}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" style={{ filter: 'contrast(1.05) saturate(1.06)' }} />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 z-[1]"
                style={{ background: 'linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.5) 50%,transparent 100%)' }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-[2]">
                <div className="text-[2.4rem] mb-[14px]" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.3))' }}>{c.emoji}</div>
                <span
                  className="inline-block px-[14px] py-[6px] rounded-[8px] text-[.68rem] font-extrabold tracking-[.12em] uppercase text-white mb-3"
                  style={{ background: 'rgba(223,84,0,.9)' }}
                >
                  {c.tag}
                </span>
                <h3
                  className="font-extrabold text-[1.5rem] text-white leading-[1.3] mb-[10px]"
                  style={{ fontFamily: "'Montserrat',sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-[.95rem] leading-[1.65]" style={{ color: 'rgba(255,255,255,.8)' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
