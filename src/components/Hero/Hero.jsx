import React from "react";
import FoodPng from "../../assets/food/Full-dish.png";
import sideDish from "../../assets/food/side-dish.png";
import Leaf from "../../assets/food/leaf.png";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineTableBar } from "react-icons/md";
import {
  animate,
  delay,
  inView,
  motion,
  optimizedAppearDataAttribute,
  transform,
} from "framer-motion";

export const SlideUp = (delay) => {
  return {
    hidden: {
      y: "100px",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* text content here */}
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline
            text-transparent "
            >
              Today's
              <img
                src={Leaf}
                alt=""
                className="absolute w-[50px] top-0 right-0 md:right-[50px]"
              />
            </motion.h1>
            <motion.h1
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold  uppercase"
            >
              Delicious
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="hidden"
              whileInView="show"
              className="text-2xl"
            >
              Traditional Indian food to delight the whole family
            </motion.p>
            <motion.button
              variants={SlideUp(2)}
              initial="hidden"
              whileInView="show"
              className="btn-primary  inline-block !mt-10 !mr-2"
            >
              <IoCartOutline className="inline mr-2" />
              Order Now
            </motion.button>
            <motion.button
              variants={SlideUp(2)}
              initial="hidden"
              whileInView="show"
              className="btn-primary  inline-block !mt-10"
            >
              <MdOutlineTableBar className="inline mr-2" /> 
              Book Table
            </motion.button>
          </div>
          {/* Image here */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={FoodPng}
              alt=""
              className="w-[450px] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={sideDish}
              alt=""
              className=" hidden sm:block w-[250px] absolute top-[-30px] right-[-130px] md:right-[-150px] img-shadow "
            />
          </div>
        </div>
      </div>

      {/* Background yellow */}
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        className="w-[2500px] h-[2500px] rounded-3xl bg-lightGreen absolute top-[-30%] left-[70%] z-0"
      ></motion.div>
    </main>
  );
};

export default Hero;
