const person1 = 'Donald Trump'
const person2 = "Obama"
const person3 = `Joe baiden`

const multiline = 
'first line \n' + 
'second line \n' +
'third line \n' +
'fourth line';
// console.log(multiline);
// ? do multiline using multiline using multi-line-string(``) 
const newMultiLine = 
`this is first line 
and this second line
again this is third line
and lastly this is fourth line with backtick
`;
// console.log(newMultiLine);

const a = 20;
const b = 30;
const summery = 'sum of ' + a + ' and ' + b + ' is ' + (a+b);
// console.log(summery);
const nums = [45, 96, 24, 79]
// const newSummery = `sum of ${a} and ${b} is ${a+b}`;
// const newSummery = `sum of ${nums[3]} and ${b} is ${a+b}`;
const newSummery = `sum of ${nums.length} and ${b} is ${a+b}`;
console.log(newSummery);