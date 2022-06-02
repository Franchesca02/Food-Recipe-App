import React from "react";
import Banner from "../Assets/salmon.jpg";
import Food11 from "../Assets/food11.jpg";
// import Cards from "../Components/Screen/Cards";
import Categories from "../Components/Screen/Categories";
import Latest from "../Components/Screen/Latest";

const index = () => {
  return (
    <div className="">
      <div>
        <img src={Banner} alt="banner icon" className="w-full" />
        <div className="absolute bottom-[10px] left-[150px] text-White font-Inter sm:h-[400px] sm:left-[40px] sm:hidden">
          <h1 className="text-6xl font-bold sm:text-4xl">
            Find Your Best Recipes Here
          </h1>
          <p className="text-2xl font-medium sm:text-xl py-2 sm:text-Yellow">
            Let the cooking begin nonstop
          </p>
        </div>
      </div>
      <div className="mt-2 px-6">
        <div className="">{/* <Cards /> */}</div>
        <div>
          <Categories />
        </div>
        <Latest />
      </div>
      <section id="about">
        <div className="flex flex-wrap justify-between w-[90%] mx-auto py-6">
          <div className="w-[58%] bg-Wine rounded-tl-lg sm:w-full mt-4">
            <img
              src={Food11}
              alt="a food icon"
              className="bg-Wine rounded-tl-full rounded-br-lg"
            />
          </div>
          <div className="w-[40%] sm:w-full rounded-tr-3xl bg-Yellow mt-4 py-4">
            <h3 className="font-Inter font-medium text-2xl text-center py-2 sm:underline">
              About Us
            </h3>
            <p className="font-Inter font-medium text-base w-[70%] mx-auto">
              Recipes by Ify was borne out of the interest is consuming healthy
              and sumptous meals. Just as good health is wealth, healthy fresh
              meals equates to a healthy lifestyle. You can create your own
              recipes ranging from breakfast, brunch, lunch, dinner to deserts
              and snacks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
