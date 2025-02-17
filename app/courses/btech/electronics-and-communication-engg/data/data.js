import USP from "../../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../../public/bsc-agriculture/Crousel/Program.png";
import EceDocument from "../../../../../public/courses/btech/electronics-and-communication/ECE.pdf";
import DepartmentalVission from "../../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../../public/courses/bjmc/departmentalMission.png";
import abhishekchakrovarty from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/abhishekchakrovarty.webp";
import NISHANT from "../../../../../public/courses/btech/electronics-and-communication/facultyData/NISHANT.webp";
import NISHANTResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/NISHANTResume.pdf";
import VAIBHAVKUMAR from "../../../../../public/courses/btech/electronics-and-communication/facultyData/VaibhavKumar.webp";
import VAIBHAVKUMARResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/VAIBHAVKUMARResume.pdf";
import MukeshPathela from "../../../../../public/courses/btech/electronics-and-communication/facultyData/MukeshPathela.webp";
import MukeshPathelaResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/MukeshPathelaResume.pdf";
import SANDEEPKHANTWAL from "../../../../../public/courses/btech/electronics-and-communication/facultyData/SandeepKhantwalL.webp";
import SANDEEPKHANTWALResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/SANDEEPKHANTWALResume.pdf";
import RAHULNEGI from "../../../../../public/courses/btech/electronics-and-communication/facultyData/RahulNegi.webp";
import RAHULNEGIResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/RAHULNEGIResume.pdf";
import NANSE from "../../../../../public/courses/btech/electronics-and-communication/facultyData/NANSE.webp";
import NANSEResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/NANSEResume.pdf";
import SandeepKumar from "../../../../../public/courses/btech/electronics-and-communication/facultyData/SandeepKumar.webp";
import SandeepKumarResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/SandeepKumarResume.pdf";
import HimaniRawat from "../../../../../public/courses/btech/electronics-and-communication/facultyData/HimaniRawat.webp";
import HimaniRawatResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/HimaniRawatResume.pdf";
import Lokesh from "../../../../../public/courses/btech/electronics-and-communication/facultyData/Lokesh.webp";
import LokeshResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/LokeshResume.pdf";
import Rajni from "../../../../../public/courses/btech/electronics-and-communication/facultyData/Rajni.webp";
import RajniResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/RajniResume.pdf";
import swati from "../../../../../public/courses/btech/electronics-and-communication/facultyData/swati.webp";
import swatiResume from "../../../../../public/courses/btech/electronics-and-communication/facultyData/swatiResume.pdf";

import Link from "next/link";
export const heading = (
  <>
    Best Electronics & Communication Engineering Institute in{" "}
    <span className="text-[#760135]">North India</span>
  </>
);
export const content = (
  <>
    The Department of Electronics & Communication Engineering (ECE) at Tula’s
    Institute, established in 2006, has been a hub of academic excellence,
    innovation, and research since the inception of the institute. With a vision
    to become a leading center of excellence in education and research, the
    department is recognized for its outstanding teaching methodologies,
    advanced laboratories, and industry-oriented curriculum. The B.Tech in
    Electronics & Communication Engineering program is designed to equip
    students with technical expertise and hands-on experience to meet the
    challenges of the ever-evolving field of electronics and communication.
    <div className="mt-2 md:mt-[1%]"></div>
    This program covers core areas such as electronic devices, circuits,
    microprocessors, microcontrollers, analog & digital communication, microwave
    engineering, and antenna & wave propagation. Students gain in-depth
    knowledge of cutting-edge technologies like 5G, 6G, Voice over Internet
    Protocol (VoIP), Internet of Things (IoT), and Robotics. With a strong focus
    on practical learning, the curriculum ensures that students acquire the
    analytical, design, and problem-solving skills required for careers in
    telecommunications, automation, embedded systems, signal processing, and
    semiconductor industries.
    <div className="mt-2 md:mt-[1%]"></div>
    The department fosters a research-driven environment, encouraging students
    to engage in innovative projects, industrial training, and skill development
    programs. Graduates from the ECE department at Tula’s Institute are
    well-prepared for dynamic career opportunities in electronics,
    telecommunications, automation, and emerging technologies.
  </>
);
export const quotes = (
  <>
    “Innovate, connect, and revolutionize the world of technology with{" "}
    <strong className="text-[#760135]">
      Tula’s Institute’s B.Tech in Electronics & Communication Engineering.
    </strong>
    ”
  </>
);
export const items = [
  {
    title: "USPs",
    description: [
      "Industry-led & Practice Based Curriculum.",
      "Content Delivery & Mentoring by Professionally Trained Faculty & Industry Experts (Guest Lectures/ Expert Talks)",
      "Value Added Courses/ Add On Certifications/ Short Term Courses (STC) for all round development of the students.",
      "Huge Alumni database of more than 300 alumni currently working with MNCs and Government Institutions/Sectors.",
    ],
    image: USP,
    points: [
      "Well qualified faculty members",
      "More than 200 Publications in reputed journals and conferences.",
      "Practical oriented teaching with hands on experience (Project Based Learning and Industrial Visits).",
      "10 Patents",
      "6 Funded projects from AICTE, TEQIP-III, Uttarakhand Technical University.",
      "More than 200 FDPs completed by faculty members of the department.",
    ],
  },
  {
    title: "Course Outcomes",
    description: [
      <Link href={EceDocument} target="_blank">
        B.Tech ECE
      </Link>,
    ],
    image: Course,
  },
  {
    title: "Program Outcomes",
    description: [
      "1. Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "2. Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
      "3. Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
    ],
    image: Program,
    points: [
      "4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "7. Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    ],
  },
  {
    title: "Program Specific Outcome",
    description: [
      "1. PSO1 : To develop the ability to apply concepts from electronics, communications, signal processing, VLSI, control systems, and other fields to the design, development, and implementation of application-oriented engineering systems.",
      "2. PSO2 : To identify and use the newest hardware and software technologies to isolate and solve complicated problems in the fields of electronics and communication.",
    ],
    image: Course,
    points: [
      "3. PSO3 : Acquaintance with social and environmental awareness, as well as ethical duties, is essential for a successful career in real-world applications while staying current with technology advancements.",
    ],
  },
  {
    title: "Program Educational Objective",
    description: [
      "To provide strong technical, hands-on, critical thinking, and team player abilities will enable them to pursue successful jobs in industry.",
      "To engage in continuous learning using cutting-edge technologies to solve societal problems through logical and flexible decision-making.",
    ],
    image: Program,
    points: [
      "To apply their resources, expertise, and experience to build, create, and develop new technologies as well as come up with original, inventive solutions to engineering challenges in a multidisciplinary work environment.",
      "To develop a lifelong learning mindset by implementing and adapting new ideas and technologies as their profession changes.",
    ],
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To become a center of excellence in the field of embedded system, microelectronics , signal processing and telecommunication to provide higher-order learning and conducting cutting-edge research, resulting in globally competitive engineers.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            To establish a learning environment to produce quality engineers
            with passion for knowledge and creativity in the field of
            Electronics Engineering.
          </li>
          <li>
            To provide quality education through an updated curriculum on a
            regular basis in order to tackle the worldwide challenges of
            research and innovation.
          </li>
          <li>
            To develop professional etiquette and ethical integrity among the
            students to face real-time life challenges.
          </li>
          <li>
            To enhancing employability of the students by providing skills
            through comprehensive experiential learning.
          </li>
          <li>
            To cultivate an entrepreneurial mind-set among students and faculty,
            providing resources and support to transform innovative ideas into
            viable products and start-ups that address market needs and societal
            challenges.
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
    eligibility: (
      <>
        a. Passed Diploma examination with at least 45% marks (40% marks in case
        of candidates belonging to reserved category) in ANY branch of
        Engineering and Technology. <br />
        b. Passed B.Sc. Degree from a recognized University as defined by UGC,
        with at least 45% marks (40% marks in case of candidates belonging to
        reserved category) and passed 10+2 examination with Mathematics as a
        subject. <br />
        c. Provided that the students belonging to B.Sc. Stream, shall clear the
        subjects Engineering Graphics/ Engineering Drawing and Engineering
        Mechanics of the First Year Engineering Programme along with the Second
        year subjects. <br />
        d. Provided that the students belonging to B.Sc. Stream shall be
        considered only after filling the supernumerary seats in this category
        with students belonging to the Diploma stream. <br />
        e. Passed D.Voc. Stream in the same or allied sector. <br />
        f. In the above cases, a suitable bridge Courses, if required such as in
        Mathematics may be conducted.
      </>
    ),
  },
];
export const semesterData = [
  {
    semester: "I SEMESTER",
    subjects: [
      { code: "AHT-003", title: "Engineering Mathematics-I" },
      { code: "CST-001", title: "Programming for Problem Solving" },
      { code: "EET-001", title: "Basic Electrical Engineering" },
      { code: "AHT-001", title: "Engineering Physics" },
      { code: "AHT-004", title: "Environmental Studies" },
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
    semester: "II SEMESTER",
    subjects: [
      { code: "AHT-005", title: "Analytical Mathematics" },
      { code: "AHT-002", title: "Engineering Chemistry" },
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
    semester: "III SEMESTER",
    subjects: [
      { code: "BECT 303", title: "Digital Electronics" },
      { code: "BCET 301", title: "Mathematics-III" },
      { code: "BECT 302", title: "Electrical Measurement & Instrumentation" },
      { code: "BECT 304", title: "Electronic Devices" },
      { code: "BEET 305", title: "Network Analysis And Synthesis" },
      { code: "PRACTICALS" },
      {
        code: "BEEP 301",
        title: "Electrical Measurement & Instrumentation Lab",
      },
      { code: "BEEP 305", title: "Network Analysis And Synthesis Lab" },
      { code: "BECP 303", title: "Digital Electronics Lab" },
      { code: "BECP 304", title: "Electronic Devices Lab" },
      {
        code: "BASP 307",
        title:
          "Evaluation of Internship-I Completed at I year level/Seminar Presentation for Lateral Entry",
      },
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "BECT 402", title: "Signal And System" },
      { code: "BAST 401", title: "Energy and Environmental engineering" },
      { code: "BECT 403", title: "Analog Communication" },
      { code: "BEET 404", title: "Control System" },
      { code: "BECT 405", title: "Analog Circuits" },
      { code: "BHUT 401", title: "Universal Human Values-2" },
      { code: "PRACTICALS" },
      { code: "BECP 403", title: "Analog Communication" },
      { code: "BEEP 404", title: "Control System" },
      { code: "BECP 405", title: "Analog Circuits" },
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      { code: "BECT 501", title: "Microprocessor & Interfacing" },
      { code: "BEET-502", title: "Electromagnetic Field Theory" },
      { code: "BECT 503", title: "VLSI Technology and Design" },
      { code: "BEET-504(A/B/C/D)", title: "Departmental Elective" },
      { code: "BOEC-505(A/B/C/D)", title: "Open Elective" },
      { code: "PRACTICALS" },
      { code: "BECP 501", title: "Microprocessor & Interfacing" },
      { code: "BEEP-502", title: "Electromagnetic Field Theory" },
      { code: "BECP 503", title: "VLSI Technology and Design" },
      {
        code: "BECP-506",
        title:
          "Simulation Software Lab (Mat Lab, Multisim etc) / PCB design and Fabrication Lab",
      },
      {
        code: "BECP-507",
        title: "Evaluation of Internship-II completed at II year level",
      },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BECT 504(A)", title: "CNTL" },
      { code: "BECT 504(B)", title: "Data Communication and Networks" },
      { code: "BECT 504(C)", title: "Advanced Control System" },
      { code: "BECT 504(D)", title: "IC Technology" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC-505(A)", title: "Data structure using C++" },
      { code: "BOEC-505(B)", title: "Computer system Organisation" },
      { code: "BOEC-505(C)", title: "Process Control Instrumentation" },
      { code: "BOET-504(D)", title: "Innovation and Entrepreneurship" },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      { code: "BECT-601", title: "Digital Signal Processing" },
      { code: "BECT-602", title: "Antenna and Wave Propagation" },
      { code: "BECT-603", title: "Digital Communication" },
      { code: "BEET-604(A/B/C/D)", title: "Departmental Elective" },
      { code: "BOEC-605(A/B/C/D)", title: "Open Elective" },
      { code: "PRACTICALS" },
      { code: "BECP-601", title: "Digital Signal Processing" },
      { code: "BECP-602", title: "Antenna and Wave Propagation" },
      { code: "BECP-603", title: "Digital Communication" },
      { code: "BECP-606", title: "Open Source S/w lab" },
      { code: "BECP-607", title: "Minor Project-I" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BECT 604(A)", title: "Cellular and Mobile Communication" },
      { code: "BECT 604(B)", title: "CMOS Design" },
      { code: "BECT 604(C)", title: "Satellite Communication" },
      { code: "BECT 604(D)", title: "High Speed Electronics" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC-605(A)", title: "Microcontroller and Embedded System" },
      { code: "BOEC-605(B)", title: "Bio medical Electronics" },
      { code: "BOEC-605(C)", title: "Power Electronics" },
      { code: "BOEC-605(D)", title: "IOT and Application" },
    ],
  },
  {
    semester: "VII SEMESTER",
    subjects: [
      { code: "BECT-701", title: "Microwave Engineering" },
      { code: "BECT-702", title: "Optical Fibre Communication" },
      { code: "BECT-703(A/B/C/D)", title: "Departmental Elective" },
      { code: "BOEC-704(A/B/C/D)", title: "Open Elective" },
      { code: "PRACTICALS" },
      { code: "BECP-701", title: "Microwave Engineering Lab" },
      { code: "BECP-702", title: "Optical Fibre Communication Lab" },
      { code: "BECP-705", title: "Virtual Lab" },
      {
        code: "BECP-706",
        title: "Evaluation of Internship-II (completed at II year level)",
      },
      { code: "BECP-707", title: "Minor Project-II" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BECT-703(A)", title: "Mixed Circuit Design" },
      { code: "BECT-703(B)", title: "Digital Image Processing" },
      { code: "BECT-703(C)", title: "Advanced Communication Systems" },
      { code: "BECT-703(D)", title: "Wireless Sensor Networks" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC-704(A)", title: "Mobile Ad Hoc Networks" },
      { code: "BOEC-704(B)", title: "Artificial Intelligence" },
      { code: "BOEC-704(C)", title: "Artificial Neural Networks" },
      { code: "BOEC-704(D)", title: "Subject from SWAYAM" },
    ],
  },
  {
    semester: "VIII SEMESTER",
    subjects: [
      { code: "BECT-801", title: "Television and Radar Engineering" },
      { code: "BECT-802", title: "Wireless Communications" },
      { code: "BECT-803(A/B/C/D)", title: "Departmental Elective" },
      { code: "BOEC-804(A/B/C/D)", title: "Open Elective" },
      { code: "PRACTICALS" },
      { code: "BECP-801", title: "Television and Radar Engineering Lab" },
      { code: "BECP-802", title: "Wireless Communications Lab" },
      { code: "BECP-805", title: "Major Project" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BECT-803(A)", title: "Digital System Design using VHDL" },
      { code: "BECT-803(B)", title: "Adaptive Signal Processing" },
      { code: "BECT-803(C)", title: "Telecommunication Switching System" },
      { code: "BECT-803(D)", title: "SDN and Cognitive Radio Networks" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC-804(A)", title: "Industrial Automation Technology" },
      { code: "BOEC-804(B)", title: "Machine Learning" },
      { code: "BOEC-804(C)", title: "Underwater Communication" },
      { code: "BOEC-804(D)", title: "Subject from SWAYAM" },
    ],
  },
];

export const hod = [
  {
    name: "Mr. Abhishek Chakravorty",
    email: "eee.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Electronics and Communication Engineering",
    imageUrl: abhishekchakrovarty, // Replace with the actual image path
  },
];

export const facultyData = [
  {
    name: "Dr. Nishant Saxena",
    designation: "PROFESSOR",
    education: "P.hd ",
    publications: "35",
    experience: "25",
    linkTo: "/about/management-messages/#4",
    imageUrl: NISHANT,
    resume: NISHANTResume,
  },
  {
    name: "Mr. Vaibhav Kumar",
    designation: "ASST PROFESSOR",
    education: "M.Tech",
    publications: "2",
    experience: "10",
    imageUrl: VAIBHAVKUMAR,
    resume: VAIBHAVKUMARResume,
  },
  {
    name: "Mr. Mukesh Pathela",
    designation: "ASST PROFESSOR",
    education: "M.Tech P.hd (P)",
    publications: "15",
    experience: "17",
    imageUrl: MukeshPathela,
    resume: MukeshPathelaResume,
  },
  {
    name: "Mr. Sandeep Khantwal",
    designation: "ASST PROFESSOR",
    education: "M.Tech P.hd (P)",
    publications: "47",
    experience: "8",
    imageUrl: SANDEEPKHANTWAL,
    resume: SANDEEPKHANTWALResume,
  },
  {
    name: "Mr. Rahul Negi",
    designation: "ASST PROFESSOR",
    education: "M.Tech",
    publications: "4",
    experience: "4",
    imageUrl: RAHULNEGI,
    resume: RAHULNEGIResume,
  },
  {
    name: "Ms. Nanse",
    designation: "ASST PROFESSOR",
    education: "M.Tech P.hd (P)",
    publications: "2",
    experience: "5",
    imageUrl: NANSE,
    resume: NANSEResume,
  },
  {
    name: "Mr. Sandeep Gotam",
    designation: "ASST PROFESSOR",
    education: "M.Tech P.hd (P)",
    publications: "4",
    experience: "15",
    imageUrl: SandeepKumar,
    resume: SandeepKumarResume,
  },
  {
    name: "Ms. Himani Rawat",
    designation: "ASST PROFESSOR",
    education: "M.Tech",
    publications: "0",
    experience: "2",
    imageUrl: HimaniRawat,
    resume: HimaniRawatResume,
  },
  {
    name: "Mr Lokesh Bhargava",
    designation: "ASST PROFESSOR",
    education: "M.Tech",
    publications: "2",
    experience: "5",
    imageUrl: Lokesh,
    resume: LokeshResume,
  },
  {
    name: "Ms Ragini shukla",
    designation: "ASST PROFESSOR",
    education: "M.Tech",
    publications: "6",
    experience: "10",
    imageUrl: Rajni,
    resume: RajniResume,
  },
  {
    name: "Ms Swati Joshi",
    designation: "ASST PROFESSOR",
    education: "M.Tech",
    publications: "4",
    experience: "3",
    imageUrl: swati,
    resume: swatiResume,
  },
];

export const HODcontent = (
  <>
    Electronics and Communication Engineering is one of the largest and fastest
    growing fields of engineering. Vision of the department is to produce
    quality engineers in the field of Electronics and Communication Engineering
    by providing core technical skills. Electronics engineering has wide
    applications in improving productivity in all types of industries.
    <br />
    <br />
    The department has well-equipped laboratories in almost every field of
    electronics and communication engineering, to give practical exposure to the
    students. The department is mentored by proficient faculty members who are
    experts in their own disciplines. Department focuses on collaboration with
    industry, research organizations and academia to encourage creativity and
    innovation. These events cultivate the soft, technical skills, attitude and
    self-confidence of the students. Students are encouraged to participate in
    various activities like paper presentation, technical quiz, project design,
    project contests, sports, and cultural activities. Students are motivated to
    undergo In-Plant training and many industrial visits are arranged every year
    to get industry exposure. The department has also developed a start-up and
    entrepreneurship eco system to inculcate the new idea.
  </>
);

export const specialization = (
  <>
    <strong>SPECIALIZATION IN INTERNET OF THINGS (IoT)</strong>
    <br />
    <br />
    This Specialization covers the study of Internet of Things (IoT) products
    and services—including devices for sensing, actuation, processing, and
    communication to help students develop skills and experiences in designing
    novel systems. The Specialization has theory and lab sections. In the lab
    sections you will learn hands-on IoT concepts such as sensing, actuation and
    communication.
    <br />
    <br />
    The specialization will give the theoretical and practical learning of
    internet and communication protocols. This will help the students to develop
    heterogeneous applications in the field of the internet of things (IoT). The
    program includes the knowledge of various terminologies and protocols of
    IoT, WSN and machine to machine communication.
    <br />
    <br />
    CARRER PROSPECTS
    <br />
    <ul className="ml-5 list-disc">
      <li>Industry as IoT Developer</li>
      {/* <li>Research Institutions</li> */}
      <li>Artificial Intelligence and machine learning</li>
      <li>IoT governance & Sensor Innovation.</li>
      {/* <li>Sensor Innovative.</li>
      <li>Social, legal and ethical IoT.</li>
      <li>Trusted hardware and OS.</li>
      <li>Latest IoT User experience.</li> */}
    </ul>
  </>
);

export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: [
      // "Following Clubs/Societies/ Memberships are running in the department",
      // "Embedded Club",
      "Society of Electronics and Communication Engineering",
      "IEEE Memberships and IEEE Student Chapter( Power & Energy Society)",
      // "VIBGYOR",
    ],
    image: USP,
  },
  {
    title: "Edge Over Others",
    description: [
      "Recently the union cabinet of Indian government sanctioned the INR 76,000 Crores incentive scheme for semiconductors. Under this scheme, India will set up more than 20 semiconductor design, components manufacturing and display fabrication units. The scheme has been named the “Programme for Development of Semiconductors and Display Manufacturing Ecosystem.”",
      "The plan envisages training 85,000 semiconductor engineers to make it a complete C to S (chips to start-ups) ecosystem (including design, fabrication, testing and packaging). Govt clears 3 semiconductor projects worth Rs 1.3 Lakh cr by ",
    ],
    image: Program,
    points: [
      "1. Tata electronics Pvt Ltd in Dholera Gujrat",
      "2. Tata Semiconductor Assembly and Test Pvt Ltd in Morigaon Assam",
      "3. CG power and industrial Solutions Ltd in Sanand Gujrat",
    ],
  },
  {
    title: "Beyond Curriculum",
    description: [
      "Apart from the regular curriculum as specified by the university, we also conduct various Workshops/ Seminars/ Short term courses/ Expert Talks as add on certifications to the students. These activities enhance the learning skills of the students and make them ready for the industry. We also conduct various industrial trips regularly to make students aware state of the art technologies used in the industries.",
    ],
    image: Program,
    points: [
      "Add on certification programs on:",
      "1. IoT and Its applications",
      "2. Simulation and modelling of Electric Vehicles",
      "3. Embedded Electric Vehicle system using STM 32",
      "4. Industrial Automation using PLC & SCADA",
      "5. PCB designing",
    ],
  },
  {
    title: "Career Prospects",
    description: [
      "CAREER PROSPECTS: Electronics and Communication Engineers are highly demanded in fields such as Network Engineering, Aeronautics Electronics Systems, Electronic Surveillance System, Mobile Communication, Embedded Systems, Power Industry, Software Development, etc. The department focuses on stimulating talent which is professionally superior in meeting global challenges of the industry. The faculty lays emphasis on both theory and practical aspects, industry-relevant knowledge which prepares students for challenging scenarios.",
    ],
    image: Program,
    points: [
      "As an Electronics and Communication Engineer students can apply for central government job, state government job, and public & private sectors jobs. Some job titles are listed here:",
      "Electronics Engineer",
      "Radio Frequency Engineer",
      "Air Traffic Controller",
      "Field Test Engineer",
      "Telecom Officer",
      "Radio Officers in Navy and Merchant Navy",
      "Network Planning Engineer",
      "Electronics and Communications Consultant",
      "Customer Support Engineer",
      "Electronics Technician",
      "Associate First line Technician",
      "Research and Development Software Engineer",
      "Service Engineer",
      "Senior Sales Manager",
      "Technical Director",
    ],
  },
];
