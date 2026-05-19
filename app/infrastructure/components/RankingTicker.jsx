'use client';

const ITEMS = [
  'NAAC A+ Accredited — Highest in Uttarakhand',
  'Ranked 86th by Times B-School Survey',
  'Top 50 Private Colleges in India',
  '65th Best Engineering College by Outlook',
  '20 Years of Academic Excellence',
  '7000+ Successful Alumni',
  '750+ Global Hiring Partners',
  'NBA Accredited Programs',
];

export default function RankingTicker() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes hostel-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hostel-ticker-track {
          animation: hostel-ticker 28s linear infinite;
        }
        .hostel-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f26522] overflow-hidden py-[13px] border-b-[3px] border-[#c94f0e]">
        <div className="hostel-ticker-track flex w-max">
          {allItems.map((item, i) => (
            <div
              key={i}
              className="font-montserrat flex items-center gap-[10px] px-10 whitespace-nowrap text-white font-bold text-[0.8rem] tracking-[0.05em] uppercase"
            >
              <span className="w-[5px] h-[5px] bg-white/50 rounded-full flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
