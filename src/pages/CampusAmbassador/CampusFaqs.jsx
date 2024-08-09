import React from "react";
import plusImage from "../../assets/images/plus.png";

const CampusFaqs = () => {
    return (
        <>
        <div className="w-full mb-10 bg-tertiary">
        {/* <div className="w-[1435px] h-[680px] mx-auto bg-[#FFFFFF]"> */}
        <div className="flex mt-16 text-4xl justify-center items-center text-[#100658] font-Rubik font-bold">
          <p>FAQs</p>
        </div>
        <div className="flex flex-col items-center  mt-8 gap-4">
          <div className="flex border-b-[1px] border-solid border-grey_white gap-4 xl:gap-[38.5rem]">
            <p className="flex text-xl xl:text-2xl font-bold text-dark_purple">
              Is the program for a selected discipline{" "}
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end"
                src={plusImage}
              />
            </span>
          </div>

          <div className="flex border-b-[1px]  border-solid border-grey_white gap-[4.5rem] xl:gap-[42.7rem]">
            <p className="flex text-xl xl:text-2xl font-bold  text-dark_purple">
              How much is the application fee?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end"
                src={plusImage}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] border-solid border-grey_white gap-[7.8rem] xl:gap-[746px]">
            <p className="flex text-xl xl:text-2xl font-bold text-dark_purple">
              Who is eligible for this role?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end"
                src={plusImage}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] border-solid border-grey_white gap-[7.3rem] xl:gap-[738px]">
            <p className="flex text-xl xl:text-2xl font-bold text-dark_purple">
              How long does this role last?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end"
                src={plusImage}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] border-solid border-grey_white gap-12 xl:gap-[662px]">
            <p className="flex text-xl xl:text-2xl font-bold text-dark_purple">
              What does campus ambassador do?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end"
                src={plusImage}
              />
            </span>
          </div>
          <div className="flex border-b-[1px] border-solid border-grey_white gap-14 xl:gap-[668px]">
            <p className="flex text-xl xl:text-2xl font-bold text-dark_purple">
              Who do i reach for further inquiry?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end"
                src={plusImage}
              />
            </span>
          </div>

          <div className="flex border-b-[1px] border-solid border-grey_white xl:gap-[596px]">
            <p className="flex text-xl xl:text-2xl font-bold text-dark_purple">
              What do i get as an Airvend Ambassador?
            </p>{" "}
            <span>
              {" "}
              <img
                className="flex justify-right items-end"
                src={plusImage}
              />
            </span>
          </div>
        </div>
      {/* </div> */}

        </div>
        </>
    )
}
export default CampusFaqs;