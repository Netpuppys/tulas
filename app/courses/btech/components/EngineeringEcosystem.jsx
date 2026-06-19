'use client';

const ECO_CARDS = [
  { img: 'assets/ABHI0128.JPG', title: 'Innovation & Incubation',          text: 'Entrepreneurship support, startup incubation, and an innovation-first culture.' },
  { img: 'assets/ABHI0307.JPG', title: 'Industry & Academic Partnerships', text: 'MoUs and collaborations powering internships, projects, and certifications.' },
  { img: 'assets/ABHI0044.JPG', title: 'Technical Clubs & Research',       text: 'Student-led clubs, research opportunities, and hands-on technical communities.' },
  { img: 'assets/ABHI0641.JPG', title: 'Workshops & Certifications',       text: 'Industry-recognized certifications and skill-building workshops year-round.' },
  { img: 'assets/ABHI0602.JPG', title: 'Leadership Development',           text: 'Programs that build confidence, communication, and leadership capability.' },
  { img: 'assets/ABHI0235.JPG', title: 'TCCI Career Framework',            text: 'Structured career development from first year through placement and beyond.' },
];

const OV_DEFAULT = 'linear-gradient(to top,rgba(0,31,76,.94) 0%,rgba(0,31,76,.3) 55%,transparent 100%)';
const OV_HOVER   = 'linear-gradient(to top,rgba(223,84,0,.92) 0%,rgba(0,31,76,.35) 60%,transparent 100%)';

export default function EngineeringEcosystem() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-eco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-eco-card img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
        .cl-eco-card:hover img{transform:scale(1.1)}
        @media(max-width:1200px){.cl-eco-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-eco-grid{grid-template-columns:1fr}}
      `}} />

      <section
        id="ecosystem-section"
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]"
        style={{ background: '#fff' }}
      >
        {/* Header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Beyond Academics
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            The Engineering<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Ecosystem At Tulas</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Engineering at Tulas extends far beyond the classroom — a complete ecosystem that supports innovation, research, and growth.
          </p>
        </div>

        {/* Grid */}
        <div className="cl-eco-grid">
          {ECO_CARDS.map((card, i) => (
            <div
              key={i}
              className="cl-eco-card relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-400"
              style={{ height: 300, boxShadow: '0 10px 30px rgba(0,31,76,.1)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 22px 55px rgba(0,31,76,.22)';
                e.currentTarget.querySelector('.cl-eco-ov').style.background = OV_HOVER;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,31,76,.1)';
                e.currentTarget.querySelector('.cl-eco-ov').style.background = OV_DEFAULT;
              }}
            >
              <img src={card.img} alt={card.title} />
              <div
                className="cl-eco-ov absolute inset-0 flex flex-col justify-end p-[30px] transition-all duration-400"
                style={{ background: OV_DEFAULT }}
              >
                <h3 className="font-extrabold text-[1.25rem] text-white mb-[8px]">{card.title}</h3>
                <p className="text-[.88rem] leading-[1.6]" style={{ color: 'rgba(255,255,255,.85)' }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
