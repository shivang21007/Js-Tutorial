var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount Percent is :" + discountPercent);

let displayDiscountPercent = Math.round(discountPercent);

console.log(displayDiscountPercent + "% off");


