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
