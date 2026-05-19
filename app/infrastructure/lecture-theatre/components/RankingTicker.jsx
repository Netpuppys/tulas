'use client';

const ITEMS = [
  'Spacious 70-Seat Lecture Theatres',
  'Advanced Audio-Visual Aids',
  'Unique & Fully Equipped Lecture Halls',
  'Designed for Interactive Learning',
  'Comfortable for Intense Classroom Sessions',
  'NAAC A+ Accredited Institution',
  'Top 10 Engineering College in Uttarakhand',
  '20+ Years of Academic Excellence',
];

export default function RankingTicker() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes lt-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lt-ticker-track {
          animation: lt-ticker 28s linear infinite;
        }
        .lt-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f26522] overflow-hidden py-[13px] border-b-[3px] border-[#c94f0e]">
        <div className="lt-ticker-track flex gap-0 w-max">
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
