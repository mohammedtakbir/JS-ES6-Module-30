// breakup with var
// no more use of var 
// let: let it to reassign
// const: do not allow to reassign

let money = 30;
money = 45;
// console.log(money)

const firstName = 'mohammed';
// name = 'takbir';
const secondName = firstName + ' takbir'
// console.log(secondName);
const numbers = [34, 56, 34, 67];
//* const: do not allow to reassign
// numbers = [54, 87, 23, 64];
// console.log(numbers)
numbers.push(99);
numbers[0] = 11;
// console.log(numbers)
numbers.pop();
// console.log(numbers)

const student = {
    name: 'mohammed',
    ID: 120
}
// student = {name: 'takbir'};
student.name = 'takbir'
// console.log(student);

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]; //! এখানে লুপ যতবার চলে ততবার এই ব্লকটাকে বানায়। এর সাথে সাথে নতুন করে const variable কেও বানায়,তখন সেই মান const variable এ set করে। এখানে const varible reassign হইতেসে না, নতুন করে সে বার বার বানাচ্ছে
    console.log(number);
}
