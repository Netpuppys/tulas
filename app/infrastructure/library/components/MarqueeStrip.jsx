'use client';

const ITEMS = [
  { icon: '📚', label: '60,000+ Volumes' },
  { icon: '💻', label: '18,383+ E-Books' },
  { icon: '📰', label: '3,338+ E-Journals' },
  { icon: '🎥', label: 'NPTEL Lectures' },
  { icon: '🔍', label: 'OPAC Search' },
  { icon: '📡', label: 'FTP Intranet' },
  { icon: '🏛',  label: '448 m² Reference Hall' },
  { icon: '🔬', label: 'Science Collection' },
  { icon: '⚙️', label: 'Engineering Books' },
  { icon: '💼', label: 'Management Titles' },
  { icon: '⚖️', label: 'Law Resources' },
  { icon: '🗞',  label: 'Journals & Periodicals' },
];

export default function MarqueeStrip() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes lib-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lib-marquee-track {
          animation: lib-marquee 26s linear infinite;
        }
        .lib-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f7f8fc] overflow-hidden py-[50px] max-[600px]:py-9">
        <p className="font-montserrat text-center font-bold text-[0.73rem] text-[#9ca3af] tracking-[0.15em] uppercase mb-6">
          Library Resources &amp; Features
        </p>
        <div className="overflow-hidden">
          <div className="lib-marquee-track flex gap-[14px] w-max">
            {allItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-[9px] bg-white border border-[#e8e8e8] hover:border-[#f26522] rounded-full px-[22px] py-[11px] whitespace-nowrap text-[0.85rem] text-[#1e1e1e] font-medium flex-shrink-0 transition-colors duration-200 cursor-default"
              >
                <span className="text-[1rem]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
