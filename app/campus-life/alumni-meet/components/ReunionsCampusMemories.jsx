'use client';

const CARDS = [
  { img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80', badge: '2024',      title: 'Alumni Reunion Day',           text: 'Hundreds of alumni returned to campus to reconnect, reminisce, and celebrate the bonds that time only strengthens.' },
  { img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80', badge: 'Nostalgia', title: 'Walking Down Memory Lane',      text: 'Familiar corridors, favorite hangout spots, and cherished corners — every step brings back a flood of memories.' },
  { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', badge: 'Bonds',     title: 'Friendships Rekindled',         text: 'The laughter is the same, the stories are endless, and the connection feels like no time has passed at all.' },
  { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', badge: 'Together',  title: 'Batch Reunions',                text: 'From class photographs to group hugs, batch reunions are celebrations of shared journeys and lifelong friendships.' },
  { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', badge: 'Gratitude', title: 'Meeting Faculty & Mentors',     text: 'Reconnecting with professors and mentors who shaped careers and inspired dreams — a moment of gratitude and reflection.' },
  { img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80', badge: 'Moments',   title: 'Evening Conversations',         text: 'Stories of past adventures, updates on life journeys, and laughter that echoes across the campus once again.' },
];

export default function ReunionsCampusMemories() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-rcm-card{background:#fff;border-radius:18px;overflow:hidden;border:2px solid #e0e4ed;transition:all .4s;cursor:pointer;position:relative}.cl-rcm-card::before{content:'';position:absolute;top:0;left:0;right:0;height:5px;background:#DF5400;transform:scaleX(0);transform-origin:left;transition:transform .4s}.cl-rcm-card:hover{border-color:#DF5400;transform:translateY(-10px);box-shadow:0 18px 45px rgba(223,84,0,.18)}.cl-rcm-card:hover::before{transform:scaleX(1)}.cl-rcm-img img{transition:transform .6s,filter .4s;filter:sepia(0.06)}.cl-rcm-card:hover .cl-rcm-img img{transform:scale(1.12);filter:sepia(0)}`}} />

      <section
        id="reunions"
        className="py-[100px] px-[7%] max-[640px]:py-[65px] max-[640px]:px-[5%]"
        style={{ background: '#f8f9fc' }}
      >
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-[70px]">
          <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.16em] mb-[18px]" style={{ color: '#DF5400' }}>
            <span className="block w-[32px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Coming Home
          </div>
          <h2
            className="mb-5 leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,5.5vw,6rem)', color: '#001F4C' }}
          >
            Reunions &amp; <em className="not-italic" style={{ color: '#DF5400' }}>Campus Memories</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.85] max-w-[800px] mx-auto" style={{ color: '#5a6a8a' }}>
            The joy of walking familiar paths, the warmth of old friendships, and the nostalgia of shared memories — alumni meets are where journeys reconnect.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 max-[968px]:grid-cols-2 max-[640px]:grid-cols-1 gap-7">
          {CARDS.map((c, i) => (
            <div key={i} className="cl-rcm-card">
              <div className="cl-rcm-img h-[260px] overflow-hidden relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top,rgba(0,0,0,.7) 0%,transparent 65%)' }}
                />
                <span
                  className="absolute top-4 right-4 px-4 py-[7px] rounded-[20px] text-[.7rem] font-bold tracking-[.06em] uppercase text-white"
                  style={{ background: '#DF5400' }}
                >
                  {c.badge}
                </span>
              </div>
              <div className="p-[26px]">
                <h3 className="font-extrabold text-[1.14rem] mb-3" style={{ color: '#001F4C' }}>{c.title}</h3>
                <p className="text-[.92rem] leading-[1.75]" style={{ color: '#5a6a8a' }}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
