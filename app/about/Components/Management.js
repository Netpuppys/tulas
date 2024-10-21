"use client";

import React, { useEffect, useState } from "react";
import sunil from "../../../public/About/sunil.png";
import silky from "../../../public/About/silky.png";
import raghav from "../../../public/About/raghav.png";
import raunak from "../../../public/About/raunak.png";
import sandip from "../../../public/About/sandip.png";
import vijay from "../../../public/About/vijay.png";
import kothari from "../../../public/About/kothari.png";
import sunilSemwal from "../../../public/About/sunilSemwal.png";
import nishant from "../../../public/About/nishant.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Modal from "./Modal";
import AboutFacultyModal from "./AboutFacultyModal";

const cards = [
  {
    image: sunil,
    name: "Sunil Kumar Jain",
    profile: "Chairman - TULA's Group",
    description: "Let me take this opportunity on behalf of the faculty and staff, to welcome you all to realize a convincing path with us. “There is not one blade of grass, there is no color in this world that is not intended to make us rejoice”, said by John Calvin. Tula’s vision stands on our beliefs and vows to change every student into an ambassador for their own semblance. Education is not only a way of learning new things but also looking at the world in a different way.",
    desc2:"Let me accumulate my content experience of 30 years in a magic listing that can help make the correct decisions in your life. We have always followed our rewards in your success and this truly translates into a long and honouring relationship with every student who graduates from Tula’s. We take immense pride in the relationship we share because each one of you will be an encouragement to those one day who face the same crossroads as you are on today.",
    awards: [
      "Recipient of Indira Gandhi Sadbhavna Award - 2008",
      "Rajeev Gandhi Shiromani Award - 2010",
      "Edupreneurs award for valuable contribution in engineering education in India - 2013",
      "Sardar Vallabh Bhai Patel Rashtriya Ekta Award - 2015",
      "Awarded with Dr. APJ Abdul Kalam Excellence Award- 2016",
    ],
  },
  {
    image: silky,
    name: "Silky Jain",
    profile: "Executive Director",
    description: "On behalf of the management, faculty, staff and Tulaites, I would like to welcome you all to Tula's where not only will you get opportunities to shine in your future but also have the most memorable journey while you are on your golden path to attain success. Opportunities are many, future is great but to make the most of it you have to strive hard and give your best and I assure that we will be guiding you at every step and help you cross all impediments that come your way.",
    desc2: "At Tula's, your dreams are our dreams, your aspirations are our aspirations,it's in your victory that we celebrate our success. Let’s join hands in this journey where success is assured and let's leave no stone unturned in creating a future that will make your parents, friends and the society take pride in you.",
    awards: [
      "Alumnus - Symbiosis Institute of Design, Pune",
      "Awarded as an Inspiring Women Eduleader for the year 2014 by Engineering Watch",
      "Awarded as Education Evangelist 2015 by Skill tree",
      "Awarded Certification in Leadership from Oxford University, London 2015",
      "Awarded Certification in Leadership from Harvard University, USA 2017",
      "Awarded with Today's Woman Award by I-next 2017"
    ],
  },
  {
    image: raghav,
    name: "Dr. Raghav Garg",
    profile: "Vice President",
    description: "On behalf of the management, faculty, staff and Tulaites, I would like to welcome you all to Tula's where not only will you get opportunities to shine in your future but also have the most memorable journey while you are on your golden path to attain success. Opportunities are many, future is great but to make the most of it you have to strive hard and give your best and I assure that we will be guiding you at every step and help you cross all impediments that come your way.",
    desc2: "At Tula's, your dreams are our dreams, your aspirations are our aspirations,it's in your victory that we celebrate our success. Let’s join hands in this journey where success is assured and let's leave no stone unturned in creating a future that will make your parents, friends and the society take pride in you.",
    awards: [
      "Alumnus - Symbiosis Institute of Design, Pune",
      "Awarded as an Inspiring Women Eduleader for the year 2014 by Engineering Watch",
      "Awarded as Education Evangelist 2015 by Skill tree",
      "Awarded Certification in Leadership from Oxford University, London 2015",
      "Awarded Certification in Leadership from Harvard University, USA 2017",
      "Awarded with Today's Woman Award by I-next 2017"
    ],
  },
  {
    image: raunak,
    name: "Raunak Jain",
    profile: "Vice President",
    description: "Tula's, as the name suggests, carefully weighs and maintains a balance that is not only enriching academically but also lays special emphasis on the overall development of every student. With this, I would like to take the opportunity to welcome you at Tula's, a place where your dreams are not yours alone. We at Tula's have a mission to create and impart quality education and knowledge by developing and widening the quest quotient of our students.",
    desc2: "We believe that education cannot be confined within the boundaries of an institution and grows with every passing moment of a student's life. Our state of the art infrastructure along with our corporate interface program provides the students with the ideal platform to harness their energies allowing them to pursue their goals. Our faculty comprises highly qualified professors who provide the students with the correct guidance and required support, be it academically or otherwise.",
    awards: [
      "M.Sc. International Management from RHUL (Royal Holloway University of London)",
      "Vice president (Welfare) National Taekwondo Committe",
      "Member - Cricket Association of Uttarakhand",
    ]
  },
];

const cardsFaculty = [
  {
    image: sandip,
    name: "Dr. Sandip Vijay",
    profile: "Director",
  },
  {
    image: vijay,
    name: "Vijay Kumar Upadhyay",
    profile: "Registrar",
  },
  {
    image: kothari,
    name: "DP Kothari",
    profile: "Adjunct Professor",
  },
  {
    image: sunilSemwal,
    name: "Sunil Semwal",
    profile: "Dean R&D",
  },
  {
    image: nishant,
    name: "Dr Nishant Saxena",
    profile: "Dean Academics",
  },
];

function Management() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });

  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ modalContent, setModalContent] = useState(null);
  const [ activeProfile, setActiveProfile ] = useState(null)

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-fit bg-transparent py-20 px-4">
      
      {activeProfile &&
      <AboutFacultyModal
        activeProfile={activeProfile.profile}
        setActiveProfile={setActiveProfile}
        relatedProfiles={activeProfile.related}
      />}

      <div
        ref={ref}
        className="w-full h-fit flex flex-col justify-center items-center"
      >
        <h3
          className={`font-[CarotSlab] text-white text-[52px] ${
            inView ? "animate-translateBottom overflow-hidden" : "opacity-0"
          }`}
        >
          MEET OUR MANAGEMENT
        </h3>
        <h5
          className={`font-[Rothwood] text-white text-[20px] max-w-[665px] italic text-center font-medium ${
            inView ? "animate-translateBottom overflow-hidden" : "opacity-0"
          }`}
        >
          The Institute provides excellent infrastructural and ICT facilities
          with well-equipped laboratories, a modern computer centre, spacious
          and well-furnished classrooms, seminar hall, library, workshop, and
          fully airconditioned &amp; spacious auditorium.
        </h5>
      </div>
      <div className="py-20 block">
        {[cards, cardsFaculty].map((cardGroup, groupIndex) => (
          <div
            key={groupIndex}
            className="flex justify-center gap-5 px-20 py-4"
          >
            {cardGroup.map((card, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[265px] cursor-pointer"
                onClick={() => setActiveProfile({ profile: card, related: cardGroup })}
                // onClick={() => handleCardClick(card)}
              >
                <Fade>
                  <Image
                    src={card.image}
                    alt=""
                    className="rounded-3xl mb-2 w-[265px] h-[372px] object-cover"
                  />
                </Fade>
                <h2 className="font-[TTChocolatesBold] text-white font-semibold text-[37px] text-center">
                  {card.name}
                </h2>
                <h4 className="font-[TTChocolates] text-[#C2C2C2] text-[22px] text-center">
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
