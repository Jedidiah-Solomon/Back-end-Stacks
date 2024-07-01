// Select the database to use
use("Redemed_school");

// Create the students collection and insert documents
db.students.insertMany([
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        age: 10,
        class: "5A",
        gender: "Male",
        hobbies: ["reading", "swimming"],
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        age: 11,
        class: "5B",
        gender: "Female",
        hobbies: ["painting", "dancing"],
    },
    {
        firstName: "Mary",
        lastName: "Smith",
        email: "mary.smith@example.com",
        age: 12,
        class: "6A",
        gender: "Female",
        hobbies: ["chess", "reading"],
    },
    {
        firstName: "James",
        lastName: "Smith",
        email: "james.smith@example.com",
        age: 13,
        class: "6B",
        gender: "Male",
        hobbies: ["football", "video games"],
    },
    {
        firstName: "Robert",
        lastName: "Brown",
        email: "robert.brown@example.com",
        age: 14,
        class: "7A",
        gender: "Male",
        hobbies: ["swimming", "cycling"],
    },
    {
        firstName: "Linda",
        lastName: "Brown",
        email: "linda.brown@example.com",
        age: 15,
        class: "7B",
        gender: "Female",
        hobbies: ["reading", "singing"],
    },
    {
        firstName: "Michael",
        lastName: "Johnson",
        email: "michael.johnson@example.com",
        age: 16,
        class: "8A",
        gender: "Male",
        hobbies: ["basketball", "swimming"],
    },
    {
        firstName: "Patricia",
        lastName: "Johnson",
        email: "patricia.johnson@example.com",
        age: 17,
        class: "8B",
        gender: "Female",
        hobbies: ["dancing", "video games"],
    },
    {
        firstName: "William",
        lastName: "Jones",
        email: "william.jones@example.com",
        age: 18,
        class: "9A",
        gender: "Male",
        hobbies: ["football", "cycling"],
    },
    {
        firstName: "Jennifer",
        lastName: "Jones",
        email: "jennifer.jones@example.com",
        age: 19,
        class: "9B",
        gender: "Female",
        hobbies: ["painting", "swimming"],
    },
]);

//Find students with age = 10
db.students.find({ age: 10 });

//Find the maximum age among students
db.students.aggregate([{ $group: { _id: null, maxAge: { $max: "$age" } } }]);

//Find the minimum age among students
db.students.aggregate([{ $group: { _id: null, minAge: { $min: "$age" } } }]);

//Find students with age > 10
db.students.find({ age: { $gt: 10 } });

//Find students with age <= 4
db.students.find({ age: { $lte: 4 } });

//Find students with age = 17 or author = “John Doe”
db.students.find({
    $or: [{ age: 17 }, { firstNamer: "John" }],
});
