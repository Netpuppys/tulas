'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const SCHOOLS = [
  {
    id: 'management', ic: 'MG', label: 'School of Management',
    titleNormal: 'School of', titleOrange: 'Management',
    intro: 'Industry-aligned business programs that build leadership, analytics and entrepreneurial capability for the modern workplace.',
    programs: [
      {
        level: 'ug', name: 'Bachelor of Business Administration (BBA)',
        href: 'https://tulas.edu.in/courses/bba',
        levelLabel: 'Undergraduate · BBA', tracksLabel: 'Specialized Tracks',
        tracks: [
          { label: 'BBA', href: 'https://tulas.edu.in/courses/bba' },
          { label: 'BBA Digital Marketing', href: 'https://tulas.edu.in/courses/bba' },
          { label: 'BBA Business Analytics', href: 'https://tulas.edu.in/courses/bba' },
        ],
        duration: '3 Years',
        elig: '10+2 or equivalent examination from a recognised board in any stream.',
        feesKey: 'BBA',
      },
      {
        level: 'pg', name: 'Master of Business Administration (MBA)',
        href: 'https://tulas.edu.in/courses/mba',
        levelLabel: 'Postgraduate · MBA', tracksLabel: 'Specialized Tracks',
        tracks: [
          { label: 'Marketing',              href: 'https://tulas.edu.in/courses/mba/marketing' },
          { label: 'Finance',                href: 'https://tulas.edu.in/courses/mba/finance' },
          { label: 'Human Resource Mgmt.',   href: 'https://tulas.edu.in/courses/mba/human-resource-managment' },
          { label: 'International Business', href: 'https://tulas.edu.in/courses/mba/international-business' },
          { label: 'Digital Marketing',      href: 'https://tulas.edu.in/courses/mba/digital-marketing' },
          { label: 'Business Analytics',     href: 'https://tulas.edu.in/courses/mba/business-analytics' },
          { label: 'Agri-Business Mgmt.',    href: 'https://tulas.edu.in/courses/mba/agri-business' },
        ],
        duration: '2 Years',
        elig: 'Graduation in any discipline with minimum required marks.',
        feesKey: 'MBA',
      },
    ],
  },
  {
    id: 'engineering', ic: 'EN', label: 'Department of Engineering',
    titleNormal: 'Department of', titleOrange: 'Engineering',
    intro: 'Core and specialized engineering disciplines with modern labs, hands-on projects and industry exposure — preparing students for Industry 4.0 careers.',
    programs: [
      {
        level: 'ug', name: 'B.Tech',
        href: 'https://tulas.edu.in/courses/btech/',
        levelLabel: 'Undergraduate · B.Tech', tracksLabel: 'Branches & Specializations',
        tracks: [
          { label: 'Civil Engineering',             href: 'https://tulas.edu.in/courses/btech/civil-engineering/' },
          { label: 'Mechanical Engineering',        href: 'https://tulas.edu.in/courses/btech/mechanical-engineering/' },
          { label: 'Electronics & Comm. (ECE)',     href: 'https://tulas.edu.in/courses/btech/electronics-and-communication-engg' },
          { label: 'Electrical & Electronics (EEE)',href: 'https://tulas.edu.in/courses/btech/electrical-and-electronics-engg/' },
          { label: 'Computer Science (CSE)',        href: 'https://tulas.edu.in/courses/btech/computer-science' },
          { label: 'CSE – AI & ML',                href: 'https://tulas.edu.in/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning' },
          { label: 'CSE – Cyber Security',         href: 'https://tulas.edu.in/courses/btech/computer-science-engineering-cyber-security' },
          { label: 'CSE – Data Science',           href: 'https://tulas.edu.in/courses/btech/computer-science-engineering-data-science' },
          { label: 'CSE – Full Stack Development', href: 'https://tulas.edu.in/courses/btech/computer-science' },
        ],
        duration: '4 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Mathematics from a recognised board.',
        feesKey: 'B.Tech',
      },
      {
        level: 'pg', name: 'M.Tech',
        href: 'https://tulas.edu.in/mtech',
        levelLabel: 'Postgraduate · M.Tech', tracksLabel: 'Program',
        tracks: [{ label: 'Master of Technology program', none: true }],
        duration: '2 Years',
        elig: 'B.Tech / B.E. in relevant discipline with qualifying entrance requirements.',
        feesKey: 'M.Tech',
      },
      {
        level: 'diploma', name: 'Diploma in Engineering',
        href: '#',
        levelLabel: 'Diploma', tracksLabel: 'Branches Offered',
        tracks: [
          { label: 'Civil Engineering',            href: 'https://tulas.edu.in/diploma-in-civil-engineering' },
          { label: 'Mechanical Engineering',       href: 'https://tulas.edu.in/diploma-mechanical-engineering' },
          { label: 'Computer Science Engineering', href: 'https://tulas.edu.in/diploma-computer-science-engineering' },
        ],
        duration: '3 Years',
        elig: 'Passed 10th / SSC examination from a recognised board.',
        feesKey: 'Engineering Diploma',
      },
    ],
  },
  {
    id: 'commerce', ic: 'CM', label: 'Department of Commerce',
    titleNormal: 'Department of', titleOrange: 'Commerce',
    intro: 'Strong foundations in commerce, finance and accounting with pathways into professional and corporate careers.',
    programs: [
      {
        level: 'ug', name: 'Bachelor of Commerce (B.Com)',
        href: 'https://tulas.edu.in/courses/bcom/',
        levelLabel: 'Undergraduate · B.Com', tracksLabel: 'Programs Offered',
        tracks: [
          { label: 'B.Com',        href: 'https://tulas.edu.in/courses/bcom/' },
          { label: 'B.Com (Hons.)', href: 'https://tulas.edu.in/courses/bcom/' },
        ],
        duration: '3 Years',
        elig: '10+2 or equivalent examination from a recognised board.',
        feesKey: 'B.Com',
      },
    ],
  },
  {
    id: 'computing', ic: 'CA', label: 'Dept. of Computer Applications',
    titleNormal: 'Dept. of', titleOrange: 'Computer Applications',
    intro: 'Application-focused computing programs designed for the modern tech industry, with specializations in AI, ML and full stack software development.',
    programs: [
      {
        level: 'ug', name: 'Bachelor of Computer Applications (BCA)',
        href: 'https://tulas.edu.in/courses/bca/',
        levelLabel: 'Undergraduate · BCA', tracksLabel: 'Specialized Tracks',
        tracks: [
          { label: 'Full Stack Software Development',        href: 'https://tulas.edu.in/courses/bca/' },
          { label: 'Artificial Intelligence & ML', href: 'https://tulas.edu.in/courses/bca/' },
        ],
        duration: '3 Years',
        elig: '10+2 or equivalent examination from a recognised board in any stream.',
        feesKey: 'BCA',
      },
      {
        level: 'pg', name: 'Master of Computer Applications (MCA)',
        href: 'https://tulas.edu.in/courses/mca',
        levelLabel: 'Postgraduate · MCA', tracksLabel: 'Specialized Tracks',
        tracks: [
          { label: 'Full Stack Software Development',        href: 'https://tulas.edu.in/courses/mca' },
          { label: 'Artificial Intelligence & ML', href: 'https://tulas.edu.in/courses/mca' },
        ],
        duration: '2 Years',
        elig: 'Graduation with Mathematics at 10+2 or graduation level.',
        feesKey: 'MCA',
      },
    ],
  },
  {
    id: 'media', ic: 'MC', label: 'Dept. of Mass Comm. & Journalism',
    titleNormal: 'Dept. of Mass Comm. &', titleOrange: 'Journalism',
    intro: 'Creative, hands-on journalism and mass communication programs for the digital media age.',
    programs: [
      {
        level: 'ug', name: 'Journalism & Mass Communication',
        href: 'https://tulas.edu.in/courses/bjmc/',
        levelLabel: 'Undergraduate · JMC', tracksLabel: 'Programs Offered',
        tracks: [
          { label: 'BAJMC',           href: 'https://tulas.edu.in/courses/bjmc/' },
          { label: 'BA (Hons.) JMC',  href: 'https://tulas.edu.in/courses/bjmc/' },
        ],
        duration: '3–4 Yrs',
        elig: '10+2 or equivalent examination from a recognised board.',
        feesKey: 'Journalism & Mass Communication',
      },
    ],
  },
  {
    id: 'pharmacy', ic: 'PH', label: 'Department of Pharmacy',
    titleNormal: 'Department of', titleOrange: 'Pharmacy',
    intro: 'Pharmacy programs with strong lab training and pathways into healthcare, research and the pharmaceutical industry.',
    programs: [
      {
        level: 'ug', name: 'Bachelor of Pharmacy (B.Pharm)',
        href: 'https://tulas.edu.in/courses/bpharma/',
        levelLabel: 'Undergraduate · B.Pharm', tracksLabel: 'Program',
        tracks: [{ label: 'Integrated pharmacy program', none: true }],
        duration: '4 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Biology / Mathematics.',
        feesKey: 'B.Pharm',
      },
      {
        level: 'diploma', name: 'Diploma in Pharmacy (D.Pharm)',
        href: 'https://tulas.edu.in/courses/dpharma',
        levelLabel: 'Diploma', tracksLabel: 'Program',
        tracks: [{ label: 'Diploma pharmacy program', none: true }],
        duration: '2 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Biology / Mathematics.',
        feesKey: 'D.Pharm',
      },
    ],
  },
  {
    id: 'law', ic: 'LW', label: 'School of Law',
    titleNormal: 'School of', titleOrange: 'Law',
    intro: 'Integrated and standalone law programs designed to build sharp legal minds and ethical professionals.',
    programs: [
      {
        level: 'ug', name: 'Integrated Law (5-Year)',
        href: 'https://tulas.edu.in/courses/llb/',
        levelLabel: 'Undergraduate · Integrated LL.B', tracksLabel: 'Programs Offered',
        tracks: [
          { label: 'BA LL.B (Hons.)',  href: 'https://tulas.edu.in/courses/llb/' },
          { label: 'BBA LL.B (Hons.)', href: 'https://tulas.edu.in/courses/llb/' },
        ],
        duration: '5 Years',
        elig: 'Passed 10+2 or equivalent examination from a recognised board.',
        feesKey: 'Integrated Law',
      },
      {
        level: 'ug', name: 'LL.B',
        href: 'https://tulas.edu.in/courses/llb/',
        levelLabel: 'Undergraduate · LL.B', tracksLabel: 'Program',
        tracks: [{ label: 'Bachelor of Legislative Law', none: true }],
        duration: '3 Years',
        elig: 'Graduation in any discipline from a recognised university.',
        feesKey: 'LL.B',
      },
    ],
  },
  {
    id: 'agriculture', ic: 'AG', label: 'Department of Agriculture',
    titleNormal: 'Department of', titleOrange: 'Agriculture',
    intro: 'Science-led agriculture programs combining field practice, research and modern agri-technology.',
    programs: [
      {
        level: 'ug', name: 'B.Sc. (Hons.) Agriculture',
        href: 'https://tulas.edu.in/b-sc-agriculture/',
        levelLabel: 'Undergraduate · B.Sc.', tracksLabel: 'Program',
        tracks: [{ label: 'Integrated honours program', none: true }],
        duration: '4 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Mathematics / Biology / Agriculture.',
        feesKey: 'B.Sc. Agriculture',
      },
      {
        level: 'pg', name: 'M.Sc. Agronomy',
        href: 'https://tulas.edu.in/courses/msc-agronomy',
        levelLabel: 'Postgraduate · M.Sc.', tracksLabel: 'Program',
        tracks: [{ label: 'Master of Science in Agronomy', none: true }],
        duration: '2 Years',
        elig: 'B.Sc. Agriculture / Horticulture / Forestry from a recognised institution.',
        feesKey: 'M.Sc. Agronomy',
      },
    ],
  },
];

const MODAL_OVERRIDES = { 'Apply Now': 'Apply To Tulas', 'Brochure': 'Download Brochure', 'Enquiry': 'Admissions Enquiry', 'Counselling': 'Talk To Counsellor' };

/* ─── FEE DATA ──────────────────────────────────────────────────────────── */
// Each row: [No Scholarship, 91%+, 81-90%, 71-80%, 60-70%, <60%]

const FEES_DATA = {
  'BBA': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'BBA',                ai: [151000,106000,111000,116000,121000,126000], uk: [151000,101000,106000,111000,116000,121000] },
      { prog: 'BBA + Specialization', ai: [176000,131000,136000,141000,146000,151000], uk: [176000,126000,131000,136000,141000,146000] },
    ],
  },
  'MBA': {
    note: 'Per annum · Scholarship based on graduation aggregate %',
    rows: [
      { prog: 'MBA',                  ai: [358000,313000,318000,323000,328000,333000], uk: [358000,271750,276750,281750,286750,291750] },
      { prog: 'MBA + Specialization', ai: [383000,338000,343000,348000,353000,358000], uk: [383000,296750,301750,306750,311750,316750] },
    ],
  },
  'B.Tech': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'CSE',                  ai: [248750,203750,208750,213750,218750,223750], uk: [248750,186250,191250,196250,201250,206250] },
      { prog: 'CSE + Specialization', ai: [273750,228750,233750,238750,243750,248750], uk: [273750,211250,216250,221250,226250,231250] },
      { prog: 'CE / ECE / EEE / ME',  ai: [168250,123250,128250,133250,138250,143250], uk: [168250,118250,123250,128250,133250,138250] },
    ],
  },
  'M.Tech': {
    note: 'Per annum · Scholarship based on graduation aggregate %',
    rows: [
      { prog: 'M.Tech', ai: [139500,94500,99500,104500,109500,114500], uk: [139500,89500,94500,99500,104500,109500] },
    ],
  },
  'B.Com': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'B.Com', ai: [110750,78750,83750,88750,93750,98750], uk: [110750,70750,75750,80750,85750,90750] },
    ],
  },
  'BCA': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'BCA',                  ai: [151000,106000,111000,116000,121000,126000], uk: [151000,101000,106000,111000,116000,121000] },
      { prog: 'BCA + Specialization', ai: [176000,131000,136000,141000,146000,151000], uk: [176000,126000,131000,136000,141000,146000] },
    ],
  },
  'MCA': {
    note: 'Per annum · Scholarship based on graduation aggregate %',
    rows: [
      { prog: 'MCA',                  ai: [172850,127850,132850,137850,142850,147850], uk: [172850,126850,131850,136850,141850,146850] },
      { prog: 'MCA + Specialization', ai: [197850,152850,157850,162850,167850,172850], uk: [197850,151850,156850,161850,166850,171850] },
    ],
  },
  'Journalism & Mass Communication': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'BJMC / BA (Hons.) JMC', ai: [110750,78750,83750,88750,93750,98750], uk: [110750,70750,75750,80750,85750,90750] },
    ],
  },
  'B.Pharm': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'B.Pharm', ai: [162500,117500,122500,127500,132500,137500], uk: [162500,112500,117500,122500,127500,132500] },
    ],
  },
  'B.Sc. Agriculture': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'B.Sc. (Hons.) Agriculture', ai: [122250,77250,82250,87250,92250,97250], uk: [122250,72250,77250,82250,87250,92250] },
    ],
  },
  'M.Sc. Agronomy': {
    note: 'Per annum · Scholarship based on graduation aggregate %',
    rows: [
      { prog: 'M.Sc. Agronomy', ai: [129250,79250,84250,89250,94250,99250], uk: [129250,74250,79250,84250,89250,94250] },
    ],
  },
  'Engineering Diploma': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'All Engineering Diploma', ai: [64600,34600,39600,44600,49600,54600], uk: [64600,30600,35600,40600,45600,50600] },
    ],
  },
  'D.Pharm': {
    note: 'Per annum · Scholarship based on 12th aggregate %',
    rows: [
      { prog: 'Diploma in Pharmacy (D.Pharm)', ai: [87500,62500,65000,67500,70000,72500], uk: [87500,60000,62500,65000,67500,70000] },
    ],
  },
  'Integrated Law': {
    note: 'Per annum · Fixed fee structure',
    flat: true,
    rows: [
      { prog: 'BA LL.B (Hons.)',  fee: 116000 },
      { prog: 'BBA LL.B (Hons.)', fee: 122500 },
    ],
  },
  'LL.B': {
    note: 'Per annum · Fixed fee structure',
    flat: true,
    rows: [
      { prog: 'LL.B (3-Year)', fee: 93750 },
    ],
  },
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function UGProgramsExplorer() {
  const [activeLevel, setActiveLevel]     = useState('ug');
  const [activeSchool, setActiveSchool]   = useState('computing');
  const [modal, setModal]                 = useState({ open: false, prog: '' });
  const sectionRefs                       = useRef({});

  /* level counts */
  const levelCount = (lv) => SCHOOLS.flatMap(s => s.programs).filter(p => p.level === lv).length;

  /* school program count at current level */
  const schoolCount = useCallback((school) =>
    school.programs.filter(p => p.level === activeLevel).length,
  [activeLevel]);

  /* scroll spy */
  useEffect(() => {
    const onScroll = () => {
      let current = '';
      SCHOOLS.forEach(school => {
        const el = sectionRefs.current[school.id];
        if (!el) return;
        const visiblePrograms = school.programs.filter(p => p.level === activeLevel);
        if (visiblePrograms.length > 0 && window.scrollY >= el.offsetTop - 240) {
          current = school.id;
        }
      });
      if (current) setActiveSchool(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeLevel]);

  const scrollToSchool = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openModal = (prog) => setModal({ open: true, prog });
  const closeModal = () => setModal({ open: false, prog: '' });

  /* Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const feeData    = FEES_DATA[modal.prog] || null;
  const isAction   = !!MODAL_OVERRIDES[modal.prog];
  const fmt        = (n) => '₹ ' + n.toLocaleString('en-IN');
  const FEE_COLS   = ['91%+', '81–90%', '71–80%', '60–70%', '<60%'];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        /* Level tabs */
        .cl-ug-levelbar{position:sticky;top:140px;z-index:10;background:#fff;border-bottom:1px solid #e0e4ed;box-shadow:0 4px 18px rgba(0,31,76,.05)}
        @media(max-width:768px){.cl-ug-levelbar{top:70px}}
        .cl-ug-levelinner{max-width:1500px;margin:0 auto;padding:0 5%;display:flex}
        .cl-ug-tab{padding:22px 30px;font-size:.92rem;font-weight:700;color:#5a6a8a;cursor:pointer;border-bottom:3px solid transparent;transition:all .25s;white-space:nowrap}
        .cl-ug-tab:hover{color:#001F4C}
        .cl-ug-tab-active{color:#001F4C;border-bottom-color:#DF5400}
        /* Explorer grid */
        .cl-ug-explorer{display:grid;grid-template-columns:280px 1fr;gap:46px;max-width:1500px;margin:0 auto;padding:54px 5% 100px}
        /* School nav */
        .cl-ug-snav{position:sticky;top:190px;align-self:start;height:fit-content}
        .cl-ug-sl{display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:14px;font-weight:700;font-size:.9rem;color:#001F4C;cursor:pointer;transition:all .25s;margin-bottom:6px;border:2px solid transparent}
        .cl-ug-sl:hover{background:#f8f9fc}
        .cl-ug-sl-active{background:#001F4C!important;color:#fff}
        .cl-ug-sl-dim{opacity:.4;pointer-events:none}
        /* pc-top grid */
        .cl-pc-top{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:start;padding:26px 30px}
        /* school header */
        .cl-school-hdr{display:flex;align-items:center;gap:18px;margin-bottom:14px;overflow:hidden}
        .cl-school-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,4vw,2.4rem);color:#001F4C;line-height:1;letter-spacing:.01em;min-width:0;word-break:break-word}
        .cl-school-line{flex:1;height:2px;background:#e0e4ed;flex-shrink:1;min-width:10px}
        /* pc-name */
        .cl-pc-name{font-size:clamp(1rem,3vw,1.25rem);font-weight:800;line-height:1.3;margin-bottom:6px;overflow-wrap:anywhere}
        /* pc-name arrow */
        .cl-pc-link .cl-arrow{color:#DF5400;font-size:1rem;opacity:0;transform:translateX(-4px);transition:all .25s;display:inline-block}
        .cl-pc-link:hover .cl-arrow{opacity:1;transform:translateX(0)}
        /* Modal animation */
        @keyframes cl-modal-pop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
        .cl-modal{animation:cl-modal-pop .35s ease}
        /* pc-side responsive layout */
        .cl-pc-side{display:flex;flex-direction:column;align-items:flex-end;gap:14px;flex-shrink:0}
        .cl-pc-dur{text-align:right}
        .cl-pc-actions{display:flex;flex-direction:column;gap:10px;width:170px}
        /* Hide level tab scrollbar */
        .cl-ug-levelinner{-ms-overflow-style:none;scrollbar-width:none}
        .cl-ug-levelinner::-webkit-scrollbar{display:none}
        /* Floating btn label hide on mobile */
        @media(max-width:1100px){
          .cl-ug-explorer{grid-template-columns:1fr;gap:0}
          .cl-ug-snav{position:static;display:flex;gap:10px;overflow-x:auto;margin-bottom:30px;padding-bottom:8px}
          .cl-ug-snav-head,.cl-ug-side-cta{display:none}
          .cl-ug-sl{margin-bottom:0;white-space:nowrap;border:2px solid #e0e4ed;flex-shrink:0}
        }
        @media(max-width:768px){
          .cl-float-lbl{display:none}
          .cl-float-btn{padding:14px!important;border-radius:50%!important;min-width:unset!important;width:50px;height:50px;justify-content:center}
          .cl-ug-levelinner{overflow-x:auto}
          .cl-pc-top{grid-template-columns:1fr;gap:18px}
          .cl-pc-side{flex-direction:row;align-items:center;justify-content:space-between;width:100%;flex-shrink:1}
          .cl-pc-dur{text-align:left}
          .cl-pc-actions{flex-direction:row;width:auto}
          .cl-school-title{font-size:clamp(1.3rem,5.5vw,1.7rem)}
          .cl-school-line{display:none}
        }
        @media(max-width:520px){
          .cl-pc-side{flex-direction:column;align-items:flex-start}
          .cl-pc-actions{flex-direction:column;width:100%}
        }
      `}} />

      {/* ── LEVEL TABS ── */}
      <div className="cl-ug-levelbar">
        <div className="cl-ug-levelinner">
          {[
            { key: 'ug',      label: 'Undergraduate' },
            { key: 'pg',      label: 'Postgraduate'  },
            { key: 'diploma', label: 'Diploma'       },
          ].map(tab => (
            <div
              key={tab.key}
              className={`cl-ug-tab${activeLevel === tab.key ? ' cl-ug-tab-active' : ''}`}
              onClick={() => {
                setActiveLevel(tab.key);
                // scroll to first visible school
                const firstSchool = SCHOOLS.find(s => s.programs.some(p => p.level === tab.key));
                if (firstSchool && sectionRefs.current[firstSchool.id]) {
                  setTimeout(() => {
                    window.scrollTo({ top: sectionRefs.current[firstSchool.id].offsetTop - 180, behavior: 'smooth' });
                  }, 50);
                }
              }}
            >
              {tab.label}{' '}
              <span
                className="text-[.72rem] font-bold px-[9px] py-[2px] rounded-[20px] ml-[7px]"
                style={{
                  background: activeLevel === tab.key ? '#FFF3D7' : '#f8f9fc',
                  color:      activeLevel === tab.key ? '#DF5400' : '#5a6a8a',
                }}
              >
                {levelCount(tab.key)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPLORER ── */}
      <div className="cl-ug-explorer">

        {/* School sidebar */}
        <aside className="cl-ug-snav">
          <h4 className="cl-ug-snav-head text-[.74rem] font-bold uppercase tracking-[.1em] mb-[18px]" style={{ color: '#5a6a8a' }}>
            Browse By Schools
          </h4>

          {SCHOOLS.map(school => {
            const count = schoolCount(school);
            const isDim = count === 0;
            const isActive = activeSchool === school.id && !isDim;
            return (
              <div
                key={school.id}
                onClick={() => !isDim && scrollToSchool(school.id)}
                className={`cl-ug-sl${isActive ? ' cl-ug-sl-active' : ''}${isDim ? ' cl-ug-sl-dim' : ''}`}
              >
                <span
                  className="flex items-center justify-center flex-shrink-0 font-bold text-[1rem] rounded-[10px]"
                  style={{
                    width: 38, height: 38,
                    fontFamily: "'Bebas Neue',sans-serif",
                    background: isActive ? 'rgba(255,255,255,.18)' : '#FFF3D7',
                    color:      isActive ? '#fff'                  : '#DF5400',
                  }}
                >
                  {school.ic}
                </span>
                <span className="flex-1">{school.label}</span>
                {count > 0 && (
                  <span
                    className="text-[.72rem] font-bold px-[10px] py-[3px] rounded-[20px] ml-auto"
                    style={{
                      background: isActive ? 'rgba(255,255,255,.2)' : 'rgba(0,31,76,.08)',
                      color:      isActive ? '#fff'                 : '#001F4C',
                    }}
                  >
                    {count}
                  </span>
                )}
              </div>
            );
          })}

          {/* Side CTA */}
          <div
            className="cl-ug-side-cta mt-[22px] rounded-[16px] p-[24px_20px] text-center text-white"
            style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)' }}
          >
            <p className="text-[.86rem] leading-[1.6] mb-[14px]" style={{ color: 'rgba(255,255,255,.82)' }}>
              Not sure which program suits you?
            </p>
            <button
              onClick={() => openModal('Counselling')}
              className="w-full font-bold text-[.86rem] py-[12px] rounded-[10px] transition-all duration-250 cursor-pointer"
              style={{ background: '#DF5400', color: '#fff', border: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#DF5400'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#DF5400'; e.currentTarget.style.color = '#fff'; }}
            >
              Talk To Counsellor
            </button>
          </div>
        </aside>

        {/* Program listings */}
        <main>
          {SCHOOLS.map(school => {
            const visiblePrograms = school.programs.filter(p => p.level === activeLevel);
            if (visiblePrograms.length === 0) return null;

            return (
              <section
                key={school.id}
                id={school.id}
                ref={el => { sectionRefs.current[school.id] = el; }}
                className="mb-[64px]"
                style={{ scrollMarginTop: 210 }}
              >
                {/* School header */}
                <div className="cl-school-hdr">
                  <div className="cl-school-title">
                    {school.titleNormal} <em className="not-italic" style={{ color: '#DF5400' }}>{school.titleOrange}</em>
                  </div>
                  <div className="cl-school-line" />
                </div>
                <p className="text-[.98rem] leading-[1.8] mb-[28px] max-w-[760px]" style={{ color: '#5a6a8a' }}>
                  {school.intro}
                </p>

                {/* Program cards */}
                {visiblePrograms.map((prog, pi) => (
                  <div
                    key={pi}
                    className="rounded-[18px] overflow-hidden mb-[18px] transition-all duration-300"
                    style={{ background: '#fff', border: '1px solid #e0e4ed' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,31,76,.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.boxShadow = ''; }}
                  >
                    <div className="cl-pc-top">
                      {/* Left info */}
                      <div style={{ minWidth: 0 }}>
                        <div className="cl-pc-name" style={{ color: '#001F4C' }}>
                          {prog.href && prog.href !== '#' ? (
                            <a
                              href={prog.href}
                              target="_blank"
                              rel="noopener"
                              className="cl-pc-link inline-flex items-center gap-[10px] transition-colors duration-200"
                              onMouseEnter={e => e.currentTarget.style.color = '#DF5400'}
                              onMouseLeave={e => e.currentTarget.style.color = '#001F4C'}
                              style={{ color: '#001F4C' }}
                            >
                              {prog.name} <span className="cl-arrow">→</span>
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-[10px]">{prog.name}</span>
                          )}
                        </div>

                        <span
                          className="inline-block text-[.68rem] font-bold uppercase tracking-[.06em] px-[12px] py-[4px] rounded-[20px] mb-[14px]"
                          style={{ background: '#f8f9fc', color: '#5a6a8a' }}
                        >
                          {prog.levelLabel}
                        </span>

                        <div className="text-[.7rem] font-bold uppercase tracking-[.08em] mb-[10px]" style={{ color: '#DF5400' }}>
                          {prog.tracksLabel}
                        </div>

                        <div className="flex flex-wrap gap-[8px]">
                          {prog.tracks.map((track, ti) => (
                            track.none ? (
                              <span key={ti} className="text-[.82rem] font-semibold italic" style={{ color: '#5a6a8a' }}>{track.label}</span>
                            ) : track.href ? (
                              <a
                                key={ti}
                                href={track.href}
                                target="_blank"
                                rel="noopener"
                                className="px-[14px] py-[7px] rounded-[8px] text-[.82rem] font-semibold transition-all duration-200 cursor-pointer"
                                style={{ background: '#f8f9fc', border: '1px solid #e0e4ed', color: '#001F4C' }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#FFF3D7'; e.currentTarget.style.borderColor = '#DF5400'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = '#f8f9fc'; e.currentTarget.style.borderColor = '#e0e4ed'; }}
                              >
                                {track.label}
                              </a>
                            ) : (
                              <span
                                key={ti}
                                className="px-[14px] py-[7px] rounded-[8px] text-[.82rem] font-semibold"
                                style={{ background: '#f8f9fc', border: '1px solid #e0e4ed', color: '#001F4C' }}
                              >
                                {track.label}
                              </span>
                            )
                          ))}
                        </div>
                      </div>

                      {/* Right side */}
                      <div className="cl-pc-side">
                        <div className="cl-pc-dur">
                          <div className="text-[.66rem] font-bold uppercase tracking-[.08em]" style={{ color: '#5a6a8a' }}>Duration</div>
                          <div className="leading-[1]" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem', color: '#001F4C' }}>{prog.duration}</div>
                        </div>
                        <div className="cl-pc-actions">
                          <button
                            onClick={() => openModal(prog.feesKey)}
                            className="inline-flex items-center justify-center gap-[7px] font-bold text-[.84rem] text-white rounded-[30px] px-[18px] py-[12px] transition-all duration-300 cursor-pointer"
                            style={{ background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)', border: 'none', boxShadow: '0 4px 14px rgba(223,84,0,.3)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(223,84,0,.45)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(223,84,0,.3)'; }}
                          >
                            <span>₹</span> Know Fees
                          </button>
                          <Link
                            href={'/apply-now'}
                            className="inline-flex items-center justify-center gap-[7px] font-bold text-[.84rem] rounded-[30px] px-[18px] py-[11px] transition-all duration-300 cursor-pointer"
                            style={{ background: '#fff', color: '#001F4C', border: '2px solid #e0e4ed' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#001F4C'; e.currentTarget.style.background = '#001F4C'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#001F4C'; }}
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div
                      className="px-[30px] py-[14px] text-[.84rem] leading-[1.6]"
                      style={{ background: '#f8f9fc', borderTop: '1px dashed #e0e4ed', color: '#5a6a8a' }}
                    >
                      <strong style={{ color: '#001F4C', fontWeight: 700 }}>Eligibility: </strong>
                      {prog.elig}
                    </div>
                  </div>
                ))}
              </section>
            );
          })}

          {/* No results */}
          {SCHOOLS.every(s => s.programs.every(p => p.level !== activeLevel)) && (
            <div className="text-center py-[70px] text-[1.1rem]" style={{ color: '#5a6a8a' }}>
              No programs available at this level. Try another tab.
            </div>
          )}
        </main>
      </div>

      {/* ── FLOATING CTAs ── */}
      {/* <div className="fixed right-[24px] bottom-[24px] z-[8000] flex flex-col gap-[12px]">
        {[
          { label: 'Apply Now', key: 'Apply Now',  bg: '#DF5400', color: '#fff', hoverBg: '#c44900' },
          { label: 'Brochure',  key: 'Brochure',  bg: '#fff',    color: '#001F4C', hoverBorder: '#DF5400', hoverColor: '#DF5400' },
          { label: 'Enquiry',   key: 'Enquiry',   bg: '#001F4C', color: '#fff', hoverBg: '#00152e' },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={() => openModal(btn.key)}
            className="cl-float-btn inline-flex items-center gap-[10px] px-[22px] py-[14px] rounded-[30px] font-bold text-[.88rem] cursor-pointer transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              background: btn.bg, color: btn.color, border: btn.color === '#001F4C' ? '2px solid #e0e4ed' : 'none',
              boxShadow: '0 8px 26px rgba(0,0,0,.18)',
            }}
          >
            {btn.label === 'Apply Now' ? '📝' : btn.label === 'Brochure' ? '⬇' : '💬'}
            <span className="cl-float-lbl">{btn.label}</span>
          </button>
        ))}
      </div> */}

      {/* ── MODAL ── */}
      {modal.open && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-[16px]"
          style={{ background: 'rgba(0,31,76,.65)', backdropFilter: 'blur(6px)' }}
          onClick={e => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            className="cl-modal relative rounded-[20px] w-full overflow-hidden"
            style={{
              background: '#fff',
              boxShadow: '0 30px 80px rgba(0,0,0,.4)',
              maxWidth: feeData ? '760px' : '480px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* ── Modal header ── */}
            <div
              className="flex items-center gap-[14px] px-[28px] py-[20px] flex-shrink-0"
              style={{ borderBottom: '1px solid #e0e4ed' }}
            >
              <div
                className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[1.1rem] flex-shrink-0"
                style={{ background: '#FFF3D7', color: '#DF5400' }}
              >
                ₹
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="leading-[1] mb-[3px]"
                  style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(1.4rem,4vw,1.9rem)', color: '#001F4C' }}
                >
                  {feeData ? modal.prog : (MODAL_OVERRIDES[modal.prog] || modal.prog)}
                </h3>
                <p className="text-[.76rem]" style={{ color: '#5a6a8a' }}>
                  {feeData ? feeData.note : 'Tulas University · Admissions 2026'}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-[1.6rem] leading-[1] cursor-pointer flex-shrink-0 w-[32px] h-[32px] flex items-center justify-center rounded-full"
                style={{ background: '#f8f9fc', border: 'none', color: '#5a6a8a' }}
              >
                ×
              </button>
            </div>

            {feeData ? (
              <>
                {/* ── Scholarship hint ── */}
                <div
                  className="flex items-center gap-[10px] px-[28px] py-[10px] flex-shrink-0 text-[.76rem] font-semibold"
                  style={{ background: '#FFF3D7', color: '#8b4500', borderBottom: '1px solid #fde8cb' }}
                >
                  <span>🎓</span>
                  Scholarship deducted automatically from total fee · Fees are per annum
                </div>

                {/* ── Fee table ── */}
                <div style={{ overflowX: 'auto', overflowY: 'auto', flex: 1 }}>
                  {feeData.flat ? (
                    /* Flat fee table (Law programs — no scholarship tiers) */
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.88rem' }}>
                      <thead>
                        <tr style={{ background: '#001F4C', color: '#fff' }}>
                          <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700 }}>Programme</th>
                          <th style={{ padding: '14px 20px', textAlign: 'right', fontWeight: 700 }}>Fee Per Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeData.rows.map((row, ri) => (
                          <tr key={ri} style={{ background: ri % 2 === 0 ? '#f8f9fc' : '#fff', borderBottom: '1px solid #e0e4ed' }}>
                            <td style={{ padding: '16px 20px', fontWeight: 700, color: '#001F4C' }}>{row.prog}</td>
                            <td style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 700, color: '#DF5400', fontSize: '1.05rem' }}>{fmt(row.fee)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    /* Tiered scholarship table */
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.8rem', minWidth: '560px' }}>
                      <thead>
                        <tr style={{ background: '#001F4C', color: '#fff', position: 'sticky', top: 0, zIndex: 2 }}>
                          <th style={{ padding: '13px 16px', color: '#fff', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 700 }}>Programme</th>
                          <th style={{ padding: '13px 12px', color: '#fff', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 700 }}>Category</th>
                          <th style={{ padding: '13px 12px', color: '#fff', textAlign: 'right', whiteSpace: 'nowrap', fontWeight: 700 }}>No Scholarship</th>
                          {FEE_COLS.map(c => (
                            <th key={c} style={{ padding: '13px 10px', textAlign: 'right', whiteSpace: 'nowrap', color: '#FFF3D7', fontWeight: 700 }}>{c}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {feeData.rows.flatMap((row, ri) => [
                          <tr key={`${ri}-ai`} style={{ background: ri % 2 === 0 ? '#f8f9fc' : '#fff' }}>
                            <td rowSpan={2} style={{ padding: '11px 16px', fontWeight: 700, color: '#001F4C', verticalAlign: 'middle', borderRight: '1px solid #e0e4ed', borderBottom: '2px solid #e0e4ed', whiteSpace: 'nowrap' }}>
                              {row.prog}
                            </td>
                            <td style={{ padding: '10px 12px', color: '#5a6a8a', fontSize: '.72rem', whiteSpace: 'nowrap', borderBottom: '1px dashed #e0e4ed' }}>All India</td>
                            <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 700, color: '#001F4C', borderBottom: '1px dashed #e0e4ed' }}>{fmt(row.ai[0])}</td>
                            {row.ai.slice(1).map((v, i) => (
                              <td key={i} style={{ padding: '10px 10px', textAlign: 'right', color: '#DF5400', fontWeight: 600, borderBottom: '1px dashed #e0e4ed' }}>{fmt(v)}</td>
                            ))}
                          </tr>,
                          <tr key={`${ri}-uk`} style={{ background: ri % 2 === 0 ? '#f8f9fc' : '#fff' }}>
                            <td style={{ padding: '10px 12px', color: '#5a6a8a', fontSize: '.72rem', whiteSpace: 'nowrap', borderBottom: '2px solid #e0e4ed' }}>Uttarakhand</td>
                            <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 700, color: '#001F4C', borderBottom: '2px solid #e0e4ed' }}>{fmt(row.uk[0])}</td>
                            {row.uk.slice(1).map((v, i) => (
                              <td key={i} style={{ padding: '10px 10px', textAlign: 'right', color: '#DF5400', fontWeight: 600, borderBottom: '2px solid #e0e4ed' }}>{fmt(v)}</td>
                            ))}
                          </tr>,
                        ])}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* ── Footer ── */}
                {/* <div className="px-[28px] py-[18px] flex-shrink-0" style={{ borderTop: '1px solid #e0e4ed', background: '#f8f9fc' }}>
                  <div className="flex gap-[10px]">
                    <button
                      className="flex-1 py-[12px] rounded-[10px] font-bold text-[.88rem] text-white cursor-pointer transition-all duration-300"
                      style={{ background: '#DF5400', border: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#c44900'}
                      onMouseLeave={e => e.currentTarget.style.background = '#DF5400'}
                    >
                      Apply Now
                    </button>
                    <button
                      className="flex-1 py-[12px] rounded-[10px] font-bold text-[.88rem] cursor-pointer transition-all duration-300"
                      style={{ background: '#fff', color: '#001F4C', border: '2px solid #e0e4ed' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.color = '#DF5400'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.color = '#001F4C'; }}
                    >
                      Talk To Counsellor
                    </button>
                  </div>
                </div> */}
              </>
            ) : (
              /* ── Contact / Action modal ── */
              <div className="px-[36px] py-[32px] text-center">
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[1.6rem] mx-auto mb-[18px]"
                  style={{ background: '#FFF3D7', color: '#DF5400' }}
                >
                  {isAction ? '📝' : '₹'}
                </div>
                <p className="text-[.94rem] leading-[1.8] mb-[24px]" style={{ color: '#5a6a8a' }}>
                  {isAction
                    ? 'Our admissions team will get in touch with you shortly.'
                    : 'Fee details for this program are shared by our admissions team along with scholarship and payment options.'}
                </p>
                <div className="flex flex-col gap-[12px]">
                  <button
                    className="py-[13px] rounded-[10px] font-bold text-[.92rem] text-white cursor-pointer transition-all duration-300"
                    style={{ background: '#DF5400', border: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#c44900'}
                    onMouseLeave={e => e.currentTarget.style.background = '#DF5400'}
                  >
                    {isAction ? MODAL_OVERRIDES[modal.prog] : 'Request Fee Details'}
                  </button>
                  <button
                    className="py-[13px] rounded-[10px] font-bold text-[.92rem] cursor-pointer transition-all duration-300"
                    style={{ background: '#f8f9fc', color: '#001F4C', border: '2px solid #e0e4ed' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.color = '#DF5400'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.color = '#001F4C'; }}
                  >
                    Talk To Counsellor
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
