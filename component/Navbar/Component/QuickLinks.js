import React, { useContext } from "react";
import { SiRazorpay } from "react-icons/si";
import { Md360, MdOutlineArticle, MdOutlinePrivacyTip } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import Link from "next/link";
import { UtmContext } from "@/component/utmParams";
function QuickLinks() {
  const { utmParams } = useContext(UtmContext);
  const quickLinks = [
    { title: "Pay Online", linkTo: "/pay-fee-online", icon: <SiRazorpay /> },
    {
      title: "Virtual Tour",
      linkTo: "/virtual-tour/index.html",
      icon: <Md360 />,
    },
    { title: "Contact", linkTo: "/contact", icon: <IoMdContact /> },
    {
      title: "Privacy Policy",
      linkTo: "/privacy-policy",
      icon: <MdOutlinePrivacyTip />,
    },
    {
      title: "Terms & Conditions",
      linkTo: "/terms-conditions",
      icon: <MdOutlineArticle />,
    },
  ];
  return (
    <div className="h-[150px] w-full rounded-t-3xl bg-[#d3d3d3] absolute bottom-0 px-5 py-5">
      <h3 className="text-[#007A83] text-xl font-[TTChocolatesMedium] font-semibold mb-2">
        Quick Links
      </h3>
      <div className="flex items-center justify-start gap-4 flex-wrap">
        {quickLinks.map((item, index) => (
          <Link
            href={`${item.linkTo}/${utmParams}`}
            key={index}
            className="flex items-center justify-center gap-1"
          >
            <div className="text-[22px] text-[#353535]">{item.icon}</div>
            <h2 className="text-[#535353] text-[15px]">{item.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
