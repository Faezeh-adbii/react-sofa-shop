//کوئری برای دسته بندی محصولات
const GET_CATEGORY_NAV = `
query {
    productCategories {
        name
        slug
        id
        imageCategory {
            url
        }
    }
}
`;
//کوئری برای سرچ
const SEARCH_PRODUCTS = `
query SearchProducts($searchTerm: String!) {
    products(
        where: {
            OR: [
                { name_contains: $searchTerm },
                { productCategory: { name_contains: $searchTerm } },
                { manufacturerCity_contains: $searchTerm }
            ]
        }) {
        id
        name
        productCategory {
            name
        }
        mainImage {
            url
            width
            height
        }
        slug
        manufacturerCity
    }
}
`;

//کوئری برای بخش تخفیف مبل
const GET_SPECIALOFFERS = `
query {
    products(where: { isAvailable: true, isSpecialOffer: true }, first: 6) {
        id
        mainImage {
            url
        }
        name
        slug
        price
        manufacturerCity
        discountPercent
    }
}
`;
//کوئری برای کل محصولات در اسلایدر
const GET_PRODUCTSSLIDER = `
query {
    products(where:  { isAvailable: true },   first: 6) {
        id
        mainImage {
            url
        }
        name
        slug
        price
        discountPercent
    }
}
`;
//کوئری برای کل محصولات  صفحه دسته بندی
const GET_PRODUCTS = `
query GetProducts( $where: ProductWhereInput, $orderBy:ProductOrderByInput){
  products(
    orderBy: $orderBy,
    where:$where
  ) {
    id
    name
    discountPercent
    manufacturerCity
    mainImage {
      url
    }
    productCategory {
      name
      slug
    }
    slug
    price
  }
}`;
export {
    GET_CATEGORY_NAV,
    SEARCH_PRODUCTS,
    GET_SPECIALOFFERS,
    GET_PRODUCTSSLIDER,
    GET_PRODUCTS,
};