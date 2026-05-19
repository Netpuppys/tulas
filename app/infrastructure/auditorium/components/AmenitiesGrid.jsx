'use client';

const CARDS = [
  {
    icon: '🔊',
    title: 'Dolby Surround Sound',
    text: 'Professional Dolby surround sound equipment ensures crystal-clear audio quality throughout the hall — whether for live performances, speeches, or high-impact AV presentations.',
  },
  {
    icon: '📽️',
    title: 'HD Projector System',
    text: 'A specially imported, powerful high-resolution projector delivers stunning visuals for slideshows, video screenings, and cinematic presentations — versatile for any event format.',
  },
  {
    icon: '💡',
    title: 'Stage Lighting Rig',
    text: 'State-of-the-art lighting infrastructure with full programmability supports every kind of event — from intimate academic lectures to large-scale theatrical and cultural productions.',
  },
  {
    icon: '🎤',
    title: 'Conference & Seminar Ready',
    text: 'Fully equipped for corporate conferences, guest lectures, and academic seminars with professional AV integration, lapel and podium microphones, and seamless presentation connectivity.',
  },
  {
    icon: '🏛️',
    title: 'Modern Architecture',
    text: 'Built to reflect architectural excellence, the auditorium is a landmark structure on campus — designed for aesthetics and functionality, making it one of its kind in all of Northern India.',
  },
];

const FEAT_TAGS = ['550 Seats', 'Central AC', 'Wide Stage', 'Premium Seating'];

export default function AmenitiesGrid() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-5 mb-[52px] max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-3 max-[600px]:mb-8">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Facilities &amp; Equipment
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Everything That Makes It<br />
            <em className="text-[#f26522] not-italic">World-Class</em>
          </h2>
        </div>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] max-w-[360px] max-[960px]:max-w-full">
          Every detail of the auditorium has been designed to deliver an unmatched experience — for students, faculty, and guests alike.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[22px] max-[600px]:gap-[14px]">

        {/* Featured card — spans 2 cols */}
        {/* <div
          className="bg-white border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,0.1)] rounded-[16px] overflow-hidden transition-all duration-200 relative col-span-2 max-[600px]:col-span-1 grid grid-cols-[1fr_1.2fr] max-[960px]:grid-cols-1 max-[600px]:grid-cols-1"
        >
          <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.07)_0%,transparent_70%)] pointer-events-none" />

          <div className="overflow-hidden max-[960px]:h-[220px] max-[600px]:h-[200px]">
            <img
              src="https://tulas.edu.in/_next/static/media/biggestAuditorium.33536442.png"
              alt="Main Auditorium Hall"
              className="w-full h-full object-cover block hover:scale-[1.05] transition-transform duration-[400ms]"
            />
          </div>

          <div className="p-8 max-[600px]:p-[22px] flex flex-col justify-center">
            <div className="w-12 h-12 max-[600px]:w-[42px] max-[600px]:h-[42px] bg-[#fff3ec] rounded-[12px] flex items-center justify-center text-[1.4rem] max-[600px]:text-[1.2rem] mb-[18px] max-[600px]:mb-[14px]">
              🎭
            </div>
            <div className="font-montserrat font-bold text-[1.3rem] max-[600px]:text-[1.1rem] text-[#111111] mb-[10px]">Main Auditorium Hall</div>
            <p className="text-[0.86rem] max-[600px]:text-[0.83rem] text-[#6b7280] leading-[1.7]">
              A grand, centrally air-conditioned hall with a 550-person seating capacity, designed for everything from annual day celebrations and cultural fests to national-level conferences and seminars. The hall boasts exceptional acoustics, a wide stage, and premium seating arrangements.
            </p>
            <div className="flex gap-2 flex-wrap mt-[18px] max-[600px]:gap-[6px]">
              {FEAT_TAGS.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#fff3ec] text-[#f26522] rounded-full px-[14px] py-[5px] max-[600px]:px-[11px] max-[600px]:py-1 text-[0.75rem] max-[600px]:text-[0.72rem] font-semibold tracking-[0.03em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div> */}

        {/* Regular cards */}
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="bg-white border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,0.1)] rounded-[16px] p-7 max-[600px]:p-[22px] transition-all duration-200 relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.07)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 max-[600px]:w-[42px] max-[600px]:h-[42px] bg-[#fff3ec] rounded-[12px] flex items-center justify-center text-[1.4rem] max-[600px]:text-[1.2rem] mb-[18px] max-[600px]:mb-[14px]">
              {card.icon}
            </div>
            <div className="font-montserrat font-bold text-[1.05rem] max-[600px]:text-[0.98rem] text-[#111111] mb-[10px]">{card.title}</div>
            <p className="text-[0.86rem] max-[600px]:text-[0.83rem] text-[#6b7280] leading-[1.7]">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
