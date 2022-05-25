import React from "react";
import Logo from "../../Assets/food2.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-10 p-4 bg-Dark">
      <nav className="flex flex-wrap justify-between">
        <div className="w-[70px] h-[60px] rounded-full mt-2">
          <img src={Logo} alt="the logo icon" className="rounded-full" />
        </div>

        <div className="text-Grey mt-2 text-xl font-Inter flex flex-wrap justify-between">
          <a href="/" className="px-2 hover:underline">
            Home
          </a>
          <Link to="#about" className="px-2 hover:underline">
            About
          </Link>
          <a href="/Recipes" className="px-2 hover:underline">
            Create recipes
          </a>
        </div>

        <div className=" flex mt-2 hover:underline">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 w-[200px] h-[35px] rounded-lg px-2 py-2"
          />
          <button className="ml-2 w-[100px] h-[40px] rounded-lg bg-Wine text-White font-Inter font-base">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
