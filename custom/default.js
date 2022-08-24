/* function math(a, b = 10){
    console.log(a, b)
    b = (typeof b !== 'undefined') ?  b : 1
    const multiply = a * b;
    return multiply;
}
const result = math(2,20);
console.log(result);
 */

function math(a, b){
    // console.log(a, b)
    if(b === undefined){
        b = 50;
    }
    const total = a + b;
    return total;
}
const result = math(20);
// console.log(result);

function userName(firstName, lastname = 'takbir'){
    const fullName = firstName + ' ' + lastname;
    return fullName;
}
const name = userName('mohammed')
console.log(name)