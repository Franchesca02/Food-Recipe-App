import React from "react";
import Food5 from "../../Assets/food5.jpg";
import Food8 from "../../Assets/food8.jpg";
import Burger from "../../Assets/burger.jpg";
import Food14 from "../../Assets/food14.png";

const Categories = () => {
  return (
    <div className="w-[95%] mx-auto">
      <h1 className="font-Inter text-3xl font-bold py-6">Top Categories</h1>
      <div className="flex flex-wrap justify-between mt-4">
        <div className="mt-2">
          <img src={Food5} alt="food icon" className="w-[300px] rounded-lg" />

          <p className="text-xl font-bold">Vegetables and nuts</p>
          <p className="text-Grey text-base font-medium mt-2">1,385 recipes</p>
        </div>
        <div className="mt-2">
          <img src={Burger} alt="food icon" className="w-[300px] rounded-lg" />
          <p className="text-xl font-bold">Fresh vegetables</p>
          <p className="text-Grey text-base font-medium mt-2">8,105 recipes</p>
        </div>
        <div className="mt-2">
          <img src={Food8} alt="food icon" className="w-[300px] rounded-lg" />
          <p className="text-xl font-bold pt-2">Steaks and maize</p>
          <p className="text-Grey text-base font-medium mt-2">5,971 recipes</p>
        </div>
        <div className="mt-2">
          <img src={Food14} alt="food icon" className="w-[300px] rounded-lg" />
          <p className="text-xl font-bold">Deserts</p>
          <p className="text-Grey text-base font-medium mt-2">5,246 recipes</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
