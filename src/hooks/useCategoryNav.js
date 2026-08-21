import { api } from "../configs/api";
import { GET_CATEGORI_NAV } from "../graphQl/queries";

const useCategoryNav = async() => {
    const res = await api.post("", {
        query: GET_CATEGORY_NAV,
    });
    if (res.data.errors) {
        throw new Error(res.data.errors[0].message);
    }
    return res.data.data;
};
export { useCategoryNav };