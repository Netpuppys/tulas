'use client';

const VIDEOS = [
  { img: '/mnt/user-data/uploads/ABHI0641.JPG', title: 'Keynote Session Highlights',       meta: 'Leadership Fest 2026'           },
  { img: '/mnt/user-data/uploads/ABHI0307.JPG', title: 'Panel Discussion on Governance',   meta: 'Chhatra Sansad Conclave'        },
  { img: '/mnt/user-data/uploads/ABHI0602.JPG', title: 'Media & Communication Session',    meta: 'Anand Narasimhan'               },
  { img: '/mnt/user-data/uploads/ABHI0044.JPG', title: 'Entrepreneurship Talk',            meta: 'Praful Billore - MBA Chaiwala'  },
];

const GALLERY = [
  '/campus-life/leadershipfest/img9.jpg',
  '/campus-life/leadershipfest/img13.jpg',
  '/campus-life/leadershipfest/img11.jpg',
  '/campus-life/leadershipfest/img6.jpg',
  '/campus-life/leadershipfest/img4.jpg',
  '/campus-life/leadershipfest/img5.jpg',
  '/campus-life/leadershipfest/img7.jpg',
  '/campus-life/leadershipfest/img8.jpg',
];

export default function EventHighlights() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-vc{position:relative;border-radius:22px;overflow:hidden;aspect-ratio:16/9;cursor:pointer;background:#000;box-shadow:0 12px 36px rgba(0,0,0,.14);transition:all .5s}.cl-vc:hover{transform:translateY(-12px);box-shadow:0 24px 60px rgba(0,0,0,.3)}.cl-vc-thumb{width:100%;height:100%;object-fit:cover;transition:transform .7s,opacity .4s}.cl-vc:hover .cl-vc-thumb{transform:scale(1.1);opacity:.6}.cl-vc-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;background:rgba(223,84,0,.96);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2.2rem;color:#fff;transition:all .4s;box-shadow:0 8px 28px rgba(223,84,0,.7)}.cl-vc:hover .cl-vc-play{transform:translate(-50%,-50%) scale(1.25)}.cl-gi img{transition:transform .6s}.cl-gi:hover img{transform:scale(1.15)}`}} />

      <section
        id="highlights"
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]"
        style={{ background: '#fff' }}
      >
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-20">
          <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-5" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Relive The Moments
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3.2rem,6vw,6.5rem)', color: '#001F4C' }}
          >
            Event Highlights —<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Videos &amp; Gallery</em>
          </h2>
          <p className="text-[1.1rem] leading-[1.9]" style={{ color: '#5a6a8a' }}>
            Cinematic moments from Leadership Fest — keynote sessions, student interactions, panel discussions, and the energy of youth leadership in action.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-2 max-[968px]:grid-cols-1 gap-8 mb-[50px]">
          {VIDEOS.map((v, i) => (
            <div key={i} className="cl-vc">
              <img className="cl-vc-thumb" src={v.img} alt={v.title} />
              <div className="cl-vc-play">▶</div>
              <div
                className="absolute bottom-0 left-0 right-0 p-7"
                style={{ background: 'linear-gradient(to top,rgba(0,31,76,.95) 0%,transparent 100%)' }}
              >
                <div className="font-bold text-[1.05rem] text-white mb-[6px]">{v.title}</div>
                <div className="text-[.84rem]" style={{ color: 'rgba(255,255,255,.8)' }}>{v.meta}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-4 max-[640px]:grid-cols-1 gap-5">
          {GALLERY.map((src, i) => (
            <div
              key={i}
              className="cl-gi relative rounded-[16px] overflow-hidden cursor-pointer transition-all duration-[400ms] hover:-translate-y-[6px]"
              style={{ aspectRatio: '1', boxShadow: '0 8px 24px rgba(0,0,0,.12)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 40px rgba(223,84,0,.2)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,.12)'}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
