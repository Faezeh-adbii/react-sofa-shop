import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/productsService";

const useProducts = (slug = null) => {
    return useQuery({
        queryKey: ["Products", slug || "all"],
        queryFn: () => fetchProducts(slug),
    });
};
export { useProducts };