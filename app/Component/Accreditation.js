import React from "react";
import Stars from "../../public/Homepage/Accreditation/Stars.png";
import Image from "next/image";
import AccreditationImg from "../../public/Homepage/Accreditation/accreditation.png";
import RecordImg from "../../public/Homepage/Accreditation/Record.png";
import RecordMobile from "../../public/Homepage/Accreditation/RecordMobile.png";
import { Fade } from "react-awesome-reveal";
function Accreditation() {
  return (
    <div className="w-full">
      <Image
        src={Stars}
        className="hidden md:block absolute -translate-y-14 z-50 left-0 w-32 pointer-events-none"
        alt=""
      />
      <div className="flex flex-col md:flex-row justify-between py-4 md:pt-[8rem] gap-4 self-center md:pl-16 w-full md:items-center">
        <Fade>
          <div className="flex items-center gap-4">
            <div className="w-[4rem] h-[1px] bg-[#E69706]"></div>
            <h4 className="text-black text-[30px] md:text-[60px] w-fit font-[Oswald] right-0 tracking-[3px] leading-[74px]">
              ACCREDITATIONS
            </h4>
          </div>
        </Fade>
        <Fade className="w-full" delay={300}>
          <Image
            src={AccreditationImg}
            alt=""
            className="md:translate-y-20 w-full h-fit"
          />
        </Fade>
      </div>
      <Image
        src={Stars}
        className="hidden md:block absolute -translate-y-14 right-0 rotate-180 w-32 pointer-events-none"
        alt=""
      />
      <div className="flex flex-col md:flex-row py-4 md:pt-[8rem] gap-4 self-center md:pl-16 w-full items-center">
        <Fade>
          <div className="flex items-center gap-4">
            <div className="w-[4rem] h-[1px] bg-[#E69706]"></div>
            <h4 className="text-black text-[30px] md:text-[60px] w-fit font-[Oswald] right-0 tracking-[3px] leading-normal md:leading-[74px]">
              RECORD BREAKING PLACEMENTS
            </h4>
          </div>
        </Fade>
      </div>
      <Fade delay={300}>
        <Image
          src={RecordImg}
          alt=""
          className="hidden md:block w-full h-fit"
        />
        <Image
          src={RecordMobile}
          alt=""
          className="block md:hidden w-full h-fit"
        />
      </Fade>
    </div>
  );
}

export default Accreditation;
