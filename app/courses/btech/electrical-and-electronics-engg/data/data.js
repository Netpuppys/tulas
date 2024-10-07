import dataScience from "../../../../../public/courses/btech/computer-science-engineering-data-science/dataScience.png";
import USP from "../../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../../public/bsc-agriculture/Crousel/Program.png";
import DepartmentalVission from "../../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../../public/courses/bjmc/departmentalMission.png";
import Kothari from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/Kothari.webp";
import SunilSemwal from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/SunilSemwal.webp";
import MukeshPathela from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/MukeshPathela.webp";
import AbhishekChakravorty from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/AbhishekChakravorty.webp";
import Nanse from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/Nanse.webp";
import Rashmi from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/Rashmi.webp";
import VrijMohan from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/VrijMohan.webp";
import sushmaMam from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/sushmaMam.webp";
import amitUniyal from "../../../../../public/courses/btech/electrical-and-electronics/facultyData/amitUniyal.webp";

import EEEpdf from "../../../../../public/courses/btech/electrical/EEE.pdf";
import Link from "next/link";
export const images = [
  dataScience,
  // Add more image paths as needed
];
export const content = (
  <>
    Department of Electrical and Electronics Engineering started since inception
    of the institute i.e. 2006, with a vision to become a leading Centre of
    Excellence for Education for creating employability in field of Power
    Systems, Power Electronics, Automation, VLSI, Control Systems, Electric
    Vehicles, Computer Vision, and Artificial Intelligence, Renewable Energy
    resources, Smart Grids and IoT networks.
    <br />
    <br />
    Department of Electrical and Electronics Engineering mainly focuses on
    creating talented and socially responsible engineers to make our country
    energy efficient (Green and Clean energy). It will strive to become a hub of
    research excellence in cutting edge, state of the art, and contemporary
    areas of national and international relevance. The department also envisions
    itself as a Centre of excellence in teaching to create a well-educated,
    technically competent, and socially responsible workforce for meaningful,
    inclusive, and overall societal development of India and the world.
  </>
);
export const items = [
  {
    title: "USP of the Electrical and Electronics Engineering",
    description: "Industry-led and Practice Based Curriculum.",
    image: USP,
  },
  {
    title: "COURSE OUTCOMES",
    description: <Link href={EEEpdf}>B.Tech EEE</Link>,
    image: Program,
  },
  {
    title: "Program Outcomes",
    description:
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    image: Course,
  },
  {
    title: "PROGRAM SPECIFIC OUTCOMES",
    description:
      "To identify, develop, construct, and explore complex engineering issues involving electric circuits, control systems, electrical machines, and power systems, apply the fundamentals of science, mathematics, and engineering.",
    image: Course,
  },
  {
    title: "Programme Educational Objectives",
    description:
      "To prepare students to learn and apply cutting-edge technologies in the field of Electrical and Electronic engineering.",
    image: Program,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To be recognized as a center of excellence in producing competent power, network, testing, production, quality control Engineers capable of fostering innovation for societal advancement.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To provide quality education to students in electrical engineering,
            as well as interdisciplinary areas, using a set curriculum and
            modern methodologies.
          </li>
          <li>
            To promote the entrepreneurial mind-set among students and faculty
            by supporting initiatives to incubate innovative ideas, develop
            prototypes, and establish start-ups in the field of electrical to
            meet industry demands.
          </li>
          <li>
            To provide educators and students with sufficient resources to
            foster interdisciplinary and collaborative aspect to drive research
            & innovation and address global challenges.
          </li>
          <li>
            To impart the solutions in the field of sustainable system
            development in green energy for social needs.
          </li>
          <li>
            To foster experiential learning opportunities, internships, and
            projects, ensuring students gain real-world insights and skills.
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
      { code: "BCET 301", title: "Energy & Environment Engineering" },
      { code: "BEST 301", title: "Mathematics-III" },
      { code: "BEET 301", title: "Electrical Measurement & Instrumentation" },
      { code: "BECT 304", title: "Electronic Devices" },
      { code: "BEET 305", title: "Network Analysis And Synthesis" },
      { code: "PRACTICAL" },
      {
        code: "BEEP 301",
        title: "Electrical Measurement & Instrumentation Lab",
      },
      { code: "BEEP 305", title: "Network Analysis And Synthesis Lab" },
      { code: "BEEP 306", title: "Programming Practices" },
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
      { code: "BEET 402", title: "Electrical And Machine-I" },
      { code: "BECT 401", title: "Digital Electronics" },
      { code: "BEET 404", title: "Power System-I" },
      { code: "BEET 405", title: "Control System" },
      { code: "BHUT 401", title: "Universal Human Values-2" },
      { code: "PRACTICAL" },
      { code: "BEEP 402", title: "Electrical And Machine-I Lab" },
      { code: "BECP 401", title: "Digital Electronics Lab" },
      { code: "BEEP 404", title: "Power System-I Lab" },
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      { code: "BEET 501", title: "Electrical Machine-II" },
      { code: "BEET 502", title: "Power System-II" },
      { code: "BEET 503(A/B/C)", title: "Departmental Elective" },
      { code: "BOET 504(A/B/C)", title: "Open Elective" },
      { code: "BEET 505", title: "Electromagnetic Field Theory" },
      { code: "PRACTICAL" },
      { code: "BEEP 501", title: "Electrical Machine-II LAB" },
      { code: "BEEP 502", title: "Power System-II LAB" },
      { code: "BENP 507", title: "Open Source LAB" },
      {
        code: "BENP 506",
        title: "Evaluation of Internship-II completed at II year level",
      },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BEET 503A", title: "CAD of Power Apparatus" },
      { code: "BEET 503B", title: "Applied Instrumentation" },
      { code: "BEET 503C", title: "Electrical Engineering Material" },
      { code: "Open Electives" },
      { code: "BOET-504(A)", title: "Digital Control System" },
      { code: "BOET-504(B)", title: "Communication Engineering" },
      { code: "BOET-504(C)", title: "Industrial electronics" },
      { code: "BOET-504(D)", title: "Innovation and Entrepreneurship" },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      { code: "BEET 601", title: "Power Electronics" },
      { code: "BECT 602", title: "Microprocessor & Embedded Systems" },
      { code: "BECT 603", title: "Digital Signal Processing" },
      { code: "BEET 604(A/B/C)", title: "Departmental Elective" },
      { code: "BOET 605(A/B/C)", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BEEP 601", title: "Power Electronics LAB" },
      { code: "BECP 602", title: "Microprocessor & Embedded Systems LAB" },
      { code: "BECP 603", title: "Digital Signal Processing LAB" },
      { code: "BEEP 606", title: "Simulation Lab/Virtual Lab" },
      { code: "BEEP 607", title: "Minor Project-I" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BEET-604(A)", title: "FACTS" },
      { code: "BEET-604(B)", title: "Energy Management and SCADA" },
      { code: "BEET-604(C)", title: "NCER" },
      { code: "Open Electives" },
      { code: "BOET-605(A)", title: "Introduction to smart grids" },
      { code: "BOET-605(B)", title: "Power Plant Engineering" },
      { code: "BOET-605(C)", title: "Special Electromechanical Systems" },
    ],
  },
  {
    semester: "VII SEMESTER",
    subjects: [
      { code: "BEET 701", title: "Switch Gear And Protection" },
      {
        code: "BEET 702",
        title: "Utilization of Electrical Energy and Traction",
      },
      { code: "BEET 703(A/B/C)", title: "Departmental Elective" },
      { code: "BOCT 704(A/B/C/D)", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BEEP 701", title: "Switch Gear And Protection LAB" },
      {
        code: "BEEP 702",
        title: "Utilization of Electrical Energy and Traction lab",
      },
      { code: "BEEP 705", title: "Open Source S/w lab" },
      {
        code: "BENP 706",
        title: "Evaluation of Internship-II completed at II year level",
      },
      { code: "BEEP 707", title: "Minor Project-II" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BEET-703(A)", title: "Soft computing Techniques" },
      { code: "BEET-703(B)", title: "Non Conventional Energy resources" },
      { code: "BEET-703(C)", title: "High Voltage Engineering" },
      { code: "Open Electives" },
      { code: "BOCT-704(A)", title: "Internet of things" },
      {
        code: "BOCT-704(B)",
        title: "Advances in Entrepreneurship Development",
      },
      {
        code: "BOCT-704(C)",
        title: "Probability theory and stochastic process",
      },
      { code: "BOCT-704(D)", title: "Robotics and automation" },
    ],
  },
  {
    semester: "VIII SEMESTER",
    subjects: [
      { code: "BEET 801", title: "Advance Control system" },
      { code: "BEET 802", title: "Electric Drive and its applications" },
      { code: "BEET 803(A/B/C)", title: "Departmental Elective" },
      { code: "BOCT 804(A/B/C)", title: "Open Elective" },
      { code: "PRACTICAL" },
      { code: "BEEP 801", title: "Advance Control system LAB" },
      { code: "BEEP 802", title: "Electric Drive and its applications LAB" },
      { code: "BEEP 805", title: "Major Project" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BEET-803(A)", title: "Digital Image processing" },
      { code: "BEET-803(B)", title: "Bio Medical Instrumentation" },
      {
        code: "BEET-803(C)",
        title: "Modelling and analysis of electric machines",
      },
      { code: "Open Electives" },
      { code: "BOCT-804(A)", title: "Cyber Security" },
      { code: "BOCT-804(B)", title: "Machine Learning" },
      { code: "BOCT-804(D)", title: "Cloud Computing" },
    ],
  },
];

export const hod = [
  {
    name: "Mr. Abhishek Chakravorty",
    email: "eee.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Electrical and Electronics Engineering",
    imageUrl: AbhishekChakravorty, // Replace with the actual image path
  },
];

export const facultyData = [
  {
    name: "Dr. D.P. Kothari",
    education: "B.Tech, M.Tech., Ph.D.",
    experience: "53 Yrs.",
    designation: "Adjunct Professor",
    specialization: "Power System, Electrical Machines, Networks theory",
    publications:
      "840 Research publications in reputed journals and conferences",
    imageUrl: Kothari,
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
    designation: "Assistant Professor and HoD",
    specialization:
      "Analog Circuits, Digital Communication, Digital Image Processing",
    publications: "14",
    imageUrl: MukeshPathela,
  },
  {
    name: "Mr. Abhishek Chakravorty",
    education: "B.Tech, M.Tech",
    experience: "10 Yrs.",
    designation: "Assistant Professor",
    specialization: "Instrumentation and Control",
    publications: "7 Research publications in reputed journals and conferences",
    imageUrl: AbhishekChakravorty,
  },
  {
    name: "Ms. Nanse",
    education: "B.Tech, M.Tech",
    experience: "4 Yrs.",
    designation: "Assistant Professor",
    specialization: "Instrumentation",
    publications: "2 Research publications in reputed journals and conferences",
    imageUrl: Nanse,
  },
  {
    name: "Ms. Rashmi Dhaundiyal",
    education: "B.Tech, M.Tech",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    specialization: "Power System",
    publications: "2 Research publications in reputed journals and conferences",
    imageUrl: Rashmi,
  },
  {
    name: "Mr. Vrij Mohan Vidyarthi",
    education: "B.Tech, M.Tech",
    experience: "8 Yrs.",
    designation: "Assistant Professor",
    specialization: "Power Electronics",
    publications: "5 Research publications in reputed journals and conferences",
    imageUrl: VrijMohan,
  },
  {
    name: "Mrs. Sushma",
    education: "B.Tech, M.Tech",
    experience: "12 Yrs.",
    designation: "Assistant Professor",
    specialization: "Control System",
    publications: "7 Research publications in reputed journals and conferences",
    imageUrl: sushmaMam,
  },
  {
    name: "Mr. Amit Unial",
    education: "B.Tech, M.Tech",
    experience: "5 Yrs.",
    designation: "Assistant Professor",
    specialization:
      "Power System Optimization, Power Electronic Converters, EV",
    publications: "N/A",
    imageUrl: amitUniyal,
  },
];

export const HODcontent = (
  <>
    Electrical and Electronics Engineering is one of the largest and fastest
    growing fields of engineering. Vision of the department is to produce
    quality engineer in the field of Electrical and Electronics Engineering by
    providing core technical skills. Electronics engineering has wide
    applications in improving productivity in all type of industries.
    <br />
    <br />
    The department has well-equipped laboratories in almost every field of
    electronics and electrical engineering, to give practical exposure to the
    students. The department is mentored by proficient faculty members who are
    experts in their own disciplines. Department focuses on collaboration with
    industry, research organizations and academia to encourage creativity and
    innovation. These events cultivate the soft, technical skills, attitude and
    self-confidence of the students. Students are encouraged to participate in
    various activities like paper presentation, technical quiz, project design,
    project contests, sports, and cultural activities. Students are motivated to
    undergo In-Plant training and many industrial visits are arranged every year
    to get industry exposure. The department has also developed start-up and
    entrepreneurship eco system to inculcate the new idea.
  </>
);
export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: "Embedded Club",
    image: USP,
  },
  {
    title: "Edge over others",
    description:
      "The Overall employment of electrical and electronics engineers is projected to grow 7 percent from 2020 to 2030, about as fast as the average for all occupations.",
    image: Course,
  },
  {
    title: "Beyond Curriculum",
    description:
      "Apart from the regular curriculum as specified by the university, we also conduct various workshops/ seminar/Short term courses / Expert talks as add on certifications to the students. These activities enhance the learning skills of the student and make them ready for the industry. Department also conducts industrial visits to aware the students about the recent trends and technologies of the industry.",
    image: Program,
  },
  {
    title: "Career Prospects",
    description:
      "An Electrical engineer determines how to design and improve electrical products along with the systems, evaluating systems’ safety, reliability, and performance. Electrical engineers work in many sectors including power and renewable energy companies",
    image: Program,
  },
];
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
