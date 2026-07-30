'use client';
import Link from 'next/link';

export default function DiplomaMechanicalHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipce-hero-sec{position:relative;min-height:78vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#001F4C;}
        .cl-dipce-hero-img{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-dipce-hero-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.78) 0%,rgba(0,21,46,.52) 55%,rgba(196,73,0,.72) 100%);}
        .cl-dipce-hero-inner{position:relative;z-index:2;text-align:center;padding:60px 7%;max-width:1200px;width:100%;margin:0 auto;}
        .cl-dipce-hero-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-dipce-hero-h1{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-dipce-hero-h1 em{font-style:normal;color:#FFF3D7;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-dipce-hero-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-dipce-hero-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-dipce-hero-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-dipce-hero-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-dipce-hero-ctas{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-dipce-hero-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-dipce-hero-btn-solid:hover{transform:translateY(-2px);}
        .cl-dipce-hero-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-dipce-hero-btn-outline:hover{transform:translateY(-2px);}
        @media(max-width:640px){.cl-dipce-hero-inner{padding:50px 5%;}}
      `}}/>
      <section className="cl-dipce-hero-sec">
        <img src="/diploma-in-mechanical-engineering/bannerImg.png" alt="Diploma in Civil Engineering" className="cl-dipce-hero-img"/>
        <div className="cl-dipce-hero-overlay"/>
        <div className="cl-dipce-hero-inner">
          <div className="cl-dipce-hero-badge">Diploma · Mechanical Engineering · Best Engineering University In North India</div>
          <h1 className="cl-dipce-hero-h1">Innovate, Create &<br/><em>Engineer The Future</em></h1>
          <p className="cl-dipce-hero-desc">A three-year comprehensive programme equipping students with the fundamentals of construction, design, and infrastructure development — a strong technical foundation integrated with modern industry practices and smart infrastructure trends.</p>
          <div className="cl-dipce-hero-chips">
            <span className="cl-dipce-hero-chip"><strong>3-Year</strong> Diploma Programme</span>
            <span className="cl-dipce-hero-chip">Industry Certifications</span>
            <span className="cl-dipce-hero-chip">Industrial Visits &amp; On-Site Training</span>
            <span className="cl-dipce-hero-chip">Project-Based Learning</span>
            <span className="cl-dipce-hero-chip">Lateral Entry To B.Tech</span>
          </div>
          <div className="cl-dipce-hero-ctas">
            <Link href="/apply-now" className="cl-dipce-hero-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-dipce-hero-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
