import React from "react";
import thali2 from "../../assets/food/thali-2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const Testimonial = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* Text content section */}
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.p
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-serif relative z-10"
            >
              We believe in creating an unmatched experience by maintaining the highest standard of quality, hygiene, service and customer satisfaction.
            </motion.p>

            <div className="flex items-center gap-3">
              <motion.img
                variants={SlideUp(0.8)}
                initial="hidden"
                whileInView="show"
                src="https://static.thenounproject.com/png/417343-200.png"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <motion.div
                variants={SlideUp(1.2)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className="text-xl font-bold">Vedant D</h2>
                <p className="text-sm">Managing director</p>
              </motion.div>
            </div>
          </div>

          {/* image section */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.2, rotate: 15, x: 0, y: -50 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              src={thali2}
              alt=""
              className="relative z-10 w-full lg:max-w-[280px] img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px]  bg-lightGreen rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
