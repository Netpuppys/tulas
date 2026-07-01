'use client';

import { useState } from 'react';

const SECTIONS = [
  {
    id: 'usps',
    tag: 'Why Choose This Program',
    title: 'Program USPs',
    points: [
      { title: 'You run real campaigns', desc: 'Build a portfolio of real marketing work through live campaigns, industry projects, internships and your final capstone.' },
      { title: 'Core + Specialisation Architecture', desc: 'Build a strong foundation in digital marketing before specialising in Business Analytics & Data Strategy, Finance & FinTech, or Operations & Supply Chain.' },
      { title: 'Integrated Placement Preparation', desc: 'Prepare for campus recruitment through dedicated aptitude, analytics and certification training aligned with industry hiring standards.' },
      { title: 'Meet founders & marketing leaders', desc: 'Learn directly from founders, CMOs and digital marketing leaders through guest lectures, expert sessions and industry interactions.' },
      { title: '100% hands-on, practical-driven', desc: 'Every semester includes practical deliverables, live campaigns and real-world projects that build job-ready skills.' },
      { title: 'AI-native learning via LEAP', desc: 'Learn through LEAP, our AI-native learning platform that personalises your learning journey and tracks your progress in real time.' },
      { title: 'Startup & marketing hackathons', desc: 'Participate in marketing hackathons, startup challenges and brand case competitions while learning from experienced industry mentors.' },
      { title: 'Entrepreneurship from 2nd Year', desc: 'Develop an entrepreneurial mindset through idea validation, innovation and brand-building from your second year onwards.' },
      { title: 'Life Skills & Professional Growth', desc: 'Build workplace confidence through business communication, digital ethics, financial literacy and career readiness aligned with NEP 2020.' },
      { title: 'Industry certifications across 3 years', desc: 'Earn globally recognised certifications from Google, Meta, HubSpot, IIT Kanpur E&ICT Academy and other leading technology partners.' },
    ],
    isTitled: true,
  },
  {
    id: 'peo',
    tag: 'Long-Term Graduate Goals',
    title: 'Programme Educational Objectives',
    points: [
      { title: 'PEO1', desc: 'Build successful careers in digital marketing, branding, performance marketing, social media management, and e-commerce across agencies, startups, corporate organizations, and global brands.' },
      { title: 'PEO2', desc: 'Enable practical marketing capability — planning and executing campaigns, measuring performance, and using AI tools to work more effectively.' },
      { title: 'PEO3', desc: 'Develop an understanding of brand management, consumer behaviour, and how marketing decisions connect to business outcomes.' },
      { title: 'PEO4', desc: 'Instil professional ethics, responsible AI use in marketing, consumer privacy awareness, and honest brand communication practices.' },
    ],
    isTitled: true,
  },
  {
    id: 'po',
    tag: 'Graduate Competencies',
    title: 'Programme Outcomes',
    points: [
      { title: 'PO1 Marketing Knowledge', desc: 'Apply marketing management concepts — brand equity, consumer behaviour, digital strategy — to real business and campaign contexts.' },
      { title: 'PO2 Problem Analysis', desc: 'Analyse campaign data, consumer feedback, and market research to identify what is working and recommend what to change.' },
      { title: 'PO3 Design & Execution', desc: 'Plan and execute digital campaigns across social, search, email, and paid channels with measurable outcomes.' },
      { title: 'PO4 AI Tool Usage', desc: 'Use AI tools for content, campaign optimisation, and audience research — responsibly and with an understanding of their limitations.' },
      { title: 'PO5 Communication', desc: 'Communicate campaign strategies, performance reports, and brand recommendations clearly to clients, managers, and teams.' },
      { title: 'PO6 Collaboration', desc: 'Work effectively in marketing teams, agency environments, and cross-functional projects with design, sales, and product teams.' },
      { title: 'PO7 Ethics', desc: 'Apply consumer privacy, responsible advertising, truthful claims, and responsible AI use in all marketing work.' },
      { title: 'PO8 Project Management', desc: 'Manage marketing projects — timelines, budgets, briefs, and deliverables — from planning to execution and reporting.' },
      { title: 'PO9 Entrepreneurship', desc: 'Apply digital marketing skills to build, launch, and grow a brand — including D2C, social commerce, and startup contexts.' },
      { title: 'PO10 Life-Long Learning', desc: 'Engage continuously with the evolving digital marketing, AI, and social media landscape.' },
    ],
    isTitled: true,
  },
  {
    id: 'pso',
    tag: 'Specialised Competencies',
    title: 'Programme Specific Outcomes',
    points: [
      { title: 'PSO1', desc: 'Plan and execute live digital marketing campaigns — objectives, creatives, budget, and performance reporting to a client or manager.' },
      { title: 'PSO2', desc: 'Use AI tools for marketing — content creation, audience targeting, campaign analysis, and brand monitoring — as a working professional would.' },
      { title: 'PSO3', desc: 'Build and present a brand strategy — positioning, target audience, messaging, and campaign plan — for a real product or company.' },
      { title: 'PSO4', desc: 'Analyse campaign performance using analytics platforms and present data-backed recommendations to improve results.' },
      { title: 'PSO5', desc: 'Graduate with a verified portfolio of live campaigns and brand projects that demonstrate real marketing skills to employers and agencies.' },
    ],
    isTitled: true,
  },
  {
    id: 'eligibility',
    tag: 'Admission Requirements',
    title: 'Eligibility Criteria',
    points: [
      { title: null, desc: 'Pass in Class 12 (10+2) in any stream from a recognised board.' },
      { title: null, desc: 'No prior marketing or technology knowledge required.' },
      { title: null, desc: 'Selection is based on qualifying marks and the university\'s criteria for the year — see the current admission notification.' },
    ],
    isTitled: true,
  },
];

export default function BBADMProgramDetails() {
  const [active, setActive] = useState(0);
  const sec = SECTIONS[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmp-section{background:#f8f9fc}
        .cl-dmp-inner{max-width:1500px;margin:0 auto;padding:90px 5% 110px}
        .cl-dmp-grid{display:grid;grid-template-columns:280px 1fr;gap:48px;align-items:start}
        .cl-dmp-nav{position:sticky;top:140px}
        .cl-dmp-tab{display:flex;align-items:center;gap:12px;padding:15px 18px;border-radius:12px;cursor:pointer;font-weight:700;font-size:.88rem;color:#5a6a8a;transition:all .22s;margin-bottom:4px;border-left:3px solid transparent}
        .cl-dmp-tab:hover{background:#fff;color:#001F4C;border-left-color:#e0e4ed;box-shadow:0 2px 12px rgba(0,31,76,.06)}
        .cl-dmp-tab-active{background:#001F4C!important;color:#fff!important;border-left-color:#DF5400!important;box-shadow:0 8px 24px rgba(0,31,76,.18)!important}
        .cl-dmp-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;flex-shrink:0;transition:all .22s}
        .cl-dmp-content{min-width:0}
        .cl-dmp-point{display:flex;align-items:flex-start;gap:14px;padding:16px 20px;border-bottom:1px solid #f0f2f7}
        .cl-dmp-point:last-child{border-bottom:none}
        .cl-dmp-dot{width:7px;height:7px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-dmp-point-title{font-weight:700;color:#001F4C;margin-bottom:3px;font-size:.92rem}
        .cl-dmp-point-desc{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        @media(max-width:960px){
          .cl-dmp-grid{grid-template-columns:1fr;gap:28px}
          .cl-dmp-nav{position:static;display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}
          .cl-dmp-nav::-webkit-scrollbar{display:none}
          .cl-dmp-tab{white-space:nowrap;margin-bottom:0;padding:11px 16px;flex-shrink:0;border-left:none;border-bottom:3px solid transparent;border-radius:10px 10px 0 0}
          .cl-dmp-tab:hover{border-left-color:transparent;border-bottom-color:#e0e4ed}
          .cl-dmp-tab-active{border-left-color:transparent!important;border-bottom-color:#DF5400!important}
          .cl-dmp-num{display:none}
        }
        @media(max-width:560px){.cl-dmp-inner{padding:60px 5% 70px}}
      `}} />

      <section className="cl-dmp-section">
        <div className="cl-dmp-inner">

          <div className="mb-[48px]">
            <div
              className="inline-flex items-center gap-[8px] text-[.72rem] font-bold uppercase tracking-[.12em] mb-[14px] px-[14px] py-[6px] rounded-[20px]"
              style={{ background: '#FFF3D7', color: '#DF5400' }}
            >
              BBA Digital Marketing · Academic Framework
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

          <div className="cl-dmp-grid">
            <nav className="cl-dmp-nav">
              {SECTIONS.map((s, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`cl-dmp-tab${isActive ? ' cl-dmp-tab-active' : ''}`}
                  >
                    <span
                      className="cl-dmp-num"
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

            <div className="cl-dmp-content">
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
                  <div key={i} className="cl-dmp-point">
                    <div className="cl-dmp-dot" />
                    <div>
                      {item.title && <div className="cl-dmp-point-title">{item.title}</div>}
                      <p className="cl-dmp-point-desc">{item.desc}</p>
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
