import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center py-8 px-24 bg-gray-900">
      <div className="flex items-center">
        <div className="mr-8">
          <img src={logo} className="w-16 h-4" />
        </div>
        <div className="hidden md:flex space-x-6">
          <p>
            <a href="#home" className="text-white text-lg capitalize">
              Home
            </a>
          </p>
          <p>
            <a href="#wgpt3" className="text-white text-lg capitalize">
              What is GPT3?
            </a>
          </p>
          <p>
            <a href="#possibility" className="text-white text-lg capitalize">
              Open AI
            </a>
          </p>
          <p>
            <a href="#features" className="text-white text-lg capitalize">
              Case Studies
            </a>
          </p>
          <p>
            <a href="#blog" className="text-white text-lg capitalize">
              Library
            </a>
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <p className="text-white text-lg capitalize cursor-pointer">Sign in</p>
        <button className="py-2 px-4 bg-red-500 text-white text-lg rounded">
          Sign up
        </button>
      </div>
      <div className="md:hidden relative">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
            className="cursor-pointer"
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
            className="cursor-pointer"
          />
        )}
        {toggleMenu && (
          <div className="absolute right-0 top-10 mt-4 bg-gray-800 p-6 rounded shadow-lg">
            <div className="flex flex-col space-y-4">
              <p>
                <a href="#home" className="text-white text-lg capitalize">
                  Home
                </a>
              </p>
              <p>
                <a href="#wgpt3" className="text-white text-lg capitalize">
                  What is GPT3?
                </a>
              </p>
              <p>
                <a
                  href="#possibility"
                  className="text-white text-lg capitalize"
                >
                  Open AI
                </a>
              </p>
              <p>
                <a href="#features" className="text-white text-lg capitalize">
                  Case Studies
                </a>
              </p>
              <p>
                <a href="#blog" className="text-white text-lg capitalize">
                  Library
                </a>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-white text-lg capitalize cursor-pointer">
                Sign in
              </p>
              <button className="py-2 px-4 bg-red-500 text-white text-lg rounded mt-2">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
