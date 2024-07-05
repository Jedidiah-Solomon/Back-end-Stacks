import qs from "qs";

// Parsing
const parsed = qs.parse(
    "name=John&age=30&address[city]=New+York&address[state]=NY"
);
console.log(parsed);
// Output: { name: 'John', age: '30', address: { city: 'New York', state: 'NY' } }

// Stringifying
const stringified = qs.stringify({
    name: "John",
    age: 30,
    address: { city: "New York", state: "NY" },
});
console.log(stringified);
// Output: 'name=John&age=30&address[city]=New+York&address[state]=NY'
//--------------------------------------------------------------------------//

/*
$node testers/qs.js

{ name: 'John', age: '30', address: { city: 'New York', state: 'NY' } }

name=John&age=30&address%5Bcity%5D=New%20York&address%5Bstate%5D=NY

*/
