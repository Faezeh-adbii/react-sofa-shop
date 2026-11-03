import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();
  //هربار که مسیر تغییر کرد
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // یا "auto"
    });
  }, [pathname]);
};

export { useScrollToTop };