# EXPRESS JS

### Password Hashing using bcrypt

1. `npm install express bcrypt body-parser`

If you submit the form without using bcrypt or any other hashing mechanism, the password will be stored in its plain text form in the MySQL database. Storing passwords in plain text is highly discouraged due to security reasons. If someone gains unauthorized access to your database, they can easily view and use these passwords.

To improve security:

Hashing: Always hash passwords before storing them. Hashing converts the password into a fixed-length string of characters, making it computationally difficult to reverse the process and retrieve the original password.

Salt: Use a salt when hashing passwords. A salt is a random value added to the password before hashing, ensuring that even if two users have the same password, their hashed passwords will be different.

bcrypt: Use a reliable library like bcrypt for password hashing. bcrypt handles both hashing and salting internally, making it straightforward to securely hash passwords in your Node.js application.

genSalt(rounds, callback): Generates a salt asynchronously with the specified number of rounds. The rounds parameter determines the complexity of the hashing algorithm used. Higher rounds increase security but also increase computation time.

hash(data, salt, callback): Hashes the data (typically a password) using the provided salt. The result is a hashed string that is computationally impractical to reverse back into the original password.

If your password is "Aisha2024#" and you're using bcrypt with 10 rounds of salting, here's how the process works:

Generating Salt: Bcrypt generates a random salt. Salt is a random value added to the password before hashing to ensure that even if two users have the same password, their hashed values will be different.

Hashing with Salt: Bcrypt then hashes the password combined with the salt. Hashing irreversibly converts the password into a fixed-length string of characters that cannot be decrypted back into the original password.

Multiple Rounds: The number 10 in genSalt(10) specifies the number of times the hashing algorithm runs internally. Each additional round makes the computation of the hash more complex and time-consuming.

To hash a password:
Generate a salt and hash on separate function calls:

```
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```

Resulting Hash: After salting and hashing with 10 rounds, you'll get a hashed password that looks something like this (not the exact output, as it's random and will vary each time due to the salt):

`$2b$10$JVOx9S4b7AHEWjqc6p22Ue3JDDgI7/rD3gWe./om3M0gkGhlmNGs2`
This hashed string contains:

$2b$: Identifies the hash algorithm (bcrypt in this case).
10$: Indicates the number of rounds used (10 rounds).
A long string of characters: The actual hashed password.
Storing in Database: You would store this hashed password in your database. When a user logs in, you'll repeat the hashing process with the provided password and compare the resulting hash with the one stored in the database. If they match, the passwords are considered the same.

This process ensures that even if two users have the same password, their hashes (and therefore stored values in the database) are different due to the unique salt applied to each password. This adds a significant layer of security against brute-force attacks and rainbow table attacks.

Comparison:
When you call bcrypt.compare(userInputPassword, storedHashedPassword), it extracts the salt from the stored hash.
It then hashes the user input password using the same salt.
Finally, it compares the newly generated hash with the stored hash.
If they match, the function returns true; otherwise, it returns false.

### ALTER A MYSQL TABLE AUTO INCREMENT TO START FROM 1 AGAIN

`ALTER TABLE users AUTO_INCREMENT = 1;`
