'use client';

const LAB_SHOTS = [
  { img: '/courses/btech/mechanical-engineering/beyondCurriculum.webp', title: 'Advanced Laboratories',          desc: 'Modern equipment across every engineering discipline', cls: 'big'  },
  { img: '/courses/btech/computer-science/departmentalMission.jpg', title: 'Coding Labs',                    desc: 'Software & AI development'                                          },
  { img: '/courses/btech/mechanical-engineering/content1.webp', title: 'Live Projects',                  desc: 'Real industry problems'                                             },
  { img: '/courses/btech/computer-science/departmentalVision.jpg', title: 'Hackathons & Technical Competitions', desc: 'Innovation challenges that push boundaries', cls: 'wide'         },
  { img: '/courses/btech/electrical-and-electronics/contentLeft.webp', title: 'Engineering Workshops',          desc: 'Hands-on practical training'                                        },
  { img: '/courses/bca/departmentalMission.webp', title: 'Industrial Visits',              desc: 'Exposure to real operations'                                        },
  { img: '/courses/bca/bannerImg.webp', title: 'Expert Sessions',               desc: 'Learn from practitioners'                                           },
  { img: '/courses/mca/content1.webp', title: 'Project Exhibitions',           desc: 'Showcase innovation'                                                },
];

export default function LabsProjectsExposure() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-labs-masonry{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:230px;gap:18px}
        .cl-lab-shot{position:relative;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,31,76,.1);transition:all .45s;cursor:pointer}
        .cl-lab-shot img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
        .cl-lab-shot:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(223,84,0,.2)}
        .cl-lab-shot:hover img{transform:scale(1.1)}
        .cl-lab-shot::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.86) 0%,transparent 55%)}
        .cl-lab-big{grid-column:span 2;grid-row:span 2}
        .cl-lab-wide{grid-column:span 2}
        @media(max-width:1200px){.cl-labs-masonry{grid-template-columns:repeat(3,1fr)}.cl-lab-big,.cl-lab-wide{grid-column:span 2}}
        @media(max-width:968px){.cl-labs-masonry{grid-template-columns:repeat(2,1fr);grid-auto-rows:200px}}
        @media(max-width:640px){.cl-labs-masonry{grid-template-columns:1fr;grid-auto-rows:220px}.cl-lab-big,.cl-lab-wide{grid-column:span 1;grid-row:span 1}}
      `}} />

      <section
        id="labs-section"
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]"
        style={{ background: '#fff' }}
      >
        {/* Header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Beyond The Classroom
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            Labs, Projects &amp;<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Industry Exposure</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Engineering is learned by doing. From advanced laboratories to hackathons and industrial visits, students build real skills on real problems.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="cl-labs-masonry">
          {LAB_SHOTS.map((shot, i) => (
            <div
              key={i}
              className={`cl-lab-shot${shot.cls === 'big' ? ' cl-lab-big' : shot.cls === 'wide' ? ' cl-lab-wide' : ''}`}
            >
              <img src={shot.img} alt={shot.title} />
              <div className="absolute left-[18px] bottom-[16px] right-[18px] z-[2] text-white">
                <div className="font-extrabold text-[1.05rem] mb-[3px]">{shot.title}</div>
                <div className="text-[.8rem]" style={{ color: 'rgba(255,255,255,.82)' }}>{shot.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
