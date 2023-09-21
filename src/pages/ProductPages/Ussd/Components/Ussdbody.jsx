import React from "react";
import image7 from "../../../../assets/images/image7.svg";

export const Ussdbody = () => {
  return (
    <div className="flex mt-20">
      <div className=" w-full">
        <div className="font-normal mx-10 my-20  py-4 pl-8 text-[#565555] tracking-wide leading-relaxed text-lg">
          <p className="text-4xl p-5 font-semibold">Self Recharge</p>
          <p className="p-5 w-full">
            Never lack airtime on your phone. Recharge your phone online
            directly from the comfort of your home. It’s fast, it’s seamless. No
            internet is required.
          </p>
        </div>
        <div className="font-normal mx-10  my-20 py-4 pl-8 text-[#56555551] tracking-wide leading-relaxed text-lg">
          <p className="text-4xl p-5 font-semibold">Recharge Voucher Gifts</p>
          <p className="p-5 w-full">
            Show some love. Gift recharge vouchers to your family, friends,
            colleagues, and employees directly from your Airvend account using
            the shortcode.
          </p>
        </div>
        <div className="font-normal mx-10 my-20  py-4 pl-8 text-[#56555551] tracking-wide leading-relaxed text-lg">
          <p className="text-4xl p-5 font-semibold">
            Bulk Recharge to Friends, Family and Employees
          </p>
          <p className="p-5 w-full">
            Want to recharge multiple persons, one-time or recurring? Use the
            Airvend universal bulk recharge feature to make it easier, faster,
            and more convenient.
          </p>
        </div>
      </div>
      <div className="p-5 w-full">
        <img src={image7} alt="img" />
      </div>
    </div>
  );
};
