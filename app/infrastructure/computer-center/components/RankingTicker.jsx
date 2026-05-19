'use client';

const ITEMS = [
  '500+ Desktops with Licensed Software',
  '1 Gbps Internet — 24×7 Wi-Fi Campus-Wide',
  '650+ Network Nodes Commissioned',
  'Exclusive Software Development Cell',
  'Windows & Linux High-End Servers',
  'Live ERP Projects for Students',
  'NAAC A+ — Top Engineering College Dehradun',
  '20+ Years of Academic Excellence',
];

export default function RankingTicker() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes cc-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cc-ticker-track {
          animation: cc-ticker 30s linear infinite;
        }
        .cc-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f26522] overflow-hidden py-[13px] border-b-[3px] border-[#c94f0e]">
        <div className="cc-ticker-track flex w-max">
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
