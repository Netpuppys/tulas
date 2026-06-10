'use client';

const CARDS = [
  { icon: '🎯', title: 'Where Leadership Meets Perspective',  desc: 'Students engage in governance simulations, parliamentary debates, and policy discussions that mirror real legislative processes.' },
  { icon: '💬', title: 'Conversations That Inspire Change',    desc: 'Keynote sessions and panel discussions with prominent leaders, policymakers, and industry experts on nation-building topics.' },
  { icon: '🌟', title: 'Youth Participation With Purpose',     desc: 'Over 2000 students participating in debates, resolutions, and leadership workshops focused on governance and civic responsibility.' },
  { icon: '📊', title: 'Building Awareness Through Dialogue',  desc: 'Sessions on economic policy, social development, environmental governance, and technology\'s role in nation-building.' },
  { icon: '🚀', title: 'Leadership Through Ideas & Action',    desc: 'From policy drafting to public speaking, students develop real leadership skills through experiential participation.' },
  { icon: '🤝', title: 'National-Level Impact',               desc: 'Resolutions and ideas generated during the conclave are presented to state and national policymakers for consideration.' },
];

export default function ChhatraSansadConclave() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-cs-card{background:rgba(255,255,255,.1);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.15);border-radius:20px;padding:38px 32px;transition:all .4s;position:relative;overflow:hidden}.cl-cs-card::before{content:'';position:absolute;top:0;left:0;right:0;height:5px;background:#FFF3D7;transform:scaleX(0);transform-origin:left;transition:transform .4s}.cl-cs-card:hover{background:rgba(255,255,255,.16);border-color:#FFF3D7;transform:translateY(-10px);box-shadow:0 20px 50px rgba(0,0,0,.35)}.cl-cs-card:hover::before{transform:scaleX(1)}.cl-cs-visuals{display:grid;grid-template-columns:2fr 1fr;gap:24px;margin-top:70px}.cl-cs-side{display:flex;flex-direction:column;gap:24px}.cl-cs-small img{transition:transform .6s}.cl-cs-small:hover img{transform:scale(1.08)}.cl-cs-main img{transition:transform .7s}.cl-cs-main:hover img{transform:scale(1.06)}@media(max-width:968px){.cl-cs-visuals{grid-template-columns:1fr}.cl-cs-side{flex-direction:row}}@media(max-width:640px){.cl-cs-side{flex-direction:column}}`}} />

      <section
        id="conclave"
        className="py-[110px] px-[7%] max-[640px]:py-[70px] max-[640px]:px-[5%] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#001F4C 0%,#00152e 100%)' }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 40%,rgba(223,84,0,.12) 0%,transparent 60%)' }}
        />

        <div className="relative z-[2]">
          {/* Header */}
          <div className="text-center max-w-[900px] mx-auto mb-20">
            <div
              className="inline-flex items-center gap-[10px] mb-6 px-6 py-[10px] rounded-[30px] text-[.78rem] font-bold tracking-[.15em] uppercase"
              style={{ background: 'rgba(255,243,215,.15)', border: '1px solid rgba(255,243,215,.3)', color: '#FFF3D7' }}
            >
              <span className="text-[1.2rem]">🏛️</span>
              Flagship Event
            </div>

            <h2
              className="mb-[22px] leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(3.2rem,6vw,6.5rem)', color: '#fff' }}
            >
              Uttarakhand Chhatra Sansad<br />
              <em className="not-italic" style={{ color: '#DF5400' }}>Conclave 2026</em>
            </h2>

            <p className="text-[1.1rem] leading-[1.9]" style={{ color: 'rgba(255,255,255,.75)' }}>
              A premier youth parliament and leadership summit bringing together students, policymakers, and leaders for national-level governance discussions and policy debates.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1 gap-8">
            {CARDS.map((c, i) => (
              <div key={i} className="cl-cs-card">
                <span
                  className="block text-[2.6rem] mb-[22px]"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(255,243,215,.4))' }}
                >
                  {c.icon}
                </span>
                <h3 className="font-extrabold text-[1.28rem] text-white mb-[14px]">{c.title}</h3>
                <p className="text-[.98rem] leading-[1.85]" style={{ color: 'rgba(255,255,255,.8)' }}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Visuals */}
          <div className="cl-cs-visuals">
            {/* Main image */}
            <div
              className="cl-cs-main relative rounded-[20px] overflow-hidden"
              style={{ boxShadow: '0 24px 70px rgba(0,0,0,.4)' }}
            >
              <img
                src="/campus-life/leadershipfest/img2.jpg"
                alt="Conclave Main Stage"
                className="w-full object-cover"
                style={{ height: '500px' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top,rgba(0,31,76,.85) 0%,transparent 65%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-extrabold text-[1.4rem] text-white mb-2">Chhatra Sansad Main Assembly</h3>
                <p className="text-[.95rem]" style={{ color: 'rgba(255,255,255,.85)' }}>Students engaging in parliamentary proceedings and governance debates</p>
              </div>
            </div>

            {/* Side images */}
            <div className="cl-cs-side">
              {['/campus-life/leadershipfest/img3.jpg', '/campus-life/leadershipfest/img1.jpg'].map((src, i) => (
                <div
                  key={i}
                  className="cl-cs-small relative rounded-[16px] overflow-hidden flex-1"
                  style={{ boxShadow: '0 16px 40px rgba(0,0,0,.3)' }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
