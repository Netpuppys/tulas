'use client';

const ITEMS = [
  '1,000+ Events Hosted Over 20 Years',
  'DIFF — 10 Editions of Cinema & Culture',
  'Sanskriti — Cultural Nights We Never Wanted to End',
  'Utkrisht — Where Ideas Stop Being Ideas',
  '50+ Celebrity Visits to Campus',
  '11 Student Clubs Under VIBGYOR',
  'NAAC A+ — Top Engineering College Uttarakhand',
];

export default function RankingTicker() {
  const all = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes cl-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-ticker-track {
          animation: cl-ticker 32s linear infinite;
        }
        .cl-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="overflow-hidden py-3"
        style={{ background: '#f26522', borderBottom: '3px solid #c94f0e' }}
      >
        <div className="cl-ticker-track flex w-max">
          {all.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-[10px] px-[38px] whitespace-nowrap font-bold text-[0.79rem] text-white tracking-[0.05em] uppercase"
             
            >
              <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,.5)' }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
