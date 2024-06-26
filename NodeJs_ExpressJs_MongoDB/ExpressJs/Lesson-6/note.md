# EXPRESS JS

### npx express-generator

```
Lesson-6/
│
├── bin/
│   └── www
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── index.js
│   └── users.js
├── views/
│   ├── error.pug
│   ├── index.pug
│   └── layout.pug
├── app.js
├── note.md
├── package.json
└── package-lock.json
```

The `npx express-generator` command is used to generate an Express.js application skeleton. It sets up the basic directory structure, configuration files, and initial routes for your project. E.g `npx express-generator my-express-app` or if you have directorey ready, then use `npx express-generator` because `my-express-app` is the desired name for your app.

Explore the Generated Files: The generated project structure includes files like app.js (the main application file), routes/index.js (default route), and views (for your views/templates).

```
The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:

app.get('/', (req, res) => {
  res.send('Hello World!')
})
Respond to POST request on the root route (/), the application’s home page:

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

Respond to a PUT request to the /user route:

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
Respond to a DELETE request to the /user route:

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```

#### Testing with curl

```
GET Request:
curl http://localhost:3000/

POST Request:
curl -X POST http://localhost:3000/

PUT Request:
curl -X PUT http://localhost:3000/user

DELETE Request:
curl -X DELETE http://localhost:3000/user

This setup provides a basic Express application with routes responding to different HTTP methods. You can extend this example by adding more routes and logic as needed.
```

### delete.html

```
<!-- delete.html -->
<form id="delete-form">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password (ID):</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Delete User</button>
</form>

<script>
document.getElementById("delete-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/deleteUser", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Delete Response:", data);
        alert(data.message);
    })
    .catch(error => {
        console.error("Delete Error:", error);
        alert("An error occurred. Please try again.");
    });
});
</script>

```

### update.html

```
<!-- update.html -->
<form id="update-form">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password (ID):</label>
    <input type="password" id="password" name="password" required>
    <label for="msg">Message:</label>
    <textarea id="msg" name="msg" placeholder="Enter your new message..." required></textarea>
    <button type="submit">Update User</button>
</form>

<script>
document.getElementById("update-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg").value;

    fetch("/updateUser", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, msg })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Update Response:", data);
        alert(data.message);
    })
    .catch(error => {
        console.error("Update Error:", error);
        alert("An error occurred. Please try again.");
    });
});
</script>
```
