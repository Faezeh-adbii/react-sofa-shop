import { useQuery } from "@tanstack/react-query";
import { fetchCategoryNav } from "../services/productsService";

const useCategory = () => {
    return useQuery({
        queryKey: ["category"],
        queryFn: fetchCategoryNav,
    });
};
export { useCategory }