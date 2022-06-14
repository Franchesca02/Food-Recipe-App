import React from "react";
import Creamy from "../../Assets/creamy.jpg";

const Deserts = () => {
  return (
    <div className="px-6">
      <h2 className="font-Inter font-medium text-3xl py-4">Deserts</h2>

      <div className="w-full">
        <img src={Creamy} alt="pastries" className="w-full" />
        <p className="text-base font-Inter font-normal w-[400px] py-4">
          This a very simple but creative recipe for a desert just as we crave
          them after meals. This recipe is somehow curated for those with sweet
          tooth and would always want a healthy but yet a sumptuous creamy cake
          and this should take a minimum of 20 minutes and a maximum of 1 hour
          to be ready.
        </p>
      </div>
      <div>
        <p className="font-Inter font-bold text-xl">Ingredients</p>
        <ul className="py-2">
          <li>1. 2 cups of all purpose flour</li>
          <li>2. Half table spoon of baking soda/powder</li>
          <li>3. A cup of sugar</li>
          <li>4. 2 table spoons of vanilla flavour</li>
          <li>5. 250g of cooking butter</li>
          <li>6. 2 large eggs</li>
          <li>7. Get either raw cocoa powder or any other color of choice</li>
        </ul>

        <p className="font-Inter font-bold text-xl pt-2">Procedure</p>
        <ul className="py-2">
          <li>- In a clean dried bowl, sieve in the flour</li>
          <li>- pour in the sugar</li>
          <li>
            - In another bowl, melt the butter and mix with the eggs and vanilla
            flavour
          </li>
          <li>
            - add the wet ingredient to the dry ingredients ans mix thoroughly
          </li>
          <li>- Add the color if you want (optoinal)</li>
          <li>- Pour into a baking pan and bake at 170deg for 25 minutes</li>
          <li>- When properly baked, allow to cool, cut, serve and enjoy!</li>
        </ul>
      </div>
    </div>
  );
};

export default Deserts;
