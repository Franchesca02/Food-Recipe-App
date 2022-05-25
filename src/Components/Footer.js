import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-Dark shadow md:flex md:items-center md:justify-between md:p-6 lg:py-16 lg:px-6">
        <span className="text-base font-Inter text-Grey sm:text-center">
          © 2022{" "}
          <a href="/" className="hover:underline">
            Food Recipes™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-base font-Inter text-Grey sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Recipes
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
