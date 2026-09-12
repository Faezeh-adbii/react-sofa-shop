import React from "react";
import Slider from "../components/Slider";
import ProductCategories from "../components/ProductCategories";

function HomePage() {
  return (
    <div className="bg-page ">
      <div className="container">
        <Slider />
        <ProductCategories />
      </div>
    </div>
  );
}

export default HomePage;
