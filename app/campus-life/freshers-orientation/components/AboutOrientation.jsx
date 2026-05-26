'use client';

const STATEMENTS = [
  {
    title: 'Every New Beginning Starts With Belonging',
    text:  'From the moment you arrive, you\'re part of a community that welcomes, supports, and celebrates you.',
  },
  {
    title: 'Building Confidence Through Connection',
    text:  'Orientation helps you find your people, discover your strengths, and feel at home on campus.',
  },
  {
    title: 'The Start Of Lifelong Memories',
    text:  'These first moments shape your entire university experience — friendships, mentors, and unforgettable experiences begin here.',
  },
];

export default function AboutOrientation() {
  return (
    <section id="about" className="bg-white py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[80px] max-[960px]:gap-10 items-center">

        {/* Visual */}
        <div
          className="relative rounded-[20px] overflow-hidden group"
          style={{ boxShadow: '0 20px 60px rgba(27,45,91,.12)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85"
            alt="Freshers Welcome"
            className="w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]"
            style={{ height: '600px', maxHeight: '60vw' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top,rgba(27,45,91,.7) 0%,transparent 50%)' }}
          />
        </div>

        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-[10px] text-[0.75rem] font-bold text-[#E06B1B] uppercase tracking-[.15em] mb-4">
            <span className="block w-[30px] h-[3px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
            The Beginning
          </div>

          <h2
            className="text-[#1B2D5B] mb-5 leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,5vw,5.5rem)' }}
          >
            Welcome To The<br />
            <em className="not-italic" style={{ color: '#E06B1B' }}>Tula&apos;s Experience</em>
          </h2>

          <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a] max-w-[600px] mb-8">
            Freshers Orientation at Tula&apos;s University is designed to help you transition smoothly into campus life. It&apos;s where you meet your peers, connect with faculty, explore opportunities, and begin building the foundation for your university journey.
          </p>

          <div className="flex flex-col gap-5">
            {STATEMENTS.map((s, i) => (
              <div
                key={i}
                className="bg-[#f5f6fa] border-l-4 rounded-[12px] px-7 py-6 transition-all duration-300 hover:bg-white hover:translate-x-2"
                style={{ borderLeftColor: '#E06B1B', boxShadow: 'none' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(224,107,27,.1)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="font-extrabold text-[1.15rem] text-[#1B2D5B] mb-2">{s.title}</div>
                <div className="text-[0.95rem] text-[#5a6a8a] leading-[1.7]">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
