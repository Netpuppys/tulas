'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const SCHOOLS = [
  {
    id: 'computing', ic: 'CS', label: 'School of Computing',
    titleNormal: 'School of', titleOrange: 'Computing',
    intro: 'Future-ready programs in computer science, applications and emerging technologies — built on a strong foundation and enhanced through an AI-integrated curriculum.',
    programs: [
      {
        level: 'ug', name: 'B.Tech Computer Science & Engineering',
        href: 'https://tulas.edu.in/courses/btech/computer-science/',
        levelLabel: 'Undergraduate · B.Tech', tracksLabel: 'Specialized Tracks',
        tracks: [
          { label: 'Artificial Intelligence & Machine Learning', href: 'https://tulas.edu.in/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/' },
          { label: 'Data Science',    href: 'https://tulas.edu.in/courses/btech/computer-science-engineering-data-science/' },
          { label: 'Cyber Security',  href: 'https://tulas.edu.in/courses/btech/computer-science-engineering-cyber-security/' },
          { label: 'Full Stack Development' },
        ],
        duration: '4 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Mathematics from a recognised board.',
        feesKey: 'B.Tech CSE',
      },
      {
        level: 'ug', name: 'Bachelor of Computer Applications (BCA)',
        href: '#', levelLabel: 'Undergraduate · BCA', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Artificial Intelligence & Machine Learning' }, { label: 'Data Science' }],
        duration: '3 Years',
        elig: '10+2 or equivalent examination from a recognised board in any stream.',
        feesKey: 'BCA',
      },
      {
        level: 'pg', name: 'Master of Computer Applications (MCA)',
        href: '#', levelLabel: 'Postgraduate · MCA', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Artificial Intelligence & Machine Learning' }, { label: 'Full Stack Development' }],
        duration: '2 Years',
        elig: 'Graduation with Mathematics at 10+2 or graduation level.',
        feesKey: 'MCA',
      },
      {
        level: 'diploma', name: 'Diploma in Computer Science Engineering',
        href: '#', levelLabel: 'Diploma', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Single integrated diploma program', none: true }],
        duration: '3 Years',
        elig: 'Passed 10th / SSC examination from a recognised board.',
        feesKey: 'Diploma in CSE',
      },
    ],
  },
  {
    id: 'engineering', ic: 'EN', label: 'School of Engineering',
    titleNormal: 'School of', titleOrange: 'Engineering',
    intro: 'Core engineering disciplines with modern labs, hands-on projects and industry exposure — preparing students for Industry 4.0 careers.',
    programs: [
      {
        level: 'ug', name: 'B.Tech Core Engineering',
        href: '#', levelLabel: 'Undergraduate · B.Tech', tracksLabel: 'Branches Offered',
        tracks: [
          { label: 'Civil Engineering',          href: 'https://tulas.edu.in/courses/btech/civil-engineering/' },
          { label: 'Electronics & Communication', href: 'https://tulas.edu.in/courses/btech/electronics-and-communication-engg/' },
          { label: 'Electrical & Electronics',   href: 'https://tulas.edu.in/courses/btech/electrical-and-electronics-engg/' },
          { label: 'Mechanical Engineering',     href: 'https://tulas.edu.in/courses/btech/mechanical-engineering/' },
        ],
        duration: '4 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Mathematics from a recognised board.',
        feesKey: 'B.Tech Core Engineering',
      },
      {
        level: 'pg', name: 'M.Tech',
        href: '#', levelLabel: 'Postgraduate · M.Tech', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Computer Science & Engineering' }, { label: 'Thermal Engineering' }, { label: 'Civil Engineering' }],
        duration: '2 Years',
        elig: 'B.Tech / B.E. in relevant discipline with qualifying entrance requirements.',
        feesKey: 'M.Tech',
      },
      {
        level: 'diploma', name: 'Engineering Diploma',
        href: '#', levelLabel: 'Diploma', tracksLabel: 'Branches Offered',
        tracks: [{ label: 'Civil Engineering' }, { label: 'Mechanical Engineering' }, { label: 'Computer Science Engineering' }],
        duration: '3 Years',
        elig: 'Passed 10th / SSC examination from a recognised board.',
        feesKey: 'Engineering Diploma',
      },
      {
        level: 'diploma', name: 'Diploma Lateral Entry',
        href: '#', levelLabel: 'Diploma · Lateral Entry', tracksLabel: 'Branches Offered',
        tracks: [{ label: 'Civil (LE)' }, { label: 'Mechanical (LE)' }, { label: 'Computer Science (LE)' }],
        duration: '2 Years',
        elig: '10+2 with PCM / PCB, or 10th + ITI in relevant trade.',
        feesKey: 'Diploma Lateral Entry',
      },
    ],
  },
  {
    id: 'management', ic: 'MG', label: 'School of Management',
    titleNormal: 'School of', titleOrange: 'Management',
    intro: 'Industry-aligned business programs that build leadership, analytics and entrepreneurial capability for the modern workplace.',
    programs: [
      {
        level: 'ug', name: 'Bachelor of Business Administration (BBA)',
        href: '#', levelLabel: 'Undergraduate · BBA', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Digital Marketing' }, { label: 'Business Analytics' }],
        duration: '3 Years',
        elig: '10+2 or equivalent examination from a recognised board in any stream.',
        feesKey: 'BBA',
      },
      {
        level: 'pg', name: 'Master of Business Administration (MBA)',
        href: '#', levelLabel: 'Postgraduate · MBA', tracksLabel: 'Specialized Tracks',
        tracks: [
          { label: 'Marketing' }, { label: 'Finance' }, { label: 'Human Resource Management' },
          { label: 'International Business' }, { label: 'Digital Marketing' },
          { label: 'Business Analytics' }, { label: 'Agri-Business Management' },
        ],
        duration: '2 Years',
        elig: 'Graduation in any discipline with minimum required marks.',
        feesKey: 'MBA',
      },
    ],
  },
  {
    id: 'commerce', ic: 'CM', label: 'School of Commerce',
    titleNormal: 'School of', titleOrange: 'Commerce',
    intro: 'Strong foundations in commerce, finance and accounting with pathways into professional and corporate careers.',
    programs: [
      {
        level: 'ug', name: 'Commerce (B.Com)',
        href: '#', levelLabel: 'Undergraduate · B.Com', tracksLabel: 'Programs Included',
        tracks: [{ label: 'B.Com' }, { label: 'B.Com (Hons.)' }],
        duration: '3–4 Yrs',
        elig: '10+2 or equivalent examination from a recognised board.',
        feesKey: 'Commerce',
      },
    ],
  },
  {
    id: 'media', ic: 'MC', label: 'Media & Communication',
    titleNormal: 'Media &', titleOrange: 'Communication',
    intro: 'Creative, hands-on journalism and mass communication programs for the digital media age.',
    programs: [
      {
        level: 'ug', name: 'Journalism & Mass Communication',
        href: '#', levelLabel: 'Undergraduate · JMC', tracksLabel: 'Programs Included',
        tracks: [{ label: 'BAJMC' }, { label: 'BA (Hons.) JMC' }],
        duration: '3–4 Yrs',
        elig: '10+2 or equivalent examination from a recognised board.',
        feesKey: 'Journalism & Mass Communication',
      },
    ],
  },
  {
    id: 'agriculture', ic: 'AG', label: 'School of Agriculture',
    titleNormal: 'School of', titleOrange: 'Agriculture',
    intro: 'Science-led agriculture programs combining field practice, research and modern agri-technology.',
    programs: [
      {
        level: 'ug', name: 'B.Sc. (Hons.) Agriculture',
        href: '#', levelLabel: 'Undergraduate · B.Sc.', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Integrated honours program', none: true }],
        duration: '4 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Mathematics / Biology / Agriculture.',
        feesKey: 'B.Sc. Agriculture',
      },
      {
        level: 'pg', name: 'M.Sc. Agronomy',
        href: '#', levelLabel: 'Postgraduate · M.Sc.', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Master of Science in Agronomy', none: true }],
        duration: '2 Years',
        elig: 'B.Sc. Agriculture / Horticulture / Forestry from a recognised institution.',
        feesKey: 'M.Sc. Agronomy',
      },
    ],
  },
  {
    id: 'pharmacy', ic: 'PH', label: 'School of Pharmacy',
    titleNormal: 'School of', titleOrange: 'Pharmacy',
    intro: 'Pharmacy programs with strong lab training and pathways into healthcare, research and the pharmaceutical industry.',
    programs: [
      {
        level: 'ug', name: 'Bachelor of Pharmacy (B.Pharm.)',
        href: '#', levelLabel: 'Undergraduate · B.Pharm', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Integrated pharmacy program', none: true }],
        duration: '4 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Biology / Mathematics.',
        feesKey: 'B.Pharm',
      },
      {
        level: 'diploma', name: 'Diploma in Pharmacy (D.Pharm)',
        href: '#', levelLabel: 'Diploma', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Single diploma program', none: true }],
        duration: '2 Years',
        elig: 'Passed 10+2 with Physics, Chemistry and Biology / Mathematics.',
        feesKey: 'D.Pharm',
      },
    ],
  },
  {
    id: 'law', ic: 'LW', label: 'School of Law',
    titleNormal: 'School of', titleOrange: 'Law',
    intro: 'Integrated and postgraduate law programs designed to build sharp legal minds and ethical professionals.',
    programs: [
      {
        level: 'ug', name: 'Integrated Law',
        href: '#', levelLabel: 'Undergraduate · Integrated LL.B', tracksLabel: 'Programs Included',
        tracks: [{ label: 'BBA LL.B' }, { label: 'BA LL.B' }],
        duration: '5 Years',
        elig: 'Passed 10+2 or equivalent examination from a recognised board.',
        feesKey: 'Integrated Law',
      },
      {
        level: 'pg', name: 'LL.B',
        href: '#', levelLabel: 'Postgraduate · LL.B', tracksLabel: 'Specialized Tracks',
        tracks: [{ label: 'Bachelor of Legislative Law', none: true }],
        duration: '3 Years',
        elig: 'Graduation in any discipline from a recognised university.',
        feesKey: 'LL.B',
      },
    ],
  },
];

const MODAL_OVERRIDES = { 'Apply Now': 'Apply To Tulas', 'Brochure': 'Download Brochure', 'Enquiry': 'Admissions Enquiry', 'Counselling': 'Talk To Counsellor' };

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

  const modalTitle = MODAL_OVERRIDES[modal.prog] || 'Get Fee Details';
  const modalSub   = MODAL_OVERRIDES[modal.prog] ? 'Tulas University · Admissions 2026' : modal.prog;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        /* Level tabs */
        .cl-ug-levelbar{position:sticky;top:140px;z-index:900;background:#fff;border-bottom:1px solid #e0e4ed;box-shadow:0 4px 18px rgba(0,31,76,.05)}
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
        /* pc-name arrow */
        .cl-pc-link .cl-arrow{color:#DF5400;font-size:1rem;opacity:0;transform:translateX(-4px);transition:all .25s;display:inline-block}
        .cl-pc-link:hover .cl-arrow{opacity:1;transform:translateX(0)}
        /* Modal animation */
        @keyframes cl-modal-pop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
        .cl-modal{animation:cl-modal-pop .35s ease}
        /* Floating btn label hide on mobile */
        @media(max-width:768px){
          .cl-float-lbl{display:none}
          .cl-float-btn{padding:14px!important;border-radius:50%!important}
          .cl-ug-levelinner{overflow-x:auto}
          .cl-pc-top{grid-template-columns:1fr;gap:18px}
        }
        @media(max-width:1100px){
          .cl-ug-explorer{grid-template-columns:1fr;gap:0}
          .cl-ug-snav{position:static;display:flex;gap:10px;overflow-x:auto;margin-bottom:30px;padding-bottom:8px}
          .cl-ug-snav-head,.cl-ug-side-cta{display:none}
          .cl-ug-sl{margin-bottom:0;white-space:nowrap;border:2px solid #e0e4ed;flex-shrink:0}
        }
        @media(max-width:520px){.cl-pc-top{grid-template-columns:1fr}}
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
                <div className="flex items-center gap-[18px] mb-[14px]">
                  <div
                    className="leading-[1] tracking-[.01em] flex-shrink-0"
                    style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.4rem', color: '#001F4C' }}
                  >
                    {school.titleNormal} <em className="not-italic" style={{ color: '#DF5400' }}>{school.titleOrange}</em>
                  </div>
                  <div className="flex-1 h-[2px]" style={{ background: '#e0e4ed' }} />
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
                        <div className="font-extrabold text-[1.25rem] leading-[1.3] mb-[6px]" style={{ color: '#001F4C' }}>
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
                      <div className="flex flex-col items-end gap-[14px] flex-shrink-0">
                        <div className="text-right">
                          <div className="text-[.66rem] font-bold uppercase tracking-[.08em]" style={{ color: '#5a6a8a' }}>Duration</div>
                          <div className="leading-[1]" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem', color: '#001F4C' }}>{prog.duration}</div>
                        </div>
                        <div className="flex flex-col gap-[10px] w-[170px] max-[768px]:w-auto max-[768px]:flex-row">
                          <button
                            onClick={() => openModal(prog.feesKey)}
                            className="inline-flex items-center justify-center gap-[7px] font-bold text-[.84rem] text-white rounded-[30px] px-[18px] py-[12px] transition-all duration-300 cursor-pointer"
                            style={{ background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)', border: 'none', boxShadow: '0 4px 14px rgba(223,84,0,.3)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(223,84,0,.45)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(223,84,0,.3)'; }}
                          >
                            <span>₹</span> Know Fees
                          </button>
                          <button
                            onClick={() => openModal('Apply Now')}
                            className="inline-flex items-center justify-center gap-[7px] font-bold text-[.84rem] rounded-[30px] px-[18px] py-[11px] transition-all duration-300 cursor-pointer"
                            style={{ background: '#fff', color: '#001F4C', border: '2px solid #e0e4ed' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#001F4C'; e.currentTarget.style.background = '#001F4C'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#001F4C'; }}
                          >
                            Apply Now
                          </button>
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
      <div className="fixed right-[24px] bottom-[24px] z-[8000] flex flex-col gap-[12px]">
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
      </div>

      {/* ── MODAL ── */}
      {modal.open && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-[20px]"
          style={{ background: 'rgba(0,31,76,.6)', backdropFilter: 'blur(6px)' }}
          onClick={e => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            className="cl-modal relative rounded-[24px] max-w-[480px] w-full px-[40px] py-[44px] text-center"
            style={{ background: '#fff', boxShadow: '0 30px 80px rgba(0,0,0,.4)' }}
          >
            <button
              onClick={closeModal}
              className="absolute top-[18px] right-[20px] text-[1.6rem] leading-[1] cursor-pointer"
              style={{ background: 'none', border: 'none', color: '#5a6a8a' }}
            >
              ×
            </button>

            <div
              className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-[2rem] mx-auto mb-[20px]"
              style={{ background: '#FFF3D7', color: '#DF5400' }}
            >
              ₹
            </div>

            <h3
              className="mb-[8px] leading-[1]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.2rem', color: '#001F4C' }}
            >
              {modalTitle}
            </h3>
            <div className="font-bold text-[1rem] mb-[18px]" style={{ color: '#DF5400' }}>{modalSub}</div>
            <p className="text-[.94rem] leading-[1.8] mb-[26px]" style={{ color: '#5a6a8a' }}>
              Fee structures are shared by our admissions team along with available scholarships and payment options. Request details and a counsellor will reach out to you.
            </p>

            <div className="flex flex-col gap-[12px]">
              <button
                className="py-[14px] rounded-[10px] font-bold text-[.92rem] text-white cursor-pointer transition-all duration-300"
                style={{ background: '#DF5400', border: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = '#c44900'}
                onMouseLeave={e => e.currentTarget.style.background = '#DF5400'}
              >
                Request Fee Details
              </button>
              <button
                className="py-[14px] rounded-[10px] font-bold text-[.92rem] cursor-pointer transition-all duration-300"
                style={{ background: '#f8f9fc', color: '#001F4C', border: '2px solid #e0e4ed' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.color = '#DF5400'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.color = '#001F4C'; }}
              >
                Talk To Counsellor
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
