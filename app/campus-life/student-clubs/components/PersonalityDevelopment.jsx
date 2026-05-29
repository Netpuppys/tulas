'use client';

const POINTS = [
  {
    num:   '1',
    title: 'Leadership Development',
    desc:  'Students take ownership of initiatives, manage teams, make decisions, and learn to inspire others through action.',
  },
  {
    num:   '2',
    title: 'Communication Skills',
    desc:  'From public speaking to interpersonal dialogue, clubs provide constant opportunities to articulate ideas clearly and confidently.',
  },
  {
    num:   '3',
    title: 'Teamwork & Collaboration',
    desc:  'Working with diverse teams teaches cooperation, conflict resolution, and the power of collective achievement.',
  },
  {
    num:   '4',
    title: 'Time Management',
    desc:  'Balancing academics with club responsibilities builds discipline, prioritization, and organizational efficiency.',
  },
  {
    num:   '5',
    title: 'Creative Problem-Solving',
    desc:  'Real-world challenges in event planning and execution foster innovative thinking and adaptability.',
  },
  {
    num:   '6',
    title: 'Networking & Relationships',
    desc:  'Clubs create lasting friendships, professional connections, and a sense of belonging within a supportive community.',
  },
];

export default function PersonalityDevelopment() {
  return (
    <section
      className="py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]"
      style={{ background: '#f5f6fa' }}
    >
      {/* Header */}
      <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
        <span className="block w-[32px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
        Growth Through Experiences
      </div>
      <h2
        className="text-[#1B2D5B] mb-5 leading-[1.15]"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800 }}
      >
        Confidence Built Through <em className="not-italic" style={{ color: '#E06B1B' }}>Participation.</em>
      </h2>
      <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a] max-w-[720px] mb-12">
        Student clubs contribute to holistic personality development by fostering skills, confidence, and character traits that extend far beyond the classroom.
      </p>

      {/* Dev split */}
      <div
        className="grid grid-cols-2 max-[960px]:grid-cols-1 rounded-[20px] overflow-hidden"
        style={{ boxShadow: '0 20px 60px rgba(27,45,91,.12)' }}
      >
        {/* Image side */}
        <div className="relative min-h-[500px] max-[960px]:h-[300px]">
          <img
            src="/campus-life/studentclub/img5.jpg"
            alt="Student development"
            className="w-full h-full object-cover"
            style={{ position: 'absolute', inset: 0 }}
          />
        </div>

        {/* Content side */}
        <div
          className="bg-white flex flex-col justify-center px-[60px] py-[60px] max-[600px]:px-[30px] max-[600px]:py-10"
        >
          <div className="flex flex-col gap-6">
            {POINTS.map((pt, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="w-9 h-9 rounded-[8px] flex items-center justify-center font-extrabold text-white flex-shrink-0 text-[0.95rem]"
                  style={{ background: '#E06B1B', fontFamily: "'Syne', sans-serif" }}
                >
                  {pt.num}
                </div>
                <div>
                  <div className="font-bold text-[1rem] text-[#1B2D5B] mb-[6px]">{pt.title}</div>
                  <div className="text-[0.88rem] text-[#5a6a8a] leading-[1.7]">{pt.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
