'use client';

import { useState } from 'react';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const SECTIONS = [
  {
    id: 'usps',
    tag: 'Unique Selling Points',
    title: 'USPs',
    description: [
      'Practice based Curriculum to fit into the industry requirements.',
      'Mentoring & Content Delivery by Experienced & qualified Faculty Members and Industry Experts through Guest Lectures and Expert Talks.',
      'Add-on Certification Programs, Value Added Courses and Short Term Courses are conducted regularly for professional development of the students. (More than 500 certifications).',
    ],
    points: [
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
    isDownload: true,
    downloadLabel: 'Download B.Tech Computer Science Course Outcomes',
    // ↓ Replace '#' with the actual PDF URL / path
    downloadHref: '#',
  },
  {
    id: 'program-outcomes',
    tag: 'Graduate Competencies',
    title: 'Program Outcomes',
    description: [
      'Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.',
      'Problem Analysis: Identify, formulate, research literature, and analyze complex Engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
    ],
    points: [
      'Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental considerations.',
      'Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.',
      'Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.',
      'The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.',
      'Environment and Sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for, sustainable development.',
      'Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
      'Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
      'Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large — comprehend and write effective reports, make effective presentations, and give and receive clear instructions.',
      'Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principles and apply these to one\'s own work, as a member and leader in a team, to manage projects in multidisciplinary environments.',
      'Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
    ],
  },
  {
    id: 'pso',
    tag: 'CS-Focused Competencies',
    title: 'Program Specific Outcome',
    description: [
      'PSO1 — Problem Solving Approach: Apply programming paradigms, architectural patterns, algorithmic techniques, relevant applications and augmentation to solve real-world complex problems.',
      'PSO2 — Analysis & Synthesis Techniques: Demonstrate the ability to analyse current systems to understand, change or optimise the solution, and synthesise solutions based on new requirements using existing infrastructure and reusable components.',
    ],
    points: [
      'PSO3 — Reusability & Adaptability Skills: Assimilate, appreciate, utilize, and promote cutting-edge technology to improve reusability, adaptability, and scalability.',
    ],
  },
  {
    id: 'peo',
    tag: 'Long-Term Graduate Goals',
    title: 'Program Educational Objective',
    description: [
      'PEO1 — Computer Science Professional: To equip students with theoretical and applied knowledge, enabling them to solve multidisciplinary real-life problems, becoming computer engineering professionals in programming skills for technology development, deployment, and system implementation.',
      'PEO2 — Entrepreneurship and Leadership: To cultivate engineering practitioners and leaders, solving industry\'s technological problems, demonstrating leadership skills, identifying research gaps and becoming successful entrepreneurs.',
    ],
    points: [
      'PEO3 — Lifelong Learning: To equip students with creative project management skills that help them become lifelong learners by means of continuing education.',
      'PEO4 — Social Awareness and Ethics: To foster awareness, accountability and ethics that lead towards efficient collaboration, economic growth and multidisciplinary interactions.',
    ],
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function CSEProgramDetails() {
  const [active, setActive] = useState(0);
  const sec = SECTIONS[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        /* wrapper */
        .cl-cpd-section{background:#f8f9fc}
        .cl-cpd-inner{max-width:1500px;margin:0 auto;padding:90px 5% 110px}

        /* grid */
        .cl-cpd-grid{display:grid;grid-template-columns:270px 1fr;gap:48px;align-items:start}

        /* tab nav */
        .cl-cpd-nav{position:sticky;top:210px}
        .cl-cpd-tab{display:flex;align-items:center;gap:12px;padding:15px 18px;border-radius:12px;cursor:pointer;font-weight:700;font-size:.88rem;color:#5a6a8a;transition:all .22s;margin-bottom:4px;border-left:3px solid transparent}
        .cl-cpd-tab:hover{background:#fff;color:#001F4C;border-left-color:#e0e4ed;box-shadow:0 2px 12px rgba(0,31,76,.06)}
        .cl-cpd-tab-active{background:#001F4C!important;color:#fff!important;border-left-color:#DF5400!important;box-shadow:0 8px 24px rgba(0,31,76,.18)!important}
        .cl-cpd-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;flex-shrink:0;transition:all .22s}

        /* content */
        .cl-cpd-content{min-width:0}
        .cl-cpd-point{display:flex;align-items:flex-start;gap:14px;padding:15px 20px;border-bottom:1px solid #f0f2f7}
        .cl-cpd-point:last-child{border-bottom:none}
        .cl-cpd-dot{width:7px;height:7px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}

        /* download card */
        .cl-cpd-dl{display:flex;align-items:center;gap:20px;padding:28px 24px;border-radius:16px;border:2px solid #e0e4ed;background:#fff;text-decoration:none;transition:all .25s;cursor:pointer}
        .cl-cpd-dl:hover{border-color:#DF5400;box-shadow:0 12px 36px rgba(223,84,0,.12);transform:translateY(-2px)}

        /* mobile */
        @media(max-width:960px){
          .cl-cpd-grid{grid-template-columns:1fr;gap:28px}
          .cl-cpd-nav{position:static;display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}
          .cl-cpd-nav::-webkit-scrollbar{display:none}
          .cl-cpd-tab{white-space:nowrap;margin-bottom:0;padding:11px 16px;flex-shrink:0;border-left:none;border-bottom:3px solid transparent;border-radius:10px 10px 0 0}
          .cl-cpd-tab:hover{border-left-color:transparent;border-bottom-color:#e0e4ed}
          .cl-cpd-tab-active{border-left-color:transparent!important;border-bottom-color:#DF5400!important}
          .cl-cpd-num{display:none}
        }
        @media(max-width:560px){
          .cl-cpd-inner{padding:60px 5% 70px}
          .cl-cpd-desc-item{font-size:.88rem}
        }
      `}} />

      <section className="cl-cpd-section">
        <div className="cl-cpd-inner">

          {/* ── Section header ── */}
          <div className="mb-[48px]">
            <div
              className="inline-flex items-center gap-[8px] text-[.72rem] font-bold uppercase tracking-[.12em] mb-[14px] px-[14px] py-[6px] rounded-[20px]"
              style={{ background: '#FFF3D7', color: '#DF5400' }}
            >
              CSE · Academic Framework
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

          {/* ── Grid ── */}
          <div className="cl-cpd-grid">

            {/* Tab navigation */}
            <nav className="cl-cpd-nav">
              {SECTIONS.map((s, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`cl-cpd-tab${isActive ? ' cl-cpd-tab-active' : ''}`}
                  >
                    <span
                      className="cl-cpd-num"
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
            <div className="cl-cpd-content">

              {/* Panel label + title */}
              <div className="mb-[28px]">
                <div
                  className="text-[.7rem] font-bold uppercase tracking-[.1em] mb-[8px]"
                  style={{ color: '#DF5400' }}
                >
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

              {/* Download card (Course Outcomes only) */}
              {sec.isDownload && (
                <a
                  href={sec.downloadHref}
                  target="_blank"
                  rel="noopener"
                  className="cl-cpd-dl"
                >
                  <div
                    className="w-[56px] h-[56px] rounded-[14px] flex items-center justify-center text-[1.6rem] flex-shrink-0"
                    style={{ background: '#FFF3D7' }}
                  >
                    📄
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[1rem] leading-[1.4] mb-[4px]" style={{ color: '#001F4C' }}>
                      {sec.downloadLabel}
                    </div>
                    <div className="text-[.8rem]" style={{ color: '#5a6a8a' }}>Click to open · PDF Document</div>
                  </div>
                  <div
                    className="flex-shrink-0 w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[1.1rem]"
                    style={{ background: '#FFF3D7', color: '#DF5400' }}
                  >
                    ↓
                  </div>
                </a>
              )}

              {/* Unified list — description + points, same style */}
              {((sec.description && sec.description.length > 0) || (sec.points && sec.points.length > 0)) && (
                <div
                  className="rounded-[16px] overflow-hidden"
                  style={{ border: '1px solid #e0e4ed', background: '#fff' }}
                >
                  {[...(sec.description || []), ...(sec.points || [])].map((item, i) => (
                    <div key={i} className="cl-cpd-point">
                      <div className="cl-cpd-dot" />
                      <p className="text-[.92rem] leading-[1.75]" style={{ color: '#4a5a7a' }}>{item}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
