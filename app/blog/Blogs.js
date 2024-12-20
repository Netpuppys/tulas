"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import loader from "../../public/loader.svg";
import school from "../../public/Homepage/BannerHome/BannerImage3.webp";
import { UtmContext } from "@/component/utmParams";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]); // Initialize as an empty array
  const [page, setPage] = useState(1);
  const [allBlogsLoaded, setAllBlogsLoaded] = useState(false);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://oldblog.tulas.edu.in/wp-json/wp/v2/posts?page=${page}&per_page=18`
        );
        const posts = await response.json();

        // Check if the response status is OK (200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        if (Array.isArray(posts) && posts.length > 0) {
          // Assuming that the posts don't have a specific category structure in the response
          setBlogs((prevBlogs) => {
            const uniqueBlogs = posts.filter(
              (newBlog) =>
                !prevBlogs.some((prevBlog) => prevBlog.slug === newBlog.slug)
            );
            return [...prevBlogs, ...uniqueBlogs]; // Append only unique blogs
          });
        } else {
          setAllBlogsLoaded(true); // If no blogs are returned, set allBlogsLoaded to true
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false); // Set loading to false regardless of success or failure
      }
    };

    fetchBlogs();
  }, [page]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleLoadMore = () => {
    if (!allBlogsLoaded) {
      setLoadingMore(true);
      setPage((prevPage) => prevPage + 1); // Increment page to fetch more blogs
    }
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="loader flex justify-center items-center w-full my-20">
        <Image src={loader} alt="Loading..." />
      </div>
    ); // Display loader if still loading and no blogs are fetched
  }
const { utmParams } = useContext(UtmContext);
  return (
    <>
      {loading && (
        <div className="absolute-loader">
          <Image src={loader} alt="Loading..." />
        </div>
      )}
      <div className="my-5 md:my-20 w-full px-5 md:px-0 md:w-[65%] mx-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-[TTChocolatesBold]">
          {blogs.map((blog) => {
            const formattedDate = formatDate(blog.date);
            const formattedTitle = blog.title.rendered
              .replace(/&#8217;/g, "'")
              .replace(/&#8220;/g, "“")
              .replace(/&#8221;/g, "”")
              .replace(/&#038;/g, "&");
            return (
              <a href={`/${blog.slug}${utmParams}`} key={blog.slug}>
                <div>
                  <div className="shadow-2xl bg-black bg-opacity-40  rounded-xl overflow-hidden transition-all duration-300">
                    <Image
                      width="400"
                      height="250"
                      src={blog.yoast_head_json.og_image[0].url}
                      className="w-full h-52 object-cover"
                      alt=""
                    />
                    <div className="p-2 text-[clamp(15px,1.3vw,25px)] text-white">
                      <p className="text-[14px]">{formattedDate}</p>
                      <h5 className="h-[62.5px] md:h-[117px] line-clamp-3">
                        {formattedTitle}
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        {allBlogsLoaded ? (
          <button
            className="mt-5 rounded-lg bg-[#007A83] text-[27px] py-1 px-16"
            disabled
          >
            All Blogs Loaded
          </button>
        ) : (
          <button
            className={`mt-5 rounded-lg bg-[#007A83] text-[27px] py-1 px-16 ${
              loadingMore ? "opacity-75 cursor-not-allowed" : ""
            }`}
            onClick={handleLoadMore}
          >
            {loadingMore ? "Loading ..." : "Load More"}
          </button>
        )}
      </div>
    </>
  );
};

export default Blogs;
