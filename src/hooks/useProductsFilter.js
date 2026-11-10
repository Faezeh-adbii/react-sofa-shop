import { useMemo, useState } from "react";
import { getFinalPrice } from "../utils/priceUtils";

const useProductsFilter=(products)=>{
      const [filters, setFilters] = useState(null)        
      //منطق فیلتر کردن 
      const filteredProducts = useMemo(() => {
        if (!products) return []
        if (!filters) return products
        return products.filter(product => {
          const finalPrice = getFinalPrice(product.price, product.discountPercent);
          if (filters.minPrice != null && finalPrice < filters.minPrice) return false;
          if (filters.maxPrice != null && finalPrice > filters.maxPrice) return false;
          return true
        })
      }, [products, filters])
    
      //توابع مدیریت فیلتر
      const handleApplyFilters = (newFilters) => {
        if (newFilters.minPrice == null && newFilters.maxPrice == null) {
          setFilters(null)
        } else {
          setFilters(newFilters)
        }
      }
      //پاک کردن filter
      const handleClearFilters = () => {
        setFilters(null)
      }
      return{
        filters,
        filteredProducts,
        handleApplyFilters,
        handleClearFilters
      }
}
export {useProductsFilter}