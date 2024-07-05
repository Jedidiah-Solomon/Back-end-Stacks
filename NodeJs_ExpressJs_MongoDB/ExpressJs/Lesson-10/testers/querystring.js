import querystring from "querystring";

// Parsing
const parsed = querystring.parse("name=John&age=30&city=New+York");
console.log(parsed);
// Output: { name: 'John', age: '30', city: 'New York' }

// Stringifying
const stringified = querystring.stringify({
    name: "John",
    age: 30,
    city: "New York",
});
console.log(stringified);
// Output: 'name=John&age=30&city=New+York'

/*
$node testers/querystring.js

[Object: null prototype] { name: 'John', age: '30', city: 'New York' }

name=John&age=30&city=New%20York

*/
