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
    message: "Hi {previousValue}, nice to meet you! ",
    hideInput: true,
    trigger: "7",
  },
  {
    id: "7",
    message: "I can help you with this FAQ. Please choose one 👇🏼",
    hideInput: true,
    trigger: "8",
  },
  {
    id: "8",
    options: [
      { value: 1, label: "Know more about what we sell", trigger: "9" },
      // { value: 2, label: "Our payments methods", trigger: "10" },
      // { value: 3, label: "Our stores", trigger: "11" },
      // { value: 4, label: "About us", trigger: "12" },
    ],
    hideInput: true,
  },
  {
    id: "9",
    message:
      "Today, millions of customers turn to Every ones to shop for the latest PC components, consumer electronics, smart home and gaming products.",
    hideInput: true,
    trigger: "13",
  },
  {
    id: "13",
    message: "Do you want to know more about us?",
    hideInput: true,
    trigger: "14",
  },
  {
    id: "14",
    options: [
      { value: 1, label: "Yes", trigger: "15" },
      { value: 2, label: "No", trigger: "16" },
    ],
    hideInput: true,
  },
  {
    id: "16",
    message: "Fine, see you soon 😊",
    hideInput: true,
    end: true,
  },
  {
    id: "15",
    message: "Great! Choose an option 👇🏼",
    hideInput: true,
    trigger: "17",
  },
  {
    id: "17",
    options: [
      { value: 1, label: "Ours payments methods", trigger: "18" },
      // { value: 2, label: "Our stores", trigger: "18" },
      // { value: 3, label: "About us", trigger: "19" },
    ],
    hideInput: true,
  },
  {
    id: "18",
    message:
      "Actually. We only have one payment option. Paypal. PayPal is an online payment system that makes paying for things online and sending and receiving money safe and secure. When you link your bank account, credit card or debit card to your PayPal account, you can use PayPal to make purchases online with participating stores",
    hideInput: true,
    trigger: "20",
  },
  {
    id: "20",
    message: "Do you want to know more about us?",
    hideInput: true,
    trigger: "21",
  },
  {
    id: "21",
    options: [
      { value: 1, label: "Yes", trigger: "22" },
      { value: 2, label: "No", trigger: "23" },
    ],
    hideInput: true,
  },
  {
    id: "23",
    message: "Fine, see you soon 😊",
    hideInput: true,
    end: true,
  },
  {
    id: "22",
    message: "Great! Choose an option 👇🏼",
    hideInput: true,
    trigger: "24",
  },
  {
    id: "24",
    options: [
      { value: 1, label: "Our stores", trigger: "25" },
      // { value: 2, label: "About us", trigger: "26" },
    ],
    hideInput: true,
  },
  {
    id: "25",
    message:
      "We have six physicals stores. Three are in Colombian and the other three are in Argentina. If you want to know more about our physicals stores, please do click in location",
    hideInput: true,
    trigger: "27",
  },
  {
    id: "27",
    message: "Do you want to know more about us?",
    hideInput: true,
    trigger: "28",
  },
  {
    id: "28",
    options: [
      { value: 1, label: "Yes", trigger: "29" },
      { value: 2, label: "No", trigger: "30" },
    ],
    hideInput: true,
  },
  {
    id: "30",
    message: "Fine, see you soon 😊",
    hideInput: true,
    end: true,
  },
  {
    id: "29",
    message: "Great! Choose an option 👇🏼",
    hideInput: true,
    trigger: "31",
  },
  {
    id: "31",
    options: [{ value: 1, label: "About us", trigger: "32" }],
    hideInput: true,
  },
  {
    id: "32",
    message:
      "Everyones store is an online-only retailer that offers customers a comprehensive selection of the latest consumer electronics products, detailed product descriptions and images, as well as how-to information and customer reviews.",
    hideInput: true,
    trigger: "33",
  },
  {
    id: "33",
    message: "That is all {previousValue}, bye 👋🏼",
    hideInput: true,
    end: true,
  },
];
