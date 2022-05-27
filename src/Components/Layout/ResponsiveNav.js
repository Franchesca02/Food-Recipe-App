import React, { useState } from "react";

import Logo from "../../Assets/food2.jpg";

import { Link } from "react-router-dom";

const ResponsiveNav = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="hidden sm:block w-full h-[367px] bg-Dark px-4">
      <div className="flex justify-between">
        <div className="w-[70px] h-[60px] rounded-full mt-2">
          <img src={Logo} alt="the logo icon" className="rounded-full" />
        </div>
        <div className="hidden sm:block py-4">
          <button
            className="px-3 py-2 border rounded text-White border-White hover:bg-Grey hover:text-Dark"
            onClick={() => setShow(!show)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {show ? (
        <div>
          <div className="py-8">
            <ul>
              <div className="px-4">
                <li className="px-2 text-Grey text-2xl font-Inter">
                  <Link to="/">Home</Link>
                </li>

                <li className="px-4 mt-4 text-Grey text-2xl font-Inter">
                  <Link to="/">About</Link>
                </li>
                <li className="px-4 mt-4 text-Grey text-2xl font-Inter">
                  <Link to="/Recipes">Recipes</Link>
                </li>

                <div className="grid mt-2 hover:underline">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border-2 w-[200px] h-[35px] rounded-lg px-2 py-2"
                  />
                  <Link to="/contact">
                    <button className="ml-2 w-[100px] h-[40px] rounded-lg bg-Wine text-White font-Inter font-base mt-4">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ResponsiveNav;
