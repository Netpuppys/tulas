"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/journal/background.png";
import { useInView } from "react-intersection-observer";
import TableComponent from "./data/tableData";

function RAndDConferenceOrganized() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <head>
        <title>
          Conferences Organized | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the conferences organized by Tula's Institute, where academic and industry leaders come together to share knowledge and foster innovation in engineering and technology."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                Conferences <span className="text-[#007A83]">Organized</span>
              </>
            }
            description={<></>}
            belowPara={
              <>
                A conference is a gathering of multiple individuals of the
                parent and other institutes to discuss and share their views on
                a specific theme. It is easy to mix it up with conventions,
                colloquia, and symposiums. While each conference is unique in
                terms of size and purpose, the phrase can be used to the overall
                concept. The keynote address is delivered by one or more keynote
                speakers in all the conferences. The key note speakers selected
                are well-known personalities/Experts in the field, and their
                presence is intended to encourage more people to attend the
                conferences. The list of conferences organized by the institute
                is as follows:
              </>
            }
          />
          {/* <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div> */}
          <div className="pb-8 px-8 md:px-[8%] md:pb-[3%] w-full">
            <div className="h-full overflow-auto w-full">
              <TableComponent />
            </div>
          </div>

          <div className="w-full h-fit z-50">
            <Footer color={true} />
          </div>
        </div>
      </body>
    </>
  );
}

export default RAndDConferenceOrganized;
