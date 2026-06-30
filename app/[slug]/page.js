import React from "react";
import Image from "next/image";
import "../globals.css";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import "../Blog.css";
import { notFound } from "next/navigation";
import TableOfContent from "@/component/TableOfContent";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";

export const revalidate = 60;

export async function generateStaticParams() {
  const res = await fetch("https://blog.tulas.edu.in/api/v1/post", {
    timeout: 20000,
  });
  const { data } = await res.json();

  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchBlogData(slug) {
  const res = await fetch(`https://blog.tulas.edu.in/api/v1/post/${slug}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data for slug: ${slug}`);
  }

  const { data } = await res.json();
  return data || null;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return {
      meta_title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.meta_title,
    description: blog.meta_description,
    keywords: blog.meta_keywords,
    robots: blog.tags,
    author: blog.author_name,
  };
}

export default async function SlugPage({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formattedDate = formatDate(blog.created_at);
  const formattedTitle = blog.title
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d")
    .replace(/&#038;/g, "&");
  const words = formattedTitle.split(" ");
  const headerImg = blog.banner_img;
  const halfwayIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfwayIndex).join(" ");
  const secondHalf = words.slice(halfwayIndex).join(" ");

  const cleanContent = (content) => {
    if (!content) return "";
    return content
      .replace(/<p><\/p>/g, "<br /><br />")
      // Wrap tables in a scrollable container
      .replace(/<table/g, '<div class="table-scroll"><table')
      .replace(/<\/table>/g, "</table></div>");
  };

  return (
    <>
      <div className="hidden md:block">
        <MegaMenu />
      </div>

      <div className="block md:hidden">
        <NewNavbar fullBanner={true} />
      </div>

      <div className="w-full z-40 bg-white">
        <div className="h-[240px] md:h-[85vh] w-full bg-black relative">
          <Image
            src={headerImg}
            alt=""
            width={10000}
            height={10000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-h-fit py-6 md:py-[1%] h-fit md:min-h-[15vh] w-full overflow-hidden flex flex-col justify-center max-w-[1100px] px-4 md:px-6 mx-auto">
          <h3 className="text-[24px] md:text-[clamp(20px,3.5vw,60px)] text-[#000] z-10 leading-snug">
            {firstHalf}
            <span className="text-[#f97316]"> {secondHalf}</span>
          </h3>
          <h4 className="text-sm font-[TTChocolates] md:text-xl text-[#404040] mt-2">
            {blog?.yoast_head_json?.description}
          </h4>
        </div>
      </div>

      <div className="blog-page-content !text-[#353535]">
        <>
          <h6 className="text-[#353535]">
            Published on {formattedDate} by {blog.author_name}
          </h6>
          <TableOfContent slug={slug} />
          <div
            className="text-[#263145] max-w-full"
            dangerouslySetInnerHTML={{ __html: cleanContent(blog?.content) }}
          />
        </>
      </div>

      <NewFooter />
    </>
  );
}