'use client';

const SEMESTERS = [
  {
    title: 'Semester I — Learning to Code',
    sub: 'Python, computer basics, web pages, mathematics, intro to AI',
    credits: '22 Credits',
    rows: [
      { type: 'Core', subject: 'Programming Fundamentals with Python', cr: 4 },
      { type: 'Core', subject: 'Computer Fundamentals & Digital Literacy', cr: 4 },
      { type: 'Core', subject: 'Mathematics for Computing', cr: 4 },
      { type: 'Core', subject: 'Web Development Basics — I', cr: 4 },
      { type: 'SEC',  subject: 'Digital Skills', cr: 2 },
      { type: 'SEC',  subject: 'Life Skills & Digital Citizenship for Developers (NEP 2020)', cr: 2 },
      { type: 'VAC',  subject: 'Introduction to Artificial Intelligence', cr: 2 },
    ],
  },
  {
    title: 'Semester II — Data, Databases & First Live Webpage',
    sub: 'Data structures, SQL, OS, JavaScript, first deployed project',
    credits: '20 Credits',
    rows: [
      { type: 'Core', subject: 'Data Structures', cr: 4 },
      { type: 'Core', subject: 'Database Management & SQL', cr: 4 },
      { type: 'Core', subject: 'Operating Systems & Linux Basics', cr: 4 },
      { type: 'Core', subject: 'JavaScript Basics', cr: 4 },
      { type: 'SEC',  subject: 'Web Development Basics — II', cr: 2 },
      { type: 'EL',   subject: 'First Live Deployment — Personal Portfolio Website', cr: 2 },
    ],
  },
  {
    title: 'Semester III — OOP, Cloud & Freelancing',
    sub: 'OOP with Java, networking, cloud, project management, freelancing',
    credits: '22 Credits',
    rows: [
      { type: 'Core', subject: 'Object-Oriented Programming with Java', cr: 4 },
      { type: 'Core', subject: 'Computer Networks & Web Protocols', cr: 4 },
      { type: 'Core', subject: 'Cloud Computing Basics', cr: 4 },
      { type: 'Core', subject: 'Software Project Management', cr: 4 },
      { type: 'SEC',  subject: 'Freelancing Fundamentals', cr: 2 },
      { type: 'EL',   subject: 'Mini Project — Full Stack Web Application', cr: 4 },
    ],
  },
  {
    title: 'Semester IV — Machine Learning Basics, React & Specialisation Begins',
    sub: 'ML fundamentals, React, database for apps, Minor I',
    credits: '20 Credits',
    rows: [
      { type: 'Core',  subject: 'Machine Learning Fundamentals', cr: 4 },
      { type: 'Core',  subject: 'Web Application Development — React', cr: 4 },
      { type: 'Core',  subject: 'Database for Applications', cr: 4 },
      { type: 'Minor', subject: 'Minor Specialisation – I (selected track)', cr: 4 },
      { type: 'EL',    subject: 'Project – I: Deployed Web Application', cr: 4 },
    ],
  },
  {
    title: 'Semester V — AI in Applications & Industry Project',
    sub: 'AI tools for developers, backend, ethics, Minor II',
    credits: '20 Credits',
    rows: [
      { type: 'Core',  subject: 'AI Tools for Developers', cr: 4 },
      { type: 'Core',  subject: 'Backend Development', cr: 4 },
      { type: 'Core',  subject: 'Ethics, Privacy & Responsible AI', cr: 4 },
      { type: 'Minor', subject: 'Minor Specialisation – II (selected track — advanced)', cr: 4 },
      { type: 'EL',    subject: 'Industry Project', cr: 4 },
    ],
  },
  {
    title: 'Semester VI — AI Product Development & Graduation',
    sub: 'Complete AI-powered application, Minor III, career readiness',
    credits: '18 Credits',
    rows: [
      { type: 'Core',  subject: 'AI Product Development', cr: 4 },
      { type: 'Minor', subject: 'Minor Specialisation – III (selected track — capstone)', cr: 4 },
      { type: 'SEC',   subject: 'Career Readiness', cr: 2 },
      { type: 'SEC',   subject: 'Digital Portfolio & Professional Presence', cr: 2 },
      { type: 'EL',    subject: 'Internship / Capstone Project', cr: 6 },
    ],
  },
];

const ABC_ROWS = [
  { level: 'Level 5', exit: 'UG Certificate',  sem: 'End of Semester II',  outcome: 'Credits deposited in UGC ABC (abc.gov.in). Valid 7 years. Re-entry permitted.' },
  { level: 'Level 6', exit: 'UG Diploma',      sem: 'End of Semester IV',  outcome: 'Credits deposited in UGC ABC (abc.gov.in). Valid 7 years. Re-entry permitted.' },
  { level: 'Level 7', exit: 'BCA Degree',       sem: 'End of Semester VI',  outcome: 'Full degree. UGC ABC credits locked in.' },
];

export default function BCAICurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaicur-sec{padding:110px 7%;background:#fff}
        .cl-bcaicur-wrap{max-width:1280px;margin:0 auto}

        .cl-bcaicur-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcaicur-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcaicur-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcaicur-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcaicur-h2 em{font-style:normal;color:#DF5400}
        .cl-bcaicur-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcaicur-sem{margin-bottom:26px;border-radius:16px;border:1px solid #e0e4ed;overflow:hidden}
        .cl-bcaicur-sem-head{background:#001F4C;color:#fff;padding:18px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
        .cl-bcaicur-sem-head .t{font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.02em}
        .cl-bcaicur-sem-head .s{font-size:.82rem;color:rgba(255,255,255,.75)}
        .cl-bcaicur-sem-head .cr{background:#DF5400;padding:5px 14px;border-radius:20px;font-size:.78rem;font-weight:800}
        table.cl-bcaicur-tbl{width:100%;border-collapse:collapse}
        table.cl-bcaicur-tbl th{text-align:left;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:12px 24px;background:#f8f9fc;border-bottom:1px solid #e0e4ed}
        table.cl-bcaicur-tbl td{padding:12px 24px;font-size:.88rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed}
        table.cl-bcaicur-tbl tr:last-child td{border-bottom:none}
        table.cl-bcaicur-tbl td.type{font-weight:800;color:#DF5400;font-size:.74rem;text-transform:uppercase;white-space:nowrap}
        table.cl-bcaicur-tbl td.credit{text-align:right;font-weight:800;color:#001F4C;white-space:nowrap}

        .cl-bcaicur-abc-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin:60px 0 28px}
        table.cl-bcaicur-abc{width:100%;border-collapse:collapse}
        table.cl-bcaicur-abc th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed}
        table.cl-bcaicur-abc td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        table.cl-bcaicur-abc td.k{font-weight:800;color:#001F4C;white-space:nowrap}

        @media(max-width:640px){
          .cl-bcaicur-sec{padding:70px 5%}
          table.cl-bcaicur-tbl td,table.cl-bcaicur-tbl th{padding:10px 14px}
        }
      `}} />

      <section className="cl-bcaicur-sec" id="curriculum">
        <div className="cl-bcaicur-wrap">

          <div className="cl-bcaicur-head">
            <div className="cl-bcaicur-eyebrow"><span className="bar" />122 Credits · 6 Semesters</div>
            <h2 className="cl-bcaicur-h2">The Full<br /><em>Curriculum</em></h2>
            <p className="cl-bcaicur-desc">
              Credits follow the AICTE LTPE format; deployed projects and internships (EL) are credited separately every year.
            </p>
          </div>

          {SEMESTERS.map((sem, si) => (
            <div className="cl-bcaicur-sem" key={si}>
              <div className="cl-bcaicur-sem-head">
                <span className="t">{sem.title}</span>
                <span className="s">{sem.sub}</span>
                <span className="cr">{sem.credits}</span>
              </div>
              <table className="cl-bcaicur-tbl">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Subject</th>
                    <th style={{ textAlign: 'right' }}>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {sem.rows.map((r, ri) => (
                    <tr key={ri}>
                      <td className="type">{r.type}</td>
                      <td>{r.subject}</td>
                      <td className="credit">{r.cr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <div className="cl-bcaicur-abc-title">NEP 2020 — ABC Exit Points</div>
          <table className="cl-bcaicur-abc">
            <thead>
              <tr><th>Level</th><th>Exit Point</th><th>Semester</th><th>Outcome</th></tr>
            </thead>
            <tbody>
              {ABC_ROWS.map(r => (
                <tr key={r.level}>
                  <td className="k">{r.level}</td>
                  <td className="k">{r.exit}</td>
                  <td>{r.sem}</td>
                  <td>{r.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </section>
    </>
  );
}
