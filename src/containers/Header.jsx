import React from "react";
import people from "../assets/people.png";
import ai from "../assets/ai.png";

const Header = () => (
  <div className="flex flex-col lg:flex-row section__padding" id="home">
    <div className="flex-1 flex flex-col justify-center items-start md:mr-20 slide-in-left">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.04em] gradient__text">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className="text-lg md:text-xl leading-7 text-text mt-6">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="w-full flex flex-row mt-8 mb-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="flex-2 w-full min-h-12.5 text-lg leading-7 bg-gray-800 border-2 border-gray-800 px-4 text-white rounded-l-md outline-none"
        />
        <button
          type="button"
          className="flex-[0.6] w-full min-h-12.5 text-lg leading-7 bg-red-500 border-2 border-red-500 px-4 text-white rounded-r-md cursor-pointer"
        >
          Get Started
        </button>
      </div>

      <div className="w-full flex flex-row items-center mt-8">
        <img src={people} className="w-45.5 h-9.5" />
        <p className="ml-4 text-sm leading-9.5 text-white text-center">
          1,600 people requested access a visit in last 24 hours
        </p>
      </div>
    </div>

    <div className="flex-1 flex justify-center items-center slide-in-right">
      <img src={ai} className="w-full h-full" />
    </div>
  </div>
);

export default Header;
