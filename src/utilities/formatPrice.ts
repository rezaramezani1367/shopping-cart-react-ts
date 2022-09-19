const numberFormat = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export const formatPrice = (number: number) => {
  return numberFormat.format(number);
};
