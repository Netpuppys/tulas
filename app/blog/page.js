"use client";
import Script from 'next/script';
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useContext } from "react";
import BannerImg from "../../public/blogs/blogBanner.webp";
import Blogs from "./Blogs";
import Footer from "@/component/Footer";
import background from "../../public/AboutDehradun/background.png";
import Image from "next/image";
import { UtmContext } from "@/component/utmParams";

function Blog() {
  const { utmParams } = useContext(UtmContext);
  return (
    <>
      <head>
        <Script
          id="blogposting-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://tulas.edu.in/blog/"
              },
              "headline": "Best Engineering & Degree College in Dehradun, Uttarakhand | Tula's Institute",
              "description": "Stay Updated With the Latest Insights, News, and Academic Advancements at Tula's Institute, the Best Engineering & Degree College in Dehradun, Uttarakhand. Explore Articles on Engineering, Technology, Student Life, Career Tips, and More from Our Expert Faculty and Students.",
              "image": "https://tulas.edu.in/_next/static/media/TulasLogo.f88dd71b.png",
              "author": {
                "@type": "Organization",
                "name": "Tula's Institute",
                "url": "https://tulas.edu.in/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Tula's Institute", // Should not be empty
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://tulas.edu.in/_next/static/media/TulasLogo.f88dd71b.png" // Should not be empty
                }
              },
              "datePublished": "2023-11-15", // Should include actual date
              "dateModified": "2023-11-16" // Recommended to add
            })
          }}
        />
        <title>
          Blog | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Stay updated with the latest insights, news, and academic advancements at Tula's Institute, the best engineering college in Dehradun, Uttarakhand. Explore articles on engineering, technology, student life, career tips, and more from our expert faculty and students."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          title={"Blogs"}
          image={BannerImg}
          description={<></>}
          belowTitle={<></>}
          belowPara={
            <>
              Education is not only a way of learning new things but also
              looking at the world differently. My 35 Years of Experience in
              Business, Social & Public space has enabled me to provide an ECO
              system that will help you make a correct decision in matters of
              careers & life.
            </>
          }
        />
        <Blogs utmParams={utmParams} />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default Blog;
