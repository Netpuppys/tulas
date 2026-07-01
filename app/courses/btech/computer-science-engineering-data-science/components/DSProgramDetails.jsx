'use client';

import { useState } from 'react';

const SECTIONS = [
  {
    id: 'usps',
    tag: 'Unique Selling Points',
    title: 'USPs',
    points: [
      'Practice based curriculum designed to fit current data science and AI industry requirements.',
      'Mentoring & content delivery by experienced & qualified faculty members and industry experts through guest lectures and expert talks.',
      'Add-on certification programs, value added courses and short term courses conducted regularly for professional development. (More than 500 certifications).',
      '1000+ alumni working with reputed MNCs and government sectors.',
      'Dedicated Data Science & AI lab with high-performance GPU compute for deep learning workloads.',
      'Strong inclination towards research by faculty members & students. (100+ journal & conference publications).',
      'Focus on industry based learning through regular industry interactions, industrial visits, projects and internships.',
      'Funded research projects from AICTE and Uttarakhand Technical University.',
      'Faculty members indulge in regular upskilling through FDPs, workshops and seminars. (175+ FDPs completed).',
    ],
  },
  {
    id: 'course-outcomes',
    tag: 'What Students Achieve',
    title: 'Course Outcomes',
    points: [
      'Apply mathematical, statistical and programming foundations to formulate and solve data-driven problems.',
      'Design and build data pipelines to collect, clean, transform and store structured and unstructured data.',
      'Develop and evaluate machine learning and deep learning models for prediction, classification and clustering.',
      'Apply data visualization and storytelling techniques to communicate insights to technical and business audiences.',
      'Use modern big data and cloud platforms to process and analyse data at scale.',
      'Demonstrate ethical, responsible and privacy-aware practices in handling data.',
    ],
  },
  {
    id: 'program-outcomes',
    tag: 'Graduate Attributes',
    title: 'Program Outcomes',
    points: [
      'Engineering Knowledge: Apply mathematics, statistics, computing and domain knowledge to data science problems.',
      'Problem Analysis: Identify, formulate and analyse complex data problems using first principles.',
      'Design of Solutions: Design data-driven solutions and ML systems that meet specified needs.',
      'Investigation: Use research-based methods and experiments to interpret data and draw valid conclusions.',
      'Modern Tool Usage: Apply modern data science, AI and visualization tools to real-world problems.',
      'Ethics: Apply ethical principles and data-privacy norms in professional practice.',
      'Teamwork & Communication: Function effectively in multidisciplinary teams and communicate insights clearly.',
      'Life-long Learning: Engage in independent and continuous learning in a rapidly evolving field.',
    ],
  },
  {
    id: 'pso',
    tag: 'Specialised Competencies',
    title: 'Program Specific Outcomes',
    points: [
      'Build end-to-end data science solutions — from data acquisition and engineering to model deployment and monitoring (MLOps).',
      'Apply machine learning, deep learning and AI techniques to solve domain problems across finance, healthcare, retail and e-commerce.',
      'Leverage big data, cloud and visualization platforms to derive and communicate actionable business intelligence.',
    ],
  },
  {
    id: 'peo',
    tag: 'Long-Term Goals',
    title: 'Program Educational Objectives',
    points: [
      'Graduates will excel as data science and AI professionals in industry, research or entrepreneurial ventures.',
      'Graduates will apply analytical, computational and ethical skills to deliver data-driven value across domains.',
      'Graduates will pursue higher studies and continuous learning to adapt to emerging technologies.',
      'Graduates will demonstrate leadership, teamwork and effective communication in multidisciplinary environments.',
    ],
  },
];

export default function DSProgramDetails() {
  const [active, setActive] = useState(0);
  const sec = SECTIONS[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dsp-section{background:#f8f9fc}
        .cl-dsp-inner{max-width:1500px;margin:0 auto;padding:90px 5% 110px}
        .cl-dsp-grid{display:grid;grid-template-columns:270px 1fr;gap:48px;align-items:start}
        .cl-dsp-nav{position:sticky;top:140px}
        .cl-dsp-tab{display:flex;align-items:center;gap:12px;padding:15px 18px;border-radius:12px;cursor:pointer;font-weight:700;font-size:.88rem;color:#5a6a8a;transition:all .22s;margin-bottom:4px;border-left:3px solid transparent}
        .cl-dsp-tab:hover{background:#fff;color:#001F4C;border-left-color:#e0e4ed;box-shadow:0 2px 12px rgba(0,31,76,.06)}
        .cl-dsp-tab-active{background:#001F4C!important;color:#fff!important;border-left-color:#DF5400!important;box-shadow:0 8px 24px rgba(0,31,76,.18)!important}
        .cl-dsp-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;flex-shrink:0;transition:all .22s}
        .cl-dsp-content{min-width:0}
        .cl-dsp-point{display:flex;align-items:flex-start;gap:14px;padding:15px 20px;border-bottom:1px solid #f0f2f7}
        .cl-dsp-point:last-child{border-bottom:none}
        .cl-dsp-dot{width:7px;height:7px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        @media(max-width:960px){
          .cl-dsp-grid{grid-template-columns:1fr;gap:28px}
          .cl-dsp-nav{position:static;display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}
          .cl-dsp-nav::-webkit-scrollbar{display:none}
          .cl-dsp-tab{white-space:nowrap;margin-bottom:0;padding:11px 16px;flex-shrink:0;border-left:none;border-bottom:3px solid transparent;border-radius:10px 10px 0 0}
          .cl-dsp-tab:hover{border-left-color:transparent;border-bottom-color:#e0e4ed}
          .cl-dsp-tab-active{border-left-color:transparent!important;border-bottom-color:#DF5400!important}
          .cl-dsp-num{display:none}
        }
        @media(max-width:560px){.cl-dsp-inner{padding:60px 5% 70px}}
      `}} />

      <section className="cl-dsp-section">
        <div className="cl-dsp-inner">

          <div className="mb-[48px]">
            <div
              className="inline-flex items-center gap-[8px] text-[.72rem] font-bold uppercase tracking-[.12em] mb-[14px] px-[14px] py-[6px] rounded-[20px]"
              style={{ background: '#FFF3D7', color: '#DF5400' }}
            >
              Data Science · Academic Framework
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

          <div className="cl-dsp-grid">
            <nav className="cl-dsp-nav">
              {SECTIONS.map((s, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`cl-dsp-tab${isActive ? ' cl-dsp-tab-active' : ''}`}
                  >
                    <span
                      className="cl-dsp-num"
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

            <div className="cl-dsp-content">
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
                  <div key={i} className="cl-dsp-point">
                    <div className="cl-dsp-dot" />
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
