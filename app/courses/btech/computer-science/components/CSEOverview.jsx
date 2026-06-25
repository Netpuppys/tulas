'use client';

const SPECS = [
  { img: '/courses/bca/departmentalVision.webp', badge: 'Core',          name: 'Computer Science & Engineering',               overview: 'The complete foundation — programming, systems, networks, and software engineering.',     tags: ['Software','Systems','Networks'] },
  { img: '/courses/btech/computer-science-engineering-cyber-security/bannerImg.webp', badge: 'Future Tech',   name: 'CSE — Artificial Intelligence & Machine Learning', overview: 'Deep learning, neural networks, and applied AI to build intelligent systems.',          tags: ['ML','Deep Learning','Generative AI'] },
  { img: '/courses/btech/computer-science-engineering-data-science/bannerImg.webp', badge: 'High Demand',   name: 'CSE — Data Science',                           overview: 'Analytics, big data, and statistical modelling to turn data into decisions.',           tags: ['Big Data','Analytics','ML Ops'] },
  { img: '/courses/btech/electrical-and-electronics/bannerImg.webp', badge: 'Future Tech',   name: 'CSE — Cyber Security',                         overview: 'Ethical hacking, network security, and digital forensics to defend systems.',          tags: ['Ethical Hacking','Forensics','Security'] },
  { img: '/courses/btech/computer-science-engineering-data-science/contentRight.webp', badge: 'Industry Ready',name: 'CSE — Full Stack Development',                  overview: 'Front-end to back-end — build complete, production-ready web applications.',           tags: ['Web Tech','APIs','Databases'] },
];

const LEARN_CHIPS = ['Programming','Data Structures','Algorithms','Databases','Cloud Computing','Artificial Intelligence','Machine Learning','Software Engineering','Cyber Security','Web Technologies'];

export default function CSEOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ov-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
        .cl-ov-specs{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-ov-card .cl-ov-simg::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.15) 55%,transparent 100%)}
        .cl-ov-card:hover .cl-ov-simg img{transform:scale(1.1)}
        @media(max-width:1200px){.cl-ov-specs{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){.cl-ov-split{grid-template-columns:1fr;gap:40px}}
        @media(max-width:640px){.cl-ov-specs{grid-template-columns:1fr}}
      `}} />

      <section id="overview" className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]" style={{ background: '#fff' }}>

        {/* Split */}
        <div className="cl-ov-split">
          {/* Image with badge */}
          <div className="relative">
            <img
              src="/courses/bca/content2.webp"
              alt="CSE students at Tulas"
              className="rounded-[20px] w-full object-cover"
              style={{ height: 520, boxShadow: '0 24px 60px rgba(0,31,76,.22)' }}
            />
            {/* NBA badge — bottom-left */}
            <div
              className="absolute flex items-center gap-[16px] rounded-[18px] p-[22px_26px]"
              style={{ bottom: -26, left: -20, background: '#fff', boxShadow: '0 16px 40px rgba(0,31,76,.2)' }}
            >
              <span
                className="leading-[1]"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.4rem', color: '#DF5400' }}
              >
                NBA
              </span>
              <span className="text-[.8rem] font-bold leading-[1.4]" style={{ color: '#001F4C' }}>
                Accredited<br />Program (2024)
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
              <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Department of CSE
            </div>
            <h2
              className="mb-[22px] leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
            >
              Where Computer Science<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Meets AI</em>
            </h2>
            <p className="text-[1.18rem] font-semibold leading-[1.7] mb-[20px]" style={{ color: '#001F4C' }}>
              The B.Tech in Computer Science &amp; Engineering at Tulas is designed to create future-ready professionals for the IT industry.
            </p>
            <p className="text-[1rem] leading-[1.9] mb-[20px]" style={{ color: '#5a6a8a' }}>
              The program provides an in-depth understanding of software development, networking, artificial intelligence, cyber security and cloud computing. With a strong emphasis on practical learning, coding skills and problem-solving, students gain hands-on experience in programming, database management, blockchain, machine learning and IoT — all aligned with current industry trends.
            </p>
            <blockquote
              className="pl-[22px] italic font-semibold text-[1.05rem] leading-[1.7]"
              style={{ borderLeft: '4px solid #DF5400', color: '#001F4C' }}
            >
              &ldquo;Code your future, innovate with technology, and transform the world with Tulas&apos; B.Tech in Computer Science &amp; Engineering.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Specializations header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Specializations
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            Five Paths, One Strong<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>CSE Foundation</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Every specialization is built on a strong Computer Science core and enhanced through AI-integrated learning.
          </p>
        </div>

        {/* Specs grid */}
        <div className="cl-ov-specs">
          {SPECS.map((spec, i) => (
            <div
              key={i}
              className="cl-ov-card rounded-[20px] overflow-hidden flex flex-col transition-all duration-400"
              style={{ background: '#fff', boxShadow: '0 8px 28px rgba(0,31,76,.07)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 24px 55px rgba(0,31,76,.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,31,76,.07)'; }}
            >
              <div className="cl-ov-simg relative h-[200px] overflow-hidden">
                <img src={spec.img} alt={spec.name} className="w-full h-full object-cover transition-transform duration-600" />
                <span
                  className="absolute top-[14px] left-[14px] z-[2] px-[14px] py-[6px] rounded-[20px] text-[.68rem] font-extrabold uppercase tracking-[.04em]"
                  style={{ background: 'rgba(255,243,215,.95)', color: '#001F4C' }}
                >
                  {spec.badge}
                </span>
                <span className="absolute bottom-[14px] left-[18px] right-[18px] z-[2] font-extrabold text-[1.15rem] text-white leading-[1.25]">
                  {spec.name}
                </span>
              </div>
              <div className="p-[24px] flex-1 flex flex-col">
                <p className="text-[.9rem] leading-[1.7] mb-[16px]" style={{ color: '#5a6a8a' }}>{spec.overview}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {spec.tags.map((tag, j) => (
                    <span key={j} className="px-[12px] py-[5px] rounded-[7px] text-[.76rem] font-semibold" style={{ background: '#f8f9fc', border: '1px solid #e0e4ed', color: '#001F4C' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Info card */}
          <div
            className="rounded-[20px] flex flex-col items-center justify-center text-center p-[36px]"
            style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)', color: '#fff', boxShadow: '0 8px 28px rgba(0,31,76,.07)' }}
          >
            <div
              className="mb-[12px] leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#FFF3D7' }}
            >
              Built On Core<br />Computer Science
            </div>
            <p className="text-[.9rem] leading-[1.7]" style={{ color: 'rgba(255,255,255,.82)' }}>
              Programming · Data Structures · Algorithms · Databases · Cloud · Web Technologies · Software Engineering
            </p>
          </div>
        </div> 

        {/* Core Learning Areas */}
        {/* <div className="mt-[70px]">
          <h3 className="text-center text-[1.5rem] font-extrabold mb-[36px]" style={{ color: '#001F4C' }}>Core Learning Areas</h3>
          <div className="flex flex-wrap gap-[12px] justify-center max-w-[900px] mx-auto">
            {LEARN_CHIPS.map((chip, i) => (
              <span
                key={i}
                className="px-[22px] py-[12px] rounded-[30px] text-[.88rem] font-bold cursor-default transition-all duration-250"
                style={{ background: '#f8f9fc', border: '1.5px solid #e0e4ed', color: '#001F4C' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#001F4C'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#001F4C'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f8f9fc'; e.currentTarget.style.color = '#001F4C'; e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.transform = ''; }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div> */}
      </section>
    </>
  );
}
