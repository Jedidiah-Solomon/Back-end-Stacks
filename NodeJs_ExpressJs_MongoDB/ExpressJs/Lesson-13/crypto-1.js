//Hashing a Password with salt
const crypto = require("crypto");

const hashPassword = (password, salt) => {
    const hash = crypto.createHash("sha256");
    hash.update(password + salt);
    return hash.digest("hex");
};

const salt = crypto.randomBytes(16).toString("hex"); // Generate a random salt
const hashedPassword = hashPassword("mySecurePassword", salt);
console.log(`Salt: ${salt}`);
console.log(`Hashed Password: ${hashedPassword}`);
