# EXPRESS JS

###

`npm install mysql csv-parser bcrypt`

```
LOAD DATA INFILE '/path/to/your/students.csv'
INTO TABLE users
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, email, password);
```

```
id,email,password
1,student1@example.com,password1
2,student2@example.com,password2
3,student3@example.com,password3
```
