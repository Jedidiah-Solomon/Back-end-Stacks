const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;

/*-------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------*/

// // ----------------------------Just to see more  details, combine mongoose and mongodb------ //
// const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");

// const connectDB = async () => {
//     try {
//         mongoose.set("strictQuery", false);
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`Database Connected: ${conn.connection.host}`);

//         // Connect using MongoClient to get additional info
//         const client = new MongoClient(process.env.MONGODB_URI, {});

//         await client.connect();
//         const admin = client.db().admin();

//         // Fetch and log database info
//         const dbs = await admin.listDatabases();
//         console.log("Databases:");
//         dbs.databases.forEach((db) => console.log(` - ${db.name}`));

//         // Log collections info for each database
//         for (const dbInfo of dbs.databases) {
//             const db = client.db(dbInfo.name);
//             const collections = await db.listCollections().toArray();
//             console.log(`Collections in ${dbInfo.name}:`);
//             collections.forEach((collection) =>
//                 console.log(` - ${collection.name}`)
//             );
//         }

//         // Log MongoDB edition and other cluster details
//         const info = await admin.serverStatus();
//         console.log(`MongoDB Edition: ${info.version}`);
//         console.log(`Cluster: ${info.host}`);
//         console.log(`Replica Set: ${info.repl.setName}`);
//         console.log(`Nodes: ${info.repl.members.length}`);

//         await client.close();
//     } catch (error) {
//         console.error(error);
//     }
// };

// module.exports = connectDB;
