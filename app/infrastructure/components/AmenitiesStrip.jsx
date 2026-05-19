'use client';

const AMENITIES = [
  { icon: '📶', label: '24hr Wi-Fi' },
  { icon: '🚿', label: 'Solar Hot Water' },
  { icon: '🏏', label: 'Cricket Ground' },
  { icon: '💳', label: 'Campus ATM' },
  { icon: '🌐', label: 'Foreign Language Classes' },
  { icon: '🎯', label: 'Personality Development' },
  { icon: '🏥', label: 'MBBS Doctor' },
  { icon: '🚑', label: '24×7 Ambulance' },
  { icon: '☕', label: 'Cafeteria till 2:30 AM' },
  { icon: '📚', label: 'Study Desk per Room' },
  { icon: '🔒', label: 'CCTV Surveillance' },
  { icon: '🏋️', label: 'Sports Facilities' },
];

export default function AmenitiesStrip() {
  const allItems = [...AMENITIES, ...AMENITIES];

  return (
    <>
      <style>{`
        @keyframes hostel-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hostel-marquee-track {
          animation: hostel-marquee 26s linear infinite;
        }
        .hostel-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f7f8fc] overflow-hidden py-[52px] max-[600px]:py-9">
        <p className="font-montserrat text-center font-bold text-[0.73rem] text-[#9ca3af] tracking-[0.15em] uppercase mb-6">
          Hostel Add-On Amenities
        </p>
        <div className="overflow-hidden">
          <div className="hostel-marquee-track flex gap-[14px] w-max">
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
