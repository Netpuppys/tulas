'use client';

const SPECS = [
  {
    tag: 'Core',
    name: 'Machine Learning',
    desc: 'Design and train intelligent models that learn from data to predict, classify, and optimise decisions at scale.',
    pills: ['Supervised Learning', 'Scikit-Learn', 'Model Evaluation'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l3-6 4 3 3-8"/>
      </svg>
    ),
  },
  {
    tag: 'High Demand',
    name: 'Deep Learning',
    desc: 'Build neural networks and transformer architectures that power image recognition, NLP, and autonomous systems.',
    pills: ['TensorFlow', 'PyTorch', 'Neural Networks'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="2.5" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v5c0 1.38 4.03 2.5 9 2.5S21 11.38 21 10V5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v5c0 1.38 4.03 2.5 9 2.5S21 16.38 21 15v-5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15v4c0 1.38 4.03 2.5 9 2.5S21 20.38 21 19v-4"/>
      </svg>
    ),
  },
  {
    tag: 'Future Ready',
    name: 'Generative AI & LLMs',
    desc: 'Develop AI applications using large language models, prompt engineering, RAG pipelines, and AI agents.',
    pills: ['LangChain', 'Hugging Face', 'RAG & Agents'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5"/>
      </svg>
    ),
  },
  {
    tag: 'Industry Ready',
    name: 'Computer Vision',
    desc: 'Create intelligent systems that detect, classify, and understand visual information from images and video streams.',
    pills: ['OpenCV', 'CNNs', 'Object Detection'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    tag: 'Essential Skill',
    name: 'MLOps & Cloud AI',
    desc: 'Deploy, monitor, and scale machine learning models in production using cloud platforms and modern DevOps practices.',
    pills: ['AWS SageMaker', 'Docker', 'CI/CD for ML'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Python for AI','Machine Learning','Deep Learning','Neural Networks',
  'Natural Language Processing','Computer Vision','Generative AI',
  'Large Language Models','LangChain','Hugging Face','TensorFlow',
  'PyTorch','MLOps','Cloud AI','Vector Databases','AI Research',
];

export default function MCAMLOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mmlo-sec{padding:110px 7%;background:#fff}
        .cl-mmlo-wrap{max-width:1280px;margin:0 auto}

        .cl-mmlo-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
        .cl-mmlo-imgwrap{position:relative}
        .cl-mmlo-img{border-radius:20px;width:100%;height:520px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22);position:relative}
        .cl-mmlo-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-mmlo-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2)}
        .cl-mmlo-badge .big{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-mmlo-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}
        .cl-mmlo-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mmlo-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mmlo-h2{margin-bottom:22px;line-height:.95;letter-spacing:.01em;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-mmlo-h2 em{font-style:normal;color:#DF5400}
        .cl-mmlo-lead{font-size:1.18rem;font-weight:600;line-height:1.7;margin-bottom:20px;color:#001F4C}
        .cl-mmlo-body{font-size:1rem;line-height:1.9;margin-bottom:20px;color:#5a6a8a}
        .cl-mmlo-quote{padding-left:22px;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;border-left:4px solid #DF5400;color:#001F4C}

        .cl-mmlo-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mmlo-head .cl-mmlo-eyebrow{justify-content:center}
        .cl-mmlo-head p{font-size:1.08rem;line-height:1.9;max-width:850px;margin:0 auto;color:#5a6a8a}

        .cl-mmlo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-mmlo-card{background:#fff;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .4s,box-shadow .4s}
        .cl-mmlo-card:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(0,31,76,.14)}
        .cl-mmlo-card-img{position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 60%,#0a2d5c 100%);display:flex;align-items:center;justify-content:center}
        .cl-mmlo-card-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.15) 55%,transparent 100%)}
        .cl-mmlo-card-img svg{width:60px;height:60px;color:rgba(255,243,215,.85);position:relative;z-index:1}
        .cl-mmlo-card-tag{position:absolute;top:14px;left:14px;z-index:3;padding:6px 14px;border-radius:20px;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;background:rgba(255,243,215,.95);color:#001F4C}
        .cl-mmlo-card-name{position:absolute;bottom:14px;left:18px;right:18px;z-index:3;font-weight:800;font-size:1.15rem;color:#fff;line-height:1.25}
        .cl-mmlo-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-mmlo-card-body p{font-size:.9rem;line-height:1.7;margin-bottom:16px;color:#5a6a8a}
        .cl-mmlo-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-mmlo-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-mmlo-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;color:#fff;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-mmlo-core .t{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;line-height:1.05;margin-bottom:12px}
        .cl-mmlo-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-mmlo-areas{margin-top:70px}
        .cl-mmlo-areas h3{text-align:center;font-size:1.5rem;font-weight:800;margin-bottom:36px;color:#001F4C}
        .cl-mmlo-tag-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:1000px;margin:0 auto}
        .cl-mmlo-tag{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .25s;cursor:default}
        .cl-mmlo-tag:hover{border-color:#DF5400;color:#DF5400;transform:translateY(-2px)}

        @media(max-width:1200px){.cl-mmlo-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){
          .cl-mmlo-split{grid-template-columns:1fr;gap:40px}
          .cl-mmlo-badge{left:0}
        }
        @media(max-width:640px){
          .cl-mmlo-sec{padding:70px 5%}
          .cl-mmlo-grid{grid-template-columns:1fr}
          .cl-mmlo-core{grid-column:span 1}
        }
      `}} />

      <section className="cl-mmlo-sec" id="overview">
        <div className="cl-mmlo-wrap">

          <div className="cl-mmlo-split">
            <div className="cl-mmlo-imgwrap">
              <div className="cl-mmlo-img">
                <img src="/courses/mca/content2.webp" alt="MCA AI ML students at Tulas" />
              </div>
              <div className="cl-mmlo-badge">
                <span className="big">MCA</span>
                <span className="lbl">AI &amp; Machine<br />Learning</span>
              </div>
            </div>
            <div>
              <div className="cl-mmlo-eyebrow"><span className="bar" />School of Computing &amp; AI</div>
              <h2 className="cl-mmlo-h2">Where Technology Meets<br /><em>Intelligent Innovation</em></h2>
              <p className="cl-mmlo-lead">The MCA in Artificial Intelligence &amp; Machine Learning at Tulas is built for students who want to engineer the intelligence behind tomorrow's technology.</p>
              <p className="cl-mmlo-body">The programme combines advanced computer science with deep AI specialisation — covering machine learning, deep learning, generative AI, natural language processing, computer vision, MLOps, and cloud AI architecture. Students build real AI systems through live projects, research publications, and industry internships, graduating as AI engineers ready to lead in any technology environment.</p>
              <blockquote className="cl-mmlo-quote">"The future belongs to those who can build intelligence into machines."</blockquote>
            </div>
          </div>

          <div className="cl-mmlo-head">
            <div className="cl-mmlo-eyebrow" style={{ justifyContent: 'center' }}><span className="bar" />Specialization Areas</div>
            <h2 className="cl-mmlo-h2">Five AI Specializations, One Powerful<br /><em>Technology Core</em></h2>
            <p>Each specialization is built on strong computer science and AI fundamentals, enhanced through research-driven, project-based learning across every semester.</p>
          </div>

          <div className="cl-mmlo-grid">
            {SPECS.map((s) => (
              <div className="cl-mmlo-card" key={s.name}>
                <div className="cl-mmlo-card-img">
                  {s.icon}
                  <span className="cl-mmlo-card-tag">{s.tag}</span>
                  <span className="cl-mmlo-card-name">{s.name}</span>
                </div>
                <div className="cl-mmlo-card-body">
                  <p>{s.desc}</p>
                  <div className="cl-mmlo-pills">
                    {s.pills.map((p) => <span className="cl-mmlo-pill" key={p}>{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-mmlo-core">
              <div className="t">Built on Computer<br />Science Foundations</div>
              <p>Algorithms · Data Structures · Software Engineering · AI · Research · Cloud</p>
            </div>
          </div>

          <div className="cl-mmlo-areas">
            <h3>Core Learning Areas</h3>
            <div className="cl-mmlo-tag-row">
              {CORE_AREAS.map((a) => <span className="cl-mmlo-tag" key={a}>{a}</span>)}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
