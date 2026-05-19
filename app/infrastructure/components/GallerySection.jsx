'use client';

const IMAGES = [
  { src: '/infrastructure/HostelMess/gallery.png', alt: 'Hostel exterior' },
  { src: '/infrastructure/HostelMess/gallery2.jpg', alt: 'Hostel room' },
  { src: '/infrastructure/HostelMess/gallery3.jpg', alt: 'Mess hall' },
  { src: '/infrastructure/HostelMess/gallery4.jpg', alt: 'Cafeteria' },
  { src: '/infrastructure/HostelMess/gallery5.jpg', alt: 'Cricket ground' },
  { src: '/infrastructure/HostelMess/girlshostel.jpg', alt: 'Cricket ground' },
  { src: '/infrastructure/HostelMess/sports2.jpg', alt: 'Cricket ground' },
  { src: '/infrastructure/HostelMess/mess.jpg', alt: 'Cricket ground' },
  { src: '/infrastructure/HostelMess/boyshostel.jpg', alt: 'Cricket ground' },
];

export default function GallerySection() {
  return (
    <section className="bg-white py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] max-[960px]:grid-cols-1 items-end gap-5 mb-11 max-[600px]:mb-5">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Campus Life
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Life at <em className="text-[#f26522] not-italic">Tulas</em>
          </h2>
        </div>
        
        <a  href="https://tulas.edu.in/virtual-tour/index.html"
          className="font-montserrat inline-flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#e05510] text-white px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(242,101,34,0.4)] whitespace-nowrap max-[960px]:w-full"
        >
          360° Campus Tour →
        </a>
      </div>

      {/* Horizontally scrollable wrapper */}
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
            gridAutoColumns: '300px',
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