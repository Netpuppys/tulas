import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import bannerImg from "../../public/privacy-policy/bannerImg.png";
import Image from "next/image";
import Footer from "@/component/Footer";

function PrivacyPolicy() {
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
            <h3 className="text-[30px] md:text-[clamp(10px,2.5vw,50px)] font-[CarotSlab] text-white">
              Privacy Policy.
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full px-8 md:px-0 md:w-[80%] mx-auto text-[#353535] py-8 md:py-20 text-[clamp(10px,4vw,30px)] leading-tight md:text-[clamp(10px,1vw,45px)] font-[MontserratLight]">
        We respect the privacy of those who visit our web site. In accordance
        with this, we have created this policy in order to demonstrate our
        privacy commitment to our users:
        <br />
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[30px] md:text-[clamp(10px,2vw,50px)] leading-none">
          What this Privacy Policy Covers
        </h3>
        <br />
        <ul className="ml-5 list-disc">
          <li>
            This Privacy Policy covers our treatment of personally identifiable
            information that we collect when you are on our site, and when you
            use our services. This policy also covers our treatment of any
            personally identifiable information that third parties share with
            us.
          </li>
          <li>
            This policy does not apply to the practices of organizations that we
            do not own or control or to people that we do not employ or manage.
          </li>
        </ul>
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[30px] md:text-[clamp(10px,2vw,50px)] leading-none">
          Information Collection and Use
        </h3>
        <br />
        <ul className="ml-5 list-disc">
          <li>
            We collect personally identifiable information when you register on
            our website, when you use our services, and when you visit our
            pages. We may also receive personally identifiable information from
            third parties.
          </li>
          <li>
            When you register with us, we ask for your name, email address, zip
            code, occupation, industry, and personal interests. Once you
            register with us and sign in to our services, you are not anonymous
            to us.
          </li>
          <li>
            We use this information for three general purposes: to customize the
            content you see, to fulfill your requests for certain services, and
            to contact you about services.
          </li>
          <li>
            We also automatically receive and record information on our server
            logs from your browser including your IP address, cookie information
            and the page you requested. This information is not linked to your
            account and will not be used to identify you.
          </li>
        </ul>
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[30px] md:text-[clamp(10px,2vw,50px)] leading-none">
          Information Sharing and Disclosure
        </h3>
        <br />
        <ul className="ml-5 list-disc">
          <li>
            We will not sell or rent your personally identifiable information to
            anyone.
          </li>
          <li>
            We will send personally identifiable information about you to other
            companies or people when
          </li>
          <li>We have your consent to share the information;</li>
          <li>We respond to subpoenas, court orders or legal process; or</li>
          <li>
            We find that your actions on our web sites violate the Terms of
            Service
          </li>
        </ul>
        <br />
        <h3 className="font-[MontserratMedium] font-semibold text-[30px] md:text-[clamp(10px,2vw,50px)] leading-none">
          Changes to this Privacy Policy
        </h3>
        <br />
        <ul className="ml-5 list-disc">
          <li>
            The privacy policy is subject to modification from time to time. If
            we decide to change our privacy policy, we will post those changes
            here so that you will always know what information we gather, how we
            might use that information and whether we will disclose it to
            anyone. Any significant changes to our privacy policy will be
            announced on our home page. If you do not agree with the changes in
            our policy you can simply discontinue to visit our website.
            <br />
            Questions or Suggestions
          </li>
        </ul>
        <br />
        <h3 className="text-[#760135]">
          If you have questions or suggestions complete the enquiry form or send
          an{" "}
          <a href="mailto:info@tulas.edu.in" className="underline">
            email to us.
          </a>
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
