function percentage(value, percent) {
  return value * (percent / 100);
}

function mrp(productionCost, profitPercent, gstPercent) {
  let profit = percentage(productionCost, profitPercent);
  let price = productionCost + profit;
  let gst = percentage(price, gstPercent);
  return price + gst;
}

console.log(mrp(100, 10, 15));
console.log(percentage(100, 10, 15));