"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import loader from "../../public/loader.svg";
// import school from "../../public/Homepage/BannerHome/BannerImage3.webp";
const Blogs = ({ utmParams }) => {
  const [blogs, setBlogs] = useState([]); // Initialize as an empty array
  const [page, setPage] = useState(1);
  const [allBlogsLoaded, setAllBlogsLoaded] = useState(false);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://blog.tulas.edu.in/api/v1/post?page=${page}&per_page=18`
        );
        const data = await response.json();

        if (data.success) {
          const filteredBlogs = data.data.filter(
            (blog) => blog.category && blog.category.name === "Blogs"
          );

          if (filteredBlogs.length === 0) {
            setAllBlogsLoaded(true); // If no blogs are returned, set allBlogsLoaded to true
          } else {
            setBlogs((prevBlogs) => {
              const uniqueBlogs = filteredBlogs.filter(
                (newBlog) =>
                  !prevBlogs.some((prevBlog) => prevBlog.slug === newBlog.slug)
              );
              return [...prevBlogs, ...uniqueBlogs]; // Append only unique blogs
            });
          }
        } else {
          console.error("Failed to fetch blogs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
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

  return (
    <>
      {loading && (
        <div className="loader flex justify-center items-center w-full my-[4%]">
          <Image src={loader} alt="Loading..." />
        </div>
      )}
      <div className="my-5 md:my-[4%] w-full px-5 md:px-0 md:w-[75%] mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-wrap gap-4 md:gap-8 font-[TTChocolatesMedium]">
          {blogs.map((blog) => {
            const formattedDate = formatDate(blog.created_at);
            const formattedTitle = blog.title
              .replace(/&#8217;/g, "'")
              .replace(/&#8220;/g, "“")
              .replace(/&#8221;/g, "”")
              .replace(/&#038;/g, "&");
            const headerImg = blog.banner_img;
            return (
              <a
                href={`/${blog.slug}/${utmParams}`}
                key={blog.slug}
                className="shadow-2xl w-full md:w-[calc(33.33%-2rem)] bg-black bg-opacity-40  rounded-xl overflow-hidden transition-all duration-300"
              >
                <Image
                  width="400"
                  height="250"
                  src={headerImg}
                  className="w-full h-52 object-cover"
                  alt=""
                />
                <div className="p-2 leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-white">
                  <p className="text-[14px]">{formattedDate}</p>
                  <h5 className=" line-clamp-3">{formattedTitle}</h5>
                </div>
              </a>
            );
          })}
        </div>
        {allBlogsLoaded ? (
          <button
            className="mt-5 rounded-lg bg-[#007A83] text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] py-1 px-16"
            disabled
          >
            All Blogs Loaded
          </button>
        ) : (
          <button
            className="mt-5 rounded-lg bg-[#007A83] text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] py-1 px-16"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Blogs;
