# MongoDB

MongoDB is a document database. It stores data in a type of JSON format called BSON.

BSON stands for “Binary JSON,” and that's exactly what it was invented to be. BSON's binary structure encodes type and length information, which allows it to be traversed much more quickly compared to JSON.

JSON (which stands for JavaScript Object Notation) is a lightweight text-based data interchange format that’s easy for humans to read and write, and easy for machines to parse and generate. JSON is a popular choice for exchanging data between different systems, especially in web development.

BSON (which stands for Binary JSON) is a binary-encoded serialization format that supports additional data types and is natively supported only by MongoDB.

Extended data support: JSON is limited to JavaScript data types, including string, number, boolean, null, object, and array. Those data types can be used in combination to represent complex data types. BSON supports additional data types (such as binary data and date types) that are not supported by JSON.

Supported by: BSON is natively supported only by MongoDB. JSON, on the other hand, is widely supported and can be used with distributed database systems, programming languages, and platforms.

A MongoDB Document
Records in a MongoDB database are called documents, and the field values may include numbers, strings, booleans, arrays, or even nested documents.

Example Document

```
{
	title: "Post Title 1",
	body: "Body of post.",
	category: "News",
	likes: 1,
	tags: ["news", "events"],
	date: Date()
}
```

MongoDB is a document database and can be installed locally or hosted in the cloud.

SQL vs Document Databases
SQL databases are considered relational databases. They store related data in separate tables. When data is needed, it is queried from multiple tables to join the data back together.

MongoDB is a document database which is often referred to as a non-relational database. This does not mean that relational data cannot be stored in document databases. It means that relational data is stored differently. A better way to refer to it is as a non-tabular database.

MongoDB stores data in flexible documents. Instead of having multiple tables you can simply keep all of your related data together. This makes reading your data very fast.

You can still have multiple groups of data too. In MongoDB, instead of tables these are called collections.

Local vs Cloud Database
MongoDB can be installed locally, which will allow you to host your own MongoDB server on your hardware. This requires you to manage your server, upgrades, and any other maintenance.

You can download and use the MongoDB open source Community Server on your hardware for free - `https://www.mongodb.com/try/download/community-kubernetes-operator`

However, for this course we are going to use MongoDB Atlas, a cloud database platform. This is much easier than hosting your own local database.

To be able to experiment with the code examples, you will need access to a MongoDB database.

Sign up for a free MongoDB Atlas account to get started - `https://www.mongodb.com/cloud/atlas/register?utm_campaign=w3schools_mdb&utm_source=w3schools&utm_medium=referral`

MongoDB Atlas (Cloud Database)

Pros:

Managed Service: MongoDB Atlas is a fully managed service provided by MongoDB. This means MongoDB handles server management, backups, upgrades, and security patches for you.

Scalability: Easily scale your database as your data grows without worrying about hardware provisioning.

High Availability: MongoDB Atlas offers built-in replication and automated failover to ensure high availability and reliability.

Global Availability: You can deploy MongoDB clusters across multiple cloud regions for better performance and availability worldwide.

Security: MongoDB Atlas provides advanced security features like encryption, IP whitelisting, and network isolation.

Cons:

Cost: While MongoDB Atlas offers a free tier, scaling up may incur costs based on storage, compute, and data transfer.
Dependence on Internet: Requires a stable internet connection for access.
Local MongoDB Installation
Pros:

Control: You have full control over your MongoDB instance, including server configuration, maintenance, and upgrades.

Cost: No ongoing costs beyond hardware and operational expenses.
Performance: May offer better performance for local applications that require fast access to data.

Cons:

Maintenance: You are responsible for server maintenance, upgrades, backups, and security.

Scalability Challenges: Scaling may require additional hardware provisioning and manual configuration.

Availability: May not offer the same level of built-in high availability and disaster recovery as cloud solutions.

Considerations

Use Case: If your application requires flexibility, scalability, and managed services, MongoDB Atlas is a strong choice.

Budget: Assess the cost implications, especially as your data and usage grow.
Internet Connectivity: Ensure reliable internet access for MongoDB Atlas if choosing a cloud solution.

Compliance and Security: Consider regulatory compliance and data security requirements.

MongoDB Atlas Cluster Configuration
When setting up your MongoDB Atlas cluster, it's important to consider the following:

Name: Choose a name for your cluster carefully since it cannot be changed once created. This name will identify your cluster within MongoDB Atlas.

Provider and Region: Select the cloud provider (like AWS, Google Cloud, or Azure) and the region where you want your MongoDB Atlas cluster to be deployed. Choose a region closest to your intended users or your own location for optimal performance.

```
Cluster Name: MyMongoDBCluster
Provider: AWS (Amazon Web Services)
Region: US East (N. Virginia)
Tag e.g environment: development
```

Install MongoDB Shell (mongosh)
There are many ways to connect to your MongoDB database.

We will start by using the MongoDB Shell, mongosh.

Use the official instructions to install mongosh on your operating system.

To verify that it has been installed properly, open your terminal and type:

mongosh --version
You should see that the latest verion is installed.

Connect to the database
To connect to your database, you will need your database specific connection string.

In the MongoDB Atlas dashboard, under "Databases", click the "Connect" button for your Cluster.

Next, choose "Connect with the MongoDB Shell".

Copy your connection string.

Example
Your connection string should look similar to this:
`mongodb+srv://Jedybrown:Jedybrown1234$@mymongodbcluster.xpw3kbt.mongodb.net/?retryWrites=true&w=majority&appName=MyMongoDBCluster`

paste your connection string into your terminal and press enter.

You will be prompted to enter your database user password that you created earlier.

You are now connected to the database!

### Codes

```
1. use bathphage_ict_students           (uses this database)

2. show dbs                             (shows all databases available recall you cant delete system databases like config, admin and local)

3. show collections             (shows all collectionss available)
4. db.dropDatabase()               (delete database you're currently into)
5. db.students.find().pretty()     (shows all data available in students collection i a pretty way)
6. db.students.find()                (shows all data available in students collection)
7. db.students.find().limit(2)      (shows only 2 data available in students collection)
8. db.students.find().sort({name: 1}) sort with name, note: 1 means ascending and -1 descending
9. db.students.find().sort({name: -1})
10. db.students.find().sort({name: -1}).limit(2)
11. db.students.find().sort({name: -1, age: 1})
12. db.students.find().skip(1).limit(2)  find and skip the first on the find
13. db.students.find({name: "John"})


// Switch to the new database
use bathphage_ict_students

// Create a new collection - students and insert a document
db.students.insertOne({ name: "John Doe", age: 20, course: "Data Analysis" })

// Verify the database and collection
show dbs
show collections
```

### Inserting Additional Documents

1. USING MONGOSH

```
// Connect to your MongoDB Atlas cluster
mongosh "mongodb+srv://<your-cluster-url>"

// Switch to the database
use bathphage_ict_students

// Insert the documents
db.students.insertMany([
  {
    "_id": ObjectId("6681afd8a4aff80f143db294"),
    "name": "Jane Smith",
    "age": 22,
    "course": "Data Science"
  },
  {
    "_id": ObjectId("6681afd8a4aff80f143db295"),
    "name": "Michael Johnson",
    "age": 24,
    "course": "Machine Learning"
  }
])

```

2. Using Compass
    ```
    [
    {
     "_id": {
       "$oid": "6681afd8a4aff80f143db294"
     },
     "name": "Jane Smith",
     "age": 22,
     "course": "Data Science"
    },
    {
     "_id": {
       "$oid": "6681afd8a4aff80f143db295"
     },
     "name": "Michael Johnson",
     "age": 24,
     "course": "Machine Learning"
    }
    ]
    ```
    No comments or trailing commas

```

##### Explanation of the `_id` Field

```

The `_id` field in MongoDB is a unique identifier for each document within a collection. Here’s a breakdown of its components and what they represent:

`_id` Field:

The `_id` field is automatically added by MongoDB if you don't provide one. It ensures each document within a collection has a unique identifier.
It can be any type of value, but the default type is an ObjectId.
$oid:

The $oid key indicates that the value is an ObjectId.
ObjectId is a 12-byte identifier typically represented as a 24-character hexadecimal string.
ObjectId Components:

Timestamp: The first four bytes represent the Unix epoch timestamp when the ObjectId was created.
Machine Identifier: The next three bytes are a unique identifier for the machine.
Process ID: The following two bytes represent the process ID of the MongoDB server process.
Counter: The last three bytes are a counter, starting with a random value.
Inserting the Documents
To insert the documents into your MongoDB collection, you can use the following command in the MongoDB shell (mongosh):

```



// Connect to your MongoDB Atlas cluster
mongosh "mongodb+srv://<your-cluster-url>"

// Switch to the database
use bathphage_ict_students

// Insert the documents
db.students.insertMany([
{
"_id": {
"$oid": "6681afd8a4aff80f143db294"
},
"name": "Jane Smith",
"age": 22,
"course": "Data Science"
},
{
"_id": {
"$oid": "6681afd8a4aff80f143db295"
},
"name": "Michael Johnson",
"age": 24,
"course": "Machine Learning"
}
])

```

This command will insert the specified documents into the students collection within the bathphage_ict_students database. Each document includes a unique \_id field with an ObjectId, along with other fields representing the student's name, age, and course.

Verification
To verify the insertion, you can use the following command to view the documents in the collection:

`db.students.find().pretty()`

This command will display all the documents in the students collection in a readable format.

```

```

For accessing MongoDB database from express, we use Mongoose which is an Object Data Modelling library providing all necessary functions to access and work with MongoDB.

npm modules used:
express — for our backend server.
mongoose — for working with MongoDB
dotenv —for providing credentials using environment variables
First, let’s make our work directory ready.

$ mkdir express-mongodb
$ cd express-mongodb
Step 1: Initialise npm on the directory and install the necessary modules. Also, create the index file. (To get started with express, read this article )

$ npm init
$ touch index.js
$ npm i express mongoose
Step 2: Initialise the express app and make it listen to a port on localhost.

const express = require("express");
const app = express();
app.listen(3000, () => console.log("Server is running"));
Step 3: Require mongoose package

const mongoose = require("mongoose");
Connect to a cluster in MongoDB cloud

1. Connection code
   Provide the MongoDB URI of your cluster to mongoose.connect() ( refer to this article for creating a free-tier cluster for MongoDB in the cloud)

```
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
```

process.env.MONGODB_URI — used to get value from environment variable

It is recommended to use an environment variable so that your credentials will not be exposed when you are uploading your repository online.

dotnev npm package can be used to provide environment variables

$ npm i dotenv
In the index.js file, add the following at the top.
require("dotenv").config();
Create a .env file and provide your credentials there in the provided format (key=value)
MONGODB_URL="your-mongodb-uri-here"
Make sure you included .env file along with node_modules directory in .gitignore.

Define a schema
Let’s create a schema for a new collection.

Schema defines the structure of the document, with all the field names and type.

```
const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});
```

mongoose.schema() takes in a javascript object.

Name of the property is the fields for the document
Value for the property represents the type for the particular field.

To make any field required, make required as true.

roll_no: {
type: Number,
required: true
}
Since we wanted to specify that it is required i.e. to send another information along with the type of the field, we represent the values that are to be sent in an object.

To know more about the schema types, read the documentation here:`https://mongoosejs.com/docs/guide.html`

3. Define the model
   Let’s create our model by passing in the schema and a name for our model.

const Student = mongoose.model('Student', studentSchema);

-   studentSchema — the schema we have created just now
-   ‘Student’ — Name for the model, so a collection will be created with a name ‘students’ (plural form of the name with all lowercase)

Now as our model is ready, we can create APIs to get, add, delete, and update the documents within our collection.

Let’s add two documents whenever our app is loaded

````
const stud = new Student({
    roll_no: 1001,
    name: 'Madison Hyde',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
stud
    .save()
    .then(
        () => console.log("One entry added"),
        (err) => console.log(err)
    );

    ```

By sending an object containing the values to our model Student, we can create a new document and use save() method to save our document to the database.


Now, Let's define a get request for the root route which returns all the documents in Student collection which should return the document we added.

app.get('/', (req, res) => {
    Student.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    }).catch(err => console.log("Error occured, " + err));
});
model.find() finds and returns documents

The first parameter {} — to specify queries to receive documents that match a particular condition. (Here, we leave it blank to get all the documents)

The second parameter is a callback function, which returns documents found and error if any occurs.

res.send(found) returns the documents found back as a response
````

useNewUrlParser: true
Purpose: This option is used to opt in to the new MongoDB connection string parser. The MongoDB Node.js driver had a new connection string parser introduced in version 4.0.
Why It's Needed: The new connection string parser supports the latest connection string format and provides better error handling, validation, and additional features that the old parser does not support.
Usage: By setting useNewUrlParser to true, you ensure that your application uses the updated parser, which is more robust and feature-rich.
useUnifiedTopology: true
Purpose: This option is used to opt in to the new unified topology layer. The MongoDB driver introduced this in version 3.2.0.
Why It's Needed: The unified topology layer consolidates the connection management logic and eliminates the need for multiple, individual options related to topology management. It simplifies the internals of the driver and improves its reliability and performance.
Usage: By setting useUnifiedTopology to true, you enable the use of the new unified topology layer, which provides a more consistent and stable connection management experience.
const Student = mongoose.model("Student", studentSchema)
Purpose: This line creates a model for the "Student" collection in MongoDB.
Explanation: In Mongoose, a model is a wrapper for a schema. It provides an interface to the database for creating, querying, updating, and deleting records.
Components:
"Student": This is the name of the model. Mongoose will create a collection in the MongoDB database with a name based on the model name. By default, it will pluralize the model name, so "Student" becomes "students".
studentSchema: This is the schema that defines the structure of the documents within the "students" collection. The schema specifies the fields and their types, as well as any validation or default values.

The **v field in MongoDB documents is a version key that Mongoose uses for versioning purposes. This field is part of the document's metadata managed by Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. Here’s a detailed explanation of the **v field:

Purpose of **v Field
Versioning: The **v field is used by Mongoose to keep track of the version of the document. It is automatically incremented whenever the document is updated. This helps Mongoose manage concurrent updates to documents and can prevent conflicts in a multi-user environment.

Optimistic Concurrency Control: Mongoose uses the **v field for optimistic concurrency control. This mechanism helps in detecting conflicting updates to the same document by different users or processes. When a document is fetched, the **v value is also fetched. If the document is updated, Mongoose checks whether the \_\_v value has changed since the document was fetched. If it has, this indicates that another process has modified the document in the meantime, and an error is thrown to indicate a conflict.

Example Scenario
Initial Save: When a new document is saved to the database, Mongoose initializes the **v field to 0.
First Update: When the document is updated for the first time, Mongoose increments the **v field to 1.
Subsequent Updates: With each subsequent update, the \_\_v field is incremented by 1.

Validation:

Mongoose provides built-in validation for schemas. This can help catch errors before they are written to the database.

```
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
});
```

Schema-Based Data Modeling:

Mongoose allows you to define schemas for your documents. This means you can enforce a structure and data types for your MongoDB collections, making it easier to ensure data consistency.

```
const studentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
const Student = mongoose.model("Student", studentSchema);
```

Middleware (Hooks):

Mongoose supports middleware (also known as pre and post hooks) for operations such as save, validate, remove, and find. This can be very useful for performing actions before or after certain events.

```
userSchema.pre('save', function(next) {
    // Do something before saving the document
    next();
});
```

Plugins:

You can extend Mongoose schemas with plugins, which are reusable code modules that can add functionality to schemas.

```
const mongoosePaginate = require('mongoose-paginate-v2');
userSchema.plugin(mongoosePaginate);
```

Abstraction of MongoDB Driver:

Mongoose abstracts much of the complexity of the native MongoDB driver. It simplifies the process of connecting to the database, querying, and handling errors.
Built-in Methods for Common Tasks:

Mongoose provides several built-in methods for common database operations such as create, find, update, and delete.

```
// Find all students
Student.find({}, (err, students) => {
    if (err) return console.error(err);
    console.log(students);
});
```

Population:

Mongoose supports population, which is the process of automatically replacing specified paths in the document with documents from other collections. This is useful for handling references between collections.

```
const userSchema = new mongoose.Schema({
    name: String,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
User.find().populate('friends').exec((err, users) => {
    // users will be populated with friends' details
});
```

mongoose.model("Student", studentSchema):

"Student": This is the name of the model. It is a string that Mongoose uses to name the model and subsequently, to determine the name of the collection in MongoDB. Mongoose automatically pluralizes this name and converts it to lowercase when it creates the collection. So, a model named "Student" will correspond to a collection named "students" in MongoDB.
studentSchema: This is the schema that defines the structure of the documents in the collection. It specifies the fields, data types, and any validation rules for the documents.
const Student: This part assigns the model to the constant Student. This constant is what you use in your code to interact with the collection, for instance, to create new documents, query the collection, update documents, etc.

Usage:

const newStudent = new Student({ username, email, password });

new Student({...}): Creates a new instance of the Student model (i.e., a new document that follows the schema).
newStudent.save(): Saves this instance to the students collection in MongoDB.
newStudent.save(): This method saves the new instance to the MongoDB collection students.
then and catch: These handle the promise returned by the save() method. If the save operation is successful, it logs the result and sends a success response. If an error occurs, it logs the error and sends an error response.

```
app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;

    console.log("Received signup request:", username, email, password);

    const newStudent = new Student({ username, email, password });

    newStudent
        .save()
        .then((result) => {
            console.log("Signup data inserted successfully:", result);
            res.send("Signup successful!");
        })
        .catch((err) => {
            if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
                console.error("Error inserting document - Duplicate email:", err);
                return res.status(400).send("Email already exists. Please use a different email.");
            }
            console.error("Error inserting document:", err);
            res.status(500).send("Error inserting document into database");
        });
});
```

In Mongoose, when a duplicate key error occurs, such as when you try to insert a document with a field that has a unique constraint (unique: true), MongoDB will throw an error with a code of 11000

Explanation:
err.code === 11000: Checks if the error code corresponds to a MongoDB duplicate key error.
err.keyPattern.email: Verifies that the duplicate key error is specifically for the email field.
Handling the Error:
If a duplicate email is detected (err.code === 11000 and err.keyPattern.email is truthy), it logs an error message and sends a 400 Bad Request response with a user-friendly message indicating that the email already exists.
If the error is not related to duplicate keys (err.code !== 11000), it logs a generic error message and sends a 500 Internal Server Error response.

IP addresses can change due to several reasons, especially if you are on a dynamic IP address provided by your Internet Service Provider (ISP) or if you are switching between different networks (e.g., moving from home to office, or using a VPN). Here are some common reasons why your IP address might change:

Dynamic IP Addressing: Most ISPs assign dynamic IP addresses to their users. This means your IP address can change periodically or whenever you reconnect to the internet.
Different Networks: If you switch between different networks (e.g., home, office, public Wi-Fi), each network will have a different external IP address.
VPN Usage: Using a VPN can change your external IP address to one provided by the VPN server.
Network Configuration Changes: Changes in your network hardware (such as routers or modems) or network settings can result in a different IP address being assigned.
To handle these changes more gracefully when working with MongoDB Atlas, you can use one of the following strategies:

1. Whitelist All IP Addresses (Not Recommended for Production)
   You can whitelist all IP addresses by adding 0.0.0.0/0 to your IP whitelist in MongoDB Atlas. This allows connections from any IP address, which is useful for development but not secure for production.

2. Update IP Whitelist Automatically
   You can use a script to update your IP whitelist in MongoDB Atlas automatically. Here is an example using Node.js:

```
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const MONGODB_ATLAS_API_KEY = process.env.MONGODB_ATLAS_API_KEY; // Your MongoDB Atlas API Key
const MONGODB_ATLAS_PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID; // Your MongoDB Atlas Project ID

const addCurrentIPToWhitelist = async () => {
  try {
    // Get current IP address
    const response = await axios.get('https://api.ipify.org?format=json');
    const currentIP = response.data.ip;
    console.log(`Current IP Address: ${currentIP}`);

    // Add current IP to MongoDB Atlas whitelist
    await axios.post(
      `https://cloud.mongodb.com/api/atlas/v1.0/groups/${MONGODB_ATLAS_PROJECT_ID}/accessList`,
      [
        {
          ipAddress: currentIP,
          comment: 'Current IP Address',
        },
      ],
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${MONGODB_ATLAS_API_KEY}`,
        },
      }
    );

    console.log('IP address added to whitelist successfully.');
  } catch (error) {
    console.error('Error adding IP address to whitelist:', error);
  }
};

addCurrentIPToWhitelist();
```

```
// Define the route to get all students
app.get("/students", (req, res) => {
    let students = [];

    db.collection("students")
        .find()
        .sort({ firstName: 1 })
        .toArray()
        .then((students) => {
            res.status(200).json(students);
        })
        .catch((err) => {
            res.status(500).json({ error: "Could not fetch the documents" });
        });
});
```

Code Snippet 1:

````
db.collection("students")
    .find()
    .sort({ firstName: 1 })
    .forEach((student) => students.push(student))
    .then(() => {
        res.status(200).json(students);
    })
```
Explanation:

find() and sort(): This initiates a MongoDB query to find all documents in the "students" collection and sort them by the "firstName" field in ascending order.
forEach((student) => students.push(student)): This part iterates over each document returned by find() and pushes it into the students array.
then(() => { res.status(200).json(students); }): After all documents have been pushed into the students array, it sends a JSON response (res.status(200).json(students)) containing all the documents retrieved from the database.
Pros:

Efficient for processing large result sets if you need to perform actions on each document individually before sending the response.
Cons:

Not suitable for sending the response immediately after the find() operation completes, as forEach() and subsequent actions are asynchronous.
Code Snippet 2:
````

app.get("/students", (req, res) => {
db.collection("students")
.find()
.sort({ firstName: 1 })
.toArray()
.then((students) => {
res.status(200).json(students);
})
.catch(() => {
res.status(500).json({ error: "Could not fetch the documents" });
});
});

```
Explanation:

find() and sort(): Similar to the previous snippet, this initiates a MongoDB query to find all documents in the "students" collection and sort them by the "firstName" field in ascending order.
toArray(): This converts the cursor returned by find() into an array of documents. This method returns a promise that resolves to an array containing all documents in the result set.
then((students) => { res.status(200).json(students); }): After converting the result set to an array, it sends a JSON response (res.status(200).json(students)) containing all the documents retrieved from the database.
.catch(() => { res.status(500).json({ error: "Could not fetch the documents" }); });: This handles any errors that may occur during the find() or toArray() operations and sends a 500 status response with an error message.
Pros:

Directly sends the response once all documents are retrieved and converted to an array, making the code more straightforward and synchronous in handling the response.
Cons:

If you need to perform complex operations on each document individually before sending the response, this approach might not be suitable without additional asynchronous handling.
Recommendation:
Use Code Snippet 2: For most cases where you simply want to fetch and send all documents from a collection, converting the cursor to an array (toArray()) and then sending the response directly (res.json()) is the cleaner and more typical approach in Node.js applications.

Consider Code Snippet 1: If you need to perform complex operations or modifications on each document retrieved before sending the response, you can use a similar approach with forEach(). Ensure to handle asynchronous operations properly within the loop and before sending the response to avoid issues with timing and concurrency.
```

MongoDB Aggregation Pipelines
Aggregation Pipelines
Aggregation operations allow you to group, sort, perform calculations, analyze data, and much more.

Aggregation pipelines can have one or more "stages". The order of these stages are important. Each stage acts upon the results of the previous stage.

```
db.posts.aggregate([
  {
    $match: { likes: { $gt: 1 } }
  },
  {
    $group: { _id: "$category", totalLikes: { $sum: "$likes" } }
  }
])
```
