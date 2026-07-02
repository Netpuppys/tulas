'use client';

import { useState } from 'react';

const SECTIONS = [
  {
    id: 'usps',
    tag: 'Why Choose This Program',
    title: 'Program USPs',
    points: [
      { title: 'Solve Real Business Problems',        desc: 'Work on live datasets, business dashboards, consulting assignments, internships, and a final analytics capstone.' },
      { title: 'Core + Specialisation Architecture',  desc: 'Build a strong business foundation in BBA with a specialization in Business Analytics.' },
      { title: 'Integrated Placement Preparation',    desc: 'Prepare for campus recruitment through aptitude training, analytics projects, industry certifications, and interview readiness.' },
      { title: 'Learn from Industry Experts',         desc: 'Interact with business leaders, consultants, analysts, and entrepreneurs through guest lectures and expert sessions.' },
      { title: 'Practical Learning Every Semester',   desc: 'Build dashboards, analyse datasets, solve business case studies, and present insights through hands-on projects.' },
      { title: 'AI-native Learning via LEAP',         desc: 'Use LEAP, our AI-native learning platform, to personalise your learning journey and continuously track your progress.' },
      { title: 'Industry Projects & Analytics Challenges', desc: 'Participate in analytics competitions, business consulting projects, and innovation challenges to strengthen practical skills.' },
      { title: 'Entrepreneurship & Innovation',       desc: 'Develop analytical thinking to identify business opportunities, optimise operations, and drive strategic growth.' },
      { title: 'Life Skills & Professional Growth',   desc: 'Develop workplace communication, analytical thinking, business ethics, financial literacy, and career readiness aligned with NEP 2020.' },
      { title: 'Industry Certifications Across 3 Years', desc: 'Graduate with certifications from Microsoft, Google, IIT Kanpur E&ICT Academy, DeepLearning.AI, and other leading technology partners.' },
    ],
    isTitled: true,
  },
  {
    id: 'peo',
    tag: 'Long-Term Graduate Goals',
    title: 'Programme Educational Objectives',
    points: [
      { title: 'PEO1 — Comprehensive Knowledge',        desc: 'Provide a holistic understanding of foundational management principles, financial acumen, and functional areas like Marketing, HR, and Analytics.' },
      { title: 'PEO2 — Entrepreneurship & Leadership',  desc: 'Develop entrepreneurial passion and equip students with leadership qualities to manage business ventures successfully.' },
      { title: 'PEO3 — Critical Thinking & Analysis',   desc: 'Foster analytical and research skills for effective problem-solving and decision-making in diverse business environments.' },
      { title: 'PEO4 — Ethics & Social Responsibility', desc: 'Instil professional ethics, human values, and social responsibility in management practices.' },
    ],
    isTitled: true,
  },
  {
    id: 'po',
    tag: 'Graduate Competencies',
    title: 'Programme Outcomes',
    points: [
      { title: 'PO1', desc: 'Exhibit factual and theoretical knowledge of management in general and business in particular.' },
      { title: 'PO2', desc: 'Critically evaluate and analyze Indian and global business environments in different contexts.' },
      { title: 'PO3', desc: 'Recognize their role as a manager, entrepreneur and a leader in a business management.' },
      { title: 'PO4', desc: 'Demonstrate effective communication by presenting ideas and opinions using critical thinking, analysis, and logical reasoning.' },
      { title: 'PO5', desc: 'Practice professional responsibility and ethical standards in academic and workplace environments.' },
    ],
    isTitled: true,
  },
  {
    id: 'pso',
    tag: 'Specialised Competencies',
    title: 'Programme Specific Outcomes',
    points: [
      { title: 'PSO1 — Analytical & Technical Competence',         desc: 'Utilize statistical methods and business analytics tools including Excel, SQL, Python, and BI platforms to transform data into actionable business insights.' },
      { title: 'PSO2 — Data-Driven Strategic Thinking',            desc: 'Evaluate business data, consumer trends, and performance indicators to formulate evidence-based solutions and enhance organizational effectiveness.' },
      { title: 'PSO3 — Ethical Leadership & Entrepreneurial Mindset', desc: 'Exhibit ethical practices, leadership capabilities, and innovative thinking to manage analytics-driven business processes and entrepreneurial ventures in a dynamic digital economy.' },
    ],
    isTitled: true,
  },
  {
    id: 'eligibility',
    tag: 'Admission Requirements',
    title: 'Eligibility Criteria',
    points: [
      { title: null, desc: 'Pass in Class 12 (10+2) in any stream from a recognised board.' },
      { title: null, desc: 'No prior analytics or programming knowledge required.' },
      { title: null, desc: "Selection is based on qualifying marks and the university's criteria for the year. Refer to the current admission notification." },
    ],
    isTitled: true,
  },
];

export default function BBABAProgramDetails() {
  const [active, setActive] = useState(0);
  const sec = SECTIONS[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bap-section{background:#f8f9fc}
        .cl-bap-inner{max-width:1500px;margin:0 auto;padding:90px 5% 110px}
        .cl-bap-grid{display:grid;grid-template-columns:280px 1fr;gap:48px;align-items:start}
        .cl-bap-nav{position:sticky;top:140px}
        .cl-bap-tab{display:flex;align-items:center;gap:12px;padding:15px 18px;border-radius:12px;cursor:pointer;font-weight:700;font-size:.88rem;color:#5a6a8a;transition:all .22s;margin-bottom:4px;border-left:3px solid transparent}
        .cl-bap-tab:hover{background:#fff;color:#001F4C;border-left-color:#e0e4ed;box-shadow:0 2px 12px rgba(0,31,76,.06)}
        .cl-bap-tab-active{background:#001F4C!important;color:#fff!important;border-left-color:#DF5400!important;box-shadow:0 8px 24px rgba(0,31,76,.18)!important}
        .cl-bap-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;flex-shrink:0;transition:all .22s}
        .cl-bap-content{min-width:0}
        .cl-bap-point{display:flex;align-items:flex-start;gap:14px;padding:16px 20px;border-bottom:1px solid #f0f2f7}
        .cl-bap-point:last-child{border-bottom:none}
        .cl-bap-dot{width:7px;height:7px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-bap-point-title{font-weight:700;color:#001F4C;margin-bottom:3px;font-size:.92rem}
        .cl-bap-point-desc{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        @media(max-width:960px){
          .cl-bap-grid{grid-template-columns:1fr;gap:28px}
          .cl-bap-nav{position:static;display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}
          .cl-bap-nav::-webkit-scrollbar{display:none}
          .cl-bap-tab{white-space:nowrap;margin-bottom:0;padding:11px 16px;flex-shrink:0;border-left:none;border-bottom:3px solid transparent;border-radius:10px 10px 0 0}
          .cl-bap-tab:hover{border-left-color:transparent;border-bottom-color:#e0e4ed}
          .cl-bap-tab-active{border-left-color:transparent!important;border-bottom-color:#DF5400!important}
          .cl-bap-num{display:none}
        }
        @media(max-width:560px){.cl-bap-inner{padding:60px 5% 70px}}
      `}} />

      <section className="cl-bap-section">
        <div className="cl-bap-inner">

          <div className="mb-[48px]">
            <div
              className="inline-flex items-center gap-[8px] text-[.72rem] font-bold uppercase tracking-[.12em] mb-[14px] px-[14px] py-[6px] rounded-[20px]"
              style={{ background: '#FFF3D7', color: '#DF5400' }}
            >
              BBA Business Analytics · Academic Framework
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: 'clamp(2.6rem,5vw,4.2rem)',
                color: '#001F4C',
                lineHeight: '.92',
                letterSpacing: '.02em',
              }}
            >
              Program{' '}
              <em className="not-italic" style={{ color: '#DF5400' }}>Details</em>
            </h2>
          </div>

          <div className="cl-bap-grid">
            <nav className="cl-bap-nav">
              {SECTIONS.map((s, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`cl-bap-tab${isActive ? ' cl-bap-tab-active' : ''}`}
                  >
                    <span
                      className="cl-bap-num"
                      style={{
                        background: isActive ? 'rgba(255,255,255,.18)' : '#FFF3D7',
                        color:      isActive ? '#fff'                  : '#DF5400',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.title}
                  </div>
                );
              })}
            </nav>

            <div className="cl-bap-content">
              <div className="mb-[28px]">
                <div className="text-[.7rem] font-bold uppercase tracking-[.1em] mb-[8px]" style={{ color: '#DF5400' }}>
                  {sec.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: 'clamp(1.9rem,3.5vw,2.8rem)',
                    color: '#001F4C',
                    lineHeight: '.95',
                    letterSpacing: '.01em',
                  }}
                >
                  {sec.title}
                </h3>
              </div>
              <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid #e0e4ed', background: '#fff' }}>
                {sec.points.map((item, i) => (
                  <div key={i} className="cl-bap-point">
                    <div className="cl-bap-dot" />
                    <div>
                      {item.title && <div className="cl-bap-point-title">{item.title}</div>}
                      <p className="cl-bap-point-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
