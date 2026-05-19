'use client';

// Hydration-safe: all grid span values are static inline styles
// Tilt transforms via Tailwind rotate classes
const ITEMS = [
  { src: 'https://tulas.edu.in/_next/static/media/biggestAuditorium.33536442.png', alt: 'Stage',       icon: '📸', label: 'The Grand Stage',      colSpan: 2, rowSpan: 2, tilt: null     },
  { src: 'https://tulas.edu.in/_next/static/media/multiUse.4a21bb41.png',         alt: 'Cultural',    icon: '🎭', label: 'Cultural Night',        colSpan: 1, rowSpan: 1, tilt: '0.8deg'  },
  { src: 'https://tulas.edu.in/_next/static/media/img3.ad931c1f.png',             alt: 'Sports',      icon: '🏏', label: 'Sports Day',            colSpan: 1, rowSpan: 1, tilt: '-0.6deg' },
  { src: 'https://tulas.edu.in/_next/static/media/cafeteria.fcb5d881.png',        alt: 'Cafe',        icon: '☕', label: 'Midnight Cafeteria',    colSpan: 1, rowSpan: 1, tilt: '0.5deg'  },
  { src: 'https://tulas.edu.in/_next/static/media/bannerImgHostel.614f090d.webp', alt: 'Hostel',      icon: '🏠', label: 'Hostel Life',           colSpan: 1, rowSpan: 1, tilt: null      },
  { src: 'https://tulas.edu.in/_next/static/media/library.7922f813.png',          alt: 'Library',     icon: '📚', label: 'Library Hours',         colSpan: 1, rowSpan: 1, tilt: '0.8deg'  },
  { src: 'https://tulas.edu.in/_next/static/media/mess.4e4d4218.png',             alt: 'Mess',        icon: '🍽️', label: 'Mess Memories',         colSpan: 2, rowSpan: 1, tilt: null      },
  { src: 'https://tulas.edu.in/_next/static/media/img1.cdb374cf.webp',            alt: 'Hostel room', icon: '🛏', label: 'Room Life',             colSpan: 1, rowSpan: 1, tilt: '-0.6deg' },
  { src: 'https://tulas.edu.in/_next/static/media/img2.709bd723.png',             alt: 'Event',       icon: '✨', label: 'Campus Energy',         colSpan: 1, rowSpan: 1, tilt: '0.5deg'  },
];

export default function GallerySection() {
  return (
    <>
    <style dangerouslySetInnerHTML={{__html:`.cl-gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:220px 220px 180px;gap:13px}@media(max-width:960px){.cl-gallery-grid{grid-template-columns:repeat(2,1fr);grid-template-rows:none;gap:10px}.cl-gallery-grid>*{grid-column:span 1!important;grid-row:span 1!important;height:180px}}@media(max-width:600px){.cl-gallery-grid{grid-template-columns:1fr}.cl-gallery-grid>*{height:200px}}`}} />
    <section className="bg-white py-[88px] max-[960px]:py-[60px] max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-[22px] h-[2px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Memory Wall
          </div>
          <h2
            className="text-[#111111] text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] tracking-[0.01em]"
          >
            Campus <span className="text-[#f26522]">Moments</span>
          </h2>
        </div>
        <a
          href="https://tulas.edu.in/virtual-tour/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-white bg-[#f26522] hover:bg-[#e05510] px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(242,101,34,.4)] max-[600px]:w-full"
        >
          360° Campus Tour →
        </a>
      </div>

      {/* Grid — 4 cols desktop, 2 cols tablet, 1 col mobile */}
      <div className="cl-gallery-grid">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="rounded-[14px] overflow-hidden relative cursor-pointer group"
            style={{
              gridColumn: item.colSpan > 1 ? `span ${item.colSpan}` : undefined,
              gridRow: item.rowSpan > 1 ? `span ${item.rowSpan}` : undefined,
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[400ms] block"
            />
            {/* Orange hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-[rgba(242,101,34,.18)]">
              <div className="w-[42px] h-[42px] bg-white/92 rounded-full flex items-center justify-center text-[1.1rem] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                {item.icon}
              </div>
            </div>
            {/* Label */}
            <div
              className="absolute bottom-3 left-3 font-bold text-[0.78rem] text-white"
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
