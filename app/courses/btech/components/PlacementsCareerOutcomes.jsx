'use client';

import { useState } from 'react';
import HiringPartnerBtech from './HiringPartnerBtech';
import LandingAlumniSuccessStories from '@/app/department-of-engineering/Component/LandingAlumniSuccessStories';
import BtechStudents from './BtechStudents';

const ACH_CARDS = [
  { num: '₹60 LPA',  label: 'Highest Package',    hl: true  },
  { num: '1000+',    label: 'Internships',          hl: false },
  { num: '500+',     label: 'Recruiters',           hl: false },
  { num: '3500+',    label: 'Placement Offers',     hl: false },
  { num: '250+',     label: 'Corporate Partners',   hl: false },
];

const SECTORS = ['All Sectors', 'Technology & IT', 'Consulting', 'Manufacturing', 'Engineering', 'BFSI', 'Emerging Tech'];

const RECRUITERS = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini', 'HCL', 'Deloitte', 'Amazon', 'Tech Mahindra', 'IBM', 'Many More'];

const SUCCESS = [
  { img: 'assets/ABHI0641.JPG', pkg: 'Top Offer',         role: 'Software Engineer',       quote: '"The AI-integrated curriculum gave me a real edge in interviews."' },
  { img: 'assets/ABHI0602.JPG', pkg: 'Multiple Offers',   role: 'Data Scientist',          quote: '"Internships through Tulas turned into a full-time role."' },
  { img: 'assets/ABHI0044.JPG', pkg: 'Internship → PPO',  role: 'Cyber Security Analyst',  quote: '"Hands-on labs prepared me for real-world security work."' },
  { img: 'assets/ABHI0960.JPG', pkg: 'Alumni',            role: 'Mechanical Design Engineer', quote: '"Live projects gave me the confidence to lead from day one."' },
];

const TCCI_ITEMS = ['Aptitude Training', 'Mock Interviews', 'Resume Building', 'Communication Skills', 'Corporate Mentorship', 'Industry Readiness'];

export default function PlacementsCareerOutcomes() {
  const [activeSector, setActiveSector] = useState('All Sectors');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-pc-ach{display:grid;grid-template-columns:repeat(5,1fr);gap:20px;margin-bottom:70px}
        .cl-pc-rec{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}
        .cl-pc-success{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:50px}
        .cl-pc-tcci::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 80% 30%,rgba(223,84,0,.18),transparent 55%);pointer-events:none}
        .cl-pc-success-card:hover .cl-pc-simg img{transform:scale(1.08)}
        @media(max-width:1200px){.cl-pc-ach{grid-template-columns:repeat(3,1fr)}.cl-pc-rec{grid-template-columns:repeat(4,1fr)}.cl-pc-success{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){.cl-pc-ach{grid-template-columns:repeat(2,1fr)}.cl-pc-rec{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){.cl-pc-ach{grid-template-columns:1fr}.cl-pc-rec{grid-template-columns:repeat(2,1fr)}.cl-pc-success{grid-template-columns:1fr}}
      `}} />

      <section id="placements" className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]" style={{ background: '#f8f9fc' }}>
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
            Internships, Placements<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>&amp; Career Success</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Engineering education at Tulas translates directly into real opportunities — with strong packages, multiple offers, and dedicated career support through TCCI.
          </p>
        </div>

        {/* Achievement grid */}
        <div className="cl-pc-ach">
          {ACH_CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-[18px] py-[34px] px-[22px] text-center transition-all duration-350 cursor-default"
              style={{
                background: card.hl ? 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)' : '#001F4C',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 42px rgba(0,31,76,.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <span
                className="block mb-[8px] leading-[1]"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.8rem', color: card.hl ? '#fff' : '#FFF3D7' }}
              >
                {card.num}
              </span>
              <span className="text-[.84rem] font-semibold" style={{ color: 'rgba(255,255,255,.8)' }}>{card.label}</span>
            </div>
          ))}
        </div>

        {/* Recruiters block */}
        <div
          className="rounded-[20px] p-[48px] max-[640px]:p-[28px] mb-[50px]"
          style={{ background: '#fff', boxShadow: '0 12px 36px rgba(0,31,76,.08)' }}
        >
          {/* <h3 className="text-center text-[1.4rem] font-extrabold mb-[8px]" style={{ color: '#001F4C' }}>Our Engineering Recruiters</h3>
          <p className="text-center text-[.95rem] mb-[36px]" style={{ color: '#5a6a8a' }}>
            Trusted by leading organizations across technology, consulting, manufacturing and emerging tech.
          </p> */}

          <HiringPartnerBtech/>

          {/* Sector filters */}
          {/* <div className="flex gap-[10px] justify-center flex-wrap mb-[34px]">
            {SECTORS.map((sector, i) => (
              <button
                key={i}
                onClick={() => setActiveSector(sector)}
                className="px-[18px] py-[8px] rounded-[20px] text-[.78rem] font-bold cursor-pointer transition-all duration-250"
                style={{
                  background:   activeSector === sector ? '#001F4C' : '#f8f9fc',
                  color:        activeSector === sector ? '#fff'    : '#001F4C',
                  border:       activeSector === sector ? '1.5px solid #001F4C' : '1.5px solid #e0e4ed',
                }}
              >
                {sector}
              </button>
            ))}
          </div> */}

          {/* Recruiter logos */}
          {/* <div className="cl-pc-rec">
            {RECRUITERS.map((name, i) => (
              <div
                key={i}
                className="rounded-[12px] h-[88px] flex items-center justify-center font-extrabold text-[.95rem] text-center px-[8px] transition-all duration-300 cursor-default"
                style={{
                  background: '#f8f9fc',
                  border: '1.5px solid #e0e4ed',
                  color: '#001F4C',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.color = '#DF5400'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 26px rgba(223,84,0,.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.color = '#001F4C'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                {name}
              </div>
            ))}
          </div> */}
        </div>

        {/* Success row */}
        {/* <div className="cl-pc-success">
          {SUCCESS.map((s, i) => (
            <div
              key={i}
              className="cl-pc-success-card rounded-[18px] overflow-hidden transition-all duration-400"
              style={{ background: '#fff', border: '1px solid #e0e4ed' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 42px rgba(223,84,0,.14)'; e.currentTarget.style.borderColor = '#DF5400'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '#e0e4ed'; }}
            >
              <div className="cl-pc-simg relative h-[230px] overflow-hidden">
                <img src={s.img} alt="Placed student" className="w-full h-full object-cover transition-transform duration-600" />
                <span
                  className="absolute top-[14px] right-[14px] px-[14px] py-[7px] rounded-[18px] text-[.82rem] font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)' }}
                >
                  {s.pkg}
                </span>
              </div>
              <div className="p-[22px]">
                <h4 className="font-extrabold text-[1.05rem] mb-[4px]" style={{ color: '#001F4C' }}>Student Name</h4>
                <p className="text-[.82rem] font-semibold mb-[10px]" style={{ color: '#DF5400' }}>{s.role}</p>
                <p className="text-[.85rem] leading-[1.7] italic" style={{ color: '#5a6a8a' }}>{s.quote}</p>
              </div>
            </div>
          ))}
        </div> */}

        <BtechStudents/>

        {/* TCCI strip */}
        <div
          className="cl-pc-tcci relative rounded-[20px] p-[44px] max-[640px]:p-[28px] text-white overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)' }}
        >
          <div className="relative z-[2]">
            <h3 className="text-[1.5rem] font-extrabold mb-[8px]">Powered by TCCI — Tulas Career Catalyst Initiative</h3>
            <p className="text-[.95rem] mb-[28px]" style={{ color: 'rgba(255,255,255,.8)' }}>
              Corporate exposure and career development woven through your entire engineering journey.
            </p>
            <div className="flex flex-wrap gap-[12px]">
              {TCCI_ITEMS.map((item, i) => (
                <span
                  key={i}
                  className="px-[20px] py-[11px] rounded-[30px] text-[.86rem] font-semibold"
                  style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
