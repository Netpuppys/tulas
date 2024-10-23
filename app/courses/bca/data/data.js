import bca from "../../../../public/courses/bca/bca.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../public/bsc-agriculture/Crousel/Program.png";
import bcaDocument from "../../../../public/courses/bca/BCA.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import divyanegi from "../../../../public/courses/bca/facultyData/divyanegi.webp";
import anuj from "../../../../public/courses/bca/facultyData/anuj.webp";
import Link from "next/link";

export const images = [
  bca,
  // Add more image paths as needed
];
export const content = (
  <>
    BCA is a three-year bachelor’s degree program in computer applications. The
    need for computer professionals is constantly rising globally due to the
    rapid expansion of the IT industry.
    <br />
    <br />
    As the IT industry expands, this creates more career options for computer
    applications graduates. It is one of the most sought-after courses for
    students hoping to break into the IT industry.
    <br />
    <br />
    A wide range of computer/ mobile software development and application
    development, is a part of curriculum in the program. Learning new skills and
    taking advantage of opportunities will certainly be an excellent benefit for
    students of this program.
    <br />
    <br />
    Students who complete the programme will have a strong academic foundation
    in computer skills and applications, laying the groundwork for further
    advancement in the field.
    <br />
    <br />
    The institute aims to provide students with both theoretical and practical
    training in computation, computer languages, programming, and computer
    architecture.
    <br />
    <br />
    Computer software and its applications are now essential to almost every
    industry/organization. Computer science advances are impacting every
    industry/organization and as a result, there is an ever-increasing demand
    for computer application graduates. Faculty members in the department of
    computer application, of our institute, strive to create the best
    professionals possible by providing a conducive environment for study and
    research in various fields of computer science.
  </>
);
export const items = [
  {
    title: "USP's",
    description: [
      "Industry-led & Practice Based Curriculum.",
      "Content Delivery & Mentoring by Professionally Trained Faculty & Industry Experts by conducting Guest Lectures/ Expert Talks.",
      "Value Added Courses/ Add On Certifications/ Short Term Courses (STC) for all round development of the students.",
    ],
    image: USP,
    points: [
      "Alumni database of 200+ alumni currently working with MNC’s and Government Institutions/Sectors.",
      "Practical oriented teaching with hands on experience (Project Based Learning and Industrial Visits).",
    ],
  },
  {
    title: "Course Outcomes",
    description: [<Link href={bcaDocument}>BCA</Link>],
    image: Course,
  },
  {
    title: "Program Outcomes",
    description: [
      "PO1 – Take Thinking : Take informed action after identifying the assumptions that frame our thinking and action, checking out the degree to which these assumptions are accurate and valid, and looking at our ideas and decisions (intellectual, organizational, and personals) from different perspectives.",
      "PO2 – Effective Communication : Speak, read, write and listen clearly in person and thought electronics media in English and in one Indian Language, and make meaning of the world by connecting people, ideas, book, media and technology.",
    ],
    image: Program,
    points: [
      "PO3 – Social Interaction : Elicit views of others, mediate disagreements and help reach conclusion in group settings.",
      "PO4 – Effective Citizenship : Demonstrate empathetic social concern and equity national development, and the ability to act with an informed awareness of issues and participate in civic life through volunteering.",
      "PO5 – Ethics : Recognize different values system including your own, understand the moral dimension of your decisions, and accept responsibility for them.",
      "PO6 – Environment and Sustainability : Understand the issues of environmental contexts and sustainable development.",
      "PO7 – Self-Directed and Life-Long Learning : Acquire the ability to engage in independent and life-long learning in the broadest context socio-technologies changes.",
    ],
  },
  {
    title: "Program Specific Outcome",
    description: [
      "PSO 1 : Ability to build and perform career in data management and support IT industry.",
      "PSO 2 : Develop skills to design industry software and applications",
    ],
    image: Course,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To equip students with skills and strong conceptual understanding in applied sciences and basic engineering domains to pursue higher learning.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To enable engineering students master the fundamental concepts of
            applied sciences.
          </li>
          <li>
            To impart essential knowledge through fundamental subjects related
            to various engineering disciplines.
          </li>
          <li>
            To prepare students for their successful career based on strong
            moral and ethical principles.
          </li>
          <li>
            To develop lifelong learning abilities and developing understanding
            of social requirements and problems from the outset of a
            professional life.
          </li>
          <li>
            To build strong outreach and communication skills so that students
            can effectively communicate scientific knowledge to a variety of
            stakeholders and audiences.
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

export const selectedCardTable = [
  {
    sno: 1,
    course: "BCA",
    duration: "3 years",
    eligibility:
      "Passed XII or equivalent course in any discipline from any recognized Board / Council / University with minimum 45% marks for general (open) category and 40% marks for students of SC and ST category.",
  },
];
export const semesterData = [
  {
    semester: "I SEMESTER",
    subjects: [
      { code: "BCA 101", title: "Programming in ‘C’" },
      { code: "BCA 102", title: "Fundamental of Computers" },
      { code: "BCA 103", title: "Mathematical foundation of Computer Science" },
      { code: "BCA 104", title: "Business Communications" },
      { code: "PRACTICAL" },
      { code: "BCAP 11", title: "Programming in ‘C’" },
      {
        code: "BCAP 12",
        title: "PC Packages (Introduction to Operating system & MS Office)",
      },
    ],
  },
  {
    semester: "II SEMESTER",
    subjects: [
      { code: "BCA 201", title: "Data Structure & File Organization" },
      { code: "BCA 202", title: "Programming in C++" },
      { code: "BCA 203", title: "System Analysis and Design" },
      { code: "BCA 204", title: "Digital Electronics" },
      { code: "PRACTICAL" },
      { code: "BCAP 21", title: "Data Structure & File Organization" },
      { code: "BCAP 22", title: "Programming in C++" },
    ],
  },
  {
    semester: "III SEMESTER",
    subjects: [
      { code: "BCA 301", title: "Computer Based Numerical Techniques" },
      { code: "BCA 302", title: "Data Base Management System" },
      { code: "BCA 303", title: "Theory of Computation" },
      {
        code: "BCA 304",
        title: "Organization Structure and Personnel Management",
      },
      { code: "PRACTICAL" },
      { code: "BCAP 31", title: "Computer Based Numerical Techniques" },
      { code: "BCAP 32", title: "Data Base Management System" },
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "BCA 401", title: "Operating system Organization & UNIX" },
      { code: "BCA 402", title: "Visual Basic Programming" },
      { code: "BCA 403", title: "Software Engineering" },
      {
        code: "BCA 404",
        title: "Data Communication & Computer Networks",
      },
      { code: "PRACTICAL" },
      { code: "BCAP 41", title: "Operating System Organization & UNIX" },
      { code: "BCAP 42", title: "Visual Basic Programming" },
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      { code: "BCA 501", title: "Computer Graphics" },
      { code: "BCA 502", title: "Web Programming using JAVA" },
      { code: "BCA 503", title: "Management Information System" },
      {
        code: "BCA 504",
        title: ".NET Technology",
      },
      { code: "PRACTICAL" },
      { code: "BCAP 51", title: "Web Programming using JAVA" },
      { code: "BCAP 52", title: ".NET Technology" },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      { code: "BCA 601", title: ".Net Framework" },
      { code: "BCA 602", title: "Network Security" },
      { code: "PRACTICAL" },
      { code: "BCAP 61", title: ".NET Framework" },
      { code: "BCASM", title: "Seminar" },
      { code: "BCAPR", title: "Project" },
    ],
  },
];
export const facultyData = [
  {
    name: "Ms. Divya Negi",
    education: "MCA",
    experience: "01 Years",
    designation: "Assistant Professor",
    publications: "1",
    imageUrl: divyanegi, // Add the path for the image
  },
  {
    name: "Mr. Anuj Kumar",
    education: "MCA",
    experience: "02 Years",
    designation: "Assistant Professor",
    imageUrl: anuj,
  },
];
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
    title: "Beyond Curriculum",
    description: [
      "Student perform various internship programs, Short term courses, Add on courses for their advancement in the field.",
      "BCA students in addition to their curriculum may opt for specialization in various field such as Cyber security, data sciences, AI& ML etc.",
    ],
    image: Course,
  },
  {
    title: "Career Prospects",
    description: [
      "After the completion of this program, the students have the option to grow in one of the following fields:",
      "Cloud Computing",
      "Ethical Hacking",
      "GIS (Geographic Information Systems)",
      "Software Developing",
      "Software Testing",
      "Networking",
      "IT Support",
      "Machine learning",
      "Artificial Intelligence",
    ],
    image: Program,
  },
];
