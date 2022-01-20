const formatCurrency = (stringCurrency: string | number): string => {
  return Number(stringCurrency).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export default formatCurrency;
