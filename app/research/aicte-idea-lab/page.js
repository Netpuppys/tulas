"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/entrepreneurship-development-cell/background.png";
import { Fade } from "react-awesome-reveal";
import intellectual from "../../../public/research/intellectual/intellectual.png";
import Vision from "@/component/Programs/Vision";
import Link from "next/link";
// import ILT from "../../public/FooterPDf/idea-lab-tender.doc";

function AICTEIDEALAB() {
  const sections = [
    {
      title: "Web Development Cell",
      description: (
        <>
          The key responsibilities and activities of Tula’s Web Development Cell
          include:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Website Development and Maintenance: The cell is responsible for
              designing, developing, and regularly updating the institute’s
              official website. This includes creating user-friendly interfaces,
              implementing responsive design principles for optimal viewing
              across devices, and ensuring that the website’s content remains up
              to date.
            </li>
            <br />
            <li>
              Web Application Development: The cell develops web-based
              applications to support various functionalities and services
              within the institute. These applications may include online
              admission portals, student information systems, examination
              management systems, and other tools that enhance administrative
              efficiency and user experience.
            </li>
            <br />
            <li>
              Content Management: The Web Development Cell collaborates with
              different departments and stakeholders to ensure that relevant and
              engaging content is published on the institute’s website. This
              involves creating and updating web pages, managing multimedia
              elements, and optimizing content for search engine visibility.
            </li>
            <br />
            <li>
              Website Security and Performance: The cell focuses on maintaining
              website security by implementing appropriate measures to protect
              against cyber threats and unauthorized access. It also monitors
              the performance and speed of the website, optimizing it to deliver
              a seamless browsing experience to visitors.
            </li>
            <br />
            <li>
              SEO and Analytics: The Web Development Cell utilizes Search Engine
              Optimization (SEO) techniques to improve the visibility and
              ranking of the institute’s website in search engine results. It
              also analyses website traffic and user behaviour through analytics
              tools to gain insights and make data-driven decisions for website
              optimization.
            </li>
            <br />
            <li>
              Integration of Online Tools and Platforms: The cell integrates
              various online tools and platforms to enhance communication,
              collaboration, and user engagement. This may include integrating
              social media platforms, implementing online chat systems, or
              incorporating E-Learning platforms within the website.
            </li>
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
          AICTE IDEA Lab | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the AICTE IDEA Lab at Tula's Institute, fostering innovation and skills in web technologies through collaborative projects, workshops, and expert guidance."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                AICTE IDEA <span className="text-[#007A83]">Lab</span>
              </>
            }
            description={<></>}
            belowTitle={""}
            belowPara={""}
          />
          <div className="container my-10">
  <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#760135]">
    NOTICE INVITING TENDER
  </h1>
  <p className="mb-3 text-[#000]">
    E-Tenders are invited in a two-bid system (Technical and Financial) for the supply/execution of the item(s)/stores/work as specified below. Submissions are invited from Original Equipment Manufacturers (OEMs) or their Authorized Distributors only, in accordance with the provisions of GFR 2017 and the terms and conditions outlined in the tender document.
  </p>
  <p className="my-3 text-[#000]">
    The interested bidders should Courier/email/registered post the duly signed tender form and their bids along with scanned copies of all the relevant certificates, documents, etc., in support of their technical &amp; price bid all duly sealed and signed should be sent. The technical bids will be opened on 15/05/2025 at 5.00 P.M/ in the office of Officer in Charge (PURCHASE).
  </p>
  <p className="my-3 text-[#000]">
    The tender document including item specifications, eligibility conditions, and terms, can be viewed and downloaded from the website of Tula's Institute, Dhoolkot, PO-Selaqui, Chakrata Road, Dehradun, Uttarakhand at www.tulas.edu.in
  </p>
<a
  href="/FooterPDf/idea-lab-tender.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block px-6 py-2 bg-[#760135] text-white rounded hover:opacity-90 transition"
>
  Know More
</a>

</div>

          <div className="w-full h-fit z-50">
            <Footer color={true} />
          </div>
        </div>
      </body>
    </>
  );
}

export default AICTEIDEALAB;
