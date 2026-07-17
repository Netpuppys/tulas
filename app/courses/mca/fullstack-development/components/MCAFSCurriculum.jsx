'use client';

const SEMS = [
  {
    title:'Semester I',
    sections:[
      { sub:'Core Subjects', rows:[
        { code:'MCA 101', subject:'Operating Systems & Shell Programming' },
        { code:'MCA 102', subject:'OOPs using Java' },
        { code:'MCA 103', subject:'Software Engineering & Project Management' },
        { code:'MCA 104', subject:'Python Programming' },
        { code:'MCA 105', subject:'Mathematical Foundation for Computer Applications' },
        { code:'MCA 106', subject:'Communication Skills' },
        { code:'MCA 107', subject:'Indian Knowledge System / Constitution of India / Universal Human Values / EVS' },
      ]},
      { sub:'Practicals', rows:[
        { code:'MCAP101', subject:'Operating Systems & Shell Programming' },
        { code:'MCAP102', subject:'OOPs using Java' },
        { code:'MCAP103', subject:'Python Programming' },
        { code:'MCAP104', subject:'Communication Skills' },
      ]},
      { sub:'Bridge Course (Non-CS Background)', rows:[
        { code:'BRI101', subject:'Introduction of Information Technology' },
        { code:'BRI102', subject:"Programming Fundamentals With 'C'" },
        { code:'BRI103', subject:'Fundamental of Web Technology' },
      ]},
    ],
  },
  {
    title:'Semester II',
    sections:[
      { sub:'Core Subjects', rows:[
        { code:'MCA201', subject:'Data Structure & Algorithm Design' },
        { code:'MCA202', subject:'Computer Networks' },
        { code:'MCA203', subject:'Database Management System' },
        { code:'MCA204', subject:'Computer Organization & Architecture' },
        { code:'MCA205', subject:'Program Elective – I' },
        { code:'MCA206', subject:'Soft Skills Essential' },
      ]},
      { sub:'Practicals', rows:[
        { code:'MCAP201', subject:'Data Structure & Algorithm Design' },
        { code:'MCAP202', subject:'Computer Networks' },
        { code:'PROJ201', subject:'Mini Project 1' },
        { code:'MCAP204', subject:'Database Management System' },
      ]},
    ],
  },
  {
    title:'Semester III',
    sections:[
      { sub:'Core Subjects', rows:[
        { code:'MCA301', subject:'Web Technologies' },
        { code:'MCA302', subject:'Network Security' },
        { code:'MCA303', subject:'Artificial Intelligence' },
        { code:'MCA304', subject:'Program Elective – II' },
        { code:'MCA305', subject:'Program Elective – III' },
        { code:'MCA306', subject:'Soft Skills for Employability' },
        { code:'MCA307', subject:'Seminar / Research Methodology' },
      ]},
      { sub:'Practicals', rows:[
        { code:'MCAP301', subject:'Web Technologies' },
        { code:'MCAP302', subject:'Program Elective – II' },
        { code:'PROJ301', subject:'Mini Project 2' },
      ]},
    ],
  },
  {
    title:'Semester IV',
    sections:[
      { sub:'Core Subjects', rows:[
        { code:'MCA401', subject:'Software Quality Assurance & Testing (SQAT)' },
        { code:'MCA402', subject:'Program Elective – IV' },
        { code:'MCA403', subject:'Program Elective – V' },
        { code:'MCA404', subject:'Innovation and Entrepreneurship (IPR)' },
      ]},
      { sub:'Practicals', rows:[
        { code:'MCAP405', subject:'Program Elective – V' },
        { code:'PROJ401', subject:'Major Project' },
      ]},
    ],
  },
];

const ELECTIVES = [
  { slot:'MCA205 (Elective I)',  options:'Web Development Basics (HTML/CSS/JS) / Introduction to Cloud Computing / Blockchain Technology / Version Control using Git/GitHub' },
  { slot:'MCA304 (Elective II)', options:'UI/UX Design Principles / Backend Development using Node.js & Express / Advanced Database Systems (MongoDB / SQL Optimization) / PHP with Laravel/CodeIgniter' },
  { slot:'MCA305 (Elective III)',options:'Advanced Full Stack Architecture / Cloud Computing & Deployment / Internet of Things / Cyber Security for Web Applications' },
  { slot:'MCA402 (Elective IV)', options:'Entrepreneurship & Startup Development / System Design for Web Applications / Quantum Computing / Web Security & Ethical Hacking for Developers' },
  { slot:'MCA403 (Elective V)',  options:'Performance Engineering & Scalability Optimization / AI Integration in Full Stack Applications / Web Services / Mobile-First Full Stack Development' },
];

export default function MCAFSCurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcafscu-sec{padding:110px 7%;background:#fff;}
        .cl-mcafscu-wrap{max-width:1280px;margin:0 auto;}

        .cl-mcafscu-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-mcafscu-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mcafscu-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mcafscu-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mcafscu-h2 em{font-style:normal;color:#DF5400;}
        .cl-mcafscu-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mcafscu-sem{margin-bottom:26px;border-radius:16px;border:1px solid #e0e4ed;overflow:hidden;}
        .cl-mcafscu-sem-head{background:#001F4C;color:#fff;padding:16px 24px;}
        .cl-mcafscu-sem-head .t{font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.02em;}
        .cl-mcafscu-subsec{background:#f8f9fc;padding:8px 24px;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#DF5400;border-bottom:1px solid #e0e4ed;}
        .cl-mcafscu-tbl{width:100%;border-collapse:collapse;}
        .cl-mcafscu-tbl th{text-align:left;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 24px;background:#f8f9fc;border-bottom:1px solid #e0e4ed;}
        .cl-mcafscu-tbl td{padding:10px 24px;font-size:.87rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;}
        .cl-mcafscu-tbl tr:last-child td{border-bottom:none;}
        .cl-mcafscu-tbl td.code{font-weight:800;color:#001F4C;white-space:nowrap;width:140px;}

        .cl-mcafscu-elec-title{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#001F4C;margin:60px 0 28px;}
        .cl-mcafscu-elec-tbl{width:100%;border-collapse:collapse;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,31,76,.07);}
        .cl-mcafscu-elec-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:14px 20px;background:#f8f9fc;border-bottom:2px solid #e0e4ed;}
        .cl-mcafscu-elec-tbl td{padding:16px 20px;font-size:.88rem;line-height:1.7;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-mcafscu-elec-tbl tr:last-child td{border-bottom:none;}
        .cl-mcafscu-elec-tbl td.slot{font-weight:800;color:#001F4C;white-space:nowrap;width:200px;}

        @media(max-width:640px){.cl-mcafscu-sec{padding:70px 5%}.cl-mcafscu-tbl td,.cl-mcafscu-tbl th{padding:10px 14px;}.cl-mcafscu-elec-tbl td.slot{white-space:normal;}}
      `}}/>
      <section className="cl-mcafscu-sec" id="curriculum">
        <div className="cl-mcafscu-wrap">
          <div className="cl-mcafscu-head">
            <div className="cl-mcafscu-eyebrow"><span className="bar"/>4 Semesters</div>
            <h2 className="cl-mcafscu-h2">The Full<br/><em>Curriculum</em></h2>
            <p className="cl-mcafscu-sub">Core computing subjects run through all four semesters, with five program-elective slots offering real specialisation choice.</p>
          </div>

          {SEMS.map((sem,si)=>(
            <div key={si} className="cl-mcafscu-sem">
              <div className="cl-mcafscu-sem-head"><span className="t">{sem.title}</span></div>
              {sem.sections.map((sec,xi)=>(
                <div key={xi}>
                  <div className="cl-mcafscu-subsec">{sec.sub}</div>
                  <table className="cl-mcafscu-tbl">
                    <thead><tr><th style={{width:'140px'}}>Code</th><th>Subject</th></tr></thead>
                    <tbody>
                      {sec.rows.map((r,ri)=>(
                        <tr key={ri}><td className="code">{r.code}</td><td>{r.subject}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          ))}

          <div className="cl-mcafscu-elec-title">Program Elective Tracks</div>
          <table className="cl-mcafscu-elec-tbl">
            <thead><tr><th>Elective Slot</th><th>Track Options</th></tr></thead>
            <tbody>
              {ELECTIVES.map((e,i)=>(
                <tr key={i}><td className="slot">{e.slot}</td><td>{e.options}</td></tr>
              ))}
            </tbody>
          </table>

        </div>
      </section>
    </>
  );
}
