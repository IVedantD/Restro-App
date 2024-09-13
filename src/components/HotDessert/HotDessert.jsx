import React from "react";
import Food1 from "../../assets/food/Gulab-jamun.png";
import Food2 from "../../assets/food/cake.png";
import Food3 from "../../assets/food/ice-creme2.png";
import {
  animate,
  delay,
  inView,
  motion,
  optimizedAppearDataAttribute,
  transform,
} from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const HotDessertData = [
  {
    id: 1,
    name: "Sweets",
    img: Food1,
    price: "₹ 250",
    delay: 0.4,
  },
  {
    id: 2,
    name: " Cake",
    img: Food2,
    price: "₹ 500",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Ice-Creme",
    img: Food3,
    price: "₹ 300",
    delay: 1.2,
  },
];

const HotDessert = () => {
  return (
    <section>
      <div className="container py-12">
        {/* heading section */}
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-darkGreen uppercase py-8"
        >
          Sweetmeats
        </motion.h3>

        {/* grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDessertData.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                className="group bg-white/50  shadow-md p-3 flex items-center gap-4"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-24 rounded-full img-shadow group-hover: scale-125 transition-all duration-700 group-hover::rotate-[50deg]"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text text-yellow-500 ">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotDessert;
