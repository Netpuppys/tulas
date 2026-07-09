'use client';

const STATS = [
  { num:'2-Year',    label:'MBA Programme' },
  { num:'92 Credits', label:'4 Semesters' },
  { num:'AI Tools',  label:'for Finance Professionals' },
  { num:'Multiple',  label:'Career Pathways' },
  { num:'2028',      label:'First Graduating Batch' },
];

export default function MBAFinHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbafinh-hero{position:relative;overflow:hidden;min-height:88vh;display:flex;align-items:center;justify-content:center;}
        .cl-mbafinh-bg{position:absolute;inset:0;z-index:0;}
        .cl-mbafinh-bg img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbafinh-zoom 20s ease-in-out infinite alternate;}
        @keyframes cl-mbafinh-zoom{from{transform:scale(1);}to{transform:scale(1.07);}}
        .cl-mbafinh-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.92) 0%,rgba(0,21,46,.78) 55%,rgba(196,73,0,.7) 100%);z-index:1;}
        .cl-mbafinh-grid{position:absolute;inset:0;z-index:2;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-mbafinh-inner{position:relative;z-index:3;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-mbafinh-breadcrumb{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.6);}
        .cl-mbafinh-breadcrumb .cur{color:#FFF3D7;}
        .cl-mbafinh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-mbafinh-h1{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(2.8rem,7vw,6.5rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-mbafinh-h1 em{font-style:normal;color:#FFF3D7;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-mbafinh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-mbafinh-strip{display:flex;flex-wrap:wrap;justify-content:center;gap:0;background:rgba(255,255,255,.1);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:28px 36px;margin:0 auto 34px;max-width:900px;}
        .cl-mbafinh-stat{flex:1;min-width:140px;text-align:center;padding:10px 20px;border-right:1px solid rgba(255,255,255,.18);}
        .cl-mbafinh-stat:last-child{border-right:none;}
        .cl-mbafinh-stat-num{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-mbafinh-stat-lbl{font-size:.72rem;font-weight:600;color:rgba(255,255,255,.7);letter-spacing:.06em;text-transform:uppercase;margin-top:4px;display:block;}
        .cl-mbafinh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-mbafinh-btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;border:none;cursor:pointer;transition:transform .25s,box-shadow .25s;text-decoration:none;}
        .cl-mbafinh-btn:hover{transform:translateY(-2px);}
        .cl-mbafinh-btn-solid{background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);}
        .cl-mbafinh-btn-outline{background:transparent;border:2px solid rgba(255,255,255,.5);}
        @media(max-width:640px){.cl-mbafinh-strip{padding:20px 14px;}.cl-mbafinh-stat{min-width:120px;}}
      `}}/>
      <section className="cl-mbafinh-hero">
        <div className="cl-mbafinh-bg">
          <img src="/graduate-school-of-business/bcom/specialdesktop1.png" alt="MBA Finance at Tulas Institute"/>
        </div>
        <div className="cl-mbafinh-overlay"/>
        <div className="cl-mbafinh-grid"/>
        <div className="cl-mbafinh-inner">
          <div className="cl-mbafinh-breadcrumb">
            Home / Programs / MBA / <span className="cur">Finance</span>
          </div>
          <div className="cl-mbafinh-badge">MBA · Finance · NEP 2020</div>
          <h1 className="cl-mbafinh-h1">Lead Capital With<br/><em>Financial Strategy</em></h1>
          <p className="cl-mbafinh-desc">Master the management core and applied corporate finance at Tulas Institute, Dehradun — and graduate job-ready with financial modelling skills, a live valuation project, and a capital-markets capstone.</p>
          <div className="cl-mbafinh-strip">
            {STATS.map((s,i)=>(
              <div key={i} className="cl-mbafinh-stat">
                <span className="cl-mbafinh-stat-num">{s.num}</span>
                <span className="cl-mbafinh-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="cl-mbafinh-btns">
            <a href="/apply-now" className="cl-mbafinh-btn cl-mbafinh-btn-solid">Apply Now →</a>
            <a href="/contact" className="cl-mbafinh-btn cl-mbafinh-btn-outline">Contact Admissions</a>
          </div>
        </div>
      </section>
    </>
  );
}
