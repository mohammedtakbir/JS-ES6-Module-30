// * function declaration
function add(first, second){
    const total = first + second;
    return total;
}
// ? function declarations are hoisted
/* const result = test(2, 4);
console.log(result)
function test(a, b){
    const multiply = a * b;
    return multiply;
} */

// * function expression
const add1 = function(first, second){
    const total = first * second;
    return total;
}
// ? function expressions are not hoisted
/* const result = test(2, 4);
console.log(result)
const test = function (a, b){
    const multiply = a * b;
    return multiply;
} */

// * function expression with anonymous function
/* const add3 = function(first, second){
    const result = first + second;
    return result;
} */

// * arrow function
/* const add4 = (first, second) => first + second;
console.log(typeof add4)
const result = add4(20, 10);
console.log(result);
 */
// ? more arrow function
const getFullName = (firstName, lastName) => firstName + ' ' + lastName;

// * no parameter arrow function
const add5 = () => 45;

// * one parameter arrow function
const add6 = num => num * 5;

// * multiple arrow function
/* math = (a, b, c) => {
    const total = a + b + c
    const average = total / 3;
    return average;
}
const result = math(2, 2, 2);
console.log(result); */