const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(
            "mongodb+srv://Jedybrown:Jedybrown1234$@mymongodbcluster.xpw3kbt.mongodb.net/Redemed_school?retryWrites=true&w=majority&appName=MyMongoDBCluster"
        )
            .then((client) => {
                dbConnection = client.db("Redemed_school");
                return cb();
            })
            .catch((err) => {
                console.log(err);
                return cb(err);
            });
    },
    getDb: () => dbConnection,
};

// Database Connection Module (db.js)
// This module handles the connection to the MongoDB database. It exports two functions:

// connectToDb(cb): Connects to the MongoDB database.
// // getDb(): Returns the database connection.
// Explanation:
// MongoClient.connect: Connects to the MongoDB server running on localhost on port 27017 and uses the database bathphage_ict_students.
// dbConnection: Stores the database connection object once connected.
// connectToDb(cb): Attempts to connect to the database and calls the callback function cb with an error if the connection fails.
// getDb(): Returns the database connection object.
