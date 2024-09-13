import React from "react";
import Slider from "react-slick";
import vedant from "../../assets/food/vedant.jpg";
import Shravan from "../../assets/food/Shravan.jpeg";
import Parnav from "../../assets/food/Pranav.jpeg";
import Pratik from "../../assets/food/Pratik.jpeg";
import {
  animate,
  delay,
  inView,
  motion,
  optimizedAppearDataAttribute,
  transform,
} from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const testimonialData = [
  {
    id: 1,
    name: "Vedant",
    text: "The Spice Lounge is a delightful gem for those who love flavorful and well-prepared food. I recently visited with a group of friends, and we were all impressed by the ambiance, which strikes a perfect balance between cozy and upscale.",
    img: vedant,
  },
  {
    id: 2,
    name: "Shravan",
    text: "Spice of India has a warm, inviting atmosphere with traditional Indian decor. The soft lighting and relaxed vibe make it an excellent place for a family dinner or even a casual date night. The seating is comfortable,and the space is well-maintained  The food is consistently good.",
    img: Shravan,
  },
  {
    id: 3,
    name: "Pranav",
    text: "The Green Table is a must-visit for Indian food lovers. The pricing is very reasonable for the quality and quantity of food Whether you’re craving classic dishes like Butter Chicken or something vegetarian, this place delivers on both flavor and service. I’m definitely coming back!",
    img: Parnav,
  },
  {
    id: 4,
    name: "Pratik",
    text: "The service at The Green Table was excellent. The staff was polite and attentive, checking on us regularly to ensure we were enjoying our meal. Our waiter was knowledgeable about the menu and helped us choose dishes based on our spice tolerance. The food arrived promptly, and the staff made us feel welcome throughout our visit.",
    img: Pratik,
  },
];

const Review = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-15 max-w-[400px] mx-auto">
            
            {/* <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-4xl text-center font-league font-semibold uppercase py-8"
            >
              Testimonial
            </motion.h1> */}
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-5xl text-center font-league font-Playfair Display, serif uppercase py-8"
            >
              Clients review
            </motion.h1>
            <motion.p 
            variants={SlideUp(0.8)}
            initial="hidden"
            whileInView="show"
             className="text-sm bg-clip-text bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </motion.p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div key={data.id} className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-8 mx-4 rounded-xl bg-lightGreen bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full w-24 block mx-auto img-shadow"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
