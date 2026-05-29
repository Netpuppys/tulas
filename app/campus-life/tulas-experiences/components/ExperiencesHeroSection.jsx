'use client';

const BG_IMAGE = '/campus-life/tulasexperience/img11.jpg';

const FLOATS = [
  { icon: '🎓', label: <><strong>Mission</strong> Service Culture</>,    pos: 'top-[18%] left-[8%]',    delay: '0s'  },
  { icon: '🤝', label: <><strong>Impact</strong> +5000 Lives</>,   pos: 'top-[22%] right-[10%]',  delay: '-2s' },
  { icon: '✨', label: <><strong>Focus</strong> Character Building</>,     pos: 'bottom-[22%] left-[12%]', delay: '-4s' },
  { icon: '🌟', label: <><strong>New</strong> Beginnings</>,        pos: 'bottom-[18%] right-[8%]', delay: '-3s' },
];

export default function ExperiencesHeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-fo-float{animation:cl-fo-float 6s ease-in-out infinite}@keyframes cl-fo-float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-15px) rotate(1deg)}}.cl-fo-fadein{animation:cl-fo-fadein 1.2s ease-out both}@keyframes cl-fo-fadein{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}`}} />

      <div
        className="relative w-full overflow-hidden flex flex-col justify-center items-center"
        style={{ height: 'calc(100vh - 70px)', minHeight: '580px' }}
      >
        {/* Single background image */}
        <img
          src={BG_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg,rgba(0,31,76,.62) 0%,rgba(0,31,76,.78) 45%,rgba(223,84,0,.65) 100%)' }}
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
            ✨ Stories, Celebrations & Experiences
          </div>

          {/* Title */}
          <h1
            className="font-black text-white mb-[26px] leading-[.95] tracking-[-0.02em]"
            style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(2rem,8vw,5.5rem)' }}
          >
            Where Campus Life<br />
            <em className="not-italic block" style={{ color: '#E06B1B', filter: 'drop-shadow(0 2px 10px rgba(224,107,27,.6))' }}>
              Keeps Evolving
            </em>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[1.12rem] leading-[1.8] max-w-[700px] mx-auto mb-9 font-normal"
            style={{ color: 'rgba(255,255,255,.85)' }}
          >
           At Tulas, campus life is shaped by experiences, celebrations, creativity and moments that bring students together. From surprise events to cultural festivals, every day becomes a memory.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            
             <a href="#experiences"
              className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(224,107,27,.45)]"
              style={{ background: '#E06B1B', boxShadow: '0 4px 14px rgba(224,107,27,.3)' }}>
              Explore Experiences →
            </a>
            
            <a  href="#about"
              className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.4)' }}>
  
              Join The Communinty
            </a>
          </div>
        </div>
      </div>
    </>
  );
}