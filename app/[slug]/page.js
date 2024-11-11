import React from "react";
import Image from "next/image";
import loader from "../../public/loader.svg"; // Replace with your actual loader image path
import "../globals.css";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import "../Blog.css";
import background from "../../public/AboutDehradun/background.png";
import { notFound } from "next/navigation"; // Import notFound function

export const revalidate = 60; // ISR revalidation every 60 seconds

export async function generateStaticParams() {
  const response1 = await fetch(
    "https://tulas.edu.in/wp-json/wp/v2/posts?page=1&per_page=10"
  );
  const response2 = await fetch(
    "https://tulas.edu.in/wp-json/wp/v2/posts?page=2&per_page=10"
  );
  const response3 = await fetch(
    "https://tulas.edu.in/wp-json/wp/v2/posts?page=3&per_page=10"
  );
  const data1 = await response1.json();
  const data2 = await response2.json();
  const data3 = await response3.json();
  const data = data1.concat(data2, data3);

  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch the blog data based on the slug
async function fetchBlogData(slug) {
  const res = await fetch(
    `https://tulas.edu.in/wp-json/wp/v2/posts?slug=${slug}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data for slug: ${slug}`);
  }

  const [blogData] = await res.json();
  return blogData || null;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog?.yoast_head_json?.title,
    description: blog?.yoast_head_json?.description,
  };
}

export default async function SlugPage({ params }) {
  const { slug } = params;
  let blog;
  let isLoading = true;

  try {
    blog = await fetchBlogData(slug);
    isLoading = false; // Set to false when data is successfully fetched
  } catch (error) {
    console.error("Error fetching blog data:", error);
    isLoading = true; // Remain loading if an error occurs during fetching
  }

  if (isLoading) {
    return (
      <div className="loader">
        <Image src={loader} alt="Loading..." />
      </div>
    );
  }

  if (!blog) {
    notFound(); // Render 404 page when no blog is found
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formattedDate = formatDate(blog.date);
  const formattedTitle = blog.title.rendered
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#038;/g, "&");
  const headerImg = blog?.yoast_head_json?.og_image?.[0]?.url;
  const words = formattedTitle.split(" ");
  const halfwayIndex = Math.ceil(words.length / 2); // Calculate halfway point, rounding up for odd lengths

  const firstHalf = words.slice(0, halfwayIndex).join(" ");
  const secondHalf = words.slice(halfwayIndex).join(" ");

  return (
    <>
      <Navbar />
      <div className="md:min-h-screen w-full z-40 bg-white">
        <div className="h-[240px] md:h-[71vh] w-full bg-black relative">
          {/* Pseudo-element for the background image with opacity */}
          <div
            style={{
              backgroundImage: `url(${headerImg})`,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 opacity-30 z-0 bg-no-repeat bg-cover"
          ></div>
        </div>

        <div className="min-h-fit py-6 md:py-20 h-fit md:min-h-[29vh] w-full overflow-hidden flex flex-col justify-center max-w-[835px] px-6 mx-auto">
          <h3 className="text-[30px] md:text-[clam(20px,3.5vw,60px)] text-[#000] z-10 font-[CarotSlab]">
            {firstHalf}
            <span className="text-[#760135]"> {secondHalf}</span>
          </h3>
          <h4 className="text-sm font-[TTChocolates] md:text-xl text-[#404040]">
            {blog?.yoast_head_json?.description}
          </h4>
        </div>
      </div>
      <div className="blog-page-content">
        <>
          <h6>Published on {formattedDate}</h6>
          <div dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }} />
        </>
      </div>
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <Footer color={true} />
    </>
  );
}
