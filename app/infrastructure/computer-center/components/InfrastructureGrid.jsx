'use client';

const FEATURED = {
  image: 'https://tulas.edu.in/_next/static/media/img4.c832e4cd.webp',
  icon: '🖥️',
  title: 'Main Computer Laboratories',
  text: 'Spacious, air-conditioned labs equipped with 500+ high-performance desktops loaded with the latest licensed software. All machines are connected via a dedicated 1 Gbps internet line and campus-wide LAN — students work in an environment that mirrors top-tier tech companies.',
  tags: ['500+ Desktops', '1 Gbps Internet', 'Air-Conditioned', 'Licensed Software'],
};

const CARDS = [
  {
  icon: '🖥️',
  title: 'Main Computer Laboratories',
  text: 'Spacious, air-conditioned labs equipped with 500+ high-performance desktops loaded with the latest licensed software. All machines are connected via a dedicated 1 Gbps internet line and campus-wide LAN — students work in an environment that mirrors top-tier tech companies.',
  tags: ['500+ Desktops', '1 Gbps Internet', 'Air-Conditioned', 'Licensed Software'],
},
  {
    icon: '🌐',
    title: 'Campus-Wide Networking',
    text: 'The campus area network covers 650+ nodes across all buildings — hostels, labs, classrooms, and administrative blocks. Students stay connected everywhere, enabling seamless e-learning and collaboration 24×7.',
  },
  {
    icon: '🐧',
    title: 'Multi-OS Server Environment',
    text: 'High-end servers running both Windows Server and Linux form the backbone of the IT infrastructure. Students gain practical exposure to both ecosystems — essential for modern software engineering and systems administration.',
  },
  {
    icon: '🤖',
    title: 'AI & ML Specialisation Lab',
    text: 'A dedicated lab for AI, Machine Learning, and Data Science courses equipped with GPU-accelerated workstations, supporting deep learning frameworks like TensorFlow and PyTorch.',
  },
  {
    icon: '🔗',
    title: 'Networking & Cyber Lab',
    text: 'A purpose-built lab for networking, cyber security, and ethical hacking courses. Students work with real network hardware, configure routers and switches, and practice penetration testing in a safe environment.',
  },
  {
    icon: '📐',
    title: 'CAD & Design Workstations',
    text: 'High-performance CAD workstations support engineering design software including AutoCAD, SolidWorks, and MATLAB — giving Mechanical, Civil, and Electronics students industry-standard tools.',
  },
];

export default function InfrastructureGrid() {
  return (
    <section className="bg-white py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="flex justify-between items-end mb-[52px] max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-3 flex-wrap gap-5">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Facilities &amp; Labs
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            What Makes Our Centre<br />
            <em className="text-[#f26522] not-italic">World-Class</em>
          </h2>
        </div>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] max-w-[360px] mb-0">
          Every facility is designed to bridge the gap between academic learning and industry-grade practice.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[22px]">

        {/* Featured card — spans 2 cols */}
        {/* <div className="col-span-2 max-[960px]:col-span-2 max-[600px]:col-span-1 flex max-[960px]:flex-col rounded-[16px] overflow-hidden border border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,0.1)] transition-all duration-[250ms] bg-[#f7f8fc] group relative">
          <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.07)_0%,transparent_70%)] pointer-events-none" />

          <div className="overflow-hidden max-[960px]:h-[220px] max-[600px]:h-[200px]">
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[400ms] block"
            />
          </div>
          <div className="flex-[1.2] p-8 max-[600px]:p-[22px] flex flex-col justify-center">
            <div className="w-12 h-12 bg-[#fff3ec] rounded-[12px] flex items-center justify-center text-[1.4rem] mb-[18px]">
              {FEATURED.icon}
            </div>
            <div className="font-montserrat font-bold text-[1.3rem] max-[600px]:text-[1.1rem] text-[#111111] mb-[10px]">
              {FEATURED.title}
            </div>
            <p className="text-[0.86rem] leading-[1.7] text-[#6b7280]">{FEATURED.text}</p>
            <div className="flex gap-2 flex-wrap mt-[18px] max-[600px]:gap-[6px]">
              {FEATURED.tags.map((tag, i) => (
                <span key={i} className="bg-[#fff3ec] text-[#f26522] rounded-full px-[14px] max-[600px]:px-[11px] py-[5px] max-[600px]:py-1 text-[0.75rem] max-[600px]:text-[0.72rem] font-semibold tracking-[0.03em]">
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
            className="bg-[#f7f8fc] border border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,0.1)] rounded-[16px] p-7 max-[600px]:p-[22px] transition-all duration-[250ms] relative overflow-hidden"
          >
            <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.07)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 bg-[#fff3ec] rounded-[12px] flex items-center justify-center text-[1.4rem] mb-[18px]">
              {card.icon}
            </div>
            <div className="font-montserrat font-bold text-[1.05rem] text-[#111111] mb-[10px]">{card.title}</div>
            <p className="text-[0.86rem] leading-[1.7] text-[#6b7280]">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
