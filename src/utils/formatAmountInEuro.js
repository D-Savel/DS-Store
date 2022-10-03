export const formatAmountInEuro = (amount) => {
  var euro = new Intl.NumberFormat("fr-FR", { style: "currency", "currency": "EUR" }).format(amount);
  return euro
}