"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function TableOfContent({ slug }) {
  const [tocItems, setTocItems] = useState([]);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `https://blog.tulas.edu.in/api/v1/post/${slug}`
      );
      if (res?.data?.data) {
        setBlog(res.data.data);
        generateToc(res.data.data.content);
      }
    };

    const generateToc = (htmlContent) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;
      const headings = tempDiv.querySelectorAll("h2, h3, h4");
      const tocList = Array.from(headings).map((heading) => ({
        text: heading.innerText,
        id: heading.id,
        tagName: heading.tagName.toLowerCase(),
      }));
      setTocItems(tocList);
    };

    fetchPost();
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const getLiClass = (tagName) => {
    if (tagName === "h2") {
      return "cursor-pointer text-[24px] md:text-[32px] ml-5 md:ml-10";
    }
    if (tagName === "h3") {
      return "cursor-pointer text-[18px] font-semibold list-disc mt-4 md:text-[24px] ml-10 md:ml-20";
    }
    if (tagName === "h4") {
      return "cursor-pointer text-[16px] md:text-[20px] ml-14 md:ml-24";
    }
    return "cursor-pointer";
  };

  return (
    <div>
      {tocItems.length > 0 && (
        <div
          className="content-div-blog-table"
          style={{ fontFamily: "TTChocolates" }}
        >
          <h2 className="text-[28px] md:text-[45px] font-[600]">
            Table of Content
          </h2>
          <ul>
            {tocItems.map((item) => (
              <li key={item.id} className={getLiClass(item.tagName)}>
                
                 <a onClick={() => handleScroll(item.id)}
                  className="!text-[#f97316] hover:text-[#ea6c00] cursor-pointer">
  
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <br />
    </div>
  );
}

export default TableOfContent;