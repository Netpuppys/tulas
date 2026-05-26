'use client';

const QUOTES = [
  { text: '"BROOOO, SHE\'S ACTUALLY HERE?"',           orange: true  },
  { text: '"I JUST TOOK A SELFIE WITH MY FAVOURITE ACTOR."', orange: false },
  { text: '"THIS DOESN\'T FEEL LIKE A NORMAL COLLEGE."',     orange: true  },
  { text: '"WE CAME FOR DEGREES, STAYED FOR THE MEMORIES."', orange: false },
  { text: '"WHO KNEW COLLEGE COULD FEEL LIKE A FESTIVAL?"',  orange: true  },
  { text: '"MAIN CHARACTER ENERGY. EVERY SINGLE DAY."',      orange: false },
  { text: '"ONE EVENT AND YOUR CAMERA ROLL IS FULL."',       orange: true  },
  { text: '"THESE ARE THE STORIES WE\'LL TELL FOR YEARS."',  orange: false },
];

const STATEMENTS = [
  { num: '01', title: 'Learning Beyond Classrooms',          text: 'Real projects, live events, cultural fests, industry sessions — every experience here prepares you for life, not just exams.' },
  { num: '02', title: 'Experiences That Shape Lifelong Memories', text: 'From DIFF screenings to Sanskriti nights to Chhatra Sansad — campus life at Tulas is a collection of unforgettable firsts.' },
  { num: '03', title: 'Creativity, Community & Campus Culture',   text: 'Eleven student clubs, a 550-seat auditorium, and a culture that celebrates every form of talent and expression.' },
  { num: '04', title: 'Moments That Build Confidence',       text: 'Whether it\'s your first public speech or taking a selfie with a celebrity — every moment here adds to who you are.' },
  { num: '05', title: 'Growth Through Shared Experiences',   text: 'Hostel friendships, late-night study sessions, sports rivalries, campus chaos — shared experiences that bond you for life.' },
  { num: '06', title: 'A Campus Culture Built Around Expression', text: 'From fashion runways to theatre stages to tech hackathons — if you have a passion, Tulas has a stage for it.' },
];

// Bento cells configuration
const BENTO = [
  // Row 1
  { type: 'img',  src: '/new-campus/diff.jpg', alt: 'Auditorium',  tag: '1,000+ Events', label: 'The Grand Stage',          colSpan: 4, rowSpan: 1, gridRow: 1 },
  { type: 'img',  src: '/new-campus/sanskriti(4).jpg',         alt: 'Cultural',    tag: 'Sanskriti',     label: 'Nights That Never Ended',  colSpan: 5, rowSpan: 2, gridRow: '1/3' },
  { type: 'img',  src: '/new-campus/bannermain2.jpg',             alt: 'Sports',      tag: null,            label: 'Sports & Wellness',         colSpan: 3, rowSpan: 1, gridRow: 1 },
  // Row 2
  { type: 'orange', colSpan: 4, rowSpan: 1, gridRow: 2, quoteClass: 'oi', text: 'NOT JUST\nA CAMPUS.\nA WHOLE\nEMOTION.', accent: 'black' },
  // { type: 'black',  colSpan: 2, rowSpan: 1, gridRow: 2, quoteClass: 'w',  text: '7,000+\nAlumni\nCan\'t Be\nWrong',       accent: 'orange' },
  { type: 'img',  src: '/new-campus/gallery.png',        alt: 'Cafe',        tag: null,            label: 'Late Night Cafeteria Runs', colSpan: 3, rowSpan: 1, gridRow: 2 },
  // Row 3
  { type: 'img',  src: '/new-campus/freshers.jpg', alt: 'Hostel',      tag: 'Hostel Life',   label: 'Home Away From Home',       colSpan: 4, rowSpan: 1, gridRow: 3 },
  { type: 'light', colSpan: 4, rowSpan: 1, gridRow: 3, quoteClass: 'd',  text: 'THESE ARE\nSTORIES\nWE\'LL TELL\nFOR YEARS.', accent: 'orange' },
  { type: 'img',  src: '/new-campus/extra(1).jpg',          alt: 'Library',     tag: null,            label: 'Knowledge Meets Ambition',  colSpan: 4, rowSpan: 1, gridRow: 3 },
];

export default function VibeStorytelling() {
  const allQuotes = [...QUOTES, ...QUOTES];

  return (
    <>
      <style>{`
        @keyframes cl-quote {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-quote-track {
          animation: cl-quote 36s linear infinite;
        }
        .cl-quote-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <style dangerouslySetInnerHTML={{__html:`.cl-bento-mosaic{display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:240px 240px 200px;gap:12px;margin-top:56px}@media(max-width:1100px){.cl-bento-mosaic{display:none}}`}} />

      <section className="bg-white py-[88px] max-[960px]:py-[60px] px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">

        {/* Header */}
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[56px] max-[960px]:gap-6 items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
              <span className="block w-[22px] h-[2px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
              The Tula&apos;s Experience
            </div>
            <h2
              className="text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] text-[#111111] mb-[14px] tracking-[0.01em]"
            >
              Where Memories<br />
              Become <span className="text-[#f26522]">Stories</span>
            </h2>
          </div>
          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            This isn&apos;t just a college. It&apos;s a universe of experiences, friendships, festivals, and moments that define who you become. Every semester has a story. Every event, a memory. Every student, a main character.
          </p>
        </div>

        {/* Quote strip */}
        <div className="overflow-hidden py-[18px]" style={{ background: '#111111' }}>
          <div className="cl-quote-track flex w-max">
            {allQuotes.map((q, i) => (
              <span key={i} className="flex items-center">
                <span
                  className="px-[40px] whitespace-nowrap tracking-[0.04em]"
                  style={{
                    fontSize: 'clamp(.9rem,1.5vw,1.25rem)',
                    color: q.orange ? '#f26522' : 'rgba(255,255,255,.82)',
                  }}
                >
                  {q.text}
                </span>
                <span className="text-[#f26522] opacity-40 flex-shrink-0">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Editorial statements */}
        <div
          className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 mt-14 rounded-[16px] overflow-hidden"
          style={{
            gap: '1px',
            background: '#e8e8e8',
            border: '1px solid #e8e8e8',
          }}
        >
          {STATEMENTS.map((s, i) => (
            <div
              key={i}
              className="bg-white hover:bg-[#f7f8fc] transition-colors duration-200 p-8"
            >
              <span
                className="block text-[#f26522] text-[2.6rem] leading-[1] mb-[10px]"
               
              >
                {s.num}
              </span>
              <div
                className="font-bold text-[1rem] text-[#111111] mb-2"
               
              >
                {s.title}
              </div>
              <p className="text-[0.84rem] text-[#6b7280] leading-[1.6]">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Bento mosaic — hidden on mobile via .cl-bento-mosaic */}
        <div className="cl-bento-mosaic">
          {BENTO.map((cell, i) => {
            const cellStyle = {
              gridColumn: `span ${cell.colSpan}`,
              gridRow: cell.gridRow,
            };

            if (cell.type === 'img') {
              return (
                <div
                  key={i}
                  className="relative rounded-[16px] overflow-hidden bg-[#f7f8fc] border border-[#e8e8e8] group cursor-pointer"
                  style={cellStyle}
                >
                  <img
                    src={cell.src}
                    alt={cell.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[450ms]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top,rgba(0,0,0,.72) 0%,transparent 55%)' }}
                  />
                  {cell.tag && (
                    <span
                      className="absolute top-3 right-3 bg-[#f26522] text-white rounded-[6px] px-[10px] py-[3px] text-[0.63rem] font-bold tracking-[0.07em] uppercase"
                    >
                      {cell.tag}
                    </span>
                  )}
                  <div
                    className="absolute bottom-[14px] left-[16px] right-[16px] font-bold text-[0.85rem] text-white"
                   
                  >
                    {cell.label}
                  </div>
                </div>
              );
            }

            if (cell.type === 'orange') {
              return (
                <div
                  key={i}
                  className="rounded-[16px] flex items-center justify-center p-5 text-center"
                  style={{ ...cellStyle, background: '#f26522', border: 'none' }}
                >
                  <span
                    className="text-white text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] tracking-[0.02em]"
                  >
                    {cell.text.split('\n').map((line, j, arr) => (
                      <span key={j}>
                        {j === 2 || j === 3 ? <span className="text-[#111]">{line}</span> : line}
                        {j < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              );
            }

            if (cell.type === 'black') {
              return (
                <div
                  key={i}
                  className="rounded-[16px] flex items-center justify-center p-5 text-center"
                  style={{ ...cellStyle, background: '#111111', border: 'none' }}
                >
                  <span
                    className="text-white text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] tracking-[0.02em]"
                  >
                    {cell.text.split('\n').map((line, j, arr) => (
                      <span key={j}>
                        {j === 1 ? <span className="text-[#f26522]">{line}</span> : line}
                        {j < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              );
            }

            if (cell.type === 'light') {
              return (
                <div
                  key={i}
                  className="rounded-[16px] flex items-center justify-center p-5 text-center bg-[#f7f8fc]"
                  style={{ ...cellStyle, border: '1.5px solid #e8e8e8' }}
                >
                  <span
                    className="text-[#111111] text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] tracking-[0.02em]"
                  >
                    {cell.text.split('\n').map((line, j, arr) => (
                      <span key={j}>
                        {j === 3 ? <span className="text-[#f26522]">{line}</span> : line}
                        {j < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              );
            }

            return null;
          })}
        </div>
      </section>
    </>
  );
}
