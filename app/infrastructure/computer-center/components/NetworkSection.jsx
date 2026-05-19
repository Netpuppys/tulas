'use client';

const SPECS = [
  { label: 'Leased Line Speed', val: '1 Gbps',         highlight: '1 Gbps' },
  { label: 'LAN Nodes',         val: '650+ Points',    highlight: '650+' },
  { label: 'Wi-Fi Coverage',    val: '100% Campus',    highlight: '100%' },
  { label: 'Availability',      val: '24×7 Uptime',    highlight: '24×7' },
  { label: 'Network Type',      val: 'Wired & Wireless', highlight: '&' },
  { label: 'Server OS',         val: 'Windows & Linux', highlight: '&' },
];

const BADGES = [
  '24×7 Uptime',
  'FTP Intranet Access',
  'Firewall Protected',
  'Managed Network',
];

export default function NetworkSection() {
  return (
    <section className="bg-[#1e1e1e] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Image */}
        <div>
          <img
            src="/infrastructure/computerScience/connectivity.jpg"
            alt="Network Infrastructure"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block"
          />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Connectivity
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-white mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Campus Network<br />
            <em className="text-[#f26522] not-italic">Infrastructure</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-white/52">
            Tulas&apos; campus is equipped with a robust, high-speed wired and wireless network — one of the
            most comprehensive in Uttarakhand. Whether in a lab, hostel, or classroom, students and faculty
            always have fast, reliable access to the internet and campus resources.
          </p>

          {/* Spec cards */}
          <div className="grid grid-cols-2 max-[600px]:grid-cols-2 gap-4 max-[600px]:gap-[10px] mt-8">
            {SPECS.map((s, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] hover:border-[#f26522] rounded-[12px] px-4 py-[18px] max-[600px]:py-[14px] transition-colors duration-200"
              >
                <div className="text-[0.72rem] max-[600px]:text-[0.68rem] text-white/40 tracking-[0.08em] uppercase mb-[6px]">{s.label}</div>
                <div className="font-montserrat font-bold text-[1.05rem] max-[600px]:text-[0.95rem] text-white">
                  {s.val.split(s.highlight).map((part, j, arr) =>
                    j < arr.length - 1
                      ? <span key={j}>{part}<em className="text-[#f26522] not-italic">{s.highlight}</em></span>
                      : <span key={j}>{part}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Status badges */}
          <div className="flex gap-[10px] max-[600px]:gap-2 flex-wrap mt-6">
            {BADGES.map((badge, i) => (
              <div key={i} className="flex items-center gap-[7px] bg-white/[0.05] border border-white/10 rounded-full px-4 max-[600px]:px-3 py-[7px] max-[600px]:py-[6px] text-[0.79rem] max-[600px]:text-[0.74rem] text-white/68 font-medium">
                <span className="w-[7px] h-[7px] bg-[#22c55e] rounded-full flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
