'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BBABACTABanner() {
  const [hoverApply, setHoverApply]  = useState(false);
  const [hoverTalk,  setHoverTalk]   = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bab-sec{position:relative;overflow:hidden;padding:110px 7%;background:linear-gradient(135deg,#001F4C 0%,#0a2d5c 50%,#001F4C 100%)}
        .cl-bab-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 15% 50%,rgba(223,84,0,.22) 0%,transparent 55%),radial-gradient(circle at 85% 50%,rgba(223,84,0,.14) 0%,transparent 50%);pointer-events:none}
        .cl-bab-grid{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:48px 48px;pointer-events:none}
        .cl-bab-inner{position:relative;z-index:2;max-width:860px;margin:0 auto;text-align:center}

        .cl-bab-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:24px;opacity:.85}
        .cl-bab-eyebrow .bar{display:block;width:28px;height:2px;border-radius:2px;background:#FFF3D7;flex-shrink:0}

        .cl-bab-h2{margin-bottom:20px;line-height:.92;font-family:'Bebas Neue',sans-serif;font-size:clamp(2.8rem,5.5vw,5rem);color:#fff;letter-spacing:.02em}
        .cl-bab-h2 em{font-style:normal;color:#FFF3D7}

        .cl-bab-sub{font-size:1.08rem;line-height:1.85;color:rgba(255,255,255,.75);margin-bottom:48px;max-width:620px;margin-left:auto;margin-right:auto}

        .cl-bab-actions{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap}
        .cl-bab-apply{display:inline-flex;align-items:center;gap:10px;padding:18px 42px;border-radius:50px;font-weight:800;font-size:1rem;cursor:pointer;border:none;transition:all .3s;text-decoration:none}
        .cl-bab-talk{display:inline-flex;align-items:center;gap:10px;padding:17px 36px;border-radius:50px;font-weight:700;font-size:.95rem;cursor:pointer;transition:all .3s;text-decoration:none;border:2px solid rgba(255,255,255,.35);color:#fff;background:transparent}
        .cl-bab-talk:hover{border-color:#fff;background:rgba(255,255,255,.1)}

        .cl-bab-trust{margin-top:56px;display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
        .cl-bab-trust-item{display:flex;align-items:center;gap:8px;font-size:.82rem;font-weight:600;color:rgba(255,255,255,.6)}
        .cl-bab-trust-item svg{flex-shrink:0;color:rgba(255,243,215,.7)}

        @media(max-width:640px){
          .cl-bab-sec{padding:80px 5%}
          .cl-bab-actions{flex-direction:column;align-items:stretch}
          .cl-bab-apply,.cl-bab-talk{justify-content:center}
          .cl-bab-trust{gap:20px}
        }
      `}} />

      <section className="cl-bab-sec">
        <div className="cl-bab-grid" />
        <div className="cl-bab-inner">

          <div className="cl-bab-eyebrow">
            <span className="bar" />
            Take the Next Step
            <span className="bar" />
          </div>

          <h2 className="cl-bab-h2">
            Ready To Turn Data<br />
            <em>Into Decisions?</em>
          </h2>

          <p className="cl-bab-sub">
            Join the BBA Business Analytics programme at Tulas Institute and build the analytical skills, industry certifications, and real-world experience that data-driven organisations are hiring for.
          </p>

          <div className="cl-bab-actions">
            <Link
              href="/apply-now"
              className="cl-bab-apply"
              style={{
                background: hoverApply
                  ? 'linear-gradient(135deg,#c44900 0%,#DF5400 100%)'
                  : 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)',
                color: '#fff',
                boxShadow: hoverApply
                  ? '0 16px 42px rgba(223,84,0,.55)'
                  : '0 8px 28px rgba(223,84,0,.38)',
                transform: hoverApply ? 'translateY(-2px)' : 'none',
              }}
              onMouseEnter={() => setHoverApply(true)}
              onMouseLeave={() => setHoverApply(false)}
            >
              Apply Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <Link
              href="/contact"
              className="cl-bab-talk"
              style={{
                transform: hoverTalk ? 'translateY(-2px)' : 'none',
                boxShadow: hoverTalk ? '0 10px 28px rgba(0,0,0,.25)' : 'none',
              }}
              onMouseEnter={() => setHoverTalk(true)}
              onMouseLeave={() => setHoverTalk(false)}
            >
              Talk to Admissions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </Link>
          </div>

          <div className="cl-bab-trust">
            <div className="cl-bab-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              100% Placement Assistance
            </div>
            <div className="cl-bab-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              IIT Kanpur E&amp;ICT Academy Certified
            </div>
            <div className="cl-bab-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              ₹60 LPA Highest Package
            </div>
            <div className="cl-bab-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              500+ Recruiters
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
