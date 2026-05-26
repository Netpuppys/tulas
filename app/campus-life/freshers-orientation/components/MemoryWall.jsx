'use client';

const MEMORIES = [
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', caption: 'Welcome Day 2026'           },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80', caption: 'First Orientation Session'  },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', caption: 'Making New Friends'         },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80', caption: 'Exploring Campus'           },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', caption: 'Batch 2026 Together'        },
  { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80', caption: 'Hostel Bonding'             },
  { src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80', caption: 'Welcome Celebration'        },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80', caption: 'Ice-Breaking Activities'    },
];

export default function MemoryWall() {
  return (
    <>
      {/* Scrapbook tape pseudo-element + card tilt variants */}
      <style dangerouslySetInnerHTML={{__html:`.cl-mem-card{transform:rotate(-2deg)}.cl-mem-card:nth-child(even){transform:rotate(2deg)}.cl-mem-card:hover{transform:rotate(0deg) translateY(-8px) scale(1.05);box-shadow:0 16px 40px rgba(224,107,27,.4);z-index:10}.cl-mem-card::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(-2deg);width:80px;height:25px;background:rgba(255,255,255,.3);border-left:1px dashed rgba(0,0,0,.1);border-right:1px dashed rgba(0,0,0,.1);z-index:2}`}} />

      <section
        id="gallery"
        className="relative py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%] overflow-hidden"
        style={{ background: '#1B2D5B' }}
      >
        {/* Radial accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%,rgba(224,107,27,.12) 0%,transparent 60%)' }}
        />

        <div className="relative z-[2]">
          {/* Header — centred */}
          <div className="text-center max-w-[800px] mx-auto mb-[60px]">
            <div className="inline-flex items-center gap-[10px] text-[0.75rem] font-bold text-[#E06B1B] uppercase tracking-[.15em] mb-4">
              <span className="block w-[30px] h-[3px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
              Captured Moments
            </div>
            <h2
              className="text-white mb-5 leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}
            >
              A Scrapbook Of<br />
              <em className="not-italic" style={{ color: '#E06B1B' }}>First Memories</em>
            </h2>
            <p className="text-[1.05rem] leading-[1.8] max-w-[650px] mx-auto" style={{ color: 'rgba(255,255,255,.65)' }}>
              Every smile, every interaction, every moment of discovery — these are the memories that mark the beginning of your Tula&apos;s journey.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-4 max-[1100px]:grid-cols-3 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1 gap-5">
            {MEMORIES.map((mem, i) => (
              <div
                key={i}
                className="cl-mem-card relative bg-white rounded-[12px] overflow-hidden p-3 cursor-pointer transition-all duration-[400ms]"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,.3)' }}
              >
                <div className="w-full h-[260px] rounded-[8px] overflow-hidden">
                  <img
                    src={mem.src}
                    alt={mem.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="pt-3 pb-2 text-center text-[0.88rem] font-semibold"
                  style={{ color: '#1B2D5B' }}
                >
                  {mem.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
