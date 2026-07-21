'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Advanced Learning',      desc:'AI, ML, and emerging intelligent technologies embedded throughout the entire M.Tech CSE curriculum.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',            desc:'Industry-recognised certifications through IIT Kanpur E&ICT and global tech leaders including AWS, Microsoft, Google, NVIDIA, and Oracle.' },
  { num:'03', title:'Industry-Oriented Curriculum',        desc:'Continuously updated to reflect emerging technologies, evolving industry needs, and global computing advancements.' },
  { num:'04', title:'Research & Dissertation-Based Learning',desc:'Advanced laboratories, research projects, and industry-sponsored problem-solving from semester one.' },
  { num:'05', title:'Industry Collaboration',              desc:'Consultancy assignments, internships, expert talks, industrial visits, and technology partnerships with leading organisations.' },
  { num:'06', title:'Emerging Tech Specialisations',       desc:'Generative AI, Agentic AI, Cloud Computing, Cyber Security, MLOps, and Edge AI — the technologies shaping the future.' },
  { num:'07', title:'Career & Research Development',       desc:'Dedicated placement support, technical training, and clear doctoral study pathways for ambitious graduates.' },
  { num:'08', title:'Expert Faculty Mentorship',           desc:'Continuous mentorship in advanced technologies, innovation, and research from experienced academicians and industry professionals.' },
  { num:'09', title:'Publications, Innovation & Patents',  desc:'High-impact journal publications, conference presentations, and intellectual property creation supported by the institute.' },
  { num:'10', title:'Strong Alumni Network',               desc:'Distinguished alumni across MNCs, research organisations, government bodies, and technology startups worldwide.' },
  { num:'11', title:'Advanced Computing Labs',             desc:'High-performance computing systems, AI platforms, cybersecurity labs, and cloud infrastructure for hands-on research.' },
  { num:'12', title:'Innovation Ecosystem',                desc:'Research groups, hackathons, startup incubation, and technical symposiums fostering entrepreneurship and discovery.' },
];

export default function MTechCSEWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-why-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mtcse-why-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtcse-why-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-mtcse-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtcse-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtcse-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mtcse-why-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtcse-why-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtcse-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-mtcse-why-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-mtcse-why-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-mtcse-why-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-mtcse-why-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-mtcse-why-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-mtcse-why-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-mtcse-why-sec{padding:70px 5%}.cl-mtcse-why-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mtcse-why-sec" id="why-tulas">
        <div className="cl-mtcse-why-wrap">
          <div className="cl-mtcse-why-head">
            <div className="cl-mtcse-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mtcse-why-h2">Why Pursue M.Tech CSE<br/><em>At Tulas Institute</em></h2>
            <p className="cl-mtcse-why-sub">A postgraduate programme designed for the era of intelligent computing — combining advanced technical knowledge, research, industry collaboration, and innovation.</p>
          </div>
          <div className="cl-mtcse-why-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-mtcse-why-card">
                <div className="cl-mtcse-why-num">{c.num}</div>
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
