import React from "react";
import { LuBaby } from "react-icons/lu";

import MinimalIcon from "../assets/product-category/minimal.png";
import ServicKhabIcon from "../assets/product-category/servickhab.png";
import ChesterIcon from "../assets/product-category/chester.png";
import RahatiIcon from "../assets/product-category/rahati.png";
import LShapeIcon from "../assets/product-category/l.png";
import SaltanatiIcon from "../assets/product-category/saltanati.png";
import ClassicIcon from "../assets/product-category/classic.png";

const getImageForCategory = (slug) => {
  const imgClass = "w-17 h-17 xl:w-28 xl:h-28 object-contain";
  const iconClass = "w-12 h-12 lg:w-12 lg:h-12";

  switch (slug) {
    case "mobl-minimal":
      return <img src={MinimalIcon} alt="مبل مینیمال" className={imgClass} />;
      
    case "servis-khab":
      return <img src={ServicKhabIcon} alt="سرویس خواب" className={imgClass} />;
      
    case "mobl-chester":
      return <img src={ChesterIcon} alt="مبل چستر" className={imgClass} />;
      
    case "mobl-rahati":
      return <img src={RahatiIcon} alt="مبل راحتی" className={imgClass} />;
      
    case "mobl-l":
      return <img src={LShapeIcon} alt="مبل ال" className={imgClass} />;
      
    case "mobl-saltanati":
      return <img src={SaltanatiIcon} alt="مبل سلطنتی" className={imgClass} />;
      
    case "moble-classic":
      return <img src={ClassicIcon} alt="مبل کلاسیک" className={imgClass} />;

    case "servic-nozad":
      return <LuBaby className={iconClass} />; 

    default:
      return <img src={MinimalIcon} alt="دسته‌بندی" className={imgClass} />;
  }
};

export { getImageForCategory };