import React from "react";
import Burger from "../../Assets/food9.jpg";

const Pastries = () => {
  return (
    <div className="px-6">
      <h2 className="font-Inter font-medium text-3xl py-4">
        Pastries and Fries
      </h2>
      <div className="w-full">
        <img src={Burger} alt="pastries" className="w-full" />
        <p className="text-base font-Inter font-normal w-[400px] py-4">
          We are going to be making a recipe for the pastry and that the burger
          to be precise while the fries can be found in the other sections in
          this application and this should take a minimum of 7 minutes and a
          maximum of 15 minutes to be ready.
        </p>
      </div>
      <div>
        <p className="font-Inter font-bold text-xl">Ingredients</p>
        <ul className="py-2">
          <li>1. A medium sized burger bread</li>
          <li>2. A full cup of minced beef</li>
          <li>3. 5 table spoons of ketchop</li>
          <li>4. 2 table spoons of mayonnaise</li>
          <li>5. 2 table spoons of Lemon juice</li>
          <li>6. 3-4 strands of Celery and Lettuce</li>
          <li>7. 3/4 tea spoon of white pepper</li>
        </ul>
        <p className="font-Inter font-bold text-xl pt-2">Procedure</p>
        <ul className="py-2">
          <li>
            - Wash all the veggies thoroughly and if possible with some drops of
            vinegar, slice and set aside
          </li>
          <li>- Cut open the burger bread and place the veggies in it</li>
          <li>
            - roast or bake the minced beef for about 5 minutes and place in the
            burger bread
          </li>
          <li>- Squeeze in some lemon juice</li>
          <li>- sprinkle the ketchup and mayonnaise on it</li>
          <li>
            - Cover the burger, heat it up on a dry pan for 3 minutes and enjoy!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pastries;
