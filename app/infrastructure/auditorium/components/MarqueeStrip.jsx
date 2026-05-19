'use client';

const ITEMS = [
  { icon: '🪑',  label: '550 Seat Capacity' },
  { icon: '🔊', label: 'Dolby Surround Sound' },
  { icon: '📽️', label: 'HD Imported Projector' },
  { icon: '❄️', label: 'Central Air Conditioning' },
  { icon: '💡', label: 'Stage Lighting Rig' },
  { icon: '🎭', label: 'Theatre Performances' },
  { icon: '🎤', label: 'Conference Ready' },
  { icon: '🎵', label: 'Excellent Acoustics' },
  { icon: '🎓', label: 'Academic Events' },
  { icon: '🎬', label: 'Film Screenings' },
  { icon: '🏛️', label: 'Modern Architecture' },
  { icon: '🌟', label: "Northern India's Finest" },
];

export default function MarqueeStrip() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes aud-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .aud-marquee-track {
          animation: aud-marquee 26s linear infinite;
        }
        .aud-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f7f8fc] overflow-hidden py-[50px] max-[600px]:py-9">
        <p className="font-montserrat text-center font-bold text-[0.73rem] text-[#9ca3af] tracking-[0.15em] uppercase mb-6">
          Auditorium Features &amp; Amenities
        </p>
        <div className="overflow-hidden">
          <div className="aud-marquee-track flex gap-[14px] w-max">
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
