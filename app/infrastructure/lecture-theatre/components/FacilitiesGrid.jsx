'use client';

const CARDS = [
  {
    icon: '📽️',
    title: 'Digital Projection Systems',
    text: 'High-resolution projectors and large screens allow faculty to present slides, videos, simulations, and live demos with crisp, vivid clarity — making complex concepts easier to visualise and understand.',
  },
  {
    icon: '🎤',
    title: 'Microphone & PA Systems',
    text: 'Podium and lapel microphones connected to a professional PA system ensure that lectures are heard clearly throughout the hall — particularly useful for interactive sessions and guest lectures.',
  },
  {
    icon: '💡',
    title: 'Purpose-Designed Lighting',
    text: 'Adjustable, glare-free lighting is engineered to maintain student alertness and reduce eye fatigue during long sessions — a detail that makes a tangible difference in learning outcomes.',
  },
  {
    icon: '🔊',
    title: 'Acoustic Excellence',
    text: 'Sound-absorbing materials and optimised room geometry ensure that every word spoken at the front is heard clearly at the back. No echo, no reverberation — just clear, focused communication.',
  },
  {
    icon: '🪑',
    title: 'Ergonomic Comfort',
    text: 'From padded seats with attached writing boards to adequate aisle spacing and ventilation, every physical element of the hall has been chosen to keep students comfortable and focused for the full duration of class.',
  },
];

const FEAT_TAGS = ['70-Seat Capacity', 'Tiered Layout', 'Full AV Setup', 'Unique Design'];

export default function FacilitiesGrid() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-5 mb-[52px] max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-3 max-[600px]:mb-8">
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Infrastructure &amp; Equipment
          </div>
          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            What Makes Every<br />
            <em className="text-[#f26522] not-italic">Class Exceptional</em>
          </h2>
        </div>
        <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] max-w-[360px] max-[960px]:max-w-full">
          Every facility in the lecture theatre is carefully chosen to support modern, effective, and student-centred teaching.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[22px] max-[600px]:gap-[14px]">

        {/* Featured card — spans 2 cols */}
        {/* <div className="col-span-2 max-[600px]:col-span-1 bg-white border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,0.1)] rounded-[16px] overflow-hidden transition-all duration-200 relative grid grid-cols-[1fr_1.2fr] max-[960px]:grid-cols-1 max-[600px]:grid-cols-1">
          <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.07)_0%,transparent_70%)] pointer-events-none" />

          <div className="overflow-hidden max-[960px]:h-[220px] max-[600px]:h-[200px]">
            <img
              src="https://tulas.edu.in/_next/static/media/img2.dcc1f42b.webp"
              alt="Lecture Theatre Interior"
              className="w-full h-full object-cover block hover:scale-[1.05] transition-transform duration-[400ms]"
            />
          </div>

          <div className="p-8 max-[600px]:p-[22px] flex flex-col justify-center">
            <div className="w-12 h-12 max-[600px]:w-[42px] max-[600px]:h-[42px] bg-[#fff3ec] rounded-[12px] flex items-center justify-center text-[1.4rem] max-[600px]:text-[1.2rem] mb-[18px] max-[600px]:mb-[14px]">
              🏛️
            </div>
            <div className="font-montserrat font-bold text-[1.3rem] max-[600px]:text-[1.1rem] text-[#111111] mb-[10px]">Spacious, Fully Equipped Halls</div>
            <p className="text-[0.86rem] max-[600px]:text-[0.83rem] text-[#6b7280] leading-[1.7]">
              Each lecture theatre is a self-contained, fully equipped learning environment — designed to host 70 students in total comfort. The tiered layout, wide writing desks, and unobstructed views of the presentation area make it one of the most effective learning spaces in the region.
            </p>
            <div className="flex gap-2 flex-wrap mt-[18px] max-[600px]:gap-[6px]">
              {FEAT_TAGS.map((tag, i) => (
                <span key={i} className="bg-[#fff3ec] text-[#f26522] rounded-full px-[14px] py-[5px] max-[600px]:px-[11px] max-[600px]:py-1 text-[0.75rem] max-[600px]:text-[0.72rem] font-semibold tracking-[0.03em]">
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
            className="bg-white border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(242,101,34,0.1)] rounded-[16px] p-7 max-[600px]:p-[22px] transition-all duration-200 relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.07)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 max-[600px]:w-[42px] max-[600px]:h-[42px] bg-[#fff3ec] rounded-[12px] flex items-center justify-center text-[1.4rem] max-[600px]:text-[1.2rem] mb-[18px] max-[600px]:mb-[14px]">
              {card.icon}
            </div>
            <div className="font-montserrat font-bold text-[1.05rem] max-[600px]:text-[0.98rem] text-[#111111] mb-[10px]">{card.title}</div>
            <p className="text-[0.86rem] max-[600px]:text-[0.83rem] text-[#6b7280] leading-[1.7]">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
