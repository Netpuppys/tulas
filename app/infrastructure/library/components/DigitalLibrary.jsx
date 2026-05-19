'use client';

const FEATURES = [
  {
    icon: '📘',
    title: '18,383+ E-Books',
    text: 'A continuously growing digital book collection covering engineering, management, pharmacy, law, agriculture, and more — available 24×7 via intranet FTP.',
  },
  {
    icon: '📰',
    title: '3,338+ E-Journals',
    text: 'Access to thousands of peer-reviewed research journals and academic publications spanning all departments and disciplines.',
  },
  {
    icon: '🖥',
    title: 'Campus FTP Intranet Access',
    text: 'All digital resources are accessible on-campus via a dedicated FTP server, ensuring fast and uninterrupted access for students and faculty.',
  },
];

export default function DigitalLibrary() {
  return (
    <section className="bg-white py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Left — text */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Digital Wing
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Digital Library &amp;<br />
            <em className="text-[#f26522] not-italic">E-Resources</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            In the past few years, the speed and affordability of digitising books has improved dramatically. Tulas now offers a comprehensive digital library accessible round the clock through an FTP server on the campus intranet — students can access books, journals, and multimedia learning material anytime, from anywhere on campus.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-[18px] mt-8 list-none">
            {FEATURES.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-4 max-[600px]:gap-3 py-[18px] max-[600px]:py-[14px] px-5 max-[600px]:px-4 bg-[#f7f8fc] border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:translate-x-1 rounded-[12px] transition-all duration-200"
              >
                <div className="w-10 h-10 max-[600px]:w-9 max-[600px]:h-9 bg-[#fff3ec] rounded-[10px] flex items-center justify-center text-[1.15rem] max-[600px]:text-[1rem] flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[0.92rem] max-[600px]:text-[0.88rem] text-[#111111] mb-1">{f.title}</div>
                  <div className="text-[0.83rem] max-[600px]:text-[0.8rem] text-[#6b7280] leading-[1.6]">{f.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — image + NPTEL box */}
        <div className="relative">
          {/* Orange corner accent — bottom-right */}
          <div className="absolute -bottom-3 -right-3 w-[80px] h-[80px] border-b-4 border-r-4 border-[#f26522] rounded-[4px] pointer-events-none max-[600px]:hidden" />

          <img
            src="/infrastructure/library/3image.jpg"
            alt="Digital Library"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block shadow-[0_24px_64px_rgba(0,0,0,0.1)]"
          />

          {/* Float badge */}
          <div className="absolute top-5 left-5 max-[600px]:top-[14px] max-[600px]:left-[14px] bg-[#f26522] text-white rounded-[10px] px-[18px] py-[14px] max-[600px]:px-[14px] max-[600px]:py-[10px] font-montserrat font-extrabold shadow-[0_8px_24px_rgba(242,101,34,0.4)]">
            <div className="text-[1.6rem] max-[600px]:text-[1.3rem] leading-none">18,383+</div>
            <span className="text-[0.68rem] max-[600px]:text-[0.62rem] opacity-90 tracking-[0.06em] uppercase mt-0.5 block">E-Books Available</span>
          </div>

          {/* NPTEL box */}
          <div className="bg-[#1e1e1e] rounded-[16px] px-7 py-7 max-[600px]:px-5 max-[600px]:py-5 flex items-start gap-[18px] max-[600px]:flex-col max-[600px]:gap-[14px] mt-12 max-[600px]:mt-8 border border-white/[0.07]">
            <div className="w-[80px] max-[600px]:w-[60px] flex-shrink-0 rounded-[10px] overflow-hidden">
              <img
                src="https://tulas.edu.in/_next/static/media/NPTEL.aad56441.png"
                alt="NPTEL"
                className="w-full block"
              />
            </div>
            <div>
              <div className="font-montserrat font-bold text-[1rem] max-[600px]:text-[0.92rem] text-white mb-2">NPTEL Video Lectures</div>
              <div className="text-[0.84rem] max-[600px]:text-[0.8rem] text-white/55 leading-[1.65]">
                The National Programme on Technology Enhanced Learning (NPTEL) by the IITs is available in-library. Students and faculty stay current with emerging technologies through high-quality video-based teaching modules.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
