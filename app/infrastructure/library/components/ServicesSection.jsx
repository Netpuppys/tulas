'use client';

const SERVICES = [
  {
    icon: '🔍',
    title: 'OPAC Search System',
    text: 'An Online Public Access Catalogue (OPAC) lets students and faculty search the entire library collection digitally — check availability, location, and borrow history in seconds.',
  },
  {
    icon: '📡',
    title: 'FTP Intranet Access',
    text: 'All 18,383+ e-books and 3,338+ e-journals are available on the campus intranet via FTP, enabling seamless 24×7 access from hostel rooms, labs, and classrooms.',
  },
  {
    icon: '🎥',
    title: 'NPTEL Video Library',
    text: 'IIT-curated NPTEL video lectures cover cutting-edge topics across all engineering and science disciplines, keeping students and faculty updated on the latest advancements.',
  },
  {
    icon: '📋',
    title: 'Issue & Return',
    text: 'A streamlined book issue and return system ensures quick turnaround. Multiple copies of high-demand titles are stocked to reduce waiting times for students during exam season.',
  },
  {
    icon: '🏛',
    title: 'Reading & Study Zones',
    text: 'Separate silent reading areas and group study zones within the 448 sq.m. reference library provide the ideal atmosphere for focused individual and collaborative academic work.',
  },
  {
    icon: '🗞',
    title: 'Journals & Periodicals',
    text: 'Current issues of national and international journals, magazines, and newspapers are available in the periodical section — keeping students engaged with contemporary knowledge and events.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-5 mb-[52px] max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-3 max-[600px]:mb-8">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Library Services
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            What We <em className="text-[#f26522] not-italic">Offer</em>
          </h2>
        </div>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] max-w-[360px] max-[960px]:max-w-full">
          Comprehensive academic support services designed to empower every learner at Tulas.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[22px] max-[600px]:gap-[14px]">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="bg-[#f7f8fc] border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,0.1)] rounded-[16px] p-7 max-[600px]:p-[22px] transition-all duration-200"
          >
            <div className="w-12 h-12 max-[600px]:w-[42px] max-[600px]:h-[42px] bg-[#fff3ec] rounded-[12px] flex items-center justify-center text-[1.4rem] max-[600px]:text-[1.2rem] mb-[18px] max-[600px]:mb-[14px]">
              {s.icon}
            </div>
            <div className="font-montserrat font-bold text-[1.05rem] max-[600px]:text-[0.98rem] text-[#111111] mb-[10px]">{s.title}</div>
            <p className="text-[0.86rem] max-[600px]:text-[0.83rem] text-[#6b7280] leading-[1.7]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
