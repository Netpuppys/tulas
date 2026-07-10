'use client';

const STATS = [
  { num:'2-Year',    label:'MBA Programme' },
  { num:'92 Credits', label:'4 Semesters' },
  { num:'AI Tools',  label:'for Global Business' },
  { num:'Multiple',  label:'Career Pathways' },
  // { num:'2028',      label:'First Graduating Batch' },
];

export default function MBAIBHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaibh-hero{position:relative;overflow:hidden;min-height:88vh;display:flex;align-items:center;justify-content:center;}
        .cl-mbaibh-bg{position:absolute;inset:0;z-index:0;}
        .cl-mbaibh-bg img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbaibh-zoom 20s ease-in-out infinite alternate;}
        @keyframes cl-mbaibh-zoom{from{transform:scale(1);}to{transform:scale(1.07);}}
        .cl-mbaibh-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.92) 0%,rgba(0,21,46,.78) 55%,rgba(196,73,0,.7) 100%);z-index:1;}
        .cl-mbaibh-grid{position:absolute;inset:0;z-index:2;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-mbaibh-inner{position:relative;z-index:3;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-mbaibh-breadcrumb{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.6);}
        .cl-mbaibh-breadcrumb .cur{color:#FFF3D7;}
        .cl-mbaibh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-mbaibh-h1{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(2.8rem,7vw,6.5rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-mbaibh-h1 em{font-style:normal;color:#FFF3D7;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-mbaibh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-mbaibh-strip{display:flex;flex-wrap:wrap;justify-content:center;gap:0;background:rgba(255,255,255,.1);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:28px 36px;margin:0 auto 34px;max-width:900px;}
        .cl-mbaibh-stat{flex:1;min-width:140px;text-align:center;padding:10px 20px;border-right:1px solid rgba(255,255,255,.18);}
        .cl-mbaibh-stat:last-child{border-right:none;}
        .cl-mbaibh-stat-num{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-mbaibh-stat-lbl{font-size:.72rem;font-weight:600;color:rgba(255,255,255,.7);letter-spacing:.06em;text-transform:uppercase;margin-top:4px;display:block;}
        .cl-mbaibh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-mbaibh-btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;border:none;cursor:pointer;transition:transform .25s,box-shadow .25s;text-decoration:none;}
        .cl-mbaibh-btn:hover{transform:translateY(-2px);}
        .cl-mbaibh-btn-solid{background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);}
        .cl-mbaibh-btn-outline{background:transparent;border:2px solid rgba(255,255,255,.5);}
        @media(max-width:640px){.cl-mbaibh-strip{padding:20px 14px;}.cl-mbaibh-stat{min-width:120px;}}
      `}}/>
      <section className="cl-mbaibh-hero">
        <div className="cl-mbaibh-bg">
          <img src="/courses/bjmc/bannerImg.png" alt="MBA International Business at Tulas Institute"/>
        </div>
        <div className="cl-mbaibh-overlay"/>
        <div className="cl-mbaibh-grid"/>
        <div className="cl-mbaibh-inner">
          <div className="cl-mbaibh-breadcrumb">
            Home / Programs / MBA / <span className="cur">International Business</span>
          </div>
          <div className="cl-mbaibh-badge">MBA · International Business · NEP 2020</div>
          <h1 className="cl-mbaibh-h1">Lead Markets Across<br/><em>Borders</em></h1>
          <p className="cl-mbaibh-desc">Master the management core and applied global trade strategy at Tulas Institute, Dehradun — and graduate job-ready with cross-border strategy skills, a live trade project, and a global leadership capstone.</p>
          <div className="cl-mbaibh-strip">
            {STATS.map((s,i)=>(
              <div key={i} className="cl-mbaibh-stat">
                <span className="cl-mbaibh-stat-num">{s.num}</span>
                <span className="cl-mbaibh-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="cl-mbaibh-btns">
            <a href="/apply-now" className="cl-mbaibh-btn cl-mbaibh-btn-solid">Apply Now →</a>
            <a href="/contact" className="cl-mbaibh-btn cl-mbaibh-btn-outline">Contact Admissions</a>
          </div>
        </div>
      </section>
    </>
  );
}
