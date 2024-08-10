import React from "react";

const toAirvend = () => {
  window.open("https://app.airvend.ng/register/", "_blank");
};
const toAirgate = () => {
  window.open("https://airgate.ng", "_blank");
};

export const Registerbtn = () => {
  return (
    <div>
      {" "}
      <button className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white min-w-[200px] py-3 px-14 font-medium mx-8 my-10">
        Register
      </button>
    </div>
  );
};
export const SignUpbtn = () => {
  return (
    <div>
      <button
        className="md:mx-10 mx-5 mb-10 rounded-md bg-indigo-600 hover:bg-indigo-700 text-lg text-white min-w-[200px] py-4 px-14 font-bold"
        onClick={toAirvend}
      >
        Sign Up
      </button>
    </div>
  );
};
export const GetStartedBtn = () => {
  return (
    <div>
      <button
        className="text-lg rounded-md bg-indigo-600 hover:bg-indigo-700 text-white min-w-[200px] py-3 px-14 font-bold my-10"
        onClick={toAirgate}
      >
        Get Started
      </button>
    </div>
  );
};
export const GetStartedOutlinedBtn = () => {
  return (
    <div>
      <button
        className="mt-10 text-lg rounded-md bg-indigo-500 hover:bg-indigo-700 text-white font-bold  px-20 outline border-white py-3"
        onClick={toAirgate}
      >
        Get Started
      </button>
    </div>
  );
};
