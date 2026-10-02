import { useQuery } from "@tanstack/react-query";
import{ fetchProductsSlider } from "../services/productsService"

const useProductsSlider = () => {
  return useQuery({
    queryKey: ["Products_Slider"],
    queryFn: fetchProductsSlider,
  });
};
export {useProductsSlider}
