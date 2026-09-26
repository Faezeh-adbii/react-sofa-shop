import { useQuery } from "@tanstack/react-query";
import { fetchSpecialOffers } from "../services/productsService";

const useSpecialOffers = () => {
    return useQuery({
        queryKey: ["Special_Offers"],
        queryFn: fetchSpecialOffers,
    });
};

export { useSpecialOffers };