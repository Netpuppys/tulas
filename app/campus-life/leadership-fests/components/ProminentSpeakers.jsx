'use client';

const SPOTLIGHT = {
  img:    '/mnt/user-data/uploads/ABHI0128.JPG',
  role:   'Keynote Speaker',
  name:   'Shri Sundararaman Ramamurthy',
  title:  'Managing Director & CEO',
  org:    'BSE (Bombay Stock Exchange)',
  bio:    "A visionary leader in India's financial markets, Shri Ramamurthy brings decades of experience in capital markets, governance, and regulatory frameworks. His session on financial leadership and governance provides students with invaluable insights into economic policy and market dynamics.",
  topics: ['Financial Leadership', 'Market Governance', 'Economic Policy', 'Capital Markets'],
};

const SPEAKERS = [
  { img: '/mnt/user-data/uploads/ABHI0602.JPG', role: 'Media Personality',  name: 'Anand Narasimhan',            title: 'Senior Journalist & News Anchor'       },
  { img: '/mnt/user-data/uploads/ABHI0307.JPG', role: 'Social Activist',    name: 'Arushi Nishank',              title: 'Social Entrepreneur & Youth Leader'    },
  { img: '/mnt/user-data/uploads/ABHI0044.JPG', role: 'Entrepreneur',       name: 'Praful Billore (MBA Chaiwala)', title: 'Founder, MBA Chaiwala'                },
  { img: '/mnt/user-data/uploads/ABHI0960.JPG', role: 'Digital Creator',    name: 'Aditya Vegda',                title: 'Content Creator & Youth Influencer'    },
  { img: '/mnt/user-data/uploads/ABHI0007.JPG', role: 'Leadership Expert',  name: 'Vishal Bhardwaj',             title: 'Public Speaker & Motivator'            },
  { img: '/mnt/user-data/uploads/DSC00432.JPG', role: 'Youth Leader',       name: 'Laksh Maheshwari',            title: 'Student Leader & Activist'             },
];

export default function ProminentSpeakers() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-sp-spotlight{background:#f8f9fc;border-radius:24px;padding:60px;margin-bottom:70px;box-shadow:0 20px 60px rgba(0,31,76,.1);display:grid;grid-template-columns:380px 1fr;gap:70px;align-items:center;transition:all .4s}.cl-sp-spotlight:hover{box-shadow:0 28px 80px rgba(223,84,0,.15);transform:translateY(-6px)}.cl-sp-photo img{transition:transform .7s}.cl-sp-spotlight:hover .cl-sp-photo img{transform:scale(1.05)}.cl-sp-card img{transition:transform .6s}.cl-sp-card:hover .cl-sp-card-img img{transform:scale(1.08)}@media(max-width:1200px){.cl-sp-spotlight{grid-template-columns:1fr;gap:50px;text-align:center}.cl-sp-photo{margin:0 auto}}`}} />

      <section
        id="speakers"
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%]"
        style={{ background: '#fff' }}
      >
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-[70px]">
          <div className="inline-flex items-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-5" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            Thought Leaders
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3.2rem,6vw,6.5rem)', color: '#001F4C' }}
          >
            Prominent Personalities &amp;<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>Speaker Sessions</em>
          </h2>
          <p className="text-[1.1rem] leading-[1.9]" style={{ color: '#5a6a8a' }}>
            Leadership Fest brings influential voices from governance, finance, policy, and industry to engage with students in meaningful dialogue.
          </p>
        </div>

        {/* Spotlight */}
        <div className="cl-sp-spotlight">
          <div
            className="cl-sp-photo relative rounded-[20px] overflow-hidden"
            style={{ boxShadow: '0 16px 48px rgba(0,31,76,.2)' }}
          >
            <img
              src={SPOTLIGHT.img}
              alt={SPOTLIGHT.name}
              className="w-full object-cover"
              style={{ height: '480px' }}
            />
          </div>

          <div className="py-5">
            <span
              className="inline-block mb-5 px-5 py-2 rounded-[30px] text-[.76rem] font-bold tracking-[.12em] uppercase"
              style={{ background: 'rgba(223,84,0,.1)', border: '1px solid rgba(223,84,0,.25)', color: '#DF5400' }}
            >
              {SPOTLIGHT.role}
            </span>
            <h3 className="font-extrabold text-[2.2rem] leading-[1.1] mb-3" style={{ color: '#001F4C' }}>{SPOTLIGHT.name}</h3>
            <p className="text-[1.15rem] font-semibold mb-1" style={{ color: '#5a6a8a' }}>{SPOTLIGHT.title}</p>
            <p className="text-[1.05rem] font-bold mb-7" style={{ color: '#DF5400' }}>{SPOTLIGHT.org}</p>
            <p className="text-[1.02rem] leading-[1.85] mb-7" style={{ color: '#5a6a8a' }}>{SPOTLIGHT.bio}</p>
            <div className="flex flex-wrap gap-3">
              {SPOTLIGHT.topics.map((t, i) => (
                <span
                  key={i}
                  className="bg-white px-[18px] py-[10px] rounded-[8px] text-[.88rem] font-semibold transition-all duration-[250ms] cursor-default hover:bg-[#DF5400] hover:text-white hover:border-[#DF5400]"
                  style={{ border: '1.5px solid #e0e4ed', color: '#001F4C' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#DF5400'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#DF5400'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#001F4C'; e.currentTarget.style.borderColor = '#e0e4ed'; }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Speakers grid */}
        <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1 gap-8">
          {SPEAKERS.map((s, i) => (
            <div
              key={i}
              className="cl-sp-card bg-white rounded-[20px] overflow-hidden transition-all duration-[400ms] hover:-translate-y-2 cursor-pointer"
              style={{ border: '2px solid #e0e4ed' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#DF5400'; e.currentTarget.style.boxShadow = '0 18px 48px rgba(223,84,0,.16)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e4ed'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div className="cl-sp-card-img h-[320px] overflow-hidden relative">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <p className="text-[.74rem] font-bold uppercase tracking-[.1em] mb-[10px]" style={{ color: '#DF5400' }}>{s.role}</p>
                <h4 className="font-extrabold text-[1.2rem] mb-[6px]" style={{ color: '#001F4C' }}>{s.name}</h4>
                <p className="text-[.92rem]" style={{ color: '#5a6a8a' }}>{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
