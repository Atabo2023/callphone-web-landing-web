import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams] = useSearchParams();

  const header = searchParams.get("header");
  const body = JSON.parse(searchParams.get("body"));
  const image = searchParams.get("image");

  return (
    <div>
      <Header />

      <div className="p-10">
        <h1 className="text-center text-2xl md:text-4xl pt-10 tracking-wide leading-8 md:leading-relaxed font-bold">
          {header}
        </h1>
        <div className="flex flex-col items-center mt-10">
          <div className="flex justify-center">
            <img width="550px" src={image} />
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
