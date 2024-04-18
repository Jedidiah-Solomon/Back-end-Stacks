// Objects = A collection o related properties and/or methods.
//           It can real world objects e.g people, products, places
//            It has a key: value air


const person1 = {
    firstName: 'Jedidiah',
    lastName: 'Onwubiko',
    age: 29,
    isEmployed: true,
    sayHello: function(){console.log(`Hi, I am ${this.firstName} ${this.lastName}`)},
    sayBye: function(){console.log('Goodbye')},
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();