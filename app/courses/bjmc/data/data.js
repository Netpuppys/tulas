import bjmc from "../../../../public/courses/bjmc/bjmc.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../public/bsc-agriculture/Crousel/Program.png";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import TauseefIqbal from "../../../../public/courses/bjmc/facultyData/TauseefIqbal.webp";
import NeerajKotiyal from "../../../../public/courses/bjmc/facultyData/NeerajKotiyal.webp";
import deepkarawat from "../../../../public/courses/bjmc/facultyData/deepkarawat.webp";
import AnkitGhildiyal from "../../../../public/courses/bjmc/facultyData/AnkitGhildiyal.webp";
import BJMC from "../../../../public/courses/bjmc/BJMC.pdf";
import Link from "next/link";
export const images = [
  bjmc,
  // Add more image paths as needed
];
export const content = (
  <>
    Bachelor of Journalism & Mass Communication is a three year
    interdisciplinary program in which students learn holistically about media
    and its various aspects. Students learn the underpinning theories related to
    media, its history, and its legal and ethical obligations. They also learn
    to frame news, design the headlines and outlet of the newspaper. Students
    are taught about the media laws, constitution and other relevant laws which
    are required in public life as a Journalist. Apart from it, program also
    nurtures creative aspects of students that includes photography,
    film-making, editing and other aspects of visual story telling like screen
    writing and story boarding. Students who aspire to develop their taste in
    the field of advertising & public relations get to learn about history and
    theories related to respective field. Subjects like Development
    Communication, Visual Communication & Media research are also taught to the
    students.
    <br />
    <br />
    In addition, the program not only develops media related skills but also
    enriches students to provide pervasive understanding of media and its
    function’s historicity and totality.
    <br />
    <br />
    The Department conducts outdoor photography walks, educational excursions,
    movie screenings followed by discussions, random extempore, interactive
    sessions from industry experts and extracurricular activities which enrich
    students’ social engagements.
    <br />
    <br />
    Apart from it, students are engaged with diverse communities like media
    fraternity, cultural groups, regional artists, film stars, award winning
    athletes and reformers via different modes of engagement.
  </>
);
export const items = [
  {
    title: "USP's",
    description: [
      "Qualified Faculty members from all verticals of Journalism & Mass communication",
      "State of the art Electronic Media Production Centre (EMPC)",
      "Tie ups with prominent media houses",
    ],
    image: USP,
    points: [
      "In-house Newspaper publication and Electronic Media News dissemination platforms to facilitate students with industrial exposure before entering into job market",
      "Preparation of professionals for the different media fields which would work closely with different stakeholders of civil society, media, and other democratic institutions, thereby contributing prominently towards overall national and regional development.",
    ],
  },
  {
    title: "Course Outcomes",
    description: [
      <Link href={BJMC}>Click here to download BA.JMC Course Outcomes</Link>,
    ],
    image: Course,
  },
  {
    title: "Program Outcomes",
    description: [
      "PO1- Knowledge- To apply ideas about communication and its significance in society",
      "PO2- The program will transform the students as a successful media professional",
      "PO3- To impart skills related to Information Communication Technologies (ICTs), including digital and media literacy and competencies",
    ],
    image: Program,
    points: [
      "PO4- To apply the objectivity and critical thinking for communicating to masses through a variety of mediums such as Short Films, Documentary Films, PTC for Television, Advertising and PR Campaign, Event Management, News Paper Production for Print PO5- Create awareness to become an enlightened citizen as well as a dynamic professional with commitment to deliver one’s responsibilities strictly adhering to highest standard of ethics and professionalism",
      "PO6- Ethics- To apply ethical principles and commit to professional ethics and responsibilities",
    ],
  },
  {
    title: "Program Specific Outcome",
    description: [
      "PSO-1- Understanding the basic relationships between culture, society, and communication.",
      "PSO-2 Provide in-depth understanding of communication theories and models.",
      "PSO-3 Introduce students to the real-world context of utilizing communication technologies to enhance their communication skills.",
    ],
    image: Course,
    points: [
      "PSO-4 To develop learners into skilled and efficient professionals who are prepared for the media and entertainment industry.",
      "PSO-5 To inculcate the principles of Indian and world culture, as well as professional ethics.",
      "PSO-6 To prepare socially responsible media academicians, researchers, professionals with global vision.",
    ],
  },
  {
    title: "Program Educational Objective",
    description: [
      "PEO-1: To apprise students to know about the modern mass media.",
      "PEO-2: To enlighten the students about the core challenges of Media Industry.",
      "PEO-3: To familiarize the students with the media sector and media professionals.",
    ],
    image: Program,
    points: [
      "PEO-4: To inculcate the values and ethics of modern mass media.",
      "PEO-5: To impart Journalistic knowledge as per the best of academics and media industry.",
    ],
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To emerge as a leading hub for teaching, research, creative endeavor and pioneering approaches to promote ethical and socially responsible communication practices in Media and Journalism.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            To provide high-quality education to prepare students for
            professional success and critical thinking.
          </li>
          <li>
            To foster diversity, interdisciplinary learning, and creativity
            within the curriculum.
          </li>
          <li>
            To uphold values of freedom of expression, mutual respect, and
            ethical conduct.
          </li>
          <li>
            To encourage students to integrate their knowledge and skills for
            community service, career advancement, and lifelong learning.
          </li>
          <li>
            To cultivate social responsibility and expertise in journalism and
            mass communication among students.
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
export const selectedCard1 = (
  <>
    <span className="font-[Arapey]">Admission Eligibility</span> <br />
    <ul className="font-[TTChocolates] list-disc ml-5 text-[14px] md:text-[23px] text-black">
      <li>
        Candidate should be 12th passed or equivalent course in any discipline
        from any recognized Board / Council with minimum 45% marks for general
        (open) category and 40% marks for students of SC and ST category.
      </li>
      <li>
        Age Requirement: The minimum age requirement for BAJMC is 17 years.
      </li>
    </ul>
  </>
);
export const semesterData = [
  {
    semester: "I SEMESTER",
    subjects: [
      { code: "BJMC 101", title: "Introduction to Communication" },
      { code: "BJMC 102", title: "Mass Media Writing" },
      { code: "BJMC 103", title: "Journalism –An Introduction" },
      { code: "BJMC 104", title: "Basics of Computers" },
    ],
  },
  {
    semester: "II SEMESTER",
    subjects: [
      { code: "BJMC 201", title: "History of Print & Broadcasting in India" },
      { code: "BJMC 202", title: "Reporting and Editing for Print" },
      { code: "BJMC 203", title: "Socio-Economic & Political Scenario" },
      { code: "BJMC 204", title: "Basics of Design & Graphics" },
    ],
  },
  {
    semester: "III SEMESTER",
    subjects: [
      { code: "BJMC 301", title: "Photo Journalism" },
      { code: "BJMC 302", title: "Advertising and Public Relations" },
      {
        code: "BJMC 303",
        title: "Radio Journalism and Production",
      },
      { code: "BJMC 304", title: "New Media" },
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "BJMC 401", title: "Introduction to Cinema" },
      { code: "BJMC 402", title: "Development Communication" },
      { code: "BJMC 403", title: "Media Law" },
      {
        code: "BJMC 404",
        title: "Reporting and Editing for Broadcasting",
      },
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      { code: "BJMC 501", title: "Contemporary Issues" },
      { code: "BJMC 502", title: "Online Journalism" },
      { code: "BJMC 503", title: "Media Management" },
      { code: "BJMC 504", title: "Digital Video Editing" },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      { code: "BJMC 601", title: "Print Media Production" },
      {
        code: "BJMC 602",
        title: "Radio and Television Production",
      },
      { code: "BJMC 603", title: "Internship" },
      { code: "BJMC 604", title: "Comprehensive Vive-Voice" },
    ],
  },
];
export const facultyData = [
  {
    name: "Tauseef Iqbal",
    education: "Master’s in Mass Communication,  Ph.D. (P)",
    experience: "8 Years",
    designation: "Assistant Professor",
    specialization: "Film Studies, Radio Production & Photography",
    publications: "",
    imageUrl: TauseefIqbal, // Add the path for the image
  },
  {
    name: "Neeraj Kotiyal",
    education: "Bachelors & Masters in media and communication studies",
    experience: "2 Years",
    designation: "Assistant Professor",
    specialization: "Radio / Advertising and Public relations",
    publications: "",
    imageUrl: NeerajKotiyal,
  },
  {
    name: "Ms. Deepika Rawat",
    education: "Master’s in Mass Communication",
    experience: "3 Years",
    designation: "Assistant Professor",
    specialization: "Development Communication",
    publications: "",
    imageUrl: deepkarawat,
  },
  {
    name: "Dr. Ankit Ghildiyal",
    education: "Ph.D. ",
    experience: "14 Years",
    designation: "Assistant Professor",
    specialization: "Journalism and Mass Communication (New Media)",
    publications: "3",
    imageUrl: AnkitGhildiyal,
  },
];
export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: [
      "Pixel Party: Journalism & Mass Communication department runs their film club in the campus. The film’s club name is ‘Pixel Party’. The club frequently screen thought provoking films & Documentaries and engage students in post screening discussions on aesthetic & social aspect of the cinema.",
      "Vibgyor",
      "Victree",
    ],
    image: USP,
  },
  {
    title: "Edge over others",
    description: [
      "An individual with the BJMC degree possesses the ability to comprehend society, market, and governance in all its historicity and social cultural variations in addition to an individual with efficient communication skills.",
    ],
    image: Course,
    points: [
      "It also cultivates creative instincts in the students to produce meaningful media content for information, awareness and entertainment of both popular and high culture. Department of Journalism & Mass Communication at Tula’s provides adequate infrastructure to prepare students for all sorts of media engagement and research. The department provides state of the art Electronic Media & production Centre with an enriched library and suitable environment.",
    ],
  },
  {
    title: "Beyond Curriculum",
    description: [
      "Bachelor of Journalism & Mass Communication is a program that can be treated as a lifestyle in itself. A person intensely involved with the program learns a lot of important aspects of life. Important questions of life are as:",
      "How to decide, Whom to vote?",
      "How governmental and non-governmental institution functions?",
      "How to develop taste of good art & culture?",
      "What has thousand years of history brought to mankind?",
    ],
    image: Program,
    points: [
      "How civilizations evolved?",
      "What could be called a good cinema? Which music is better?",
      "What is justice?",
      "What could be called a good literature?",
      "These questions may appear beyond the scope of curriculum but knowing answers to these questions add certain aesthetic upheaval to life which makes life beautiful.",
    ],
  },
  {
    title: "Career Prospects",
    description: [
      "Students can choose to excel in range of career options after pursuing Journalism & Mass Communication Course. One can become Editor, Journalist at Print, electronic & New Media Platforms in their chosen beat. Students can also make their career in Advertising, Public Relations industry. Students may also study & acquire skills required to carry communication for development and can make career in development sector where range of communication related jobs are available including UNDP & UNESCO Jobs, Jobs in different government departments and in leading NGOs.",
    ],
    image: USP,
    points: [
      "Apart from these lucrative career options, aspirant can also aspire to become photographer, film maker, radio jockey, Cinematographer & print designer.",
      "There are dozens of other career option in Mass Communication for example one can become film critic, Communication associate, academician, Media Researcher, Event Manager, Video Editor, freelancer, Copy writer, Photo Journalist, graphic designer, Voice artists, anchor, etc.",
    ],
  },

  // Add other carousel items here
];
