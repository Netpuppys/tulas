'use client';

const SPECS = [
  {
    href: '/courses/btech/computer-science',
    img: '/btechimage/btechspecial1.jpg', badge: 'Most Popular',
    name: 'Computer Science & Engineering',
    overview: 'The core of modern computing — programming, systems, algorithms, and software engineering.',
    tags: ['Software Dev', 'Algorithms', 'Systems'],
  },
  {
    href: '/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning',
    img: '/btechimage/btechspecial2.jpg', badge: 'Future Tech',
    name: 'CSE — Artificial Intelligence & Machine Learning',
    overview: 'Build intelligent systems with deep learning, neural networks, and applied AI.',
    tags: ['Machine Learning', 'Deep Learning', 'AI Systems'],
  },
  {
    href: '/courses/btech/computer-science-engineering-data-science',
    img: '/btechimage/data.jpg', badge: 'High Demand',
    name: 'CSE — Data Science',
    overview: 'Turn data into insight with analytics, big data, and statistical modelling.',
    tags: ['Big Data', 'Analytics', 'Visualization'],
  },
  {
    href: '/courses/btech/computer-science-engineering-cyber-security',
    img: '/btechimage/btechspecial3.jpg', badge: 'Future Tech',
    name: 'CSE — Cyber Security',
    overview: 'Defend the digital world — ethical hacking, network security, and cyber forensics.',
    tags: ['Ethical Hacking', 'Network Security', 'Forensics'],
  },
  {
    href: '/courses/btech/mechanical-engineering/',
    img: '/btechimage/mech.jpg', badge: 'Core Branch',
    name: 'Mechanical Engineering',
    overview: 'Design, manufacturing, thermodynamics, and modern automation systems.',
    tags: ['Design', 'Manufacturing', 'Automation'],
  },
  {
    href: '/courses/btech/civil-engineering/',
    img: '/btechimage/btechspecial.jpg', badge: 'Core Branch',
    name: 'Civil Engineering',
    overview: 'Build the world — structures, construction technology, and sustainable infrastructure.',
    tags: ['Structures', 'Construction', 'Sustainability'],
  },
  {
    href: '/courses/btech/electronics-and-communication-engg',
    img: '/btechimage/btechspecial6.jpg', badge: 'Core Branch',
    name: 'Electronics & Communication Engineering',
    overview: 'Circuits, embedded systems, VLSI, signal processing, and communications.',
    tags: ['Embedded', 'VLSI', 'IoT'],
  },
  {
    href: '/courses/btech/electrical-and-electronics-engg/',
    img: '/btechimage/btechspecial7.jpg', badge: 'Core Branch',
    name: 'Electrical & Electronics Engineering',
    overview: 'Power systems, control engineering, renewable energy, and smart grids.',
    tags: ['Power Systems', 'Control', 'Renewables'],
  },
  {
  img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  badge: 'Trending',
  name: 'Full Stack Development',
  overview:
    'Master end-to-end web development with frontend, backend, databases, cloud deployment, and modern development frameworks.',
  tags: ['React', 'Node.js', 'Cloud'],
},
];

export default function BtechSpecializations() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-bs-card .cl-bs-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.15) 55%,transparent 100%)}
        .cl-bs-card:hover .cl-bs-img img{transform:scale(1.1)}
        .cl-bs-card:hover .cl-bs-cta{gap:13px}
        @media(max-width:1200px){.cl-bs-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-bs-grid{grid-template-columns:1fr}}
      `}} />

      <section id="specs" className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]" style={{ background: '#f8f9fc' }}>
        {/* Header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Choose Your Path
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            B.Tech Specializations<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Offered</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Eight future-focused engineering specializations — each with dedicated labs, expert faculty, and industry-aligned curriculum. Explore a discipline to dive deeper.
          </p>
        </div>

        {/* Grid */}
        <div className="cl-bs-grid">
          {SPECS.map((spec, i) => (
            <a
              key={i}
              href={spec.href}
              target="_blank"
              rel="noopener"
              className="cl-bs-card rounded-[20px] overflow-hidden flex flex-col transition-all duration-400"
              style={{ background: '#fff', boxShadow: '0 8px 28px rgba(0,31,76,.07)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 24px 55px rgba(0,31,76,.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,31,76,.07)'; }}
            >
              {/* Image */}
              <div className="cl-bs-img relative h-[210px] overflow-hidden">
                <img src={spec.img} alt={spec.name} className="w-full h-full object-cover transition-transform duration-600" />
                <span
                  className="absolute top-[14px] left-[14px] z-[2] px-[14px] py-[6px] rounded-[20px] text-[.68rem] font-extrabold uppercase tracking-[.04em]"
                  style={{ background: 'rgba(255,243,215,.95)', color: '#001F4C' }}
                >
                  {spec.badge}
                </span>
                <span
                  className="absolute bottom-[14px] left-[18px] right-[18px] z-[2] font-extrabold text-[1.18rem] text-white leading-[1.25]"
                >
                  {spec.name}
                </span>
              </div>
              {/* Body */}
              <div className="p-[24px] flex-1 flex flex-col">
                <p className="text-[.9rem] leading-[1.7] mb-[16px]" style={{ color: '#5a6a8a' }}>{spec.overview}</p>
                <div className="text-[.7rem] font-bold uppercase tracking-[.08em] mb-[10px]" style={{ color: '#DF5400' }}>Key Focus</div>
                <div className="flex flex-wrap gap-[7px] mb-[20px]">
                  {spec.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-[12px] py-[5px] rounded-[7px] text-[.76rem] font-semibold"
                      style={{ background: '#f8f9fc', border: '1px solid #e0e4ed', color: '#001F4C' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="cl-bs-cta mt-auto inline-flex items-center gap-2 font-bold text-[.86rem] transition-all duration-200"
                  style={{ color: '#DF5400' }}
                >
                  Explore Program →
                </span>
              </div>
            </a>
          ))}

          {/* Lateral entry card */}
          {/* <div
            className="rounded-[20px] overflow-hidden flex flex-col items-center justify-center text-center p-[40px] transition-all duration-400"
            style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)', color: '#fff', boxShadow: '0 8px 28px rgba(0,31,76,.07)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 24px 55px rgba(0,31,76,.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,31,76,.07)'; }}
          >
            <div
              className="mb-[12px] leading-[1]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.2rem', color: '#FFF3D7' }}
            >
              Bachelor of Technology
            </div>
            <p className="text-[.92rem] leading-[1.7]" style={{ color: 'rgba(255,255,255,.8)' }}>
              The B.Tech program is structured to provide a balanced mix of classroom instruction, laboratory experience, industrial exposure, and real-world applications.
            </p>

          </div> */}
        </div>
      </section>
    </>
  );
}
