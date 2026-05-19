'use client';

const STATS = [
  { val: '20+',   lbl: 'Years of Excellence' },
  { val: '7000+', lbl: 'Alumni Stories' },
  { val: '750+',  lbl: 'Global Recruiters' },
  { val: '100%',  lbl: 'Placement Support' },
];

export default function StatsRow() {
  return (
    <div className="bg-[#111111] py-[60px] max-[600px]:py-[44px] px-[7%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-4 max-[600px]:grid-cols-2">
        {STATS.map((s, i) => (
          <div key={i} className="text-center py-[10px] max-[600px]:py-3 max-[600px]:px-2 border-r border-white/[0.08] last:border-r-0">
            <span className="font-montserrat block font-extrabold text-[#f26522] text-[2.6rem] max-[600px]:text-[2rem] leading-none">
              {s.val}
            </span>
            <span className="block text-[0.8rem] max-[600px]:text-[0.7rem] text-white/45 tracking-[0.07em] uppercase mt-2">
              {s.lbl}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
