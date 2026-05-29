'use client';

const MEMORIES = [
  { img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', caption: 'Creative Workshop Vibes'  },
  { img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80', caption: 'Festival Celebrations'     },
  { img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80', caption: 'Squad Goals'              },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', caption: 'Behind The Scenes'        },
  { img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', caption: 'Candid Campus Moments'    },
  { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', caption: 'Friendship Goals'         },
  { img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80', caption: 'Pure Joy'                 },
  { img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', caption: 'Learning Together'        },
  { img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80', caption: 'Campus Energy'            },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', caption: 'Community Spirit'         },
];

export default function MemoriesGallery() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-mem-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:20px}.cl-mem-card{position:relative;background:#fff;border-radius:12px;padding:8px;box-shadow:0 8px 28px rgba(0,31,76,.1);transition:all .4s;transform:rotate(-2deg);cursor:default}.cl-mem-card:nth-child(even){transform:rotate(2deg)}.cl-mem-card:hover{transform:rotate(0deg) translateY(-12px) scale(1.05);box-shadow:0 24px 64px rgba(0,31,76,.15);z-index:10}.cl-mem-img{position:relative;overflow:hidden;border-radius:8px;height:260px}.cl-mem-img img{width:100%;height:100%;object-fit:cover;filter:contrast(1.04)}@media(max-width:1200px){.cl-mem-grid{grid-template-columns:repeat(4,1fr)}}@media(max-width:768px){.cl-mem-grid{grid-template-columns:repeat(2,1fr)}}`}} />

      <section
        className="py-[110px] px-[7%] max-[768px]:py-[70px] max-[768px]:px-[5%]"
        style={{ background: 'linear-gradient(to bottom,#f8f9fb 0%,#fff 100%)' }}
      >
        {/* Header */}
        <div className="mb-[60px]">
          <div className="inline-flex items-center gap-3 text-[.72rem] font-extrabold uppercase tracking-[.18em] mb-[18px]" style={{ color: '#DF5400' }}>
            <span className="block w-[45px] h-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Living Archive
          </div>
          <h2
            className="font-black leading-[.98] tracking-[-0.015em] mb-5"
            style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(2.5rem,5vw,4.8rem)', color: '#001F4C' }}
          >
            Memories{' '}
            <em className="not-italic" style={{ color: '#DF5400' }}>That Stay.</em>
          </h2>
          <p className="text-[1.15rem] leading-[1.8] max-w-[720px] font-medium" style={{ color: '#4a5568' }}>
            A scrapbook of campus life — candid moments, spontaneous celebrations, and experiences that become the stories we carry forward.
          </p>
        </div>

        {/* Scrapbook grid */}
        <div className="cl-mem-grid">
          {MEMORIES.map((m, i) => (
            <div key={i} className="cl-mem-card">
              <div className="cl-mem-img">
                <img src={m.img} alt={m.caption} />
              </div>
              <div
                className="px-2 pt-3 pb-2 text-[.82rem] font-semibold text-center leading-[1.4]"
                style={{ color: '#001F4C' }}
              >
                {m.caption}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
