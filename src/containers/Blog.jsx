import React from "react";
import Article from "../components/Article";

//Media imports
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

const Blog = () => (
  <div className="flex flex-col" id="blog">
    <div className="w-full text-left mb-20">
      <h1 className="text-5xl leading-tight font-extrabold gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="flex flex-row">
      <div className="flex-[0.75] mr-8">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="flex-1 grid grid-cols-2 gap-8">
        <Article
          imgUrl={blog02}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog03}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog04}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
