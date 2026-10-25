 const getOrderByValue = (sortString) => {
     switch (sortString) {
         case "price_ASC":
             return "price_ASC";
         case "price_DESC":
             return "price_DESC";
         case "createdAt_ASC":
             return "createdAt_ASC";
         case "createdAt_DESC":
         case "isSpecialOffer": // اگر isSpecialOffer یک Enum معتبر نیست، به createdAt_DESC برمی‌گردیم
         default:
             return "createdAt_DESC";
     }
 };
 export { getOrderByValue }