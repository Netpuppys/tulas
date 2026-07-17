'use client';
import { useState } from 'react';

const FAQS = [
  {
    q:'How do I apply for admission?',
    a:"Call the admission helpline at +91-9837983721 or email info@tulas.edu.in. Applications for 2026-27 are open now — the admissions team will walk you through eligibility, documents, and next steps for your chosen programme.",
  },
  {
    q:'Can I schedule a campus tour before applying?',
    a:'Yes. Contact the general enquiries line to arrange a visit to the Dehradun campus — you are welcome to see the labs, hostels, and facilities in person before making a decision.',
  },
  {
    q:'Is there a separate helpline for international or out-of-state students?',
    a:'Yes — there are dedicated helplines for prospective students from Nepal and Bihar, in addition to the general admissions line, to make the process smoother for students applying from outside Uttarakhand.',
  },
  {
    q:'How do I get in touch about placements or industry partnerships?',
    a:'Reach the placement cell directly on the dedicated placement helpline number, separate from the general admissions line, for faster response on recruitment or partnership queries.',
  },
  {
    q:"What's the fastest way to reach someone during office hours?",
    a:'Phone is fastest for time-sensitive queries — use the college landline (0135-2699300) or the relevant helpline above. For anything that can wait, email info@tulas.edu.in and the team will respond.',
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ctfaq-sec{padding:110px 7%;background:#fff;}
        .cl-ctfaq-wrap{max-width:1280px;margin:0 auto;}
        .cl-ctfaq-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-ctfaq-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-ctfaq-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-ctfaq-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-ctfaq-h2 em{font-style:normal;color:#DF5400;}
        .cl-ctfaq-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-ctfaq-list{max-width:820px;margin:0 auto;}
        .cl-ctfaq-item{border:1px solid #e0e4ed;border-radius:14px;margin-bottom:12px;overflow:hidden;}
        .cl-ctfaq-q{width:100%;text-align:left;padding:20px 24px;background:#fff;border:none;cursor:pointer;font-weight:700;font-size:.98rem;color:#001F4C;display:flex;justify-content:space-between;align-items:center;gap:14px;font-family:'Montserrat',sans-serif;}
        .cl-ctfaq-plus{font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:#DF5400;transition:transform .3s;flex-shrink:0;line-height:1;}
        .cl-ctfaq-item.open .cl-ctfaq-plus{transform:rotate(45deg);}
        .cl-ctfaq-a{max-height:0;overflow:hidden;transition:max-height .35s ease;background:#f8f9fc;}
        .cl-ctfaq-item.open .cl-ctfaq-a{max-height:220px;}
        .cl-ctfaq-a p{padding:0 24px 20px;font-size:.9rem;line-height:1.8;color:#5a6a8a;}

        @media(max-width:640px){.cl-ctfaq-sec{padding:70px 5%;}}
      `}}/>
      <section className="cl-ctfaq-sec" id="faq">
        <div className="cl-ctfaq-wrap">
          <div className="cl-ctfaq-head">
            <div className="cl-ctfaq-eyebrow"><span className="bar"/>Common Questions</div>
            <h2 className="cl-ctfaq-h2">Frequently Asked<br/><em>Questions</em></h2>
            <p className="cl-ctfaq-sub">Quick answers before you pick up the phone. Tap a question to expand it.</p>
          </div>

          <div className="cl-ctfaq-list">
            {FAQS.map((f,i)=>(
              <div key={i} className={`cl-ctfaq-item${open===i?' open':''}`}>
                <button className="cl-ctfaq-q" onClick={()=>setOpen(open===i?-1:i)}>
                  <span>{f.q}</span>
                  <span className="cl-ctfaq-plus">+</span>
                </button>
                <div className="cl-ctfaq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
