const formatCurrency = (stringCurrency: string) => {
  return `R$ ${(+stringCurrency).toFixed(2)}`;
};

export default formatCurrency;
