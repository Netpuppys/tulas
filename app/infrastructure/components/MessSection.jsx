'use client';

const MEALS = [
  { time: '7:30 AM',   name: 'Breakfast — Parathas, idli, upma, tea, juice',                        pill: 'Daily' },
  { time: '12:30 PM',  name: 'Lunch — Dal, sabzi, rice, chapati, salad',                            pill: 'Daily' },
  { time: '4:30 PM',   name: 'Evening Tea — Snacks, chai, coffee',                                  pill: 'Daily' },
  { time: '7:30 PM',   name: 'Dinner — Chinese / North Indian / South Indian (rotational)',          pill: 'Daily' },
];

const MESS_CHIPS = ['100% Vegetarian', 'Student-Governed Menu', 'Hygienic Kitchen', '4 Meals Daily'];

export default function MessSection() {
  return (
    <section className="bg-[#1e1e1e] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Image */}
        <div className="relative">
          <img
            src="/infrastructure/HostelMess/mess.jpg"
            alt="Mess Hall"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block"
          />
          {/* Inset image — hidden below 960px */}
          <img
            src="/infrastructure/HostelMess/mess2.jpg"
            alt="Cafeteria"
            className="absolute bottom-[-24px] right-[-24px] w-[190px] h-[145px] object-cover rounded-[12px] border-4 border-[#1e1e1e] shadow-[0_8px_24px_rgba(0,0,0,0.3)] max-[960px]:hidden"
          />
        </div>

        {/* Text */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Dining &amp; Nutrition
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-white mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Mess Facilities<br />
            <em className="text-[#f26522] not-italic">(Fully Vegetarian)</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-white/55">
            The student-governed Mess Committee ensures nutritious and varied meals every day. With a rotating menu
            featuring Chinese, North Indian, and South Indian cuisines — changed twice a month — dining at Tulas is
            never monotonous. Only hostel roll students may enter the mess premises, during their designated timings.
          </p>

          {/* Meal table */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[14px] overflow-hidden mt-8">
            <div className="font-montserrat bg-[#f26522] px-[22px] max-[600px]:px-[14px] py-[13px] max-[600px]:py-[11px] font-bold text-[0.82rem] max-[600px]:text-[0.78rem] tracking-[0.07em] uppercase text-white">
              📅 Daily Meal Schedule
            </div>
            {MEALS.map((meal, i) => (
              <div key={i} className="flex items-center max-[600px]:flex-wrap px-[22px] max-[600px]:px-[14px] py-[13px] max-[600px]:py-[11px] gap-[18px] max-[600px]:gap-1 border-b border-white/[0.06] last:border-b-0">
                <span className="font-montserrat font-bold text-[0.78rem] max-[600px]:text-[0.74rem] text-[#f26522] min-w-[72px] max-[600px]:min-w-0 max-[600px]:w-full max-[600px]:font-extrabold">
                  {meal.time}
                </span>
                <span className="text-[0.86rem] max-[600px]:text-[0.82rem] text-white/75 flex-1 max-[600px]:w-full">
                  {meal.name}
                </span>
                <span className="bg-[rgba(242,101,34,0.15)] border border-[rgba(242,101,34,0.3)] rounded-[6px] px-[10px] max-[600px]:px-2 py-[3px] max-[600px]:py-[2px] text-[0.7rem] max-[600px]:text-[0.66rem] text-[#f26522] font-bold whitespace-nowrap">
                  {meal.pill}
                </span>
              </div>
            ))}
          </div>

          {/* Chips */}
          <div className="flex gap-[10px] max-[600px]:gap-2 flex-wrap mt-6">
            {MESS_CHIPS.map((chip, i) => (
              <div key={i} className="flex items-center gap-[7px] bg-white/[0.06] border border-white/[0.12] rounded-full px-4 max-[600px]:px-3 py-[7px] max-[600px]:py-[6px] text-[0.79rem] max-[600px]:text-[0.74rem] text-white/70 font-medium">
                <span className="w-[7px] h-[7px] bg-[#22c55e] rounded-full flex-shrink-0" />
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
