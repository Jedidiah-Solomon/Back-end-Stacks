//Encrypting and Decrypting Data
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Just for checkings on console to learn
console.log("The key: " + key);
console.log("The initialized vector: " + iv);
//Just for checkings ends

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
};

// Just for checkings on console to learn
console.log("The key: " + key);
console.log("The initialized vector: " + iv);
//Just for checkings ends

const decrypt = (encryptedText) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
};

// Just for checkings on console to learn
console.log("The key: " + key);
console.log("The initialized vector: " + iv);
//Just for checkings ends

const encryptedData = encrypt("mySecretData");
console.log(`Encrypted Data: ${encryptedData}`);
const decryptedData = decrypt(encryptedData);
console.log(`Decrypted Data: ${decryptedData}`);

// Just for checkings on console to learn
console.log("The key: " + key);
console.log("The initialized vector: " + iv);
//Just for checkings ends

/*

Encrypting and Decrypting Data
Encryption transforms readable data into an unreadable format to protect it from unauthorized access.
Decryption is the reverse process, turning the unreadable data back into its original form.

Define Algorithm, Key, and Initialization Vector (IV):

algorithm: The encryption algorithm used. In this case, it's aes-256-cbc, which is a symmetric encryption algorithm.
key: A 32-byte key generated randomly. The key size must match the algorithm's requirement (256 bits for AES-256).
iv: A 16-byte initialization vector generated randomly. It adds randomness to the encryption process.

Create a cipher object using the crypto.createCipheriv method with the algorithm, key, and IV.
Encrypt the plaintext (text) using the cipher.update method and specify the input and output encoding formats (utf8 and hex, respectively).
Finalize the encryption using cipher.final, appending the result to the previously encrypted data.
Return the encrypted text.

Create a decipher object using the crypto.createDecipheriv method with the same algorithm, key, and IV.
Decrypt the encrypted text (encryptedText) using the decipher.update method and specify the input and output encoding formats (hex and utf8, respectively).
Finalize the decryption using decipher.final, appending the result to the previously decrypted data.
Return the decrypted text.

Key Points:
Symmetric Encryption: The same key is used for both encryption and decryption. This key must be kept secret.
Initialization Vector (IV): Adds randomness to the encryption process, making identical plaintexts encrypt to different ciphertexts. The IV does not need to be secret but should be unique for each encryption operation.
Security Considerations: In real applications, you should manage keys and IVs securely. Do not hard-code keys in your source code and consider using secure key management practices.
*/
