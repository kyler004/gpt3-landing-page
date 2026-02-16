import React from "react";
import possibilityImage from "../assets/possibility.png";

const Possibility = () => (
  <div className="flex flex-col lg:flex-row section__padding" id="possibility">
    <div className="flex-1 flex justify-start items-center lg:mr-8 slide-in-left">
      <img src={possibilityImage} alt="possibility" className="w-full h-full" />
    </div>
    <div className="flex-1 flex flex-col justify-end items-start mt-8 lg:mt-0 slide-in-right">
      <h4 className="font-medium text-lg leading-7 text-cyan-400">
        Request Early Access to Get Started
      </h4>
      <h1 className="text-2xl md:text-3xl font-extrabold leading-snug gradient__text my-4">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p className="text-base leading-7 text-text mb-8">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <h4 className="font-medium text-lg leading-7 text-orange-400">
        Request Early Access to Get Started
      </h4>
    </div>
  </div>
);

export default Possibility;
