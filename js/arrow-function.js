// * function declaration
// ?The function declaration (function statement) defines a function with the specified parameters.
function add(first, second){
    const total = first + second;
    return total;
}
// * function expression
// ? The function keyword can be used to define a function inside an expression.
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}
// * function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}

const add3 = function add1(first, second){
    const total = first + second;
    return total;
}
// ? use this 
const add4 = function(first, second){
    return first + second;
}
// * arrow function
const add5 = (first, second) => first + second;
