import React from "react";
import Fruits from "../../Assets/fruits.jpg";
// import Deserts from "../../Assets/food3.jpg";
import Swallow from "../../Assets/swallow.jpg";
import Veggie from "../../Assets/veggie.jpg";
// import Clock from "../../Assets/time.png";

const Latest = () => {
  return (
    <div className="font-Inter w-[95%] mx-auto">
      <h1 className="font-Inter text-3xl font-bold py-6">Latest</h1>
      <div className="flex flex-wrap justify-between mt-4">
        <div className="mt-2">
          <img src={Fruits} alt="an icon" className="rounded-lg" />
          <div className="w-full h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
            <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium hover:text-2xl hover:text-Wine hover:font-bold hover:w-[250px]">
              <p className="text-White px-2 over:text-Wine">35 mins</p>

              <span className="text-Yellow font-medium text-xl">
                &#9733; 3.8
              </span>
            </div>
          </div>
          <p className="relative bottom-[190px] text-Grey text-base font-medium mt-2">
            By <span className="text-Wine">Des Nwaogazi</span>
          </p>
          <p className="text-2xl font-bold relative bottom-[180px]">
            Fruits and Vegetables
          </p>
        </div>
        <div className="mt-2">
          <img src={Veggie} alt="an icon" className="rounded-lg" />
          <div className="w-full h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
            <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium hover:text-2xl hover:text-Wine hover:font-bold hover:w-[250px]">
              <p className="text-White px-2 over:text-Wine">25 mins</p>
              {/* <img src={Clock} alt="a clock" className="text-White" /> */}
              <span className="text-Yellow font-medium text-xl">
                &#9733; 4.1
              </span>
            </div>
          </div>
          <p className="relative bottom-[190px] text-Grey text-base font-medium mt-2">
            By <span className="text-Wine">Fidel</span>
          </p>
          <p className="text-2xl font-bold relative bottom-[180px]">
            Vegetable salads
          </p>
        </div>
        <div className="mt-2">
          <img src={Swallow} alt="an icon" className="rounded-lg" />
          <div className="w-full h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
            <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium hover:text-2xl hover:text-Wine hover:font-bold hover:w-[250px]">
              <p className="text-White px-2 over:text-Wine">55 mins</p>
              {/* <img src={Clock} alt="a clock" className="text-White" /> */}
              <span className="text-Yellow font-medium text-xl">
                &#9733; 4.2
              </span>
            </div>
          </div>
          <p className="relative bottom-[190px] text-Grey text-base font-medium mt-2">
            By <span className="text-Wine">Onyinye</span>
          </p>
          <p className="text-2xl font-bold relative bottom-[180px]">
            Soups and swallow
          </p>
        </div>

        <div className="mt-2">
          <img src={Fruits} alt="an icon" className="rounded-lg" />
          <div className="w-full h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
            <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium hover:text-2xl hover:text-Wine hover:font-bold hover:w-[250px]">
              <p className="text-White px-2 over:text-Wine">35 mins</p>
              {/* <img src={Clock} alt="a clock" className="text-White" /> */}
              <span className="text-Yellow font-medium text-xl">
                &#9733; 3.8
              </span>
            </div>
          </div>
          <p className="relative bottom-[190px] text-Grey text-base font-medium mt-2">
            By <span className="text-Wine">Des Frank</span>
          </p>
          <p className="text-2xl font-bold relative bottom-[180px]">
            Fruits and Vegetables
          </p>
        </div>
      </div>
    </div>
  );
};

export default Latest;
