import React from "react";
import Slider from "../components/Slider";
import ProductCategories from "../components/ProductCategories";
import SpecialOffers from "../components/SpecialOffers";
import InstallmentOffers from "../components/InstallmentOffers";

function HomePage() {
  return (
    <div className="bg-page ">
      <div className="container">
        <Slider />
        <ProductCategories />
        <SpecialOffers/>
        <InstallmentOffers/>
      </div>
    </div>
  );
}

export default HomePage;
