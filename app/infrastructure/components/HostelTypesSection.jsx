'use client';

const BOYS_FEATURES = [
  'Twin & single occupancy rooms available',
  'Spacious, well-ventilated rooms with attached balcony',
  'Separate study table & bookshelf per student',
  'Solar-heated hot water round the clock',
  'High-speed Wi-Fi throughout the block',
  '24×7 security with CCTV surveillance',
];

const GIRLS_FEATURES = [
  'Dedicated secure blocks for female students',
  'Female wardens on duty round the clock',
  'Spacious twin-sharing rooms with natural light',
  'Solar hot water & hygienic bathrooms',
  'Separate common room with recreation facilities',
  'Strict visitor & entry protocols for safety',
];

function HostelCard({ image, alt, badge, title, highlight, features }) {
  return (
    <div className="rounded-[18px] overflow-hidden border border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_20px_48px_rgba(242,101,34,0.1)] transition-all duration-[250ms] bg-white group">
      {/* Image */}
      <div className="h-[210px] max-[600px]:h-[180px] overflow-hidden relative">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[400ms]"
        />
        <div className="font-montserrat absolute top-4 left-4 bg-[#f26522] text-white font-extrabold text-[0.75rem] px-[14px] py-[5px] rounded-[6px] tracking-[0.08em] uppercase">
          {badge}
        </div>
      </div>

      {/* Body */}
      <div className="p-7 max-[600px]:p-5">
        <div className="font-montserrat font-extrabold text-[1.2rem] text-[#111111] mb-[18px]">
          {title} <span className="text-[#f26522]">{highlight}</span>
        </div>
        <ul className="flex flex-col gap-[10px]">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-[10px] text-[0.86rem] text-[#6b7280] leading-[1.5]">
              <div className="w-[18px] h-[18px] bg-[#fff3ec] rounded-full flex items-center justify-center text-[#f26522] text-[0.62rem] font-extrabold flex-shrink-0 mt-[1px]">
                ✓
              </div>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HostelTypesSection() {
  return (
    <section className="bg-white py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      {/* Header */}
      <div className="flex justify-between items-end mb-[52px] max-[600px]:mb-7 flex-wrap gap-5 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-4">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Accommodation Options
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Boys&apos; &amp; Girls&apos;<br />
            <em className="text-[#f26522] not-italic">Hostel Blocks</em>
          </h2>
        </div>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] max-w-[380px] mb-0">
          Separate, secure, and well-maintained blocks offering a vibrant community living experience for every student.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-7">
        <HostelCard
          image="/infrastructure/HostelMess/boyshostel.jpg"
          alt="Boys Hostel"
          badge="4 Blocks · Boys"
          title="Boys'"
          highlight="Hostel"
          features={BOYS_FEATURES}
        />
        <HostelCard
          image="/infrastructure/HostelMess/girlshostel.jpg"
          alt="Girls Hostel"
          badge="2 Blocks · Girls"
          title="Girls'"
          highlight="Hostel"
          features={GIRLS_FEATURES}
        />
      </div>
    </section>
  );
}
