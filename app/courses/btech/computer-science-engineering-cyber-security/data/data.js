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
    The program objectives of a B.Tech in Cyber Security are designed to equip
    students with the necessary knowledge, skills, and capabilities to thrive in
    the dynamic field of cybersecurity. These objectives typically include:
    <br />
    <br />
    <ul className="ml-5 list-disc">
      <li>
        Technical Proficiency: Acquire technical proficiency in various
        cybersecurity domains, including network security, cryptography, ethical
        hacking, digital forensics, and incident response.
      </li>
      <li>
        Practical Skills: Develop hands-on skills through practical sessions,
        lab exercises, and real-world projects to effectively apply
        cybersecurity techniques in practical scenarios.
      </li>
      <li>
        Industry-Relevant Knowledge: Stay abreast of the latest industry trends,
        emerging threats, and cutting-edge technologies in the field of
        cybersecurity.
      </li>
      <li>
        Critical Thinking and Problem-Solving: Foster critical thinking and
        problem-solving skills to analyze and mitigate security vulnerabilities
        and incidents effectively.
      </li>
      <li>
        Legal and Ethical Considerations: Understand the legal and ethical
        aspects of cybersecurity, including compliance with laws and regulations
        governing information security.
      </li>
      <li>
        Collaboration and Communication: Develop effective communication and
        collaboration skills to work seamlessly within interdisciplinary teams
        and convey complex cybersecurity concepts to various stakeholders.
      </li>
      <li>
        Incident Response Planning: Gain the ability to develop and implement
        incident response plans, including detecting, responding to, and
        recovering from cybersecurity incidents.
      </li>
      <li>
        Cybersecurity Governance: Understand the principles of cybersecurity
        governance and risk management, including creating and implementing
        cybersecurity policies and practices.
      </li>
      <li>
        Security Architecture Design: Learn to design secure systems and
        architectures, considering both hardware and software components, to
        protect information assets effectively.
      </li>
      <li>
        Research and Innovation: Encourage research-oriented thinking,
        innovation, and the ability to contribute to advancements in the field
        of cybersecurity through original research and development.
      </li>
    </ul>
  </>
);
export const items = [
  {
    title: "Program Objectives",
    description:
      "Develop a solid foundation in computer science, mathematics, statistics, and data analysis: The program aims to provide students with a strong foundation in these key areas to develop the necessary skills to become successful data scientists.",
    image: USP,
  },
  {
    title: "Program Outcomes",
    description:
      "Engineering Knowledge : Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    image: Course,
  },
  {
    title: "Program Specific Outcomes",
    description:
      "PSO1 : Provide Industry led/sponsor Teaching Learning facilities.",
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
            To integrate the software industry and academia in order to utilise
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
  { title: "Senior Faculty" },
  { title: "From the Desk of HOD" },
];
export const selectedCardTable = [
  {
    sno: 1,
    course: "B.Tech",
    duration: "4 years",
    eligibility:
      "Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject/ Computer Science/ Information Technology/ Informatics Practices/Agriculture/ Engineering Graphics/ Business Studies. Obtained at least 45% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together.",
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
    title: "Career Prospects",
    description:
      "A B.Tech. in Computer Science and Engineering with a specialization in Cybersecurity opens up a diverse range of career prospects in a world where digital threats are constantly evolving.",
    image: Course,
  },
];
