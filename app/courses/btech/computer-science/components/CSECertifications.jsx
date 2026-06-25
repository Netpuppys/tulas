'use client';

const CERTS = [
  { name: 'AWS',       sub: 'Cloud certifications'    },
  { name: 'Microsoft', sub: 'Azure & developer tracks' },
  { name: 'Google',    sub: 'Cloud & AI certifications'},
  { name: 'NVIDIA',    sub: 'Deep learning & AI'      },
  { name: 'Oracle',    sub: 'Database & Java'         },
  { name: 'Python',    sub: 'Programming certifications'},
];

const HANDS = [
  { num: '01', label: 'Live Projects'           },
  { num: '02', label: 'Hackathons'              },
  { num: '03', label: 'Coding Challenges'       },
  { num: '04', label: 'Research Projects'       },
  { num: '05', label: 'Product Development'     },
  { num: '06', label: 'Innovation Competitions' },
];

export default function CSECertifications() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cert-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .cl-cert-feat{grid-column:span 2}
        .cl-cert-card{position:relative;overflow:hidden;border-radius:16px;padding:28px 22px;transition:all .35s;border:2px solid #e0e4ed}
        .cl-cert-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);transform:scaleX(0);transform-origin:left;transition:transform .35s}
        .cl-cert-card:hover{border-color:#DF5400;transform:translateY(-6px);box-shadow:0 14px 34px rgba(223,84,0,.14)}
        .cl-cert-card:hover::before{transform:scaleX(1)}
        .cl-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        @media(max-width:1200px){.cl-cert-grid{grid-template-columns:repeat(2,1fr)}.cl-cert-feat{grid-column:span 2}.cl-hands-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-cert-grid{grid-template-columns:1fr}.cl-cert-feat{grid-column:span 1}.cl-hands-grid{grid-template-columns:1fr}}
      `}} />

      <section id="certs" className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]" style={{ background: '#fff' }}>
        {/* Header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Practical Learning
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            Certifications
            <em className="not-italic" style={{ color: '#DF5400' }}> &amp; Projects</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Beyond the degree — globally recognized certifications, real projects, and continuous industry exposure that make graduates job-ready.
          </p>
        </div>

        {/* Industry certifications */}
        <div className="mb-[60px]">
          <div className="text-center text-[1.3rem] font-extrabold mb-[32px]" style={{ color: '#001F4C' }}>Industry Certifications</div>
          <div className="cl-cert-grid">
            {/* Featured */}
            <div
              className="cl-cert-card cl-cert-feat flex flex-col justify-center"
              style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)', border: 'none', color: '#fff' }}
            >
              <span
                className="inline-block px-[14px] py-[5px] rounded-[20px] text-[.7rem] font-bold uppercase tracking-[.06em] mb-[14px] w-fit"
                style={{ background: 'rgba(255,243,215,.2)', color: '#FFF3D7' }}
              >
                Flagship Association
              </span>
              <div className="font-extrabold text-[1.3rem] text-white mb-[6px]">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="text-[.92rem] leading-[1.6]" style={{ color: 'rgba(255,255,255,.8)' }}>
                Premier certifications backed by IIT Kanpur&apos;s Electronics &amp; ICT Academy — adding national credibility to your skill set.
              </div>
            </div>

            {/* Regular certs */}
            {CERTS.map((cert, i) => (
              <div key={i} className="cl-cert-card" style={{ background: '#fff' }}>
                <div className="font-extrabold text-[1.02rem] mb-[6px]" style={{ color: '#001F4C' }}>{cert.name}</div>
                <div className="text-[.82rem]" style={{ color: '#5a6a8a' }}>{cert.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hands-on learning */}
        <div className="mb-[60px]">
          <div className="text-center text-[1.3rem] font-extrabold mb-[32px]" style={{ color: '#001F4C' }}>Hands-On Learning</div>
          <div className="cl-hands-grid">
            {HANDS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-[14px] rounded-[14px] px-[24px] py-[22px] font-bold text-[1rem] transition-all duration-300 cursor-default"
                style={{ background: '#f8f9fc', border: '1.5px solid #e0e4ed', color: '#001F4C' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(223,84,0,.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.background = '#f8f9fc'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <span className="leading-[1] flex-shrink-0" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem', color: '#DF5400' }}>{item.num}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Internship ecosystem */}
        {/* <div>
          <div className="text-center text-[1.3rem] font-extrabold mb-[24px]" style={{ color: '#001F4C' }}>Internship Ecosystem</div>
          <p className="text-center max-w-[760px] mx-auto text-[1.05rem] leading-[1.9]" style={{ color: '#5a6a8a' }}>
            Students undergo <strong style={{ color: '#001F4C' }}>multiple internship opportunities</strong> across the program — gaining real industry exposure, mentorship, and a direct pathway from internship to placement.
          </p>
        </div> */}
      </section>
    </>
  );
}
