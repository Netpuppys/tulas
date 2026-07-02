'use client';

import { useState } from 'react';

const SECTIONS = [
  {
    id: 'usps',
    tag: 'Why Choose This Program',
    title: 'Program USPs',
    points: [
      { title: 'Build Real AI Systems',                   desc: 'Work on live AI projects, research publications, AI hackathons, Kaggle competitions, and a final AI product capstone.' },
      { title: 'AI-First Curriculum Architecture',        desc: 'Every semester is built around AI — from foundational ML to Generative AI, LLMs, MLOps, and cloud-native AI deployment.' },
      { title: 'Integrated Placement Preparation',        desc: 'Prepare for campus recruitment through AI aptitude training, coding challenges, industry AI projects, and interview readiness.' },
      { title: 'Learn from AI Industry Experts',          desc: 'Interact with AI researchers, ML engineers, and technology leaders through expert sessions, guest lectures, and mentorship.' },
      { title: 'Research & Innovation Focus',             desc: 'Conduct AI research, publish papers, and build innovative AI products through structured research projects and industry collaborations.' },
      { title: 'AI-Native Learning via LEAP',             desc: 'Use LEAP, our AI-native learning platform, to personalize your learning journey and continuously track your progress.' },
      { title: 'AI Hackathons & Competitions',            desc: 'Participate in national AI hackathons, Kaggle competitions, and innovation challenges to build a strong competitive portfolio.' },
      { title: 'Entrepreneurship & AI Ventures',          desc: 'Develop an entrepreneurial mindset to identify AI opportunities, build intelligent products, and launch technology ventures.' },
      { title: 'Life Skills & Professional Growth',       desc: 'Develop workplace communication, ethical AI practices, business awareness, and career readiness aligned with NEP 2020.' },
      { title: 'Industry Certifications Across 2 Years',  desc: 'Graduate with certifications from AWS, Google Cloud, Microsoft Azure, NVIDIA, Hugging Face, and other leading AI technology partners.' },
    ],
  },
  {
    id: 'peo',
    tag: 'Long-Term Graduate Goals',
    title: 'Programme Educational Objectives',
    points: [
      { title: 'PEO1 — AI Professionals',            desc: 'Produce AI and ML professionals capable of solving complex real-world problems through intelligent systems, data-driven solutions, and research.' },
      { title: 'PEO2 — Industry Leadership',         desc: 'Develop AI leaders who can drive AI initiatives across industries including healthcare, finance, retail, education, and government sectors.' },
      { title: 'PEO3 — Research & Innovation',       desc: 'Foster a research mindset and entrepreneurial spirit to contribute to AI advancement, innovation, and responsible AI development.' },
      { title: 'PEO4 — Ethical AI Practice',         desc: 'Instil ethical responsibility, social awareness, and professional values in the design, deployment, and governance of AI systems.' },
    ],
  },
  {
    id: 'po',
    tag: 'Graduate Competencies',
    title: 'Programme Outcomes',
    points: [
      { title: 'PO1', desc: 'Apply advanced AI, machine learning, and deep learning principles to design intelligent systems and applications.' },
      { title: 'PO2', desc: 'Critically evaluate AI models, datasets, and architectures to develop effective, scalable, and ethical AI solutions.' },
      { title: 'PO3', desc: 'Demonstrate professional software engineering practices in building, deploying, and maintaining AI-powered applications.' },
      { title: 'PO4', desc: 'Communicate AI research findings, system designs, and technical insights to diverse technical and non-technical audiences.' },
      { title: 'PO5', desc: 'Practice professional responsibility, ethical AI development, and social accountability in all AI-related work.' },
      { title: 'PO6', desc: 'Continuously adapt to emerging AI technologies, tools, and methodologies throughout professional careers.' },
    ],
  },
  {
    id: 'pso',
    tag: 'Specialised Competencies',
    title: 'Programme Specific Outcomes',
    points: [
      { title: 'PSO1 — AI Engineering Competence',      desc: 'Develop enterprise-grade AI applications using machine learning, deep learning, generative AI, and modern AI frameworks including TensorFlow, PyTorch, and LangChain.' },
      { title: 'PSO2 — Data-Driven Research Thinking',  desc: 'Build and evaluate ML pipelines, conduct AI research, and create intelligent solutions that address business and societal challenges at scale.' },
      { title: 'PSO3 — Ethical Leadership in AI',       desc: 'Exhibit ethical AI practices, technical leadership, and entrepreneurial thinking to design responsible AI products in a rapidly evolving AI economy.' },
    ],
  },
  {
    id: 'eligibility',
    tag: 'Admission Requirements',
    title: 'Eligibility Criteria',
    points: [
      { title: null, desc: "Bachelor's degree (BCA, B.Sc. Computer Science, B.Tech, or equivalent) from a recognised university." },
      { title: null, desc: 'Minimum 50% aggregate marks in the qualifying degree.' },
      { title: null, desc: 'Prior programming knowledge is an advantage but not mandatory — our foundation modules support all learners.' },
      { title: null, desc: "Selection is based on qualifying marks and the university's criteria for the year. Refer to the current admission notification." },
    ],
  },
];

export default function MCAMLProgramDetails() {
  const [active, setActive] = useState(0);
  const sec = SECTIONS[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mmlpd-section{background:#f8f9fc}
        .cl-mmlpd-inner{max-width:1500px;margin:0 auto;padding:90px 5% 110px}
        .cl-mmlpd-grid{display:grid;grid-template-columns:280px 1fr;gap:48px;align-items:start}
        .cl-mmlpd-nav{position:sticky;top:140px}
        .cl-mmlpd-tab{display:flex;align-items:center;gap:12px;padding:15px 18px;border-radius:12px;cursor:pointer;font-weight:700;font-size:.88rem;color:#5a6a8a;transition:all .22s;margin-bottom:4px;border-left:3px solid transparent}
        .cl-mmlpd-tab:hover{background:#fff;color:#001F4C;border-left-color:#e0e4ed;box-shadow:0 2px 12px rgba(0,31,76,.06)}
        .cl-mmlpd-tab-active{background:#001F4C!important;color:#fff!important;border-left-color:#DF5400!important;box-shadow:0 8px 24px rgba(0,31,76,.18)!important}
        .cl-mmlpd-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;flex-shrink:0;transition:all .22s}
        .cl-mmlpd-content{min-width:0}
        .cl-mmlpd-point{display:flex;align-items:flex-start;gap:14px;padding:16px 20px;border-bottom:1px solid #f0f2f7}
        .cl-mmlpd-point:last-child{border-bottom:none}
        .cl-mmlpd-dot{width:7px;height:7px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mmlpd-point-title{font-weight:700;color:#001F4C;margin-bottom:3px;font-size:.92rem}
        .cl-mmlpd-point-desc{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        @media(max-width:960px){
          .cl-mmlpd-grid{grid-template-columns:1fr;gap:28px}
          .cl-mmlpd-nav{position:static;display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}
          .cl-mmlpd-nav::-webkit-scrollbar{display:none}
          .cl-mmlpd-tab{white-space:nowrap;margin-bottom:0;padding:11px 16px;flex-shrink:0;border-left:none;border-bottom:3px solid transparent;border-radius:10px 10px 0 0}
          .cl-mmlpd-tab:hover{border-left-color:transparent;border-bottom-color:#e0e4ed}
          .cl-mmlpd-tab-active{border-left-color:transparent!important;border-bottom-color:#DF5400!important}
          .cl-mmlpd-num{display:none}
        }
        @media(max-width:560px){.cl-mmlpd-inner{padding:60px 5% 70px}}
      `}} />

      <section className="cl-mmlpd-section" id="details">
        <div className="cl-mmlpd-inner">

          <div className="mb-[48px]">
            <div
              className="inline-flex items-center gap-[8px] text-[.72rem] font-bold uppercase tracking-[.12em] mb-[14px] px-[14px] py-[6px] rounded-[20px]"
              style={{ background: '#FFF3D7', color: '#DF5400' }}
            >
              MCA Artificial Intelligence &amp; Machine Learning · Academic Framework
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

          <div className="cl-mmlpd-grid">
            <nav className="cl-mmlpd-nav">
              {SECTIONS.map((s, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`cl-mmlpd-tab${isActive ? ' cl-mmlpd-tab-active' : ''}`}
                  >
                    <span
                      className="cl-mmlpd-num"
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

            <div className="cl-mmlpd-content">
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
                  <div key={i} className="cl-mmlpd-point">
                    <div className="cl-mmlpd-dot" />
                    <div>
                      {item.title && <div className="cl-mmlpd-point-title">{item.title}</div>}
                      <p className="cl-mmlpd-point-desc">{item.desc}</p>
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
