import React from "react";
import Article from "../components/Article";

//Media imports
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

const Blog = () => (
  <div className="flex flex-col px-4 md:px-0 section__padding" id="blog">
    <div className="w-full text-left mb-10 md:mb-20 fade-in-up">
      <h1 className="text-3xl md:text-5xl leading-snug md:leading-tight font-extrabold gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="flex-[0.75] mb-8 md:mb-0 md:mr-8 fade-in-up">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        <div className="fade-in-up">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="fade-in-up">
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="fade-in-up">
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="scale-up-center">
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
