// * object destructuring
const fish = {
    name: 'Hilsha',
    address: 'Chandpur',
    color: 'silver',
    price: 2000,
    phone: '0196357871'
}
const {color} = fish;
const color1 = fish.color
// console.log(color)
// console.log(color1)

// const name = fish.name;
// const color = fish.color;
// const phone = fish.phone;
// console.log(name, color, phone)

const {age} = {name: 'takbir', age: 22, profession: 'programmer'}
// console.log(age);

const {address} = fish;
// console.log(address);

// * array destructuring
const [first, second] = [95, 04, 39, 012, 58];
// console.log(first, second);

const players = ['virat', 'mithun', 'mushfik'];
const [king, lost, pakna] = players;
// console.log(pakna);

function getNames(){
    return ['olil', 'jolil']
}
const [brother1, brother2] = getNames();
// console.log(brother2, brother1);

// const [x,y,...z] = [34, 45, 77, 78, 67, 89, 73]; //* rest of the element from array will take z variable
// console.log(z);

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const nayikas2 = [...nayikas];
console.log(nayikas2)