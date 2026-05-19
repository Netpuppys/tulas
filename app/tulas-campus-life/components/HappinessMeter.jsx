'use client';

import { useState, useEffect } from 'react';

const STAGES = [
  { pct: 10,  lbl: 'Campus\nHappiness',   tip: 'You just arrived!'                      },
  { pct: 22,  lbl: 'Friends\nUnlocked',   tip: 'Friendships Unlocked 🤝'                },
  { pct: 38,  lbl: 'Experiences\nAdded',  tip: 'Experiences Added 📸'                   },
  { pct: 55,  lbl: 'Memories\nGrowing',   tip: 'Campus Memories Growing 🎉'             },
  { pct: 70,  lbl: 'Learning\nBeyond',    tip: 'Learning Beyond Academics 💡'           },
  { pct: 85,  lbl: 'Culture\nRising',     tip: 'Community & Culture Rising 🌍'          },
  { pct: 100, lbl: '100%\nHappy',         tip: "Welcome to life at Tula's! 🎓"          },
];

export default function HappinessMeter() {
  const [visible,  setVisible]  = useState(false);
  const [fillPct,  setFillPct]  = useState(10);
  const [stage,    setStage]    = useState(STAGES[0]);
  const [showTip,  setShowTip]  = useState(false);

  useEffect(() => {
    function onScroll() {
      const st  = window.scrollY;
      const dh  = document.documentElement.scrollHeight - window.innerHeight;
      const sp  = dh > 0 ? Math.min(100, Math.max(0, (st / dh) * 100)) : 0;
      const hp  = Math.round(10 + sp * 0.9);

      setVisible(sp > 5);
      setFillPct(hp);

      let cur = STAGES[0];
      STAGES.forEach(s => { if (hp >= s.pct) cur = s; });
      setStage(cur);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  const isMaxHappy = fillPct >= 100;

  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-[8888] w-12 flex flex-col items-center gap-2 max-[960px]:hidden"
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
    >
      {/* Tooltip */}
      {showTip && (
        <div
          className="absolute right-[60px] top-1/2 -translate-y-1/2 rounded-[10px] px-[14px] py-[10px] whitespace-nowrap text-[0.75rem] font-semibold text-white pointer-events-none"
          style={{
            background: '#111111',
            boxShadow: '0 4px 16px rgba(0,0,0,.3)',
          }}
        >
          {stage.tip}
          {/* Arrow */}
          <span
            className="absolute -right-[6px] top-1/2 -translate-y-1/2 border-[6px] border-transparent"
            style={{ borderLeft: '6px solid #111111' }}
          />
        </div>
      )}

      {/* Icon */}
      <span className="text-[1.1rem]">😊</span>

      {/* Bar */}
      <div
        className="w-[6px] h-[200px] rounded-[100px] overflow-hidden relative"
        style={{ background: 'rgba(0,0,0,.1)' }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 rounded-[100px] transition-all duration-[1200ms] ease-out"
          style={{
            height: `${fillPct}%`,
            background: 'linear-gradient(to top,#f26522,#ff9050)',
            boxShadow: isMaxHappy ? '0 0 12px rgba(242,101,34,.6)' : 'none',
          }}
        />
      </div>

      {/* Percentage */}
      <span
        className="font-extrabold text-[0.72rem] text-[#f26522] text-center"
       
      >
        {fillPct}%
      </span>

      {/* Label */}
      <span className="text-[0.55rem] font-bold text-[#6b7280] text-center leading-[1.3] tracking-[0.03em] uppercase">
        {stage.lbl.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </span>
    </div>
  );
}
