import React from "react";
import gpt3Logo from "../assets/logo.svg";

const Footer = () => (
  <div className="flex flex-col justify-center items-center bg-gray-800 py-16">
    <div className="w-full text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="flex justify-center items-center py-4 border border-white text-center mb-40 cursor-pointer">
      <p className="text-lg font-medium text-white tracking-wide">
        Request Early Access
      </p>
    </div>

    <div className="flex flex-wrap justify-between items-start w-full text-left">
      <div className="flex flex-col w-[250px] m-4">
        <img
          src={gpt3Logo}
          alt="gpt3_logo"
          className="w-[118px] h-[30px] mb-4"
        />
        <p className="text-xs leading-4 text-white">
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col w-[250px] m-4">
        <h4 className="text-sm leading-4 text-white mb-3">Links</h4>
        <p className="text-xs leading-4 text-white cursor-pointer mb-2">
          Overons
        </p>
        <p className="text-xs leading-4 text-white cursor-pointer mb-2">
          Social Media
        </p>
        <p className="text-xs leading-4 text-white cursor-pointer mb-2">
          Counters
        </p>
        <p className="text-xs leading-4 text-white cursor-pointer">Contact</p>
      </div>
      <div className="flex flex-col w-[250px] m-4">
        <h4 className="text-sm leading-4 text-white mb-3">Company</h4>
        <p className="text-xs leading-4 text-white cursor-pointer mb-2">
          Terms & Conditions
        </p>
        <p className="text-xs leading-4 text-white cursor-pointer mb-2">
          Privacy Policy
        </p>
        <p className="text-xs leading-4 text-white cursor-pointer">Contact</p>
      </div>
      <div className="flex flex-col w-[250px] m-4">
        <h4 className="text-sm leading-4 text-white mb-3">Get in touch</h4>
        <p className="text-xs leading-4 text-white mb-2">
          Crechterwoord K12 182 DK Alknjkcb
        </p>
        <p className="text-xs leading-4 text-white mb-2">085-132567</p>
        <p className="text-xs leading-4 text-white">info@payme.net</p>
      </div>
    </div>

    <div className="mt-8 text-center w-full">
      <p className="text-xs leading-4 text-white">
        @2021 GPT-3. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
