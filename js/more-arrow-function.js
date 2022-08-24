const add = (first, second) => first + second;
const getFullName = (firstName, lastName) => firstName + ' ' + lastName;
const multiply = (a, b) => (a*b);
const result = multiply(5, 4);
// console.log(result);

// * no parameter arrow function
const getPie = () => 3.14;

// * with arrow function
hellow = () => {
    return 'Hellow World!'
}
const test = hellow();
// console.log(test)

// * one parameter
const doubleIt = (num) => num * 2;

// * one parameter simple version
const fiveTimes = num => num * 2
 
// * multiline arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result; //* use the return statement
}
const result1 = doMath(2, 2, 2);
// console.log(result1);

