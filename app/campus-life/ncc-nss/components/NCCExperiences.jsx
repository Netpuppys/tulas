'use client';

const EXPERIENCES = [
  {
    img:   '/campus-life/newncc/img3.jpg',
    badge: 'NCC',
    title: 'Annual Training Camps',
    desc:  'Intensive 10-day camps focused on physical fitness, drill training, weapon handling, and leadership exercises in real military environments.',
  },
  {
    img:   '/campus-life/newncc/img7.jpg',
    badge: 'NCC',
    title: 'Precision Drill Training',
    desc:  'Daily practice sessions building discipline, coordination, and synchronization. Our cadets compete at state and national levels.',
  },
  {
    img:   '/campus-life/newncc/img8.jpg',
    badge: 'NSS',
    title: 'Leadership Workshops',
    desc:  'Monthly sessions on communication, conflict resolution, project management, and community mobilization skills.',
  },
  {
    img:   '/campus-life/newncc/img9.jpg',
    badge: 'NSS',
    title: 'Village Immersion Camps',
    desc:  'Seven-day residential programs where students live in villages, understand ground realities, and implement community development projects.',
  },
  {
    img:   '/campus-life/newncc/img10.jpg',
    badge: 'NCC',
    title: 'Adventure & Survival Training',
    desc:  'Rock climbing, trekking, map reading, and survival skills that build courage, endurance, and decision-making under pressure.',
  },
  {
    img:   '/campus-life/newncc/img11.jpg',
    badge: 'NSS',
    title: 'Impact Projects',
    desc:  'Student-led initiatives addressing real community challenges—from literacy programs to sanitation drives—creating measurable social impact.',
  },
];

export default function NCCExperiences() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-exp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px}@media(max-width:600px){.cl-exp-grid{grid-template-columns:1fr}}`}} />

      <section
        id="experiences"
        className="py-[64px] max-[600px]:py-[50px] px-[7%] max-[600px]:px-[5%]"
        style={{ background: '#f5f6fa' }}
      >
        {/* Header — centred */}
        <div className="text-center max-w-[760px] mx-auto mb-[56px]">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
            <span className="block w-[24px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
            Active Learning
          </div>
          <h2
            className="text-[#1B2D5B] mb-5 leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 800 }}
          >
            Experiences That<br />
            <em className="not-italic" style={{ color: '#E06B1B' }}>Shape Leaders.</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-[#5a6a8a]">
            From rigorous training camps to field activities, every experience is designed to build discipline, teamwork, and confidence through hands-on participation.
          </p>
        </div>

        {/* Cards */}
        <div className="cl-exp-grid">
          {EXPERIENCES.map((ex, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] overflow-hidden transition-all duration-[400ms] hover:-translate-y-[10px] group"
              style={{ boxShadow: '0 6px 24px rgba(27,45,91,.08)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 48px rgba(27,45,91,.18)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(27,45,91,.08)'}
            >
              {/* Image */}
              <div className="h-[240px] overflow-hidden relative">
                <img
                  src={ex.img}
                  alt={ex.title}
                  className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.1]"
                />
                {/* Badge */}
                <span
                  className="absolute top-4 left-4 rounded-[6px] px-[14px] py-[6px] text-[0.68rem] font-bold tracking-[.1em] uppercase text-white"
                  style={{ background: '#E06B1B', boxShadow: '0 4px 12px rgba(224,107,27,.4)' }}
                >
                  {ex.badge}
                </span>
              </div>
              {/* Body */}
              <div className="p-7">
                <h3
                  className="font-bold text-[1.3rem] text-[#1B2D5B] mb-[10px] leading-[1.3]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {ex.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.7] text-[#5a6a8a]">{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
