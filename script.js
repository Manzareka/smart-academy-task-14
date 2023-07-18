// Task 1
const numberArrays = [2, 4, 6, 8, 10, 12];
numberArrays.pop();
numberArrays.unshift(12);
console.log(numberArrays);

// Task 2
const productList = [
  { productTitle: "TV", productPrice: 800 },
  { productTitle: "Laptop", productPrice: 1200 },
  { productTitle: "Playstation", productPrice: 1400 },
];
console.log(productList);

// Task 3
const numbers = [46, 122, 74, 8, 64];
const average =
  (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]) /
  numbers.length;
console.log(average);

// Task 4
const phone = {
  phoneName: "Samsung",
  phoneDescription: "Android",
  phonePrice: 1500,
  shopAddresses: ["Tbilisi Mall", "Batumi Plaza"],
  phoneMemoryInGB: 128,
};
console.log(phone);

// Task 5
console.log(
  `Phone name is ${phone.phoneName}, phone price is ${phone.phonePrice}, and you can buy it at ${phone.shopAddresses[0]}.`
);
