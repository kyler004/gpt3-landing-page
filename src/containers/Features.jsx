import React from "react";
import Feature from "../components/Feature";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => (
  <div
    className="w-full flex flex-col md:flex-row justify-between"
    id="features"
  >
    <div className="flex-1 flex flex-col text-left md:mr-20">
      <h1 className="text-2xl md:text-3xl font-extrabold leading-snug gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p className="text-orange-400 text-base leading-7 font-medium mt-8">
        Request Early Access to Get Started
      </p>
    </div>
    <div className="flex-[1.5] flex flex-col items-start">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
