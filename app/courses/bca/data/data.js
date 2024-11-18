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
    <center className="italic font-black">
      Your Gateway to the Digital World
    </center>
    <br />
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
    title: "USP - Empowering You to Thrive in the World of Technology",
    description: [
      "At Tula's Institute, we offer a Bachelor of Computer Applications (BCA) program designed for future tech innovators and problem-solvers. Our industry-oriented curriculum, hands-on training, and personalized guidance prepare students to excel in today’s competitive IT landscape. Here’s why BCA at Tula’s Institute is the ideal choice for building your future:",
    ],
    image: USP,
    points: [
      <ul className="list-disc ml-5">
        <li>
          <strong>In-Demand Skills for a Future-Ready Career</strong>
          <br />
          Gain mastery in the most sought-after programming languages, including
          C, C++, Java, and Python. Learn core topics in web development,
          database management, and networking from experienced faculty with
          real-world expertise. At Tula’s, we don’t just teach technology; we
          prepare you to thrive in it.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Unmatched Career Opportunities</strong>
          <br />
          Our BCA graduates step into fulfilling careers as software developers,
          system analysts, database administrators, IT consultants, and more.
          With the tech world expanding rapidly into areas like artificial
          intelligence, data science, and cybersecurity, a degree from Tula’s
          Institute positions you at the forefront of these advancements.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Practical, Hands-On Learning</strong>
          <br />
          With a curriculum that balances theory and practical application,
          students at Tula’s gain valuable real-world experience. Through
          industry projects, internships, and workshops, you’ll apply classroom
          learning to solve real business challenges. By graduation, you’ll be
          job-ready with an impressive portfolio of projects and practical
          skills.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Pathways to Advanced Education</strong>
          <br />
          Tula's BCA program sets you up for success, whether you aim to pursue
          an MCA, MBA, or any other advanced degree. Our program is designed to
          equip you with the foundational knowledge and academic rigor necessary
          to excel in higher education and beyond.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Entrepreneurial Empowerment</strong>
          <br />
          Our BCA program isn’t just about landing a job; it’s about building a
          future. Whether you dream of launching your own tech start-up or
          developing a groundbreaking app, Tula’s Institute equips you with the
          skills, network, and confidence to succeed as a tech entrepreneur.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Vibrant, Supportive Campus Culture</strong>
          <br />
          Join a diverse community of ambitious students and skilled faculty in
          a dynamic learning environment. Our campus offers state-of-the-art
          facilities, modern labs, and numerous student clubs where you can
          sharpen your skills, grow your network, and find lifelong mentors.
        </li>
      </ul>,
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
    title: "Opportunities in BCA - Unlock Your Future in Technology",
    description: [
      "Choosing a Bachelor of Computer Applications (BCA) opens up a world of learning and growth in one of the most sought-after fields today. As a BCA student, you’ll immerse yourself in a curriculum that combines technical skills with practical experiences, preparing you for a variety of exciting roles in technology. Here’s what you can look forward to during your BCA journey:",
    ],
    image: USP,
    points: [
      <ul className="list-disc ml-5">
        <li>
          <strong>Cutting-Edge Curriculum:</strong>
          <br />
          Gain proficiency in programming languages like Java, Python, C++, and
          more. With courses in database management, networking, and software
          development, BCA covers everything you need to excel in the tech
          world.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Hands-On Projects:</strong>
          <br />
          Get practical experience through projects that solve real-world
          problems, allowing you to build a portfolio that showcases your skills
          to future employers.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Internships and Industrial Visits:</strong>
          <br />
          Experience firsthand how the industry operates through internships and
          industrial visits that give you a clear picture of life in the tech
          world.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Add-On Certifications:</strong>
          <br />
          Enhance your expertise with certifications in emerging fields like
          cloud computing, data analytics, and cybersecurity. These additional
          skills make you stand out and keep you ahead of industry trends.
        </li>
      </ul>,
      "With a BCA, you’ll be equipped not just with technical knowledge, but with the problem-solving, analytical, and project management skills that today’s tech roles demand. Every experience prepares you to step confidently into a rewarding career.",
    ],
  },
  {
    title: "Beyond the Curriculum - Unlocking Extra Benefits for Your Success",
    description: [
      "At Tula’s Institute, we believe in empowering our students with real-world skills and experiences that extend far beyond the classroom. Our comprehensive approach includes a variety of additional opportunities to enrich your learning and career prospects:",
    ],
    image: Course,
    points: [
      <ul className="list-disc ml-5">
        <li>
          <strong>Internship Opportunities:</strong>
          <br />
          Gain invaluable hands-on experience with internships in leading tech
          companies, allowing you to apply classroom knowledge to real industry
          projects.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Short-Term Courses:</strong>
          <br />
          Keep pace with the latest trends and tools through targeted short-term
          courses designed to help you stay competitive and expand your skill
          set.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Add-On Certification Courses:</strong>
          <br />
          Boost your expertise with specialized add-on certification courses,
          equipping you with niche skills and advanced knowledge in key areas of
          technology.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Industrial Visits:</strong>
          <br />
          Broaden your industry perspective with guided visits to top IT firms
          and tech hubs, where you can see cutting-edge technology in action and
          learn directly from industry professionals.
        </li>
      </ul>,
      "These additional offerings not only enhance your practical knowledge but also give you a competitive edge, making you stand out to employers and equipping you to succeed in the dynamic field of technology.",
    ],
  },
  {
    title: "Career Opportunities After BCA – Endless Possibilities Await!",
    description: [
      "Completing a Bachelor of Computer Applications (BCA) opens the door to a world filled with dynamic and rewarding career paths. As a BCA graduate, you’ll be equipped with the skills and knowledge to thrive in an industry where technology is reshaping the future every day. Here are just some of the inspiring career opportunities available to BCA graduates:",
    ],
    image: Program,
    points: [
      <ul className="list-disc ml-5">
        <li>
          <strong>Software Developer</strong>
          <br />
          Transform ideas into reality by creating innovative software and
          applications that make a difference. As a software developer, you’ll
          be at the forefront of building tech solutions that people use every
          day, from mobile apps to complex enterprise systems.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong> Web Developer & Designer</strong>
          <br />
          Shape the digital landscape as a web developer or designer, crafting
          engaging and responsive websites that power e-commerce, media, and
          entertainment. Use your creativity and technical skills to create
          seamless online experiences for users worldwide.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong> Data Analyst</strong>
          <br />
          Dive into the world of data to help businesses make smarter,
          data-driven decisions. Data analysts play a vital role in interpreting
          trends, forecasting outcomes, and unlocking valuable insights that
          drive company growth and innovation.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>System Analyst</strong>
          <br />
          Optimize business operations by identifying technology needs and
          recommending the best solutions. As a system analyst, you’ll bridge
          the gap between technology and business, ensuring organizations stay
          competitive and efficient.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong> Database Administrator</strong>
          <br />
          Manage and safeguard the data that fuels today’s digital world.
          Database administrators are responsible for organizing, securing, and
          ensuring the accessibility of data, making it a critical role in every
          industry.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Cybersecurity Specialist</strong>
          <br />
          Protect organizations from digital threats in this essential and
          rapidly growing field. As a cybersecurity specialist, you’ll defend
          systems and data from cyber attacks, safeguarding the digital future.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>IT Consultant</strong>
          <br />
          Provide expert advice to businesses on the best technologies to meet
          their goals. IT consultants guide companies in making strategic tech
          decisions, from selecting software to implementing secure systems.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Entrepreneur in Tech</strong>
          <br />
          Dream of building your own tech company? A BCA equips you with the
          knowledge and skills to start your own venture, develop innovative
          apps, or offer IT solutions as an entrepreneur.
        </li>
      </ul>,
      <ul className="list-disc ml-5">
        <li>
          <strong>Further Studies – MCA and Beyond</strong>
          <br />
          For those who wish to deepen their expertise, pursuing a Master’s in
          Computer Applications (MCA) or specialized certifications can take
          your skills to an even higher level, opening doors to leadership
          roles, teaching, and research.
        </li>
      </ul>,
    ],
  },
];
