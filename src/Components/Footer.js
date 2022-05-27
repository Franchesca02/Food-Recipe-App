import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/Policy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/Recipes" className="mr-4 hover:underline md:mr-6">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
