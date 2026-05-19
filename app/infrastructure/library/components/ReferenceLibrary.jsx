'use client';

const SUBJECTS = [
  { icon: '🔬', name: 'Basic Sciences',          count: 'Physics, Chemistry, Maths' },
  { icon: '⚙️', name: 'Engineering',              count: 'All branches covered' },
  { icon: '💼', name: 'Management',               count: 'MBA, BBA, Finance' },
  { icon: '🌍', name: 'Humanities & Social Sci.', count: 'Languages, Sociology' },
  { icon: '⚖️', name: 'Law',                      count: 'LLB, Legal Studies' },
  { icon: '💊', name: 'Pharmacy',                 count: 'B.Pharma resources' },
];

export default function ReferenceLibrary() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Left — text */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Physical Collection
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Reference<br />
            <em className="text-[#f26522] not-italic">Library</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            The institute has a dedicated Reference Library spread across more than 448 sq. m., housing a comprehensive collection across all academic disciplines. Designed as a quiet, focused space for deep reading and research, it is a favourite destination for students seeking concentrated study time.
          </p>

          {/* Area box */}
          <div className="bg-[#111111] rounded-[16px] px-7 py-7 max-[600px]:px-5 max-[600px]:py-5 flex items-center gap-5 max-[600px]:flex-col max-[600px]:gap-[10px] max-[600px]:text-center mt-7 max-[600px]:mt-6">
            <span className="font-montserrat font-extrabold text-[#f26522] text-[2.4rem] max-[600px]:text-[2rem] flex-shrink-0">448 m²</span>
            <span className="text-[0.9rem] max-[600px]:text-[0.86rem] text-white/60 leading-[1.6]">
              <strong className="text-white font-semibold">Dedicated Reference Space</strong><br />
              Spread across a spacious, well-lit hall stocked with books on basic sciences, engineering, technology, humanities, social sciences, and management.
            </span>
          </div>

          <div className="mt-7">
            <a
              href="https://tulas-opac.kohacloud.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat inline-flex items-center gap-2 bg-[#f26522] hover:bg-[#e05510] text-white px-8 py-[14px] rounded-[10px] font-bold text-[0.92rem] tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(242,101,34,0.4)]"
            >
              🔍 Search OPAC Catalogue →
            </a>
          </div>
        </div>

        {/* Right — image + subjects grid */}
        <div>
          <img
            src="/infrastructure/library/4image.jpg"
            alt="Reference Library"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block shadow-[0_24px_64px_rgba(0,0,0,0.1)]"
          />

          {/* Subjects grid */}
          <div className="grid grid-cols-2 max-[380px]:grid-cols-1 gap-[14px] max-[600px]:gap-[10px] mt-7 max-[600px]:mt-5">
            {SUBJECTS.map((s, i) => (
              <div
                key={i}
                className="bg-white border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(242,101,34,0.1)] rounded-[12px] px-4 py-[18px] max-[600px]:px-3 max-[600px]:py-[14px] flex items-start gap-3 max-[600px]:gap-[10px] transition-all duration-200"
              >
                <div className="w-9 h-9 max-[600px]:w-[30px] max-[600px]:h-[30px] bg-[#fff3ec] rounded-[8px] flex items-center justify-center text-[1rem] max-[600px]:text-[0.9rem] flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[0.84rem] max-[600px]:text-[0.78rem] text-[#111111] mb-[3px]">{s.name}</div>
                  <div className="text-[0.75rem] max-[600px]:text-[0.7rem] text-[#6b7280]">{s.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
