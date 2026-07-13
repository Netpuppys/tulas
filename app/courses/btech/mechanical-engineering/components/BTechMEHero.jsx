'use client';
import Link from 'next/link';

const CHIPS = [
  { strong:'4-Year', rest:' B.Tech Programme' },
  { rest:'Specialisations: Robotics & Energy Engineering' },
  { rest:'Industry Certifications' },
  { rest:'Multiple Internships' },
  { rest:'Project-Based Learning' },
];

export default function BTechMEHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechmeh-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh}
        .cl-btechmeh-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
        .cl-btechmeh-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.82) 0%,rgba(0,21,46,.66) 55%,rgba(196,73,0,.72) 100%);z-index:1}
        .cl-btechmeh-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px}
        .cl-btechmeh-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%}
        .cl-btechmeh-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65)}
        .cl-btechmeh-bc .cur{color:#FFF3D7}
        .cl-btechmeh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px}
        .cl-btechmeh-h1{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px}
        .cl-btechmeh-h1 em{font-style:normal;color:#FFF3D7;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5))}
        .cl-btechmeh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92)}
        .cl-btechmeh-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px}
        .cl-btechmeh-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22)}
        .cl-btechmeh-chip strong{color:#FFF3D7;font-weight:800}
        .cl-btechmeh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-btechmeh-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none}
        .cl-btechmeh-btn-solid:hover{transform:translateY(-2px)}
        .cl-btechmeh-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none}
        .cl-btechmeh-btn-outline:hover{transform:translateY(-2px)}
      `}}/>
      <section className="cl-btechmeh-sec" id="hero">
        <img className="cl-btechmeh-bg" src="/courses/btech/mechanical-engineering/bannerImg.webp" alt="B.Tech Mechanical Engineering at Tulas Institute" aria-hidden="true"/>
        <div className="cl-btechmeh-overlay"/>
        <div className="cl-btechmeh-inner">
          <div className="cl-btechmeh-bc">
            Home / Programs / B.Tech / <span className="cur">Mechanical Engineering</span>
          </div>
          <div className="cl-btechmeh-badge">B.Tech · Mechanical Engineering · NAAC A+</div>
          <h1 className="cl-btechmeh-h1">Design, Build &amp;<br/><em>Power The Future</em></h1>
          <p className="cl-btechmeh-desc">One of the oldest and most prestigious departments at Tulas Institute — combining mechanical design, manufacturing, thermodynamics, robotics, and energy engineering with state-of-the-art labs and industry collaboration.</p>
          <div className="cl-btechmeh-chips">
            {CHIPS.map((c,i)=>(
              <span key={i} className="cl-btechmeh-chip">
                {c.strong&&<strong>{c.strong}</strong>}{c.rest}
              </span>
            ))}
          </div>
          <div className="cl-btechmeh-btns">
            <Link href="/apply-now" className="cl-btechmeh-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-btechmeh-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
