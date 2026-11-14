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
    first: 100,
    orderBy: $orderBy,
    where:$where
  ) {
    id
    name
    price
    discountPercent
    manufacturerCity
    mainImage {
      url
    }
    productCategory {
      name
      slug
    }
  }
}
`
//  کوئری  برای صفحه جزئیات محصول
const GET_PRODUCTDETAIL = `
query GetProductDetail($slug: String!) {
  product(where: { slug: $slug }) {
    id
    name
    price
    discountPercent
    description {
      html
    }
    manufacturer
    manufacturerCity
    woodFrame
    stock
    isAvailable
    mainImage {
      url
    }
    gallery {
      url
    }
    productCategory {
      name
      slug
    }
  }
}
`;
export {
    GET_CATEGORY_NAV,
    SEARCH_PRODUCTS,
    GET_SPECIALOFFERS,
    GET_PRODUCTSSLIDER,
    GET_PRODUCTS,
    GET_PRODUCTDETAIL
};