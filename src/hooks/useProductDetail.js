import { useQuery } from "@tanstack/react-query"

import { fetchProductDetail } from "../services/productsService"

const useProductDetail=(slug)=>{
    return useQuery({
        queryKey:["ProductDetail" , slug],
        queryFn:()=>fetchProductDetail(slug),
        enabled:!!slug // فقط وقتی که slug وجود داشت کوئری را اجرا کن
    })
}
export {useProductDetail}