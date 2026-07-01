'use client';

import BtechStudents from "../../components/BtechStudents";
import HiringPartnerBtech from "../../components/HiringPartnerBtech";

const CAREER_PATHS = [
  'Software Engineer','Full Stack Developer','AI Engineer','Machine Learning Engineer','Data Scientist',
  'Cyber Security Analyst','Cloud Engineer','DevOps Engineer','Product Engineer','Technology Consultant',
];

const ACH_CARDS = [
  { num: '₹60 LPA', label: 'Highest Package',     hl: true  },
  { num: '100%',    label: 'Placement Assistance', hl: false },
  { num: '500+',    label: 'Recruiters',           hl: false },
  { num: '1000+',   label: 'Internships',          hl: false },
];

const RECRUITERS = [
  'Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM','Tata',
  'Samsung','ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS',
];

const PLACED = [
  { img: 'assets/ABHI0641.JPG', name: 'Amaan Ansari',   role: 'Computer Science & Engineering' },
  { img: 'assets/ABHI0602.JPG', name: 'Ashutosh Malik', role: 'Computer Science & Engineering' },
  { img: 'assets/ABHI0044.JPG', name: 'Richa Munola',   role: 'Computer Science & Engineering' },
  { img: 'assets/ABHI0960.JPG', name: 'Mohit Jaiswal',  role: 'Computer Science & Engineering' },
];

export default function DSCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-career-paths{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:70px}
        .cl-cse-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:60px}
        .cl-cse-rec-wall{display:grid;grid-template-columns:repeat(8,1fr);gap:14px}
        .cl-placed-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
        .cl-placed-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.7),transparent 55%)}
        .cl-placed-card:hover .cl-placed-img img{transform:scale(1.08)}
        @media(max-width:1200px){.cl-career-paths{grid-template-columns:repeat(3,1fr)}.cl-cse-ach{grid-template-columns:repeat(2,1fr)}.cl-cse-rec-wall{grid-template-columns:repeat(4,1fr)}.cl-placed-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){.cl-career-paths{grid-template-columns:repeat(2,1fr)}.cl-cse-rec-wall{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){.cl-career-paths{grid-template-columns:1fr}.cl-cse-ach{grid-template-columns:1fr}.cl-cse-rec-wall{grid-template-columns:repeat(2,1fr)}.cl-placed-grid{grid-template-columns:1fr}}
      `}} />

      <section id="careers" className="py-[50px] px-[4%] max-[640px]:py-[40px] max-[640px]:px-[3%]" style={{ background: '#fff' }}>
        {/* Header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Career Outcomes
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            Where A CSE Degree<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Can Take You</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            From software engineering to AI research, our graduates build careers at the cutting edge of technology.
          </p>
        </div>

        {/* Career path chips */}
        <div className="cl-career-paths">
          {CAREER_PATHS.map((path, i) => (
            <div
              key={i}
              className="rounded-[14px] py-[22px] px-[16px] text-center font-bold text-[.9rem] transition-all duration-300 cursor-default"
              style={{ background: '#f8f9fc', border: '1.5px solid #e0e4ed', color: '#001F4C' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#001F4C'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#001F4C'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,31,76,.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f8f9fc'; e.currentTarget.style.color = '#001F4C'; e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {path}
            </div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="cl-cse-ach">
          {ACH_CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-[18px] py-[34px] px-[24px] text-center transition-all duration-350 cursor-default"
              style={{ background: card.hl ? 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)' : '#001F4C' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 42px rgba(0,31,76,.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <span className="block mb-[8px] leading-[1]" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.8rem', color: card.hl ? '#fff' : '#FFF3D7' }}>{card.num}</span>
              <span className="text-[.84rem] font-semibold" style={{ color: 'rgba(255,255,255,.8)' }}>{card.label}</span>
            </div>
          ))}
        </div>

        {/* Recruiters */}
        {/* <div className="rounded-[20px] p-[48px] max-[640px]:p-[28px] mb-[60px]" style={{ background: '#f8f9fc' }}>
          <h3 className="text-center text-[1.4rem] font-extrabold mb-[6px]" style={{ color: '#001F4C' }}>World&apos;s Leading Brands Hire Our Talented Students</h3>
          <p className="text-center text-[.95rem] mb-[36px]" style={{ color: '#5a6a8a' }}>Top recruiters who hire from Tulas Computer Science &amp; Engineering.</p>
          <div className="cl-cse-rec-wall">
            {RECRUITERS.map((name, i) => (
              <div
                key={i}
                className="rounded-[12px] h-[82px] flex items-center justify-center font-extrabold text-[.86rem] text-center px-[8px] transition-all duration-300 cursor-default"
                style={{ background: '#fff', border: '1.5px solid #e0e4ed', color: '#001F4C' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.color = '#DF5400'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 26px rgba(223,84,0,.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.color = '#001F4C'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                {name}
              </div>
            ))}
          </div>
        </div> */}
        <HiringPartnerBtech/>

        <BtechStudents/>

        {/* Placed students */}
        {/* <div className="text-center text-[1.4rem] font-extrabold mb-[8px]" style={{ color: '#001F4C' }}>Top Placed Students</div>
        <p className="text-center text-[.95rem] mb-[36px]" style={{ color: '#5a6a8a' }}>Real Tulas CSE students, building careers at leading technology companies.</p>
        <div className="cl-placed-grid">
          {PLACED.map((student, i) => (
            <div
              key={i}
              className="cl-placed-card rounded-[18px] overflow-hidden transition-all duration-400"
              style={{ background: '#fff', border: '1px solid #e0e4ed' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 42px rgba(223,84,0,.14)'; e.currentTarget.style.borderColor = '#DF5400'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '#e0e4ed'; }}
            >
              <div className="cl-placed-img relative h-[240px] overflow-hidden">
                <img src={student.img} alt={student.name} className="w-full h-full object-cover transition-transform duration-600" />
                <span className="absolute bottom-[12px] left-[14px] right-[14px] z-[2] text-white font-extrabold text-[1.02rem]">
                  {student.name}
                </span>
              </div>
              <div className="py-[18px] px-[20px] text-center">
                <span className="text-[.84rem] font-bold" style={{ color: '#DF5400' }}>{student.role}</span>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}
