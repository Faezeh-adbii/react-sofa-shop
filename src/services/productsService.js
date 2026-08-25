import { api } from "../configs/api";

import { GET_CATEGORY_NAV, SEARCH_PRODUCTS } from "../graphql/queries";


const fetchCategoryNav = async() => {
    const res = await api.post("", {
        query: GET_CATEGORY_NAV,
    });
    if (res.data.errors) {
        throw new Error(res.data.errors[0].message);
    }
    return res.data.data;
};

const fetchSearchProducts = async(searchTerm) => {
    const res = await api.post("", {
        query: SEARCH_PRODUCTS,
        variables: { searchTerm },
    });
    if (res.data.errors) {
        throw new Error(res.data.errors[0].message);
    }
    return res.data.data;
};
export { fetchCategoryNav, fetchSearchProducts }