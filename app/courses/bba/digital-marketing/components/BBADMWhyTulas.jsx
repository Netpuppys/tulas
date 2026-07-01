'use client';

const WHY_CARDS = [
  { n: '01', title: 'You Run Real Campaigns',           desc: 'Build a portfolio of real marketing work through live campaigns, industry projects, internships and your final capstone.' },
  { n: '02', title: 'Core + Specialisation Architecture', desc: 'Build a strong foundation in digital marketing before specialising in your chosen area of expertise.' },
  { n: '03', title: 'Integrated Placement Preparation', desc: 'Prepare for campus recruitment through dedicated aptitude, analytics and certification training aligned with industry hiring standards.' },
  { n: '04', title: 'Meet Founders & Marketing Leaders', desc: 'Learn directly from founders, CMOs and digital marketing leaders through guest lectures, expert sessions and industry interactions.' },
  { n: '05', title: '100% Hands-On, Practical-Driven',  desc: 'Every semester includes practical deliverables, live campaigns and real-world projects that build job-ready skills.' },
  { n: '06', title: 'AI-Native Learning via LEAP',       desc: 'Learn through LEAP, our AI-native learning platform that personalises your learning journey and tracks your progress in real time.' },
  { n: '07', title: 'Startup & Marketing Hackathons',    desc: 'Participate in marketing hackathons, startup challenges and brand case competitions while learning from experienced industry mentors.' },
  { n: '08', title: 'Entrepreneurship from 2nd Year',   desc: 'Develop an entrepreneurial mindset through idea validation, innovation and brand-building from your second year onwards.' },
  { n: '09', title: 'Life Skills & Professional Growth', desc: 'Build workplace confidence through business communication, digital ethics, financial literacy and career readiness aligned with NEP 2020.' },
  { n: '10', title: 'Industry Certifications Across 3 Years', desc: 'Earn globally recognised certifications from Google, Meta, HubSpot, IIT Kanpur E&ICT Academy and other leading technology partners.' },
];

export default function BBADMWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmw-sec{padding:110px 7%;background:#f8f9fc}
        .cl-dmw-wrap{max-width:1280px;margin:0 auto}

        .cl-dmw-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dmw-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmw-h2{margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-dmw-h2 em{font-style:normal;color:#DF5400}
        .cl-dmw-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-dmw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-dmw-card{position:relative;overflow:hidden;border-radius:18px;padding:32px 28px;border:1px solid #e0e4ed;background:#fff;transition:all .4s}
        .cl-dmw-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:#DF5400;transform:scaleX(0);transform-origin:left;transition:transform .4s}
        .cl-dmw-card:hover{transform:translateY(-8px);box-shadow:0 18px 45px rgba(0,31,76,.12);border-color:#DF5400}
        .cl-dmw-card:hover::before{transform:scaleX(1)}
        .cl-dmw-card .n{margin-bottom:14px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400}
        .cl-dmw-card h3{font-weight:800;font-size:1.1rem;margin-bottom:10px;color:#001F4C}
        .cl-dmw-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}

        @media(max-width:1200px){.cl-dmw-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){
          .cl-dmw-sec{padding:70px 5%}
          .cl-dmw-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-dmw-sec" id="why">
        <div className="cl-dmw-wrap">
          <div className="cl-dmw-head">
            <div className="cl-dmw-eyebrow"><span className="bar" />The Tulas Advantage</div>
            <h2 className="cl-dmw-h2">Why Study Digital Marketing<br /><em>At Tulas</em></h2>
            <p>A program built for the digital-first economy — combining real campaigns, AI-powered learning, and direct industry connections that set you apart from day one.</p>
          </div>
          <div className="cl-dmw-grid">
            {WHY_CARDS.map((c) => (
              <div className="cl-dmw-card" key={c.n}>
                <div className="n">{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
