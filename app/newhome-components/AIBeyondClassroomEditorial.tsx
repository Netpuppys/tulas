import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

type Row = {
  icon: string;
  title: string;
  body: string;
  tags?: string[];
  pills?: string[];
  logos?: string[];
  avatars?: string[];
};

const rows: Row[] = [
  {
    icon: "🤖",
    title: "AI-Integrated Curriculum",
    body: "Learn AI concepts within your own degree — through practical applications, coding assignments, and interdisciplinary projects — regardless of which programme you're enrolled in.",
  },
  {
    icon: "💻",
    title: "AI & Innovation Labs",
    body: "Experiment hands-on with machine learning, robotics, IoT, cloud computing, and data science using industry-grade lab infrastructure.",
    tags: ["AI Lab", "Robotics Lab", "Data Analytics Lab", "Computer Labs", "Maker Space"],
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

export default function AIBeyondClassroomEditorial() {
  return (
    <section className={`ai-editorial ${montserrat.variable}`} aria-labelledby="ai-editorial-heading">
      <div className="wrap">
        <div className="top">
          <div className="top-left">
            <div className="eyebrow">
              <span className="bar" />
              AI at Tulas Institute
            </div>
            <h2 id="ai-editorial-heading">
              Experience AI beyond <em>the classroom</em>
            </h2>
          </div>
          <div className="top-right">
            <p>
              At Tulas Institute, artificial intelligence isn&apos;t confined to a single course — it&apos;s built
              into how every student learns, builds, collaborates, and innovates. AI skills grow alongside the
              degree itself, not apart from it.
            </p>
          </div>
        </div>

        <div className="rows">
          {rows.map((row, i) => (
            <div className="row" key={row.title}>
              <div className="row-marker">
                <span className="row-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="row-icon" aria-hidden="true">
                  {row.icon}
                </span>
              </div>

              <div className="row-content">
                <h3>{row.title}</h3>

                {row.avatars && (
                  <div className="avatar-row">
                    {row.avatars.map((a, idx) => (
                      <span className="avatar" key={`${a}-${idx}`}>
                        {a}
                      </span>
                    ))}
                  </div>
                )}

                <p>{row.body}</p>

                {row.tags && (
                  <div className="chip-row">
                    {row.tags.map((tag) => (
                      <span className="chip chip-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {row.pills && (
                  <div className="chip-row">
                    {row.pills.map((pill) => (
                      <span className="chip chip-pill" key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                )}

                {row.logos && (
                  <div className="chip-row">
                    {row.logos.map((logo) => (
                      <span className="chip chip-logo" key={logo}>
                        {logo}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cta">
          <div className="cta-text">
            <h3>Ready to build the future?</h3>
            <p>Join an institution where AI becomes a skill you practise every day.</p>
          </div>
          <div className="cta-actions">
            <a className="btn solid" href="#apply" style={{ color: "#ffffff" }}>
              Apply Now <span aria-hidden="true">→</span>
            </a>
            <a className="btn outline" href="#campus-visit">
              Book a Campus Visit
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai-editorial {
          --navy: #001f4c;
          --orange: #df5400;
          --orange-deep: #c44900;
          --ink-soft: #5a6a8a;
          --border: #e3e6ee;
          --bg-soft: #f8f9fc;
          display: block;
          font-family: var(--font-montserrat), sans-serif;
          color: var(--navy);
          background: #ffffff;
          padding: 56px 6%;
        }
        @media (max-width: 640px) {
          .ai-editorial {
            padding: 36px 5%;
          }
        }
        .ai-editorial :global(*) {
          box-sizing: border-box;
        }
        .ai-editorial h2,
        .ai-editorial h3 {
          font-family: var(--font-montserrat), sans-serif;
          letter-spacing: -0.01em;
          font-weight: 800;
          margin: 0;
          color: var(--navy) !important;
        }
        .ai-editorial em {
          font-style: normal;
          color: var(--orange) !important;
        }
        .ai-editorial a {
          text-decoration: none;
        }
        .ai-editorial p {
          margin: 0;
          color: var(--ink-soft) !important;
        }

        .wrap {
          max-width: 1100px;
          margin: 0 auto;
        }

        .top {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: end;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 8px;
        }
        @media (max-width: 780px) {
          .top {
            grid-template-columns: 1fr;
            gap: 16px;
            align-items: start;
          }
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--orange) !important;
          margin-bottom: 14px;
        }
        .eyebrow .bar {
          display: block;
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: var(--orange);
        }
        .top-left h2 {
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          line-height: 1.15;
        }
        .top-right p {
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .rows {
          display: flex;
          flex-direction: column;
        }
        .row {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
          transition: background 0.2s ease;
        }
        .row:hover {
          background: var(--bg-soft);
        }
        @media (max-width: 640px) {
          .row {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 20px 0;
          }
        }

        .row-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        @media (max-width: 640px) {
          .row-marker {
            flex-direction: row;
            justify-content: flex-start;
            gap: 12px;
          }
        }
        .row-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--orange) !important;
          letter-spacing: 0.05em;
        }
        .row-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--bg-soft);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .row-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .row-content h3 {
          font-size: 1.15rem;
        }
        .row-content p {
          font-size: 0.88rem;
          line-height: 1.65;
        }

        .avatar-row {
          display: flex;
        }
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--orange) 0%, var(--orange-deep) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff !important;
          font-weight: 800;
          font-size: 0.66rem;
          margin-left: -8px;
          border: 2px solid #fff;
        }
        .avatar:first-child {
          margin-left: 0;
        }

        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 2px;
        }
        .chip {
          padding: 4px 11px;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .chip-tag {
          background: rgba(223, 84, 0, 0.08);
          border: 1px solid rgba(223, 84, 0, 0.2);
          color: var(--orange-deep) !important;
        }
        .chip-pill {
          background: var(--bg-soft);
          border: 1px solid var(--border);
          color: var(--navy) !important;
          font-weight: 600;
        }
        .chip-logo {
          background: #ffffff;
          border: 1px solid var(--border);
          color: var(--navy) !important;
          font-weight: 800;
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
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.84rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn.solid {
          background: var(--orange);
          box-shadow: 0 4px 14px rgba(223, 84, 0, 0.35);
        }
        .btn.outline {
          background: transparent;
          border: 2px solid var(--navy);
          color: var(--navy) !important;
        }
        @media (max-width: 560px) {
          .cta {
            flex-direction: column;
            align-items: flex-start;
          }
          .cta-actions {
            width: 100%;
          }
          .btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
