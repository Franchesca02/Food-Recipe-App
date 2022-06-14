import React from "react";
import Food5 from "../../Assets/food5.jpg";
import Food8 from "../../Assets/food8.jpg";
import Burger from "../../Assets/burger.jpg";
import Food14 from "../../Assets/food14.png";
import { Link } from "react-router-dom";
import "../All-menus/Nutrients.css";

const Categories = () => {
  return (
    <div className="w-[95%] mx-auto">
      <h1 className="font-Inter text-3xl font-bold py-6 sm:text-center">
        Top Categories
      </h1>

      <div className="dropDown">
        <li className="dropbtn">
          <Link to="/">Top Categories</Link>

          <svg
            className="w-4 h-8 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </li>

        <div className="dropdown_content">
          <ul>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Kids friedly meals
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Lactose free
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Deserts
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Pastries and fries
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Fresh vegetables
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 sm:w-[70%] mx-auto">
        <Link to="Nutrients" className="hover:bg-Gray hover:opacity-60">
          <div className="mt-2 sm:text-center">
            <img src={Food5} alt="food icon" className="w-[300px] rounded-lg" />

            <p className="text-xl font-bold">Nutrient densed meals</p>
            <p className="text-Grey text-base font-medium mt-2">
              1,385 recipes
            </p>
          </div>
        </Link>
        <Link to="/Pastries" className="hover:bg-Gray hover:opacity-60">
          <div className="mt-2 sm:text-center">
            <img
              src={Burger}
              alt="food icon"
              className="w-[300px] rounded-lg"
            />
            <p className="text-xl font-bold">Pastries and fries</p>
            <p className="text-Grey text-base font-medium mt-2">
              8,105 recipes
            </p>
          </div>
        </Link>
        <Link to="/Veggies" className="hover:bg-Gray hover:opacity-60">
          <div className="mt-2 sm:text-center">
            <img src={Food8} alt="food icon" className="w-[300px] rounded-lg" />
            <p className="text-xl font-bold pt-2">Fresh vegetables</p>
            <p className="text-Grey text-base font-medium mt-2">
              5,971 recipes
            </p>
          </div>
        </Link>
        <Link to="/Deserts" className="hover:bg-Gray hover:opacity-60">
          <div className="mt-2 sm:text-center">
            <img
              src={Food14}
              alt="food icon"
              className="w-[300px] rounded-lg"
            />
            <p className="text-xl font-bold">Deserts</p>
            <p className="text-Grey text-base font-medium mt-2">
              5,246 recipes
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
