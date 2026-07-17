'use client';

const AI_CHIPS = [
  'Artificial Intelligence','Machine Learning','Deep Learning','Generative AI',
  'Agentic AI','Data Science','Cloud Computing','Computer Vision',
  'Natural Language Processing','Cyber Security','MLOps','Software Development',
];

const ROADMAP = [
  { num: '01', title: 'Fundamentals', desc: 'Programming, data structures, algorithms and core computing.'             },
  { num: '02', title: 'Applied Tech',  desc: 'Databases, web technologies, cloud computing and software engineering.'  },
  { num: '03', title: 'Intelligence',  desc: 'AI, machine learning, deep learning, data science and computer vision.'  },
  { num: '04', title: 'Frontier',      desc: 'Generative AI, Agentic AI, MLOps and emerging technology specialization.' },
];

export default function CSEAICurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ai-cse::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(223,84,0,.16) 0%,transparent 55%);pointer-events:none}
        .cl-ai-cse-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:70px}
        .cl-ai-cse-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.4),rgba(223,84,0,.3))}
        .cl-cse-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative}
        .cl-road-step{position:relative;padding:0 18px;text-align:center}
        .cl-road-step::before{content:'';position:absolute;top:27px;left:-50%;width:100%;height:3px;background:rgba(255,255,255,.2);z-index:1}
        .cl-road-step:first-child::before{display:none}
        @media(max-width:968px){.cl-ai-cse-split{grid-template-columns:1fr;gap:40px}.cl-cse-roadmap{grid-template-columns:repeat(2,1fr);gap:30px}.cl-road-step::before{display:none}}
        @media(max-width:640px){.cl-cse-roadmap{grid-template-columns:1fr}}
      `}} />

      <section
        id="ai"
        className="cl-ai-cse relative py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%] overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)' }}
      >
        <div className="relative z-[2]">
          {/* Split */}
          <div className="cl-ai-cse-split">
            {/* Image */}
            <div
              className="cl-ai-cse-img relative rounded-[22px] overflow-hidden"
              style={{ boxShadow: '0 24px 60px rgba(0,0,0,.4)' }}
            >
              <img src="/courses/btech/computer-science-engineering-data-science/contentLeft.webp" alt="AI-integrated curriculum" className="w-full object-cover" style={{ height: 460 }} />
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#FFF3D7' }}>
                <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#FFF3D7' }} />
                The Differentiator
              </div>
              <h2
                className="mb-[22px] leading-[1]"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.6rem,4.5vw,4.2rem)', color: '#fff' }}
              >
                An AI-Integrated<br />
                <em className="not-italic" style={{ color: '#FFF3D7' }}>Curriculum</em>
              </h2>
              <p className="text-[1.05rem] leading-[1.9] mb-[20px]" style={{ color: 'rgba(255,255,255,.82)' }}>
                At Tulas, AI isn&apos;t a single elective — it&apos;s woven through the entire CSE journey. Students move from strong fundamentals to the most in-demand frontier technologies, graduating fluent in the tools shaping the future of software.
              </p>
              {/* Tech chips */}
              <div className="flex flex-wrap gap-[10px] mt-[24px]">
                {AI_CHIPS.map((chip, i) => (
                  <span
                    key={i}
                    className="px-[18px] py-[10px] rounded-[30px] text-[.85rem] font-semibold text-white transition-all duration-250 cursor-default"
                    style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(223,84,0,.25)'; e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)'; e.currentTarget.style.transform = ''; }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="cl-cse-roadmap">
            {ROADMAP.map((step, i) => (
              <div key={i} className="cl-road-step">
                <div
                  className="flex items-center justify-center mx-auto mb-[20px] relative z-[2]"
                  style={{
                    width: 54, height: 54, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)',
                    fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.5rem', color: '#fff',
                    boxShadow: '0 8px 24px rgba(223,84,0,.4)',
                  }}
                >
                  {step.num}
                </div>
                <h4 className="text-[1.05rem] font-extrabold text-white mb-[8px]">{step.title}</h4>
                <p className="text-[.85rem] leading-[1.6]" style={{ color: 'rgba(255,255,255,.7)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
