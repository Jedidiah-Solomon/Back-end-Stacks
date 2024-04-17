
/*hello(goodBye);//This will call goodbye after hello

function hello(callback) {
    console.log('Hello');
    callback();
}
function goodBye() {
    console.log('Goodbye');
}*/


/*sum(dispplayResult, 5, 6);

function sum(callback, num1, num2) {
    let result = num1 + num2;
    callback(result);
}

function dispplayResult(result) {
    document.getElementById('calcResult').textContent = result;
    console.log(result);
    
}
*/

/*
let fruits = ['apple','orange', 'mango', 'coconut'];// create an array

fruits.forEach(upperCase);// Do this first then
fruits.forEach(display);// do this

// js gives us: element, index, array in every array to use
//this function converts each elemnt of the array at each index position to upper case
function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}
// Display function to use as callback after changed to uppercase
function display(element) {
    console.log(element);
}

*/


// .map() method is like .forEach() method, but it returns a new array unlike forEach

/*const numbers = [1, 2, 3, 4, 5];
const oldSqures = numbers.forEach(square);
const squares = numbers.map(square);

console.log(numbers);
console.log(oldSqures);// undefined bc forEach does not return anything
console.log(squares);//1, 4,9,16,25

function square(element) {
    return Math.pow(element, 2);
}*/

/*
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.forEach(square);

console.log(squares);//undefined
console.log(numbers);// this will give the result

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}
*/
// Format dates in USA Format of yyyy-mm-dd to dd-mm-yyyy as Nigeria
/*const dates = ['2024-16-1', '2025-20-10','2026-8-12'];

const formattedDates = dates.map(formatDates);
console.log(formattedDates);
console.log(`The USA Dates: ${dates}`);
console.log(`The Nigeria Dates: ${formattedDates}`);

function formatDates(element) {
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}*/
// filter
/*let numbers = [1,2,3,4,5,6,7,8,9,10]
let evenNums = numbers.filter(isEven);
console.log(evenNums);



function isEven(element) {
    return element % 2 === 0;
}
*/

// reduce methode reduce elements of an array to a single element

const prices = [20, 45, 15, 5, 5, 25, 18, 10];

const total = prices.reduce(sum);
console.log(`The Total is: $${total.toFixed(2)}`);

function sum(previousNum, newNum) {
    return previousNum + newNum;
}
