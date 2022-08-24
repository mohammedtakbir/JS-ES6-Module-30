const max = Math.max(34,45,56,67,23);
// console.log(max);
const numbers = [34,45,56,67,23];
// console.log(...numbers)
const largest = Math.max(...numbers);
// console.log(largest);

// const numbers2 = numbers;
// const numbers2 = [...numbers];
const numbers2 = [98, 20, ...numbers, 45, 34];
numbers.push(99)
numbers2.push(555);
console.log(numbers)
console.log(numbers2)