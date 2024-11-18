import mca from "../../../../public/courses/mca/mca.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../public/bsc-agriculture/Crousel/Program.png";
import mcaDocument from "../../../../public/courses/mca/MCA.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import drsanjeev from "../../../../public/courses/mca/facultyData/drsanjeev.webp";
import drahmad from "../../../../public/courses/mca/facultyData/drahmad.webp";
import RakeshKumar from "../../../../public/courses/mca/facultyData/RakeshKumar.webp";
import MohdMurshleen from "../../../../public/courses/mca/facultyData/MohdMurshleen.webp";
import GauravMittal from "../../../../public/courses/mca/facultyData/GauravMittal.webp";
import RashmiMishra from "../../../../public/courses/mca/facultyData/RashmiMishra.webp";
import nishagupta from "../../../../public/courses/mca/facultyData/nishagupta.webp";
import AnandKumar from "../../../../public/courses/mca/facultyData/AnandKumar.webp";
import Link from "next/link";

export const images = [
  mca,
  // Add more image paths as needed
];
export const content = (
  <>
    <center className="italic font-black">
      Elevate Your Career in Technology
    </center>
    <br />
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
    <italic className="italic font-black">
      "With an MCA, you’re not just keeping up with technology—you’re leading
      it. Step into a future filled with opportunities, and make your mark in
      the ever-expanding digital world.""
    </italic>
  </>
);
export const items = [
  {
    title: "USP - Your Pathway to Excellence in Technology",
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
      "Computational Knowledge :Apply knowledge of computing fundamentals, computing specialization, mathematics, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements.",
      "Problem Analysis :Identify, formulate, research literature, and solve complex computing problems reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines.",
    ],
    image: Program,
    points: [
      "Design /Development of Solutions :Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.",
      "Conduct investigations of complex Computing problems :Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern Tool Usage :Create, select, adapt and apply appropriate techniques, resources, and modern computing tools to complex computing activities, with an understanding of the limitations.",
      "Professional Ethics :Understand and commit to professional ethics and cyber regulations, responsibilities, and norms of professional computing practices.",
      "Life-long Learning :Recognize the need, and have the ability, to engage in independent learning for continual development as a computing professional.",
      "Project management and finance :Demonstrate knowledge and understanding of the computing and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Communication Efficacy :Communicate effectively with the computing community, and with society at large, about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions.",
      "Societal and Environmental Concern :Understand and assess societal, environmental, health, safety, legal, and cultural issues within local and global contexts, and the consequential responsibilities relevant to professional computing practices.",
      "Individual and Team Work :Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary environments.",
      "Innovation and Entrepreneurship :Identify a timely opportunity and using innovation to pursue that opportunity to create value and wealth for the betterment of the individual and society at large.",
    ],
  },
  {
    title: "Program Educational Outcomes",
    description: [
      "PEO 1: Achieve success in professional endeavors by acquiring a solid foundation in mathematical, computing, and engineering principles.",
      "PEO 2: Analyze real-world challenges, devise computing systems tailored to address them, ensuring technical robustness, economic viability, and socially acceptable.",
      "PEO 3: Exhibit professionalism, ethical attitude, communication skills, team work in their profession and adapt to current trends by engaging in lifelong learning.",
      "PEO4: Graduates will adhere to professional and ethical standards in their computing practices, recognizing the societal impact of their work and acting responsibly towards stakeholders.",
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
            To Collaborate with software industry and adopting technology for
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
      { code: "AHT-313", title: "Universal Human Values" },
      {
        code: "MCAT-305",
        title: "Combinatorics and Graph Theory",
      },
      { code: "MCAT-306", title: "Universal Human Values" },
      {
        code: "MCAT-307",
        title: "Any Online Course specified by AICTE on latest technology",
      },
      { code: "Program Elective" },
      { code: "CAT-16", title: "Big Data Analytics" },
      { code: "CAT-17", title: "Soft Computing" },
      { code: "CAT-18", title: "Internet of Things" },
      { code: "CAT-19", title: "Compiler Design" },
      { code: "CAT-20", title: "Cloud Computing" },
      { code: "CAT-21", title: "Multimedia" },
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
      { code: "MCAP 403", title: "Major Project" },
      { code: "MCAT 42X", title: "Program Elective 2" },
      { code: "MCAT 43X", title: "Program Elective 3" },
      { code: "Program Elective 2" },
      { code: "CAT-023", title: "Simulation & Modeling" },
      { code: "CAT-024", title: "Neural Networks" },
      { code: "CAT-025", title: "Advanced Java" },
      { code: "CAT-026", title: "Data Science" },
      { code: "CAT-027", title: "Machine Learning" },
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
      { code: "Program Elective" },
      { code: "CAP-011", title: "Network Security" },
      { code: "CAP-012", title: "Open Elective 2" },
      { code: "CAP 013", title: "Major Project" },
    ],
  },
];

export const facultyData = [
  {
    name: "Dr. Sanjeev Kumar",
    education: "Ph.D (CSE)",
    experience: "17 Years",
    designation: "Professor",
    publications: "51",
    imageUrl: drsanjeev, // Replace with the actual image path
  },
  {
    name: "Dr. Ahamd Jamal",
    education: "Ph.D",
    experience: "9 Years",
    designation: "Associate Professor",
    publications: "08",
    imageUrl: drahmad, // Replace with the actual image path
  },
  {
    name: "Mr. Rakesh Kumar",
    education: "M. Tech. CSE, Ph.D (P)",
    experience: "14 Years",
    designation: "Assistant Professor",
    publications: "7",
    imageUrl: RakeshKumar, // Replace with the actual image path
  },
  {
    name: "Mr. Mohd. Mursleen",
    education: "M. Tech.",
    experience: "4.5 Years",
    designation: "Assistant Professor",
    publications: "11",
    imageUrl: MohdMurshleen, // Replace with the actual image path
  },
  {
    name: "Mr. Gaurav Mittal",
    education: "M. Tech",
    experience: "3 Years",
    designation: "Assistant Professor",
    publications: "03",
    imageUrl: GauravMittal, // Replace with the actual image path
  },
  {
    name: "Ms. Rashmi Mishra",
    education: "M. Tech (CSE)",
    designation: "Assistant Professor",
    publications: "NA", // Not available in image
    imageUrl: RashmiMishra, // Replace with the actual image path
  },
  {
    name: "Ms. Nisha Gupta",
    education: "M. Tech (CSE)",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: nishagupta, // Replace with the actual image path
  },
];
export const hod = [
  {
    name: "Dr. Anand Kumar Gupta",
    email: "cse.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Computer Applications",
    imageUrl: AnandKumar, // Replace with the actual image path
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
