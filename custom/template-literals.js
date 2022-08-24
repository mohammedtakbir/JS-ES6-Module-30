const multiline = 
'Porche 911 \n' +
'Nissan GTR35 \n' +
'BMW M8 \n' +
'Audi RS7';
// console.log(multiline);
// ? multiline-string(``)
const newMultiLine =`Porche 911
Nissan GTR35
BMW M8
Audi RS7`;
// console.log(newMultiLine);

const a = 20;
const b = 30;
// const total = 'sum of '+a+' and '+b+' is '+(a+b);
const numbers = [324, 45, 742, 260]
const student = {
    name: 'takbir',
    age: 22,
    address: 'Narayanganj'
}
// console.log(total);
// ? string interpolation ${expression}
// const summery = `sum of ${Math.max(...numbers)} and ${b} is ${a+b}`;
const summery = `sum of ${numbers.length} and ${student.age} is ${a+b}`;
// console.log(summery);

// * With template literals, you can use both single and double quotes inside a string:
const text = `he's often called "bachal"`;

// ? Expression Substitution
let price = 10;
let vat = 0.25;
let total = `Total: ${(price * vat).toFixed(2)}`;
console.log(total);
