"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import bannerImage from "../../../public/Homepage/BannerHome/Banner1.webp";
import background from "../../../public/AboutDehradun/background.png";
import hostel from "../../../public/infrastructure/HostelMess/hostel.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import Vision from "@/component/Programs/Vision";
import TopRecruiter from "@/component/topRecruiter";

const section = [
  {
    title: "Career Innovation Centre (CIC)",
    description: (
      <>
        The Career Innovation Centre (CIC) at Tula's Institute is a dynamic hub
        aimed at transforming students' career planning and development. Acting
        as a bridge between academic knowledge and real-world employment, the
        CIC is dedicated to equipping students with the necessary skills and
        insights to excel in their chosen professions.
        <br />
        <br />
        Our mission is to promote a progressive approach to career development
        by integrating advanced tools, personalised guidance, and strong
        industry connections. The CIC offers an extensive range of services,
        including career counselling, skills assessment, and CV-building
        support. We host innovative workshops and seminars that provide students
        with current industry trends, interview techniques, and effective
        networking strategies.
        <br />
        <br />
        In collaboration with leading companies and industry experts, we ensure
        that our students are well-prepared to navigate the constantly evolving
        job market. Furthermore, we emphasise entrepreneurial development,
        encouraging students to explore and launch their own business ventures.
        By leveraging our extensive resources and networks, the CIC empowers
        students to transform their aspirations into actionable career pathways.
        <br />
        <br />
        At Tula's Institute's Career Innovation Centre, we are committed to
        unlocking the full potential of each student, ensuring they are not
        merely job-ready but prepared for long-term career success.
      </>
    ),
    image: hostel,
  },
  {
    title: "Career Innovation Centre",
    description: (
      <>
        The Career Innovation Centre, supported by faculty members from various
        departments, delivers effective career guidance services to students.
        This includes counselling for higher education, such as GRE, GATE, CAT,
        among others. Each year, the AMCAT exam is administered for 5th and
        7th-semester students to evaluate their readiness for the job market,
        providing tailored guidance based on their sectoral fit.
        <br />
        <br />
        Roles and Responsibilities
        <ul className="list-disc ml-5">
          <li>
            To provide guidance on educational and vocational/career matters
            through individual and group counselling sessions.
          </li>
          <li>
            To offer pre-placement guidance and counselling for postgraduate
            studies.
          </li>
          <li>
            To assist students in making informed decisions about their
            education and career trajectories.
          </li>
          <li>
            To help students understand that career management is a lifelong
            process requiring continual development.
          </li>
          <li>
            To educate students on the influence of technological trends on
            career management and progression.
          </li>
          <li>
            To promote student independence and self-confidence in career
            decision-making.
          </li>
          <li>
            To raise awareness of the wide range of opportunities available to
            students following graduation, whether in higher education or career
            development.
          </li>
        </ul>
      </>
    ),
    image: hostel,
  },
  {
    title: "Training Department",
    description: (
      <>
        Roles and Responsibilities
        <br />
        <br />
        The Training Department provides a structured Personality Development
        programme, integrated into the regular curriculum, to prepare students
        for their professional journeys. Core to securing employment, subjects
        such as soft skills development, aptitude enhancement, and attitude
        building are delivered through weekly sessions lasting four hours.
        <br />
        <br />
        The Training Department is committed to developing students in multiple
        dimensions, ensuring they can confidently face the challenges of the
        corporate world upon graduation. The School of Lifelong Learning
        organises activities such as presentation skills workshops, group
        discussions, debates, and job fairs to enhance student engagement and
        skill development.
        <br />
        <br />
        For students in the 6th semester, the department runs a specialised
        industry-focused programme, "Campus to Corporate", which bridges
        academic learning with corporate expectations. The department also
        collaborates with top industry trainers to deliver these modules,
        ensuring students receive the highest standard of professional
        development training.
      </>
    ),
    image: hostel,
  },
  {
    title: "Placement Department",
    description: (
      <>
        The CIC actively collaborates with prominent organisations to facilitate
        internships and placement opportunities for students. Acting as a
        liaison between students, alumni, and the employment community, the
        department bridges the gap between industry expectations and academic
        preparation.
        <br />
        <br />
        Roles and Responsibilities
        <br />
        <ul>
          <li>
            To establish a robust interface between the institution and the
            industry.
          </li>
          <li>
            To formalise Memoranda of Understanding (MoUs) with leading
            companies for academic collaboration and student placements.
          </li>
          <li>
            To provide industrial connections for both students and faculty
            members.
          </li>
          <li>
            To encourage industries to engage with the institution, enhancing
            familiarisation with the academic environment.
          </li>
          <li>
            To organise industrial visits for students, providing practical
            exposure to various sectors.
          </li>
          <li>
            To facilitate corporate-student engagement activities such as
            workshops and recruitment drives.
          </li>
          <li>
            To generate on-campus and off-campus employment opportunities for
            students.
          </li>
        </ul>
        This strategic focus ensures that students are well-prepared to
        transition smoothly into the workforce, aligning their academic
        achievements with industry demands.
      </>
    ),
    image: hostel,
  },
];

const content4 = {
  para: "",
  roles: [],
  conclusion: "",
};

const content3 = <></>;

const Highlight = ({ children }) => {
  return <strong className="text-[#007A83] !font-bold">{children}</strong>;
};

const description = (
  <>
    <Highlight>{"Career Innovation Centre (CIC)"}</Highlight> at Tula's
    Institute is a dynamic hub dedicated to revolutionizing career planning and
    development for students. The CIC serves as a bridge between{" "}
    <Highlight>academic learning</Highlight> and{" "}
    <Highlight>real-world employment</Highlight>, equipping students with the
    skills and insights necessary to excel in their chosen fields.
    <br />
    <br />
    <Highlight>Our mission</Highlight> is to foster a forward-thinking approach
    to career growth by integrating cutting-edge tools, personalized guidance,
    and industry connections.
  </>
);

// Our mission is to foster a forward-thinking approach to career growth by integrating cutting-edge tools, personalized guidance, and industry connections."

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner
        title={"CAREER INNOVATION CENTRE"}
        belowPara={description}
        image={bannerImage}
      />
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <Vision sections={section.slice(0, 1)} />

      <TopRecruiter />

      <Vision sections={section.slice(1)} />
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
};

export default page;
