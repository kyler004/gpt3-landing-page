import React from "react";

const Feature = ({ title, text }) => (
  <div className="w-full flex justify-between items-start flex-row m-4 max-[550px]:mx-4 my-0">
    <div className="flex-1 max-w-45 mr-8">
      <div className="h-9.5 w-9.5 gradient-bar shadow-lg mb-1" />
      <h1 className="manrope font-bold text-[18px] leading-6 tracking-[-0.04rem] text-white max-[550px]:text-[14px] max-[550px]:leading-5.5">
        {title}
      </h1>
    </div>
    <div className="flex-2 max-w-97.5 flex">
      <p className="manrope font-medium text-[14px] leading-6 text-text max-[550px]:text-[12px] max-[550px]:leading-5">
        {text}
      </p>
    </div>
  </div>
);

export default Feature;
