'use client';

const VIDEOS = [
  { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', title: "My Journey After Tula's",       meta: 'Rajesh Kumar • Class of 2018'      },
  { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', title: 'Reunion Highlights',             meta: 'Alumni Association • 2024'         },
  { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', title: 'From Student to Entrepreneur',   meta: 'Priya Sharma • Class of 2019'      },
];

const TESTIMONIALS = [
  {
    quote:  'Returning to campus after 10 years felt like coming home. The memories, the friendships, and the experiences we shared — they\'re still as vivid and meaningful as they were back then.',
    avatar: 'A',
    name:   'Amit Verma',
    detail: 'Senior Manager, Tech Corp',
    year:   'Class of 2014',
  },
  {
    quote:  "The network I built at Tula's has been invaluable in my career. From mentorship to collaboration, my fellow alumni have been there every step of the way.",
    avatar: 'S',
    name:   'Sneha Gupta',
    detail: 'Founder, StartupXYZ',
    year:   'Class of 2016',
  },
  {
    quote:  "Tula's taught me more than academics — it taught me resilience, friendship, and the value of community. Those lessons have stayed with me throughout my journey.",
    avatar: 'R',
    name:   'Rohan Malhotra',
    detail: 'Product Lead, Global Inc',
    year:   'Class of 2017',
  },
  {
    quote:  "Every alumni meet reminds me why these bonds are special. We've grown, evolved, and pursued different paths — but the connection remains unchanged.",
    avatar: 'N',
    name:   'Neha Patel',
    detail: 'Associate Professor, IIT',
    year:   'Class of 2015',
  },
];

export default function AlumniStoriesSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-as-vc{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/10;cursor:pointer;background:#000;box-shadow:0 10px 30px rgba(0,0,0,.12);transition:all .45s}.cl-as-vc:hover{transform:translateY(-10px);box-shadow:0 20px 50px rgba(0,0,0,.25)}.cl-as-thumb{width:100%;height:100%;object-fit:cover;transition:transform .6s,opacity .35s;filter:sepia(0.05)}.cl-as-vc:hover .cl-as-thumb{transform:scale(1.1);opacity:.65;filter:sepia(0)}.cl-as-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:75px;height:75px;background:rgba(223,84,0,.96);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;color:#fff;transition:all .35s;box-shadow:0 6px 24px rgba(223,84,0,.6)}.cl-as-vc:hover .cl-as-play{transform:translate(-50%,-50%) scale(1.2)}.cl-as-test{background:#fff;border-left:5px solid #DF5400;border-radius:16px;padding:36px;box-shadow:0 10px 28px rgba(0,0,0,.08);transition:all .35s}.cl-as-test:hover{transform:translateX(8px);box-shadow:0 14px 38px rgba(223,84,0,.18)}`}} />

      <section
        id="stories"
        className="py-[100px] px-[7%] max-[640px]:py-[65px] max-[640px]:px-[5%]"
        style={{ background: 'linear-gradient(to bottom,#f8f9fc 0%,#fff 100%)' }}
      >
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-[70px]">
          <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.16em] mb-[18px]" style={{ color: '#DF5400' }}>
            <span className="block w-[32px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Voices of Alumni
          </div>
          <h2
            className="mb-5 leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,5.5vw,6rem)', color: '#001F4C' }}
          >
            Stories That <em className="not-italic" style={{ color: '#DF5400' }}>Stay</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.85] max-w-[800px] mx-auto" style={{ color: '#5a6a8a' }}>
            Hear from alumni about their journeys, the friendships that shaped them, and why Tula&apos;s will always feel like home.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-3 max-[968px]:grid-cols-2 max-[640px]:grid-cols-1 gap-7 mb-[70px]">
          {VIDEOS.map((v, i) => (
            <div key={i} className="cl-as-vc">
              <img className="cl-as-thumb" src={v.img} alt={v.title} />
              <div className="cl-as-play">▶</div>
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top,rgba(0,31,76,.92) 0%,transparent 100%)' }}
              >
                <div className="font-bold text-[.98rem] text-white mb-[5px]">{v.title}</div>
                <div className="text-[.8rem]" style={{ color: 'rgba(255,255,255,.75)' }}>{v.meta}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials 2×2 */}
        <div className="grid grid-cols-2 max-[968px]:grid-cols-1 gap-[30px]">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="cl-as-test">
              <p className="text-[1.08rem] leading-[1.85] mb-6 italic font-medium" style={{ color: '#001F4C' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-[18px]">
                <div
                  className="w-[55px] h-[55px] rounded-full flex items-center justify-content-center items-center justify-center flex-shrink-0 font-extrabold text-[1.2rem] text-white"
                  style={{ background: '#DF5400' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <span className="block font-bold text-[.98rem]" style={{ color: '#001F4C' }}>{t.name}</span>
                  <span className="block text-[.84rem]" style={{ color: '#5a6a8a' }}>{t.detail}</span>
                  <span className="block text-[.76rem] font-semibold mt-[2px]" style={{ color: '#DF5400' }}>{t.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
