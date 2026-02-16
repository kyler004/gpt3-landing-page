import React from "react";

const Feature = ({ title, text }) => (
  <div className="w-full flex justify-between items-start flex-row my-4">
    <div className="flex-1 max-w-[180px] mr-8">
      <div className="h-[3px] w-[38px] gradient-bar shadow-md mb-1" />
      <h1 className="font-manrope font-extrabold text-[18px] leading-6 tracking-[-0.04em] text-white sm:text-[14px] sm:leading-[22px]">
        {title}
      </h1>
    </div>
    <div className="flex-2 max-w-[390px] flex">
      <p className="font-manrope font-medium text-[14px] leading-6 text-text sm:text-[12px] sm:leading-5">
        {text}
      </p>
    </div>
  </div>
);

export default Feature;
