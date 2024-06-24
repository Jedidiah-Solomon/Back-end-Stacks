const politicalParties = ["PDP", "CPC", "APC", "AD", "LP", "APGA"];

console.log(`${politicalParties} is a/an: ${typeof politicalParties}`);
console.log(politicalParties); //

const numOfPoliticalParties = politicalParties.length;
console.log(numOfPoliticalParties); //6

console.log(politicalParties[0]); //PDP
console.log(politicalParties[1]);
console.log(politicalParties[5]);
console.log(politicalParties[6]); //undefined
console.log(politicalParties[-1]); //undefined

politicalParties.push("ACN"); //add to end
console.log(politicalParties, politicalParties.length);

politicalParties.unshift("CCN"); //add to begin
console.log(politicalParties, politicalParties.length);

politicalParties.pop(); //remove from end
//politicalParties.pop("PDP"); //Not-possible
console.log(politicalParties, politicalParties.length);

politicalParties.shift(); //remove from begin
console.log(politicalParties, politicalParties.length);

const newPoliticalParties = [
  "PDP",
  "CPC",
  24,
  "AD",
  true,
  ["Rice", "Beans", "All Foods"],
  { id: 1, Name: "Amaka Uku", Age: 25, isEmployed: true },
  "APGA",
  null,
  undefined,
];

console.log(newPoliticalParties[2]);
console.log(typeof newPoliticalParties[2]);

console.log(newPoliticalParties[4]);
console.log(typeof newPoliticalParties[4]);

console.log(newPoliticalParties[5]);
console.log(typeof newPoliticalParties[5]);

console.log(newPoliticalParties[6]);
console.log(typeof newPoliticalParties[6]);

console.log(newPoliticalParties[8]);
console.log(typeof newPoliticalParties[8]);

console.log(newPoliticalParties[9]);
console.log(typeof newPoliticalParties[9]);

console.log(newPoliticalParties.indexOf("CPC")); //1
console.log(newPoliticalParties.indexOf("PPP")); //-1

for (let i = 0; i < politicalParties.length; i++) {
  const element = politicalParties[i];
  console.log(element);
}
console.log("new area");
for (let i = 3; i < politicalParties.length; i++) {
  const element = politicalParties[i];
  console.log(element);
}
console.log("new area");

console.log(politicalParties);
for (let i = 1; i < politicalParties.length - 2; i++) {
  const element = politicalParties[i];
  console.log(element);
}

let sorterEngine = politicalParties.sort();
console.log(sorterEngine);

let reverserEngine = politicalParties.reverse();
console.log(reverserEngine);

console.log(politicalParties);

const newBay = ["Man", "Girl", "Boy", "Woman", "Girl"];
const lastNewBay = newBay.lastIndexOf("Girl");
console.log(lastNewBay); //4
console.log(newBay.indexOf("Girl")); //1
//console.log(newBay.findIndex("Girl")); //

let sliceBay = newBay.slice(1, 3);
console.log(sliceBay);

console.log(Array.isArray(newBay));

const arr = Array.of(1, 2, 3);
console.log(arr); // Output: [1, 2, 3]

//array constructor
const array1 = Array(7);
console.log(array1); // Output: [empty × 7]
console.log(array1.length); // Output: 7

console.log(array1.push(4));
console.log(array1); // Output:  [empty × 7, 4]
console.log(array1.length); // Output: 8

const sparseArray = Array(7);
console.log(sparseArray); // Output: [empty × 7]
console.log(sparseArray.length); // Output: 7

sparseArray.push(4);
console.log(sparseArray); // Output: [empty × 7, 4]
console.log(sparseArray.length); // Output: 8

// Iterating over the array with forEach
sparseArray.forEach((element, index) => {
  console.log(`Index ${index}:`, element);
});
// Output:
// Index 7: 4
// (only logs the value 4, skipping the empty slots)

// Accessing an empty slot directly
console.log(sparseArray[0]); // Output: undefined
console.log(sparseArray[1]); // Output: undefined
// But note that these are empty slots, not explicitly set to undefined

const array2 = Array(1, 2, 3);
console.log(array2); // Output: [1, 2, 3]
console.log(array2.length); // Output: 3

const array3 = Array.of(7);
console.log(array3); // Output: [7]

const array4 = Array.of(1, 2, 3);
console.log(array4); // Output: [1, 2, 3]

//---------------//
const Guests = ["Man", "Girl", "Boy", "Woman", "Girl"];

console.log("Guests instanceof Array: ", Guests instanceof Array); // Output: true
console.log("Guests instanceof String: ", Guests instanceof String); // Output: false
console.log("Guests instanceof String: ", Guests instanceof Object); // Output: true
console.log("Guests instanceof String: ", Guests instanceof Boolean); // Output: false

Guests.forEach((guest, index) => {
  const box = document.createElement("p");
  box.textContent = `You are Guests ${guest} at index: ${index}`;
  document.body.appendChild(box);
});

/*
console.log(Guests.indexOf("Girl", 2)); //Find the 2nd Girl index.

const girls = Guests.filter((guest) => guest === "Girl");
console.log(girls); // Output: ["Girl", "Girl"]

const index = Guests.indexOf("Girl", Guests.indexOf("Girl") + 1); //4
if (index !== -1) {
  Guests.splice(index, 1);
}
console.log(Guests); // Output: ["Man", "Girl", "Boy", "Woman"]

Guests.splice(1, 1, "Kid"); // This means starting at index 1, remove one element, and insert "Kid" at that position.
console.log(Guests); // Output: ["Man", "Kid", "Boy", "Woman"]
*/
const mentees = [
  "Bolaji",
  "Peter",
  "Jude",
  "Wendi",
  "Paul",
  "Peter",
  "Constance",
];

//const moon = mentees.slice(2, 5);//from 2nd-4th excluding 5th
//console.log(moon);// ['Jude', 'Wendi', 'Paul']

//const moon = mentees.slice(1, 6);
//console.log(moon); // ['Peter', 'Jude', 'Wendi', 'Paul', 'Peter']

//console.log(mentees); //['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul', 'Peter', 'Constance']

//mentees.splice(2, 1, "Gate"); // ['Bolaji', 'Peter', 'Gate', 'Wendi', 'Paul', 'Peter', 'Constance']
//console.log(mentees);

//mentees.splice(2, 3, "Maths"); // ['Bolaji', 'Peter', 'Maths', 'Peter', 'Constance']
//console.log(mentees);

//mentees.splice(2, 3, "Maths", "Door"); // ['Bolaji', 'Peter', 'Maths', 'Door', 'Peter', 'Constance']
//console.log(mentees);

//mentees.splice(2, 1); //['Bolaji', 'Peter', 'Wendi', 'Paul', 'Peter', 'Constance']
//console.log(mentees);

//mentees.splice(2, 3); //  ['Bolaji', 'Peter', 'Peter', 'Constance']
//console.log(mentees);

//mentees.splice(2, 4); // ['Bolaji', 'Peter', 'Constance']
//console.log(mentees);

//const newMentees = mentees.splice(2, 1, "Bishop");
//console.log(newMentees); //Jude
//mentees.mentees.splice(1, 1, "Humphrey");
//mentees.mentees.splice(2, 1, "Bishop");
//console.log(mentees);

const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("demo").innerHTML =
  (cars instanceof Array) +
  "<br>" +
  (cars instanceof Object) +
  "<br>" +
  (cars instanceof String) +
  "<br>" +
  (cars instanceof Number);

//REDUCE METHOD
//SYNTAX
//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

/*

callback: A function to execute on each element in the array, taking four arguments:
accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue if supplied.
currentValue: The current element being processed in the array.
currentIndex (optional): The index of the current element being processed in the array.
array (optional): The array reduce was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped. Calling reduce on an empty array without an initial value will throw a TypeError.*/

//Sum
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15

//mAX
const max = numbers.reduce(
  (accumulator, currentValue) =>
    currentValue > accumulator ? currentValue : accumulator,
  -Infinity //-Infinity. This ensures that any number in the array will be greater than the initial accumulator, so the comparison starts correctly.
);
console.log(max); // Output: 5

//MIN
const min = numbers.reduce(
  (accumulator, currentValue) =>
    currentValue < accumulator ? currentValue : accumulator,
  Infinity
);
console.log(min); // Output: 1

/*
Detailed Iteration Breakdown
Initial state:

accumulator = -Infinity
currentValue = 1
Since 1 > -Infinity, the new accumulator is 1.

Second iteration:

accumulator = 1
currentValue = 2
Since 2 > 1, the new accumulator is 2.

Third iteration:

accumulator = 2
currentValue = 3
Since 3 > 2, the new accumulator is 3.

Fourth iteration:

accumulator = 3
currentValue = 4
Since 4 > 3, the new accumulator is 4.

Fifth iteration:

accumulator = 4
currentValue = 5
Since 5 > 4, the new accumulator is 5.

After the final iteration, the accumulator holds the value 5, which is the maximum value in the array.

Understanding -Infinity
-Infinity is a special value in JavaScript that represents negative infinity. 
It is a built-in constant in JavaScript and belongs to the global object. 
It is used to represent a value that is less than any other number.

Properties and Characteristics
Type: The type of -Infinity is number.
Comparison: Any finite number is greater than -Infinity. This means that in any numerical comparison, -Infinity will be the smallest possible value.
Mathematical Operations:
Adding or subtracting any finite number to/from -Infinity will still result in -Infinity.
Multiplying -Infinity by any positive finite number results in -Infinity.
Multiplying -Infinity by any negative finite number results in Infinity.

Properties and Characteristics OF Infinity
Type: The type of Infinity is number.
Comparison: Any finite number is less than Infinity. This means that in any numerical comparison, Infinity will be the largest possible value.
Mathematical Operations:
Adding or subtracting any finite number to/from Infinity will still result in Infinity.
Multiplying Infinity by any positive finite number results in Infinity.
Multiplying Infinity by any negative finite number results in -Infinity.
Dividing any positive finite number by Infinity results in 0.
Dividing any negative finite number by Infinity results in -0.

console.log(Infinity > 1000); // true
console.log(Infinity > Number.MAX_VALUE); // true
console.log(Infinity + 1); // Infinity
console.log(Infinity * 2); // Infinity
console.log(Infinity * -1); // -Infinity
console.log(1 / Infinity); // 0
console.log(-1 / Infinity); // -0


//MIN
Let's go through the iterations to see how it works in practice.

Initial Value:

accumulator starts as Infinity.
First Iteration:

currentValue = 1
Condition: 1 < Infinity (true)
Result: accumulator becomes 1 (new minimum value)
Second Iteration:

currentValue = 2
Condition: 2 < 1 (false)
Result: accumulator remains 1
Third Iteration:

currentValue = 3
Condition: 3 < 1 (false)
Result: accumulator remains 1
Fourth Iteration:

currentValue = 4
Condition: 4 < 1 (false)
Result: accumulator remains 1
Fifth Iteration:

currentValue = 5
Condition: 5 < 1 (false)
Result: accumulator remains 1

*/

//Counting how many times
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const nameCount = names.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});
console.log(nameCount); // Output: { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

/*
Example Iterations:
Let's walk through the iterations:

Initial Value:

acc = {}
First Iteration (name = "Alice"):

acc["Alice"] = (acc["Alice"] || 0) + 1
acc["Alice"] is undefined, so it defaults to 0
acc["Alice"] = 0 + 1 = 1
acc = { Alice: 1 }
Second Iteration (name = "Bob"):

acc["Bob"] = (acc["Bob"] || 0) + 1
acc["Bob"] is undefined, so it defaults to 0
acc["Bob"] = 0 + 1 = 1
acc = { Alice: 1, Bob: 1 }
Third Iteration (name = "Tiff"):

acc["Tiff"] = (acc["Tiff"] || 0) + 1
acc["Tiff"] is undefined, so it defaults to 0
acc["Tiff"] = 0 + 1 = 1
acc = { Alice: 1, Bob: 1, Tiff: 1 }
Fourth Iteration (name = "Bruce"):

acc["Bruce"] = (acc["Bruce"] || 0) + 1
acc["Bruce"] is undefined, so it defaults to 0
acc["Bruce"] = 0 + 1 = 1
acc = { Alice: 1, Bob: 1, Tiff: 1, Bruce: 1 }
Fifth Iteration (name = "Alice"):

acc["Alice"] = (acc["Alice"] || 0) + 1
acc["Alice"] is 1 (from the first iteration)
acc["Alice"] = 1 + 1 = 2
acc = { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
*/

//Flatten array of arrays
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrays.reduce((acc, val) => acc.concat(val), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

/*

Example Iterations:
Let's walk through the iterations:

Initial Value:

acc = []
First Iteration (val = [1, 2]):

acc.concat(val)
[].concat([1, 2]) results in [1, 2]
acc = [1, 2]
Second Iteration (val = [3, 4]):

acc.concat(val)
[1, 2].concat([3, 4]) results in [1, 2, 3, 4]
acc = [1, 2, 3, 4]
Third Iteration (val = [5, 6]):

acc.concat(val)
[1, 2, 3, 4].concat([5, 6]) results in [1, 2, 3, 4, 5, 6]
acc = [1, 2, 3, 4, 5, 6]
*/

//Concatenate all names into a single string
const mentees2 = [
  "Bolaji",
  "Peter",
  "Jude",
  "Wendi",
  "Paul",
  "Peter",
  "Constance",
];

const allNames = mentees2.reduce((acc, name) => acc + " " + name, "");
console.log(allNames); // Output: " Bolaji Peter Jude Wendi Paul Peter Constance"
console.log(allNames.trim()); //"Bolaji Peter Jude Wendi Paul Peter Constance"

//Creating an array of unique names
const mentees3 = [
  "Bolaji",
  "Peter",
  "Jude",
  "Wendi",
  "Paul",
  "Peter",
  "Constance",
];

const uniqueNames = mentees3.reduce((acc, name) => {
  if (!acc.includes(name)) {
    acc.push(name);
  }
  return acc;
}, []);
console.log(uniqueNames); // Output: ['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul', 'Constance']
console.log(typeof uniqueNames); //object array

/*
Iteration 1:
Iteration Input: acc = [], name = 'Bolaji'
Condition Check: Since acc is empty, it doesn't include 'Bolaji'.
Action: 'Bolaji' is pushed into acc.
Updated acc: ['Bolaji']
Iteration 2:
Iteration Input: acc = ['Bolaji'], name = 'Peter'
Condition Check: Since acc contains 'Bolaji' but not 'Peter'.
Action: 'Peter' is pushed into acc.
Updated acc: ['Bolaji', 'Peter']
Iteration 3:
Iteration Input: acc = ['Bolaji', 'Peter'], name = 'Jude'
Condition Check: Since acc does not include 'Jude'.
Action: 'Jude' is pushed into acc.
Updated acc: ['Bolaji', 'Peter', 'Jude']
Iteration 4:
Iteration Input: acc = ['Bolaji', 'Peter', 'Jude'], name = 'Wendi'
Condition Check: Since acc does not include 'Wendi'.
Action: 'Wendi' is pushed into acc.
Updated acc: ['Bolaji', 'Peter', 'Jude', 'Wendi']
Iteration 5:
Iteration Input: acc = ['Bolaji', 'Peter', 'Jude', 'Wendi'], name = 'Paul'
Condition Check: Since acc does not include 'Paul'.
Action: 'Paul' is pushed into acc.
Updated acc: ['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul']
Iteration 6:
Iteration Input: acc = ['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul'], name = 'Peter'
Condition Check: Since acc already includes 'Peter'.
Action: 'Peter' is not pushed into acc.
Updated acc: ['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul'] (unchanged)
Iteration 7:
Iteration Input: acc = ['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul'], name = 'Constance'
Condition Check: Since acc does not include 'Constance'.
Action: 'Constance' is pushed into acc.
Updated acc: ['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul', 'Constance']
Final Result:
After all iterations, uniqueNames contains ['Bolaji', 'Peter', 'Jude', 'Wendi', 'Paul', 'Constance'].*/

let x = "";
let y = null;
let z = undefined;

console.log(x, y, z);
console.log(typeof x, typeof y, typeof z); //string , object, undefined

/*Use null when you want to explicitly represent the absence of a value or indicate that a variable intentionally has no value. For example, if a variable is meant to hold an object but has not been initialized, you might set it to null.
Use undefined when a variable has not been initialized, or when a function returns no value. In many cases, JavaScript will automatically set variables to undefined if they have not been assigned a value explicitly.*/

const userInput = prompt("Please enter something:");

if (userInput === null) {
  // User cancelled the prompt or provided no input
  console.log("No input provided.");
} else {
  // User provided input
  console.log("User input:", userInput);
}

//map() ---   The map() method creates a new array by applying a function to each element of the original array.
const numbers4 = [1, 2, 3, 4, 5];

const doubled = numbers4.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
//The filter() method creates a new array with all elements that pass a test specified by a function.
const evenNumbers = numbers4.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//forEach(): The forEach() method executes a provided function once for each array element.
numbers4.forEach((num) => console.log(num * 2));
// Output:
// 2
// 4
// 6
// 8
// 10

//find(): The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

const found = numbers4.find((num) => num > 3);

console.log(found); // Output: 4

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit); //Apple, note it is same as let fruit = fruits[2];

let allFruits = fruits.join(" * "); //* as a delimiter
console.log(allFruits);
console.log(typeof allFruits); //string

//The JavaScript method toString() converts an array to a string of (comma separated) array values.

let stringFruits = fruits.toString();
console.log(stringFruits); //Banana,Orange,Apple,Mango
console.log(typeof stringFruits); //string

//delete
//delete fruits[0]; //not a good one, use pop/shift

//concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

//The copyWithin() method copies array elements to another position in an array:

//Copy to index 2, all elements from index 0:
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let ment = fruits6.copyWithin(2, 0);
console.log(ment); //Banana,Orange,Banana,Orange

//Copy to index 2, the elements from index 0 to 2:
const fruits7 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
let ment2 = fruits7.copyWithin(2, 0, 2);
console.log(ment2); //Banana,Orange,Banana,Orange,Kiwi,Papaya

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9, 10],
];
const newArr = myArr.flat();
console.log(newArr);

let evenNum = newArr.find(myFunction);
console.log(`The first even no is ${evenNum}`); //2

function myFunction(value, index, array) {
  return value % 2 === 0;
}

let evenNum2 = newArr.findIndex(myFunction2);
console.log(`The first even no iNDEX IS  ${evenNum2}`); //1

function myFunction2(value, index, array) {
  return value % 2 === 0;
}

let evenNum3 = newArr.findLast(myFunction3);
console.log(`The last even no  IS  ${evenNum3}`); //10

function myFunction3(value, index, array) {
  return value % 2 === 0;
}

//--------------same with findLastIndex() --------//

const months = ["Jan", "Feb", "March", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

let firstMon = months.includes("Jan"); //true
console.log(firstMon);
