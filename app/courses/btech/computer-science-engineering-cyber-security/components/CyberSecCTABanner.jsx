'use client';

export default function CyberSecCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cyb-sec{position:relative;overflow:hidden;padding:90px 7%;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 55%,#DF5400 150%)}
        .cl-cyb-sec::before{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px}
        .cl-cyb-inner{position:relative;z-index:2;max-width:760px;margin:0 auto}
        .cl-cyb-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4.5vw,4rem);color:#fff;line-height:.95;margin-bottom:18px}
        .cl-cyb-h2 em{font-style:normal;color:#FFF3D7}
        .cl-cyb-p{color:rgba(255,255,255,.9);font-size:1.05rem;line-height:1.8;margin-bottom:30px}
        .cl-cyb-actions{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-cyb-btn-primary{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .3s;text-decoration:none}
        .cl-cyb-btn-primary:hover{transform:translateY(-2px)}
        .cl-cyb-btn-ghost{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:background .3s;text-decoration:none}
        .cl-cyb-btn-ghost:hover{background:rgba(255,255,255,.12)}
        @media(max-width:640px){
          .cl-cyb-actions{flex-direction:column;align-items:center}
        }
      `}} />

      <section className="cl-cyb-sec">
        <div className="cl-cyb-inner">
          <h2 className="cl-cyb-h2">
            Ready To Defend<br /><em>The Digital World?</em>
          </h2>
          <p className="cl-cyb-p">
            Join the B.Tech Cyber Security program at Tulas, Dehradun and build the skills that keep organizations safe. Admissions open for Session 2026-27.
          </p>
          <div className="cl-cyb-actions">
            <a className="cl-cyb-btn-primary" href="https://tulas.edu.in/apply-now/">Apply Now →</a>
            <a className="cl-cyb-btn-ghost" href="https://tulas.edu.in/contact/">Talk To Admissions</a>
          </div>
        </div>
      </section>
    </>
  );
}
