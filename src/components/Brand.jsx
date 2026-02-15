import React from "react";

import google from "../assets/google.png";
import slack from "../assets/slack.png";
import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";
import shopify from "../assets/shopify.png";

const Brand = () => (
  <div className="flex flex-wrap justify-center items-center section__padding">
    <div className="flex-1 max-w-37.5 min-w-30 m-4 flex justify-center items-center">
      <img src={google} />
    </div>
    <div className="flex-1 max-w-37.5 min-w-30 m-4 flex justify-center items-center">
      <img src={slack} />
    </div>
    <div className="flex-1 max-w-37.5 min-w-30 m-4 flex justify-center items-center">
      <img src={atlassian} />
    </div>
    <div className="flex-1 max-w-37.5 min-w-30 m-4 flex justify-center items-center">
      <img src={dropbox} />
    </div>
    <div className="flex-1 max-w-37.5 min-w-30 m-4 flex justify-center items-center">
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
