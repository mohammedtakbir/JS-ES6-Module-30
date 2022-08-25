// * object destructuring
/* const fish = {
    name: 'Hilsha',
    address: 'Chandpur',
    color: 'silver',
    price: 2000,
    phone: '0196357871'
}
/* const name = fish.name;
const phone = fish.phone;
console.log(name, phone) */
// const {name, color, phone, price, ...x} = fish;
// console.log(x);

// const {prefession} = {name: "takbir", age: 22, prefession: 'programmer'};
// console.log(prefession) */

/* const numbers = [34, 45, 56, 67, 88, 89, 90];
const [first, second, third, ...z] = numbers;
// console.log(z)

const [great, best, better] = ['Porche 911', 'M8 Competition', 'Nissan GTR'];
console.log(great) */

// * array and object destructuring with WDS

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6']

// ? new way
// const [a, b] = alphabet;

// ? skip the element
// const [a, , c] = alphabet;

// ? rest of the element

const [a, ,  c, ...rest] = alphabet;

// ? combine the two arrays
const newArray = alphabet.concat(numbers)
// const newArray = [...alphabet, ...numbers]
// console.log(newArray)
// ? old way
/* const a = alphabet[0]
const b = alphabet[1] */
// console.log(a,c, rest)

function sumAndMultiply(a, b){
    return [a+b, a*b]
}
const [sum, array] = sumAndMultiply(2, 3);
// console.log(sum, array)

// ? object destructuring
/* const personOne = {
    name: 'takbir',
    age: 22,
    address: {
        city: 'Somewhere',
        state: 'no state'
    }
} */
/* const presonTwo = {
    name: 'Sally',
    age: 32,
    favouriteFood: 'water', // ? no longer have the default value
    address: {
        city: 'Somewhere else',
        state: 'no state here'
    }
} */
// const {name: firstName, age} = presonTwo // ? here the variabke name is firstName
// ? we can set default valeus here
// const {name: firstName, age, favouriteFood = 'rice'} = presonTwo; 
// console.log(presonTwo);
// console.log(favouriteFood)
// console.log(firstName, age);

// const {name, ...x} = presonTwo;
/* const {name: firstName, address: { city } } = presonTwo; */

// console.log(address);

const personOne = {
    name: 'takbir',
    age: 22,
    address: {
        city: 'Somewhere',
        state: 'no state'
    }
}

function printUser({name, age}){
    console.log(`name is ${name}. Age is ${age}`)
}
printUser(personOne);








