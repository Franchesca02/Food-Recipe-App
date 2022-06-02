import React from "react";
import Food5 from "../../Assets/food5.jpg";
import Food8 from "../../Assets/food8.jpg";
import Burger from "../../Assets/burger.jpg";
import Food14 from "../../Assets/food14.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-[95%] mx-auto">
      <h1 className="font-Inter text-3xl font-bold py-6 sm:text-center">
        Top Categories
      </h1>
      <div className="flex flex-wrap justify-between mt-4 sm:w-[70%] mx-auto">
        <Link to="Nutrients">
          <div className="mt-2 sm:text-center">
            <img src={Food5} alt="food icon" className="w-[300px] rounded-lg" />

            <p className="text-xl font-bold">Nutrient densed meals</p>
            <p className="text-Grey text-base font-medium mt-2">
              1,385 recipes
            </p>
          </div>
        </Link>
        <div className="mt-2 sm:text-center">
          <img src={Burger} alt="food icon" className="w-[300px] rounded-lg" />
          <p className="text-xl font-bold">Pastries and fries</p>
          <p className="text-Grey text-base font-medium mt-2">8,105 recipes</p>
        </div>
        <div className="mt-2 sm:text-center">
          <img src={Food8} alt="food icon" className="w-[300px] rounded-lg" />
          <p className="text-xl font-bold pt-2">Fresh vegetables</p>
          <p className="text-Grey text-base font-medium mt-2">5,971 recipes</p>
        </div>
        <div className="mt-2 sm:text-center">
          <img src={Food14} alt="food icon" className="w-[300px] rounded-lg" />
          <p className="text-xl font-bold">Deserts</p>
          <p className="text-Grey text-base font-medium mt-2">5,246 recipes</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
