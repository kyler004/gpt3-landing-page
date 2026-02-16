import React from "react";
import Feature from "../components/Feature";

const WhatGPT3 = () => (
  <div
    className="gpt3__whatgpt3"
    id="wgpt3"
  >
    <div className="flex">
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center my-16">
      <h1 className="text-2xl md:text-3xl font-extrabold leading-snug max-w-127.5 gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p className="text-base leading-7 text-orange-400 cursor-pointer mt-4 md:mt-0">
        Explore the Library
      </p>
    </div>
    <div className="flex flex-wrap mt-8">
      <Feature
        title="Chatbots"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="Knowledgebase"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
  </div>
);

export default WhatGPT3;
