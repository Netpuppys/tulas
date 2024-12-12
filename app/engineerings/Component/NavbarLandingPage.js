import React from "react";
import logo from "../../../public/Components/Navbar/TulasLogo.png";
import Years19 from "../../../public/graduate-school-of-business/mba/19Years.png";
import Image from "next/image";
function NavbarLandingPage() {
  return (
    <div>
      <button className="absolute left-0 z-20 pt-[8vw] pl-[8vw] md:pt-[2.5vw] md:pl-[2.5vw]">
        <Image
          src={logo}
          className="w-fit max-w-[40vw] md:max-w-[10vw]"
          alt=""
        />
      </button>
      <button className="absolute hidden md:block right-0 z-20 pt-[2.5vw] pr-[2.5vw]">
        <Image src={Years19} className="w-fit max-w-[10vw]" alt="" />
      </button>
    </div>
  );
}

export default NavbarLandingPage;
