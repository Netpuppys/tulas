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

const subTitle = "Affiliated to Uttarakhand Technical University and Sri Dev Suman University, Approved by AICTE, Ministry of HRD, Govt of India"

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
    <footer className="bg-gray-800 h-screen w-full text-white">
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
        <div className="w-full h-[6vh] bg-[#808080] px-[2%] gap-3 flex justify-between items-center">
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
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-4 justify-center">
          <Image
            src={TulasFooter}
            alt="Tula's Dehradun Logo"
            width={200}
            height={80}
          />
          <p className="text-sm mt-2 max-w-[40rem] text-center">
            {subTitle}
          </p>
          {/* <p className="text-sm mt-2">Designed and Managed By NetPuppys</p> */}
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Key Links</h4>
          <ul className="">
            {keyLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.linkTo}>
                  <span className="text-[#E69706]">{"> "}</span>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="">Address</h4>
          <p>
            Tulas Institute, Dhoolkot Near Selaqui, Dhulkot Rd, Dehradun,
            Uttarakhand
          </p>

          <div className="mt-4"></div>
        </div>
        <div className="">
          <h4 className="">Telephone</h4>
          <ul className="">
            <li>
              <a href="tel:+91-6366937159">
                +91-6366937159 (India Admission Helpline)
              </a>
            </li>
            <li>
              <a href="tel:+91-9837634737">
                +91-9837634737 (Nepal Admission Helpline)
              </a>
            </li>
          </ul>
          <h4 className="">Mail</h4>
          <p>
            <a href="mailto:info@tulas.edu.in">info@tulas.edu.in</a>
          </p>
        </div>
        <div className="">
          <h4 className="">Connect Us</h4>
          <ul className="">
            {socialMediaLinks.map((social, index) => (
              <li key={index}>
                <a href={social.href}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
