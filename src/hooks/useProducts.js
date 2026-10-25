import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/productsService";

const useProducts = (slug = null, sortBy = "createdAt_DESC") => {
    return useQuery({
        queryKey: ["Products", slug || "all", sortBy],
        queryFn: () => fetchProducts(slug, sortBy),
    });
};
export { useProducts };