import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import TulasFooter from "../public/Components/Footer/tulasFooter.png";
import Link from "next/link";

const subTitle =
  "Affiliated to Uttarakhand Technical University and Sri Dev Suman University, Approved by AICTE, Ministry of HRD, Govt of India";

const Footer = () => {
  const keyLinks = [
    { title: "Anti-ragging", linkTo: "" },
    { title: "Grievance", linkTo: "" },
    { title: "Holiday Calendar", linkTo: "" },
    { title: "Exam Details", linkTo: "" },
    { title: "Career", linkTo: "" },
    { title: "ICC", linkTo: "" },
    { title: "Mandatory Disclosure", linkTo: "" },
    { title: "Handbook", linkTo: "" },
    { title: "Research Policy", linkTo: "" },
    { title: "Plagiarism Policy", linkTo: "" },
    { title: "QuillBot Software", linkTo: "" },
    { title: "NAAC", linkTo: "" },
    { title: "IQAC", linkTo: "" },
  ];
  const keyLinks2 = [
    { title: "AICTE", linkTo: "" },
    { title: "AISHE", linkTo: "" },
    { title: "Uttarakhand Technical University", linkTo: "" },
    { title: "Sri Devsuman Uttarakhand University", linkTo: "" },
    { title: "UBTER", linkTo: "" },
    { title: "National Scholarship Portal", linkTo: "" },
    { title: "National Career Service", linkTo: "" },
    { title: "NIRF Ranking", linkTo: "" },
    { title: "Internshala", linkTo: "" },
    { title: "Turnitin", linkTo: "" },
    { title: "Academic Calendar", linkTo: "" },
    { title: "Code Of Conduct", linkTo: "" },
  ];

  const socialMediaLinks = [
    { href: "#", icon: <FaFacebookF /> },
    { href: "#", icon: <FaTwitter /> },
    { href: "#", icon: <FaInstagram /> },
    { href: "#", icon: <FaLinkedinIn /> },
    { href: "#", icon: <FaYoutube /> },
  ];
  return (
    <footer className=" h-screen w-full text-white">
      <div className="w-full h-[12vh] flex items-end">
        <div className="w-[67%] min-w-[1000px] h-full bg-[#120008] flex justify-between px-4 items-center">
          <h3 className="font-[Oswald] text-[40px]">
            WANT TO LEARN MORE ABOUT TULA’S?
          </h3>
          <div className="flex gap-4">
            <button className="bg-[#00383D] border-2 border-[#E69706] py-2 px-5 text-white">
              ENQUIRY NOW
            </button>
            <button className="bg-[#E69706] border-2 border-[#E69706] py-2 px-5 text-black">
              APPLY TODAY
            </button>
          </div>
        </div>
        <div className="w-[33%] h-[6vh] bg-[#808080] px-[2%] gap-3 flex justify-between items-center">
          <h4 className="font-[Oswald] text-[28px] text-white ">CONNECT US</h4>
          <ul className="flex gap-2">
            {socialMediaLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="bg-[#fff] rounded-lg bg-opacity-[0.08] text-white p-2 text-xl"
              >
                {social.icon}
              </Link>
            ))}
          </ul>
          <button className="bg-[rgba(255, 255, 255, 0.08)] text-white"></button>
        </div>
      </div>
      <div className="w-full flex flex-col h-[88vh] items-center bg-[#3D001B]">
        <div className="w-full flex flex-col items-center gap-4 justify-center">
          <Image
            src={TulasFooter}
            alt="Tula's Dehradun Logo"
            className="max-w-[400px] h-fit mt-8"
          />
          <p className="text-xl mt-2 max-w-[800px] text-center">{subTitle}</p>
          {/* <p className="text-sm mt-2">Designed and Managed By NetPuppys</p> */}
        </div>

        <ul className="flex gap-2 mt-6">
          {socialMediaLinks.map((social, index) => (
            <li
              key={index}
              className="text-[25px] p-2 rounded-full bg-[#732D4C]"
            >
              <a href={social.href}>{social.icon}</a>
            </li>
          ))}
        </ul>

        <div className="flex justify-between w-full h-full mt-8 px-[5%]">
          <div className="max-w-[352px]">
            <div className=" justify-center flex flex-col">
              <div className="w-[70px] h-[2px] bg-[#E69706]"></div>
              <h4 className="text-3xl font-normal mb-4 font-[Oswald]">
                ADDRESS
              </h4>
            </div>
            <p className="text-[20px] font-[TTChocolates] mb-8">
              Tulas Institute, Dhoolkot Near Selaqui, Dhulkot Rd, Dehradun,
              <span className="text-[#E69706]"> Uttarakhand</span>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.277785508504!2d77.8834027760641!3d30.343054304360063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa74538275%3A0x3cb757428c691de3!2sTula&#39;s%20Institute!5e0!3m2!1sen!2sin!4v1724739581831!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-4"></div>
          </div>
          <div className="mb-6 md:mb-0 w-[600px]">
            <div className="w-[500px] justify-center flex flex-col items-center text-center">
              <div className="w-[60px] h-[2px] bg-[#E69706]"></div>
              <h4 className="text-3xl font-normal mb-4 font-[Oswald]">
                KEY LINKS
              </h4>
            </div>
            <h5 className="flex w-full max-w-[600px] justify-between text-xl font-[TTChocolates]">
              <ul className="max-w-[220px] w-full">
                {keyLinks.map((link, index) => (
                  <li key={index} className="">
                    <Link href={link.linkTo} className="flex gap-2 ">
                      <span className="text-[#E69706]">{"> "}</span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="max-w-[279px] w-full">
                {keyLinks2.map((link, index) => (
                  <li key={index} className="">
                    <Link href={link.linkTo} className="flex gap-2 ">
                      <span className="text-[#E69706]">{"> "}</span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </h5>
          </div>

          <div className="">
            <div className=" justify-center flex flex-col">
              <div className="w-[70px] h-[2px] bg-[#E69706]"></div>
              <h4 className="text-3xl font-normal mb-4 font-[Oswald]">
                TELEPHONE
              </h4>
            </div>
            <ul className="text-[20px] font-[TTChocolates]">
              <li>
                <a href="tel:0135-269930">
                  <span className="text-[#E69706]">{"> "}</span>0135-269930
                  (Landline)
                </a>
              </li>
              <li>
                <a href="tel:+91-6366937159">
                  <span className="text-[#E69706]">{"> "}</span>+91-6366937159
                  <br />
                  (India Admission Helpline)
                </a>
              </li>
              <li>
                <a href="tel:+91-9837634737">
                  <span className="text-[#E69706]">{"> "}</span>+91-9837634737
                  <br />
                  (Nepal Admission Helpline)
                </a>
              </li>
            </ul>
            <div className="mt-8 justify-center flex flex-col">
              <div className="w-[70px] h-[2px] bg-[#E69706]"></div>
              <h4 className="text-3xl font-normal mb-4 font-[Oswald]">MAIL</h4>
            </div>

            <p className="text-[20px] font-[TTChocolates]">
              <a href="mailto:info@tulas.edu.in">info@tulas.edu.in</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
