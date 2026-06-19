'use client';

const TECH_CHIPS = [
  { abbr: 'AI',  label: 'Artificial Intelligence' },
  { abbr: 'ML',  label: 'Machine Learning'        },
  { abbr: 'DS',  label: 'Data Science'            },
  { abbr: 'CS',  label: 'Cyber Security'          },
  { abbr: 'CC',  label: 'Cloud Computing'         },
  { abbr: 'AU',  label: 'Automation'              },
  { abbr: 'RB',  label: 'Robotics'                },
  { abbr: '4.0', label: 'Industry 4.0'            },
  { abbr: 'IoT', label: 'Internet of Things'      },
  { abbr: '+',   label: 'Emerging Tech'           },
];

const AI_POINTS = [
  { strong: 'AI-enabled learning pathways', rest: ' embedded across all eight specializations, not just computer science.' },
  { strong: 'Future technology exposure', rest: ' to machine learning, automation, IoT and Industry 4.0 from early semesters.' },
  { strong: 'Innovation-driven curriculum', rest: ' updated continuously to match real industry tools and practices.' },
  { strong: 'Interdisciplinary projects', rest: ' that combine core engineering with intelligent, data-driven systems.' },
];

export default function AIIntegratedLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ai-section::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(223,84,0,.16) 0%,transparent 55%);pointer-events:none}
        .cl-ai-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:70px}
        .cl-ai-imgwrap::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.4),rgba(223,84,0,.3))}
        .cl-ai-tech{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}
        @media(max-width:1200px){.cl-ai-tech{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:968px){.cl-ai-split{grid-template-columns:1fr;gap:40px}}
        @media(max-width:640px){.cl-ai-tech{grid-template-columns:1fr}}
      `}} />

      <section
        id="ai"
        className="cl-ai-section relative py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%] overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)' }}
      >
        <div className="relative z-[2]">
          {/* Split */}
          <div className="cl-ai-split">
            {/* Image */}
            <div
              className="cl-ai-imgwrap relative rounded-[22px] overflow-hidden"
              style={{ boxShadow: '0 24px 60px rgba(0,0,0,.4)' }}
            >
              <img
                src="/courses/btech/ProgramSpecificOutcome.png"
                alt="AI-integrated learning"
                className="w-full object-cover object-top"
                style={{ height: 480 }}
              />
            </div>

            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]"
                style={{ color: '#FFF3D7' }}
              >
                <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#FFF3D7' }} />
                AI-Integrated &amp; Future-Ready
              </div>
              <h2
                className="mb-[22px] leading-[1]"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.6rem,4.5vw,4.2rem)', color: '#fff' }}
              >
                Learn Engineering For The<br />
                <em className="not-italic" style={{ color: '#FFF3D7' }}>Future, Not The Past</em>
              </h2>
              <p className="text-[1.05rem] leading-[1.9] mb-[20px]" style={{ color: 'rgba(255,255,255,.82)' }}>
                Artificial Intelligence isn&apos;t a single subject at Tulas — it&apos;s a cross-disciplinary advantage woven across the entire engineering ecosystem. Whatever your branch, you graduate fluent in the technologies shaping tomorrow.
              </p>
              <ul className="mt-[26px] list-none">
                {AI_POINTS.map((pt, i) => (
                  <li key={i} className="flex items-start gap-[14px] mb-[16px] text-[.98rem] leading-[1.6]" style={{ color: 'rgba(255,255,255,.9)' }}>
                    <span
                      className="flex-shrink-0 flex items-center justify-center text-white font-extrabold text-[.8rem] mt-[2px]"
                      style={{
                        width: 26, height: 26, borderRadius: '50%',
                        background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)',
                      }}
                    >
                      ✓
                    </span>
                    <span>
                      <strong style={{ color: '#fff', fontWeight: 800 }}>{pt.strong}</strong>
                      {pt.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech wall */}
          <div className="cl-ai-tech">
            {TECH_CHIPS.map((chip, i) => (
              <div
                key={i}
                className="rounded-[14px] py-[22px] px-[16px] text-center font-bold text-[.92rem] text-white transition-all duration-350 cursor-default"
                style={{
                  background: 'rgba(255,255,255,.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,.16)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(223,84,0,.2)'; e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.16)'; e.currentTarget.style.transform = ''; }}
              >
                <span
                  className="block mb-[4px]"
                  style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.5rem', color: '#FFF3D7' }}
                >
                  {chip.abbr}
                </span>
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
