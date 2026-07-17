'use client';
import { useState } from 'react';

const CONTACTS = [
  { tag:'Placements',  title:'Placement Helpline',         desc:'For placement-related queries and industry partnerships.',              val:'+91-74549 04594', copy:'+91-7454904594',      href:'tel:+91-7454904594' },
  { tag:'Admissions',  title:'Admission Helpline',         desc:'For general admissions enquiries across all programmes.',               val:'+91-9837983721',  copy:'+91-9837983721',      href:'tel:+91-9837983721' },
  { tag:'Nepal',       title:'Nepal Admission Helpline',   desc:'Dedicated support line for prospective students from Nepal.',           val:'+91-98379 83721', copy:'+91-9837983721',      href:'tel:+91-9837983721' },
  { tag:'Bihar',       title:'Bihar Admission Helpline',   desc:'Dedicated support line for prospective students from Bihar.',           val:'+91-7503332999',  copy:'+91-7503332999',      href:'tel:+91-7503332999' },
  { tag:'Email',       title:'General Enquiries',          desc:'For all other queries, campus tours, and information requests.',        val:'info@tulas.edu.in',copy:'info@tulas.edu.in',   href:'mailto:info@tulas.edu.in' },
  { tag:'Landline',    title:'College Landline & Fax',     desc:'Direct line to the campus office.',                                    val:'0135-2699300',    copy:'0135-2699300',        href:'tel:0135-2699300', fax:'0135-2699305' },
];

export default function ContactReachUs() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ctru-sec{padding:40px 7%;background:#fff;}
        .cl-ctru-wrap{max-width:1280px;margin:0 auto;}
        .cl-ctru-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-ctru-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-ctru-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-ctru-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;margin-bottom:22px;}
        .cl-ctru-h2 em{font-style:normal;color:#DF5400;}
        .cl-ctru-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-ctru-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-ctru-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-ctru-dvis{position:relative;height:130px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-ctru-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-ctru-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-ctru-body{padding:24px;flex:1;display:flex;flex-direction:column;gap:10px;}
        .cl-ctru-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin:0;}
        .cl-ctru-copy-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
        .cl-ctru-val{font-weight:800;font-size:1.02rem;color:#001F4C;text-decoration:none;}
        .cl-ctru-val:hover{color:#DF5400;}
        .cl-ctru-copy-btn{border:1px solid #e0e4ed;background:#f8f9fc;border-radius:8px;padding:5px 12px;font-size:.72rem;font-weight:700;color:#001F4C;cursor:pointer;transition:.2s;}
        .cl-ctru-copy-btn:hover{background:#001F4C;color:#fff;border-color:#001F4C;}
        .cl-ctru-copy-btn.copied{background:#1a8f4c;color:#fff;border-color:#1a8f4c;}
        .cl-ctru-fax{margin-top:4px;font-size:.78rem;color:#5a6a8a;}

        @media(max-width:900px){.cl-ctru-grid{grid-template-columns:1fr 1fr;}}
        @media(max-width:560px){.cl-ctru-grid{grid-template-columns:1fr;}.cl-ctru-sec{padding:70px 5%;}}
      `}}/>
      <section className="cl-ctru-sec" id="reach-us">
        <div className="cl-ctru-wrap">
          <div className="cl-ctru-head">
            <div className="cl-ctru-eyebrow"><span className="bar"/>Reach Us</div>
            <h2 className="cl-ctru-h2">Talk To The <em>Right Team</em></h2>
            <p className="cl-ctru-sub">Multiple direct lines for admissions, placements, and general queries — tap to copy any number or email instantly.</p>
          </div>

          <div className="cl-ctru-grid">
            {CONTACTS.map((c,i)=>(
              <div key={i} className="cl-ctru-card">
                <div className="cl-ctru-dvis">
                  <span className="cl-ctru-tag">{c.tag}</span>
                  <span className="cl-ctru-title">{c.title}</span>
                </div>
                <div className="cl-ctru-body">
                  <p>{c.desc}</p>
                  <div className="cl-ctru-copy-row">
                    <a href={c.href} className="cl-ctru-val">{c.val}</a>
                    <button
                      className={`cl-ctru-copy-btn${copied===i?' copied':''}`}
                      onClick={()=>handleCopy(c.copy,i)}
                    >{copied===i?'Copied!':'Copy'}</button>
                  </div>
                  {c.fax&&<p className="cl-ctru-fax">Fax: {c.fax}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
