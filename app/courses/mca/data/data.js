import mca from "../../../../public/courses/mca/mca.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../public/bsc-agriculture/Crousel/Program.png";
import mcaDocument from "../../../../public/courses/mca/MCA.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import Priya from "../../../../public/courses/mca/facultyData/PriyaMatta.webp";
import PriyaResume from "../../../../public/courses/mca/facultyData/PriyaResume.pdf";
import RASHMI from "../../../../public/courses/mca/facultyData/RASHMI.webp";
import RASHMIResume from "../../../../public/courses/mca/facultyData/RASHMIResume.pdf";
import sidhartha from "../../../../public/courses/mca/facultyData/sidhartha.webp";
import sidharthaResume from "../../../../public/courses/mca/facultyData/sidharthaResume.pdf";
import RakeshKumar from "../../../../public/courses/mca/facultyData/RakeshKumar.webp";
import RakeshKumarResume from "../../../../public/courses/mca/facultyData/RakeshKumarResume.pdf";
import ShikaTayal from "../../../../public/courses/mca/facultyData/ShikaTayal.webp";
import ShikaTayalResume from "../../../../public/courses/mca/facultyData/ShikaTayalResume.pdf";
import Musheer from "../../../../public/courses/mca/facultyData/Musheer.webp";
import MusheerResume from "../../../../public/courses/mca/facultyData/MusheerResume.pdf";
import SanjeevKumnar from "../../../../public/courses/mca/facultyData/SanjeevKumnar.webp";
import SanjeevKumnarResume from "../../../../public/courses/mca/facultyData/SanjeevKumnarResume.pdf";
import Link from "next/link";

export const images = [
  mca,
  // Add more image paths as needed
];
export const content = (
  <>
    The Master of Computer Applications (MCA) is a postgraduate pathway to
    advanced, specialized tech roles for aspiring tech leaders, offering
    in-depth training in software development, data science, AI, and
    cybersecurity. With fast growing global digitalization, the demand for
    computer applications specialists is constantly expanding.
    <br />
    <br />
    The Department of Computer Applications provides a comprehensive
    understanding of important areas of computer science and its applications
    providing them professional skills in software development. It assists
    students in developing practical abilities to solve a variety of
    difficulties that may arise during computer programming and their
    applications. In addition, the post graduates of MCA also find a way to move
    to the education sector.
    <br />
    <br />
    With an MCA, you’re not just keeping up with technology—you’re leading it.
    Step into a future filled with opportunities, and make your mark in the
    ever-expanding digital world.
  </>
);
export const items = [
  {
    title: "USPs",
    description: [
      "Here’s why Tula’s Institute stands out as the ideal place to pursue your Master of Computer Applications:",
      <ul className="list-disc ml-5">
        <li>
          <strong>Industry-Aligned Curriculum:</strong>
          <br />
          Learn the latest skills in AI, machine learning, cloud computing, and
          software development with an industry-informed syllabus.
        </li>
      </ul>,
    ],
    image: USP,
    points: [
      <ul className="list-disc ml-5">
        <li>
          <strong>Hands-On Learning:</strong>
          <br />
          Gain real-world experience through projects, internships, and advanced
          lab facilities.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Expert Faculty:</strong>
          <br />
          Learn from seasoned educators with deep industry and research
          backgrounds.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Strong Industry Connections:</strong>
          <br />
          Benefit from internships and networking with top tech companies for
          career advancement.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Career Support:</strong>
          <br />
          Access personalized career counseling, resume workshops, and interview
          preparation.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Entrepreneurial Focus:</strong>
          <br />
          Nurture your innovation with startup incubation and mentorship.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Holistic Development: </strong>
          <br />
          Engage in extracurriculars, soft skills training, and leadership
          opportunities.
        </li>
      </ul>,
      <italic className="italic font-black">
        "Join Tula’s Institute and propel your tech career to new heights!"
      </italic>,
    ],
  },
  {
    title: "Course Outcomes",
    description: [<Link href={mcaDocument}>MCA</Link>],
    image: Course,
  },
  {
    title: "Program Outcomes",
    description: [
      "PO1 (Foundation Knowledge): Apply knowledge of mathematics, programming logic and coding fundamentals for solution architecture and problem solving.",
      "PO2 (Problem Analysis): Identify, review, formulate and analyse problems for primarily focussing on customer requirements using critical thinking frameworks.",
    ],
    image: Program,
    points: [
      "PO3 (Development of Solutions): Design, develop and investigate problems with as an innovative approach for solutions incorporating ESG/SDG goals.",
      "PO4 (Modern Tool Usage): Select, adapt and apply modern computational tools such as development of algorithms with an understanding of the limitations including human biases.",
      "PO5 (Individual and Teamwork): Function and communicate effectively as an individual or a team leader in diverse and multidisciplinary groups. Use methodologies such as agile.",
      "PO6 (Project Management and Finance): Use the principles of project management such as scheduling, work breakdown structure and be conversant with the principles of Finance for profitable project management.",
      "PO7 (Ethics): Commit to professional ethics in managing software projects with financial aspects. Learn to use new technologies for cyber security and insulate customers from malware.",
      "PO8 (Life-long learning): Change management skills and the ability to learn, keep up with contemporary technologies and ways of working.",
    ],
  },
  {
    title: "Program Educational Outcomes",
    description: [
      "PEO 1: Ethics and Social Responsibility: A sound graduate with ethical values, integrity, and sense of social responsibility shall apply technical skills to serve the society and the industry with positive benefit.",
      "PEO 2: Innovative Problem Solving: Graduates will have sound problem-solving abilities and the ability to apply innovative, thinking techniques in their work toward designing, developing, and implementing software solutions for problems of increasingly complex change in a rapidly dynamic technological landscape.",
      "PEO 3: Global Competence and Lifelong Learning: Graduates will be equipped with a comprehensive education in computer applications, meeting the international standard, and continue a process of learning about new technologies and trends over time.",
      "PEO 4: Industry Collaboration and Research Excellence: All graduates will enjoy partnerships with the software industries and research institutes, thus having hands-on experiences in projects and research on advanced technology areas, improving their skills in collaborative and independent research.",
    ],
    image: Course,
  },
  {
    title: "Program Specific Outcomes",
    description: [
      "PSO 1: Understand and apply the computing techniques, mathematical principles and industrial concepts to effectively tackle real-time industrial challenges.",
      "PSO 2: Analyze, design, develop, test and maintain the software applications with latest computing tools and technologies.",
      "PSO 3: Equipped with project management skills to plan, execute, and deliver software projects effectively, considering factors such as scope, time, cost, quality, and risk.",
    ],
    image: Course,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To become centre of excellence in software development and research.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>To induce ethical values and spirit of social commitment.</li>
          <li>
            To provide a learning ambience to enhance innovations and problem
            solving skills.
          </li>
          <li>
            To provide a comprehensive education, benchmarked against the
            highest global standards.
          </li>
          <li>
            To collaborate with software industry and adopting technology for
            achieving quality of technical education.
          </li>
          <li>
            To promote research based projects / activities in the emerging
            areas of technology convergence.
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
  { title: "From the Desk of HOD" },
];

export const selectedCardTable = [
  {
    sno: 1,
    course: "MCA",
    duration: "2 years",
    eligibility:
      "Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree. Passed B.Sc./ B.Com./ B.A. with Mathematics at 10+2 Level or at Graduation Level (with additional bridge Courses as per the norms of the concerned University). Obtained at least 50% marks (45% marks in case of candidates belonging to reserved category) in the qualifying Examination.",
  },
];
export const semesterData = [
  {
    semester: "MCA I SEMESTER",
    subjects: [
      {
        code: "CAT-001",
        title: "Introduction of Information Technology",
      },
      {
        code: "CAT-002",
        title: "Programming Fundamentals With ‘C’",
      },
      {
        code: "CAT-003",
        title: "Fundamental of Web Technology",
      },
      { code: "CAT-004", title: "Discrete Structures" },
      { code: "CAT-005", title: "Database Management System" },
      { code: "CAT-006", title: "Operating System" },
      { code: "CAT-007", title: "Computer Organization" },
      { code: "CAT-008", title: "Python Programming" },
      { code: "PRACTICAL" },
      { code: "CAP-001", title: "Database Management System" },
      { code: "CAP-002", title: "Operating System" },
      { code: "CAP-003", title: "Computer Organization" },
      {
        code: "AHP-303",
        title: "Technical Communication Skills",
      },
    ],
  },
  {
    semester: "MCA II SEMESTER",
    subjects: [
      {
        code: "CAT-009",
        title: "Computer Based Statistical and Numerical Techniques",
      },
      {
        code: "CAT-010",
        title: "Data Structure and Analysis of Algorithms",
      },
      {
        code: "CAT-011",
        title: "Object Oriented Programming with Java",
      },
      { code: "CAT-012", title: "Computer Networks" },
      { code: "CAT-013", title: "Artificial Intelligence" },
      {
        code: "AHT-304",
        title: "Accounting and Financial Management (Non Credit)",
      },
      { code: "PRACTICAL" },
      {
        code: "CAP-004",
        title: "Data Structure and Analysis of Algorithms",
      },
      {
        code: "CAP-005",
        title: "Object Oriented Programming with Java",
      },
      { code: "CAP-006", title: "Computer Networks" },
      { code: "CAP-007", title: "Artificial Intelligence" },
    ],
  },
  {
    semester: "MCA III SEMESTER",
    subjects: [
      { code: "CAT-014", title: "Graph Theory" },
      { code: "CAT-015", title: "Software Engineering" },
      { code: "CAT-0XX", title: "Program Elective 1" },
      { code: "Program Elective" },
      { code: "CAT-16", title: "Big Data Analytics" },
      { code: "CAT-17", title: "Soft Computing" },
      { code: "CAT-18", title: "Internet of Things" },
      { code: "CAT-19", title: "Compiler Design" },
      { code: "CAT-20", title: "Cloud Computing" },
      { code: "CAT-21", title: "Multimedia" },
      { code: "AHT-313", title: "Universal Human Values" },
      {
        code: "MCAT-305",
        title: "Combinatorics and Graph Theory",
      },
      { code: "MCAT-306", title: "Universal Human Values" },
      {
        code: "MCAT-307",
        title: (
          <>
            Any Online Course specified by AICTE on latest technology
            <br />
            Not Credit Course – must be completed (in 2nd Year)
            <br />
            to award the MCA Degree
          </>
        ),
      },

      { code: "PRACTICAL" },
      { code: "CAP-008", title: "Software Engineering" },
      { code: "CAP-009", title: "Seminar" },
      { code: "CAP-010", title: "Minor Project" },
    ],
  },
  {
    semester: "MCA IV SEMESTER",
    subjects: [
      { code: "CAT-022", title: "Network Security" },

      { code: "MCAT 42X", title: "Program Elective 2" },

      { code: "Program Elective 2" },
      { code: "CAT-023", title: "Simulation & Modeling" },
      { code: "CAT-024", title: "Neural Networks" },
      { code: "CAT-025", title: "Advanced Java" },
      { code: "CAT-026", title: "Data Science" },
      { code: "CAT-027", title: "Machine Learning" },
      { code: "MCAT 43X", title: "Program Elective 3" },
      { code: "Program Elective 3" },
      { code: "CAT-028", title: "Digital Image Processing" },
      {
        code: "CAT-029",
        title: "Computer Graphics & Multimedia",
      },
      {
        code: "CAT-030",
        title: "Software Testing & Quality Assurance",
      },
      { code: "CAT-031", title: "Block Chain Architecture" },
      { code: "CAT-032", title: "Natural Language Processing" },
      { code: "MCAP 403", title: "Major Project" },
      { code: "PRACTICAL" },
      { code: "CAP-011", title: "Network Security" },
      { code: "CAP-012", title: "Open Elective 2" },
      { code: "CAP 013", title: "Major Project" },
    ],
  },
];

export const facultyData = [
  {
    name: "Dr Priya Matta",
    designation: "Associate Professor & HoD",
    education: "Ph.D.",
    publications: "67",
    experience: "20",
    imageUrl: Priya,
    resume: PriyaResume,
  },

  {
    name: "Dr. Sanjeev Kumar",
    designation: "Professor",
    education: "Ph.D.",
    publications: "61",
    experience: "18",
    imageUrl: SanjeevKumnar,
    resume: SanjeevKumnarResume,
  },
  {
    name: "Dr Musheer Vaqur",
    designation: "Associate Professor",
    education: "Ph.D.",
    publications: "24",
    experience: "18",
    imageUrl: Musheer,
    resume: MusheerResume,
  },
  {
    name: "Dr. Shikha Tayal Aeron",
    designation: "Assistant Professor",
    education: "Ph.D.",
    publications: "6",
    experience: "13",
    imageUrl: ShikaTayal,
    resume: ShikaTayalResume,
  },
  {
    name: "Mr. Rakesh Kumar",
    designation: "Assistant Professor",
    education: "M.Tech Ph.D. (P)",
    publications: "10",
    experience: "19",
    imageUrl: RakeshKumar,
    resume: RakeshKumarResume,
  },
  {
    name: "Mr. Siddharth Sharma",
    designation: "Assistant Professor",
    education: "MCA",
    publications: "",
    experience: "13",
    imageUrl: sidhartha,
    resume: sidharthaResume,
  },
  {
    name: "Ms. Rashmi Mishra",
    designation: "Assistant Professor",
    education: "MCA",
    publications: "2",
    experience: "8",
    imageUrl: RASHMI,
    resume: RASHMIResume,
  },
];
export const hod = [
  {
    name: "Dr Priya Matta",
    email: "mca.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Computer Applications",
    imageUrl: Priya, // Replace with the actual image path
  },
];
export const HODcontent = (
  <>
    Greetings! On behalf of the faculty members, staff, and students of the
    Department of Computer Application at Tula’s Institute, Dehradun, I welcome
    you all to the creative world of computer application. The Department has a
    team of well qualified and experienced faculty members. The Department lays
    maximum stress on student outcomes through industry based curriculum,
    effective teaching learning methods and counselling of students through
    Mentor-Mentee Program.
    <br />
    <br />I believe the computer application discipline has been widely
    recognized as an essential source and technique for the advancements in
    software industry. We prepare our students to meet increasing global
    challenges of ever evolving technologies so as to make them acceptable to
    both industries and higher institution of learning. In Tula’s Institute all
    the students get the opportunity to excel in their academic activities.
  </>
);
export const itemsClubs = [
  {
    title: "Opportunities in Computer Application",
    description: [
      "Some job titles are listed here:",
      "Computer Programmer",
      "Software Developer",
      "Web Designer",
      "Database Administrator",
      "Web/Multimedia Programmer",
      "Software Consultant",
      "Technical Writer",
      "System Analyst",
    ],
    image: USP,
  },
  {
    title: "Beyond the Curriculum – More Than Just a Degree",
    description: [
      "At Tula’s Institute, the MCA program offers more than just academic knowledge, preparing you to be a well-rounded tech leader:",
      <ul className="list-disc ml-5">
        <li>
          <strong>Internships & Industry Projects:</strong>
          <br />
          Gain hands-on experience working with top tech companies on real-world
          challenges.
        </li>
      </ul>,
    ],
    image: Course,
    points: [
      <ul className="list-disc ml-5">
        <li>
          <strong>Add-On Certifications:</strong>
          <br />
          Stay ahead with certifications in emerging technologies like
          Blockchain, Data Analytics, and Cloud Computing.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Industrial Visits: </strong>
          <br />
          Get a firsthand look at cutting-edge technology during guided visits
          to major IT companies.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Entrepreneurial Focus:</strong>
          <br />
          Access mentorship, resources, and incubation support to launch your
          own tech startup.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Soft Skills Development:</strong>
          <br />
          Enhance leadership, communication, and problem-solving skills through
          workshops and activities.
        </li>
      </ul>,
      <italic className="italic font-black">
        Tula’s MCA program prepares you for both technical expertise and
        professional success in the tech industry.
      </italic>,
    ],
  },
  {
    title: "Career Prospectus – A Future Filled with Limitless Potential",
    description: [
      "An MCA degree from Tula’s Institute unlocks a world of rewarding, high-paying career opportunities in the rapidly evolving tech industry:",
      <ul className="list-disc ml-5">
        <li>
          <strong>Software Engineer/Developer:</strong>
          <br />
          Design and develop software solutions for various platforms and
          industries.
        </li>
      </ul>,
    ],
    image: Program,
    points: [
      <ul className="list-disc ml-5">
        <li>
          <strong>Data Scientist/Analyst: </strong>
          <br />
          Analyze big data to drive informed decisions in sectors like finance,
          healthcare, and retail.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Cybersecurity Specialist: </strong>
          <br />
          Protect sensitive data and networks from cyber threats in an
          increasingly digital world.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>AI/ML Expert:</strong>
          <br />
          Develop intelligent systems and applications that learn and adapt from
          data.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>System Architect: </strong>
          <br />
          Design large-scale IT systems and manage complex projects for seamless
          integration.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>IT Consultant: </strong>
          <br />
          Optimize IT infrastructure and digital strategies for organizations
          across industries.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Tech Entrepreneur:</strong>
          <br />
          Launch your own tech venture or offer consultancy services in the tech
          space.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Further Education & Research:</strong>
          <br />
          Pursue advanced degrees or research, leading to roles in academia or
          specialized tech sectors.
        </li>
      </ul>,
      "Tula’s MCA program equips you with the skills, insights, and leadership potential to excel in these dynamic fields and shape the future of technology.",
      <italic className="italic font-black">
        "The tech world is waiting—are you ready to lead?"
      </italic>,
    ],
  },
];
