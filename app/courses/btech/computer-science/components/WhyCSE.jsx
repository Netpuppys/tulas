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

export default function WhyCSE() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-why-cse-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-why-cse-card{position:relative;overflow:hidden;border-radius:18px;padding:32px 28px;border:1px solid #e0e4ed;transition:all .4s}
        .cl-why-cse-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:#DF5400;transform:scaleX(0);transform-origin:left;transition:transform .4s}
        .cl-why-cse-card:hover{transform:translateY(-8px);box-shadow:0 18px 45px rgba(0,31,76,.12);border-color:#DF5400}
        .cl-why-cse-card:hover::before{transform:scaleX(1)}
        @media(max-width:1200px){.cl-why-cse-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-why-cse-grid{grid-template-columns:1fr}}
      `}} />

      <section
        id="why-cse-section"
        className="py-[50px] px-[7%] max-[640px]:py-[30px] max-[640px]:px-[5%]"
        style={{ background: '#f8f9fc' }}
      >
        {/* Header */}
        <div className="text-center max-w-[880px] mx-auto mb-[70px]">
          <div className="inline-flex items-center justify-center gap-[10px] text-[.74rem] font-bold uppercase tracking-[.18em] mb-[20px]" style={{ color: '#DF5400' }}>
            <span className="block w-[34px] h-[3px] rounded-[2px] flex-shrink-0" style={{ background: '#DF5400' }} />
            The Tulas Advantage
          </div>
          <h2
            className="mb-[22px] leading-[.95] tracking-[.01em]"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,4vw,4rem)', color: '#001F4C' }}
          >
            Why Study CSE<br />
            <em className="not-italic" style={{ color: '#DF5400' }}>At Tulas</em>
          </h2>
          <p className="text-[1.08rem] leading-[1.9] max-w-[850px] mx-auto" style={{ color: '#5a6a8a' }}>
            A program engineered for the AI era — combining strong fundamentals, industry alignment, and a culture of innovation.
          </p>
        </div>

        {/* 3×3 grid */}
        <div className="cl-why-cse-grid">
          {WHY_CARDS.map((card, i) => (
            <div key={i} className="cl-why-cse-card" style={{ background: '#fff' }}>
              <div
                className="mb-[14px] leading-[1]"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2rem', color: '#DF5400' }}
              >
                {card.num}
              </div>
              <h3 className="font-extrabold text-[1.15rem] mb-[10px]" style={{ color: '#001F4C' }}>{card.title}</h3>
              <p className="text-[.92rem] leading-[1.75]" style={{ color: '#5a6a8a' }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
