'use client';

const VIDEOS = [
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800', title: 'Republic Day NCC Parade 2025' },
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',    title: 'NSS Village Immersion Camp' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800', title: 'Cleanliness Drive Highlights' },
];

// span: 1, 2, or 3  (out of 6 columns)
const PHOTOS = [
  { src: '/campus-life/newncc/img1.jpg', span: 2 },
  { src: '/campus-life/newncc/img2.jpg', span: 1 },
  { src: '/campus-life/newncc/img3.jpg', span: 3 },
  { src: '/campus-life/newncc/img8.jpg', span: 3 },
  { src: '/campus-life/newncc/img5.jpg', span: 2 },
  { src: '/campus-life/newncc/img6.jpg', span: 1 },
  { src: '/campus-life/newncc/img7.jpg', span: 1 },
  { src: '/campus-life/newncc/img9.jpg', span: 2 },
  { src: '/campus-life/newncc/img12.jpg', span: 3 },
];

export default function VideoGallery() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-vid-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:24px;margin-bottom:56px}.cl-photo-collage{display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:180px;gap:12px}.cl-pc-item{border-radius:10px;overflow:hidden;position:relative;cursor:pointer;transition:transform .3s}.cl-pc-item:hover{transform:scale(1.05);z-index:10}.cl-pc-item img{width:100%;height:100%;object-fit:cover}@media(max-width:968px){.cl-vid-grid{grid-template-columns:1fr}.cl-photo-collage{grid-template-columns:repeat(2,1fr);grid-auto-rows:160px}.cl-pc-item{grid-column:span 1!important}}@media(max-width:600px){.cl-photo-collage{grid-template-columns:1fr;grid-auto-rows:200px}}.cl-vid-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:70px;height:70px;background:rgba(255,255,255,.95);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.8rem;color:#E06B1B;box-shadow:0 8px 24px rgba(0,0,0,.4);transition:transform .3s,background .3s}.cl-vid-card:hover .cl-vid-play{transform:translate(-50%,-50%) scale(1.15);background:#fff}`}} />

      <section
        id="gallery"
        className="py-[96px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]"
        style={{ background: 'linear-gradient(135deg,#1B2D5B 0%,#0d2044 100%)' }}
      >
        {/* Header — centred */}
        <div className="text-center max-w-[760px] mx-auto mb-[56px]">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
            <span className="block w-[24px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
            Moments That Matter
          </div>
          <h2
            className="mb-5 leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 800, color: '#fff' }}
          >
            Stories of Service<br />
            <em className="not-italic" style={{ color: '#E06B1B' }}>&amp; Leadership.</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.75]" style={{ color: 'rgba(255,255,255,.65)' }}>
            Every drill, every camp, every volunteering drive creates memories that last a lifetime. These moments define who our students become.
          </p>
        </div>

        {/* Video cards */}
        {/* <div className="cl-vid-grid">
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              className="cl-vid-card relative rounded-[14px] overflow-hidden cursor-pointer transition-transform duration-[400ms] hover:scale-[1.03]"
              style={{ height: '260px', boxShadow: '0 12px 36px rgba(0,0,0,.3)' }}
            >
              <img src={v.src} alt={v.title} className="w-full h-full object-cover" />
              <div className="cl-vid-play">▶</div>
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: 'linear-gradient(to top,rgba(27,45,91,.95) 0%,transparent 100%)' }}
              >
                <div
                  className="font-bold text-[1.15rem] text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {v.title}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Photo collage */}
        <div className="cl-photo-collage">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="cl-pc-item"
              style={{ gridColumn: `span ${p.span}` }}
            >
              <img src={p.src} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
