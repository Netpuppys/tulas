'use client';

const CARDS = [
  {
    icon:  '🎓',
    tag:   'Industry Sessions',
    title: 'Guest Lectures & Masterclasses',
    desc:  'Industry leaders, entrepreneurs, and experts share insights, experiences, and knowledge that textbooks can\'t teach. From startup stories to tech trends, students gain perspectives that shape their futures.',
    img:   'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
  {
    icon:  '💻',
    tag:   'Hands-On Learning',
    title: 'Workshops & Skill-Building',
    desc:  'From coding bootcamps and design thinking workshops to public speaking and leadership training — practical sessions that build real-world skills through participation and collaboration.',
    img:   'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    icon:  '🗣️',
    tag:   'Interactive',
    title: 'Panel Discussions & Q&A Sessions',
    desc:  'Open forums where students engage directly with experts, ask questions, challenge ideas, and participate in conversations that broaden perspectives and deepen understanding.',
    img:   'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
  },
  {
    icon:  '🚀',
    tag:   'Innovation',
    title: 'Hackathons & Innovation Labs',
    desc:  'Intensive innovation sessions where students collaborate, ideate, prototype, and build solutions to real-world problems — learning by doing, failing fast, and iterating.',
    img:   'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
];

export default function LearningExperiences() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-learn-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:32px}@media(max-width:1200px){.cl-learn-grid{grid-template-columns:1fr}}.cl-learn-card{background:#fff;border:2px solid #e2e8f0;border-radius:20px;padding:36px;transition:all .4s;position:relative;overflow:hidden}.cl-learn-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:5px;background:linear-gradient(90deg,#DF5400,#ff6b1a);transform:scaleX(0);transform-origin:left;transition:transform .5s}.cl-learn-card:hover::before{transform:scaleX(1)}.cl-learn-card:hover{border-color:#DF5400;transform:translateY(-6px);box-shadow:0 20px 60px rgba(0,31,76,.15)}.cl-learn-img{position:relative;overflow:hidden;border-radius:14px;height:220px;margin-top:20px}.cl-learn-img img{width:100%;height:100%;object-fit:cover;filter:contrast(1.04);transition:transform .5s}.cl-learn-card:hover .cl-learn-img img{transform:scale(1.1)}`}} />

      <section
        className="py-[110px] px-[7%] max-[768px]:py-[70px] max-[768px]:px-[5%]"
        style={{ background: '#fff' }}
      >
        {/* Header */}
        <div className="mb-[60px]">
          <div className="inline-flex items-center gap-3 text-[.72rem] font-extrabold uppercase tracking-[.18em] mb-[18px]" style={{ color: '#DF5400' }}>
            <span className="block w-[45px] h-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Knowledge Sharing
          </div>
          <h2
            className="font-black leading-[.98] tracking-[-0.015em] mb-5"
            style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(2.5rem,5vw,4.8rem)', color: '#001F4C' }}
          >
            Experiential Learning{' '}
            <em className="not-italic" style={{ color: '#DF5400' }}>In Action.</em>
          </h2>
          <p className="text-[1.15rem] leading-[1.8] max-w-[720px] font-medium" style={{ color: '#4a5568' }}>
            Workshops, masterclasses, and guest sessions that bring real-world knowledge to campus — learning through participation, interaction, and hands-on experiences.
          </p>
        </div>

        {/* Cards grid */}
        <div className="cl-learn-grid">
          {CARDS.map((c, i) => (
            <div key={i} className="cl-learn-card">
              {/* Header row */}
              <div className="flex gap-5 items-start mb-6">
                <div className="text-[3rem] flex-shrink-0" style={{ filter: 'grayscale(20%)' }}>{c.icon}</div>
                <div>
                  <div className="text-[.7rem] font-extrabold uppercase tracking-[.12em] mb-2" style={{ color: '#DF5400' }}>{c.tag}</div>
                  <h3
                    className="font-extrabold text-[1.6rem] leading-[1.25]"
                    style={{ fontFamily: "'Montserrat',sans-serif", color: '#001F4C' }}
                  >
                    {c.title}
                  </h3>
                </div>
              </div>
              <p className="text-[1.02rem] leading-[1.8] mb-0" style={{ color: '#4a5568' }}>{c.desc}</p>
              <div className="cl-learn-img">
                <img src={c.img} alt={c.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
