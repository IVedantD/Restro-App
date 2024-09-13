import React from "react";
import Food1 from "../../assets/food/slider-img1.png";
import Food2 from "../../assets/food/slider-img2.png";
import Food3 from "../../assets/food/slider-img3.png";
import {
  animate,
  delay,
  inView,
  motion,
  optimizedAppearDataAttribute,
  transform,
} from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const PopularRecipeData = [
  {
    id: 1,
    name: "Tofu Poke Bowl",
    img: Food1,
    price: "₹ 800",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Greek Salad",
    img: Food2,
    price: "₹ 700",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Pumpkin Soup",
    img: Food3,
    price: "₹ 650",
    delay: 1.2,
  },
];

const PopuRecipe = () => {
  return (
    <section>
      <div className="container py-24">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-Playfair Display, serif uppercase py-8"
        >
          {" "}
          Our Best Popular Recipes
        </motion.h3>

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {PopularRecipeData.map((item) => {
            return (
              <div
                key={item.id}
                className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-44 mx-auto img-shadow 
                  "
                />
                <div>
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                    Buy Now
                  </button>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopuRecipe;
