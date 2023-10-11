const priceSelectors = () => {
  const selectorPrices = [
    {
      text: "R$0,00",
      value: "0",
    },
    {
      text: "R$1.000,00",
      value: "1000",
    },
    {
      text: "R$5.000,00",
      value: "5000",
    },
    {
      text: "R$10.000,00",
      value: "10000",
    },
    {
      text: "R$25.000,00",
      value: "25000",
    },
    {
      text: "R$50.000,00",
      value: "50000",
    },
    {
      text: "R$100.000,00",
      value: "100000",
    },
  ];

  const priceSelectorList = [
    {
      id: "IRE",
      title: "Incêndio, raio e explosão",
      // icon: "fire",
      monthlyPayment: 0,
      numberOfMonths: 12,
      sinistroTax: 1.6,
      priceList: selectorPrices,
    },
    {
      id: "PP",
      title: "Perda e pagamento de aluguel",
      // icon: "building",
      monthlyPayment: 0,
      numberOfMonths: 12,
      sinistroTax: 1.1,
      priceList: selectorPrices,
    },
    {
      id: "VGC",
      title: "Vendaval, granizo e ciclone",
      // icon: "wind",
      monthlyPayment: 0,
      numberOfMonths: 12,
      sinistroTax: 1.6,
      priceList: selectorPrices,
    },
    {
      id: "RCF",
      title: "Responsabilidade civil familiar",
      // icon: "user-group",
      monthlyPayment: 0,
      numberOfMonths: 12,
      sinistroTax: 1,
      priceList: selectorPrices,
    },
    {
      id: "DE",
      title: "Danos elétricos",
      // icon: "bolt",
      monthlyPayment: 0,
      numberOfMonths: 12,
      sinistroTax: 1.2,
      priceList: selectorPrices,
    },
    {
      id: "RO",
      title: "Roubo",
      // icon: "shield",
      monthlyPayment: 0,
      numberOfMonths: 12,
      sinistroTax: 1.4,
      priceList: selectorPrices,
    },
  ];

  return priceSelectorList;
};

module.exports = priceSelectors;
