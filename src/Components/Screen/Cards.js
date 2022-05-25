import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fruits from "../../Assets/fruits.jpg";
import Soup from "../../Assets/swallow.jpg";
import Veggies from "../../Assets/veggie.jpg";

// const Items = [
//   {
//     id: "1",
//     image: "omelette.png",
//     title: "Breakfast",
//     numOfRecipies: "247 recipes",
//   },
//   {
//     id: "2",
//     image: "food2.png",
//     title: "Vgeggies",
//     numOfRecipies: "315 recipes",
//   },
//   {
//     id: "3",
//     image: "fruits.png",
//     title: "Fruits",
//     numOfRecipies: "984 recipes",
//   },
//   {
//     id: "4",
//     image: "green.png",
//     title: "Greens",
//     numOfRecipies: "247 recipes",
//   },
// ];
const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <h1 className="font-Inter text-3xl mt-10 font-bold px-16">
        Some of Our Recipes
      </h1>
      <div className="w-[70%] mx-auto">
        <Slider {...settings}>
          <div className="mt-[150px]">
            {/* <div> */}
            <img src={Veggies} alt="Our project icon" className="rounded-lg" />
            {/* </div> */}
            <div className="w-[91%] h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
              <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium">
                <p className="text-White px-2 over:text-Wine">35 mins</p>

                <span className="text-Yellow font-medium text-xl">
                  &#9733; 3.8
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[150px]">
            {/* <div> */}
            <img src={Soup} alt="Our project icon" className="rounded-lg" />
            {/* </div> */}
            <div className="w-[91%] h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
              <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium">
                <p className="text-White px-2 over:text-Wine">35 mins</p>

                <span className="text-Yellow font-medium text-xl">
                  &#9733; 3.8
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[150px]">
            {/* <div> */}
            <img src={Veggies} alt="Our project icon" className="rounded-lg" />
            {/* </div> */}
            <div className="w-[91%] h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
              <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium">
                <p className="text-White px-2 over:text-Wine">35 mins</p>

                <span className="text-Yellow font-medium text-xl">
                  &#9733; 3.8
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[150px]">
            {/* <div> */}
            <img src={Soup} alt="Our project icon" className="rounded-lg" />
            {/* </div> */}
            <div className="w-[91%] h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
              <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium">
                <p className="text-White px-2 over:text-Wine">35 mins</p>

                <span className="text-Yellow font-medium text-xl">
                  &#9733; 3.8
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[150px]">
            {/* <div> */}
            <img src={Fruits} alt="Our project icon" className="rounded-lg" />
            {/* </div> */}
            <div className="w-[91%] h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
              <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium">
                <p className="text-White px-2 over:text-Wine">35 mins</p>

                <span className="text-Yellow font-medium text-xl">
                  &#9733; 3.8
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[150px]">
            {/* <div> */}
            <img src={Veggies} alt="Our project icon" className="rounded-lg" />
            {/* </div> */}
            <div className="w-[91%] h-[190px] bg-Dark opacity-60 relative bottom-[190px] rounded-lg">
              <div className="flex justify-between w-[240px] relative top-[150px] font-Inter text-xl font-medium">
                <p className="text-White px-2 over:text-Wine">35 mins</p>

                <span className="text-Yellow font-medium text-xl">
                  &#9733; 3.8
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
