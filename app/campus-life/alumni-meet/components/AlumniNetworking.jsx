'use client';

const NETWORK_CARDS = [
  { icon: '🌐', title: 'Global Network',    count: '25+ Countries', sub: 'Alumni spread across the world'   },
  { icon: '💼', title: 'Industry Leaders',  count: '500+',          sub: 'In leadership positions'          },
  { icon: '🤝', title: 'Mentorship',        count: '1000+',         sub: 'Mentoring connections'            },
  { icon: '🚀', title: 'Entrepreneurs',     count: '200+',          sub: 'Startups founded by alumni'       },
];

const MAP_ITEMS = [
  { icon: '🌍', text: 'Global Reach',      sub: '25+ countries'  },
  { icon: '💡', text: 'Tech & Innovation', sub: 'Growing sector' },
  { icon: '🏢', text: 'Corporate Leaders', sub: 'Fortune 500s'   },
];

export default function AlumniNetworking() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`@keyframes cl-map-fade{0%,85%,100%{opacity:0;transform:translateY(-50%) translateX(60px)}10%,75%{opacity:1;transform:translateY(-50%) translateX(0)}}.cl-conn-map{position:fixed;right:30px;top:50%;transform:translateY(-50%);z-index:8888;background:rgba(0,31,76,.95);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.15);border-radius:16px;padding:20px 18px;box-shadow:0 12px 36px rgba(0,0,0,.3);animation:cl-map-fade 15s ease-in-out infinite}@media(max-width:968px){.cl-conn-map{display:none}}`}} />

      {/* Floating connection map widget */}
      {/* <div className="cl-conn-map">
        <div
          className="text-[.72rem] font-bold uppercase tracking-[.1em] mb-[14px] text-center"
          style={{ color: '#FFF3D7' }}
        >
          Alumni Network
        </div>
        {MAP_ITEMS.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-[10px] px-3 py-[10px] rounded-[10px] mb-2 border-l-[3px]"
            style={{ background: 'rgba(255,255,255,.08)', borderLeftColor: '#DF5400' }}
          >
            <span className="text-[1.2rem]">{m.icon}</span>
            <div>
              <div className="text-[.78rem] text-white font-semibold">{m.text}</div>
              <div className="text-[.68rem] mt-[2px]" style={{ color: 'rgba(255,255,255,.6)' }}>{m.sub}</div>
            </div>
          </div>
        ))}
      </div> */}

      <section
        className="py-[100px] px-[7%] max-[640px]:py-[65px] max-[640px]:px-[5%] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 25% 50%,rgba(223,84,0,.12) 0%,transparent 55%)' }}
        />

        <div className="relative z-[2]">
          {/* Header */}
          <div className="text-center max-w-[850px] mx-auto mb-[70px]">
            <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.16em] mb-[18px]" style={{ color: '#DF5400' }}>
              <span className="block w-[32px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
              Professional Networks
            </div>
            <h2
              className="mb-5 leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3rem,5.5vw,6rem)', color: '#fff' }}
            >
              Alumni Connections &amp;<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Networking</em>
            </h2>
            <p className="text-[1.08rem] leading-[1.85] max-w-[800px] mx-auto" style={{ color: 'rgba(255,255,255,.7)' }}>
              Beyond friendships, Tula&apos;s alumni form professional networks that open doors, create opportunities, and support each other&apos;s growth across industries and geographies.
            </p>
          </div>

          {/* Network stat cards */}
          <div className="grid grid-cols-4 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1 gap-6">
            {NETWORK_CARDS.map((c, i) => (
              <div
                key={i}
                className="rounded-[16px] px-6 py-8 text-center transition-all duration-[350ms] hover:-translate-y-2"
                style={{ background: 'rgba(255,255,255,.09)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.14)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.14)'; e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className="text-[2.8rem] mb-[18px] block" style={{ filter: 'drop-shadow(0 4px 10px rgba(223,84,0,.5))' }}>{c.icon}</div>
                <h3 className="font-extrabold text-[1.1rem] text-white mb-[10px]">{c.title}</h3>
                <span
                  className="block mb-[10px] tracking-[.02em]"
                  style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#FFF3D7' }}
                >
                  {c.count}
                </span>
                <p className="text-[.86rem]" style={{ color: 'rgba(255,255,255,.65)' }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
