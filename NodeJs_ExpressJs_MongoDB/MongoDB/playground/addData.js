const { MongoClient } = require("mongodb");

// MongoDB Atlas connection URI
const uri =
    "mongodb+srv://Jedybrown:NodeJs-Blog1!@cluster-nodejs-blog.cl4hvbg.mongodb.net/nigeria_election?retryWrites=true&w=majority&appName=Cluster-nodejs-blog";

// Database and collection names
const database = "nigeria_election";
const collection = "voters_biodata";

// Data to be inserted
const votersData2 = [
    {
        firstName: "Jedy",
        lastName: "Paul",
        middleName: "Michael",
        email: "jedy.paul@example.com",
        age: 50,
        religion: "Christianity",
        educationLevel: "Bachelor's Degree",
        state: "Lagos",
        lga: "Ikeja",
        tribe: "Yoruba",
    },
    {
        firstName: "Akachi",
        lastName: "Onwuka",
        middleName: "Michael",
        email: "a.o@example.com",
        age: 50,
        religion: "Christianity",
        educationLevel: "GCE",
        state: "Imo",
        lga: "Isial Mbano",
        tribe: "Igbo",
    },
];

// Function to insert data
async function insertData() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const databaseInstance = client.db(database);
        const collectionInstance = databaseInstance.collection(collection);

        const result = await collectionInstance.insertMany(votersData2);
        console.log(
            `Inserted ${result.insertedCount} documents into collection ${collection}`
        );
    } catch (error) {
        console.error("Error inserting documents:", error);
    } finally {
        await client.close();
    }
}

// Call the function to insert data
insertData();
