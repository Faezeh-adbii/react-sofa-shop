const getFinalPrice = (price, discountPercent) => {
    const finalPrice = price - (price * discountPercent) / 100;
    return finalPrice;
};
export { getFinalPrice };