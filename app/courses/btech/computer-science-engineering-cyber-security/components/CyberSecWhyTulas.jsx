'use client';

const WHY_CARDS = [
  {
    num: '01',
    title: 'AI-Integrated Learning',
    text: 'Artificial intelligence and machine learning woven across the curriculum to enhance how you learn, create and solve.',
  },
  {
    num: '02',
    title: 'IIT Kanpur E&ICT Academy & Industry Certifications',
    text: 'Earn industry-recognized certifications through IIT Kanpur E&ICT Academy and global partners including AWS, Microsoft, Google, NVIDIA and Oracle.',
  },
  {
    num: '03',
    title: 'Industry-Aligned Curriculum',
    text: 'A future-focused curriculum continuously updated to match evolving technologies, industry trends and workplace expectations.',
  },
  {
    num: '04',
    title: 'Project-Based Learning',
    text: 'Build practical skills through live projects, hackathons, product development and real-world problem solving.',
  },
  {
    num: '05',
    title: 'Industry Connect & Projects',
    text: 'Bridge classroom learning with the real world through projects, industrial visits, expert interactions and corporate collaborations.',
  },
  {
    num: '06',
    title: 'Emerging Technology Exposure',
    text: 'Explore Generative AI, Agentic AI, Cloud Computing, Computer Vision, Blockchain, IoT and other future technologies.',
  },
  {
    num: '07',
    title: 'Career & Placement Readiness',
    text: 'Develop corporate-ready skills through aptitude training, interview preparation, soft skills and placement support powered by TCCI.',
  },
  {
    num: '08',
    title: 'Expert Faculty & Mentorship',
    text: 'Learn from experienced faculty and industry experts committed to continuous upskilling, mentorship and practical learning.',
  },
  {
    num: '09',
    title: 'Research, Innovation & Patents',
    text: 'Innovate through research publications, funded projects, patents and a culture that encourages discovery and problem-solving.',
  },
  {
    num: '10',
    title: 'Global Alumni Network',
    text: 'Join a thriving network of 1000+ alumni working across leading MNCs, startups and government organizations.',
  },
  {
    num: '11',
    title: 'Modern Labs & Centres of Excellence',
    text: 'Learn in advanced laboratories and technology centres designed for hands-on experimentation, innovation and industry-ready skills.',
  },
  {
    num: '12',
    title: 'Student Clubs & Technical Communities',
    text: 'Grow beyond academics through coding clubs, innovation cells, hackathons, competitions and leadership opportunities.',
  },
];

export default function CyberSecWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cyw-sec{padding:110px 7%;background:#f8f9fc}
        .cl-cyw-wrap{max-width:1280px;margin:0 auto}

        .cl-cyw-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-cyw-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-cyw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-cyw-h2{margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-cyw-h2 em{font-style:normal;color:#DF5400}
        .cl-cyw-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-cyw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-cyw-card{position:relative;overflow:hidden;border-radius:18px;padding:32px 28px;border:1px solid #e0e4ed;background:#fff;transition:all .4s}
        .cl-cyw-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:#DF5400;transform:scaleX(0);transform-origin:left;transition:transform .4s}
        .cl-cyw-card:hover{transform:translateY(-8px);box-shadow:0 18px 45px rgba(0,31,76,.12);border-color:#DF5400}
        .cl-cyw-card:hover::before{transform:scaleX(1)}
        .cl-cyw-card .n{margin-bottom:14px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400}
        .cl-cyw-card h3{font-weight:800;font-size:1.15rem;margin-bottom:10px;color:#001F4C}
        .cl-cyw-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}

        @media(max-width:1200px){.cl-cyw-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){
          .cl-cyw-sec{padding:70px 5%}
          .cl-cyw-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-cyw-sec" id="why">
        <div className="cl-cyw-wrap">
          <div className="cl-cyw-head">
            <div className="cl-cyw-eyebrow"><span className="bar" />The Tulas Advantage</div>
            <h2 className="cl-cyw-h2">Why Study Cyber<br /><em>At Tulas</em></h2>
            <p>A program engineered for the threat era — combining strong fundamentals, industry alignment, and a culture of hands-on practice.</p>
          </div>
          <div className="cl-cyw-grid">
            {WHY_CARDS.map((c) => (
              <div className="cl-cyw-card" key={c.n}>
                <div className="n">{c.n}</div>
                <h3 dangerouslySetInnerHTML={{ __html: c.title }} />
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
