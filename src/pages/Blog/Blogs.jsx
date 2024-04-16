import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import bgImage from "../../assets/images/BgImages/bgImage1.svg";
import { createSearchParams, useNavigate } from "react-router-dom";
import { content } from "../../utils/BlogContent";
import { UserOutlined } from "@ant-design/icons";
import LazyLoad from "react-lazyload";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const navigate = useNavigate();

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
        {content.map((item, id) => (
          <div key={id} className="flex justify-center">
            <div
              onClick={() =>
                navigate(
                  {
                    pathname: "/blog-page",
                    search: createSearchParams({
                      author: item.author,
                      authorImage: item.authorImage,
                      article: item.header,
                      header: item.header,
                      body: JSON.stringify(item.body),
                      date: item.date,
                      readTime: item.readTime,
                      image: item.image,
                    }).toString(),
                  },
                  {
                    state: {
                      header: item.header,
                      body: item.body,
                      date: item.date,
                      readTime: item.readTime,
                      image: item.image,
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
                  {item.header}
                </h1>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex justify-center rounded-full bg-gray-300 h-6 w-6">
                    {/* <UserOutlined className="text-sm" /> */}
                    <img src={item.authorImage} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold">{item.author}</p>
                  </div>
                </div>
                <p className="mb-2 text-[#565555] w-80 md:w-[600px]">
                  {item.snippet}
                </p>
                <div className="flex text-gray-400 text-sm font-light">
                  {`March 18, 2024 . 5 min read`}
                </div>
              </div>
              <LazyLoad height={200} once={true} offset={100}>
                <img className=" w-[400px]" src={item.image} />
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
