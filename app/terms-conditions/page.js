import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import bannerImg from "../../public/privacy-policy/bannerImgGreen.png";
import Image from "next/image";
import Footer from "@/component/Footer";

function TermsAndCondition() {
  return (
    <div className="relative">
      <Navbar scroled={true} />
      <div className="pt-24 md:pt-40 w-full h-full">
        <div className="w-[calc(100%-64px)] md:w-[90%] flex items-center justify-center mx-auto rounded-3xl overflow-hidden h-full relative">
          <Image
            src={bannerImg}
            alt=""
            className="h-full -z-10 w-full absolute object-cover"
          />
          <div className="py-8 md:py-14">
            <h3 className="text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2.5vw,50px)] font-[CarotSlab] text-white">
              Terms & Conditions
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full px-8 md:px-0 md:w-[80%] mx-auto text-black py-8 md:py-20 text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight font-[MontserratLight]">
        <h3 className="font-[MontserratMedium] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2vw,50px)] leading-none">
          What this Privacy Policy Covers
        </h3>
        <br />
        You agree to indemnify, defend and hold us and our partners, attorneys,
        staff and affiliates (collectively, “Affiliated Parties”) harmless from
        any liability, loss, claim and expense, including reasonable attorney’s
        fees, related to your violation of this Agreement or use of the Site.
        <br />
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2vw,50px)] leading-none">
          Non-Transferable
        </h3>
        <br />
        Your right to use the Site is not transferable. Any password or right
        given to you to obtain information or documents is not transferable.
        <br />
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2vw,50px)] leading-none">
          Disclaimer
        </h3>
        <br />
        The information and services may contain bugs, errors, problems or other
        limitations. We and our affiliated parties have no liability whatsoever
        for your use of any information or service. In particular, but not as a
        limitation thereof, we and our affiliated parties are not liable for any
        indirect, special, incidental or consequential damages (including
        damages for loss of business, loss of profits, litigation, or the like),
        whether based on breach of contract, breach of warranty, tort (including
        negligence), product liability or otherwise, even if advised of the
        possibility of such damages. The negation of damages set forth above are
        fundamental elements of the basis of the bargain between us and you.
        This site and the information would not be provided without such
        limitations. No advice or information, whether oral or written, obtained
        by you from us through the site shall create any warranty,
        representation or guarantee not expressly stated in this agreement.
        <br />
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2vw,50px)] leading-none">
          Use of Information
        </h3>
        <br />
        We reserve the right, and you authorize us, to the use and assignment of
        all information regarding Site uses by you and all information provided
        by you in any manner consistent with our Privacy Policy.
        <br />
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2vw,50px)] leading-none">
          Privacy Policy
        </h3>
        <br />
        Our Privacy Policy, as it may change from time to time, is a part of
        this Agreement.
        <br />
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2vw,50px)] leading-none">
          Links to Other Web Sites
        </h3>
        <br />
        The Site contains links to other Web sites. We are not responsible for
        the content, accuracy or opinions express in such Web sites, and such
        Web sites are not investigated, monitored or checked for accuracy or
        completeness by us. Inclusion of any linked Web site on our Site does
        not imply approval or endorsement of the linked Web site by us. If you
        decide to leave our Site and access these third-party sites, you do so
        at your own risk.
        <br />
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2vw,50px)] leading-none">
          Information and Press Releases
        </h3>
        <br />
        The Site may contain information and press releases about us. While this
        information was believed to be accurate as of the date prepared, we
        disclaim any duty or obligation to update this information or any press
        releases. Information about companies other than ours contained in the
        press release or otherwise, should not be relied upon as being provided
        or endorsed by us.
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndCondition;
