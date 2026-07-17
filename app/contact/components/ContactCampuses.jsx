'use client';
import { useState } from 'react';

const CAMPUSES = [
  {
    id:'dehradun',
    label:'📍 Dehradun, Uttarakhand',
    name:'Main Campus, Dehradun',
    address:'Tulas Institute, Dhoolkot, Post Office: Selaqui, Chakrata Road, Dehradun – 248011, Uttarakhand.',
    pills:['Chakrata Road','Selaqui'],
    img:'/Contact/whytulas.jpg',
    alt:'Tulas Institute Main Campus, Dehradun',
    mapSrc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2777855085124!2d77.8834027761828!3d30.343054304359832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa74538275%3A0x3cb757428c691de3!2sTula\'s%20Institute!5e0!3m2!1sen!2sin!4v1725008516487!5m2!1sen!2sin',
  },
  {
    id:'patna',
    label:'📍 Patna, Bihar',
    name:'Regional Office, Patna',
    address:'409, RN Tower Commercial Complex, Near Ram Jaipal More, Bailey Road, Patna, Bihar.',
    pills:['Bailey Road','RN Tower'],
    img:'/Contact/whytulas.jpg',
    alt:'Tulas Regional Office, Patna',
    mapSrc:'https://www.google.com/maps?q=RN+Tower+Bailey+Road+Patna&output=embed',
  },
];

export default function ContactCampuses() {
  const [active, setActive] = useState('dehradun');
  const campus = CAMPUSES.find(c=>c.id===active);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ctcam-sec{padding:110px 7%;background:#f8f9fc;}
        .cl-ctcam-wrap{max-width:1280px;margin:0 auto;}
        .cl-ctcam-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-ctcam-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-ctcam-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-ctcam-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-ctcam-h2 em{font-style:normal;color:#DF5400;}
        .cl-ctcam-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-ctcam-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}
        .cl-ctcam-tab{padding:12px 26px;border-radius:30px;border:1.5px solid #e0e4ed;background:#fff;font-weight:700;font-size:.88rem;color:#001F4C;cursor:pointer;transition:.2s;}
        .cl-ctcam-tab:hover{border-color:#001F4C;}
        .cl-ctcam-tab.active{background:#001F4C;color:#fff;border-color:#001F4C;}

        .cl-ctcam-panel{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:stretch;}
        .cl-ctcam-ph{border-radius:18px;overflow:hidden;min-height:340px;position:relative;}
        .cl-ctcam-ph img{width:100%;height:100%;object-fit:cover;object-position:center;display:block;}
        .cl-ctcam-info{display:flex;flex-direction:column;justify-content:center;gap:0;}
        .cl-ctcam-info h3{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#001F4C;margin-bottom:14px;}
        .cl-ctcam-info p{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:16px;}
        .cl-ctcam-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px;}
        .cl-ctcam-pill{padding:5px 14px;border-radius:7px;font-size:.78rem;font-weight:600;background:#fff;border:1px solid #e0e4ed;color:#001F4C;}
        .cl-ctcam-map{border-radius:16px;overflow:hidden;box-shadow:0 16px 40px rgba(0,31,76,.15);}
        .cl-ctcam-map iframe{display:block;width:100%;height:260px;border:0;}

        @media(max-width:900px){.cl-ctcam-panel{grid-template-columns:1fr;}}
        @media(max-width:640px){.cl-ctcam-sec{padding:70px 5%;}}
      `}}/>
      <section className="cl-ctcam-sec" id="campuses">
        <div className="cl-ctcam-wrap">
          <div className="cl-ctcam-head">
            <div className="cl-ctcam-eyebrow"><span className="bar"/>Visit Us</div>
            <h2 className="cl-ctcam-h2">Our <em>Campuses</em></h2>
            <p className="cl-ctcam-sub">Two locations, one mission — switch between them to see address, map, and directions.</p>
          </div>

          <div className="cl-ctcam-tabs">
            {CAMPUSES.map(c=>(
              <button key={c.id} className={`cl-ctcam-tab${active===c.id?' active':''}`} onClick={()=>setActive(c.id)}>
                {c.label}
              </button>
            ))}
          </div>

          <div className="cl-ctcam-panel">
            <div className="cl-ctcam-ph">
              <img src={campus.img} alt={campus.alt}/>
            </div>
            <div className="cl-ctcam-info">
              <h3>{campus.name}</h3>
              <p>{campus.address}</p>
              <div className="cl-ctcam-pills">
                {campus.pills.map((p,i)=><span key={i} className="cl-ctcam-pill">{p}</span>)}
              </div>
              <div className="cl-ctcam-map">
                <iframe src={campus.mapSrc} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={campus.name}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
