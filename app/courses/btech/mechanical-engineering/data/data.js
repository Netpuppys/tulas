import computerScience from "../../../../../public/courses/btech/computer-science/computer-science.png";
import USP from "../../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../../public/bsc-agriculture/Crousel/Program.png";
import MEDocument from "../../../../../public/courses/btech/mechanical-engineering/ME.pdf";
import DepartmentalVission from "../../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../../public/courses/bjmc/departmentalMission.png";
import AnkitJain from "../../../../../public/courses/btech/mechanical-engineering/facultyData/AnkitJain.webp";
import RahulKumar from "../../../../../public/courses/btech/mechanical-engineering/facultyData/RahulKumar.webp";
import AnuragBahuguna from "../../../../../public/courses/btech/mechanical-engineering/facultyData/AnuragBahuguna.webp";
import DeveshSharma from "../../../../../public/courses/btech/mechanical-engineering/facultyData/DeveshSharma.webp";
import AnupamGautam from "../../../../../public/courses/btech/mechanical-engineering/facultyData/AnupamGautam.webp";
import KomalRani from "../../../../../public/courses/btech/mechanical-engineering/facultyData/KomalRani.webp";
import AmitMAURYA from "../../../../../public/courses/btech/mechanical-engineering/facultyData/AmitMAURYA.webp";
import Link from "next/link";

export const images = [
  computerScience,
  // Add more image paths as needed
];
export const content = (
  <>
    The Mechanical Engineering Department of Tula’s Institute is one of the
    oldest department since its inception in 2006. The department offers
    Diploma, Undergraduate, and Postgraduate programs in mechanical engineering.
    The main goal of the curriculum is to impart quality education to the
    students to develop technical skills, improve their problem-solving
    abilities, and encourage them to become a competitive mechanical engineer.
    The Department offers two specializations in the field of Robotics and
    Energy Engineering. Mechanical engineering may be the programme of study for
    you if you are seeking career in the field of design, development, quality,
    manufacturing, installation and operation.
  </>
);
export const items = [
  {
    title: "USP",
    description:
      "50+ Add-On Certification and 30+ Short Term Courses (STC) for holistic development of the students.",
    image: USP,
  },
  {
    title: "COURSE OUTCOMES",
    description: <Link href={MEDocument}>B.Tech Mechanical</Link>,
    image: Course,
  },
  {
    title: "Program Outcomes",
    description:
      "PO1 – Engineering Knowledge : Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    image: Program,
  },
  {
    title: "Program Specific Outcome",
    description: "PSO1 : Develop capability and motivation for higher.",
    image: Course,
  },
  {
    title: "Program Educational Objectives",
    description:
      "Graduates will be able to adapt to technological changes in Mechanical Engineering and evelop innovative and sustainable solutions to societal needs.",
    image: Program,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To become centre of excellence for producing graduates of manufacturing, production & design competence to face the challenges of global market, creating innovation & effective interface with various organizations.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To provide strong fundamentals and technical skills in Mechanical
            Engineering through effective teaching-learning Methodologies.
          </li>
          <li>
            To nurture students to excel professionally and personally to serve
            the society.
          </li>
          <li>
            To maintain a collegial, supportive, and diverse environment that
            encourages Students, faculty, and staff to achieve the best
            innovation & research.
          </li>
          <li>To promote inter-disciplinary research.</li>
          <li>
            To develop soft skills to excel in higher studies and placements.
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
  { title: "Specialization" },
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
    semester: "I SEMESTER",
    subjects: [
      { code: "BAST 101", title: "Engineering Chemistry" },
      { code: "BAST 102", title: "Mathematics-I" },
      { code: "BAST 103", title: "English for Communication" },
      { code: "BEET 101", title: "Basic Electrical & Electronics Engineering" },
      {
        code: "BCST 101",
        title: "Fundamentals of Computers & Programming in C",
      },
      { code: "PRACTICAL" },
      { code: "BASP 101", title: "Engineering Chemistry lab" },
      { code: "BASP 103", title: "English for Communication lab" },
      {
        code: "BEEP 101",
        title: "Basic Electrical & Electronics Engineering lab",
      },
      { code: "BMEP 101", title: "Manufacturing Practices/Workshop" },
      {
        code: "BCSP 101",
        title: "Fundamentals of Computers & Programming in C",
      },
      { code: "BASP 102", title: "Internship-I" },
      { code: "BASP 105", title: "Swachh Bharat Summer Internship" },
    ],
  },
  {
    semester: "II SEMESTER",
    subjects: [
      { code: "BAST 104", title: "Engineering Physics" },
      { code: "BAST 102", title: "Mathematics-I" },
      { code: "BMET 102", title: "Basic Mechanical Engineering" },
      { code: "BCET 101", title: "Basic Civil Engineering & Mechanics" },
      { code: "BEST 101", title: "Environmental Studies" },
      { code: "PRACTICAL" },
      { code: "BASP 104", title: "Engineering Physics" },
      { code: "BMEP 102", title: "Basic Mechanical Engineering" },
      { code: "BCEP 101", title: "Basic Civil Engineering & Mechanics" },
      { code: "BMEP 103", title: "Engineering Graphics" },
      { code: "BASP 106", title: "Language lab & Seminars" },
      { code: "BASP 102", title: "Internship-I" },
    ],
  },

  {
    semester: "III SEMESTER",
    subjects: [
      { code: "BAST 301", title: "Mathematics-III" },
      { code: "BMET 302", title: "Basic Thermodynamics" },
      { code: "BMET 303", title: "Material Science & Technology" },
      { code: "BMET 304", title: "Strength of Material" },
      { code: "BMET 305", title: "Manufacturing Science & Technology -I" },
      { code: "BAST 107", title: "Evaluation of Internship-I" },
      { code: "PRACTICAL" },
      { code: "BMEP 303", title: "Material Science & Technology" },
      { code: "BMEP 304", title: "Strength of Material" },
      { code: "BMEP 305", title: "Manufacturing Science & Technology -I" },
      { code: "BCSP 307", title: "Programming Practices" },
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "BMET 401", title: "Applied Thermodynamics Engineering" },
      { code: "BECT 402", title: "Energy & Environmental Engineering" },
      { code: "BMET 403", title: "Theory of Machine" },
      { code: "BMET 404", title: "Fluid Mechanics" },
      { code: "BMET 405", title: "Manufacturing Science & Technology -II" },
      { code: "PRACTICAL" },
      { code: "BMEP 401", title: "Applied Thermodynamics Engineering" },
      { code: "BMEP 403", title: "Theory of Machines" },
      { code: "BMEP 404", title: "Fluid Mechanics" },
      { code: "BMEP 405", title: "Manufacturing Science & Technology -II" },
      { code: "BMEP 406", title: "Computer Aided Machine Drawing Lab" },
      { code: "BMEP 407", title: "Internship-II" },
    ],
  },
  {
    semester: "V Semester",
    subjects: [
      { code: "BMET 501", title: "Industrial Engineering & Ergonomics" },
      { code: "BMET 502", title: "Machine Component Design – I" },
      { code: "BMET 503", title: "Heat & Mass Transfer" },
      { code: "BMET 504", title: "Departmental Elective" },
      { code: "BOME 505", title: "Open Elective" },
      {
        code: "BMET 507",
        title: "Evaluation of Internship-II completed at II year level",
      },
      { code: "PRACTICAL" },
      { code: "BMEP 501", title: "Industrial Engineering & Ergonomics" },
      { code: "BMEP 502", title: "Machine Component Design – I" },
      { code: "BMEP 503", title: "Heat & Mass Transfer" },
      { code: "BMEP 506", title: "Machine Drawing Lab With Autocad" },
      { code: "Internship III" },
      { code: "Departmental Electives" },
      { code: "BMET 504(A)", title: "IC Engine" },
      { code: "BMET 504(B)", title: "Machine Tool Design" },
      { code: "BMET 504(C)", title: "Alternate Automotive Fuels & Emissions" },
      { code: "Open Electives" },
      { code: "BOME 505(A)", title: "Principle of Management" },
      { code: "BOME 505(B)", title: "TQM and SQC" },
      { code: "BOET 504(D)", title: "Innovation and Entrepreneurship" },
    ],
  },
  {
    semester: "VI Semester",
    subjects: [
      { code: "BMET 601", title: "Turbo Machinery" },
      { code: "BMET 602", title: "Machine Component Design – II" },
      { code: "BMET 603", title: "Refrigeration and Air-condition" },
      { code: "BMET 604(A/B/C)", title: "Departmental Elective" },
      { code: "BOME 605", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BMEP 601", title: "Turbo Machinery" },
      { code: "BMEP 602", title: "Machine Component Design – II" },
      { code: "BMEP 603", title: "Refrigeration and Air-condition" },
      { code: "BMEP 607", title: "Minor Project - I" },
      { code: "BMEP 608", title: "Open Source Lab" },
      { code: "Internship III" },
      { code: "Departmental Electives" },
      { code: "BMET 604(A)", title: "Mechatronics" },
      { code: "BMET 604(B)", title: "Finite Element Method" },
      { code: "BMET 604(C)", title: "Product Design" },
      { code: "Open Electives" },
      { code: "BOME 605(A)", title: "Robotics" },
      { code: "BOME 605(B)", title: "Optimization Techniques" },
      { code: "BOME 605(C)", title: "Renewable Energy Technology" },
    ],
  },
  {
    semester: "VII Semester",
    subjects: [
      { code: "BMET 701", title: "Maintenance and Safety" },
      { code: "BMET 702", title: "Computer Integrated Manufacturing" },
      { code: "BMET 703", title: "Departmental Elective" },
      { code: "BMET 704", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BMEP 702", title: "Computer Integrated Manufacturing" },
      { code: "BMEP 705", title: "Simulation Lab/Virtual Lab (Ansys/MATLAB)" },
      { code: "BMEP 507", title: "Internship III" },
      { code: "BMEP 706", title: "Minor Project-2" },
      { code: "Departmental Electives" },
      { code: "BMET 703(A)", title: "Nano Materials" },
      { code: "BMET 703(B)", title: "Computational Fluid Dynamics" },
      { code: "BMET 703(C)", title: "Mechanical Vibration" },
      { code: "Open Electives" },
      { code: "BMET 704(A)", title: "Energy Conservation" },
      { code: "BMET 704(B)", title: "Introduction to AI" },
      { code: "BMET 704(C)", title: "MEMS & Microsystems Technology" },
    ],
  },
  {
    semester: "VIII Semester",
    subjects: [
      { code: "BMET 801", title: "Operation Research" },
      { code: "BMET 802", title: "Automobile" },
      { code: "BMET 803", title: "Departmental Elective" },
      { code: "BMET 804", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BMEP 802", title: "Automobile" },
      { code: "BMEP 805", title: "Open Source Lab" },
      { code: "BMEP 806", title: "Major Project" },
      { code: "Departmental Electives" },
      { code: "BMET 802(A)", title: "Power Plant Engineering" },
      { code: "BMET 802(B)", title: "Solar Energy" },
      { code: "BMET 802(C)", title: "Experimental Stress Analysis" },
      { code: "Open Electives" },
      { code: "BMET 803(A)", title: "Concepts of Programming and OOPS" },
      { code: "BMET 803(B)", title: "Environment and Ecology" },
      { code: "BMET 803(C)", title: "Programming in Python" },
    ],
  },
];

export const hod = [
  {
    name: "Mr.Ankit Jain",
    email: "me.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Mechanical Engineering",
    imageUrl: AnkitJain, // Replace with the actual image path
  },
];

export const HODcontent = (
  <>
    Welcome to the department of Mechanical Engineering at Tula’s Institute,
    Dehradun. The aim of the department is to disseminate knowledge and
    technologies through quality teaching, research and its applications in
    mechanical and allied disciplines. In curriculum, we strive to assimilate
    the latest developments in every field of Mechanical Engineering. Our
    department has a team of highly qualified and experienced faculty, good
    infrastructure and laboratory facilities having latest instruments. For
    skill upgradation of the students, the department organizes regular training
    programs for software & hardware, arranges workshops and guest lectures as
    well as personality development programs. By adopting tools of outcome based
    education, the department helps students to learn, grow, develop, and
    achieve their goals in their pursuit to excel in their professional career.
    I wish students to join us on the journey of quality education and to have a
    great learning experience with my excellent, loving & caring team.
  </>
);

export const facultyData = [
  {
    name: "Mr. Ankit Jain",
    education: "B.Tech, M.Tech, Ph.D. (Pursuing)",
    experience: "12 Yrs.",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: AnkitJain,
  },
  {
    name: "Mr. Rahul Kumar",
    education: "B.Tech, M.Tech, Ph.D. (Pursuing)",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "1",
    imageUrl: RahulKumar,
  },
  {
    name: "Mr. Anurag Bahuguna",
    education: "B.Tech, M.Tech",
    experience: "7.5 Yrs.",
    designation: "Assistant Professor",
    publications: "4",
    imageUrl: AnuragBahuguna,
  },
  {
    name: "Mr. Devesh Sharma",
    education: "B.Tech, M.Tech",
    experience: "7.5 Yrs.",
    designation: "Assistant Professor",
    publications: "N/A",
    imageUrl: DeveshSharma,
  },
  {
    name: "Mr. Anupam Gautam",
    education: "M.Tech",
    experience: "10 Yrs.",
    designation: "Assistant Professor",
    publications: "7",
    imageUrl: AnupamGautam,
  },
  {
    name: "Ms. Komal Rani",
    education: "M.Tech",
    experience: "4 Yrs.",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: KomalRani,
  },
  {
    name: "Mr. Amit Moray",
    education: "B.Tech, M.Tech, Ph.D. (Pursuing)",
    experience: "10 Yrs.",
    designation: "Assistant Professor",
    publications: "35",
    imageUrl: AmitMAURYA,
  },
];

export const specialization = (
  <>
    <strong>SPECIALIZATION IN ENERGY ENGINEERING</strong>
    <br />
    <br />
    The programme imparts knowledge in the field of energy engineering and
    application of Non-Renewable and Renewable energy sources. It also gives
    hands-on experience through practical and project programmes. It is a broad
    field of engineering dealing with energy efficiency, energy services,
    environmental compliance and alternative energy technologies. The programme
    provides the graduates with the knowledge base of how to use energy in the
    most environmental friendly and efficient way. The programme also provides
    insights in solving problems in the storage, distribution, and utilization
    of energy using techniques such as analysis, design, and case studies.
    <br />
    <br />
    <strong>CARRER PROSPECTS</strong>
    <br />
    <br />
    <ul>
      <li>Research Institutions</li>
      <li>Developing and building renewable energy technologies</li>
      <li>
        Integration of renewable energy generation into existing power systems
      </li>
      <li>Energy Engineer</li>
    </ul>
    <br />
    <strong>SPECIALIZATION IN ROBOTICS</strong>
    <br />
    <br />
    The increased demand of current industry for efficiencies and safety has led
    to a greater need for professionals with an added expertise in the field of
    ‘Robotics & Automation’. Robotics & Automation combines design,
    construction, operation, and application of robots coupled with computer
    based control systems, sensory feedback, and information processing. The
    design of a robotic system puts together principles of electronic
    engineering, mechanical engineering and computer engineering.
    <br />
    <br />
    B.Tech with the specialization of Robotics & Automation Engineering will
    enable students to give out the Industry requirement for implementation of
    new and smart technologies covering methods of synthesis, analysis &
    optimization of newer robots and mechanisms. The initial job functions in
    the field include- Robotics Engineer, Robotics Welding, Mobile Robotics, 3D
    Robotics, and Robotics Engineer at E-commerce Giants amongst others.
    Immediate & long term employment opportunities exist in the fields like
    industrial automation, manufacturing, agriculture, mining, aerospace,
    healthcare and defense. Also this field finds applications in the regular
    streams like mechanical systems/design engineering, electronics systems
    engineering and control systems engineering.
    <br />
    <br />
    CARRER PROSPECTS
    <br />
    <ul className="ml-5 list-disc">
      <li>Industrial Automation</li>
      <li>Manufacturing</li>
      <li>Agriculture & Mining</li>
      <li>Aerospace</li>
      <li>Healthcare</li>
      <li>Defense</li>
      <li>Design Engineering</li>
      <li>Automation Specialist</li>
      <li>Human/Machine Interface (HMI).</li>
    </ul>
  </>
);

export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: "Society of Mechanical Engineering (SME)",
    image: USP,
  },
  {
    title: "Edge over others",
    description:
      "As per Make in India newsletter 2016, there were 280,800 mechanical engineers working in various industries in India and the number is expected to grow by 20% (approximately) by 2026.",
    image: Program,
  },
  {
    title: "Beyond Curriculum",
    description:
      "Apart from the regular curriculum as specified by the affiliating university, we also conduct various hands – on – workshops/ seminars/ short term courses/ expert talks as add on certifications to the students.",
    image: Program,
  },
  {
    title: "Career Prospects",
    description:
      "Mechanical engineers create and implement solutions to a wide range of challenges, increasing efficiency in a variety of sectors.",
    image: Program,
  },
];