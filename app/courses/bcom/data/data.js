import bcom from "../../../../public/courses/bcom/bcom.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../public/bsc-agriculture/Crousel/Program.png";
import bcomDocument from "../../../../public/courses/bcom/Bcom.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import DrRanitKishore from "../../../../public/courses/bba/facultyData/DrRanitKishore.webp";
import abhishek from "../../../../public/courses/bcom/facultyData/abhishek.webp";
import MeghaAhuja from "../../../../public/courses/bcom/facultyData/MeghaAhuja.webp";
import Laxmi from "../../../../public/courses/bcom/facultyData/Laxmi.webp";
import Link from "next/link";

export const images = [
  bcom,
  // Add more image paths as needed
];
export const content = (
  <>
    This three-year Bachelor of Commerce (Hons.) program is designed to meet the
    needs of brilliant young people who is willing to work in accounting,
    commerce, banking, finance and insurance sector. The key objective of the
    B.Com (Hons.) program is to teach students the fundamentals of commerce and
    trade principles, which are critical for every kind of business. B.Com
    (Hons.) is the finest course option for a career in management, teaching,
    advertising, journalism, mass communication, law, design, public sector, and
    other fields. For CA and CS aspirants, B.Com (Hons.) is also the best
    alternative.
    <br />
    <br />
    Auditing and accounting firms, as well as banking and insurance industries,
    are already in high demand for B.Com (Hons.) graduates. They are hired at a
    junior level for various positions in the company’s finance, accounting,
    human resources, and administration. Banks, International corporations,
    finance business and auditing institutions are among the top employers of
    B.Com (Hons.)graduates.
    <br />
    <br />
    The main objectives of the program are:
    <br />
    <br />
    <ul className="ml-5 list-disc">
      <li>To comprehend and apply principles from several fields of trade.</li>
      <li>
        Discuss and put into practice the concepts and procedures of commerce.
      </li>
      <li>
        Use professional literature to improve research, communication, and
        presenting abilities.
      </li>
      <li>
        In certain areas of concentration, demonstrate a combination of
        knowledge and professional skills.
      </li>
    </ul>
  </>
);
export const items = [
  {
    title: "USP's",
    description: [
      "Fully equipped modern amphitheater kind classrooms for better reach and visibility.",
      "MoU’s with several companies to assist students in their needs of training, placement and internships.",
      "Collaborative and integrative pedagogy helps to adopt concepts quickly.",
    ],
    image: USP,
    points: [
      "Interaction based ‘Flipped Classroom’ Learning Methodology.",
      "Comprehend the theories and techniques used in successful organizations using “Case Based” teaching pedagogy.",
      "Prepare students for entrepreneurship and employment",
    ],
  },

  {
    title: "Program Outcomes",
    description: [
      "PO1 – Understand theoretical and practical concepts of accounting and commerce.",
      "PO2 – Develops professional communication skills among learners.",
      "PO3 – Enhances the capability of decision making at personal and professional levels.",
    ],
    image: Program,
    points: [
      "PO4 –Develops entrepreneurial skills amongst learners.",
      "PO5 – Aims for holistic development of learners.",
      "PO6 – Ability to understand, analyse and communicate global, economic, legal, and ethical aspects.",
    ],
  },
  {
    title: "Program Educational Objective",
    description: [
      "PEO1: To understand the concepts of Auditing and taxation and the other areas of Commerce.",
      "PEO2: To analyze financial statements to interpret organizational efficiency.",
      "PEO3: To apply critical thinking skills by identifying and analyzing accounting issues using therelevant accounting framework.",
    ],
    image: Program,
    points: [
      "PEO4: To execute the best practices of Accounting, taxation and Auditing",
    ],
  },
  {
    title: "Program Specific Outcome",
    description: [
      "PSO1: To be able to demonstrate knowledge in setting up a computerized accounting system.",
      "PSO2: To learn relevant accounting career skills, applying both quantitative and qualitative knowledge to their future careers in business.",
    ],
    image: Course,
    points: [
      "PSO3: To acquire practical skills to work as tax consultant, audit assistant and other financial supporting services.",
    ],
  },

  {
    title: "Course Outcomes",
    description: [<Link href={bcomDocument}>B.com</Link>],
    image: Course,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To pave the way for business administration, amalgamating human capital development, research and innovation with strong commitment towards society.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            To equip proteges with a comprehensive set of analytical, technical
            and behaviourial skills to navigate global business dynamism.
          </li>
          <li>
            To foster a culture of innovation and ethical practices encouraging
            individuals to be professional and responsible value creators for
            the society and stakeholders.
          </li>
          <li>
            To nurture entrepreneurial mind sets of aspirants by unleashing
            enterprising skills, opportunities and facilities.
          </li>
          <li>
            To contribute for sustainable future by industrial and institutional
            collaboration for contemporary research settings.
          </li>
          <li>
            To cultivate strong leadership traits among learners by bridging the
            gap between theory and practices through real world learning
            experiences.
          </li>
        </ul>
      </>
    ),
    image: DepartmentalMission,
  },
];
export const cards = [
  { title: "Eligibility" },
  { title: "Curriculum" },
  { title: "Senior Faculty" },
];
export const selectedCard1 = (
  <>
    {" "}
    <span className="font-[Arapey]">Admission Eligibility</span> <br />
    <ul className="list-disc ml-5 font-[TTChocolates] text-[14px] md:text-[23px] text-black">
      <li>
        Passed XII or equivalent course in any discipline from any recognized
        Board / Council / University with minimum 45% marks for general (open)
        category and 40% marks for students of SC and ST category.
      </li>
    </ul>
  </>
);
export const semesterData = [
  {
    semester: "I SEMESTER",
    subjects: [
      { code: "BCH 1.1", title: "Environmental Studies" },
      { code: "BCH 1.2", title: "Financial Accounting" },
      { code: "BCH 1.3", title: "Business Law" },
      { code: "BCH 1.4", title: "Micro Economics" },
      { code: "BCH 1.5", title: "Principles and Practices of Management" },
      { code: "BCH 1.6", title: "Business Environment" },
    ],
  },
  {
    semester: "II SEMESTER",
    subjects: [
      { code: "BCH 2.1", title: "Business Communication" },
      { code: "BCH 2.2", title: "Corporate Accounting" },
      { code: "BCH 2.3", title: "Corporate Laws" },
      { code: "BCH 2.4", title: "Macro Economics" },
      { code: "BCH 2.5", title: "Fundamentals of Financial Management" },
      { code: "BCH 2.6", title: "Business Statistics" },
    ],
  },
  {
    semester: "III SEMESTER",
    subjects: [
      { code: "BCH 3.1", title: "Human Resource Management" },
      { code: "BCH 3.2", title: "Cost Accounting" },
      { code: "BCH 3.3", title: "Cost Accounting" },
      { code: "BCH 3.4", title: "Marketing Management" },
      { code: "BCH 3.5", title: "Banking and Insurance" },
      { code: "BCH 3.6", title: "Entrepreneurship" },
      { code: "Lab Practice (For BCH 3.3)" }, // Lab Practice
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "BCH 4.1", title: "Income Tax Law and Practice" },
      { code: "BCH 4.2", title: "E – Commerce" },
      { code: "BCH 4.3", title: "Management Accounting" },
      { code: "BCH 4.4", title: "Organisation Behaviour" },
      { code: "BCH 4.5", title: "Indian Economy" },
      { code: "BCH 4.6", title: "Research Methods" },
      { code: "Practical (For BCH 4.2)" }, // Practical
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      { code: "BCH 5.1", title: "Goods and Services Tax (GST)" },
      { code: "BCH 5.2", title: "Project Planning and Management" },
      { code: "BCH 5.3", title: "Auditing" },
      { code: "BCH 5.4", title: "Financial Markets and Institutions" },
      {
        code: "BCH 5.5",
        title: (
          <>
            (i) Working Capital Management <br />
            (ii) Consumer Protection Laws
            <br />
            (iii) Advertising and Personal Selling <br />
            (iv) Computerised Accounting System <br />
            (v) Corporate Tax Planning
          </>
        ),
      },
      {
        code: "BCH 5.6",
        title: (
          <>
            (i) Working Capital Management <br />
            (ii) Consumer Protection Laws
            <br />
            (iii) Advertising and Personal Selling <br />
            (iv) Computerised Accounting System <br />
            (v) Corporate Tax Planning
          </>
        ),
      },
      {
        code: (
          <>
            *Elective Group I: Any two papers to be selected from the following
            <br />
            1. Working Capital Management
            <br />
            2. Consumer Protection Laws
            <br />
            3. Advertising and Personal Selling
            <br />
            4. Computerised Accounting System
            <br />
            5. Corporate Tax Planning
          </>
        ),
      },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      { code: "BCH 6.1", title: "International Business" },
      { code: "BCH 6.2", title: "Business Ethics and Corporate Governance" },
      {
        code: "BCH 6.3",
        title: (
          <>
            (i) Consumer Behaviour
            <br />
            (ii) Fundamentals of Investment <br />
            (iii) Industrial and Labour Laws <br />
            (iv) Marketing of Services <br />
            (v) Security Analysis and Portfolio Management
          </>
        ),
      },
      {
        code: "BCH 6.4",
        title: (
          <>
            (i) Consumer Behaviour <br />
            (ii) Fundamentals of Investment <br />
            (iii) Industrial and Labour Laws <br />
            (iv) Marketing of Services <br />
            (v) Security Analysis and Portfolio Management
          </>
        ),
      },
      { code: "BCH 6.5", title: "Project Report" },
      { code: "BCH 6.6", title: "Seminar and Comprehensive Viva-Voce" },
      {
        code: (
          <>
            **Elective Group II: Any two papers to be selected from the
            following
            <br />
            1. Consumer Behaviour
            <br />
            2. Fundamentals of Investment
            <br />
            3. Industrial and Labour Laws
            <br />
            4. Marketing of Services
            <br />
            5. Security Analysis and Portfolio Management
          </>
        ),
      },
    ],
  },
];

export const facultyData = [
  {
    name: "Dr Ranit Kishore",
    education: "B.Com, MBA , Ph.D.",
    experience: "23 Years",
    designation: "Dean",
    specialization: "Marketing and Information Technology",
    publications: "22+",
    imageUrl: DrRanitKishore, // Add the path for the image
  },
  {
    name: "Abhishek Chaukiyal",
    education: "M.Com. & M.B.A. (Finance) , P.hd. Pursuing",
    experience: "02 Years",
    designation: "Assistant Professor",
    specialization: "Finance & Accounts",
    publications: "",
    imageUrl: abhishek,
  },
  {
    name: "Megha Ahuja",
    education:
      "MBA (Educational Leadership) from Finland, M.Com., PGDBA (Finance), IPTE from Finland",
    experience: "7 Years",
    designation: "Assistant Professor (Finance)",
    specialization: "Finance",
    publications: "",
    imageUrl: MeghaAhuja,
  },
  {
    name: "Laxmi Negi",
    education: "MBA",
    experience: "6 Years",
    designation: "Assistant Professor",
    specialization: "Finance",
    publications: "",
    imageUrl: Laxmi,
  },
];
export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: ["VIBGYOR", "VICTREE", "COMPETERE"],
    image: USP,
  },
  {
    title: "Edge over others",
    description: [
      "A Versatile degree.",
      "Personal Development.",
      "Gateway to number of job opportunities in various fields of management.",
      "Provides in-depth knowledge of business at an early stage of career.",
    ],
    image: Course,
    points: [
      "Trains well in various qualities like entrepreneurial, leadership and management.",
      "Global accepted degree courses with wide range of possibilities.",
      "Dearth of management graduates in Middle East, Europe and Canada etc.",
      "Program acts as a precursor to management studies, and hence, it is updated regularly to incorporate major developments in the business world.",
      "Kick-start to a global, reputed and overgrowing career.",
    ],
  },
  {
    title: "Beyond Curriculum",
    description: [
      "Activities for various types of personal and professional development are a part of daily activity for the students at Tula’s. some of the activities which are regularly conducted for the students are:",
      "NCC",
      "NSS",
      "Picnics",
      "Educational Tours",
      "Industrial Visits",
      "Leisure Tours",
      "Seminars",
      "Workshops",
      "Symposiums",
      "Athletic meets",
      "Cultural Meets",
      "Sport Meets",
      "Debates",
      "Extempore",
      "Mock Interview sessions",
      "Business plan developments",
      "Theatre reviews",
      "Quizzes",
      "Social Work",
      "Volunteering in Social cause campaigns",
      "Conducting Events and Festivals",
      "And lots more to add to the overall bucket of beyond curriculum activities",
    ],
    image: Program,
  },
  {
    title: "Career Prospects",
    description: [
      "B.Com (Hons.) graduates are in great demand in accounting, auditing firms as well as banks and insurance companies. They are hired at junior level for various profiles in the finance, accounting, HR and administrative departments of the companies. Top recruiters of B.Com (Hons.) graduates include banks, multinational companies, finance firms and auditing agencies.  This is the reason that B.Com (Hons.) degree holders are among the highest employment rate category as compared to other bachelor’s degrees.",
    ],
    image: Course,
    points: [
      "The following are the major options of employment for B.Com (Hons.) graduates.",
      "Accountant",
      "Business Executive",
      "Accounts Manager",
      "Tax Consultant",
      "Financial Analyst",
      "Financial Consultant",
      "Account Executive",
      "Business Consultant",
    ],
  },
  // Add other carousel items here
];
