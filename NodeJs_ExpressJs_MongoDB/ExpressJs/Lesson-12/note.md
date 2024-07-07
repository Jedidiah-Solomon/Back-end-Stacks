# bcryptjs Usage Guide

bcryptjs is a JavaScript implementation of the bcrypt password hashing function, compatible with Node.js and browsers. It supports CommonJS and AMD loaders and can be globally accessed as dcodeIO.bcrypt if neither is available.

## Installation

#### Node.js:

`npm install bcryptjs`

#### Browser:

Download and include bcrypt.js in your project, then use it as follows:

```
<script src="path/to/bcrypt.js"></script>
<script>
  var bcrypt = dcodeIO.bcrypt;
  // Your code here
</script>
```

#### Node.js Usage

In Node.js, the crypto module's randomBytes interface is used to generate secure random numbers.

#### CommonJS:

``var bcrypt = require('bcryptjs');`

#### Browser Usage

In browsers, bcryptjs relies on the Web Crypto API's getRandomValues for secure random numbers. You can specify a custom randomness source via bcrypt.setRandomFallback if needed.

AMD:

```
require.config({
paths: { "bcrypt": "/path/to/bcrypt.js" }
});
require(["bcrypt"], function(bcrypt) {
// Your code here
});
```

#### Synchronous Usage

##### Hashing a Password:

```
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
// Store hash in your password DB.
```

#### Checking a Password:

```
// Load hash from your password DB.
var hash = 'stored_hash_value';

bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false
```

#### Auto-generate Salt and Hash:

```
var hash = bcrypt.hashSync('bacon', 8);
```

### Asynchronous Usage

#### Hashing a Password:

```
var bcrypt = require('bcryptjs');

bcrypt.genSalt(10, function(err, salt) {
if (err) throw err;

    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        if (err) throw err;
        // Store hash in your password DB.
    });

});
```

#### Checking a Password:

```
// Load hash from your password DB.
var hash = 'stored_hash_value';

bcrypt.compare("B4c0/\/", hash, function(err, res) {
if (err) throw err;
console.log(res); // true
});

bcrypt.compare("not_bacon", hash, function(err, res) {
if (err) throw err;
console.log(res); // false
});
```

// As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
bcrypt.compare("B4c0/\/", hash).then((res) => {
console.log(res); // true
});

#### Auto-generate Salt and Hash:

```
bcrypt.hash('bacon', 8, function(err, hash) {
if (err) throw err;
// Store hash in your password DB.
});
```

```
var bcrypt = require('bcryptjs');

// Hashing a password asynchronously
bcrypt.genSalt(10, function(err, salt) {
    if (err) throw err;
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        if (err) throw err;
        // Store hash in your password DB.
    });
});

// Checking a password asynchronously
var hash = 'stored_hash_value';
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    if (err) throw err;
    console.log(res); // true
});
```

This guide provides a concise overview of using bcryptjs for hashing and comparing passwords in both synchronous and asynchronous contexts.
