import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-Dark shadow flex flex-wrap justify-between py-10 px-10">
        <div className="text-base flex font-Inter text-Grey sm:w-full py-4">
          <span>© 2022</span>
          <Link to="/Recipes" className="hover:underline px-2">
            Food Recipes™
          </Link>
          <p>. All Rights Reserved.</p>
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-base font-Inter text-Grey sm:mt-0 sm:w-full">
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
