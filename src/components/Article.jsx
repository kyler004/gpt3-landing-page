import React from "react";

const Article = ({ imgUrl, date, text }) => (
  <div className="w-full h-full flex flex-col bg-footer">
    <div className="w-full h-full bg-bg">
      <img src={imgUrl} alt="blog_image" className="w-full h-full" />
    </div>
    <div className="flex flex-col justify-between px-6 py-4 h-full">
      <div>
        <p className="manrope text-[11.65px] text-white font-bold leading-8.75">
          {date}
        </p>
        <h3 className="manrope text-[25.11px] font-extrabold leading-[30.30px] text-white mb-20 cursor-pointer max-[550px]:text-[18px] max-[550px]:leading-6.25">
          {text}
        </h3>
      </div>
      <p className="cursor-pointer">Read Full Article</p>
    </div>
  </div>
);

export default Article;
