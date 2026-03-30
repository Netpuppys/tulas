"use client";

import { useState } from "react";
import Image from "next/image";

const data = {
  ug: {
    tabs: ["B Tech", "BBA", "BCA", "BCom", "B.Com Hons.", "BSc Agriculture", "B.Pharma", "BAJMC", "BA (Hons.) JMC", "Applied Sci. & Humanities",],
    courses: {
      "B Tech": [
        {
          title: "Civil Engineering",
          img: "/btechimage/btechspecial.jpg",
          desc: "Design and build the infrastructure that powers cities and communities. Develop expertise in structural design, construction management and sustainable development to lead large-scale projects with precision.",
        },
        {
          title: "Computer Science & Engineering (CSE)",
          img: "/btechimage/btechspecial1.jpg",
          desc: "Step into the world of computing, software development, and advanced technologies. The programme focuses on programming, system architecture, and emerging technologies, enabling students to design scalable digital solutions and build careers in software, product development, and technology innovation.",
        },
        {
          title: "Artificial Intelligence & Machine Learning (AI & ML)",
          img: "/btechimage/btechspecial2.jpg",
          desc: "Explore technologies that are shaping the future of automation and intelligent systems. The programme focuses on machine learning, deep learning, neural networks, and data-driven decision systems, enabling students to develop smart technologies used across industries.",
        },
        {
          title: "Data Science (AI Integrated)",
          img: "/btechimage/btechspecial3.jpg",
          desc: "Learn to turn complex data into meaningful insights that drive decision-making. The programme covers data analytics, machine learning, visualization, and statistical modelling, equipping students to solve real-world problems across industries such as technology, finance, healthcare, and business.",
        },
        {
          title: "Cyber Security (AI Integrated)",
          img: "/btechimage/btechspecial4.jpg",
          desc: "As digital systems expand, protecting data and networks has become critical. This programme provides practical knowledge in ethical hacking, network security, digital forensics, and cyber defence strategies to prepare students for roles that safeguard digital infrastructure and information systems.",
        },
        {
          title: "Full Stack Development (AI Integrated)",
          img: "/btechimage/btechspecial5.jpg",
          desc: "The program is designed to develop expertise in full stack development with AI integrated across application design and development. The curriculum covers data structures, front-end and back-end development, databases, cloud computing and software engineering, along with machine learning, generative AI and AI-enabled application development.",
        },
        {
          title: "Electronics & Communication Engineering (ECE)",
          img: "/btechimage/btechspecial6.jpg",
          desc: "Build expertise in electronic systems, communication networks, and embedded technologies. The programme prepares students to work across telecommunications, consumer electronics, and emerging fields such as IoT and smart communication systems.",
        },
        {
          title: "Electrical & Electronics Engineering (EEE)",
          img: "/btechimage/btechspecial7.jpg",
          desc: "Gain a strong foundation in power systems, electrical machines, and modern energy technologies. Students learn to work with smart grids, automation systems, and industrial electrical solutions that power industries and infrastructure.",
        },
        {
          title: "Mechanical Engineering (ME)",
          img: "/btechimage/btechspecial4.jpg",
          desc: "Develop the engineering principles that drive machines, manufacturing, and automation. The programme covers thermodynamics, design engineering, manufacturing processes, and robotics, preparing students for careers across automotive, production, aerospace, and industrial sectors.",
        },
      ],
      BBA: [
        {
          title: "Digital Marketing (AI Integrated)",
          img: "/graduate-school-of-business-v2/mba/specialdesktop2.jpg",
          desc: "Develop an understanding of digital platforms, social media, content strategies and online consumer engagement. Learn how businesses use digital channels for communication, campaign planning and performance evaluation. Gain exposure to evolving digital trends and tools that support brand visibility and customer interaction in the digital ecosystems",
        },
        {
          title: "Business Analytics (AI Integrated)",
          img: "/graduate-school-of-business-v2/mba/specialdesktop4.png",
          desc: "Develop the ability to analyse, interpret and use data for effective business decision-making. Learn basic analytical tools, reporting techniques and data-driven approaches. Understand how organisations use data insights to improve performance, identify trends and support strategic planning across business functions.",
        },
      ],
      BCA: [
        {
          title: "Full Stack Software Development (AI Integrated)",
          img: "/bcaimage/bcaimg.png",
          desc: "This specialisation focuses on developing advanced expertise in full stack software engineering with AI integrated across application architecture. The curriculum covers advanced front-end and back-end frameworks, system design, scalable architectures, cloud deployment and software engineering practices, along with AI-driven application development and automation.",
        },
        {
          title: "Artificial Intelligence & Machine Learning (AI & ML)",
          img: "/bcaimage/bcaimg3.png",
          desc: "This specialisation focuses on developing advanced knowledge and application of artificial intelligence and machine learning for complex problem-solving. The curriculum covers advanced machine learning algorithms, deep learning, data modelling, optimisation techniques and AI system development.",
        },
      ],
      BCom: [
        {
          title: "B.Com",
          img: "/graduate-school-of-business/bcom/specialdesktop2.png",
          desc: "B.Com is 3 years. Build a sharp foundation in finance, accounting, and business strategy with real-world exposure that prepares you for corporate careers",
        },
      ],
      "B.Com Hons.": [
        {
          title: "B.Com (Hons.)",
          img: "/graduate-school-of-business/bcom/specialdesktop1.png",
          desc: "The B.Com (Hons.) program extends this learning with advanced coursework, analytical depth and a deeper understanding of financial systems and business strategy. Built on the strength of NAAC A+ accreditation and an outcome-driven academic framework, the program combines academic learning with practical exposure, case-based learning and industry-relevant training.",
        },
      ],
      "BSc Agriculture": [
        {
          title: "BSc Agriculture",
          img: "/graduate-school-of-business/bcom/specialdesktop5.png",
          desc: "A future-focused agriculture degree rooted in science and field application Built on the strength of NAAC A+ accreditation and an outcome-driven academic framework, the program combines academic learning with practical exposure, case-based learning and industry-relevant training.",
        },
      ],
       "B.Pharma": [
        {
          title: "B.Pharma",
          img: "/bpharmaimage/bpharm.png",
          desc: "The B.Pharm program at Tulas is designed for students who aspire to build careers in pharmaceutical sciences and the healthcare sector. The program focuses on developing a strong foundation in pharmaceutical chemistry, pharmacology, pharmaceutics, and drug formulation.",
        },
      ],
      "BAJMC": [
        {
          title: "BAJMC",
          img: "/graduate-school-of-business/bcom/specialdesktop5.png",
          desc: "The BAJMC (3-year) program at Tulas, along with a 4-year honors, is designed to build a strong foundation in journalism, media and communication while preparing students for the evolving media landscape.",
        },
      ],
        "BA (Hons.) JMC": [
        {
          title: "BA (Hons.) JMC",
          img: "/graduate-school-of-business/bcom/specialdesktop6.png",
          desc: "The program focuses on developing creative thinking, storytelling ability and communication skills across multiple media platforms. ",
        },
      ],
      "Applied Sci. & Humanities": [
        {
          title: "Applied Sci. & Humanities",
          img: "/graduate-school-of-business/bcom/specialdesktop.png",
          desc: "Department of Applied Sciences and Humanities at Tula's Institute, Dehradun, is a foundational learning and interdisciplinary growth hub. The Department caters to introductory science courses like Physics, Chemistry, Mathematics, Environmental studies, and English ",
        },
      ],
    },
  },
  pg: {
    tabs: ["M.Tech", "MBA", "MCA"],
    courses: {
      MBA: [
        {
          title: "Marketing",
          img: "/graduate-school-of-business-v2/mba/specialdesktop.jpg",
          desc: "Master brand strategy, consumer behaviour and market intelligence. Learn how to position products, scale businesses and drive measurable growth across competitive markets.",
        },
        {
          title: "Human Resource Management (HRM)",
          img: "/graduate-school-of-business-v2/mba/specialdesktop1.jpg",
          desc: "Learn to build high-performance teams, manage talent strategy and shape organisational culture.",
        },
        {
          title: "International Business (IB)",
          img: "/graduate-school-of-business-v2/mba/specialdesktop3.jpg",
          desc: "Understand global trade, cross-border strategy and international market dynamics.",
        },
        {
          title: "Finance",
          img: "/graduate-school-of-business-v2/mba/specialdesktop5.jpg",
          desc: "Develop strong financial acumen in investment analysis, risk management and corporate finance.",
        },
        {
          title: "Agri-Business Management",
          img: "/graduate-school-of-business-v2/mba/specialdesktop4.png",
          desc: "The backbone of the Indian Economy - Agriculture and Agribusiness provide 54% of employment to the Indian Population. The recent spurt in full-time MBA specialization in the Agri-Business Management program offers a focus on the development of Agri-managerial skills, in the curriculum..",
        },
        {
          title: "Digital Marketing (AI Integrated)",
          img: "/graduate-school-of-business-v2/mba/specialdesktop2.jpg",
          desc: "Build expertise in performance marketing, social media strategy, SEO, analytics and digital brand management.",
        },
        {
          title: "Business Analytics (AI Integrated)",
          img: "/graduate-school-of-business-v2/mba/specialdesktop3.jpg",
          desc: "Built for individuals who aim to move beyond participation and into leadership. MBA at Tulas develops strategic thinking, analytical clarity and executive confidence preparing graduates to influence organisations, not just work within them.",
        },
      ],
      MCA: [
       {
          title: "Full Stack Software Development (AI Integrated)",
          img: "/bcaimage/bcaimg.png",
          desc: "This specialisation focuses on developing advanced expertise in full stack software engineering with AI integrated across application architecture. The curriculum covers advanced front-end and back-end frameworks, system design, scalable architectures, cloud deployment and software engineering practices, along with AI-driven application development and automation.",
        },
        {
          title: "Artificial Intelligence & Machine Learning (AI & ML)",
          img: "/bcaimage/bcaimg3.png",
          desc: "This specialisation focuses on developing advanced knowledge and application of artificial intelligence and machine learning for complex problem-solving. The curriculum covers advanced machine learning algorithms, deep learning, data modelling, optimisation techniques and AI system development.",
        },
      ],
      "M.Tech": [
        {
          title: "M.Tech Computer Science & Engineering",
          img: "/btechimage/btechspecial2.jpg",
          desc: "Step into the world of computing, software development, and advanced technologies. The programme focuses on programming, system architecture, and emerging technologies, enabling students to design scalable digital solutions and build careers in software, product development, and technology innovation.",
        },
        {
          title: "M.Tech Civil Engineering",
          img: "/btechimage/btechspecial.jpg",
          desc: "Design and build the infrastructure that powers cities and communities. Develop expertise in structural design, construction management and sustainable development to lead large-scale projects with precision.",
        },
        {
          title: "M.Tech Thermal",
          img: "/btechimage/btechspecial6.jpg",
          desc: "M.Tech in Thermal Engineering is a postgraduate program specializing in energy transfer, heat transfer, and fluid dynamics, often focusing on renewable energy and HVAC systems",
        },
      ],
    },
  },
    diploma: {
    tabs: ["Civil Engineering", "Mechanical Engineering", "Computer Science Engineering", "D.Pharma"],
    courses: {
      "Civil Engineering": [
        {
          title: "Civil Engineering",
          img: "/btechimage/btechspecial5.jpg",
          desc: "The Diploma in Civil Engineering is a three-year comprehensive program designed to equip students with the fundamentals of construction, design, and infrastructure development.",
        },
        
      ],
      "Mechanical Engineering": [
       {
          title: "Mechanical Engineering",
          img: "/bcaimage/bcaimg.png",
          img: "/graduate-school-of-business-v2/mba/specialdesktop.jpg",
          desc: "The Diploma in Mechanical Engineering is a three-year program designed to provide students with in-depth knowledge of mechanical systems, manufacturing processes, and engineering design.",
        },
      ],
      "Computer Science Engineering": [
        {
          title: "Computer Science Engineering",
          img: "/bcaimage/bcaimg.png",
          desc: "The Diploma program in Computer Science and Engineering program is a three-year undergraduate program. The Diploma program in Computer Science & Engineering stands out as one of the most coveted engineering program",
        },
        
      ],
       "D.Pharma": [
        {
          title: "D.Pharma",
          img: "/bpharmaimage/bpharm3.png",
          desc: "The Diploma in Pharmacy (D.Pharm.) is a two-year program designed to provide students with comprehensive knowledge of pharmaceutical sciences, drug formulation, and healthcare practices. With an intake capacity of 60 seats",
        },
        
      ],
    },
  },
};

export default function LandingProgramsSection() {
  const [activeMain, setActiveMain] = useState("ug");
  const [activeSub, setActiveSub] = useState(data.ug.tabs[0]);

  const current = data[activeMain];

  return (
    <section className="w-full bg-[#fbf4ee] py-10 flex justify-center">
      <div className="max-w-6xl w-full px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
          <span className="text-orange-500">Programs</span>{" "}
          <span className="text-gray-800">Offered</span>
        </h2>

        {/* MAIN TABS */}
        <div className="flex justify-center gap-3 mb-6 scrollbar-hide">
          {["ug", "pg" , "diploma"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveMain(item);
                setActiveSub(data[item].tabs[0]);
              }}
              className={`px-3 py-2 rounded font-medium transition ${
                activeMain === item
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              {item === "ug"
  ? "Undergraduate"
  : item === "pg"
  ? "Post-graduate"
  : "Diploma"}
            </button>
          ))}
        </div>

        {/* SUB TABS */}
        <div className="flex gap-3 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          {current.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSub(tab)}
              className={`px-4 py-2 rounded whitespace-nowrap transition ${
                activeSub === tab
                  ? "bg-white border border-orange-500 text-orange-500"
                  : "bg-gray-800 text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {current.courses[activeSub]?.map((course, i) => (
            <div
              key={i}
              className="w-[290px] bg-white rounded-2xl shadow-md p-4 flex-shrink-0 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] rounded-lg overflow-hidden mb-3">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Wrapper */}
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-orange-500 mb-1">
                  {course.title}
                </h3>

                {/* CLAMPED TEXT */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {course.desc}
                </p>

                <div className="text-xs text-gray-500 ">
                  <p>Eligibility: 10+2</p>
                  <p>
                    Duration:{" "}
                    {activeMain === "diploma"
                      ? "3 years"
                      : activeMain === "pg"
                      ? "4 years"
                      : "4 years"}
                  </p>
                </div>

                {/* Button at bottom */}
                <div className="mt-auto">
                  <button onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            } className="w-full border border-orange-500 text-orange-500 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
                    Explore Programme
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}