'use client';

const VIDEOS = [
  { wide: true,  icon: '▶️', placeholder: 'Add Campus Reel Here',        label: '🎬 Campus Life Reel 2025',         noPlay: true  },
  { wide: false, icon: '🎤', placeholder: 'Add Student Video',           label: 'Student Experience — Year 2',     noPlay: false },
  { wide: false, icon: '🎶', placeholder: 'Add Sanskriti Highlights',    label: 'Sanskriti 2025 — Festival Highlights', noPlay: false },
  { wide: false, icon: '🏆', placeholder: 'Add Utkrisht Video',          label: 'Utkrisht 2025 — Innovation Showcase', noPlay: false },
];

export default function StudentStories() {
  return (
    <section className="bg-[#f7f8fc] py-[88px] max-[960px]:py-[60px] px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header — centered */}
      <div className="text-center max-w-[640px] mx-auto mb-[52px]">
        <div
          className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]"
        >
          <span className="block w-[22px] h-[2px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
          Student Stories
        </div>
        <h2
          className="text-center text-[#111111] text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] mb-3 tracking-[0.01em]"
        >
          Voices of <span className="text-[#f26522]">Tula&apos;s</span>
        </h2>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] text-center">
          Authentic moments. Real stories. Campus memories that stay with you forever.
        </p>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[18px]">
        {VIDEOS.map((vid, i) => (
          <div
            key={i}
            className={[
              'relative rounded-[16px] overflow-hidden cursor-pointer group',
              vid.wide ? 'col-span-2 max-[600px]:col-span-1' : '',
            ].join(' ')}
            style={{
              aspectRatio: vid.wide ? '16/8' : '16/9',
            }}
          >
            {/* Placeholder background */}
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-[10px]"
              style={{ background: 'linear-gradient(135deg,#1e1e1e 0%,#2a2a2a 100%)', minHeight: '240px' }}
            >
              <span className="text-[2rem] opacity-40">{vid.icon}</span>
              <span className="text-[0.72rem] text-white/30 font-semibold tracking-[0.08em] uppercase">
                {vid.placeholder}
              </span>
            </div>

            {/* Dark overlay */}
            <div
              className="absolute inset-0 transition-colors duration-300 group-hover:bg-black/15"
              style={{ background: 'rgba(0,0,0,.35)' }}
            />

            {/* Play button (not on wide) */}
            {!vid.noPlay && (
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full flex items-center justify-center text-[1.2rem] pl-[4px] transition-all duration-300 group-hover:shadow-[0_0_0_8px_rgba(255,255,255,.15)] scale-90 group-hover:scale-100"
                style={{ background: 'rgba(255,255,255,.92)' }}
              >
                ▶
              </div>
            )}

            {/* Label */}
            <div
              className="absolute bottom-[14px] left-[14px] right-[14px] font-bold text-[0.84rem] text-white"
             
            >
              {vid.label}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-7 text-[0.82rem] text-[#6b7280] italic">
        ⚡ Replace placeholders with actual campus video thumbnails or embed YouTube links
      </p>
    </section>
  );
}
