export const itemPricing = (price, offerPercent) => {
  offerPercent > 0 && (price = (price * (100 - offerPercent) / 100))
  return price
}