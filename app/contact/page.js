"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import Link from "next/link";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import background from "../../public/AboutDehradun/background.png";
import Footer from "@/component/Footer";
import Image from "next/image";
import phone from "../../public/Contact/phone.png";
import email from "../../public/Contact/email.png";
import landline from "../../public/Contact/landline.png";
import fax from "../../public/Contact/fax.png";
import address from "../../public/Contact/address.png";
import { FiPhoneCall } from "react-icons/fi";
import TulasFooter from "../../public/Components/Footer/tulasFooter.png";
import { FaBicycle, FaCar, FaTrain, FaWalking } from "react-icons/fa";
import ContactForm from "./Component/form";
import { Fade } from "react-awesome-reveal";
const title = (
  <>
    CONTACT <span className="text-[#007A83]">US</span>
  </>
);

function Contact() {
  const icons = [
    {
      icon: <FaCar />,
      key: "car",
      link: "https://www.google.com/maps/dir//Tula's+Institute,+Tulas+Institute+Dhoolkot+Near+Selaqui,+Dhulkot+Rd,+Dehradun,+Uttarakhand+248197/@30.3431173,77.8447781,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390929fa74538275:0x3cb757428c691de3!2m2!1d77.8859777!2d30.3430497!3e0?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaWalking />,
      key: "walking",
      link: "https://www.google.com/maps/dir//Tula's+Institute,+Tulas+Institute+Dhoolkot+Near+Selaqui,+Dhulkot+Rd,+Dehradun,+Uttarakhand+248197/@30.3431173,77.8447781,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390929fa74538275:0x3cb757428c691de3!2m2!1d77.8859777!2d30.3430497!3e2?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaTrain />,
      key: "train",
      link: "https://www.google.com/maps/dir//Tula's+Institute,+Tulas+Institute+Dhoolkot+Near+Selaqui,+Dhulkot+Rd,+Dehradun,+Uttarakhand+248197/@30.3431173,77.8447781,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x390929fa74538275:0x3cb757428c691de3!2m2!1d77.8859777!2d30.3430497!3e3?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaBicycle />,
      key: "bicycle",
      link: "https://www.google.com/maps/dir//Tula's+Institute,+Tulas+Institute+Dhoolkot+Near+Selaqui,+Dhulkot+Rd,+Dehradun,+Uttarakhand+248197/@30.3431173,77.8447781,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x390929fa74538275:0x3cb757428c691de3!2m2!1d77.8859777!2d30.3430497!3e1?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];
  const cardData = [
    {
      title: "ADMISSION HELPLINE",
      image: phone,
      description: "+91-9837983721",
      link: "tel:+91-9837983721",
    },
    {
      title: "EMAIL",
      image: email,
      description: "info@tulas.edu.in",
      link: "mailto:info@tulas.edu.in",
    },
    {
      title: "ADDRESS",
      image: address,
      description:
        "Tulas Institute Mehre Ka Gaon PO Selaqui Dhoolkot Dehradun Uttarakhand 248011",
      link: "https://www.google.com/maps/place/Tula's+Institute/@30.3430543,77.8834028,17z/data=!3m1!4b1!4m6!3m5!1s0x390929fa74538275:0x3cb757428c691de3!8m2!3d30.3430497!4d77.8859777!16s%2Fm%2F010qjbdj?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "COLLEGE LANDLINE",
      image: landline,
      description: "+91-9837983721",
      link: "tel:+91-9837983721",
    },
    {
      title: "FAX",
      image: fax,
      description: "0135-2699305",
      link: "fax:0135-2699305",
    },
  ];
  const mobileContact = [
    {
      title: "NEPAL ADMISSION HELPLINE",
      link: "tel:+91-9837983721",
      button: "+91 98379 83721",
    },
    {
      title: "PLACEMENT HELPLINE",
      link: "tel:+91-7454904594",
      button: "+91 74549 04594",
    },
    {
      title: "BIHAR ADMISSION HELPLINE",
      link: "tel:+91-9837983721",
      button: "+91 98379 83721",
    },
  ];
  return (
    <>
      <head>
        <title>
          Contact | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Get in touch with Tula's Institute, the top engineering college in Dehradun, Uttarakhand. Contact us for admissions, inquiries, or campus tours and learn more about our programs, facilities, and student life."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={title}
          description={
            "Tula’s Institute is dedicated to serve the community by recognizing the diverse needs of the individuals. We encourage personal and professional development through respect, appreciation and a commitment to general education, as a foundation for life-long learning. Tula’s Institute is the Ranked as No. 9 College in the North India"
          }
          belowTitle={"CONTACT US"}
          belowPara={
            "Being the capital city, Dehradun is well-connected by roads, rail and air and is easily accessible from most parts of the country. It is 235 km away from India’s capital, New Delhi. Dehradun is easy to reach and an accessible destination that you can visit any time of the year."
          }
        />
        {/* fixed background */}
        <div className="w-full relative overflow-hidden md:-mb-[6vh]">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />

          <div className="w-full py-0 p-8 md:py-24">
            <div className="bg-transparent w-fit py-20 mx-auto h-fit text-pretty flex flex-wrap justify-center gap-12 border-b-2 border-white">
              {cardData.map((card, index) => (
                <Fade delay={200}>
                  <Link
                    href={card.link}
                    key={index}
                    className="w-fit font-[TTChocolates] font-semibold text-[14px] h-fit text-center flex flex-col items-center justify-center gap-3"
                  >
                    <Image src={card.image} alt="" className="w-[48px] h-fit" />
                    {card.title}
                    <br />
                    <p className="max-w-[169px] text-white text-wrap">
                      {card.description}
                    </p>
                  </Link>
                </Fade>
              ))}
            </div>
            <div className="bg-transparent w-fit p-10 py-20 mx-auto h-fit text-pretty flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-14">
              {mobileContact.map((mobileContact, index) => (
                <Fade delay={300}>
                  <div
                    key={index}
                    className="w-fit h-fit text-center flex flex-col items-center justify-center gap-4 md:gap-14"
                  >
                    <h4 className="max-w-[257px] text-white font-[TTChocolatesBold] font-extrabold text-[22px]">
                      {mobileContact.title}
                    </h4>

                    <Link href={mobileContact.link}>
                      <button className="w-fit text-wrap px-10 py-2 font-semibold font-[TTChocolatesBold] text-[14px] text-[#760135] bg-white rounded-full flex gap-2 items-center ">
                        <FiPhoneCall />
                        {mobileContact.button}
                      </button>
                    </Link>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
          <div className="relative flex ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2777855085124!2d77.8834027761828!3d30.343054304359832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa74538275%3A0x3cb757428c691de3!2sTula&#39;s%20Institute!5e0!3m2!1sen!2sin!4v1725008516487!5m2!1sen!2sin"
              className="w-full block md:hidden h-[1100px] z-20 relative"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2777855085124!2d77.8834027761828!3d30.343054304359832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa74538275%3A0x3cb757428c691de3!2sTula&#39;s%20Institute!5e0!3m2!1sen!2sin!4v1725008516487!5m2!1sen!2sin"
              className="hidden md:block w-full h-[450px] z-20 relative"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-[#000] bg-opacity-80 h-fit md:h-[450px] text-[#D2D2D2] gap-5 absolute bottom-28 md:bottom-0 self-end md:right-16 w-full md:w-[300px] md:top-0 z-40 px-10 flex flex-col py-5 md:py-3 justify-center">
              <Image src={TulasFooter} alt="" />
              <h4 className="py-8 border-y-[1px] border-white font-[CarotSlab] text-[16px] md:text-[18px]">
                Tulas Institute, Dhoolkot Near Selaqui, Dhulkot Rd, Dehradun,
                Uttarakhand, 248011
              </h4>
              <h3 className="font-[CarotSlab] md:text-[18px]">
                Get Direction by:
              </h3>
              <div className="flex gap-5">
                {icons.map(({ icon, key, link }) => (
                  <Link
                    href={link}
                    key={key}
                    className="text-[30px] md:text-[40px] hover:text-[#007A83] cursor-pointer transition-colors ease-in duration-300"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit z-40">
          <Footer set={true} />
        </div>
      </body>
    </>
  );
}

export default Contact;
