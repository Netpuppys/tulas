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
  try {
    const res = await fetch("https://blog.tulas.edu.in/api/v1/post");

    if (!res.ok) return [];

    const { data } = await res.json();

    if (!Array.isArray(data)) {
      return [];
    }

    return data
      .filter((post) => post && typeof post.slug === "string" && post.slug)
      .map((post) => ({
        slug: post.slug,
      }));
  } catch (error) {
    // Never fail the build (or turn every unknown URL into a 500)
    // just because the blog API is unreachable.
    console.error("generateStaticParams: blog API unavailable", error);
    return [];
  }
}

async function fetchBlogData(slug) {
  try {
    const res = await fetch(`https://blog.tulas.edu.in/api/v1/post/${slug}`);

    // A missing post must resolve to a 404, not an unhandled throw.
    // Throwing here made Next.js return HTTP 500 for every unknown URL on the
    // site, which is what SEO crawlers were reporting as server errors.
    if (!res.ok) {
      return null;
    }

    const { data } = await res.json();
    return data || null;
  } catch (error) {
    console.error(`fetchBlogData failed for slug: ${slug}`, error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return {
      title: "Page Not Found | Tulas University",
      description: "The page you are looking for could not be found.",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description,
    keywords: blog.meta_keywords,
    authors: blog.author_name ? [{ name: blog.author_name }] : undefined,
    alternates: {
      canonical: `https://tulas.edu.in/${slug}/`,
    },
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