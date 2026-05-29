'use client';

// wide = col-span 2, tall = row-span 2
const STORIES = [
  { img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80', wide: true,  tall: true  },
  { img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',  wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',  wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',  wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',  wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80', wide: true,  tall: false },
];

export default function VideosStories() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-story-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}.cl-si{position:relative;overflow:hidden;border-radius:16px;height:320px;box-shadow:0 12px 40px rgba(0,0,0,.3);cursor:pointer;transition:all .35s}.cl-si.wide{grid-column:span 2}.cl-si.tall{grid-row:span 2;height:auto}.cl-si:hover{transform:translateY(-6px);box-shadow:0 20px 60px rgba(0,0,0,.4)}.cl-si img{transition:transform .5s;width:100%;height:100%;object-fit:cover}.cl-si:hover img{transform:scale(1.12)}.cl-si-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,31,76,.4);z-index:1;opacity:0;transition:opacity .3s}.cl-si:hover .cl-si-play{opacity:1}@media(max-width:1200px){.cl-story-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:768px){.cl-story-grid{grid-template-columns:1fr}.cl-si.wide,.cl-si.tall{grid-column:span 1;grid-row:span 1;height:320px!important}}`}} />

      <section
        id="stories"
        className="py-[110px] px-[7%] max-[768px]:py-[70px] max-[768px]:px-[5%]"
        style={{ background: '#001F4C' }}
      >
        {/* Header */}
        <div className="mb-[60px]">
          <div className="inline-flex items-center gap-3 text-[.72rem] font-extrabold uppercase tracking-[.18em] mb-[18px]" style={{ color: '#ff6b1a' }}>
            <span className="block w-[45px] h-[2px] flex-shrink-0" style={{ background: '#ff6b1a' }} />
            Campus Stories
          </div>
          <h2
            className="font-black leading-[.98] tracking-[-0.015em] mb-5"
            style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(2.5rem,5vw,4.8rem)', color: '#fff' }}
          >
            Voices Of{' '}
            <em className="not-italic" style={{ color: '#ff6b1a' }}>Tulas.</em>
          </h2>
          <p className="text-[1.15rem] leading-[1.8] max-w-[720px] font-medium" style={{ color: 'rgba(255,255,255,.7)' }}>
            Real moments, authentic experiences, and student stories — from event highlights to candid memories, this is campus life as it happens.
          </p>
        </div>

        {/* Story grid */}
        <div className="cl-story-grid">
          {STORIES.map((s, i) => (
            <div
              key={i}
              className={`cl-si${s.wide ? ' wide' : ''}${s.tall ? ' tall' : ''}`}
            >
              <img src={s.img} alt="" />
              <div className="cl-si-play">
                <span
                  className="text-[4rem] text-white"
                  style={{ filter: 'drop-shadow(0 6px 20px rgba(0,0,0,.4))' }}
                >
                  ▶
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
