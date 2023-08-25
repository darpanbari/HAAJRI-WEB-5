const bankData = [
  {
    BANK: "SBI",
    HOLDER_NAME: "rajodiya info",
    BALANCE: "$505,400.0",
  },
  {
    BANK: "SBI",
    HOLDER_NAME: "Carissa Valenzuela",
    BALANCE: "$34,470.0",
  },
  {
    BANK: "Melissa Gomez",
    HOLDER_NAME: "Renee Ingram",
    BALANCE: "$363,500.0",
  },
  {
    BANK: "Malcolm Welch",
    HOLDER_NAME: "Wendy Miller",
    BALANCE: "$62,777.5",
  },
  {
    BANK: "BOB",
    HOLDER_NAME: "Preston Perez",
    BALANCE: "$-35,110.0",
  },
  {
    BANK: "Katelyn Cooper",
    HOLDER_NAME: "Perry Bowman",
    BALANCE: "$95,500.0",
  },
];

const expenseData = [
  {
    DATE: "11-08-2023",
    BALANCE: "$505,400.0",
  },
  {
    DATE: "12-08-2023",
    BALANCE: "$34,470.0",
  },
  {
    DATE: "13-08-2023",
    BALANCE: "$363,500.0",
  },
  {
    DATE: "14-08-2023",
    BALANCE: "$62,777.5",
  },
  {
    DATE: "15-08-2023",
    BALANCE: "$-35,110.0",
  },
  {
    DATE: "16-08-2023",
    BALANCE: "$95,500.0",
  },
];

const invoiceData = [
  {
    ID: "#INVO0001",
    CUSTOMER: "Buffy Walter",
    ISSUE_DATE: "24-08-2023",
    DUE_DATE: "24-08-2023",
    AMOUNT: "$157.5",
    STATUS: "Draft",
  },
  {
    ID: "#INVO0002",
    CUSTOMER: "Fapor Slims",
    ISSUE_DATE: "16-08-2023",
    DUE_DATE: "16-11-2023",
    AMOUNT: "$4,370.0",
    STATUS: "Sent",
  },
  {
    ID: "#INVO0003",
    CUSTOMER: "Buffy Walter",
    ISSUE_DATE: "20-05-2023",
    DUE_DATE: "30-08-2023",
    AMOUNT: "$103,995.0",
    STATUS: "Partially Paid",
  },
  {
    ID: "#INVO0004",
    CUSTOMER: "Buffy Walter",
    ISSUE_DATE: "19-05-2023",
    DUE_DATE: "19-05-2023",
    AMOUNT: "$1,042,850.0",
    STATUS: "Partially Paid",
  },
];

const billData = [
  {
    ID: "BILL00003",
    VENDOR: "Mcdowell",
    BILL_DATE: "04-01-2024",
    DUE_DATE: "09-02-2024",
    AMOUNT: "$2,198.0",
    STATUS: "Draft",
  },
  {
    ID: "BILL00005",
    VENDOR: "Jennifer Ellison",
    BILL_DATE: "04-01-2024",
    DUE_DATE: "10-02-2024",
    AMOUNT: "$893.0",
    STATUS: "Draft",
  },
  {
    ID: "BILL00006",
    VENDOR: "Jennifer Ellison",
    BILL_DATE: "20-09-2023",
    DUE_DATE: "02-12-2023",
    AMOUNT: "$682.5",
    STATUS: "Draft",
  },
  {
    ID: "BILL00007",
    VENDOR: "Jennifer Ellison",
    BILL_DATE: "03-08-2023",
    DUE_DATE: "26-08-2023",
    AMOUNT: "$902.0",
    STATUS: "Draft",
  },
  {
    ID: "BILL00008",
    VENDOR: "Jennifer Ellison",
    BILL_DATE: "07-07-2023",
    DUE_DATE: "13-07-2023",
    AMOUNT: "$6,300.0",
    STATUS: "Draft",
  },
];

const weeklyInvoicesData = [
  {
    Total: "Invoice Generated",
    Amount: "$4,527.5"
  },
  {
    Total: "Total Paid",
    Amount: "$157.5"
  },
  {
    Total: "Total Due",
    Amount: "$4,370.0"
  }
];

const goalsData = [
  {
      name: "Plato Murray",
      type: "Bill",
      duration: { start: "2023-07-18", end: "2023-07-30" },
      target: 55000,
      progress: 14,
  },
  {
      name: "Invoice Goal",
      type: "Invoice",
      duration: { start: "2023-08-26", end: "2024-02-29" },
      target: 51000,
      progress: 4,
  },
  {
      name: "Payment Goal",
      type: "Payment",
      duration: { start: "2023-11-04", end: "2024-01-26" },
      target: 100000,
      progress: 7,
  },
  {
      name: "Revenue Goal",
      type: "Revenue",
      duration: { start: "2023-06-21", end: "2024-02-21" },
      target: 800000,
      progress: 1,
  },
];



export { bankData, expenseData, invoiceData, billData, weeklyInvoicesData, goalsData };
