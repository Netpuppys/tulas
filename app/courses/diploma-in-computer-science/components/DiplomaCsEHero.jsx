'use client';
import Link from 'next/link';

export default function DiplomaCsEHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipcse-hero-sec{position:relative;min-height:78vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#001F4C;}
        .cl-dipcse-hero-img{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-dipcse-hero-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.78) 0%,rgba(0,21,46,.62) 55%,rgba(196,73,0,.72) 100%);}
        .cl-dipcse-hero-inner{position:relative;z-index:2;text-align:center;padding:60px 7%;max-width:1200px;width:100%;margin:0 auto;}
        .cl-dipcse-hero-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-dipcse-hero-h1{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-dipcse-hero-h1 em{font-style:normal;color:#FFF3D7;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-dipcse-hero-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-dipcse-hero-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-dipcse-hero-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-dipcse-hero-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-dipcse-hero-ctas{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-dipcse-hero-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-dipcse-hero-btn-solid:hover{transform:translateY(-2px);}
        .cl-dipcse-hero-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-dipcse-hero-btn-outline:hover{transform:translateY(-2px);}
        @media(max-width:640px){.cl-dipcse-hero-inner{padding:50px 5%;}}
      `}}/>
      <section className="cl-dipcse-hero-sec">
        <img src="/diploma-computer-science-engineering/banner.png" alt="Diploma in Computer Science Engineering" className="cl-dipcse-hero-img"/>
        <div className="cl-dipcse-hero-overlay"/>
        <div className="cl-dipcse-hero-inner">
          <div className="cl-dipcse-hero-badge">Diploma · Computer Science Engineering · Best CSE Institute In North India</div>
          <h1 className="cl-dipcse-hero-h1">Code, Innovate &amp;<br/><em>Transform The Digital World</em></h1>
          <p className="cl-dipcse-hero-desc">A three-year undergraduate diploma delving into computer applications and systems — equipping students with programming, networking, and software/hardware design skills for a thriving career in the IT industry.</p>
          <div className="cl-dipcse-hero-chips">
            <span className="cl-dipcse-hero-chip"><strong>3-Year</strong> Diploma Programme</span>
            <span className="cl-dipcse-hero-chip">Industry Certifications</span>
            <span className="cl-dipcse-hero-chip">Hands-On Practical Training</span>
            <span className="cl-dipcse-hero-chip">Project-Based Learning</span>
            <span className="cl-dipcse-hero-chip">Lateral Entry To B.Tech</span>
          </div>
          <div className="cl-dipcse-hero-ctas">
            <Link href="/apply-now" className="cl-dipcse-hero-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-dipcse-hero-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
