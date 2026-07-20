'use client';

const LAB_SHOTS = [
  { img: 'assets/ABHI0044.JPG', title: 'AI & ML Labs',                            cls: 'big'  },
  { img: 'assets/ABHI0128.JPG', title: 'Advanced Computer Labs'                               },
  { img: 'assets/ABHI0960.JPG', title: 'Cloud Computing Labs'                                 },
  { img: 'assets/ABHI0602.JPG', title: 'Programming & Project Development Labs',  cls: 'wide' },
  { img: 'assets/ABHI0235.JPG', title: 'Innovation Spaces'                                    },
  { img: 'assets/ABHI0641.JPG', title: 'Smart Classrooms'                                     },
];

export default function CSELabsInfrastructure() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cse-labs{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:220px;gap:18px}
        .cl-cse-lab{position:relative;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,31,76,.1);transition:all .45s;cursor:pointer}
        .cl-cse-lab img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
        .cl-cse-lab:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(223,84,0,.2)}
        .cl-cse-lab:hover img{transform:scale(1.1)}
        .cl-cse-lab::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.86) 0%,transparent 55%)}
        .cl-cse-lab-big{grid-column:span 2;grid-row:span 2}
        .cl-cse-lab-wide{grid-column:span 2}
        @media(max-width:1200px){.cl-cse-labs{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:968px){.cl-cse-labs{grid-template-columns:repeat(2,1fr);grid-auto-rows:200px}}
        @media(max-width:640px){.cl-cse-labs{grid-template-columns:1fr;grid-auto-rows:220px}.cl-cse-lab-big,.cl-cse-lab-wide{grid-column:span 1;grid-row:span 1}}
      `}} />

      <section
        id="cse-labs-section"
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]"
        style={{ background: '#f8f9fc' }}
      >
        {/* Header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Learn By Building. Learn By Doing.
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            Labs &amp; Technology<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Infrastructure</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            Advanced labs and innovation spaces where ideas become working software — every day.
          </p>
        </div>

        {/* Masonry */}
        <div className="cl-cse-labs">
          {LAB_SHOTS.map((shot, i) => (
            <div
              key={i}
              className={`cl-cse-lab${shot.cls === 'big' ? ' cl-cse-lab-big' : shot.cls === 'wide' ? ' cl-cse-lab-wide' : ''}`}
            >
              <img src={shot.img} alt={shot.title} />
              <div className="absolute left-[18px] bottom-[16px] right-[18px] z-[2] text-white font-extrabold text-[1.02rem]">
                {shot.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
