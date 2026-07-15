'use client';
import Link from 'next/link';

const CHIPS = [
  { strong:'4-Year', rest:' B.Tech Programme' },
  { rest:'Renewable Energy · Smart Grids · EVs' },
  { rest:'Industry Certifications' },
  { rest:'Multiple Internships' },
  { rest:'Project-Based Learning' },
];

export default function BTechEEEHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheeeh-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh}
        .cl-btecheeeh-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
        .cl-btecheeeh-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.62) 0%,rgba(0,21,46,.66) 55%,rgba(196,73,0,.72) 100%);z-index:1}
        .cl-btecheeeh-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px}
        .cl-btecheeeh-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%}
        .cl-btecheeeh-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65)}
        .cl-btecheeeh-bc .cur{color:#FFF3D7}
        .cl-btecheeeh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px}
        .cl-btecheeeh-h1{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px}
        .cl-btecheeeh-h1 em{font-style:normal;color:#FFF3D7;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5))}
        .cl-btecheeeh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92)}
        .cl-btecheeeh-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px}
        .cl-btecheeeh-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22)}
        .cl-btecheeeh-chip strong{color:#FFF3D7;font-weight:800}
        .cl-btecheeeh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-btecheeeh-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none}
        .cl-btecheeeh-btn-solid:hover{transform:translateY(-2px)}
        .cl-btecheeeh-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none}
        .cl-btecheeeh-btn-outline:hover{transform:translateY(-2px)}
      `}}/>
      <section className="cl-btecheeeh-sec" id="hero">
        <img className="cl-btecheeeh-bg" src="/courses/btech/electrical-and-electronics/bannerImg.webp" alt="B.Tech Electrical & Electronics Engineering at Tulas Institute" aria-hidden="true"/>
        <div className="cl-btecheeeh-overlay"/>
        <div className="cl-btecheeeh-inner">
          <div className="cl-btecheeeh-bc">
            Home / Programs / B.Tech / <span className="cur">Electrical &amp; Electronics Engineering</span>
          </div>
          <div className="cl-btecheeeh-badge">B.Tech · Electrical &amp; Electronics Engineering · NAAC A+</div>
          <h1 className="cl-btecheeeh-h1">Power The Future With<br/><em>Sustainable Energy</em></h1>
          <p className="cl-btecheeeh-desc">Committed to academic excellence and research since 2006 — the Department of Electrical &amp; Electronics Engineering at Tulas Institute covers power systems, power electronics, automation, VLSI, control systems, electric vehicles, renewable energy, and smart grids.</p>
          <div className="cl-btecheeeh-chips">
            {CHIPS.map((c,i)=>(
              <span key={i} className="cl-btecheeeh-chip">
                {c.strong&&<strong>{c.strong}</strong>}{c.rest}
              </span>
            ))}
          </div>
          <div className="cl-btecheeeh-btns">
            <Link href="/apply-now" className="cl-btecheeeh-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-btecheeeh-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
