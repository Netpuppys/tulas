import React from "react";
import Stars from "../../public/Homepage/Accreditation/Stars.png";
import Image from "next/image";
import AccreditationImg from "../../public/Homepage/Accreditation/Accreditation.png";
import RecordImg from "../../public/Homepage/Accreditation/Record.png";
import { Fade } from "react-awesome-reveal";
function Accreditation() {
  return (
    <div className="w-full">
      <Image
        src={Stars}
        className="absolute -translate-y-14 z-50 left-0 w-32 pointer-events-none"
        alt=""
      />
      <div className="flex justify-between pt-[8rem] gap-4 self-center pl-16 w-full items-center">
        <Fade>
          <div className="w-[4rem] h-[1px] bg-[#E69706]"></div>
          <h4 className="text-black text-[60px] w-fit font-[Oswald] right-0 tracking-[3px] leading-[74px]">
            ACCREDITATION
          </h4>
        </Fade>
        <Fade className="w-full" delay={300}>
          <Image
            src={AccreditationImg}
            alt=""
            className="translate-y-20 w-full h-fit"
          />
        </Fade>
      </div>
      <Image
        src={Stars}
        className="absolute -translate-y-14 right-0 rotate-180 w-32 pointer-events-none"
        alt=""
      />
      <div className="flex pt-[8rem] gap-4 self-center pl-16 w-full items-center">
        <Fade>
          <div className="w-[4rem] h-[1px] bg-[#E69706]"></div>
          <h4 className="text-black text-[60px] w-fit font-[Oswald] right-0 tracking-[3px] leading-[74px]">
            RECORD BREAKING PLACEMENTS
          </h4>
        </Fade>
      </div>
      <Fade delay={300}>
        <Image src={RecordImg} alt="" className=" w-full h-fit" />
      </Fade>
    </div>
  );
}

export default Accreditation;
