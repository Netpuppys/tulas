'use client';

const ITEMS = [
  {
    img:   '/festivals/img1.jpg',
    large: true,
  },
  {
    img:   '/festivals/img2.jpg',
    large: false,
  },
  {
    img:   '/festivals/img3.jpg',
    large: false,
  },
  {
    img:   '/festivals/img4.jpg',
    large: false,
  },
  {
    img:   '/festivals/img6.jpg',
    large: false,
  },
];

export default function CelebrationsFestivals() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-celeb-mosaic{display:grid;grid-template-columns:1.2fr 1fr 1fr;grid-template-rows:repeat(2,300px);gap:22px}.cl-celeb-item.large{grid-row:span 2}.cl-celeb-item img{transition:transform .6s}.cl-celeb-item:hover img{transform:scale(1.1)}.cl-celeb-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.85) 0%,rgba(0,31,76,.3) 60%,transparent 100%);z-index:1;opacity:0;transition:opacity .4s}.cl-celeb-item:hover .cl-celeb-ov{opacity:1}.cl-celeb-label{position:absolute;bottom:0;left:0;right:0;padding:28px;z-index:2;transform:translateY(20px);opacity:0;transition:all .4s}.cl-celeb-item:hover .cl-celeb-label{transform:translateY(0);opacity:1}@media(max-width:1200px){.cl-celeb-mosaic{grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,300px)}.cl-celeb-item.large{grid-row:span 1}}@media(max-width:768px){.cl-celeb-mosaic{grid-template-columns:1fr;grid-auto-rows:280px}.cl-celeb-item.large{grid-row:span 1}}`}} />

      <section
        className="py-[80px] px-[7%] max-[768px]:py-[55px] max-[768px]:px-[5%]"
        style={{ background: 'linear-gradient(135deg,#FFF3D7 0%,#f8f9fb 100%)' }}
      >
        {/* Header */}
        <div className="mb-[60px]">
          <div className="inline-flex items-center gap-3 text-[.72rem] font-extrabold uppercase tracking-[.18em] mb-[18px]" style={{ color: '#DF5400' }}>
            <span className="block w-[45px] h-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Festivals &amp; Joy
          </div>
          <h2
            className="font-black leading-[.98] tracking-[-0.015em] mb-5"
            style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(2.5rem,5vw,4.8rem)', color: '#001F4C' }}
          >
            Campus{' '}
            <em className="not-italic" style={{ color: '#DF5400' }}>Celebrations.</em>
          </h2>
          <p className="text-[1.15rem] leading-[1.8] max-w-[720px] font-medium" style={{ color: '#4a5568' }}>
            From Holi colors to Diwali lights, from cultural nights to seasonal celebrations — moments that bring the entire campus together in joy, tradition, and shared experiences.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="cl-celeb-mosaic">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`cl-celeb-item${item.large ? ' large' : ''} relative overflow-hidden rounded-[20px] transition-all duration-[400ms] hover:scale-[1.03] cursor-pointer`}
              style={{ boxShadow: '0 16px 48px rgba(0,31,76,.15)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 72px rgba(0,31,76,.15)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,31,76,.15)'}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(1.15) contrast(1.05)' }}
                />
              </div>

              <div className="cl-celeb-ov" />

              {/* Label — appears on hover */}
              <div className="cl-celeb-label">
                <div className="text-[2.2rem] mb-[10px]">{item.emoji}</div>
                <h3
                  className="font-extrabold text-[1.4rem] text-white leading-[1.3]"
                  style={{ fontFamily: "'Montserrat',sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
