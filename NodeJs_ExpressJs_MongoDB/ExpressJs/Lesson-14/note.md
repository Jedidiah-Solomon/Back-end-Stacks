`npm install express dotenv mysql jsonwebtoken bcryptjs`

```
project/
├── public/
│   ├── styles/
│   │   └── style.css
│   └── scripts/
│       └── script.js
├── views/
│   ├── index.html
│   └── classroom.html
├── server.js
└── .env
```

#### Database Setup - MySQL Database:

Set up a MySQL database ``CREATE DATABASE web_dev_classroom;`. Create a table `users` with fields `id, username, password` etc.

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    course_type ENUM('Backend', 'Frontend', 'Fullstack') NOT NULL,
    state_of_origin VARCHAR(255) NOT NULL,
    phone_no VARCHAR(20) NOT NULL
);
```

The connection.threadId is a property available on the connection object once the connection is successfully established. It gives you the ID of the thread that is handling your connection on the MySQL server. This can be helpful for identifying and debugging specific connections.

`ALTER TABLE users AUTO_INCREMENT = 1;` to reset a table to 1
`DELETE FROM users;`
`TRUNCATE TABLE users;`
The DELETE statement removes all rows from the table but retains the table structure and its indexes.
The TRUNCATE statement also removes all rows from the table and resets any auto-increment counters to the starting value.

### Cookies

``document.cookie = "username= John; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;";`
`document.cookie = "cookiename=cookievalue; max-age=3600";`//1hr
`document.cookie = "cookiename=cookievalue; max-age=120";`//2mins

SameSite=Strict: Cookies will only be sent in a first-party context and not with requests initiated by third-party websites. Browsers only send cookies with requests originating from the same domain/site as the target domain. This setting stops CSRF attacks. For example, if a user follows a link to a private GitHub project from an external site, GitHub won’t receive the session cookie, ensuring security.

SameSite=Lax: Cookies are not sent on cross-site subrequests (e.g., loading images or frames into a third-party site), but they are sent when a user navigates to the URL from an external site (e.g., by following a link). Allows cookies when following regular links from external websites.
Blocks cookies in CSRF-prone request methods (e.g., POST).
Strikes a balance between security and usability.

SameSite=None: Cookies will be sent in all contexts, i.e., in responses to both first-party and third-party requests. This must be used with Secure. Explicitly allows the cookie to be sent in a third-party context.
Useful for scenarios like advertising or embedded content.

For most scenarios, SameSite=Lax is a good balance between security and usability.

Ensuring Secure Attribute
If you are setting the SameSite=None attribute, you must also set the Secure attribute, which means the cookie will only be sent over HTTPS connections:

```
res.cookie('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 2 * 60 * 60 * 1000, // 2 hours
    sameSite: 'None',
    secure: true // Only send cookie over HTTPS
});
```

Summary
Server-Side: Update the cookie settings to include the SameSite attribute.
Client-Side: No changes needed as the browser will automatically handle the cookies according to the SameSite attribute.
This will ensure that your cookies comply with modern browser standards and avoid the warning messages you are seeing.

`Authenticated user: { id: 6, username: 'Peter', iat: 1720461963, exp: 1720462083 }`

The iat and exp fields in a JWT (JSON Web Token) payload are standard claims:

iat (Issued At): This claim contains the timestamp of when the token was issued. It is the number of seconds since the Unix epoch (January 1, 1970). In your example, iat: 1720461963 means the token was issued at this specific time.

exp (Expiration Time): This claim contains the timestamp of when the token will expire. Similar to iat, it is also the number of seconds since the Unix epoch. In your example, exp: 1720462083 means the token will expire at this specific time.

The difference between exp and iat represents the token's validity period. For instance,

iat: 1720461963 (Issued At)
exp: 1720462083 (Expiration Time)

The difference between exp and iat is 120 seconds (or 2 minutes), which indicates that the token is valid for 2 minutes.

Example Calculation
To make this clearer, you can convert the Unix timestamps to human-readable dates using an online converter or with a small script. Here’s a simple example in JavaScript:

```
const iat = 1720461963;
const exp = 1720462083;

console.log("Issued At:", new Date(iat * 1000).toLocaleString());
console.log("Expiration Time:", new Date(exp * 1000).toLocaleString());
```
