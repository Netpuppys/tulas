'use client'

import Banner from "@/component/Banner"
import Navbar from "@/component/Navbar/Navbar"
import banner from "../../../public/About/whyTulasBanner.png"
import Footer from "@/component/Footer"
import hostelBackground from "../../../public/infrastructure/HostelMess/hostel.png"
import Image from "next/image"
import whyTulasImage from "../../../public/About/whyTulasImage.png"
import { Fade } from "react-awesome-reveal"


const sectionData = [
    {
        image: "",
        title: "ISO 9001:2008 Certified",
        description: "The institute is affiliated to Uttarakhand Technical University and approved by AICTE, Ministry of HRD, Govt. of India. Tula’s Institute has also been awarded ISO 9001:2008 for quality management services."
    },
    {
        image: "",
        title: "Industry Oriented Curriculum",
        description: <>Tula's Institute is India's top engineering college known for its excellence teaching. We use a set of tailor-made curriculum that connect and integrate knowledge of students according to industry demand. Tula’s aims to bridge the gap between of the industry and is aligned towards imparting contemporary knowledge to the students.
            <br/>
            An optimal mix of learning methods ensures a holistic personality development of the students. The curriculum encourages students to apply theoretical learning to real-life scenarios by advent of a unique corporate interface that the institute boasts of.</>
    },
    {
        image: "",
        title: "Corporate Collaboration",
        description: <>
            Tula's Institute is the only college in Uttarakhand which have strategic tie-ups with some of the world class companies like Redhat, Microsoft. Bentley, D-Link etc… to offer study programs that would help the students and faculty gain an international perspective in their chosen field of study.
            <br/>
            We are enabling host of long-term benefits for the overall development of students and to enhance their career opportunities too.

            <br/>
            <br/>
            <ul className="list-disc">
                <li>Microsoft innovation center (MIC)</li>
                <li>Redhat</li>
                <li>Autodesk club</li>
                <li>India's first Remote Robotics lab in association with APS Labs Aachen, Germany.</li>
                <li>D- Link academy</li>
                <li>Bentley Lab</li>
                <li>TedX Delhi</li>
            </ul>
        </>
    },
    {
        image: "",
        title: "Academic Tie-Ups",
        description: <>
            Academic collaborations can help you meet your career goals if approached right. Tula's, the best private engineering college in Uttarakhand, has established academic tie-ups with various international institutions. The aim is to establish mutual cooperation to develop academic and cultural exchange to offer the best knowledge to our students.
            <br/>
            <br/>
            <ul className="list-disc">
                <li>Virtual Labs in association with IIT Roorkee</li>
                <li>Collaboration with IIT Bombay on spoken tutorial project-FOSS</li>
                <li>IEEE Student Chapter</li>
                <li>ACM Student Chapter</li>
                <li>Power and Engineering Society (PES)</li>
                <li>BJMC Public Relation Society of India (PRSI)</li>
                <li>International Association of Students in Agriculture and Related Sciences (IAAS)</li>
            </ul>
        </>
    }
]

const secondSectionData = [
    {
        image: "",
        title: "Academics",
        description: "We offer wide range of undergraduate and postgraduate programs in different specializations. Our tailor-made curriculum plays a vital role in providing a better future and industry exposure to our students. We provide a fantastic campus environment to nurture the innovations of young minds. “ Tula’s associated with many educational institutions from various parts of globe for academic excellence, joint events & conferences like University of Andorra, Europe, Inter American University, Argentina and so on.”"
    },
    {
        image: "",
        title: "Placements",
        description: "Tula's institute has been focused in placing the right student at the right job. Placements have been an integral part of the institute. Tula has best placements records in association with 750+ big companies including Sterlite, Adobe, Deutsche Bank, Oracle, etc. Tula’s is the first college who has been focusing on getting the core companies to the campus and assuring the students with 100% placement assistance. Our aim is to place maximum number of students in top notch companies with high salary package. Today we are known as one of the best academic institution with best campus placement in Dehradun."
    },
    {
        image: "",
        title: "Innovative Methodologies",
        description: "We believe that innovative teaching method boosts the learning skills rapidly in students. Our expert uses innovative training techniques to train students so that they sound strong in their knowledge of a particular subject. We don’t believe in only theoretical knowledge that’s why we try to impart quality education through intense theoretical & practical sessions at Tula’s."
    }, 
    {
        image: "",
        title: "Student Faculty Ratio 2:1",
        description: "Tula's institute has competitive faculty members, on whose shoulders lies the responsibility of taking their students to greater heights. The student and the faculty ratio are 12:1, which helps students to get mentored and catered effectively."
    }
]

const pageDescription = <>
        Tula's Institute ranked among the 'Top engineering Colleges in Dehradun', is nestled in a serene campus, and provides a perfect blend of diverse opportunities to the young leaders of tomorrow. A stimulating curriculum with focus on sustainability, a tech savvy campus founded on state of the art infrastructure, and synergy with corporate right from its inception strengthens its splendid efforts towards developing into a globally renowned centre of excellence in the field of education and is thus one of the preferred engineering college in Dehradun.
        <br/> 
        <br/> 
        Consistently rated amongst the Best Engineering College in Dehradun, Tula's is committed to giving best knowledge to their students through our intensive training. Tula's believes in imparting high end technological & corporate training as well to promote innovative idea to increase professional growth. When it comes to placement, our mission is to achieve 100% placement through hard work and dedication. Tula's institute is also known as Best Placement Engineering College in Dehradun, Uttarakhand. Students at Tula's get the best academic experience and industry exposure for a successful future. Let us tell you why Tula's is a perfect choice for you.
    </>

const bannerText = <><span className="text-[#007A83]">Tula's Institute</span> is spread in 20 acres of lush green campus and has been rated as the No. 1 college in Dehradun having state of the art facilities like auditorium, high-tech computer labs and with world class library having a collection of 32,000 books, play grounds, hostels, multi-cuisine cafeteria, fully wi-fi enabled campus, virtual labs, skill development center etc for holistic development of the students.</>

const Section = ({ section, index }) => (
    <div
      className={`flex flex-col gap-24 md:gap-0 md:flex-row mb-8 md:mb-20 justify-between w-full h-fit items-center ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      } `}
    >
      <Fade delay={100} className={`w-full px-3 md:px-0 ${index % 2 === 0? "md:pl-20" : "md:pr-20"} md:w-[calc(50%-3rem)]`}>
        <div className="w-full block">
          <h3 className="text-white font-[TTChocolatesBold] font-semibold text-[1.5rem] md:text-[2.5rem]">
            | {section.title}
          </h3>
          <br />
          <h4 className="text-[16px] md:text-[20px] font-[TTChocolates] text-[#D9D9D9]">
            {section.description}
          </h4>
        </div>
      </Fade>
      <Fade className="w-full md:w-[calc(50%-3rem)]">
        {section.image &&
        <Image
          src={section.image}
          alt=""
          className="w-full h-fit rounded-xl md:rounded-3xl"
        />}
        {!section.image &&
            <div className={`bg-black w-full h-full min-h-[30rem] ${index % 2 !== 0? "rounded-r-3xl" : "rounded-l-3xl"}`}>
            </div>
        }
      </Fade>
    </div>
  );

const page = () => {
  return (
    <div className='w-full min-h-screen font-[TTChocolates]'>
        <Navbar />

        <Banner 
            image={banner}
            title={<>WHY <span className="text-[#007A83]">TULA'S</span></>}
            belowPara={pageDescription}
        />

        <div className="w-screen h-screen fixed top-0 left-0 -z-10 bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),linear-gradient(0deg, rgba(61, 0, 27, 0.72) 0%, rgba(61, 0, 27, 0.72) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;]">
            <Image
                src={hostelBackground}
                className="w-full h-full object-cover"
                alt=""
            />
            <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.2)]">
                <div
                    className="w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0deg,rgba(61,0,27,0.72),rgba(61,0,27,0.72))] bg-cover bg-no-repeat bg-lightgray"
                />
            </div>
        </div>

        <div className="w-full py-20">
            {sectionData.map((item, index) => (
                <div key={index} className="">
                    <Section section={item} index={index} />
                </div>
            ))}
        </div>

        <div className="w-full bg-white pt-14 pb-28 flex flex-col items-center justify-center px-[15rem]">
            <p className="text-[#3D001B] text-[2.5rem] font-bold underline underline-offset-8">
                World Class Infrastructure
            </p>
            <p className="text-[#007A83] text-[2rem] font-semibold">
                Rated as #1 College Of Dehradun
            </p>
            <Image
                src={whyTulasImage}
                className="max-w-[90rem] mt-8 mb-12 w-full h-fit"
                alt=""
            />
            <p className="text-[#262626] text-center text-xl max-w-[90rem] px-20">
                {bannerText}
            </p>
        </div>

        <div className="w-full py-20">
            {secondSectionData.map((item, index) => (
                <div key={index} className="">
                    <Section section={item} index={index} />
                </div>
            ))}
        </div>

        <Footer />
    </div>
  )
}

export default page