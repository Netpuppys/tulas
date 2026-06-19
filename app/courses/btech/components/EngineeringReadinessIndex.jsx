'use client';

import { useState, useEffect } from 'react';

const TI_LABELS = [
  { t: 0,   l: 'Technical Skills Growing'      },
  { t: 35,  l: 'Innovation Exposure Increasing' },
  { t: 65,  l: 'Project Experience Building'    },
  { t: 90,  l: 'Industry Readiness Rising'      },
  { t: 100, l: 'Future Engineer Ready'          },
];

export default function EngineeringReadinessIndex() {
  const [percent, setPercent] = useState(0);
  const [label, setLabel]     = useState('Technical Skills Growing');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const startSection = document.getElementById('labs-section');
      const endSection   = document.getElementById('ecosystem-section');
      if (!startSection || !endSection) return;

      const startTop = startSection.offsetTop - window.innerHeight;
      const endTop   = endSection.offsetTop;
      const y        = window.scrollY;

      if (y > startTop && y < endTop + 300) {
        setVisible(true);
        let p = ((y - startTop) / (endTop - startTop)) * 100;
        p = Math.min(100, Math.max(0, p));
        const rounded = Math.round(p);
        setPercent(rounded);

        let lbl = TI_LABELS[0].l;
        for (const x of TI_LABELS) { if (p >= x.t) lbl = x.l; }
        setLabel(lbl);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-eri{position:fixed;right:30px;top:50%;transform:translateY(-50%);z-index:8888;backdrop-filter:blur(16px);border-radius:16px;padding:22px 18px;width:144px;transition:opacity .5s}
        .cl-eri-circle::before{content:'';position:absolute;inset:8px;background:#001F4C;border-radius:50%}
        @media(max-width:968px){.cl-eri{display:none!important}}
      `}} />

      <div
        className="cl-eri"
        style={{
          background: 'rgba(0,31,76,.95)',
          border: '1px solid rgba(255,255,255,.15)',
          boxShadow: '0 12px 36px rgba(0,0,0,.3)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <div
          className="text-center leading-[1.4] mb-[16px] uppercase tracking-[.08em]"
          style={{ fontSize: '.64rem', color: '#FFF3D7', fontWeight: 700 }}
        >
          Engineering Readiness Index
        </div>

        {/* Conic circle */}
        <div
          className="cl-eri-circle relative w-[90px] h-[90px] mx-auto mb-[14px] rounded-full flex items-center justify-center transition-all duration-1000"
          style={{ background: `conic-gradient(#DF5400 ${percent}%, rgba(255,255,255,.15) ${percent}%)` }}
        >
          <span
            className="relative z-[2] text-white"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.6rem' }}
          >
            {percent}%
          </span>
        </div>

        <div
          className="text-center leading-[1.4] min-h-[28px]"
          style={{ fontSize: '.66rem', color: 'rgba(255,255,255,.7)' }}
        >
          {label}
        </div>
      </div>
    </>
  );
}
