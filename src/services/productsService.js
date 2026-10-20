import { api } from "../configs/api";

import {
    GET_CATEGORY_NAV,
    GET_PRODUCTS,
    GET_PRODUCTSSLIDER,
    GET_SPECIALOFFERS,
    SEARCH_PRODUCTS,
} from "../graphql/queries";

//دریافت دسته‌بندی‌ها برای نوار ناوبری
const fetchCategoryNav = async() => {
    const res = await api.post("", {
        query: GET_CATEGORY_NAV,
    });
    if (res.data.errors) {
        throw new Error(res.data.errors[0].message);
    }
    return res.data.data;
};

// جستجوی محصولات
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

//دریافت پیشنهادهای ویژه(باکس تخفیف)
const fetchSpecialOffers = async() => {
    const res = await api.post("", {
        query: GET_SPECIALOFFERS,
    });
    if (res.data.errors) {
        throw new Error(res.data.errors[0].message);
    }
    return res.data.data;
};

//دریافت کل محصولات برای اسلایدر
const fetchProductsSlider = async() => {
    const res = await api.post("", {
        query: GET_PRODUCTSSLIDER,
    });
    if (res.data.errors) {
        throw new Error(res.data.errors[0].message);
    }
    return res.data.data;
};

//گرفتن همه ی محصولات یا یک دسته
const fetchProducts = async(slug = null) => {
    const res = await api.post("", {
        query: GET_PRODUCTS,
        variables: { slug },
    });
    if (res.data.errors) {
        throw new Error(res.data.errors[0].message);
    }
    return res.data.data.products;
};
export {
    fetchCategoryNav,
    fetchSearchProducts,
    fetchSpecialOffers,
    fetchProductsSlider,
    fetchProducts,
};