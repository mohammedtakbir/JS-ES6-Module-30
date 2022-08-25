const max = Math.max(34 ,45, 12, 56, 45, 56, 67);
// console.log(max);
const numbers = [23, 34, 45, 56, 67, 8, 88];
// console.log(...numbers)
const largest = Math.max(...numbers);
// console.log(largest);
const numbers2 = [400,...numbers, 90, 555];
numbers.push(900)
numbers2.push(999);
// console.log(numbers2)
// console.log(numbers)

// ? combine these two array

const array1 = [45, 54, 36, 98, 25]
const array2 = [9, 8, 7, 6, 5]
const array3 = [...array1, ...array2];
// console.log(array3)

// ? combine these two objects

const myCar = {
    brand: 'Tesla',
    model: 'S',
    color: 'Black'
}
const updateMyCar = {
    year: '2022',
    color: 'Matte Black'
}

// const updatedCar = {...myCar, ...updateMyCar};
const updatedCar = {...updateMyCar, ...myCar};
console.log(updatedCar)