import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchSearchProducts } from "../services/productsService";

export const useSearch = (searchTerm) => {
    const [debouncedTerm, setDebouncedTerm] = useState("");
    const [isResultsVisible, setIsResultsVisible] = useState(false);

    const { data, error, isFetching, isLoading } = useQuery({
        queryKey: ["Search-Products", debouncedTerm],
        queryFn: () => {
            return fetchSearchProducts(debouncedTerm);
        },
        enabled: debouncedTerm.length >= 2,
    });

    // مدیریت دیبونس
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm && searchTerm.length >= 2) {
                setDebouncedTerm(searchTerm);
                setIsResultsVisible(true);
            } else if (searchTerm === "") {
                setDebouncedTerm("");
                setIsResultsVisible(false);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    //دریافت محصولات از داده
    const products =
        (data && data.products) || (data && data.data && data.data.products) || [];
    // بررسی اینکه آیا جستجو در حال اجراست
    const isSearching = (isLoading || isFetching) && debouncedTerm.length >= 2;

    return { debouncedTerm, products, isSearching, error, isResultsVisible, setIsResultsVisible, setDebouncedTerm };
};