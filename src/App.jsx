import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HotDessert from "./components/HotDessert/HotDessert";
import Banner from "./components/Banner/Banner";
import PopuRecipe from "./components/PopuRecipe/PopuRecipe";
import Review from "./components/Review/review";
import Testimonial from "./components/Testimonial/Testimonial"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
        <HotDessert/>
        <Banner/>
        <PopuRecipe/>
      <Review/>
        <Testimonial/>
        <Footer/>
    </div>
  );
};

export default App;
