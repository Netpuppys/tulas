'use client';

// ⚡ EDITABLE — update these values to reflect actual data
const PRIMARY_STATS = [
  { icon: '🖥️', num: '757', suffix: '+', label: 'Total Desktops',   note: 'High Spec Machines' },
  { icon: '🏛️', num: '9',  suffix: '',   label: 'Computer Labs',    note: 'Industry Level Labs' },
  { icon: '📡', num: '869', suffix: '+', label: 'Network Nodes',    note: 'Campus-wide LAN nodes' },
  { icon: '⚡',  num: '3',   suffix: ' Gbps', label: 'Internet Speed', note: 'Dedicated leased line' },
];

// ⚡ EDITABLE — update lab names, computer counts, seats and status
const LAB_ROWS = [
  { name: 'Programming Lab — Block A', computers: '__', seats: '__', status: 'Active', green: true },
  { name: 'Networking Lab — Block B',  computers: '__', seats: '__', status: 'Active', green: true },
  { name: 'Software Dev Cell',         computers: '__', seats: '__', status: 'Active', green: true },
  { name: 'CAD / Design Lab',          computers: '__', seats: '__', status: 'Active', green: true },
  { name: 'AI & ML Research Lab',      computers: '__', seats: '__', status: 'New',    green: false },
  { name: 'General Computing Lab',     computers: '__', seats: '__', status: 'Active', green: true },
];

// ⚡ EDITABLE — update mini stat values
const MINI_STATS = [
  { icon: '🖨️', num: '__',   label: 'Printers / Peripherals' },
  { icon: '🖥️', num: '__',   label: 'Servers (Windows/Linux)' },
  { icon: '📦', num: '__',   label: 'Licensed Software Titles' },
  { icon: '📅', num: '24×7', label: 'Availability' },
];

export default function StatsDashboard() {
  return (
    <div className="bg-[#111111] py-20 max-[600px]:py-[52px] px-[7%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="text-center mb-14 max-[600px]:mb-9">
        <div className="inline-flex items-center justify-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
          <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px]" />
          By The Numbers
          <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px]" />
        </div>
        <h2
          className="font-montserrat font-extrabold text-white mb-[10px] max-[600px]:text-[1.65rem]"
          style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
        >
          Computer Centre <em className="text-[#f26522] not-italic">Statistics</em>
        </h2>
        <p className="text-[0.95rem] text-white/45 max-w-[500px] mx-auto">
          A snapshot of Tulas state-of-the-art computing infrastructure — update these numbers to reflect the latest data.
        </p>
      </div>

      {/* Edit hint */}
      {/* <div className="flex items-center gap-3 bg-[rgba(242,101,34,0.08)] border border-dashed border-[rgba(242,101,34,0.35)] rounded-[10px] px-5 py-[14px] max-[600px]:py-[11px] max-[600px]:px-[14px] mb-7 text-[0.82rem] max-[600px]:text-[0.78rem] text-white/55">
        <span className="text-[1.1rem] flex-shrink-0">✏️</span>
        <span>
          <strong className="text-[#f26522]">Editable Section:</strong> All numbers can be updated directly in the component data arrays at the top of this file. Look for the ⚡ comments.
        </span>
      </div> */}

      {/* Primary stats — 4 cols */}
      <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[380px]:grid-cols-1 gap-[2px] bg-white/[0.06] rounded-[18px] overflow-hidden border border-white/[0.07] mb-7">
        {PRIMARY_STATS.map((s, i) => (
          <div
            key={i}
            className="bg-[#1e1e1e] hover:bg-[#242424] px-6 max-[600px]:px-[14px] py-9 max-[600px]:py-6 text-center border-r border-white/[0.06] last:border-r-0 transition-colors duration-[250ms]"
          >
            <span className="block text-[1.8rem] max-[600px]:text-[1.4rem] mb-[14px] max-[600px]:mb-[10px]">{s.icon}</span>
            <span className="font-montserrat block font-extrabold text-[#f26522] text-[2.8rem] max-[600px]:text-[2rem] leading-none">
              {s.num}<span className="text-[1.4rem] max-[600px]:text-[1rem]">{s.suffix}</span>
            </span>
            <span className="block text-[0.8rem] max-[600px]:text-[0.68rem] text-white/50 tracking-[0.07em] uppercase mt-2">{s.label}</span>
            <span className="block text-[0.72rem] max-[600px]:text-[0.62rem] text-white/25 mt-1">{s.note}</span>
          </div>
        ))}
      </div>

      {/* Secondary — Lab table + mini stats */}
      <div className="grid grid-cols-[1.4fr_1fr] max-[960px]:grid-cols-1 gap-6">

        {/* Lab breakdown table */}
        <div className="bg-[#1e1e1e] border border-white/[0.07] rounded-[16px] overflow-hidden overflow-x-auto">
          {/* Table head */}
          <div className="bg-[#f26522] px-[22px] max-[600px]:px-[14px] py-[14px] max-[600px]:py-3 grid grid-cols-[2fr_1fr_1fr_1fr] gap-[10px] max-[600px]:gap-[6px]">
            {['Lab Name / Block', 'Computers', 'Seats', 'Status'].map((h, i) => (
              <span key={i} className="font-montserrat font-bold text-[0.75rem] max-[600px]:text-[0.68rem] text-white tracking-[0.07em] uppercase">{h}</span>
            ))}
          </div>
          {/* Rows */}
          {LAB_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[10px] max-[600px]:gap-[6px] px-[22px] max-[600px]:px-[14px] py-[15px] max-[600px]:py-3 border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.03] transition-colors duration-200"
            >
              <div className="text-[0.86rem] max-[600px]:text-[0.78rem] text-white/85 font-medium">{row.name}</div>
              <div className="font-montserrat font-bold text-[0.9rem] max-[600px]:text-[0.8rem] text-[#f26522]">{row.computers}</div>
              <div className="font-montserrat font-bold text-[0.9rem] max-[600px]:text-[0.8rem] text-[#f26522]">{row.seats}</div>
              <div>
                <span className={`inline-block rounded-[6px] px-[9px] py-[2px] text-[0.7rem] font-semibold border ${
                  row.green
                    ? 'bg-[rgba(34,197,94,0.1)] border-[rgba(34,197,94,0.25)] text-[#22c55e]'
                    : 'bg-[rgba(242,101,34,0.12)] border-[rgba(242,101,34,0.25)] text-[#f26522]'
                }`}>
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mini stat cards */}
        <div className="grid grid-cols-2 gap-[14px] max-[600px]:gap-[10px]">
          {MINI_STATS.map((m, i) => (
            <div
              key={i}
              className="bg-[#1e1e1e] border border-white/[0.07] hover:border-[#f26522] hover:-translate-y-[3px] rounded-[14px] px-[18px] max-[600px]:px-3 py-[22px] max-[600px]:py-[18px] text-center transition-all duration-200"
            >
              <span className="block text-[1.5rem] mb-[10px]">{m.icon}</span>
              <span className="font-montserrat block font-extrabold text-[#f26522] text-[1.7rem] max-[600px]:text-[1.4rem] leading-none">{m.num}</span>
              <span className="block text-[0.72rem] max-[600px]:text-[0.65rem] text-white/42 tracking-[0.06em] uppercase mt-[5px]">{m.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
