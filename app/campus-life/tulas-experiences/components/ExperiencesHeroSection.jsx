'use client';

import { useState, useEffect } from 'react';

const COLLAGE_IMGS = [
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
];

const PULSE_STATES = [
  { icon: '🎉', tag: 'Campus Buzz Growing',     fill: 65 },
  { icon: '✨', tag: 'Workshop Energy Rising',   fill: 80 },
  { icon: '🎨', tag: 'Festival Mode Active',     fill: 90 },
  { icon: '🎪', tag: 'New Memories Added',       fill: 75 },
  { icon: '🌟', tag: 'Community Moments Live',   fill: 85 },
  { icon: '🎭', tag: 'Creative Energy High',     fill: 70 },
];

function CampusPulse() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx]         = useState(0);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % PULSE_STATES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const state = PULSE_STATES[idx];

  return (
    <div
      className="fixed right-[30px] top-1/2 z-[100] rounded-[16px] px-[18px] py-5 transition-all duration-[400ms] max-[768px]:right-[15px] max-[768px]:px-3 max-[768px]:py-[14px]"
      style={{
        transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,.95)',
        backdropFilter: 'blur(16px)',
        border: '2px solid #e2e8f0',
        boxShadow: '0 12px 40px rgba(0,31,76,.15)',
        minWidth: '160px',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <style dangerouslySetInnerHTML={{__html:`.cl-pulse-icon{font-size:2rem;text-align:center;margin-bottom:10px;animation:cl-pulse 2s ease-in-out infinite}@keyframes cl-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}`}} />
      <div className="cl-pulse-icon">{state.icon}</div>
      <div
        className="text-[.7rem] font-bold uppercase tracking-[.08em] text-center leading-[1.3]"
        style={{ color: '#DF5400' }}
      >
        {state.tag}
      </div>
      <div className="w-full h-[4px] rounded-[4px] mt-3 overflow-hidden" style={{ background: '#f8f9fb' }}>
        <div
          className="h-full rounded-[4px] transition-all duration-[1s] ease-out"
          style={{
            width: `${state.fill}%`,
            background: 'linear-gradient(90deg,#DF5400,#ff6b1a)',
          }}
        />
      </div>
    </div>
  );
}

export default function ExperiencesHeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-exp-collage{position:absolute;inset:0;z-index:0;display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(4,1fr);gap:6px;opacity:.4}.cl-exp-cell{overflow:hidden;position:relative}.cl-exp-cell img{width:100%;height:100%;object-fit:cover;filter:grayscale(40%) contrast(1.05);transform:scale(1.05);animation:cl-float-zoom 15s ease-in-out infinite alternate}.cl-exp-cell:nth-child(even) img{animation-delay:-7s}.cl-exp-cell:nth-child(3n) img{animation-delay:-3s}@keyframes cl-float-zoom{0%{transform:scale(1.05) rotate(0deg)}100%{transform:scale(1.12) rotate(1deg)}}@media(max-width:768px){.cl-exp-collage{grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(5,1fr)}}`}} />

      <CampusPulse />

      <div
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Floating collage background */}
        <div className="cl-exp-collage">
          {COLLAGE_IMGS.map((src, i) => (
            <div key={i} className="cl-exp-cell">
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg,rgba(0,31,76,.92) 0%,rgba(0,31,76,.78) 45%,rgba(223,84,0,.65) 100%)' }}
        />

        {/* Diagonal grain */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            opacity: '.04',
            background: 'repeating-linear-gradient(-60deg,transparent,transparent 45px,rgba(255,255,255,.6) 45px,rgba(255,255,255,.6) 46px)',
          }}
        />

        {/* Content */}
        <div className="relative z-[5] text-center px-[7%] w-full">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-[10px] text-[.72rem] font-bold tracking-[.12em] uppercase text-white"
            style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.25)', boxShadow: '0 4px 20px rgba(0,0,0,.2)' }}
          >
            ✨ Stories, Celebrations &amp; Experiences
          </div>

          {/* Title */}
          <h1
            className="font-black text-white mb-[26px] leading-[.95] tracking-[-0.02em]"
            style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(3rem,8vw,7.5rem)' }}
          >
            Where Campus Life<br />
            <em
              className="not-italic block"
              style={{ color: '#ff6b1a', textShadow: '0 6px 40px rgba(223,84,0,.6)' }}
            >
              Keeps Evolving.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="text-[1.2rem] leading-[1.75] max-w-[700px] mx-auto mb-10 font-medium"
            style={{ color: 'rgba(255,255,255,.85)' }}
          >
            At Tulas, <strong className="text-white font-bold">campus life is shaped by experiences, celebrations, creativity</strong> and moments that bring students together. From surprise events to cultural festivals, every day becomes a memory.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-[12px] font-bold text-[.95rem] text-white transition-all duration-300 hover:-translate-y-[3px]"
              style={{ background: '#DF5400', boxShadow: '0 8px 24px rgba(223,84,0,.3)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(223,84,0,.45)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(223,84,0,.3)'}
            >
              Explore Experiences →
            </a>
            <a
              href="#stories"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-[12px] font-bold text-[.95rem] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.5)' }}
            >
              Watch Campus Moments
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
