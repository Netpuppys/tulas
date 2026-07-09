import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

type Card = {
  icon: string;
  title: string;
  body: string;
  tags?: string[];
  pills?: string[];
  logos?: string[];
  avatars?: string[];
};

const cards: Card[] = [
  {
    icon: "🤖",
    title: "AI-Integrated Curriculum",
    body: "Learn AI concepts within your own degree — through practical applications, coding assignments, and interdisciplinary projects — regardless of which programme you're enrolled in.",
  },
  {
    icon: "💻",
    title: "AI & Innovation Labs",
    tags: ["AI Lab", "Robotics Lab", "Data Analytics Lab", "Computer Labs", "Maker Space"],
    body: "Experiment hands-on with machine learning, robotics, IoT, cloud computing, and data science using industry-grade lab infrastructure.",
  },
  {
    icon: "🛠️",
    title: "Industry Projects",
    body: "Graduate with a portfolio of real-world builds — not just a marksheet.",
    pills: [
      "Smart Attendance System",
      "AI Chatbot",
      "Crop Disease Detection",
      "Traffic Monitoring",
      "Fake News Detection",
      "Legal Research AI",
      "Healthcare AI",
    ],
  },
  {
    icon: "☁️",
    title: "Industry Certifications",
    body: "Earn globally recognised certifications alongside your degree, so you stay industry-ready from day one.",
    logos: ["AWS", "Microsoft", "Google", "Cisco", "Oracle", "IBM", "NVIDIA"],
  },
  {
    icon: "👨‍🏫",
    title: "Learn From Experts",
    body: "Learn from experienced faculty and invited industry mentors, with monthly masterclasses that connect classroom learning to current industry practice.",
    avatars: ["F1", "F2", "F3", "+"],
  },
  {
    icon: "🚀",
    title: "Innovation & Startups",
    body: "Build your own startup, access mentoring, participate in hackathons, and pitch your ideas — then prototype, refine, and commercialise your innovations using the same tools the industry runs on.",
    logos: [
      "ChatGPT",
      "GitHub Copilot",
      "Google Gemini",
      "Claude",
      "Microsoft Azure AI",
      "AWS",
      "TensorFlow",
      "Power BI",
      "Tableau",
      "MATLAB",
    ],
  },
];

export default function AIBeyondClassroom() {
  return (
    <section
      className={`ai-showcase pad ${montserrat.variable}`}
      aria-labelledby="ai-showcase-heading"
    >
      <div className="head">
        <div className="eyebrow">
          <span className="bar" />
          AI at Tulas Institute
        </div>
        <h2 id="ai-showcase-heading">
          Experience AI
          <br />
          <em>Beyond the Classroom</em>
        </h2>
        <p>
          At Tulas Institute, artificial intelligence isn&apos;t confined to a single course — it&apos;s built into
          how every student learns, builds, collaborates, and innovates. Across programmes, students get hands-on
          exposure to AI and emerging technologies through industry projects, modern labs, and real-world problem
          solving, so AI skills grow alongside the degree itself, not apart from it.
        </p>
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.title}>
            <div className="card-visual">
              <span className="icon-badge" aria-hidden="true">
                {card.icon}
              </span>
              <span className="title">{card.title}</span>
            </div>

            <div className="card-body">
              <div className="card-body-inner">
                {card.avatars && (
                  <div className="avatar-row">
                    {card.avatars.map((a, i) => (
                      <span className="avatar" key={`${a}-${i}`}>
                        {a}
                      </span>
                    ))}
                  </div>
                )}

                <p>{card.body}</p>

                {card.tags && (
                  <div className="tag-row">
                    {card.tags.map((tag) => (
                      <span className="tag-chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {card.pills && (
                  <div className="pill-row">
                    {card.pills.map((pill) => (
                      <span className="pill" key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                )}

                {card.logos && (
                  <div className="logo-row">
                    {card.logos.map((logo) => (
                      <span className="logo-chip" key={logo}>
                        {logo}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
{/* 
      <div className="cta-banner">
        <h3>Ready to build the future?</h3>
        <p>Join an institution where AI becomes a skill you practise every day — not just a buzzword on a brochure.</p>
        <div className="cta-row">
          <a className="btn solid" href="#apply" style={{ color: "#ffffff" }}>
            Apply Now <span aria-hidden="true">→</span>
          </a>
          <a className="btn outline" href="#campus-visit" style={{ color: "#ffffff" }}>
            Book a Campus Visit
          </a>
        </div>
      </div> */}

              <div className="cta">
          <div className="cta-text">
            <h3>Ready to build the future?</h3>
            <p>Join an institution where AI becomes a skill you practise every day.</p>
          </div>
          <div className="cta-actions">
            <a className="btn solid" href="/apply-now" style={{ color: "#ffffff" }}>
              Apply Now <span aria-hidden="true">→</span>
            </a>
            <a className="btn solid" href="/contact">
              Book a Campus Visit
            </a>
          </div>
        </div>

      <style jsx>{`
        .ai-showcase {
          --navy: #001f4c;
          --navy-deep: #00152e;
          --orange: #df5400;
          --orange-deep: #c44900;
          --ivory: #fff3d7;
          --ink-soft: #5a6a8a;
          --border: #e0e4ed;
          --bg-soft: #f8f9fc;
          display: block;
          font-family: var(--font-montserrat), sans-serif;
          color: var(--navy);
          background: var(--bg-soft);
          line-height: 1.4;
        }
        .ai-showcase :global(*) {
          box-sizing: border-box;
        }
        .ai-showcase h2,
        .ai-showcase h3 {
          font-family: var(--font-montserrat), sans-serif;
          letter-spacing: -0.01em;
          margin: 0;
          font-weight: 800;
        }
        .ai-showcase em {
          font-style: normal;
        }
        .ai-showcase a {
          text-decoration: none;
        }
        .ai-showcase.pad {
          padding: 56px 6%;
        }
        @media (max-width: 640px) {
          .ai-showcase.pad {
            padding: 36px 5%;
          }
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--orange) !important;
          margin-bottom: 12px;
          justify-content: center;
          width: 100%;
        }
        .eyebrow .bar {
          display: block;
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: var(--orange);
          flex-shrink: 0;
        }
        .head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 32px;
        }
        .head h2 {
          font-size: clamp(1.6rem, 2.8vw, 2.4rem);
          line-height: 1.15;
          margin-bottom: 10px;
          color: var(--navy) !important;
        }
        .head h2 em {
          color: var(--orange) !important;
        }
        .head p {
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--ink-soft) !important;
          margin: 0;
        }
        @media (max-width: 640px) {
          .head p {
            font-size: 0.86rem;
          }
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 980px) {
          .card-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .card-grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 28px rgba(0, 31, 76, 0.08);
          border: 1px solid rgba(0, 31, 76, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 31, 76, 0.14);
        }

        .card-visual {
          padding: 14px 18px;
          min-height: 64px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, var(--navy) 0%, var(--orange-deep) 130%);
        }
        .icon-badge {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          line-height: 1;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .title {
          color: #ffffff !important;
          font-weight: 800;
          font-size: 0.94rem;
          line-height: 1.25;
        }

        .card-body {
          position: relative;
          overflow: hidden;
          flex: 1;
          display: flex;
          padding: 18px;
        }
        .card-body::after {
          content: "";
          position: absolute;
          right: -30px;
          bottom: -30px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--bg-soft);
          z-index: 0;
        }
        .card-body-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: auto 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .card-body p {
          font-size: 0.82rem;
          line-height: 1.6;
          color: var(--ink-soft) !important;
          margin: 0;
        }
        .tag-row,
        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tag-chip {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(223, 84, 0, 0.08);
          border: 1px solid rgba(223, 84, 0, 0.2);
          color: var(--orange-deep) !important;
        }
        .pill {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          background: var(--bg-soft);
          border: 1px solid var(--border);
          color: var(--navy) !important;
        }
        .logo-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .logo-chip {
          padding: 5px 11px;
          border-radius: 7px;
          font-size: 0.72rem;
          font-weight: 800;
          background: var(--bg-soft);
          border: 1px solid var(--border);
          color: var(--navy) !important;
        }
        .avatar-row {
          display: flex;
          margin-bottom: 2px;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--orange) 0%, var(--orange-deep) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff !important;
          font-weight: 800;
          font-size: 0.7rem;
          margin-left: -9px;
          border: 2px solid #fff;
        }
        .avatar:first-child {
          margin-left: 0;
        }

        .cta-banner {
          margin-top: 32px;
          border-radius: 16px;
          padding: 32px 28px;
          text-align: center;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-deep) 100%);
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .cta-banner {
            padding: 26px 20px;
            margin-top: 24px;
          }
        }
        .cta-banner::after {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image: linear-gradient(
              0deg,
              transparent 24%,
              rgba(255, 255, 255, 0.1) 25%,
              rgba(255, 255, 255, 0.1) 26%,
              transparent 27%
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              rgba(255, 255, 255, 0.1) 25%,
              rgba(255, 255, 255, 0.1) 26%,
              transparent 27%
            );
          background-size: 60px 60px;
          pointer-events: none;
        }
        .cta-banner h3 {
          position: relative;
          font-size: clamp(1.4rem, 2.6vw, 1.9rem);
          color: var(--ivory) !important;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .cta-banner p {
          position: relative;
          max-width: 560px;
          margin: 0 auto 20px;
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85) !important;
        }
        @media (max-width: 640px) {
          .cta-banner p {
            font-size: 0.82rem;
          }
        }
        .cta-row {
          position: relative;
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 22px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.82rem;
          color: #ffffff !important;
          transition: transform 0.25s, box-shadow 0.25s;
          justify-content: center;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn.solid {
          background: var(--orange);
          box-shadow: 0 4px 16px rgba(223, 84, 0, 0.4);
        }
        .btn.solid:hover {
          box-shadow: 0 8px 22px rgba(223, 84, 0, 0.5);
        }
        .btn.outline {
          background: rgba(255, 255, 255, 0.06);
          border: 2px solid rgba(255, 255, 255, 0.45);
        }
        .btn.outline:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.7);
        }

          .cta {
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .cta-text h3 {
          font-size: clamp(1.3rem, 2.4vw, 1.7rem);
          margin-bottom: 6px;
        }
        .cta-text p {
          font-size: 0.88rem;
        }
        .cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
        .cta {
            flex-direction: column;
            align-items: flex-start;
          }
          .cta-actions {
            width: 100%;
          }
          .cta-row {
            flex-direction: column;
            align-items: stretch;
          }
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
