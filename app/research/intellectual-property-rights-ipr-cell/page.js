"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/intellectual/background.png";
import { Fade } from "react-awesome-reveal";
import intellectual from "../../../public/research/intellectual/intellectual.png";
import { useInView } from "react-intersection-observer";
import Vision from "@/component/Programs/Vision";

function IntellectualPropertyRightsIprCell() {
  const sections = [
    {
      title: "IPR Cell",
      description: (
        <>
          The key functions and responsibilities of the IPR Cell include:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              IP Awareness and Education: The IPR Cell conducts workshops,
              seminars, and training sessions to create awareness among
              students, faculty, and staff about intellectual property rights
              and their significance. These initiatives aim to foster a culture
              of respect for IP, promote ethical practices, and encourage
              innovation.
            </li>
            <br />

            <li>
              IP Evaluation and Protection: The IPR Cell assists researchers and
              inventors in identifying inventions, discoveries, and creative
              works that have the potential for IP protection. It guides them
              through the process of evaluating and selecting the most suitable
              form of IP protection, such as patents, copyrights, trademarks, or
              trade secrets.
            </li>
            <br />
            <li>
              Patent Filing and Prosecution: The IPR Cell provides support in
              drafting patent applications, including the preparation of patent
              specifications, claims, and other necessary documentation. It
              works closely with inventors, researchers, and patent attorneys to
              ensure the accurate and timely filing of patent applications. The
              cell also monitors and responds to patent office actions and
              coordinates patent prosecution procedures.
            </li>
            <br />
            <li>
              IP Commercialization and Licensing: The IPR Cell facilitates the
              commercialization of IP assets developed at Tula’s Institute. It
              identifies potential commercialization opportunities, explores
              licensing agreements, and connects innovators with industry
              partners and investors. The cell plays a crucial role in
              negotiating licensing terms, protecting the rights of inventors,
              and ensuring fair and equitable agreements.
            </li>
            <br />
            <li>
              IP Policy Development and Compliance: The IPR Cell assists in the
              formulation of IP policies and guidelines within the institute. It
              works to ensure compliance with legal and ethical standards
              related to intellectual property. The cell also helps manage
              contractual obligations regarding IP, including sponsored research
              agreements and collaborative partnerships.
            </li>
            <br />
            <li>
              IP Portfolio Management: The IPR Cell maintains a comprehensive
              database and record of intellectual property assets generated by
              the institute’s faculty, researchers, and students. It manages the
              documentation, tracking, and monitoring of IP assets, ensuring
              their proper maintenance and protection throughout their
              lifecycle.
            </li>
          </ul>
          <br />
          The IPR Cell at Tula’s Institute is instrumental in fostering a
          culture of respect for intellectual property rights, promoting
          innovation, and supporting the commercialization of valuable
          inventions and creative works. Through its initiatives, the IPR Cell
          contributes to the growth of the institute’s research ecosystem,
          enhances the reputation of the institution, and fosters collaborations
          with industry and other stakeholders.
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>Patents </li>
            <li>IPR Policy</li>
          </ul>
        </>
      ),
      image: intellectual,
    },
  ];

  return (
    <>
      <head>
        <title>
          Intellectual Property Rights (IPR) Cell | Best Engineering College in
          Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the Intellectual Property Rights (IPR) Cell at Tula's Institute, dedicated to fostering innovation and protecting intellectual property. Learn about various initiatives and resources to help students and faculty safeguard their creative ideas and research."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                Intellectual Property Rights{" "}
                <span className="text-[#007A83]">(IPR) Cell</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              "The Intellectual Property Rights (IPR) Cell at Tula’s Institute is a dedicated unit that focuses on the management, protection, and utilization of intellectual property assets within the institute. The IPR Cell plays a critical role in creating awareness about intellectual property rights, facilitating the filing and protection of IP assets, and supporting innovation and research activities."
            }
          />
          <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div>
          <Vision sections={sections} />
          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default IntellectualPropertyRightsIprCell;
