'use client';

const CLA = [
  'Financial Accounting','Corporate Law','Business Statistics','Banking & Insurance',
  'Income Tax','Cost Accounting','Business Economics','Auditing',
  'Financial Management','Entrepreneurship',
];

export default function BComHonsOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcomh-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-bcomh-ovw-wrap{max-width:1280px;margin:0 auto;}

        /* Split */
        .cl-bcomh-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-bcomh-ovw-visual{position:relative;height:460px;border-radius:20px;box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-bcomh-ovw-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:0;}
        .cl-bcomh-ovw-overlay{position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,rgba(0,31,76,.22) 0%,rgba(0,21,46,.68) 100%);z-index:1;}
        .cl-bcomh-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:5rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:2;}
        .cl-bcomh-ovw-mark{text-align:center;color:#fff;z-index:2;position:relative;}
        .cl-bcomh-ovw-mark-big{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#FFF3D7;line-height:1;}
        .cl-bcomh-ovw-mark-small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;}
        .cl-bcomh-ovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3;}
        .cl-bcomh-ovw-badge-yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-bcomh-ovw-badge-lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}
        .cl-bcomh-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcomh-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcomh-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-bcomh-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcomh-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-bcomh-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-bcomh-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        /* Eligibility table */
        .cl-bcomh-ovw-elig{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed;}
        .cl-bcomh-ovw-elig table{width:100%;border-collapse:collapse;}
        .cl-bcomh-ovw-elig th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;}
        .cl-bcomh-ovw-elig td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;}
        .cl-bcomh-ovw-elig td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        /* Path section */
        .cl-bcomh-ovw-path-head{text-align:center;max-width:880px;margin:0 auto 50px;}
        .cl-bcomh-ovw-path-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcomh-ovw-path-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcomh-ovw-path-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:18px;}
        .cl-bcomh-ovw-path-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcomh-ovw-path-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bcomh-ovw-path-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:70px;}
        .cl-bcomh-ovw-path-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);border:2px solid transparent;}
        .cl-bcomh-ovw-path-card.current{border-color:#DF5400;}
        .cl-bcomh-ovw-path-vis{position:relative;padding:22px;min-height:130px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-bcomh-ovw-path-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-bcomh-ovw-path-title{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#fff;line-height:1.1;letter-spacing:.02em;}
        .cl-bcomh-ovw-path-body{padding:24px;flex:1;display:flex;flex-direction:column;gap:14px;}
        .cl-bcomh-ovw-path-body p{font-size:.92rem;line-height:1.75;color:#5a6a8a;}
        .cl-bcomh-ovw-path-pills{display:flex;flex-wrap:wrap;gap:7px;margin-top:auto;}
        .cl-bcomh-ovw-path-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        /* CLA */
        .cl-bcomh-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:0 0 36px;}
        .cl-bcomh-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-bcomh-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-bcomh-ovw-split{grid-template-columns:1fr}.cl-bcomh-ovw-path-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bcomh-ovw-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bcomh-ovw-sec" id="overview">
        <div className="cl-bcomh-ovw-wrap">

          {/* Hero split */}
          <div className="cl-bcomh-ovw-split">
            <div className="cl-bcomh-ovw-visual">
              <img src="/courses/bba/business/mech.jpg" alt="B.Com (Hons.) Overview" className="cl-bcomh-ovw-img"/>
              <div className="cl-bcomh-ovw-overlay"/>
              <span className="cl-bcomh-ovw-glyph">BCOM</span>
             
              <div className="cl-bcomh-ovw-badge">
                <span className="cl-bcomh-ovw-badge-yr">3Y</span>
                <span className="cl-bcomh-ovw-badge-lbl">UGC<br/>Recognised</span>
              </div>
            </div>
            <div>
              <div className="cl-bcomh-ovw-eyebrow"><span className="bar"/>School of Management</div>
              <h2 className="cl-bcomh-ovw-h2">Where Commerce<br/><em>Meets Career</em></h2>
              <p className="cl-bcomh-ovw-lead">The Bachelor of Commerce (Hons.) programme at Tulas offers a comprehensive, well-rounded curriculum designed to prepare students for managerial roles across multiple sectors.</p>
              <p className="cl-bcomh-ovw-body">A specialised, three-year undergraduate degree, B.Com (Hons.) equips students with comprehensive knowledge and skills in accounting, commerce, banking, finance, and insurance — preparing them for a wide range of career paths in both the private and public sectors, and particularly advantageous for those aiming for professional certifications like Chartered Accountancy (CA) and Company Secretaryship (CS). The programme provides essential knowledge, practical skills, and diverse career opportunities, making it an ideal choice for those interested in business, finance, and commerce, and a strong starting point for further professional qualifications in accounting, finance, and corporate law.</p>
              <blockquote className="cl-bcomh-ovw-quote">"Comprehend and apply principles from every field of trade — building core competence in commerce, ethical business practice, and global business awareness."</blockquote>
            </div>
          </div>

          {/* Eligibility */}
          <div className="cl-bcomh-ovw-elig">
            <table>
              <thead>
                <tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="k">B.Com (Hons.)</td>
                  <td>3 Years</td>
                  <td>Passed XII or equivalent in any discipline from a recognised Board/Council/University, with at least 45% marks (40% for SC/ST category).</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Path comparison */}
          <div className="cl-bcomh-ovw-path-head">
            <div className="cl-bcomh-ovw-path-eyebrow"><span className="bar"/>Choose Your Path</div>
            <h2 className="cl-bcomh-ovw-path-h2">Two Ways To<br/><em>Study Commerce</em></h2>
            <p className="cl-bcomh-ovw-path-sub">Both pathways build a strong commerce foundation — choose the depth of specialisation that fits your goals.</p>
          </div>
          <div className="cl-bcomh-ovw-path-grid">
            <div className="cl-bcomh-ovw-path-card current">
              <div className="cl-bcomh-ovw-path-vis">
                <span className="cl-bcomh-ovw-path-tag">Current Page · Honours</span>
                <span className="cl-bcomh-ovw-path-title">B.Com (Hons.)</span>
              </div>
              <div className="cl-bcomh-ovw-path-body">
                <p>A specialised, in-depth three-year degree with a research component and greater focus on accounting, finance, and analytical rigour — the stronger foundation for CA, CS, and postgraduate study.</p>
                <div className="cl-bcomh-ovw-path-pills">
                  <span className="cl-bcomh-ovw-path-pill">Research Component</span>
                  <span className="cl-bcomh-ovw-path-pill">CA/CS Foundation</span>
                  <span className="cl-bcomh-ovw-path-pill">Advanced Accounting</span>
                </div>
              </div>
            </div>
            <div className="cl-bcomh-ovw-path-card">
              <div className="cl-bcomh-ovw-path-vis">
                <span className="cl-bcomh-ovw-path-tag">General</span>
                <span className="cl-bcomh-ovw-path-title">B.Com</span>
              </div>
              <div className="cl-bcomh-ovw-path-body">
                <p>A broad-based three-year commerce degree covering accounting, business law, taxation, and finance — ideal for students seeking wide-ranging commerce fundamentals and flexibility across career paths.</p>
                <div className="cl-bcomh-ovw-path-pills">
                  <span className="cl-bcomh-ovw-path-pill">Broad-Based</span>
                  <span className="cl-bcomh-ovw-path-pill">Core Commerce</span>
                  <span className="cl-bcomh-ovw-path-pill">Flexible Careers</span>
                </div>
              </div>
            </div>
          </div>

          {/* CLA */}
          <div className="cl-bcomh-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-bcomh-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-bcomh-ovw-cla-chip">{c}</span>)}
          </div>

        </div>
      </section>
    </>
  );
}
