import React from "react";

const CTA = () => (
  <div className="flex justify-between items-center flex-row p-8 m-16 rounded-2xl gradient-bar max-[650px]:flex-col max-[550px]:flex-col max-[550px]:mx-16 max-[550px]:my-8">
    <div className="flex flex-col text-left text-white">
      <p className="manrope text-[12px] leading-7.5 font-medium">
        Request Early Access to Get Started
      </p>
      <h3 className="manrope text-[24px] leading-11.25 font-extrabold max-[550px]:text-[18px] max-[550px]:leading-8">
        Register Today & start exploring the endless possibilities.
      </h3>
    </div>
    <div className="flex justify-center items-center ml-8 max-[650px]:mt-8">
      <button
        type="button"
        className="bg-black text-white manrope font-bold text-[18px] leading-7.5 px-2 py-5 border-none outline-none cursor-pointer min-w-37.5 max-[550px]:text-[14px] max-[550px]:leading-7"
      >
        Get Started
      </button>
    </div>
  </div>
);

export default CTA;
