export const steps = [
  {
    id: "1",
    message: "Hi! Do you need some help?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Yes", trigger: "4" },
      { value: 2, label: "No", trigger: "3" },
    ],
    hideInput: true,
  },
  {
    id: "3",
    message: "Fine, see you soon 😊",
    end: true,
  },
  {
    id: "4",
    message: "What is your name?",
    trigger: "5",
  },
  {
    id: "5",
    user: true,
    trigger: "6",
  },
  {
    id: "6",
    message: "Hi {previousValue}, nice to meet you!",
    trigger: "7",
  },
  {
    id: "7",
    message: "How can I help you?",
    trigger: "8",
  },
  {
    id: "8",
    options: [
      { value: 1, label: "Our products", trigger: "9" },
      { value: 2, label: "Payment methods", trigger: "10" },
      { value: 3, label: "Our stores", trigger: "11" },
      { value: 4, label: "About us", trigger: "12" },
    ],
    hideInput: true,
  },
  {
    id: "9",
    message:
      "Today, millions of customers turn to Every ones to shop for the latest PC components, consumer electronics, smart home and gaming products.",
    trigger: "10",
    end: true,
  },
  {
    id: "10",
    message:
      "Actually. We only have one payment option. Paypal. PayPal is an online payment system that makes paying for things online and sending and receiving money safe and secure. When you link your bank account, credit card or debit card to your PayPal account, you can use PayPal to make purchases online with participating stores",
    trigger: "11",
    end: true,
  },
  {
    id: "11",
    message:
      "We have six physicals stores. Three in Colombian and three are in Argentina. If you want to know more about our physicals stores do click in location",
    trigger: "12",
    end: true,
  },
  {
    id: "12",
    message:
      "Everyones store is an online-only retailer that offers customers a comprehensive selection of the latest consumer electronics products, detailed product descriptions and images, as well as how-to information and customer reviews.",
    // trigger: 13,
    end: true,
  },
];
