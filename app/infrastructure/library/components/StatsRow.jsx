'use client';

const STATS = [
  { val: '60,000+', lbl: 'Print Volumes' },
  { val: '18,383+', lbl: 'Digital E-Books' },
  { val: '3,338+',  lbl: 'E-Journals' },
  { val: '448 m²',  lbl: 'Reference Space' },
];

export default function StatsRow() {
  return (
    <div className="bg-[#111111] py-[60px] max-[600px]:py-11 px-[7%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-4 max-[600px]:grid-cols-2">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="text-center py-[10px] max-[600px]:py-3 max-[600px]:px-2 border-r border-white/[0.08] last:border-r-0 max-[600px]:[&:nth-child(2)]:border-r-0 max-[600px]:[&:nth-child(3)]:border-t max-[600px]:[&:nth-child(4)]:border-t max-[600px]:[&:nth-child(3)]:border-t-white/[0.08] max-[600px]:[&:nth-child(4)]:border-t-white/[0.08]"
          >
            <span className="font-montserrat font-extrabold text-[#f26522] text-[2.6rem] max-[600px]:text-[1.9rem] block leading-none">{s.val}</span>
            <span className="text-[0.79rem] max-[600px]:text-[0.7rem] text-white/[0.42] tracking-[0.07em] uppercase mt-2 max-[600px]:mt-1 block">{s.lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
