'use client';

const MOSAIC_IMGS = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
];

const FLOATS = [
  { icon: '🎓', label: <><strong>500+</strong> New Students</>,    pos: 'top-[18%] left-[8%]',    delay: '0s'  },
  { icon: '🤝', label: <><strong>Welcome</strong> Activities</>,   pos: 'top-[22%] right-[10%]',  delay: '-2s' },
  { icon: '✨', label: <><strong>First</strong> Connections</>,     pos: 'bottom-[22%] left-[12%]', delay: '-4s' },
  { icon: '🌟', label: <><strong>New</strong> Beginnings</>,        pos: 'bottom-[18%] right-[8%]', delay: '-3s' },
];

export default function FreshersHeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.fo-mosaic{position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(3,1fr);gap:2px;opacity:.5;z-index:0}@media(max-width:600px){.fo-mosaic{grid-template-columns:repeat(3,1fr)}}.fo-mosaic-cell{overflow:hidden;background:#f0f0f0}.fo-mosaic-cell img{width:100%;height:100%;object-fit:cover;transform:scale(1.1);animation:cl-fo-zoom 10s ease-in-out infinite alternate}.fo-mosaic-cell:nth-child(odd) img{animation-delay:-5s}@keyframes cl-fo-zoom{from{transform:scale(1.1)}to{transform:scale(1.2)}}.cl-fo-float{animation:cl-fo-float 6s ease-in-out infinite}@keyframes cl-fo-float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-15px) rotate(1deg)}}.cl-fo-fadein{animation:cl-fo-fadein 1.2s ease-out both}@keyframes cl-fo-fadein{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}`}} />

      <div
        className="relative w-full overflow-hidden flex flex-col justify-center items-center"
        style={{ height: 'calc(100vh - 70px)', minHeight: '580px' }}
      >
        {/* Mosaic background */}
        <div className="fo-mosaic">
          {MOSAIC_IMGS.map((src, i) => (
            <div key={i} className="fo-mosaic-cell">
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg,rgba(27,45,91,.92) 0%,rgba(224,107,27,.88) 100%)' }}
        />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 25% 25%,white 2px,transparent 2px)', backgroundSize: '60px 60px' }}
        />

        {/* Floating badges — hidden on mobile */}
        {FLOATS.map((f, i) => (
          <div
            key={i}
            className={`cl-fo-float absolute z-[4] hidden md:flex items-center gap-[10px] rounded-[16px] px-[20px] py-[14px] text-[0.82rem] font-semibold text-white ${f.pos}`}
            style={{
              background: 'rgba(255,255,255,.12)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,.2)',
              boxShadow: '0 8px 24px rgba(0,0,0,.15)',
              animationDelay: f.delay,
            }}
          >
            <span className="text-[1.3rem]">{f.icon}</span>
            <div>{f.label}</div>
          </div>
        ))}

        {/* Hero content */}
        <div className="relative z-[5] text-center px-[7%] max-w-[1100px] cl-fo-fadein">
          {/* Tag */}
          <div
            className="inline-flex items-center mb-6 rounded-[30px] px-6 py-2 text-[0.78rem] font-bold tracking-[0.15em] uppercase text-white"
            style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.25)' }}
          >
            Freshers Orientation 2026
          </div>

          {/* Title */}
          <h1
            className="text-white mb-6 leading-[.92] tracking-[.02em]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.2rem,9vw,8.5rem)', textShadow: '0 4px 30px rgba(0,0,0,.4)' }}
          >
            Every Journey<br />
            <em className="not-italic block" style={{ color: '#E06B1B', filter: 'drop-shadow(0 2px 10px rgba(224,107,27,.6))' }}>
              Begins Here
            </em>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[1.12rem] leading-[1.8] max-w-[700px] mx-auto mb-9 font-normal"
            style={{ color: 'rgba(255,255,255,.85)' }}
          >
            At Tula&apos;s, orientation is more than an introduction —{' '}
            <strong className="text-white font-bold">it is the beginning of friendships, experiences and growth.</strong>{' '}
            Welcome to a community where every student finds their place, their voice, and their future.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(224,107,27,.45)]"
              style={{ background: '#E06B1B', boxShadow: '0 4px 14px rgba(224,107,27,.3)' }}
            >
              Explore Campus Life →
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.4)' }}
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
