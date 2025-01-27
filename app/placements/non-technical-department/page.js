import Banner from "@/component/Banner";
import bannerImage from "../../../public/Homepage/BannerHome/Banner1.webp";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/AboutDehradun/background.png";
import Image from "next/image";
import React from "react";
import Footer from "@/component/Footer";
import tableData from "./tableData";
import logo1 from "../../../public/placements/nonTechnical/logo1.png";
import logo2 from "../../../public/placements/nonTechnical/logo2.png";
import logo3 from "../../../public/placements/nonTechnical/logo3.png";
import logo4 from "../../../public/placements/nonTechnical/logo4.png";
import logo5 from "../../../public/placements/nonTechnical/logo5.png";
import logo6 from "../../../public/placements/nonTechnical/logo6.png";
import logo7 from "../../../public/placements/nonTechnical/logo7.png";
import logo8 from "../../../public/placements/nonTechnical/logo8.png";
import logo9 from "../../../public/placements/nonTechnical/logo9.png";
import logo10 from "../../../public/placements/nonTechnical/logo10.png";
import logo11 from "../../../public/placements/nonTechnical/logo11.png";
import logo12 from "../../../public/placements/nonTechnical/logo12.png";
import logo13 from "../../../public/placements/nonTechnical/logo13.png";
import logo14 from "../../../public/placements/nonTechnical/logo14.png";
import logo15 from "../../../public/placements/nonTechnical/logo15.png";
import logo16 from "../../../public/placements/nonTechnical/logo16.png";
import logo17 from "../../../public/placements/nonTechnical/logo17.png";
import logo18 from "../../../public/placements/nonTechnical/logo18.png";
import logo19 from "../../../public/placements/nonTechnical/logo19.png";
import logo20 from "../../../public/placements/nonTechnical/logo20.png";
import logo21 from "../../../public/placements/nonTechnical/logo21.png";
import TopRecruiter from "../components/TopRecruiters";

const logosArray = [
  [logo1, logo2, logo3, logo4, logo5, logo6, logo7],
  [logo8, logo9, logo10, logo11, logo12, logo13, logo14],
  [logo15, logo16, logo17, logo18, logo19, logo20, logo21],
];

const TableComponent = () => {
  return (
    <table className="max-w-[80rem]">
      <thead>
        <tr>
          <th className="text-sm font-normal">S.No.</th>
          <th className="text-sm font-normal">Name of Company</th>
          <th className="text-sm font-normal">Programme</th>
          <th className="text-sm font-normal">No. Of Students Placed</th>
          <th className="text-sm font-normal">Package</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((project, index) => (
          <tr key={project.id}>
            <td>{index + 1}</td>
            <td>{project.companyName}</td>
            <td>{project.programme}</td>
            <td>{project.noOfStudentsPlaced}</td>
            <td>{project.package}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



const description = (
  "The Non-Technical Department at Tula’s focuses on delivering comprehensive education in areas such as management, humanities, and commerce. With a curriculum designed to align with industry standards, the department equips students with the knowledge and skills needed to excel in their chosen fields. Through practical learning, expert guidance, and a commitment to academic excellence, the Non-Technical Department prepares students for thriving careers in professional environments."
);

const page = () => {
  return (
    <div className="w-full">
      <Image
        src={background}
        className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
        alt=""
      />

      <Navbar />
      <Banner
        title={
          "Non-Technical Placement Record"
        }
        image={bannerImage}
        belowPara={description}
      />
      <div className="py-28 w-full flex items-center justify-center">
        <div className="max-h-[90vh] max-w-[80rem] overflow-y-auto w-full px-10 flex items-center justify-start flex-col">
          <TableComponent />
        </div>
      </div>
      <div className="w-full bg-white pb-1">
        <TopRecruiter crouselImages={logosArray} />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
