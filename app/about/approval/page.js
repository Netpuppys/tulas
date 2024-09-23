import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import BannerImg from "../../../public/Components/Banner/bannerImg.png";
import Footer from "@/component/Footer";
import { BsFileEarmarkPdf } from "react-icons/bs";
import background from "../../../public/AboutDehradun/background.png";
import AICTEApproval from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA).webp";
import AICTEApproval22 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)22-23.jpg";
import AICTEApproval21 from "../../../public/About/Approvals/AprovalImages/ExtensionOfApproval.jpg";
import AICTEApproval20 from "../../../public/About/Approvals/AprovalImages/ExtensionOfApproval20-21.jpg";
import AICTEApproval19 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)19-20.jpg";
import AICTEApproval18 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)18-19.jpg";
import AICTEApproval17 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)17-18.jpg";
import AICTEApproval16 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)16-17.jpg";
import AICTEApproval15 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)15-16.jpg";
import AICTEApproval14 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)14-15.jpg";
import AICTEApproval13 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)13-14.jpg";
import AICTEApproval12 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)12-13.jpg";
import AICTEApproval11 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)11-12.jpg";
import AICTEApproval10 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)10-11.jpg";
import AICTEApproval09 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)09-10.webp";
import AICTEApproval08 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)08-09.webp";
import AICTEApproval07 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)07-08.webp";
import AICTEApproval06 from "../../../public/About/Approvals/AprovalImages/AICTEApproval(EOA)06-07.webp";
import Link from "next/link";
import AICTEApprovalPdf from "../../../public/About/Approvals/ApprovalsPDF/EOAReport2023-24.pdf";
import AICTEApproval22pdf from "../../../public/About/Approvals/ApprovalsPDF/EXTENSION-OF-APPROVAL-2022-23.pdf";
import AICTEApproval21pdf from "../../../public/About/Approvals/ApprovalsPDF/EOA-Report-21-22.pdf";
import AICTEApproval20pdf from "../../../public/About/Approvals/ApprovalsPDF/EOA-Report-2020-21-3.pdf";
import AICTEApproval19pdf from "../../../public/About/Approvals/ApprovalsPDF/EOA_Report_2019-20-1.pdf";
import AICTEApproval18pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-20118-191.pdf";
import AICTEApproval17pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2017-18-1.pdf";
import AICTEApproval16pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2016-17.pdf";
import AICTEApproval15pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2015-16.pdf";
import AICTEApproval14pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2014-15.pdf";
import AICTEApproval13pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2013-14.pdf";
import AICTEApproval12pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2012-13.pdf";
import AICTEApproval11pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2011-12.pdf";
import AICTEApproval10pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2010-11.pdf";
import AICTEApproval09pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2009-10.pdf";
import AICTEApproval08pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2008-09.pdf";
import AICTEApproval07pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-EOA-2007-08.pdf";
import AICTEApproval06pdf from "../../../public/About/Approvals/ApprovalsPDF/AICTE-APPROVAL-LOA-2006-07.pdf";
function Approval() {
  const approvalData = [
    {
      imageSrc: AICTEApproval,
      title: "AICTE Approval (EOA)",
      year: "2023-24",
      link: AICTEApprovalPdf,
    },
    {
      imageSrc: AICTEApproval22,
      title: "AICTE Approval (EOA)",
      year: "2022-23",
      link: AICTEApproval22pdf,
    },
    {
      imageSrc: AICTEApproval21,
      title: "Extension of Approval",
      year: "2021-22",
      link: AICTEApproval21pdf,
    },
    {
      imageSrc: AICTEApproval20,
      title: "Extension of Approval (EoA)",
      year: "2020-21",
      link: AICTEApproval20pdf,
    },
    {
      imageSrc: AICTEApproval19,
      title: "AICTE Approval (EOA)",
      year: "2019-20",
      link: AICTEApproval19pdf,
    },
    {
      imageSrc: AICTEApproval18,
      title: "AICTE Approval (EOA)",
      year: "2018-19",
      link: AICTEApproval18pdf,
    },
    {
      imageSrc: AICTEApproval17,
      title: "AICTE Approval (EOA)",
      year: "2017-18",
      link: AICTEApproval17pdf,
    },
    {
      imageSrc: AICTEApproval16,
      title: "AICTE Approval (EOA)",
      year: "2016-17",
      link: AICTEApproval16pdf,
    },
    {
      imageSrc: AICTEApproval15,
      title: "AICTE APPROVAL (EOA)",
      year: "2015-16",
      link: AICTEApproval15pdf,
    },
    {
      imageSrc: AICTEApproval14,
      title: "AICTE APPROVAL (EOA)",
      year: "2014-15",
      link: AICTEApproval14pdf,
    },
    {
      imageSrc: AICTEApproval13,
      title: "AICTE APPROVAL (EOA)",
      year: "2013-14",
      link: AICTEApproval13pdf,
    },
    {
      imageSrc: AICTEApproval12,
      title: "AICTE APPROVAL (EOA)",
      year: "2012-13",
      link: AICTEApproval12pdf,
    },
    {
      imageSrc: AICTEApproval11,
      title: "AICTE APPROVAL (EOA)",
      year: "2011-12",
      link: AICTEApproval11pdf,
    },
    {
      imageSrc: AICTEApproval10,
      title: "AICTE APPROVAL (EOA)",
      year: "2010-11",
      link: AICTEApproval10pdf,
    },
    {
      imageSrc: AICTEApproval09,
      title: "AICTE APPROVAL (EOA)",
      year: "2009-10",
      link: AICTEApproval09pdf,
    },
    {
      imageSrc: AICTEApproval08,
      title: "AICTE APPROVAL (EOA)",
      year: "2008-09",
      link: AICTEApproval08pdf,
    },
    {
      imageSrc: AICTEApproval07,
      title: "AICTE APPROVAL (EOA)",
      year: "2007-08",
      link: AICTEApproval07pdf,
    },
    {
      imageSrc: AICTEApproval06,
      title: "AICTE APPROVAL (EOA)",
      year: "2006-07",
      link: AICTEApproval06pdf,
    },
  ];
  return (
    <div>
      <Navbar />
      <Banner
        title={
          <>
            <span className="text-[#007A83]">APPROVALS</span>
          </>
        }
        image={BannerImg}
        description={<></>}
        belowTitle={<></>}
        belowPara={
          <>
            We are thrilled to inform you that we have streamlined our  degree
            collection process for your convenience. You no longer need to make
            the journey back  to the institute to obtain your degree. Instead,
            we are now offering a hassle-free service where  your degree will be
            posted directly to your residence.{" "}
          </>
        }
      />
      {/* fixed background */}
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
        <div className="py-20 flex flex-col justify-center items-center">
          <div className="text-[#007A83] text-[35px] font-[TTChocolatesBold] py-1 w-[70%] text-center bg-white rounded-3xl">
            AICTE Approvals
          </div>
          <div className="py-10 w-[70%] mx-auto">
            {approvalData.map((approval, index) => (
              <div
                key={index}
                className="mb-4 border-2 group hover:bg-white border-white w-full h-fit rounded-xl overflow-hidden"
              >
                <Link
                  href={approval.link}
                  className="flex justify-between items-center"
                >
                  <div className="flex w-full h-full items-center gap-10">
                    <div className="text-red-500 bg-white group-hover:bg-transparent rounded-r-xl w-[160px] h-[83px] flex items-center justify-center text-[52px]">
                      <BsFileEarmarkPdf />
                    </div>
                    <p className="text-[25px] text-white group-hover:text-black  font-[TTChocolatesBold]">
                      {approval.title}
                    </p>
                    <p className="text-[30px] text-white group-hover:text-black font-[TTChocolatesBold]">
                      {approval.year}
                    </p>
                  </div>
                  <Image
                    src={approval.imageSrc}
                    alt=""
                    className="w-[200px] object-cover h-[83px] rounded-s-xl"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Approval;
