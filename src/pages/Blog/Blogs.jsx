import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import bgImage from "../../assets/images/BgImages/bgImage1.svg";
import { createSearchParams, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { Helmet } from "react-helmet";
import blog from "../../features/blog";
import authorImage from "../../assets/images/author.svg";
import { formatDate } from "../../utils/formatDate";

const Blogs = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const getBlogs = () => {
    blog("getBlogs")().then((res) => {
      if (res) {
        setPosts(res.data);
      } else {
        console.log("Failed!");
      }
    });
  };

  const getSnippet = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    // Find all <p> elements and get the first one with meaningful text
    const paragraphs = tempDiv.querySelectorAll("p");
    let snippet = "";

    for (let p of paragraphs) {
      const text = p.textContent.trim();
      if (text) {
        snippet = text;
        break;
      }
    }

    // Trim and limit the snippet to a certain number of words
    return snippet.split(" ").slice(0, 10).join(" ") + "...";
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Callphone Blog</title>
        <meta
          name="description"
          content="Get the latest update on the callphone blog."
        />
      </Helmet>
      <Header />
      <div
        className="text-white bg-[#4834d4] flex justify-center items-center bg-no-repeat z-50 p-10 bg-right h-[390px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center text-6xl pt-10 tracking-wide leading-relaxed font-bold">
          Callphone Blog
        </h1>
      </div>
      <section className="p-20 flex flex-col justify-center">
        {posts.map((item, id) => (
          <div key={id} className="flex justify-center">
            <div
              onClick={() =>
                navigate(
                  {
                    pathname: "/blog-page",
                    search: createSearchParams({
                      author: item.author,
                      header: item.heading,
                      body: item.blog_content,
                      date: item.updatedAt,
                      readTime: item.read_time,
                      image: item.blog_image,
                    }).toString(),
                  },
                  {
                    state: {
                      header: item.heading,
                      body: item.blog_content,
                      date: item.updatedAt,
                      readTime: item.read_time,
                      image: item.blog_image,
                    },
                  }
                )
              }
              className="flex flex-col-reverse md:flex-row gap-x-52 mb-20 cursor-pointer"
            >
              <div>
                {item.category === "Airvend" ? (
                  <div className="flex justify-center items-center text-white text-xs bg-[#5A6DED] w-24 h-6 rounded my-5">
                    <p>{item.category}</p>
                  </div>
                ) : (
                  <div className="flex justify-center items-center text-white text-xs bg-[#2B1D8A] w-24 h-6 rounded my-5">
                    <p>{item.category}</p>
                  </div>
                )}

                <h1 className="text-2xl md:text-4xl mb-3 w-80 md:w-[550px]">
                  {item.heading}
                </h1>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex justify-center rounded-full bg-gray-300 h-6 w-6">
                    <img src={authorImage} alt="Author" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{item.author}</p>
                  </div>
                </div>
                <p className="mb-2 text-[#565555] w-80 md:w-[600px]">
                  {getSnippet(item.blog_content)}
                </p>
                <div className="flex text-gray-400 text-sm font-light">
                  {`${formatDate(item.updatedAt)} . ${item.read_time} min read`}
                </div>
              </div>
              <LazyLoad height={200} once={true} offset={100}>
                <img
                  fetchpriority="high"
                  className="w-[400px]"
                  src={item.blog_image}
                  alt="Blog"
                />
              </LazyLoad>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
