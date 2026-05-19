'use client';

const ITEMS = [
  '550-Seat State-of-the-Art Auditorium',
  'Dolby Surround Sound System',
  'Centrally Air-Conditioned',
  'High-Resolution Imported Projector',
  'Largest Auditorium in Dehradun',
  'Modern Architecture — One of its Kind in Northern India',
  'NAAC A+ Accredited Institution',
  '20+ Years of Academic Excellence',
];

export default function RankingTicker() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes aud-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .aud-ticker-track {
          animation: aud-ticker 28s linear infinite;
        }
        .aud-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f26522] overflow-hidden py-[13px] border-b-[3px] border-[#c94f0e]">
        <div className="aud-ticker-track flex gap-0 w-max">
          {allItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-[10px] px-10 whitespace-nowrap font-montserrat font-bold text-[0.8rem] text-white tracking-[0.05em] uppercase"
            >
              <span className="w-[5px] h-[5px] bg-white/50 rounded-full flex-shrink-0 block" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
