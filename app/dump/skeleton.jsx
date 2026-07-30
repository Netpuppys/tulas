import React, { useState, useEffect, useRef } from "react";

// ---------- Configuration ----------
const config = {
  topBar: {
    phone: "+91-8888888888",
    email: "info@tulas.edu.in",
    admissionLabel: "Admission Open 2026-27",
  },
  header: {
    logoText: "TULA'S",
    subtitle: "Institute",
    subHighlight: "Dehradun",
    helpdeskText: "Helpdesk",
    ctaText: "Apply Now",
  },
  hero: {
    badge: "Top Engineering Institute in North India",
    title: "B.TECH",
    highlight: "where Engineering Meets Real Industry",
    description:
      "Empowering future innovators through industry-integrated curriculum, state-of-the-art laboratory infrastructure, and 100% placement support.",
    stats: [
      { value: "36.5 LPA", label: "Highest Package" },
      { value: "750+", label: "Hiring Partners" },
      { value: "100%", label: "Placement Asst." },
    ],
    formTitle: "Apply Today",
    formSub: "Fill out the form below to register for B.Tech Admissions",
    states: ["Uttarakhand", "Delhi NCR", "Uttar Pradesh", "Bihar", "Other"],
  },
  ranks: [
    {
      image: "./logo/1.jpg",
      ranking: [
        { rank: "#1", desc: "Private ENGINEERING COLLEGE IN Dehradun" },
        { rank: "#21", desc: "Private ENGINEERING COLLEGE IN North India" },
      ],
    },
    {
      image: "./logo/2.jpg",
      ranking: [{ rank: "#37", desc: "Pvt. ENGINEERING COLLEGE IN Dehradun" }],
    },
    {
      image: "./logo/3.jpg",
      ranking: [{ rank: "#65", desc: "ENGINEERING Excellence 2025" }],
    },
    {
      image: "./logo/4.jpg",
      ranking: [{ rank: "#88", desc: "ENGINEERING Excellence 2026" }],
    },
  ],
  about: {
    heading:
      "B.Tech in <span class='text-brand-orange'>Tula's, Dehradun</span>",
    description:
      "Tula's Institute, established in 2006, is renowned as one of Uttarakhand's premier engineering institutions. Our B.Tech programs combine rigorous academic methodology with practical hands-on experience, advanced research facilities, and direct industry mentorship. We aim to nurture world-class engineers capable of solving complex real-world challenges.",
    stats: [
      { value: "100+", label: "Expert Faculty" },
      { value: "15+", label: "Hi-Tech Labs" },
      { value: "750+", label: "Recruiters Base" },
      { value: "36.5 LPA", label: "Highest Package" },
    ],
    whyTitle: "Why Tula's B.Tech?",
  },
  highlightStats: [
    { value: "1000+", label: "Placement Offers Made" },
    { value: "400+", label: "Top Companies Visited" },
    { value: "85%", label: "Consistent Placement Rate" },
  ],
  specializations: [
    {
      id: "cse",
      title: "Program Eligibility - B. Tech (4 Years)",
      desc: [
        "Passed 10+2 with Physics and Mathematics as compulsory subjects",
        "Minimum 45% marks in the above subjects (40% for reserved category candidates)",
      ],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "aiml",
      title: "CSE (Artificial Intelligence & Machine Learning)",
      desc: "Advanced curriculum covering neural networks, deep learning, computer vision, natural language processing, and automated decision-making systems for AI-driven industries.",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cyber",
      title: "Cyber Security",
      desc: "Specialized focus on network security, ethical hacking, cryptography, threat mitigation, digital forensics, and securing critical enterprise software infrastructure.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "civil",
      title: "Civil Engineering",
      desc: "Covers structural design, transportation engineering, surveying, geo-technical engineering, and sustainable urban infrastructure development.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mech",
      title: "Mechanical Engineering",
      desc: "Focuses on CAD/CAM, robotics, thermodynamics, automotive engineering, fluid mechanics, and smart industrial automation technology.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ece",
      title: "Electronics & Communication Engineering",
      desc: "Deals with VLSI design, embedded systems, IoT architecture, satellite communication, wireless networks, and robotics integration.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
  ],
  cta: {
    title: "Where Leaders Create Impact",
    description:
      "Our curriculum focuses on industry-ready practical knowledge, research publications, hackathons, and global certifications.",
    features: [
      "Industry-aligned labs powered by global tech leaders",
      "Mentorship from senior industry leaders",
      "Specialized placement training and soft-skills bootcamps",
    ],
    ctaText: "Get Started Now",
  },
  partners: [
    { name: "Partner 1", image: "./placement/1.webp" },
    { name: "Partner 2", image: "./placement/2.webp" },
    { name: "Partner 3", image: "./placement/3.webp" },
    { name: "Partner 4", image: "./placement/4.webp" },
    { name: "Partner 5", image: "./placement/5.webp" },
    { name: "Partner 6", image: "./placement/6.webp" },
    { name: "Partner 7", image: "./placement/7.webp" },
    { name: "Partner 8", image: "./placement/8.webp" },
    { name: "Partner 9", image: "./placement/9.webp" },
    { name: "Partner 10", image: "./placement/10.webp" },
    { name: "Partner 11", image: "./placement/11.webp" },
    { name: "Partner 12", image: "./placement/12.webp" },
  ],
  students: [
    { image: "./stories/alumni1.webp" },
    { image: "./stories/alumni2.webp" },
    { image: "./stories/alumni3.webp" },
    { image: "./stories/alumni4.webp" },
    { image: "./stories/alumni5.webp" },
    { image: "./stories/alumni6.webp" },
    { image: "./stories/alumni7.webp" },
    { image: "./stories/alumni8.webp" },
  ],
  faqs: [
    {
      q: "What is the eligibility criteria for B.Tech admission at Tula's?",
      a: "Candidates must have passed 10+2 with Physics, Mathematics, and Chemistry/Computer Science with at least 45% aggregate marks from a recognized board. Valid JEE Main scores are also preferred.",
    },
    {
      q: "What is the highest and average package for B.Tech graduates?",
      a: "The highest package offered to B.Tech graduates at Tula's Institute reached 36.5 LPA, with an average package across all engineering disciplines ranging between 5.5 LPA and 7.5 LPA.",
    },
    {
      q: "Are scholarships available for meritorious engineering students?",
      a: "Yes! Tula's Institute offers various merit-based scholarships based on 10+2 marks, JEE Main ranks, Uttarakhand domicile criteria, and sports excellence scholarships.",
    },
    {
      q: "Is hostel facility available on campus for boys and girls?",
      a: "Yes, Tula's provides separate, fully secured hostel facilities for boys and girls with 24/7 power backup, Wi-Fi connectivity, mess, sports arenas, and security staff.",
    },
    {
      q: "How can I apply for admission for the 2026 academic year?",
      a: "You can apply online by filling out the registration form on this page or visit the official Tula's Institute campus in Dehradun for walk-in counseling.",
    },
  ],
  footer: {
    address: "Dhoolkot, PO-Selaqui, Chakrata Road, Dehradun, Uttarakhand 248011.",
    quickLinks: [
      { text: "B.Tech Programs", href: "#" },
      { text: "Admission Process", href: "#" },
      { text: "Placement Records", href: "#" },
      { text: "Campus Facilities", href: "#" },
    ],
    social: ["facebook-f", "instagram", "linkedin-in", "youtube"],
    copyright: "&copy; 2026 Tula's Institute, Dehradun. All Rights Reserved.",
  },
  highlights: [
    { img: "./highlights/highlight1.webp" },
    { img: "./highlights/highlight2.webp" },
    { img: "./highlights/highlight3.webp" },
    { img: "./highlights/highlight4.webp" },
    { img: "./highlights/highlight5.webp" },
    { img: "./highlights/highlight6.webp" },
  ],
  internship: {
    heroImage: "./intershipbanner2.png",
    overlay: {
      top: "Expecting",
      highlight: "Industry",
      bottom: "Exposure?",
    },
    heading: "Internship Offered By Tulas",
    paragraphs: [
      "The Training and Placement Cell at Tula's supports students in preparing for real corporate opportunities through structured training, internship support and campus recruitment initiatives. With resume building, aptitude preparation, mock interviews and regular corporate interactions, students gain the skills, confidence and industry exposure needed to begin their B.Tech careers.",
      "Complementing this is TCCI (Tula's Career Catalyst Initiative) - a Professional Capability Acceleration Framework designed to bridge the gap between academic learning and real workplace expectations through diagnostic assessments, targeted development and real-world simulations. It helps students graduate with practical capabilities and the readiness to contribute effectively from day one.",
    ],
    stats: [
      { id: "01", highlight: "20 Years", text: "of Academic Excellence" },
      { id: "03", highlight: "350+ Global", text: "Recruiter Network" },
      {
        id: "02",
        highlight: "100+ Corporate",
        text: "Interactions & Projects",
      },
      { id: "04", highlight: "5000+ Successful", text: "Alumni Stories" },
    ],
  },
  lifeAtTulas: {
    categories: {
      Fests: [
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      ],
      Hostel: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      ],
      Infrastructure: [
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80",
      ],
      Sports: [
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      ],
      Wellness: [
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      ],
    },
  },
};

// ---------- Components ----------

function TopBar() {
  const { phone, email, admissionLabel } = config.topBar;
  return (
    <div className="bg-brand-orange text-white text-xs py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
        <div className="flex items-center space-x-4">
          <span>
            <i className="fa-solid fa-phone mr-1"></i> {phone}
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">
            <i className="fa-solid fa-envelope mr-1"></i> {email}
          </span>
        </div>
        <div className="font-bold tracking-wider uppercase">{admissionLabel}</div>
      </div>
    </div>
  );
}

function Header() {
  const { logoText, subtitle, subHighlight, helpdeskText, ctaText } =
    config.header;
  const phoneNumber = config.topBar.phone.replace(/[^0-9+]/g, "");
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="bg-brand-orange text-white font-black text-2xl px-3 py-1 rounded tracking-tighter font-heading">
            {logoText}
          </div>
          <div className="text-xs uppercase font-extrabold text-brand-navy leading-none">
            {subtitle}
            <br />
            <span className="text-brand-orange text-[10px] font-semibold tracking-widest">
              {subHighlight}
            </span>
          </div>
        </a>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="hidden md:flex items-center gap-2 text-xs font-semibold text-brand-navy border border-gray-300 px-3 py-1.5 rounded-full hover:border-brand-orange transition"
          >
            <i className="fa-solid fa-headset text-brand-orange text-sm"></i>
            <span>{helpdeskText}</span>
          </a>
          <a
            href="#apply-now"
            className="bg-brand-orange hover:bg-brand-darkorange text-white font-bold text-xs uppercase px-5 py-2.5 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5"
          >
            {ctaText} <i className="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const {
    badge,
    title,
    highlight,
    description,
    stats,
    formTitle,
    formSub,
    states,
  } = config.hero;
  const specs = config.specializations;
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-brand-navy to-gray-900 text-white overflow-hidden py-10 lg:py-16">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f26522_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-award"></i> {badge}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight">
            {title}
            <br />
            <span className="text-brand-orange">{highlight}</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
            {description}
          </p>
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className={`bg-white/10 backdrop-blur p-2.5 rounded-lg border border-white/10 text-center ${
                  idx === 2 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="text-brand-orange font-extrabold text-xl font-heading">
                  {s.value}
                </div>
                <div className="text-[11px] text-gray-300 uppercase font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="apply-now"
          className="lg:col-span-5 bg-white text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-7 border-t-8 border-brand-orange"
        >
          <div className="text-center mb-5">
            <h2 className="text-2xl font-extrabold font-heading text-brand-navy">
              {formTitle}
            </h2>
            <p className="text-xs text-gray-500 mt-1">{formSub}</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted successfully!");
            }}
            className="space-y-3.5"
          >
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full text-xs px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full text-xs px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Mobile Number *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-xs text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="10-digit phone number"
                  className="w-full text-xs px-3.5 py-2.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-brand-orange focus:outline-none transition"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Select State *
                </label>
                <select
                  required
                  className="w-full text-xs px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none bg-white"
                >
                  <option value="">Choose State</option>
                  {states.map((st) => (
                    <option key={st}>{st}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Select Specialization *
                </label>
                <select
                  required
                  className="w-full text-xs px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none bg-white"
                >
                  <option value="">Choose Course</option>
                  {specs.map((sp) => (
                    <option key={sp.id}>{sp.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-orange hover:bg-brand-darkorange text-white font-extrabold text-sm py-3 rounded-lg uppercase tracking-wider shadow-md hover:shadow-lg transition duration-200 mt-2 font-heading"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function RankSection() {
  const rankItems = config.ranks;
  return (
    <section className="py-12 bg-brand-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-brand-orange font-extrabold uppercase text-xs tracking-widest font-heading">
            Perfect Choice
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy mt-1">
            India's Top Ranked University
          </h2>
        </div>
        <div className="flex gap-4">
          {rankItems.map((item, idx) => (
            <div key={idx}>
              <div className="mt-3 pt-3 border-t border-brand-orange w-full flex bg-white justify-center">
                <img
                  src={item.image}
                  alt="Ranking Logo"
                  className="w-auto object-contain max-h-[150px] h-[150px] w-full"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200/60 text-center hover:shadow-md transition flex flex-col items-center">
                <div className="flex justify-center gap-1 items-start w-full">
                  {item.ranking.map((r, i) => (
                    <div key={i} className="mt-0!">
                      <div className="text-brand-orange text-xl font-black font-heading">
                        {r.rank}
                      </div>
                      <div className="text-[10px] font-bold text-gray-700 uppercase leading-tight">
                        {r.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { heading, description, stats, whyTitle } = config.about;
  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2
          className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
          {description}
        </p>
        <div className="pt-6">
          <h3 className="text-xl font-extrabold font-heading text-brand-navy mb-6">
            {whyTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="p-4 bg-brand-bgLight rounded-xl border border-orange-100/60"
              >
                <div className="text-2xl sm:text-3xl font-black font-heading text-brand-orange">
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-gray-700 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Campus Highlights Swiper – we'll mount it in useEffect in Page
function CampusSwiper() {
  return (
    <section
      className="relative w-full h-[75vh] md:h-[80vh] p-4 rounded-md overflow-hidden"
      aria-label="Campus Highlights Showcase"
    >
      <div className="swiper heroSwiper w-full h-full">
        <div className="swiper-wrapper" id="swiperWrapper"></div>
        <div className="swiper-button-next hidden sm:flex"></div>
        <div className="swiper-button-prev hidden sm:flex"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

function HighlightsGrid() {
  const highlights = config.highlights;
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-orange font-extrabold uppercase text-xs tracking-widest font-heading">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy mt-1">
            Program <span className="text-brand-orange">Highlights</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Key features that make Tula's the ideal choice for engineering education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, idx) => (
            <img
              key={idx}
              src={h.img}
              alt="Program Highlight"
              className="w-auto object-contain mx-auto"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipSection() {
  const data = config.internship;
  return (
    <section id="internship-section" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="relative w-full rounded-3xl overflow-hidden bg-gray-50 shadow-sm border border-gray-100">
          <div className="">
            <img
              src={data.heroImage}
              alt="Corporate Interaction at Tulas"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 pt-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
            <span className="text-brand-orange">Internship</span> Offered By Tulas
          </h2>
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            <p>{data.paragraphs[0]}</p>
            <p>{data.paragraphs[1]}</p>
          </div>
        </div>
        <div className="pt-4 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
            {data.stats.map((stat) => (
              <div key={stat.id} className="flex items-center space-x-4">
                <span className="text-5xl sm:text-6xl font-extrabold text-brand-orange tracking-tight shrink-0 select-none">
                  {stat.id}
                </span>
                <div className="text-zinc-800 text-sm sm:text-base leading-snug">
                  <span className="font-bold text-zinc-900">
                    {stat.highlight}
                  </span>{" "}
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LifeAtTulas() {
  const [activeCategory, setActiveCategory] = useState("Fests");
  const categories = config.lifeAtTulas.categories;
  const images = categories[activeCategory] || [];

  const chunkSize = 6;
  const slideChunks = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    slideChunks.push(images.slice(i, i + chunkSize));
  }

  return (
    <section className="py-12 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-brand-orange">Life</span>
            <span className="text-brand-navy"> at Tulas</span>
          </h1>
        </header>
        <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                cat === activeCategory
                  ? "bg-brand-orange text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
        <div className="relative w-full overflow-x-auto life-scroll no-scrollbar flex gap-4 pb-4">
          {slideChunks.map((chunk, idx) => (
            <div key={idx} className="slide-item">
              <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px] sm:h-[480px] lg:h-[520px]">
                {chunk.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full h-full overflow-hidden rounded-xl bg-gray-200 shadow-sm group"
                  >
                    <img
                      src={img}
                      alt="Gallery"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsHighlight() {
  const stats = config.highlightStats;
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {stats.map((s, idx) => (
            <div key={idx} className="p-2">
              <div className="text-3xl sm:text-4xl font-black font-heading text-brand-orange">
                {s.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-gray-300 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecializationsSection() {
  const [activeSpec, setActiveSpec] = useState(config.specializations[0].id);
  const specs = config.specializations;
  const current = specs.find((s) => s.id === activeSpec);

  const renderDescription = (desc) => {
    if (Array.isArray(desc)) {
      return (
        <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 leading-relaxed space-y-1">
          {desc.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>;
  };

  return (
    <section className="py-14 bg-brand-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-orange font-extrabold uppercase text-xs tracking-widest font-heading">
            Programs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy mt-1">
            Specializations <span className="text-brand-orange">Offered</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Choose from industry-driven engineering disciplines
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            {specs.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveSpec(spec.id)}
                className={`spec-btn w-full text-left py-3.5 px-5 rounded-xl font-bold font-heading text-sm transition-all duration-200 flex justify-between items-center ${
                  spec.id === activeSpec
                    ? "bg-brand-orange text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-brand-orange"
                }`}
              >
                <span>{spec.title}</span>
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm min-h-[380px] flex flex-col justify-between">
            {current && (
              <>
                <div className="space-y-4 animate-fadeIn">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-52 object-cover rounded-xl shadow-sm"
                  />
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-brand-navy">
                    {current.title}
                  </h3>
                  {renderDescription(current.desc)}
                </div>
                <div className="pt-4 border-t border-gray-100 mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-semibold">
                    Degree: 4-Year B.Tech Program
                  </span>
                  <a
                    href="#apply-now"
                    className="text-brand-orange font-bold text-xs uppercase hover:underline flex items-center gap-1 font-heading"
                  >
                    Apply For {current.id.toUpperCase()}{" "}
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { title, description, features, ctaText } = config.cta;
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-orange to-brand-darkorange rounded-2xl p-8 sm:p-12 text-white grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-2 text-xs font-semibold">
              {features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check"></i> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 text-center">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-xl font-black font-heading uppercase tracking-wide">
                Leadership That Brings Innovation & Excellence
              </div>
              <a
                href="#apply-now"
                className="mt-4 inline-block bg-white text-brand-orange font-bold text-xs uppercase px-6 py-2.5 rounded-full shadow hover:bg-gray-100 transition"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const partners = config.partners;
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
          750+ Direct Hiring Partners
        </h2>
        <p className="text-xs text-gray-500 mt-1 mb-8">
          Top recruiters visiting Tula's Institute campus every year
        </p>
        <div className="swiper partnerSwiper">
          <div className="swiper-wrapper" id="partnerSwiperWrapper">
            {partners.map((p, idx) => (
              <div key={idx} className="swiper-slide">
                <img
                  src={p.image}
                  alt={p.name}
                  title={p.name}
                  className="max-h-20 w-auto object-contain"
                  loading="lazy"
                  onError={(e) => (e.target.alt = p.name)}
                />
              </div>
            ))}
          </div>
          <div className="swiper-pagination partner-pagination !relative !mt-6"></div>
        </div>
      </div>
    </section>
  );
}

function StudentsSection() {
  const students = config.students;
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-brand-orange font-extrabold uppercase text-xs tracking-widest font-heading">
              Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy mt-1">
              Tula's Successful Alumni
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="students-prev w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition flex items-center justify-center">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="students-next w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition flex items-center justify-center">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="swiper studentsSwiper">
            <div className="swiper-wrapper" id="studentsSwiperWrapper">
              {students.map((s, idx) => (
                <div key={idx} className="swiper-slide">
                  <img
                    src={s.image}
                    alt="Alumni Story"
                    className="w-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Get answers to common queries regarding B.Tech admissions
          </p>
        </div>
        <div className="space-y-3">
          {config.faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center font-bold text-brand-navy font-heading text-sm hover:text-brand-orange transition"
                >
                  <span>{f.q}</span>
                  <i
                    className={`fa-solid ${isOpen ? "fa-minus rotate-180" : "fa-plus"} text-brand-orange transition-transform duration-300`}
                  ></i>
                </button>
                <div
                  className={`px-4 pb-5 sm:px-5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { address, quickLinks, social, copyright } = config.footer;
  return (
    <footer className="bg-brand-navy text-white pt-12 pb-6 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="font-extrabold text-2xl text-brand-orange font-heading">
            TULA'S INSTITUTE
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">{address}</p>
        </div>
        <div>
          <h4 className="font-extrabold text-sm mb-3 border-b border-gray-700 pb-1 font-heading text-brand-orange">
            Quick Links
          </h4>
          <ul className="text-xs space-y-2 text-gray-300">
            {quickLinks.map((l, idx) => (
              <li key={idx}>
                <a href={l.href} className="hover:text-brand-orange">
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold text-sm mb-3 border-b border-gray-700 pb-1 font-heading text-brand-orange">
            Contact
          </h4>
          <ul className="text-xs space-y-2 text-gray-300">
            <li>
              <i className="fa-solid fa-phone text-brand-orange mr-2"></i>{" "}
              {config.topBar.phone}
            </li>
            <li>
              <i className="fa-solid fa-envelope text-brand-orange mr-2"></i>{" "}
              {config.topBar.email}
            </li>
            <li>
              <i className="fa-solid fa-globe text-brand-orange mr-2"></i>{" "}
              www.tulas.edu.in
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold text-sm mb-3 border-b border-gray-700 pb-1 font-heading text-brand-orange">
            Follow Us
          </h4>
          <div className="flex space-x-3 text-sm">
            {social.map((ic, idx) => (
              <a
                key={idx}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition"
              >
                <i className={`fa-brands fa-${ic}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-400">
        {copyright}
      </div>
    </footer>
  );
}

// ---------- Main Page ----------
export default function SkeletonLandingPage() {
  const heroSwiperRef = useRef(null);
  const partnerSwiperRef = useRef(null);
  const studentsSwiperRef = useRef(null);

  // Slides data for hero swiper
  const slidesData = [
    {
      image: "./banner/d1.webp",
      title: "Welcome to Our Modern Campus",
      description:
        "Explore a state-of-the-art learning environment nestled in serene, natural surroundings.",
      ctaText: "Take a Virtual Tour",
      ctaLink: "#tour",
    },
    {
      image: "./banner/d2.webp",
      title: "World-Class Academic Facilities",
      description:
        "Empowering student success through advanced labs, spacious libraries, and modern sports grounds.",
      ctaText: "Explore Facilities",
      ctaLink: "#facilities",
    },
    {
      image: "./banner/d3.webp",
      title: "A Vibrant Student Community",
      description:
        "Join a diverse group of learners committed to innovation, excellence, and personal growth.",
      ctaText: "Apply Today",
      ctaLink: "#apply",
    },
  ];

  // Helper to create slide HTML
  const createSlideHTML = ({ image, title, description, ctaText, ctaLink }) => `
    <div class="swiper-slide relative bg-cover bg-center flex items-center justify-center rounded-2xl" style="background-image: url('${image}')">
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/75 z-10 rounded-2xl"></div>
      <div class="relative z-20 text-center text-white max-w-3xl px-6">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-md">${title}</h1>
        <p class="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">${description}</p>
        <a href="${ctaLink}" class="inline-block px-8 py-3 bg-brand-orange hover:bg-brand-darkorange text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
          <i class="fa-solid fa-compass"></i> ${ctaText}
        </a>
      </div>
    </div>
  `;

  useEffect(() => {
    // Only run if Swiper is available globally
    if (typeof Swiper === "undefined") return;

    // 1. Hero Swiper
    const wrapper = document.getElementById("swiperWrapper");
    if (wrapper) {
      wrapper.innerHTML = slidesData.map(createSlideHTML).join("");
    }
    if (heroSwiperRef.current) heroSwiperRef.current.destroy(true, true);
    heroSwiperRef.current = new Swiper(".heroSwiper", {
      effect: "fade",
      fadeEffect: { crossFade: true },
      loop: true,
      speed: 800,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // 2. Partner Swiper
    if (partnerSwiperRef.current) partnerSwiperRef.current.destroy(true, true);
    partnerSwiperRef.current = new Swiper(".partnerSwiper", {
      slidesPerView: 2,
      spaceBetween: 12,
      speed: 4000,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".partner-pagination",
        clickable: true,
      },
      breakpoints: {
        480: { slidesPerView: 3, spaceBetween: 16 },
        640: { slidesPerView: 4, spaceBetween: 20 },
        768: { slidesPerView: 5, spaceBetween: 24 },
        1024: { slidesPerView: 6, spaceBetween: 30 },
        1280: { slidesPerView: 7, spaceBetween: 32 },
      },
    });

    // 3. Students Swiper
    if (studentsSwiperRef.current) studentsSwiperRef.current.destroy(true, true);
    studentsSwiperRef.current = new Swiper(".studentsSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      },
    });

    // Bind students custom navigation
    const prevBtn = document.querySelector(".students-prev");
    const nextBtn = document.querySelector(".students-next");
    if (prevBtn && nextBtn && studentsSwiperRef.current) {
      prevBtn.addEventListener("click", () => studentsSwiperRef.current.slidePrev());
      nextBtn.addEventListener("click", () => studentsSwiperRef.current.slideNext());
    }

    return () => {
      // Cleanup
      if (heroSwiperRef.current) heroSwiperRef.current.destroy(true, true);
      if (partnerSwiperRef.current) partnerSwiperRef.current.destroy(true, true);
      if (studentsSwiperRef.current) studentsSwiperRef.current.destroy(true, true);
    };
  }, []);

  return (
    <>
      {/* Global Styles */}
      <style>
        {`
          body {
            font-family: "Poppins", sans-serif;
          }
          h1, h2, h3, h4, h5, h6, .font-heading {
            font-family: "Nunito", sans-serif;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .animate-fadeIn {
            animation: fadeIn 0.35s ease;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .swiper-button-next, .swiper-button-prev {
            color: #fff;
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(6px);
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 9999px;
            transition: all 0.2s ease;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: rgba(255,255,255,0.35);
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 1rem;
            font-weight: 700;
          }
          .swiper-pagination-bullet {
            background: #fff;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: #fff;
            opacity: 1;
            width: 1.5rem;
            border-radius: 0.375rem;
            transition: all 0.3s ease;
          }
          .life-scroll {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
          .life-scroll > .slide-item {
            scroll-snap-align: start;
            flex-shrink: 0;
            width: 85%;
            max-width: 900px;
          }
          @media (min-width: 640px) {
            .life-scroll > .slide-item { width: 80%; }
          }
          @media (min-width: 1024px) {
            .life-scroll > .slide-item { width: 75%; }
          }
          .partnerSwiper {
            overflow: visible !important;
            padding: 8px 0;
          }
          .partnerSwiper .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            padding: 8px;
          }
          .partnerSwiper .swiper-slide img {
            max-height: 70px;
            max-width: 160px;
            width: auto;
            object-fit: contain;
            filter: grayscale(0%);
            transition: transform 0.3s ease, filter 0.3s ease;
            opacity: 0.9;
          }
          .partnerSwiper .swiper-slide img:hover {
            transform: scale(1.08);
            filter: grayscale(0%);
            opacity: 1;
          }
          .partner-pagination {
            position: relative !important;
            margin-top: 20px !important;
          }
          .partner-pagination .swiper-pagination-bullet {
            background: #ccc;
            opacity: 1;
          }
          .partner-pagination .swiper-pagination-bullet-active {
            background: #f26522;
            width: 1.5rem;
            border-radius: 0.375rem;
          }
          @media (min-width: 640px) {
            .partnerSwiper .swiper-slide img {
              max-height: 80px;
              max-width: 180px;
            }
          }
          @media (min-width: 1024px) {
            .partnerSwiper .swiper-slide img {
              max-height: 90px;
              max-width: 200px;
            }
          }
          .studentsSwiper .swiper-slide {
            height: auto;
          }
          .studentsSwiper .swiper-slide img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            border-radius: 1rem;
          }
          @media (min-width: 640px) {
            .studentsSwiper .swiper-slide img {
              height: 320px;
            }
          }
          @media (min-width: 1024px) {
            .studentsSwiper .swiper-slide img {
              height: 360px;
            }
          }
        `}
      </style>

      {/* Render all sections */}
      <TopBar />
      <Header />
      <HeroSection />
      <RankSection />
      <AboutSection />
      <CampusSwiper />
      <HighlightsGrid />
      <InternshipSection />
      <LifeAtTulas />
      <StatsHighlight />
      <SpecializationsSection />
      <CTASection />
      <PartnersSection />
      <StudentsSection />
      <FAQSection />
      <Footer />
    </>
  );
}