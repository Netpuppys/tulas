"use client";

import React, { useEffect, useState } from "react";
import sunil from "../../../public/About/sunil.png";
import silky from "../../../public/About/silky.png";
import raghav from "../../../public/About/raghav.png";
import raunak from "../../../public/About/raunak.png";
import shailendra from "../../../public/About/shailendra.png";
import deepak from "../../../public/About/deepak.png";
import vijay from "../../../public/About/vijay.png";
import sunilSemwal from "../../../public/About/sunilSemwal.png";
import nishant from "../../../public/About/nishant.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Modal from "./Modal";
import AboutFacultyModal from "./AboutFacultyModal";
import { useRouter } from "next/router";

const cards = [
  {
    image: sunil,
    name: "Sunil Kumar Jain",
    profile: "Chairman - Tula's Group",
    description:
      "Let me take this opportunity on behalf of the faculty and staff, to welcome you all to realize a convincing path with us. “There is not one blade of grass, there is no color in this world that is not intended to make us rejoice”, said by John Calvin. Tula’s vision stands on our beliefs and vows to change every student into an ambassador for their own semblance. Education is not only a way of learning new things but also looking at the world in a different way.",
    desc2:
      "Let me accumulate my content experience of 30 years in a magic listing that can help make the correct decisions in your life. We have always followed our rewards in your success and this truly translates into a long and honouring relationship with every student who graduates from Tula’s. We take immense pride in the relationship we share because each one of you will be an encouragement to those one day who face the same crossroads as you are on today.",
    awards: [
      "Recipient of Indira Gandhi Sadbhavna Award – 2008",
      "Rajeev Gandhi Shiromani Award – 2010",
      "Edupreneurs award for valuable contribution in engineering education in India – 2013",
      "Sardar Vallabh Bhai Patel Rashtriya Ekta Award – 2015",
      "Awarded with Dr. APJ Abdul Kalam Excellence Award- 2016",
    ],
  },
  {
    image: silky,
    name: "Silky Jain Marwah",
    profile: "Executive Director",
    description:
      "On behalf of the management, faculty, staff and Tulaites, I would like to welcome you all to Tula’s where not only will you get opportunities to shine in your future but also have the most memorable journey while you are on your golden path to attain success. Opportunities are many, future is great but to make the most of it you have to strive hard and give your best and I assure that we will be guiding you at every step and help you cross all impediments that come your way.",
    desc2:
      "At Tula’s, your dreams are our dreams, your aspirations are our aspirations,it’s in your victory that we celebrate our success. Let’s join hands in this journey where success is assured and let’s leave no stone unturned in creating a future that will make your parents, friends and the society take pride in you.",
    awards: [
      "Alumnus – Symbiosis Institute of Design, Pune",
      "Awarded as an Inspiring Women Eduleader for the year 2014 by Engineering Watch",
      "Awarded as Education Evangelist 2015 by Skill tree",
      "Awarded Certification in Leadership from Oxford University, London 2015",
      "Awarded Certification in Leadership from Harvard University, USA 2017",
      "Awarded with Today’s Woman Award by I-next 2017",
    ],
  },
  {
    image: raunak,
    name: "Raunak Jain",
    profile: "Vice Chairman",
    description:
      "Tula’s, as the name suggests, carefully weighs and maintains a balance that is not only enriching academically but also lays special emphasis on the overall development of every student. With this, I would like to take the opportunity to welcome you at Tula’s, a place where your dreams are not yours alone. We at Tula’s have a mission to create and impart quality education and knowledge by developing and widening the quest quotient of our students.",
    desc2:
      "We believe that education cannot be confined within the boundaries of an institution and grows with every passing moment of a student’s life. Our state of the art infrastructure along with our corporate interface program provides the students with the ideal platform to harness their energies allowing them to pursue their goals. Our faculty comprises highly qualified professors who provide the students with the correct guidance and required support, be it academically or otherwise.",
    awards: [
      "M.Sc. International Management from RHUL (Royal Holloway University of London)",
      "Vice president (Welfare) National Taekwondo Committe",
      "Member – Cricket Association of Uttarakhand",
    ],
  },
  {
    image: raghav,
    name: "Dr. Raghav Garg",
    profile: "Vice President Technology",
    description:
      "Tula’s, as the name suggests creates a balance and strives to develop and unearth the intrinsic potential and capability of the students, thereby preparing them to take on the global challenges. Our vision is to make Tula’s, a centre of excellence in learning, innovation, technology, agriculture, and management. Our students are groomed holistically to become industry ready and successful entrepreneurs. We at Tula’s envision our students to become employers and create jobs for others. At Tula’s, education is planned as an entire end-to-end process from the very first day. From making the student feel at home to equipping the student to be productive in industry and society.",
    desc2:
      "Our Institute has good relations with leading Universities of the world which gives Tulaites an edge over other students elsewhere. Tula’s is recognised for having state of the art infrastructure. Besides technical and professional competence, we make every possible effort to equally absorb in them the moral and ethical values and transform them into good human beings. We nurture our students with the sense of social commitment, humanitarian values, ethical practices and professionalism making them global citizens who can look beyond geographical boundaries.",
    awards: [
      "Vice President Technology",
      "B.Tech CS (VIT, Vellore)",
      "M.S. (University of Texas at Dallas)",
      "Ph.D. (Banasthali University)",
      "MBA (IIMK)",
    ],
  },
];

const cardsFaculty = [
  {
    image: shailendra,
    id: 1,
    name: "Prof. (Dr.) Shailendra Kumar Tiwary",
    profile: "Director",
    description:
      "It is my great pleasure to warmly greet you as you embark upon an exciting journey of higher professional education. At Tula’s Institute, we are committed to providing a transformative learning experience that equips our beloved students with the knowledge, skills, and ethical values, creativity which is essential to excel in your careers. Fueled by the passion and dedication to deliver quality education for the betterment of society and mankind, Tula’s Institute, Dehradun was established by the Rishabh Educational Trust in 2006.",
    desc2: (
      <>
        Tula’s Institute aspires to prepare tomorrow’s successful professionals,
        leaders and innovators by providing quality education based on
        excellence, experiential learning and inclusiveness.
        <br />
        <br />
        Tula’s Institute is characterized by a vibrant academic atmosphere,
        experienced faculty, the state- of-the-art facilities cum infrastructure
        and an ecosystem to actively participate in co- and extra- curricular
        activities. We take pride in fostering an environment that encourages
        innovation, critical thinking, and holistic development of our students.
        Whether you are pursuing a degree in Engineering, Management, Computer
        Application, Agriculture, Journalism and Mass Communication, Pharmacy or
        any other discipline, our academic programs are run and delivered by
        accomplished experts to prepare you to face and overcome the challenges
        of the future. At Tula’s Institute, we believe in the power of education
        to shape your destiny. Our commitment to excellence extends beyond the
        classroom, with a focus on knowledge, skills, research &amp; innovation,
        entrepreneurship, and community service.
        <br />
        <br />
        Once again, welcome and thank you for taking the time to visit. Please
        feel free to explore our Institute through our website, social media
        platforms and in person on our ever-growing campus.
      </>
    ),
    awards: [
      "B. E. (Civil), M. Tech. (Structural Engg.)",
      "Ph. D. (Structural Engg.)",
      "Chartered Engineer (I.E.I)",
      "Member (I.E.I)",
    ],
  },
  {
    image: deepak,
    id: 2,
    name: "Dr. Deepak Nanda",
    profile: "Director of Pharmacy",
    description:
      "Tula’s Institute of Pharmacy remains steadfast in its mission to prepare students for the dynamic and ever-evolving field of pharmacy. Through rigorous academic program, cutting-edge research, and hands- on practical training, we aim to equip our students with the knowledge, skills, and values necessary to excel in a variety of professional settings, from clinical environments to research labs and beyond.",
    desc2: (
      <>
        Pharmacy is a dynamic and essential field that plays a pivotal role in
        the healthcare system. As we navigate an ever-changing landscape, we
        ensure that our students are equipped with the knowledge, skills, and
        mindset to not only succeed but to lead in this critical profession.
        <br />
        <br />
        Our college is equipped with state-of-the-art facilities, dedicated
        faculty, and a fortified curriculum designed to nurture critical
        thinking, ethical practices, and a deep sense of responsibility toward
        community well-being. We take pride in offering an environment that
        encourages research, hands-on experience, and collaboration with
        industry professionals.
        <br />
        <br />
        We believe in a holistic approach to education, where academics,
        extracurricular activities, and community engagement all play an
        important role in the development of our students. Our goal is to
        prepare graduates who are not only academically proficient but also
        compassionate and ethical practitioners who can contribute to the health
        and well-being of society.
        <br />
        <br />I invite you to explore the various programs, resources, and
        opportunities available at our Institute, and certainly look forward to
        the possibility of welcoming you into Tula’s Family.
      </>
    ),
    awards: ["Email ID: registrar@tulas.edu.in"],
  },
  {
    image: vijay,
    id: 3,
    name: "Dr. Vijay Kumar Upadhyay",
    profile: "Registrar",
    description:
      "We believe education will play a significant role in accomplishing future productivity, economic goals, and higher standards of living throughout the world. I would like to applaud the student’s community for their hard work, discipline and analytical thinking that has propelled Tula’s Institute to the new heights, year after year. The Institute campus is pollution free, ragging free with conducive studying environment, a beautiful landscape, a picturesque view of modern buildings, plethora of state-of-the-art facilities, modern libraries well equipped gymnasium, indoor and outdoor games/sports facilities, ultra-modern laboratories – are at the service of students.",
    desc2: (
      <>
        Tula’s Institute provide best hostel life, efficient medical facilities
        and 24×7 securities.
        <br />
        <br />
        Those who are in search of excellence and have set higher goals to climb
        ladder of success in life must join the Tula’s Institute to explore new
        horizon of unlimited opportunities.
        <br />
        <br />I heartily welcome the students seeking admission in the program
        offered by Tula’s Institute.
      </>
    ),
    awards: [""],
  },
  {
    image: nishant,
    name: "Prof. Nishant Saxena",
    profile: "Addition Director",
    id: 4,
    description:
      "From a modest beginning in 2006, Tula’s Institute has now grown into a fully integrated engineering and management college. The guiding philosophy of the institute has been the creation of awareness among students so they can face the challenges globally. Tula’s Institute through its various development programmes gives students an edge over their counterparts in enabling them to prepare themselves for a world that is yet to be created, for jobs yet to be invented, and technologies yet undreamt of. In short, we create skilled individuals who are industry-ready. ",
    desc2: (
      <>
        The objectives of imparting quality education, combined with creation
        are being met in an integrated form to create a synergetic impact. My
        focus has been on:
        <br />
        <br />
        <ul className="list-disc ml-5">
          <li>Inter and intradisciplinary research</li>
          <li>Vertical specialisation of students</li>
          <li>360-degree learning</li>
          <li>Continual training of faculty and students</li>
          <li>Setup potential centres of excellence</li>
          <li>Be a lead partner in the nation’s growth</li>
        </ul>
        <br />
        <br />I feel confident that the college is progressing in the right
        direction to build an academic institution of great social impact. In
        the end, I take this opportunity to welcome you all at Tula’s Institute
        and wish you all the very best in accomplishing your dreams.
      </>
    ),
    awards: [
      "B.Tech., M.Tech. ,Ph.D.",
      "MISTE,EMIAET",
      "25+ Publication ,Funded Project, 04 Patents",
    ],
  },
  {
    image: sunilSemwal,
    name: "Dr. Sunil Semwal",
    id: 5,
    profile: "Dean R&D",
    description:
      "Tula’s Institute is dedicated to societal requirements through research and innovation. Challenges such as sustainable development, water conservation, energy and environment, and many others are addressed with innovation-friendly atmosphere which encourages industry-academic collaborations. Tula’s Institute’s Research and Development cell promotes research in a variety of areas in sciences, engineering, agriculture and management domains to support our research vision. Quality publications are encouraged with an attractive Research Policy, which incentivise the good researchers and propels faculty members to pursue quality research.",
    desc2: (
      <>
        Several government-funded research projects and initiatives are ongoing
        at the institute. Faculty members collaborate with worldwide and
        national research specialists to generate cutting-edge, innovative
        research.
        <br />
        <br />
        In confirmation with the above, the numbers of research papers, patents,
        and funded projects are steadily increasing.
      </>
    ),
    awards: [
      "B.Tech., M.Tech., Ph.D.",
      "Senior Member IEEE",
      "30+ Publications, 5 Patents, 4 Funded Projects",
    ],
  },
];

function Management() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeProfile, setActiveProfile] = useState(null);

  useEffect(() => {
    if (activeProfile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProfile]);

  const handleCardClick = (card) => {
    setModalContent(
      <div>
        <Image src={card.image} alt="" />
        <h2>{card.name}</h2>
        <h4>{card.profile}</h4>
        {/* Add more content as needed */}
      </div>
    );
    setIsModalOpen(true);
  };

  // Open profile modal based on URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Get the hash value without the "#"
    if (hash) {
      const profile = cardsFaculty.find(
        (card) => card.id && String(card.id).includes(hash)
      ); // Ensure id exists and is converted to string
      if (profile) {
        setActiveProfile({ profile: profile, related: cardsFaculty });
      }
    }
  }, []); // Run the effect whenever the path changes

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-fit bg-transparent pt-8 md:pt-[4%] md:px-4">
      {activeProfile && (
        <AboutFacultyModal
          activeProfile={activeProfile.profile}
          setActiveProfile={setActiveProfile}
          relatedProfiles={activeProfile.related}
        />
      )}

      <div
        ref={ref}
        className="w-full h-fit flex flex-col justify-center items-center"
      >
        <h3
          className={`font-[CarotSlab] text-white text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] px-10 md:px-0 leading-none text-center md:text-left ${
            inView ? "md:animate-translateBottom overflow-hidden" : "opacity-0"
          }`}
        >
          MEET OUR MANAGEMENT
        </h3>
        {/* <h5
          className={`font-[Rothwood] pt-8 md:pt-0 text-white leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] max-w-[665px] px-10 md:px-0 italic md:text-center font-medium ${
            inView ? "md:animate-translateBottom overflow-hidden" : "opacity-0"
          }`}
        >
          The Institute provides excellent infrastructural and ICT facilities
          with well-equipped laboratories, a modern computer centre, spacious
          and well-furnished classrooms, seminar hall, library, workshop, and
          fully airconditioned &amp; spacious auditorium.
        </h5> */}
      </div>
      <div className="w-full pt-8 md:pt-[4%] block">
        {[cards, cardsFaculty].map((cardGroup, groupIndex) => (
          <div
            key={groupIndex}
            className="w-full md:w-[80%] mx-auto flex justify-center items-start flex-wrap px-4 gap-4 pb-5 md:pb-16 md:gap-5 md:px-20"
          >
            {cardGroup.map((card, index) => (
              <div
                key={index}
                className="flex flex-col w-[45%] md:w-[calc(20%-1.25rem)] hover:opacity-90 hover:scale-105 transition-all ease-linear duration-300 cursor-pointer"
                onClick={() =>
                  setActiveProfile({ profile: card, related: cardGroup })
                }
                // onClick={() => handleCardClick(card)}
              >
                <Fade>
                  <Image
                    src={card.image}
                    alt=""
                    className="rounded-xl mb-2 w-full h-full object-cover"
                  />
                </Fade>
                <h2 className="font-[TTChocolatesMedium] text-white font-semibold text-[clamp(8px,5.2vw,30px)] md:text-[clamp(10px,1.5vw,75px)] leading-tight text-center">
                  {card.name}
                </h2>
                <h4 className="font-[TTChocolates] text-[#C2C2C2] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-center">
                  {card.profile}
                </h4>
              </div>
            ))}
          </div>
        ))}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content={modalContent}
        />
      </div>
    </div>
  );
}

export default Management;
