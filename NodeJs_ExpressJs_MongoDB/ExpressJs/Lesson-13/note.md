### JWT (JSON Web Token)

JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications.

#### Explanation

Environment Configuration

We load environment variables from a .env file using dotenv.config().

The `ACCESS_TOKEN_SECRET` is stored in the .env file for security.

### Public Route (/posts)

This route is publicly accessible and doesn't require authentication.

### Login Route (/login)

This route simulates user login.
Upon login, it creates a JWT with the username as the payload.
The jwt.sign function generates the token using the secret key.

Token Authentication Middleware (authenticateToken)

This middleware function verifies the JWT sent in the request headers.
If the token is valid, the request proceeds to the next middleware or route handler.
If the token is invalid or missing, it responds with a 401 or 403 status.
Protected Route (/protected)

This route uses the authenticateToken middleware to ensure only authenticated users can access it.
Next Steps
Connecting with MySQL or MongoDB:

MySQL: Use mysql or sequelize to store and retrieve user data.
MongoDB: Use mongodb or mongoose for user data storage.
User Registration:

Create routes to handle user registration, including password hashing (using bcryptjs).
Token Expiration:

Implement token expiration and refresh tokens for enhanced security.

### Detailed Explanation

1. Route Definition:

`app.post("/login", (req, res) => { ... });`

defines a POST route at /login.
This route handler function will be executed when a POST request is made to /login.

2. User Authentication:

`const username = req.body.username;`

Extracts the username from the request body. This assumes that the client sends the username in the body of the POST request.

`const user = { name: username };`

Creates a user object with a name property set to the extracted username. This user object will be the payload of the JWT.

```
Note: In a real application, you would typically verify the username and password against a database to authenticate the user. For simplicity, this example assumes authentication is successful if a username is provided.
```

3. JWT Secret Key:

`const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;`

Retrieves the secret key for signing the JWT from environment variables. This secret key is used to ensure the integrity and authenticity of the token.

4. Token Generation:

`const accessToken = jwt.sign(user, accessTokenSecret);`

Uses jsonwebtoken's sign method to create a JWT.
The user object is the payload of the token.
The accessTokenSecret is the secret key used to sign the token, ensuring that it can be verified later.

The resulting accessToken is a signed JWT that can be sent to the client.

#### Response:

`res.json({ accessToken: accessToken });`

Sends a JSON response to the client containing the generated JWT.
The client can then use this token to authenticate future requests to protected routes.

#### Summary

The /login route creates a JWT for a user based on their username.
The token is signed using a secret key from environment variables.
The generated token is sent back to the client in the response.
This token can then be used by the client to authenticate subsequent requests to protected routes.

### How it Works:

Single Secret Key:

You generate a single secret key and store it securely (e.g., in environment variables).
This key is used to sign JWTs when users log in.
Token Generation:

When a user logs in, you create a JWT with their information (e.g., username) and sign it using the secret key.

Token Verification:

When the user makes requests to protected routes, you verify the token using the same secret key.
If the token is valid and not tampered with, the request is authorized.

---

### Step-by-Step Explanation:

1. Extract the Authorization Header:

`const authHeader = req.headers["authorization"];`
This line retrieves the Authorization header from the incoming request. This header typically contains the JWT.

2. Extract the Token:

`const token = authHeader && authHeader.split(" ")[1];`

This line extracts the token from the Authorization header. The JWT is usually sent in the format Bearer <token>, so split(" ")[1] extracts the actual token part.

3. Check if Token is Null:

`if (token == null) return res.sendStatus(401);`

If no token is found, the middleware responds with a 401 Unauthorized status and stops further processing.

4. Verify the Token:

`jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {})`

This line uses the jwt.verify method to verify the token. It takes the token, the secret key (stored in an environment variable), and a callback function.

5. Handle Verification Errors:

if (err) return res.sendStatus(403);
If there is an error during verification (e.g., the token is invalid or expired), the middleware responds with a 403 Forbidden status.

6. Attach User to Request Object:

`req.user = user;`

If the token is successfully verified, the decoded user information is attached to the req object.

This allows subsequent middleware or route handlers to access the authenticated user's details.

7. Call Next Middleware/Route Handler:

`next();`

The next() function is called to pass control to the next middleware or route handler in the stack.

##### Example Usage in an Express Route:

To use this middleware, you can add it to any route that requires authentication:

```
app.get('/protected', authenticateToken, (req, res) => {
res.json({ message: "This is a protected route", user: req.user });
});
```

In this example, the /protected route is protected by the authenticateToken middleware. If a request to this route includes a valid token, the route handler will execute and respond with a message and the user information. If the token is missing or invalid, the middleware will respond with an appropriate status code and prevent the route handler from executing.

Summary:
The authenticateToken middleware extracts the JWT from the request headers.
It verifies the token using the secret key.
If the token is valid, it attaches the decoded user information to the req object and calls next().
If the token is missing or invalid, it responds with the appropriate status code (401 or 403).

## Testing with Postman

1. Start Your Server:
   Make sure your Express server is running.

2. Login to Get JWT:

Open Postman.
Create a new POST request to `http://localhost:3000/login`

In the Body tab, select raw and JSON and send the following JSON:

```
{
"username": "John"
}
```

3. Send the request.
   You should receive a JSON response containing the accessToken.
4. Access Protected Route:

Create a new GET request to `http://localhost:3000/protected`
Go to the Authorization tab, select Bearer Token, and paste the accessToken you received from the login step.

5. Send the request.
   You should receive a 200 OK response with the message "This is a protected route".

### Testing with REST Client in VSCode

Install REST Client Extension:

Install the REST Client extension in VSCode to do so also if you like other than using Postman.

### Note

Running `http://localhost:3000/login` or `http://localhost:3000/protected` on the browser will indicate 404 except you use a client.

### Commonly Used Headers

1. Content-Type:
   Indicates the media type of the resource or the data being sent to the server.

Example: `Content-Type: application/json`

2. Authorization:
   Contains the credentials to authenticate a user with a server.

Example: `Authorization: Bearer <token>`

3. Accept:
   Indicates the media type(s) that the client is willing to receive from the server.

Example: `Accept: application/json`

4. User-Agent:
   Contains information about the user agent originating the request. This can be used for analytics, debugging, and content negotiation.

Example: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`

6. Host:
   Specifies the domain name of the server (for virtual hosting) and the TCP port number on which the server is listening.

Example: Host: `example.com`

6. Referer:
   The address of the previous web page from which a link to the currently requested page was followed.

Example: Referer: `https://www.google.com/`
