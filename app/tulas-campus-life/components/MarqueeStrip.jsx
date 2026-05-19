'use client';

const ITEMS = [
  { icon: '🎬', label: 'DIFF — 10 Editions'        },
  { icon: '⚡', label: 'Utkrisht Tech Fest'         },
  { icon: '🎶', label: 'Sanskriti Cultural Fest'    },
  { icon: '🌟', label: 'Freshers Orientation'       },
  { icon: '🏛', label: 'Chhatra Sansad 2026'        },
  { icon: '💛', label: 'Alumni Meet'                },
  { icon: '⭐', label: '50+ Celebrity Visits'       },
  { icon: '🎭', label: '11 Student Clubs'           },
  { icon: '🏠', label: 'Hostel Life'                },
  { icon: '🏋️', label: 'Sports & Wellness'          },
  { icon: '💡', label: 'Hackathons & Innovation'    },
  { icon: '🤞', label: '7,000+ Alumni Network'      },
];

export default function MarqueeStrip() {
  const all = [...ITEMS, ...ITEMS];

  return (
    <>
      <style>{`
        @keyframes cl-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-marquee-track {
          animation: cl-marquee 30s linear infinite;
        }
        .cl-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-[#f7f8fc] overflow-hidden py-[46px]">
        <p
          className="text-center font-bold text-[0.71rem] text-[#6b7280] tracking-[0.15em] uppercase mb-[18px]"
         
        >
          Campus Life at Tula&apos;s
        </p>
        <div className="overflow-hidden">
          <div className="cl-marquee-track flex gap-[13px] w-max">
            {all.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-[#e8e8e8] hover:border-[#f26522] rounded-full px-5 py-[10px] whitespace-nowrap text-[0.84rem] text-[#1e1e1e] font-medium flex-shrink-0 transition-colors duration-200 cursor-default"
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
