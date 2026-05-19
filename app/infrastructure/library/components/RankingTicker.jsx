'use client';

const ITEMS = [
  '60,000+ Book Volumes',
  '18,383+ E-Books Available 24×7',
  '3,338+ E-Journals via FTP Intranet',
  'NPTEL Video Lectures Available',
  '448 sq.m. Reference Library',
  'NAAC A+ Accredited Institution',
  'Top 10 Engineering Colleges in Dehradun',
  '20+ Years of Academic Excellence',
];

export default function RankingTicker() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes lib-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lib-ticker-track {
          animation: lib-ticker 28s linear infinite;
        }
        .lib-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f26522] overflow-hidden py-[13px] border-b-[3px] border-[#c94f0e]">
        <div className="lib-ticker-track flex gap-0 w-max">
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
