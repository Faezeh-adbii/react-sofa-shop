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
export { GET_CATEGORY_NAV }