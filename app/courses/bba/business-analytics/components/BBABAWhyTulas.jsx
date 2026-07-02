'use client';

const WHY_CARDS = [
  { n: '01', title: 'Solve Real Business Problems',         desc: 'Work on live datasets, business dashboards, consulting assignments, internships, and a final analytics capstone.' },
  { n: '02', title: 'Core + Specialisation Architecture',   desc: 'Build a strong business foundation in BBA with a specialization in Business Analytics.' },
  { n: '03', title: 'Integrated Placement Preparation',     desc: 'Prepare for campus recruitment through aptitude training, analytics projects, industry certifications, and interview readiness.' },
  { n: '04', title: 'Learn from Industry Experts',          desc: 'Interact with business leaders, consultants, analysts, and entrepreneurs through guest lectures and expert sessions.' },
  { n: '05', title: 'Practical Learning Every Semester',    desc: 'Build dashboards, analyse datasets, solve business case studies, and present insights through hands-on projects.' },
  { n: '06', title: 'AI-native Learning via LEAP',          desc: 'Use LEAP, our AI-native learning platform, to personalise your learning journey and continuously track your progress.' },
  { n: '07', title: 'Industry Projects & Analytics Challenges', desc: 'Participate in analytics competitions, business consulting projects, and innovation challenges to strengthen practical skills.' },
  { n: '08', title: 'Entrepreneurship & Innovation',        desc: 'Develop analytical thinking to identify business opportunities, optimise operations, and drive strategic growth.' },
  { n: '09', title: 'Life Skills & Professional Growth',    desc: 'Develop workplace communication, analytical thinking, business ethics, financial literacy, and career readiness aligned with NEP 2020.' },
  { n: '10', title: 'Industry Certifications Across 3 Years', desc: 'Graduate with certifications from Microsoft, Google, IIT Kanpur E&ICT Academy, DeepLearning.AI, and other leading technology partners.' },
];

export default function BBABAWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-baw-sec{padding:110px 7%;background:#f8f9fc}
        .cl-baw-wrap{max-width:1280px;margin:0 auto}

        .cl-baw-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-baw-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-baw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-baw-h2{margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-baw-h2 em{font-style:normal;color:#DF5400}
        .cl-baw-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-baw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-baw-card{position:relative;overflow:hidden;border-radius:18px;padding:32px 28px;border:1px solid #e0e4ed;background:#fff;transition:all .4s}
        .cl-baw-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:#DF5400;transform:scaleX(0);transform-origin:left;transition:transform .4s}
        .cl-baw-card:hover{transform:translateY(-8px);box-shadow:0 18px 45px rgba(0,31,76,.12);border-color:#DF5400}
        .cl-baw-card:hover::before{transform:scaleX(1)}
        .cl-baw-card .n{margin-bottom:14px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400}
        .cl-baw-card h3{font-weight:800;font-size:1.1rem;margin-bottom:10px;color:#001F4C}
        .cl-baw-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}

        @media(max-width:1200px){.cl-baw-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){
          .cl-baw-sec{padding:70px 5%}
          .cl-baw-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-baw-sec" id="why">
        <div className="cl-baw-wrap">
          <div className="cl-baw-head">
            <div className="cl-baw-eyebrow"><span className="bar" />The Tulas Advantage</div>
            <h2 className="cl-baw-h2">Why Study Business Analytics<br /><em>At Tulas</em></h2>
            <p>A programme built for the data-driven economy — combining real analytics projects, AI-powered learning, and direct industry connections that set you apart from day one.</p>
          </div>
          <div className="cl-baw-grid">
            {WHY_CARDS.map((c) => (
              <div className="cl-baw-card" key={c.n}>
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
