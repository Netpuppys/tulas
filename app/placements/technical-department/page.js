import React from "react";
import bannerImage from "../../../public/placements/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import tableData from "./tableData";
import image1 from "../../../public/placements/technical/image1.jpg";
import image2 from "../../../public/placements/technical/image2.jpg";
import image3 from "../../../public/placements/technical/image3.jpg";
import image4 from "../../../public/placements/technical/image4.jpg";
import image5 from "../../../public/placements/technical/image5.jpg";
import image6 from "../../../public/placements/technical/image6.jpg";
import image7 from "../../../public/placements/technical/image7.jpg";
import image8 from "../../../public/placements/technical/image8.jpg";
import image9 from "../../../public/placements/technical/image9.jpg";
import image10 from "../../../public/placements/technical/image10.jpg";
import image11 from "../../../public/placements/technical/image11.jpg";
import image12 from "../../../public/placements/technical/image12.jpg";
import image13 from "../../../public/placements/technical/image13.jpg";
import image14 from "../../../public/placements/technical/image14.jpg";
import image15 from "../../../public/placements/technical/image15.jpg";
import image16 from "../../../public/placements/technical/image16.jpg";
import image17 from "../../../public/placements/technical/image17.jpg";
import image18 from "../../../public/placements/technical/image18.jpg";
import image19 from "../../../public/placements/technical/image19.jpg";
import image20 from "../../../public/placements/technical/image20.jpg";
import image21 from "../../../public/placements/technical/image21.jpg";
import image22 from "../../../public/placements/technical/image22.jpg";
import image23 from "../../../public/placements/technical/image23.jpg";
import image24 from "../../../public/placements/technical/image24.jpg";
import image25 from "../../../public/placements/technical/image25.jpg";
import image26 from "../../../public/placements/technical/image26.jpg";
import image27 from "../../../public/placements/technical/image27.jpg";
import image28 from "../../../public/placements/technical/image28.jpg";
import image29 from "../../../public/placements/technical/image29.jpg";
import image30 from "../../../public/placements/technical/image30.jpg";
import image31 from "../../../public/placements/technical/image31.jpg";
import TopRecruiter from "../components/TopRecruiters";
import BannerProgram from "@/component/Programs/BannerProgram";

const carouselImages = [
  [image1, image2, image3, image4, image5, image6, image7, image8],
  [image9, image10, image11, image12, image13, image14, image15, image16],
  [image17, image18, image19, image20, image21, image22, image23, image24],
  [image25, image26, image27, image28, image29, image30, image31],
];

const TableComponent = () => {
  return (
    <table className="max-w-[80rem]">
      <thead>
        <tr>
          <th className="text-sm font-normal">S.No.</th>
          <th className="text-sm font-normal">Name of Company</th>
          <th className="text-sm font-normal">Programme</th>
          <th className="text-sm font-normal">Sector</th>
          <th className="text-sm font-normal">No. Of Students Placed</th>
          <th className="text-sm font-normal">Package</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((project, index) => (
          <tr key={project.id}>
            <td>{index + 1}</td>
            <td>{project.company}</td>
            <td>{project.programme}</td>
            <td>{project.sector}</td>
            <td>{project.studentsPlaced}</td>
            <td>{project.package}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const description = (
  <>
    The Technical Department at Tula’s stands as a cornerstone of our placement
    success, ensuring students are equipped with the technical expertise
    required by top recruiters. Through rigorous training, state-of-the-art
    resources, and a commitment to excellence, the department has consistently
    contributed to producing industry-ready professionals. Its impactful efforts
    are evident in the impressive placement records achieved by our students
    across various technical domains.
  </>
);

const page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <BannerProgram title={"Technical Placement Record"} image={bannerImage} />
      <div className="w-full bg-white">
        <div className="min-h-fit py-8 md:py-[3%] h-fit md:min-h-[15vh] w-full overflow-hidden flex flex-col justify-center max-w-[1000px] px-8 mx-auto">
          <h4 className="leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] text-[#404040]">
            {description}
          </h4>
        </div>
      </div>
      <div className="pb-8 px-8 md:px-[8%] md:pb-[3%] w-full">
        <div className="h-full overflow-auto w-full">
          <TableComponent />
        </div>
      </div>
      <div className="w-full pb-1 bg-white">
        <TopRecruiter crouselImages={carouselImages} />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
