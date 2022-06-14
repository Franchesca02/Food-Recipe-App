import React from "react";
import Veggies from "../../Assets/food8.jpg";

const Vegetables = () => {
  return (
    <div className="px-6">
      <h2 className="font-Inter font-medium text-3xl py-4">
        Vegetables and Fruits
      </h2>
      <div className="w-full">
        <img src={Veggies} alt="veggies" className="w-full" />
        <p className="text-base font-Inter font-normal w-[400px] py-4">
          This quick fresh vegetable and fruits can either be used in making
          vegetable salads or a coleslaw. Depending on your choice of meal, one
          can be ready in 7 minutes and the other in 10 minutes. But here is a
          recipe for a coleslaw
        </p>
      </div>
      <div>
        <p className="font-Inter font-bold text-xl">Ingredients</p>
        <ul className="py-2">
          <li>1. A whole green and purple cabbage</li>
          <li>2. A full Cucumber</li>
          <li>3. 5 pieces of carrots</li>
          <li>4. a can of sweet corn</li>
          <li>5. 2 table spoons of Lemon juice</li>
          <li>6. 3-4 strands of Celery and Lettuce</li>
          <li>7. A can of baked beans</li>
          <li>8. A medium sized fresh tomato</li>
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
            - Add all the veggies, pour in the lemon juice or any dressing of
            choice, mix to combine
          </li>
          <li>- Refridgerate for 15 minutes and enjoy!</li>
        </ul>
      </div>
    </div>
  );
};

export default Vegetables;
