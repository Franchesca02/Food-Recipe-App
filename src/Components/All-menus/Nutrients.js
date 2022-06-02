import React from "react";
import { Link } from "react-router-dom";
import Food5 from "../../Assets/food5.jpg";
import "./Nutrients.css";

const Nutrients = () => {
  return (
    <div className="px-6">
      <div className="py-4">
        {/* <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          className="text-white bg-Grey font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Top Categories
          <svg
            className="w-4 h-4 ml-2"
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
        </button> */}

        {/* <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
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
        </div> */}

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
      </div>
      <h2 className="font-Inter font-medium text-3xl py-4">
        Nutrient Densed Meals
      </h2>
      <div className="w-full">
        <img src={Food5} alt="Food icon" className="rounded-lg" />
        <p className="text-base font-Inter font-normal w-[400px] py-4">
          This quick fresh vegetable and legumes can either be used in making
          vegetable salads or beans soup. Depending on your choice of meal, one
          can be ready in 7 minutes and the other in 1 hour. But here is a
          recipe for the veggie salad
        </p>
      </div>
      <div>
        <p className="font-Inter font-bold text-xl">Ingredients</p>
        <ul className="py-2">
          <li>1. 3 strands of Broccoli</li>
          <li>2. A full Cucumber</li>
          <li>3. Half piece of Avocado</li>
          <li>4. Half cup of Almond nut</li>
          <li>5. 2 table spoons of Lemon juice</li>
          <li>6. 3-4 strands of Celery and Lettuce</li>
          <li>7. A handfull of Raspberries</li>
          <li>8. A medium sized Apple of choice</li>
        </ul>
        <p className="font-Inter font-bold text-xl pt-2">Procedure</p>
        <ul className="py-2">
          <li>
            - Wash all the veggies thoroughly and if possible with some drops of
            vinegar
          </li>
          <li>- Chop all the veggie into tiny bits</li>
          <li>- Squeeze out the lemon juice</li>
          <li>- Get a sizable bowl and clean properly</li>
          <li>
            - Add all the veggies and nuts, pour in the lemon juice and mix to
            combine
          </li>
          <li>- Refridgerate for half an hour and enjoy!</li>
        </ul>
      </div>
    </div>
  );
};

export default Nutrients;
