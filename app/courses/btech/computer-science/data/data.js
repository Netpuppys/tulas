import computerScience from "../../../../../public/courses/btech/computer-science/computer-science.png";
import USP from "../../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../../public/bsc-agriculture/Crousel/Program.png";
import cseDocument from "../../../../../public/courses/btech/computer-science/CSE.pdf";
import DepartmentalVission from "../../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../../public/courses/bjmc/departmentalMission.png";
import AnandKumar from "../../../../../public/courses/btech/computer-science/facultyData/AnandKumar.webp";
import CseDrishti from "../../../../../public/courses/btech/computer-science/CseDrishti.pdf";
import Link from "next/link";
export const images = [
  computerScience,
  // Add more image paths as needed
];
export const content = (
  <>
    Bachelor of Technology in Computer Science & Engineering (B.Tech. CSE) is
    one of the most sought-after engineering degrees. The program teaches
    students about computer applications and systems in order to prepare them
    for a career in the IT industry. In this program, students learn about
    programming languages, digital and analogue electronic equipment,
    networking, Design and development of computer software and hardware and
    various forms of communication engineering. Students who have analytical and
    logical reasoning skills, as well as an interest in software development,
    testing, and programming, should consider a career in this field.
    <br />
    <br />
    The scope of computer engineer is to work with software systems to nurture a
    business and meet the needs of new forms of innovation in the field of
    technology. According to the definition of computer science engineering,
    this branch of engineering also deals with designing and developing computer
    algorithms in order to achieve specific business goals. In addition,
    students who earn a degree from this institute will be prepared to work as
    designers, developers, solution integrators, network administrators,
    database administrators, domain consultants, and software engineers in some
    of the world’s most prestigious companies.
    <br />
    <br />
    The program emphasis on practical and hands-on training that strengthens the
    theoretical foundations of computer science engineering students. It is the
    job of a computer engineer/ software engineer to design and develop software
    to meet the needs of a business or individual. Today’s cutting-edge
    technologies can be traced back to CSE. These include Artificial
    Intelligence/Machine Learning/Big Data/Internet of Things/Quantum
    Computing/Block-Chain/Industry 4.0/AR & VR/Android-IOS development etc.
    <br />
    <br />
    Students at Tula’s, one of most prestigious engineering institute of the
    state , can earn their degree in four years with full-time study. Dedicated
    teaching & learning process and skill development are made possible by the
    state of the art infrastructure with ICT facilities. When it comes to study
    at Tula’s, quality is a top priority, so it gets done.
  </>
);
export const items = [
  {
    title: "USP's",
    description:
      "Practice based Curriculum to fit into the industry requirements.",
    image: USP,
  },
  {
    title: "Course Outcomes",
    description: <Link href={cseDocument}>B.Tech Computer Science</Link>,
    image: Course,
  },
  {
    title: "Program Outcomes",
    description:
      "Engineering Knowledge : Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    image: Program,
  },
  {
    title: "Program Specific Outcome",
    description:
      "PSO1 : Problem Solving Approach: Apply programming paradigms, architectural patterns, algorithmic techniques, relevant applications and augmentation to solve real-world complex problems.",
    image: Course,
  },
  {
    title: "Program Educational Objective",
    description:
      "PE01:Computer Science Professional : To equip students with theoretical and applied knowledge, enabling them to solve multidisciplinary real-life problems, becoming computer engineering professionals in programming skills  for technology development, deployment, and system implementation.",
    image: Program,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To become the centre of excellence in teaching, research and innovative practices for computing.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To provide a learning ambience to enhance programming skills for
            problem solving.
          </li>
          <li>
            To integrate the software industry and academia in order to utilize
            technology for research, innovation and entrepreneurship.
          </li>
          <li>
            To develop professionals with a solid foundation who can think
            outside the box to adapt green computing solution.
          </li>
          <li>
            To provide a comprehensive computing environment that meets the
            highest global standards for higher education and lifelong learning.
          </li>
          <li>
            To create ethical, skilled engineers through theoretical
            understanding and practical implementations.
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
    course: "B.Tech",
    duration: "4 years",
    eligibility:
      "Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject/ Computer Science/ Information Technology/ Informatics Practices/Agriculture/ Engineering Graphics/ Business Studies. Obtained at least 45% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together. OR Passed Diploma (in Engineering and Technology) examination with at least 45% marks (40% marks in case of candidates belonging to reserved category) subject to vacancies in the First Year, in case the vacancies at lateral entry are exhausted.",
  },
  {
    sno: 2,
    course: "B.Tech (Lateral Entry/Second Year)",
    duration: "3 years",
    eligibility:
      "a. Passed Diploma examination with at least 45% marks (40% marks in case of candidates belonging to reserved category) in ANY branch of Engineering and Technology. b. Passed B.Sc. Degree from a recognized University as defined by UGC, with at least 45% marks (40% marks in case of candidates belonging to reserved category) and passed 10+2 examination with Mathematics as a subject. c. Provided that the students belonging to B.Sc. Stream, shall clear the subjects Engineering Graphics/ Engineering Drawing and Engineering Mechanics of the First Year Engineering Programme along with the Second year subjects. d. Provided that the students belonging to B.Sc. Stream shall be considered only after filling the supernumerary seats in this category with students belonging to the Diploma stream. e. Passed D.Voc. Stream in the same or allied sector. f. In the above cases, a suitable bridge Courses, if required such as in Mathematics may be conducted.",
  },
];
export const semesterData = [
  {
    semester: "B.Tech I Sem.",
    subjects: [
      { code: "AHT-001", title: "Engineering Physics" },
      { code: "AHT-005", title: "Analytical Mathematics" },
      { code: "EET-001", title: "English for Communication" },
      { code: "CST-001", title: "Programming for Problem Solving" },
      { code: "AHT-004", title: "EVS" },
      { code: "PRACTICAL" },
      { code: "AHP-001", title: "Engineering Physics Lab" },
      { code: "EEP-001", title: "Basic Electrical Engineering Lab" },
      { code: "CSP-001", title: "Programming for Problem Solving Lab" },
      { code: "MEP-002", title: "Engineering Graphics & Design Lab" },
      { code: "AHP-003", title: "Introduction to Digital Marketing" },
      {
        code: "AHP-005",
        title: "Self Employment and Entrepreneurship Development",
      },
    ],
  },
  {
    semester: "B.Tech II Sem.",
    subjects: [
      { code: "AHT-002", title: "Engineering Chemistry" },
      { code: "AHT-003", title: "Introduction to Engineering Mathematics" },
      { code: "ECT-001", title: "Basic Electronics Engineering" },
      { code: "MET-001", title: "Basic Mechanical Engineering" },
      { code: "PRACTICAL" },
      { code: "AHP-002", title: "Engineering Chemistry Lab" },
      { code: "ECP-001", title: "Basic Electronics Engineering Lab" },
      { code: "MEP-001", title: "Basic Mechanical Engineering Lab" },
      { code: "MEP-003", title: "Workshop Practices Lab" },
      { code: "AHP-004", title: "Emerging Technologies in Engineering" },
      { code: "CSP-002", title: "Computer Application & IOT" },
      { code: "AHP-006", title: "English Language Lab" },
    ],
  },
  {
    semester: "B.Tech III Sem.",
    subjects: [
      { code: "ECT-003", title: "Digital Electronics" },
      { code: "AHT-007", title: "Technical Communications" },
      { code: "CST-002", title: "Discrete Structure" },
      { code: "CST-003", title: "Data Structure & Algorithms" },
      { code: "CST-004", title: "Object Oriented Programming" },
      { code: "CST-005", title: "Python Programming" },
      { code: "SAI-301", title: "Machine Learning & Pattern Recognition" },
      { code: "SCS-301", title: "Cyber Security & Investigation Techniques" },
      { code: "PRACTICAL" },
      { code: "CSP-003", title: "Data Structure & Algorithm Lab" },
      { code: "CSP-004", title: "Object Oriented Programming Lab" },
      { code: "CSP-005", title: "Python Programming Lab" },
      { code: "CSP-006", title: "Internship-I / Mini Project-I" },
    ],
  },
  {
    semester: "B.Tech IV Sem.",
    subjects: [
      { code: "AHT-006", title: "Advanced Applied Mathematics" },
      { code: "AHT-008", title: "Universal Human Values" },
      { code: "CST-006", title: "Cyber Security" },
      { code: "CST-007", title: "Computer Organization & Architecture" },
      { code: "CST-008", title: "Java Programming" },
      { code: "CST-009", title: "Formal Language & Automata Theory" },
      { code: "PRACTICAL" },
      { code: "CSP-007", title: "Computer Organization & Architecture Lab" },
      { code: "CSP-008", title: "Java Programming Lab" },
      { code: "CSP-009", title: "UNIX/LINUX Lab" },
    ],
  },
  {
    semester: "B.Tech V Sem.",
    subjects: [
      { code: "BCST-501", title: "Operating System" },
      { code: "BCST-502", title: "Computer Networks" },
      { code: "BCST-503", title: "Design and Analysis of Algorithms" },
      { code: "BCST-506", title: "Virtual Lab" },
      { code: "BCST-508", title: "Internship-II" },
      { code: "SAI-501", title: "Principles of Deep Learning" },
      { code: "SCS-501", title: "Risk Management" },
      { code: "BCST-504", title: "Departmental Elective" },
      { code: "BOCS-505", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BCSP-501", title: "Operating System Lab" },
      { code: "BCSP-502", title: "Computer Networks Lab" },
      { code: "BCSP-503", title: "Design and Analysis of Algorithms Lab" },
      { code: "Departmental Electives" },
      { code: "BCST-504(A)", title: "Network Architecture" },
      { code: "BCST-504(B)", title: "Pattern Recognition" },
      { code: "BCST-504(C)", title: "Internet and Web Technology" },
      { code: "BCST-504(D)", title: "Java Programming" },
      { code: "Open Electives" },
      { code: "BOCS-505(A)", title: "Principles of Programming Language" },
      { code: "BOCS-505(B)", title: "Modeling and Simulation" },
      { code: "BOCS-505(C)", title: "Cyber Security" },
      { code: "BOET-505(D)", title: "Innovation and Entrepreneurship" },
    ],
  },
  {
    semester: "B.Tech VI Sem.",
    subjects: [
      { code: "BCST-601", title: "Microprocessors and Applications" },
      { code: "BCST-602", title: "Compiler Design" },
      { code: "BCST-603", title: "Data Analytics" },
      { code: "BCST-604", title: "Departmental Elective" },
      { code: "BOCS-605", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BCSP-606", title: "Open Source Lab" },
      { code: "BCSP-607", title: "Minor Project" },
      { code: "BCSP-601", title: "Applications Lab" },
      { code: "BCSP-602", title: "Compiler Design Lab" },
      { code: "BCSP-603", title: "Data Analytics Lab" },
      { code: "Departmental Electives" },
      { code: "BCST-604(A)", title: "Graph Theory" },
      { code: "BCST-604(B)", title: "Data Mining" },
      { code: "BCST-604(C)", title: "Computer Graphics and Visualization" },
      { code: "BCST-604(D)", title: "Software Quality Management" },
      { code: "Open Electives" },
      { code: "BOCS-605(A)", title: "Digital Signal Processing" },
      { code: "BOCS-605(B)", title: "Machine Learning" },
      { code: "BOCS-605(C)", title: "Software Testing" },
      { code: "BOCS-605(D)", title: "Distributed Systems & Cloud Computing" },
    ],
  },
  {
    semester: "B.Tech VII Sem.",
    subjects: [
      { code: "BCST-701", title: ".NET Framework and Programming" },
      { code: "BCST-702", title: "Ad hoc & Wireless Networks" },
      { code: "BCST-703", title: "Departmental Elective" },
      { code: "BOCS-704", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BCSP-701", title: ".NET Framework and Programming Lab" },
      { code: "BCSP-702", title: "Ad hoc & Wireless Networks Lab" },
      { code: "BCSP-705", title: "Virtual Lab" },
      { code: "BCSP-706", title: "Year Level" },
      { code: "BCSP-707", title: "Minor Project-II" },
      { code: "Departmental Electives" },
      { code: "BCST-703(A)", title: "Human Computer Interfacing" },
      { code: "BCST-703(B)", title: "Advanced Computer Architecture" },
      { code: "BCST-703(C)", title: "Soft Computing" },
      { code: "BCST-703(D)", title: "Internet-of-Things Systems" },
      { code: "Open Electives" },
      { code: "BOCS-704(A)", title: "Big Data Processing" },
      { code: "BOCS-704(B)", title: "Digital Forensics" },
      { code: "BOCS-704(C)", title: "Computational Biology" },
      { code: "BOCS-704(D)", title: "Cloud Computing & Security" },
    ],
  },
  {
    semester: "B.Tech VIII Sem.",
    subjects: [
      { code: "BCST-801", title: "Artificial Intelligence" },
      { code: "BCST-802", title: "Software Project Management" },
      { code: "BCST-803", title: "Departmental Elective" },
      { code: "BOCS-804", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BCSP-805", title: "Major Project" },
      { code: "BCSP-806", title: "Internship-III" },
      { code: "Departmental Electives" },
      { code: "BCST-803(A)", title: "Neural Networks" },
      { code: "BCST-803(B)", title: "Bioinformatics" },
      { code: "BCST-803(C)", title: "Blockchain Technology" },
      { code: "BCST-803(D)", title: "Deep Learning" },
      { code: "Open Electives" },
      { code: "BOCS-804(A)", title: "Augmented & Virtual Reality" },
      { code: "BOCS-804(B)", title: "Quantum Computing" },
      { code: "BOCS-804(C)", title: "Ethical Hacking" },
      { code: "BOCS-804(D)", title: "Autonomous Systems" },
    ],
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
    The department of computer science & engineering aims at providing &
    ensuring outcome based education through qualitative teaching-learning
    process, meaningful teacher-taught interactions, state-of-the-art
    laboratories and well qualified faculty. Our department is striving hard to
    achieve its vision of becoming a centre of excellence in the field of
    technical education. The department is constantly working towards improving
    the all-round skill development of our students through organizing guest
    lectures, seminars, workshops, conferences and career service events
    facilitated by prominent experts. Our students are highly motivated and
    demanded by top recruiters for employment.
    <br />
    <br /> The department provides the arena to build the students capabilities,
    communication and employability skills. We believe that the
    teaching-learning process, coupled with practical experience gained during
    Industrial Training in reputed organizations, equip our students to handle
    the challenges required by the software industry. In addition to mastering
    theoretical concepts of computer science practical skills, our focus is to
    prepare students to conduct research, via minor and major projects offered
    in the curriculum. Projects offered stretch across diverse areas like
    algorithms, parallel computing, computer security, artificial intelligence,
    computer networks, as well as interdisciplinary areas like human-computer
    interaction, applied machine learning etc.
  </>
);

export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: "Society of Computer Science and Engineering.",
    image: USP,
  },
  {
    title: "News Letter / Magazine",
    description: <Link href={CseDrishti}>डिजिटल DRISHTI | JAN-MAR(2024)</Link>,
    image: Course,
  },
  {
    title: "Edge over others",
    description:
      "Maximum number of students of Computer Science and Engineering are hired by prominent companies through campus placements.",
    image: Program,
  },
  {
    title: "Beyond Curriculum",
    description: "Microsoft Innovation Centre",
    image: Program,
  },
  {
    title: "Innovation in Teaching & Learning",
    description:
      "Explicit teaching is a purposeful way of overtly teaching students.",
    image: Program,
  },
  {
    title: "Career Prospects",
    description:
      "A computer science engineer is involved in various aspects of computing.",
    image: Program,
  },
];
