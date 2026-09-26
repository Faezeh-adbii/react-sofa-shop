const GET_CATEGORY_NAV = `
query{
    productCategories{
        name 
        slug
        imageCategory{
          url
        }
    }
}`;

const SEARCH_PRODUCTS = `
query SearchProducts($searchTerm:String!) {
  products(
where: {
  OR: [
    { name_contains: $searchTerm },
    { productCategory: { name_contains: $searchTerm } },
    { manufacturerCity_contains: $searchTerm }
  ]
}  ) {
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
}`;

const GET_SPECIALOFFERS = `
query{
 products(where: {isAvailable: true, isSpecialOffer: true}, first:6) {
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
export { GET_CATEGORY_NAV, SEARCH_PRODUCTS, GET_SPECIALOFFERS };