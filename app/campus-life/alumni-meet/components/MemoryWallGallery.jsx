'use client';

const POLAROIDS = [
  { img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80', caption: 'Alumni Reunion 2024'    },
  { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', caption: 'Batch 2018 Reconnect'   },
  { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', caption: 'Together Again'         },
  { img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80', caption: 'Walking Memory Lane'    },
  { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80', caption: 'Meeting Our Mentors'    },
  { img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80', caption: 'Evening Conversations'  },
  { img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', caption: 'Celebrating Bonds'      },
  { img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80', caption: 'Friendships Forever'    },
];

// Pre-compute rotations for SSR consistency (no nth-child in JS)
const ROTATIONS = [-2.5, 2.5, -1.5, -2.5, 2.5, -1.5, -2.5, 2.5];

export default function MemoryWallGallery() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-polaroid{position:relative;background:#fff;border-radius:12px;overflow:hidden;padding:14px;box-shadow:0 10px 30px rgba(0,0,0,.4);transition:all .45s;cursor:pointer}.cl-polaroid:hover{transform:rotate(0deg) translateY(-12px) scale(1.08)!important;box-shadow:0 20px 50px rgba(223,84,0,.5);z-index:10}.cl-polaroid::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(-2deg);width:90px;height:28px;background:rgba(255,255,255,.35);border-left:1px dashed rgba(0,0,0,.12);border-right:1px dashed rgba(0,0,0,.12);z-index:2}.cl-polaroid-img img{filter:sepia(0.08);transition:filter .4s}.cl-polaroid:hover .cl-polaroid-img img{filter:sepia(0)}.cl-gal-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin-top:50px}`}} />

      <section
        id="gallery"
        className="py-[100px] px-[7%] max-[640px]:py-[65px] max-[640px]:px-[5%] relative overflow-hidden"
        style={{ background: '#001F4C' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 75% 25%,rgba(223,84,0,.1) 0%,transparent 65%)' }}
        />

        <div className="relative z-[2]">
          {/* Header */}
          <div className="text-center max-w-[850px] mx-auto mb-[70px]">
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.16em] mb-[18px]" style={{ color: '#DF5400' }}>
              <span className="block w-[32px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Captured Memories
            </div>
            <h2
              className="mb-5 leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,5.5vw,6rem)', color: '#fff' }}
            >
              A Digital Archive<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Of Shared Moments</em>
            </h2>
            <p className="text-[1.08rem] leading-[1.85] max-w-[800px] mx-auto" style={{ color: 'rgba(255,255,255,.7)' }}>
              From reunion photographs to campus revisits, these memories capture the warmth, laughter, and nostalgia of journeys that always lead back.
            </p>
          </div>

          {/* Polaroid grid */}
          <div className="cl-gal-grid">
            {POLAROIDS.map((p, i) => (
              <div
                key={i}
                className="cl-polaroid"
                style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
              >
                <div className="cl-polaroid-img w-full h-[280px] rounded-[8px] overflow-hidden" style={{ background: '#f8f9fc' }}>
                  <img src={p.img} alt={p.caption} className="w-full h-full object-cover" />
                </div>
                <div
                  className="px-[10px] pt-4 pb-[10px] text-center text-[.9rem] font-semibold"
                  style={{ color: '#001F4C', fontFamily: "'Montserrat',sans-serif" }}
                >
                  {p.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
