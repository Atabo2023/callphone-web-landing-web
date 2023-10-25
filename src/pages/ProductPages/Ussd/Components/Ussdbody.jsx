import React, { useState, useEffect } from "react";
import image7 from "../../../../assets/images/image7.svg";

export const Ussdbody = () => {
  const colors = ["#000000", "#888888"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % 3);
    }, 2000); // Change color every 2 second

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div className="flex lg:px-24 lg:flex-row flex-col-reverse lg:mt-20">
      <div className="w-full">
        <div
          style={{ color: activeIndex === 0 ? colors[0] : colors[1] }}
          className="lg:mr-10 my-5 py-4 tracking-wide leading-relaxed text-lg"
        >
          <p className="text-4xl p-5 font-semibold">Self Recharge</p>
          <p
            // style={{ color: activeIndex === 0 ? colors[0] : colors[1] }}
            className="p-5 w-full"
          >
            Never lack airtime on your phone. Recharge your phone online
            directly from the comfort of your home. It’s fast, it’s seamless. No
            internet is required.
          </p>
        </div>
        <div
          style={{ color: activeIndex === 1 ? colors[0] : colors[1] }}
          className="lg:mr-10 my-10 py-4 tracking-wide leading-relaxed text-lg"
        >
          <p className="text-4xl p-5 font-semibold">Recharge Voucher Gifts</p>
          <p
            // style={{ color: activeIndex === 1 ? colors[0] : colors[1] }}
            className="p-5 w-full"
          >
            Show some love. Gift recharge vouchers to your family, friends,
            colleagues, and employees directly from your Airvend account using
            the shortcode.
          </p>
        </div>
        <div
          style={{ color: activeIndex === 2 ? colors[0] : colors[1] }}
          className="lg:mr-10 my-10 py-4 tracking-wide leading-relaxed text-lg"
        >
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

      <div className="py-5 w-full">
        <img src={image7} alt="img" />
      </div>
    </div>
  );
};
