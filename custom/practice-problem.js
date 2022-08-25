// * problem 1.1
// ? Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiply = (a, b, c) => {
    const result = a * b * c;
    return result;
}
const result = multiply(2, 2, 2)
// console.log(result)

// * problem 1.2
// ? Write the following sentence in three lines and print the result:
// ? I am a web developer. I love to code. I love to eat biryani.
const multiLine = `
I am a web developer.
I love to code.
I love to eat biryani.
`
// console.log(multiLine)

// * problem 1.3
// ? Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const defaultParameter = (a, b = 10) => {
    // console.log(a,b)
    return a, b;
}
const result1 = defaultParameter(5);
// console.log(result1)

// * problem 2
// ? Write an arrow function where it will do the following:
// ?    a) It will take an array where the array elements will be the name of your friends
// ?    b) Check if the length of each element is even, push elements with even length to a new array and return the result
// ? Print the result.

const friends = ['abul', 'babul', 'nastabul', 'araku', 'mokabul'];

const findEven = (friends) => {
    let newArray = []
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newArray.push(friend)
        }
    }
    return newArray;
}
const result2 = findEven(friends);
// console.log(result2)

// * problem 3
// ? Write an arrow function where it will do the following:
// ? a) Square each array element
// ? b) Calculate the sum of the squared elements
// ? c) Return the average of the sum of the squared elements
// ? Print the result.

const numebrArray = [2, 3, 4];

const square = (elements) => {
    let sum = 0;
    for(const element of elements){
        const squareElement = element ** 2;
        sum += squareElement;
    }
    const average = sum / elements.length;
    return average;
}
const result3 = square(numebrArray);
// console.log(result3)

// * problem 4
// ? Write an arrow function where it will do the following:
// ? a) It will take two array inputs
// ? b) Combine the two arrays and assign them in a new array
// ? c) Find the maximum number from the new array and return the result
// ? Print the result.

const firstArray = [92, 73, 68, 70, 28, 67];
const secondArray = [47, 98, 89, 44, 90]

const findMaximum = (arr1, arr2) => {
    const combine = [...arr1, ...arr2];
    const largest = Math.max(...combine);
    return largest;
}
const result4 = findMaximum(firstArray, secondArray);
console.log(result4); 