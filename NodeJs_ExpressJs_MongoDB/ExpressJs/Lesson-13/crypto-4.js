//Signing and Verifying Data
const crypto = require("crypto");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
});

const sign = (data) => {
    const sign = crypto.createSign("SHA256");
    sign.update(data);
    sign.end();
    return sign.sign(privateKey, "hex");
};

const verify = (data, signature) => {
    const verify = crypto.createVerify("SHA256");
    verify.update(data);
    verify.end();
    return verify.verify(publicKey, signature, "hex");
};

const data = "myImportantData";
const signature = sign(data);
console.log(`Signature: ${signature}`);

const isVerified = verify(data, signature);
console.log(`Verified: ${isVerified}`);

/*

Generate Key Pair:

publicKey and privateKey are generated using the crypto.generateKeyPairSync method with the RSA algorithm
and a modulus length of 2048 bits. RSA is an asymmetric encryption algorithm where the public key is used 
for encryption (verification) and the private key is used for decryption (signing).

Sign Function:

Create a sign object using crypto.createSign with the SHA256 hashing algorithm.
Update the sign object with the data to be signed.
Call sign.end() to finalize the sign operation.
Sign the data using the private key and specify the output format as "hex".
Return the generated signature.

Verify Function:

Create a verify object using crypto.createVerify with the SHA256 hashing algorithm.
Update the verify object with the data to be verified.
Call verify.end() to finalize the verify operation.
Verify the signature using the public key and specify the input format as "hex".
Return the verification result (true if the signature is valid, false otherwise).

Sign and Verify Data:

Define the data to be signed as "myImportantData".
Sign the data using the sign function and log the generated signature.
Verify the signature using the verify function and log the verification result.

Asymmetric Encryption: Uses a pair of keys (public and private) where the private key is kept secret and the public key can be distributed.
Digital Signatures: Provide data integrity and authenticity by ensuring that the data has not been altered and verifying the source of the data.
Hashing Algorithm: SHA256 is used to hash the data before signing or verifying. This ensures a fixed-length representation of the data for signing.

*/
