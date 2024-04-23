import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const BlogPage = () => {
  const [searchParams] = useSearchParams();

  const author = searchParams.get("author");
  const authorImage = searchParams.get("authorImage");
  const header = searchParams.get("header");
  const body = JSON.parse(searchParams.get("body"));
  const image = searchParams.get("image");
  const date = searchParams.get("date");
  const readTime = searchParams.get("readTime");

  return (
    <div>
      <Header />

      <div className="p-10">
        <div className="w-full flex flex-col items-center px-0 md:px-80">
          <h1 className="text-2xl md:text-4xl pt-10 tracking-wide text-center leading-8 md:leading-relaxed font-bold">
            {header}
          </h1>

          <div className="w-full flex border-y py-5 my-5">
            <div className="flex space-x-3 ">
              <div className="flex justify-center rounded-full bg-gray-300 h-8 w-8 md:h-10 md:w-10">
                {/* <UserOutlined className=" text-lg md:text-2xl" /> */}
                <img src={authorImage} />
              </div>

              <div className=" space-y-1">
                <p className="text-xs font-semibold">{author}</p>
                <p className="text-xs text-gray-500">
                  {date} . {readTime} min read
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="flex justify-center">
            <img fetchpriority="high" width="550px" src={image} />
          </div>
          <div className="mt-10 w-80 md:w-[900px]">
            {body.map((item, id) => (
              <div key={id}>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <br />
                {/* Mapping through item.content to render each paragraph */}
                {item.content.map((sentence, idx) => (
                  <div key={idx}>
                    <p>{sentence}</p>
                    <br />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
