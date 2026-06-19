'use client';

const WHY_CARDS = [
  { num: '01', img: '/courses/btech/ProgramOutcomes.png', title: 'Industry-Oriented Curriculum', text: 'Designed with industry leaders to meet the demands of modern engineering and Industry 4.0 workplaces.' },
  { num: '02', img: '/courses/btech/ProgramEducationalObjective.png', title: 'Hands-On Training',             text: 'Advanced labs, practical workshops, and live projects that turn theory into real technical proficiency.' },
  { num: '03', img: '/courses/btech/usp.png', title: 'Internship & Project Opportunities', text: 'Real-world exposure through internships and industry collaborations with leading companies.' },
  { num: '04', img: '/courses/btech/computer-science/topBanner.webp', title: 'Diverse Career Opportunities',  text: 'Expanding career prospects across IT, core engineering, consulting, manufacturing and emerging tech.' },
  { num: '05', img: '/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/bannerImg.webp', title: 'Higher Earning Potential',       text: 'Competitive salaries and rewarding careers, with packages up to ₹60 LPA for top performers.' },
  { num: '06', img: '/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/departmentalMission.webp', title: 'High Demand For Engineers',      text: 'National and international job opportunities with strong, sustained market demand for skilled engineers.' },
];

export default function WhyBtech() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-wb-split{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-bottom:90px}
        .cl-wb-why{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-wb-wimg::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.55),transparent 60%)}
        .cl-wb-card:hover .cl-wb-wimg img{transform:scale(1.1)}
        @media(max-width:1200px){.cl-wb-why{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){.cl-wb-split{grid-template-columns:1fr;gap:40px}}
        @media(max-width:640px){.cl-wb-why{grid-template-columns:1fr}.cl-wb-split{padding:0}}
      `}} />

      <section id="why" className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]" style={{ background: '#fff' }}>

        {/* Split: image + text */}
        <div className="cl-wb-split">
          {/* Image */}
          <div className="relative">
            <img
              src="/courses/btech/CourseOutcomes.png"
              alt="Engineering students at Tulas"
              className="rounded-[20px] w-full object-cover"
              style={{ height: 540, boxShadow: '0 24px 60px rgba(0,31,76,.22)' }}
            />
            {/* Floating badge */}
            <div
              className="absolute"
              style={{
                bottom: -28,
                right: -20,
                background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)',
                color: '#fff',
                borderRadius: 18,
                padding: '26px 30px',
                boxShadow: '0 16px 40px rgba(223,84,0,.4)',
                maxWidth: 230,
              }}
            >
              <span
                className="block mb-1 leading-[1]"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.6rem' }}
              >
                20+
              </span>
              <span className="text-[.82rem] font-semibold leading-[1.5]">
                Years of engineering excellence in Dehradun
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
              <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Engineering At Tulas
            </div>
            <h2
              className="mb-[22px] leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
            >
              Build Strong Engineering<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Foundation</em>
            </h2>
            <p className="text-[1.2rem] font-semibold leading-[1.7] mb-[22px]" style={{ color: '#001F4C' }}>
              The Bachelor of Technology (B.Tech) is a four-year undergraduate program designed to equip students with a strong foundation in engineering principles, technical expertise, and practical skills.
            </p>
            <p className="text-[1rem] leading-[1.9] mb-[18px]" style={{ color: '#5a6a8a' }}>
              The curriculum blends theoretical knowledge with hands-on training — preparing students for industry, research, and entrepreneurship. Early semesters build fundamental engineering concepts, followed by specialized subjects and electives tailored to each discipline.
            </p>
            <p className="text-[1rem] leading-[1.9] mb-[28px]" style={{ color: '#5a6a8a' }}>
              Continuously updated to keep pace with technology, the program integrates artificial intelligence, cybersecurity, data science, renewable energy and automation — ensuring graduates stay competitive in a fast-evolving job market.
            </p>
            <div className="flex gap-[14px] flex-wrap">
              {[
                { label: 'NBA Accredited',   orange: 'NBA'  },
                { label: 'NAAC Certified',   orange: 'NAAC' },
                { label: 'AICTE Approved',   orange: 'AICTE' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="rounded-[10px] px-[20px] py-[12px] text-[.82rem] font-bold"
                  style={{ background: '#f8f9fc', border: '1.5px solid #e0e4ed', color: '#001F4C' }}
                >
                  <span style={{ color: '#DF5400' }}>{p.orange}</span> {p.label.replace(p.orange + ' ', '')}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Why Choose Tulas
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            An Education Built Around<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Your Career</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Every part of the B.Tech experience at Tulas is engineered to make you industry-ready, future-proof, and confident.
          </p>
        </div>

        {/* Why grid */}
        <div className="cl-wb-why">
          {WHY_CARDS.map((card, i) => (
            <div
              key={i}
              className="cl-wb-card rounded-[18px] overflow-hidden transition-all duration-400 border"
              style={{ background: '#fff', borderColor: '#e0e4ed' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,31,76,.14)'; e.currentTarget.style.borderColor = '#DF5400'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '#e0e4ed'; }}
            >
              {/* Image */}
              <div className="cl-wb-wimg relative h-[180px] overflow-hidden">
                <span
                  className="absolute top-[14px] left-[16px] z-[2] flex items-center justify-center text-white font-bold"
                  style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: '1.5rem',
                    background: 'rgba(223,84,0,.92)',
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                  }}
                >
                  {card.num}
                </span>
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-600" />
              </div>
              {/* Body */}
              <div className="p-[26px] pb-[30px]">
                <h3 className="font-extrabold text-[1.18rem] mb-[10px]" style={{ color: '#001F4C' }}>{card.title}</h3>
                <p className="text-[.92rem] leading-[1.75]" style={{ color: '#5a6a8a' }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
