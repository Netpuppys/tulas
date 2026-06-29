'use client';

import { useState } from 'react';

const SECTIONS = [
  {
    id: 'usps',
    tag: 'Unique Selling Points',
    title: 'USPs',
    points: [
      'Practice based Curriculum to fit into the industry requirements.',
      'Mentoring & Content Delivery by Experienced & qualified Faculty Members and Industry Experts through Guest Lectures and Expert Talks.',
      'Add-on Certification Programs, Value Added Courses and Short Term Courses are conducted regularly for professional development of the students. (More than 500 certifications).',
      '1000+ Alumni working with reputed MNCs and Government Sectors.',
      'Well qualified faculty with core teaching & industry experience.',
      'Strong inclination towards research by faculty members & students. (100+ journal & conference publications).',
      'Focus on Industry based learning through regular industry interactions, industrial visits, projects and internships.',
      '12 Patents published by faculty members.',
      'Funded Research projects from AICTE, TEQIP-III, Uttarakhand Technical University.',
      'Faculty members indulge in regular upskilling through FDPs, Workshops and Seminars. (175+ FDPs completed).',
    ],
  },
  {
    id: 'course-outcomes',
    tag: 'Academic Deliverables',
    title: 'Course Outcomes',
    points: [
      'Apply core networking, operating system and cryptographic concepts to design secure systems.',
      'Identify, analyze and exploit vulnerabilities through structured penetration testing methodologies.',
      'Implement defensive controls, monitoring and incident response in security operations.',
      'Conduct digital forensic investigations and malware analysis on compromised systems.',
      'Secure cloud, web and application environments using DevSecOps practices.',
    ],
  },
  {
    id: 'program-outcomes',
    tag: 'Graduate Competencies',
    title: 'Program Outcomes',
    points: [
      'Engineering knowledge: apply mathematics, computing and security fundamentals to complex problems.',
      'Problem analysis: identify, formulate and analyze security problems with research-based methods.',
      'Modern tool usage: select and apply appropriate security tools and frameworks.',
      'Ethics: apply professional ethics and responsibilities in cyber security practice.',
      'Lifelong learning: recognize the need for and engage in continuous skill development.',
    ],
  },
  {
    id: 'pso',
    tag: 'CS-Focused Competencies',
    title: 'Program Specific Outcome',
    points: [
      'Design and evaluate secure network and system architectures against real-world threats.',
      'Perform ethical hacking, vulnerability assessment and penetration testing on enterprise systems.',
      'Lead detection, response and recovery across security operations and forensics.',
    ],
  },
  {
    id: 'peo',
    tag: 'Long-Term Graduate Goals',
    title: 'Program Educational Objective',
    points: [
      'Graduates will excel as security professionals in industry, government and research roles.',
      'Graduates will adapt to evolving threats through continuous learning and certification.',
      'Graduates will demonstrate ethical, professional and leadership qualities in their careers.',
    ],
  },
];

export default function CyberSecProgramDetails() {
  const [active, setActive] = useState(0);
  const sec = SECTIONS[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cyp-section{background:#f8f9fc}
        .cl-cyp-inner{max-width:1500px;margin:0 auto;padding:90px 5% 110px}

        .cl-cyp-grid{display:grid;grid-template-columns:270px 1fr;gap:48px;align-items:start}

        .cl-cyp-nav{position:sticky;top:140px}
        .cl-cyp-tab{display:flex;align-items:center;gap:12px;padding:15px 18px;border-radius:12px;cursor:pointer;font-weight:700;font-size:.88rem;color:#5a6a8a;transition:all .22s;margin-bottom:4px;border-left:3px solid transparent}
        .cl-cyp-tab:hover{background:#fff;color:#001F4C;border-left-color:#e0e4ed;box-shadow:0 2px 12px rgba(0,31,76,.06)}
        .cl-cyp-tab-active{background:#001F4C!important;color:#fff!important;border-left-color:#DF5400!important;box-shadow:0 8px 24px rgba(0,31,76,.18)!important}
        .cl-cyp-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;flex-shrink:0;transition:all .22s}

        .cl-cyp-content{min-width:0}
        .cl-cyp-point{display:flex;align-items:flex-start;gap:14px;padding:15px 20px;border-bottom:1px solid #f0f2f7}
        .cl-cyp-point:last-child{border-bottom:none}
        .cl-cyp-dot{width:7px;height:7px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}

        @media(max-width:960px){
          .cl-cyp-grid{grid-template-columns:1fr;gap:28px}
          .cl-cyp-nav{position:static;display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}
          .cl-cyp-nav::-webkit-scrollbar{display:none}
          .cl-cyp-tab{white-space:nowrap;margin-bottom:0;padding:11px 16px;flex-shrink:0;border-left:none;border-bottom:3px solid transparent;border-radius:10px 10px 0 0}
          .cl-cyp-tab:hover{border-left-color:transparent;border-bottom-color:#e0e4ed}
          .cl-cyp-tab-active{border-left-color:transparent!important;border-bottom-color:#DF5400!important}
          .cl-cyp-num{display:none}
        }
        @media(max-width:560px){
          .cl-cyp-inner{padding:60px 5% 70px}
        }
      `}} />

      <section className="cl-cyp-section">
        <div className="cl-cyp-inner">

          {/* Header */}
          <div className="mb-[48px]">
            <div
              className="inline-flex items-center gap-[8px] text-[.72rem] font-bold uppercase tracking-[.12em] mb-[14px] px-[14px] py-[6px] rounded-[20px]"
              style={{ background: '#FFF3D7', color: '#DF5400' }}
            >
              Cyber Security · Academic Framework
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

          <div className="cl-cyp-grid">
            {/* Tab nav */}
            <nav className="cl-cyp-nav">
              {SECTIONS.map((s, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`cl-cyp-tab${isActive ? ' cl-cyp-tab-active' : ''}`}
                  >
                    <span
                      className="cl-cyp-num"
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

            {/* Content panel */}
            <div className="cl-cyp-content">
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
                  <div key={i} className="cl-cyp-point">
                    <div className="cl-cyp-dot" />
                    <p className="text-[.92rem] leading-[1.75]" style={{ color: '#4a5a7a' }}>{item}</p>
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
