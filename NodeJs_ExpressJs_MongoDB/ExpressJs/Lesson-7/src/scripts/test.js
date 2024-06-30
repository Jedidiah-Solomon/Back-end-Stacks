const passwordRegex = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /\d/,
    special: /[\W_]/,
    length: /.{8,}/,
};

for (let key in passwordRegex) {
    console.log(`Property: ${key}, Regular Expression: ${passwordRegex[key]}`);
}
for (let key in passwordRegex) {
    console.log(`Property: ${key}, Regular Expression: ${passwordRegex[key]}`);
}

let biodata = { name: "Peter", Age: 30, Price: 200, isEmployed: true };

for (let key in biodata) {
    console.log(`Prooerty: ${key} and Value: ${biodata[key]}`);
}

// node src/scripts/test.js
/*
Property: uppercase, Regular Expression: /[A-Z]/
Property: lowercase, Regular Expression: /[a-z]/
Property: number, Regular Expression: /\d/
Property: special, Regular Expression: /[\W_]/
Property: length, Regular Expression: /.{8,}/
Property: uppercase, Regular Expression: /[A-Z]/
Property: lowercase, Regular Expression: /[a-z]/
Property: number, Regular Expression: /\d/
Property: special, Regular Expression: /[\W_]/
Property: length, Regular Expression: /.{8,}/

Prooerty: name and Value: Peter
Prooerty: Age and Value: 30
Prooerty: Price and Value: 200
Prooerty: isEmployed and Value: true


*/
