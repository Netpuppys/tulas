import computerScience from "../../../../../public/courses/btech/computer-science/computer-science.png";
import USP from "../../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../../public/bsc-agriculture/Crousel/Program.png";
import EceDocument from "../../../../../public/courses/btech/electronics-and-communication/ECE.pdf";
import DepartmentalVission from "../../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../../public/courses/bjmc/departmentalMission.png";
import AbhishekChakravorty from "../../../../../public/courses/btech/electronics-and-communication/facultyData/AbhishekChakravorty.webp";
import NishantSaxena from "../../../../../public/courses/btech/electronics-and-communication/facultyData/NishantSaxena.webp";
import SunilSemwal from "../../../../../public/courses/btech/electronics-and-communication/facultyData/SunilSemwal.webp";
import Mukesh from "../../../../../public/courses/btech/electronics-and-communication/facultyData/Mukesh.webp";
import TripureshJoshi from "../../../../../public/courses/btech/electronics-and-communication/facultyData/TripureshJoshi.webp";
import sandeepgautam from "../../../../../public/courses/btech/electronics-and-communication/facultyData/sandeepgautam.webp";
import VaibhavKumar from "../../../../../public/courses/btech/electronics-and-communication/facultyData/VaibhavKumar.webp";
import MohitKumar from "../../../../../public/courses/btech/electronics-and-communication/facultyData/MohitKumar.webp";
import SandeepKhantwal from "../../../../../public/courses/btech/electronics-and-communication/facultyData/SandeepKhantwal.webp";
import himani from "../../../../../public/courses/btech/electronics-and-communication/facultyData/himani.webp";
import RahulNegi from "../../../../../public/courses/btech/electronics-and-communication/facultyData/RahulNegi.webp";
import ParwatiBhandari from "../../../../../public/courses/btech/electronics-and-communication/facultyData/ParwatiBhandari.webp";
import Link from "next/link";

export const images = [
  computerScience,
  // Add more image paths as needed
];
export const content = (
  <>
    <strong>About the Program</strong>
    <br />
    <br />
    The department started since inception of the institute i.e. 2006, with a
    vision to become a leading Centre of Excellence for Education, and Research.
    Since then, it has been widely recognized for its excellent research and
    teaching capabilities. We offer Bachelor of Technology (B.Tech.) degree
    program in Electronics and Communication Engineering.
    <br />
    <br />
    This department has established itself as an efficient, self-reliant and
    quality conscious entity with the sole aim of producing the most energetic,
    enthusiastic and professionally competent Electronics and Communication
    Engineers with ability to take up the challenges of the field.
    <br />
    <br />
    Electronics and Communication engineering deals with the electronic devices,
    circuits, communication equipments like transmitter and receiver, integrated
    circuits (IC) like microprocessors and microcontrollers etc. It also deals
    with analog and digital communication of the information like audio and
    video, satellite communication, microwave engineering, antenna and wave
    propagation. It also deals with the latest communication protocols like 5G,
    6G, and Voice over internet protocol (VoIP) as well as the latest technology
    like, Internet of things (IoT), Robotics etc. It aims to deepen the
    knowledge and skill of the students on the basic concepts and theories that
    will equip them in their professional work involving analysis, systems
    implementation, operation, production, and maintenance of the various
    applications in the field of Electronics and Communications Engineering. It
    now encompasses more areas than before, being thus a modern and important
    profession for the industrial sector, the scientific fields and for
    technological development.
  </>
);
export const items = [
  {
    title: "USP of the of Electronics and Communication Engineering",
    description: "Industry-led & Practice Based Curriculum.",
    image: USP,
  },
  {
    title: "COURSE OUTCOMES",
    description: <Link href={EceDocument}>B.Tech ECE</Link>,
    image: Course,
  },
  {
    title: "Program Outcomes",
    description:
      " Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    image: Program,
  },
  {
    title: "Program Specific Outcome",
    description:
      " PSO1 : To develop the ability to apply concepts from electronics, communications, signal processing, VLSI, control systems, and other fields to the design, development, and implementation of application-oriented engineering systems.",
    image: Course,
  },
  {
    title: "Program Educational Objective",
    description:
      "To provide strong technical, hands-on, critical thinking, and team player abilities will enable them to pursue successful jobs in industry.",
    image: Program,
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
        <ul classname="list-disc ml-5">
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
      {
        code: "BCSP 101",
        title: "Fundamentals of Computers & Programming in C",
      },
      { code: "BMEP 101", title: "Manufacturing Practices/Workshop" },
      { code: "BASP 102", title: "Internship-I" },
      { code: "BASP 105", title: "Swachh Bharat Summer Internship" },
    ],
  },

  {
    semester: "II SEMESTER",
    subjects: [
      { code: "BAST 104", title: "Engineering Physics" },
      { code: "BAST 102", title: "Mathematics-II" },
      { code: "BMET 102", title: "Basic Mechanical Engineering" },
      { code: "BCET 101", title: "Basic Civil Engineering & Mechanics" },
      { code: "BEST 101", title: "Environmental Studies" },
      { code: "PRACTICAL" },
      { code: "BASP 104", title: "Engineering Physics lab" },
      { code: "BMEP 102", title: "Basic Mechanical Engineering lab" },
      { code: "BCEP 101", title: "Basic Civil Engineering & Mechanics lab" },
      { code: "BMEP 103", title: "Engineering Graphics" },
      { code: "BASP 106", title: "Language lab & Seminars" },
      { code: "BASP 102", title: "Internship-I" },
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
      { code: "PRACTICAL" },
      {
        code: "BEEP 301",
        title: "Electrical Measurement & Instrumentation Lab",
      },
      { code: "BEEP 305", title: "Network Analysis And Synthesis Lab" },
      { code: "BECP 303", title: "Digital Electronics Lab" },
      { code: "BECP 304", title: "Electronic Devices Lab" },
      { code: "BASP 307", title: "Evaluation of Internship-I" },
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
      { code: "PRACTICAL" },
      { code: "BECP 403", title: "Analog Communication Lab" },
      { code: "BEEP 404", title: "Control System Lab" },
      { code: "BECP 405", title: "Analog Circuits Lab" },
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
      { code: "PRACTICAL" },
      { code: "BECP 501", title: "Microprocessor & Interfacing Lab" },
      { code: "BEEP-502", title: "Electromagnetic Field Theory Lab" },
      { code: "BECP 503", title: "VLSI Technology and Design Lab" },
      { code: "BECP-506", title: "Simulation Software Lab" },
      { code: "BECP-507", title: "Evaluation of Internship-II" },
      { code: "Departmental Electives" },
      { code: "BECT 504(A)", title: "CNTL" },
      { code: "BECT 504(B)", title: "Data Communication and Networks" },
      { code: "BECT 504(C)", title: "Advanced Control System" },
      { code: "BECT 504(D)", title: "IC Technology" },
      { code: "Open Electives" },
      { code: "BOEC-505(A)", title: "Data Structure using C++" },
      { code: "BOEC-505(B)", title: "Computer System Organisation" },
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
      { code: "PRACTICAL" },
      { code: "BECP-601", title: "Digital Signal Processing Lab" },
      { code: "BECP-602", title: "Antenna and Wave Propagation Lab" },
      { code: "BECP-603", title: "Digital Communication Lab" },
      { code: "BECP-606", title: "Open Source Software Lab" },
      { code: "BECP-607", title: "Minor Project-I" },
      { code: "Departmental Electives" },
      { code: "BECT 604(A)", title: "Cellular and Mobile Communication" },
      { code: "BECT 604(B)", title: "CMOS Design" },
      { code: "BECT 604(C)", title: "Satellite Communication" },
      { code: "BECT 604(D)", title: "High Speed Electronics" },
      { code: "Open Electives" },
      { code: "BOEC-605(A)", title: "Microcontroller and Embedded System" },
      { code: "BOEC-605(B)", title: "Biomedical Electronics" },
      { code: "BOEC-605(C)", title: "Power Electronics" },
      { code: "BOEC-605(D)", title: "IoT and Application" },
    ],
  },
  {
    semester: "VII SEMESTER",
    subjects: [
      { code: "BECT-701", title: "Microwave Engineering" },
      { code: "BECT-702", title: "Optical Fibre Communication" },
      { code: "BECT-703(A/B/C/D)", title: "Departmental Elective" },
      { code: "BOEC-704(A/B/C/D)", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BECP-701", title: "Microwave Engineering Lab" },
      { code: "BECP-702", title: "Optical Fibre Communication Lab" },
      { code: "BECP-705", title: "Virtual Lab" },
      {
        code: "BECP-706",
        title: "Evaluation of Internship-II (completed at II Year)",
      },
      { code: "BECP-707", title: "Minor Project-II" },
      { code: "Departmental Electives" },
      { code: "BECT-703(A)", title: "Mixed Circuit Design" },
      { code: "BECT-703(B)", title: "Digital Image Processing" },
      { code: "BECT-703(C)", title: "Advanced Communication Systems" },
      { code: "BECT-703(D)", title: "Wireless Sensor Networks" },
      { code: "Open Electives" },
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
      { code: "PRACTICAL" },
      { code: "BECP-801", title: "Television and Radar Engineering Lab" },
      { code: "BECP-802", title: "Wireless Communications Lab" },
      { code: "BECP-805", title: "Major Project" },
      { code: "Departmental Electives" },
      { code: "BECT-803(A)", title: "Digital System Design using VHDL" },
      { code: "BECT-803(B)", title: "Adaptive Signal Processing" },
      { code: "BECT-803(C)", title: "Telecommunication Switching System" },
      { code: "BECT-803(D)", title: "SDN and Cognitive Radio Networks" },
      { code: "Open Electives" },
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
    imageUrl: AbhishekChakravorty, // Replace with the actual image path
  },
];

export const facultyData = [
  {
    name: "Dr. Nishant Saxena",
    education: "B.Tech, M.Tech., Ph.D.",
    experience: "20 Yrs.",
    designation: "Professor and Dean Academics",
    specialization: "Biomedical Electronics",
    publications:
      "35+ Research publications in reputed journals and conferences",
    imageUrl: NishantSaxena,
  },
  {
    name: "Dr. Sunil Semwal",
    education: "B.Tech, M.E., Ph.D.",
    experience: "14 Yrs.",
    designation: "Associate Professor and Dean R&D",
    specialization:
      "Artificial Intelligence, Smart Metering Systems, Machine Learning",
    publications:
      "31 Research publications in reputed journals and conferences",
    imageUrl: SunilSemwal,
  },
  {
    name: "Mr. Mukesh Pathela",
    education: "B.E., M.Tech., Ph.D. (Pursuing)",
    experience: "17 Yrs.",
    designation: "Assistant Professor",
    specialization:
      "Analog Circuits, Digital Communication, Digital Image Processing",
    publications:
      "14 Research publications in reputed journals and conferences",
    imageUrl: Mukesh,
  },
  {
    name: "Dr. Tripuresh Joshi",
    education: "B.Tech, M.Tech, Ph.D.",
    experience: "11 Yrs.",
    designation: "Assistant Professor",
    specialization: "Soilid State Devices, TFET, Optoelectronics",
    publications:
      "15 Research publications in reputed journals and conferences",
    imageUrl: TripureshJoshi,
  },
  {
    name: "Mr. Sandeep Gautam",
    education: "Ph.D. (Pursuing)",
    experience: "12 Yrs.",
    designation: "Assistant Professor",
    specialization: "Instrumentation and Automation",
    publications: "9 Research publications in reputed journals and conferences",
    imageUrl: sandeepgautam,
  },
  {
    name: "Mr. Vaibhav Kumar",
    education: "B.Tech, M.Tech",
    experience: "10 Yrs.",
    designation: "Assistant Professor",
    specialization: "Wireless Mobile Communication",
    publications: "4 Research publications in reputed journals and conferences",
    imageUrl: VaibhavKumar,
  },
  {
    name: "Mr. Mohit Kumar",
    education: "B.Tech, M.Tech",
    experience: "10 Yrs.",
    designation: "Assistant Professor",
    specialization: "Artificial Intelligence and Bio-Medical",
    publications: "3 Research publications in reputed journals and conferences",
    imageUrl: MohitKumar,
  },
  {
    name: "Mr. Sandeep Khantwal",
    education: "B.Tech, M.Tech, Ph.D. (Pursuing)",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    specialization: "VLSI",
    publications:
      "16 Research publications in reputed journals and conferences",
    imageUrl: SandeepKhantwal,
  },
  {
    name: "Ms. Himani Rawat",
    education: "B.Tech, M.Tech",
    experience: "3 Yrs.",
    designation: "Assistant Professor",
    specialization: "Communication Systems, Machine Learning",
    publications: "3",
    imageUrl: himani,
  },
  {
    name: "Mr. Rahul Negi",
    education: "B.Tech, M.Tech",
    experience: "3 Yrs.",
    designation: "Assistant Professor",
    specialization: "Instrumentation and Control",
    publications: "2 Research publications in reputed journals and conferences",
    imageUrl: RahulNegi,
  },
  {
    name: "Ms. Parvati Bhandari",
    education: "B.Tech, M.Tech",
    experience: "4 Yrs.",
    designation: "Assistant Professor",
    specialization: "Wireless and Mobile Communication",
    publications: "1 Research publication in reputed journals and conferences",
    imageUrl: ParwatiBhandari,
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
      <li>Research Institutions</li>
      <li>Artificial Intelligence and machine learning</li>
      <li>IoT governance.</li>
      <li>Sensor Innovative.</li>
      <li>Social, legal and ethical IoT.</li>
      <li>Trusted hardware and OS.</li>
      <li>Latest IoT User experience.</li>
    </ul>
  </>
);

export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description:
      "Following Clubs/Societies/ Memberships are running in the department",
    image: USP,
  },
  {
    title: "Edge over others",
    description:
      "Recently the union cabinet of Indian government sanctioned the INR 76,000 Crores incentive scheme for semiconductors.",
    image: Program,
  },
  {
    title: "Beyond Curriculum",
    description:
      "Apart from the regular curriculum as specified by the university, we also conduct various Workshops/ Seminars/ Short term courses/ Expert Talks as add on certifications to the students.",
    image: Program,
  },
  {
    title: "Career Prospects",
    description:
      "Electronics and Communication Engineers are highly demanded in fields such as Network Engineering, Aeronautics Electronics Systems, Electronic Surveillance System, Mobile Communication, Embedded Systems, Power Industry, Software Development, etc.",
    image: Program,
  },
];