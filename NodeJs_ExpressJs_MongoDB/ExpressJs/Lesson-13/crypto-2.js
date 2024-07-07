//Generating a Random Token:
const crypto = require("crypto");

const generateToken = () => {
    return crypto.randomBytes(16).toString("hex");
};

const token = generateToken();
console.log(`Generated Token: ${token}`);
