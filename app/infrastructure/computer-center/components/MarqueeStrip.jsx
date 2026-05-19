'use client';

const ITEMS = [
  { icon: '💻', label: '500+ Desktops' },
  { icon: '📡', label: '650+ Network Nodes' },
  { icon: '⚡',  label: '1 Gbps Leased Line' },
  { icon: '📶', label: '24×7 Wi-Fi' },
  { icon: '🐧', label: 'Windows & Linux' },
  { icon: '🏗',  label: 'Live ERP Projects' },
  { icon: '🤖', label: 'AI & ML Lab' },
  { icon: '🔗', label: 'Networking Lab' },
  { icon: '📐', label: 'CAD Workstations' },
  { icon: '🔒', label: 'Cyber Security Lab' },
  { icon: '🖥️', label: 'Licensed Software' },
  { icon: '👨‍💻', label: 'Software Dev Cell' },
];

export default function MarqueeStrip() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes cc-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cc-marquee-track {
          animation: cc-marquee 28s linear infinite;
        }
        .cc-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f7f8fc] overflow-hidden py-[50px] max-[600px]:py-9">
        <p className="font-montserrat text-center font-bold text-[0.73rem] text-[#9ca3af] tracking-[0.15em] uppercase mb-6">
          Computer Centre Features
        </p>
        <div className="overflow-hidden">
          <div className="cc-marquee-track flex gap-[14px] w-max">
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
