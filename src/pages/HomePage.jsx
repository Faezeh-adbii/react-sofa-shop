import React from "react";
import Slider from "../components/Slider";
import ProductCategories from "../components/ProductCategories";
import SpecialOffers from "../components/SpecialOffers";
import InstallmentOffers from "../components/InstallmentOffers";
import ProductSlider from "../components/ProductSlider";

function HomePage() {
  return (
    <div className="bg-page ">
      <div className="container">
        <Slider />
        <ProductCategories />
        <SpecialOffers/>
        <InstallmentOffers/>
        <ProductSlider/>
      </div>
    </div>
  );
}

export default HomePage;
