//Hashing a Password
const crypto = require("crypto");

const hashPassword = (password) => {
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
};

const hashedPassword = hashPassword("mySecurePassword");
console.log(`Hashed Password: ${hashedPassword}`);

//The crypto.createHash("sha256") method creates a hash object using the SHA-256 algorithm. SHA-256 is a cryptographic hash function that produces a 256-bit hash value.
//The hash.update(password) method updates the hash object with the password. It adds the data to be hashed.
//The hash.digest("hex") method calculates the digest (hash value) of all the data passed to the update method. The "hex" argument specifies that the output should be in hexadecimal format, it generates the hash value in hexadecimal format.
//The SHA-256 hashing function will always produce the same hash output for the same input. This is a fundamental property of cryptographic hash functions: they are deterministic.
//While the deterministic nature of hash functions is useful, it also presents some security challenges, especially for storing passwords. If two users have the same password, their hashed passwords will also be the same, which can be a security risk. This is where salting comes into play.

//Using Salts for Enhanced Security: A salt is a random value added to the input of the hash function to ensure that even if two users have the same password, their hashed passwords will be different.
