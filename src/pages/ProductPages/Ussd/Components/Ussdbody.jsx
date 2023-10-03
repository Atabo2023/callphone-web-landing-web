import React from "react";
import image7 from "../../../../assets/images/image7.svg";

export const Ussdbody = () => {
  return (
    <div className="flex mt-20">
      <div className="w-full">
        <div
          tabIndex="0"
          className="font-normal mx-10 my-20 py-4 pl-8 text-[#565555] tracking-wide leading-relaxed text-lg  hover:text-black focus:text-black outline-none"
        >
          <p className="text-4xl p-5 font-semibold">Self Recharge</p>
          <p className="p-5 w-full">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit amet
          </p>
        </div>
        <div
          tabIndex="0"
          className="font-normal mx-10 my-20 py-4 pl-8 text-[#56555551] tracking-wide leading-relaxed text-lg hover:text-black  focus:text-black outline-none"
        >
          <p className="text-4xl p-5 font-semibold">Recharge Voucher Gifts</p>
          <p className="p-5 w-full">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit amet
          </p>
        </div>
        <div
          tabIndex="0"
          className="font-normal mx-10 my-20 py-4 pl-8 text-[#56555551] tracking-wide leading-relaxed text-lg  hover:text-black focus:text-black outline-none"
        >
          <p className="text-4xl p-5 font-semibold">
            Bulk Recharge to Friends, Family and Employee.
          </p>
          <p className="p-5 w-full">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      <div className="p-5 w-full">
        <img src={image7} alt="img" />
      </div>
    </div>
  );
};
