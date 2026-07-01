'use client';

const SPECS = [
  {
    tag: 'Core',
    name: 'Brand Strategy',
    desc: 'Understand how successful brands are built, positioned and remembered.',
    pills: ['Branding', 'Consumer Behaviour', 'Brand Communication'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    tag: 'High Reach',
    name: 'Social Media Marketing',
    desc: "Create engaging campaigns across today's most influential digital platforms.",
    pills: ['Instagram', 'LinkedIn', 'YouTube'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" strokeLinejoin="round" />
        <circle cx="6" cy="12" r="3" strokeLinejoin="round" />
        <circle cx="18" cy="19" r="3" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
  },
  {
    tag: 'High ROI',
    name: 'Performance Marketing',
    desc: 'Learn how businesses generate leads, traffic and revenue using paid campaigns.',
    pills: ['Google Ads', 'Meta Ads', 'PPC'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l4-4 4 4 4-6" />
      </svg>
    ),
  },
  {
    tag: 'Essential Skill',
    name: 'Content Marketing',
    desc: 'Create compelling content that attracts, educates and converts audiences.',
    pills: ['Copywriting', 'Storytelling', 'Video Marketing'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    tag: 'Future Ready',
    name: 'E-Commerce & Growth Marketing',
    desc: 'Learn how online businesses scale using data, automation and customer insights.',
    pills: ['Shopify', 'Amazon', 'Growth Funnels'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Principles of Management','Digital Marketing','Consumer Behaviour','Branding',
  'Social Media Marketing','SEO','Google Ads','Meta Advertising',
  'Content Marketing','Email Marketing','Marketing Analytics','AI for Marketing',
  'E-Commerce','Entrepreneurship',
];

export default function BBADMOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmo-sec{padding:110px 7%;background:#fff}
        .cl-dmo-wrap{max-width:1280px;margin:0 auto}

        /* split */
        .cl-dmo-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
        .cl-dmo-imgwrap{position:relative}
        .cl-dmo-img{border-radius:20px;width:100%;height:520px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22);position:relative}
        .cl-dmo-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-dmo-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2)}
        .cl-dmo-badge .big{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-dmo-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}
        .cl-dmo-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmo-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmo-h2{margin-bottom:22px;line-height:.95;letter-spacing:.01em;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-dmo-h2 em{font-style:normal;color:#DF5400}
        .cl-dmo-lead{font-size:1.18rem;font-weight:600;line-height:1.7;margin-bottom:20px;color:#001F4C}
        .cl-dmo-body{font-size:1rem;line-height:1.9;margin-bottom:20px;color:#5a6a8a}
        .cl-dmo-quote{padding-left:22px;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;border-left:4px solid #DF5400;color:#001F4C}

        /* section head */
        .cl-dmo-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dmo-head .cl-dmo-eyebrow{justify-content:center}
        .cl-dmo-head p{font-size:1.08rem;line-height:1.9;max-width:850px;margin:0 auto;color:#5a6a8a}

        /* spec grid */
        .cl-dmo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-dmo-card{background:#fff;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .4s,box-shadow .4s}
        .cl-dmo-card:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(0,31,76,.14)}
        .cl-dmo-card-img{position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 60%,#0a2d5c 100%);display:flex;align-items:center;justify-content:center}
        .cl-dmo-card-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.15) 55%,transparent 100%)}
        .cl-dmo-card-img svg{width:60px;height:60px;color:rgba(255,243,215,.85);position:relative;z-index:1}
        .cl-dmo-card-tag{position:absolute;top:14px;left:14px;z-index:3;padding:6px 14px;border-radius:20px;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;background:rgba(255,243,215,.95);color:#001F4C}
        .cl-dmo-card-name{position:absolute;bottom:14px;left:18px;right:18px;z-index:3;font-weight:800;font-size:1.15rem;color:#fff;line-height:1.25}
        .cl-dmo-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-dmo-card-body p{font-size:.9rem;line-height:1.7;margin-bottom:16px;color:#5a6a8a}
        .cl-dmo-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-dmo-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-dmo-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;color:#fff;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-dmo-core .t{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;line-height:1.05;margin-bottom:12px}
        .cl-dmo-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        /* core areas */
        .cl-dmo-areas{margin-top:70px}
        .cl-dmo-areas h3{text-align:center;font-size:1.5rem;font-weight:800;margin-bottom:36px;color:#001F4C}
        .cl-dmo-tag-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:1000px;margin:0 auto}
        .cl-dmo-tag{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .25s;cursor:default}
        .cl-dmo-tag:hover{border-color:#DF5400;color:#DF5400;transform:translateY(-2px)}

        @media(max-width:1200px){.cl-dmo-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){
          .cl-dmo-split{grid-template-columns:1fr;gap:40px}
          .cl-dmo-badge{left:0}
        }
        @media(max-width:640px){
          .cl-dmo-sec{padding:70px 5%}
          .cl-dmo-grid{grid-template-columns:1fr}
          .cl-dmo-core{grid-column:span 1}
        }
      `}} />

      <section className="cl-dmo-sec" id="overview">
        <div className="cl-dmo-wrap">

          {/* Split */}
          <div className="cl-dmo-split">
            <div className="cl-dmo-imgwrap">
              <div className="cl-dmo-img">
                <img src="/courses/bba/overviewImg.png" alt="BBA Digital Marketing students at Tulas" />
              </div>
              <div className="cl-dmo-badge">
                <span className="big">BBA</span>
                <span className="lbl">Digital<br />Marketing</span>
              </div>
            </div>
            <div>
              <div className="cl-dmo-eyebrow"><span className="bar" />School of Management</div>
              <h2 className="cl-dmo-h2">Where Business Meets<br /><em>Digital Innovation</em></h2>
              <p className="cl-dmo-lead">The BBA in Digital Marketing at Tulas is designed for students who want to build brands, scale businesses and lead marketing in the digital-first economy.</p>
              <p className="cl-dmo-body">The program combines business fundamentals with practical expertise in branding, social media marketing, search engine optimization, paid advertising, influencer marketing, AI tools, analytics and e-commerce. Students learn by executing live campaigns, solving business challenges and working with industry mentors throughout the program.</p>
              <blockquote className="cl-dmo-quote">"Marketing is no longer about selling products. It's about creating experiences people remember."</blockquote>
            </div>
          </div>

          {/* Specs heading */}
          <div className="cl-dmo-head">
            <div className="cl-dmo-eyebrow" style={{ justifyContent: 'center' }}><span className="bar" />Specialization Areas</div>
            <h2 className="cl-dmo-h2">Five Specializations, One Strong<br /><em>Marketing Core</em></h2>
            <p>Each specialization is built on strong business and marketing fundamentals, enhanced through AI-integrated, campaign-driven learning.</p>
          </div>

          {/* Spec grid */}
          <div className="cl-dmo-grid">
            {SPECS.map((s) => (
              <div className="cl-dmo-card" key={s.name}>
                <div className="cl-dmo-card-img">
                  {s.icon}
                  <span className="cl-dmo-card-tag">{s.tag}</span>
                  <span className="cl-dmo-card-name">{s.name}</span>
                </div>
                <div className="cl-dmo-card-body">
                  <p>{s.desc}</p>
                  <div className="cl-dmo-pills">
                    {s.pills.map((p) => <span className="cl-dmo-pill" key={p}>{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-dmo-core">
              <div className="t">Built on Business<br />Fundamentals</div>
              <p>Management · Marketing · Finance · Entrepreneurship · Communication · AI</p>
            </div>
          </div>

          {/* Core areas */}
          <div className="cl-dmo-areas">
            <h3>Core Learning Areas</h3>
            <div className="cl-dmo-tag-row">
              {CORE_AREAS.map((a) => <span className="cl-dmo-tag" key={a}>{a}</span>)}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
