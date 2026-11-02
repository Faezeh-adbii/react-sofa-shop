import { useMemo } from "react"
import { getFinalPrice } from "../utils/priceUtils"

const useSortedProducts=(products , sortBy)=>{
    return useMemo(()=>{
        if(!products) return []
        if(sortBy !=="price_ASC" && sortBy !=="price_DESC"){        
            return products
        }
        return [...products].sort((a, b)=>{
            const finalPriceA=getFinalPrice(a.price , a.discountPercent)
            const finalPriceB=getFinalPrice(b.price , b.discountPercent)
            if(sortBy === "price_ASC"){
                return finalPriceA-finalPriceB
            }else{
                return finalPriceB-finalPriceA
            }
        })
    } , [products, sortBy])

}
export {useSortedProducts}