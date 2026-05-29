'use client';

const PILLS = ['Workshops', 'Celebrations', 'Guest Sessions', 'Competitions', 'Creative Events', 'Festivals'];

export default function AboutExperiences() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-ae-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}@media(max-width:1200px){.cl-ae-grid{grid-template-columns:1fr;gap:50px}}.cl-ae-collage{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.cl-ae-img{position:relative;overflow:hidden;border-radius:18px;height:260px;box-shadow:0 16px 48px rgba(0,31,76,.15);transition:all .4s}.cl-ae-img.tall{grid-row:span 2;height:auto}.cl-ae-img img{width:100%;height:100%;object-fit:cover;filter:contrast(1.06) saturate(1.08);transition:transform .6s}.cl-ae-img:hover{transform:translateY(-6px);box-shadow:0 24px 64px rgba(0,31,76,.15)}.cl-ae-img:hover img{transform:scale(1.08)}`}} />

      <section
        id="experiences"
        className="py-[110px] px-[7%] max-[768px]:py-[70px] max-[768px]:px-[5%]"
        style={{ background: '#fff' }}
      >
        <div className="cl-ae-grid">
          {/* Text side */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 text-[.72rem] font-extrabold uppercase tracking-[.18em] mb-[18px]" style={{ color: '#DF5400' }}>
              <span className="block w-[45px] h-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Our Culture
            </div>

            {/* Title */}
            <h2
              className="font-black leading-[.98] tracking-[-0.015em] mb-[28px]"
              style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(2.5rem,5vw,4.8rem)', color: '#001F4C' }}
            >
              Experiences{' '}
              <em className="not-italic" style={{ color: '#DF5400' }}>Beyond Academics.</em>
            </h2>

            <p className="text-[1.08rem] leading-[1.9] mb-[26px]" style={{ color: '#4a5568' }}>
              Campus life at Tulas is <strong style={{ color: '#001F4C', fontWeight: 700 }}>more than classes and assignments</strong> — it&apos;s a vibrant tapestry of experiences that shape personalities, build connections, and create memories that last a lifetime.
            </p>
            <p className="text-[1.08rem] leading-[1.9] mb-[26px]" style={{ color: '#4a5568' }}>
              From <strong style={{ color: '#001F4C', fontWeight: 700 }}>surprise pop-up events and creative workshops</strong> to festival celebrations and guest sessions with industry leaders, every day brings something new. These experiences are platforms for <strong style={{ color: '#001F4C', fontWeight: 700 }}>connection, creativity, learning, and growth</strong> beyond the classroom.
            </p>
            <p className="text-[1.08rem] leading-[1.9] mb-0" style={{ color: '#4a5568' }}>
              This is where students discover passions, build friendships, develop skills, and create the stories they&apos;ll tell for years to come. <strong style={{ color: '#001F4C', fontWeight: 700 }}>There&apos;s always something happening at Tulas.</strong>
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mt-9">
              {PILLS.map((p, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-[10px] text-[.88rem] font-bold transition-all duration-300 cursor-default hover:-translate-y-0.5"
                  style={{ background: '#FFF3D7', border: '2px solid #DF5400', color: '#001F4C' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#DF5400'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#FFF3D7'; e.currentTarget.style.color = '#001F4C'; }}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div>
            <div className="cl-ae-collage">
              <div className="cl-ae-img tall">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80" alt="Workshop session" />
              </div>
              <div className="cl-ae-img">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" alt="Student celebration" />
              </div>
              <div className="cl-ae-img">
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80" alt="Campus event" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
