import React from "react";
import Image from "next/image";
import AccreditationImg from "../../public/Homepage/Accreditation/accreditation.png";
import AccreditationImgMobile from "../../public/Homepage/Accreditation/accreditationMobile.webp";
function Accreditation() {
  return (
    <div className="w-full bg-white sticky z-10 h-full">
      <div className="w-full">
        <Image
          src={AccreditationImg}
          alt=""
          className="w-full hidden md:flex h-fit"
        />
        <Image
          src={AccreditationImgMobile}
          alt=""
          className="md:hidden w-full h-fit"
        />
      </div>
    </div>
  );
}

export default Accreditation;
