/* function add(first, second){
    console.log(first, second);
    second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
} */
// const result = add(10);
// console.log(result);

function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
const result = add(0,10);
// console.log(result);
function fullName(fName, lName = 'Chowdhury'){
    const name = fName + ' ' + lName;
    return name;
}
const name = fullName('Kabir');
console.log(name);
