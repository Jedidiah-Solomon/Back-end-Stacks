# Simple Books API

This API allows you to reserve a book.

The API is available at `https://simple-books-api.glitch.me`

## Endpoints

### Status

GET `/status`

Returns the status of the API.

### List of books

GET `/books`

Returns a list of books.

Optional query parameters:

-   type: fiction or non-fiction
-   limit: a number between 1 and 20.

### Get a single book

GET `/books/:bookId`

Retrieve detailed information about a book.

### Submit an order

POST `/orders`

Allows you to submit a new order. Requires authentication.

The request body needs to be in JSON format and include the following properties:

-   `bookId` - Integer - Required
-   `customerName` - String - Required

Example

```
POST /orders/
Authorization: Bearer <YOUR TOKEN>

{
  "bookId": 1,
  "customerName": "John"
}
```

The response body will contain the order Id.

### Get all orders

GET `/orders`

Allows you to view all orders. Requires authentication.

### Get an order

GET `/orders/:orderId`

Allows you to view an existing order. Requires authentication.

### Update an order

PATCH `/orders/:orderId`

Update an existing order. Requires authentication.

The request body needs to be in JSON format and allows you to update the following properties:

-   `customerName` - String

Example

```
PATCH /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>

{
  "customerName": "John"
}
```

### Delete an order

DELETE `/orders/:orderId`

Delete an existing order. Requires authentication.

The request body needs to be empty.

Example

```
DELETE /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>
```

## API Authentication

To submit or view an order, you need to register your API client.

POST `/api-clients/`

The request body needs to be in JSON format and include the following properties:

-   `clientName` - String
-   `clientEmail` - String

Example

```
{
   "clientName": "Postman",
   "clientEmail": "valentin@example.com"
}
```

The response body will contain the access token. The access token is valid for 7 days.

**Possible errors**

Status code 409 - "API client already registered." Try changing the values for `clientEmail` and `clientName` to something else

The route app.get("/books/:id" is written with a colon (:) before id to indicate that id is a route parameter in Express. This syntax is part of Express's routing mechanism and is used to capture dynamic values from the URL.

When you define app.get("/books/:id", it means that Express will match any request to /books/<some_value> where <some_value> can be any string. This value is then accessible in your route handler through req.params.id.

For example:

If you make a GET request to http://localhost:3000/books/1, Express will capture 1 as the value of req.params.id.
If you make a GET request to http://localhost:3000/books/2, Express will capture 2 as the value of req.params.id.
This dynamic parameterization allows your route to handle different requests based on the id provided in the URL without having to define separate routes for each possible id.

In contrast, if you were to define app.get("/books/id", Express would treat id literally as part of the route path. Requests to http://localhost:3000/books/id would match this route exactly, but it wouldn't allow you to capture dynamic values like 1 or 2 as in the previous example.

Therefore, app.get("/books/:id" is used to create a route in Express that captures a dynamic parameter (id) from the URL path, making your API more flexible and capable of handling different requests based on that parameter.

#### POST

`http://localhost:5000/books`
THEN USE

```
{
    "id": 4,
    "title": "New Book",
    "author": "New Author"
}
```

### PUT http://localhost:3000/books/1

```
Body: {
    "title": "Updated Book1",
    "author": "Updated Author1"
}
```

### PATCH (update) a book by ID

```
PATCH http://localhost:3000/books/1
Body: {
    "title": "Updated Title1"
}
```
