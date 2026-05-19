'use client';

const FEATURED = {
  image: '/infrastructure/HostelMess/medical-emergency.png',
  icon: '🏥',
  title: 'On-Campus Medical Care',
  text: 'A fully qualified MBBS Doctor is available 24×7 on call. First-aid boxes are stationed across labs, hostels, and workshops. A standby ambulance ensures rapid emergency response, while tie-ups with reputed hospitals provide specialist care when needed. An in-house infirmary handles minor ailments on the spot.',
  tags: ['MBBS Doctor On-Call', '24×7 Ambulance', 'Infirmary on Campus', 'Hospital Tie-Ups'],
};

const CARDS = [
  {
  image: '/infrastructure/HostelMess/medical-emergency.png',
  icon: '🏥',
  title: 'On-Campus Medical Care',
  text: 'A fully qualified MBBS Doctor is available 24×7 on call. First-aid boxes are stationed across labs, hostels, and workshops. A standby ambulance ensures rapid emergency response, while tie-ups with reputed hospitals provide specialist care when needed. An in-house infirmary handles minor ailments on the spot.',
  tags: ['MBBS Doctor On-Call', '24×7 Ambulance', 'Infirmary on Campus', 'Hospital Tie-Ups'],
},
  {
    image: '/infrastructure/HostelMess/atmnew.png',
    icon: '💳',
    title: '24×7 ATM Facility',
    text: 'An Oriental Bank of Commerce ATM inside the campus operates round the clock. Parents can transfer funds online for immediate student access — money is never a barrier to life at Tulas.',
  },
  {
    image: '/infrastructure/HostelMess/cafeteria.jpg',
    icon: '☕',
    title: 'Cafeteria & Maggie Point',
    text: 'Campus cafeteria serves pasta, pizza, dim sums, shakes & fresh juices from 8:30 AM – 10:15 PM (till 2:30 AM during exams). Maggie Point stays open nightly 11 PM – 2:30 AM, every day.',
  },
  {
    image: '/infrastructure/HostelMess/sports.jpg',
    icon: '🏏',
    title: 'Sports & Recreation',
    text: 'A full-size cricket ground and multi-sport facilities encourage athletic excellence alongside academics. Regular inter-hostel tournaments keep the competitive spirit alive year-round.',
  },
  {
    image: '/infrastructure/HostelMess/foreign.jpg',
    icon: '🌐',
    title: 'Foreign Language Learning',
    text: 'Structured programmes in Mandarin, French, German, and Spanish help students build global career readiness — a practical edge that sets Tulas graduates apart internationally.',
  },
  {
    image: 'https://tulas.edu.in/_next/static/media/img2.d637c531.png',
    icon: '🎯',
    title: 'Personality Development',
    text: 'Regular workshops on public speaking, leadership, and professional etiquette help students build the confidence and soft skills to thrive in any environment from day one of their careers.',
  },
];

export default function FacilitiesSection() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="flex justify-between items-end mb-[52px] max-[960px]:mb-9 flex-wrap gap-5">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Campus Amenities
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Everything You <em className="text-[#f26522] not-italic">Need,</em><br />
            All in One Campus
          </h2>
        </div>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] max-w-[380px] mb-0">
          From ATMs to medical care, Tulas campus is a fully self-sufficient ecosystem designed around student wellbeing.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-1 gap-[22px]">

        {/* Featured card — spans 2 cols on desktop */}
        {/* <div className="col-span-2 max-[960px]:col-span-1 flex max-[960px]:flex-col rounded-[18px] overflow-hidden border border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_18px_44px_rgba(242,101,34,0.1)] transition-all duration-[250ms] bg-white group">
          <div className="flex-1 min-h-[240px] max-[960px]:min-h-[200px] max-[600px]:h-[210px] overflow-hidden">
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[400ms]"
            />
          </div>
          <div className="flex-[1.1] p-9 max-[960px]:p-6 max-[600px]:p-[22px] flex flex-col justify-center">
            <div className="w-[42px] h-[42px] bg-[#fff3ec] rounded-[10px] flex items-center justify-center text-[1.25rem] mb-[14px]">
              {FEATURED.icon}
            </div>
            <div className="font-montserrat font-bold text-[1.35rem] max-[600px]:text-[1.1rem] text-[#111111] mb-2">
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
            className="rounded-[18px] overflow-hidden border border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_18px_44px_rgba(242,101,34,0.1)] transition-all duration-[250ms] bg-white group"
          >
            <div className="h-[195px] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[400ms]"
              />
            </div>
            <div className="p-6">
              <div className="w-[42px] h-[42px] bg-[#fff3ec] rounded-[10px] flex items-center justify-center text-[1.25rem] mb-[14px]">
                {card.icon}
              </div>
              <div className="font-montserrat font-bold text-[1.05rem] text-[#111111] mb-2">{card.title}</div>
              <p className="text-[0.86rem] leading-[1.7] text-[#6b7280]">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
