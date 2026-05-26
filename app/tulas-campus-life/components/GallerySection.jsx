'use client';

// Hydration-safe: all grid span values are static inline styles
// Tilt transforms via Tailwind rotate classes
const IMAGES = [
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
    <section className="bg-white py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-5 mb-11 max-[600px]:mb-7 max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-4 max-[600px]:flex-col max-[600px]:items-start">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Memory Wall
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            A Glimpse of Our<br />
            <em className="text-[#f26522] not-italic">Campus</em>
          </h2>
        </div>
        <a
          href="https://tulas.edu.in/virtual-tour/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#e05510] text-white px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(242,101,34,0.4)] whitespace-nowrap max-[600px]:w-full"
        >
          360° Campus Tour →
        </a>
      </div>

      {/* Mosaic grid — hydration-safe: no style tags, inline style only for static gridRow span */}
            <div
        className="overflow-x-auto pb-3"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#f26522 #f1f1f1',
        }}
      >
        {/* 2-row grid that flows new images as columns to the right */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: '240px 240px',
            gridAutoFlow: 'column',
            gridAutoColumns: '400px',
            gap: '14px',
            width: 'max-content', /* lets the grid grow wider than the viewport */
          }}
        >
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={[
                'rounded-[14px] overflow-hidden relative cursor-pointer group',
                i === 0 ? 'row-span-2' : '',
              ].join(' ')}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[400ms] block"
              />
              <div className="absolute inset-0 bg-[rgba(242,101,34,0)] group-hover:bg-[rgba(242,101,34,0.2)] transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
