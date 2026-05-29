'use client';

const CLUBS = [
  {
    img:   'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600',
    icon:  '🎤',
    name:  'xpresso',
    desc:  'A platform for aspiring speakers, anchors, and confident communicators to find their voice and command the stage.',
    tags:  ['Public Speaking', 'Anchoring', 'Confidence'],
  },
  {
    img:   'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
    icon:  '✍️',
    name:  'Quill',
    desc:  'A space for writers and storytellers to express ideas, craft narratives, and share perspectives through the power of words.',
    tags:  ['Writing', 'Storytelling', 'Content'],
  },
  {
    img:   'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
    icon:  '💻',
    name:  'Technocrats',
    desc:  'The tech minds that power campus events and innovations, bringing digital solutions to creative challenges.',
    tags:  ['Technology', 'Innovation', 'Events'],
  },
  {
    img:   'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600',
    icon:  '📷',
    name:  'Capture',
    desc:  'Visual storytellers preserving campus moments through photography and film, creating memories that last forever.',
    tags:  ['Photography', 'Videography', 'Visual Arts'],
  },
  {
    img:   'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600',
    icon:  '⚙️',
    name:  'Backbone Crew',
    desc:  'The team that ensures flawless execution behind every major event — the unsung heroes of campus experiences.',
    tags:  ['Event Management', 'Operations', 'Coordination'],
  },
  {
    img:   'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
    icon:  '📢',
    name:  'Public Relations',
    desc:  'Shaping communication, coordination, and campus connections — the voice that amplifies every initiative.',
    tags:  ['Communication', 'Networking', 'Outreach'],
  },
  {
    img:   'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600',
    icon:  '🎨',
    name:  'Meraki',
    desc:  'Where creativity and art are crafted with passion, soul, and dedication — a space for artists to flourish.',
    tags:  ['Art', 'Creativity', 'Design'],
  },
  {
    img:   '/campus-life/studentclub/img4.jpg',
    icon:  '👗',
    name:  'Stylexa',
    desc:  'Celebrating fashion, style, and runway expression where students showcase trends and personal aesthetics.',
    tags:  ['Fashion', 'Style', 'Runway'],
  },
  {
    img:   '/campus-life/studentclub/img11.jpg',
    icon:  '🎭',
    name:  'Manchan',
    desc:  'A stage for theatre, performance, and dramatic expression where stories come alive through acting.',
    tags:  ['Theatre', 'Drama', 'Performance'],
  },
  {
    img:   '/campus-life/studentclub/img9.jpg',
    icon:  '🎵',
    name:  'Sargam',
    desc:  'A musical collective where voices and melodies come alive, celebrating the universal language of music.',
    tags:  ['Music', 'Singing', 'Performance'],
  },
  {
    img:   '/campus-life/studentclub/img10.jpg',
    icon:  '💃',
    name:  'Footloose',
    desc:  'A dynamic space for dancers to perform, express, and shine through movement and choreography.',
    tags:  ['Dance', 'Performance', 'Expression'],
  },
];

export default function ClubsShowcase() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-clubs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:30px;margin-top:50px}@media(max-width:968px){.cl-clubs-grid{grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}}@media(max-width:600px){.cl-clubs-grid{grid-template-columns:1fr}}`}} />

      <section
        id="clubs"
        className="bg-white py-[100px] max-[960px]:py-[70px] max-[600px]:py-[60px] px-[7%] max-[600px]:px-[5%]"
      >
        {/* Header */}
        <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#E06B1B] uppercase tracking-[.14em] mb-4">
          <span className="block w-[32px] h-[2px] bg-[#E06B1B] rounded-[2px] flex-shrink-0" />
          Explore Communities
        </div>
        <h2
          className="text-[#1B2D5B] mb-5 leading-[1.15]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800 }}
        >
          Every Interest Has a <em className="not-italic" style={{ color: '#E06B1B' }}>Home Here.</em>
        </h2>
        <p className="text-[1.05rem] leading-[1.8] text-[#5a6a8a] max-w-[720px]">
          Discover the diverse clubs and committees where students express themselves, learn new skills, and build lasting connections through shared passions.
        </p>

        {/* Club cards — auto-fit grid */}
        <div className="cl-clubs-grid">
          {CLUBS.map((club, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-[18px] bg-white cursor-pointer transition-all duration-[400ms] hover:-translate-y-2 group"
              style={{ boxShadow: '0 8px 24px rgba(27,45,91,.1)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 50px rgba(27,45,91,.18)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(27,45,91,.1)'}
            >
              {/* Image */}
              <div className="w-full h-[240px] overflow-hidden relative">
                <img
                  src={club.img}
                  alt={club.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                {/* Dark overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                  style={{ background: 'linear-gradient(to top,rgba(27,45,91,.8) 0%,transparent 60%)' }}
                />
                {/* Club icon badge */}
                <div
                  className="absolute top-5 right-5 w-[50px] h-[50px] rounded-[12px] flex items-center justify-center text-[1.5rem]"
                  style={{ background: '#E06B1B', boxShadow: '0 4px 12px rgba(224,107,27,.4)' }}
                >
                  {club.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className="font-extrabold text-[1.35rem] text-[#1B2D5B] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {club.name}
                </div>
                <p className="text-[0.92rem] leading-[1.7] text-[#5a6a8a] mb-[18px]">{club.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {club.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[0.75rem] font-semibold text-[#1B2D5B] px-3 py-[5px] rounded-[6px]"
                      style={{ background: '#f5f6fa' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
