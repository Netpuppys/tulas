'use client';

// type: 'tall' = gridRow span 2, h-500; 'wide' = gridCol span 2, h-240; 'normal' = h-240
const ITEMS = [
  { type: 'tall',   src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600', label: 'Annual Fest Performance', play: true  },
  { type: 'normal', src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600', label: 'Event Planning Session',  play: false },
  { type: 'normal', src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600', label: 'Dance Rehearsal',         play: true  },
  { type: 'wide',   src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800', label: 'Club Collaboration',      play: false },
  { type: 'normal', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600', label: 'Creative Workshop',       play: false },
  { type: 'normal', src: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600', label: 'Fashion Show',            play: true  },
  { type: 'normal', src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600', label: 'Tech Innovation',         play: false },
  { type: 'tall',   src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', label: 'Music Jam Session',       play: true  },
];

export default function ClubsGallery() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.cl-gi-tall{grid-row:span 2;height:500px}.cl-gi-wide{grid-column:span 2;height:240px}.cl-gi-normal{height:240px}.cl-gi-play{top:50%;left:50%;transform:translate(-50%,-50%) scale(0);transition:transform .4s}.cl-gallery-grid .group:hover .cl-gi-play{transform:translate(-50%,-50%) scale(1)}@media(max-width:968px){.cl-gallery-grid{grid-template-columns:1fr 1fr}.cl-gi-wide{grid-column:span 1!important;height:240px}.cl-gi-tall{height:240px;grid-row:span 1!important}}@media(max-width:640px){.cl-gallery-grid{grid-template-columns:1fr}.cl-gi-tall,.cl-gi-wide,.cl-gi-normal{grid-column:span 1!important;grid-row:span 1!important;height:240px}}`}} />

      <section className="bg-white py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]">
        {/* Header — centred */}
        <div className="text-center max-w-[700px] mx-auto mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
            <span className="block w-[32px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
            Campus Moments
          </div>
          <h2
            className="text-[#1B2D5B] mb-5 leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800 }}
          >
            Experiences That <em className="not-italic" style={{ color: '#E06B1B' }}>Come Alive.</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a]">
            From backstage rehearsals to center-stage performances, every moment is a story of creativity, collaboration, and community in action.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="cl-gallery-grid">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-[16px] cursor-pointer transition-all duration-[400ms] hover:scale-[1.02] group ${
                item.type === 'tall'   ? 'cl-gi-tall'   :
                item.type === 'wide'  ? 'cl-gi-wide'  :
                                        'cl-gi-normal'
              }`}
              style={{ boxShadow: '0 8px 20px rgba(27,45,91,.1)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 15px 40px rgba(27,45,91,.2)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(27,45,91,.1)'}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                style={{ background: 'linear-gradient(to top,rgba(27,45,91,.85) 0%,transparent 50%)' }}
              >
                <div className="font-bold text-[1rem] text-white">{item.label}</div>
              </div>

              {/* Play button — uses dangerouslySetInnerHTML class for combined translate+scale */}
              {item.play && (
                <div
                  className="cl-gi-play absolute w-[60px] h-[60px] rounded-full flex items-center justify-center text-[1.5rem] text-white"
                  style={{ background: '#E06B1B' }}
                >
                  ▶
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
