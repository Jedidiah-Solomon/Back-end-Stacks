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
        reviews: { name: "John Doe", remark: "Good" },
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

//Find students with age  7 or 8 or 9
db.students.find({ age: { $in: [7, 8, 9] } });

//Find students with age not  7 or 8 or 9
db.students.find({ age: { $nin: [7, 8, 9] } });

//Find students with cooking as one of their hobbies
db.students.find({ hobbies: "Cooking" });

//Find students with cooking as thier only hobby
db.students.find({ hobbies: ["Cooking"] });

// Delete a single document where the student's first name is "John"
db.students.deleteOne({ firstName: "John" });

// Convert the string ID to an ObjectId and delete the document
db.students.deleteOne({ _id: ObjectId("6682c178d152e60f88c4b6ed") });

// Delete all documents where the students are in class "5A"
db.students.deleteMany({ class: "5A" });

// Update the email of the student with first name "Jane"
db.students.updateOne(
    { firstName: "Jane" },
    { $set: { email: "jane.newemail@example.com" } }
);

// Update the class of all students with the first name "Doe" to "6B"
db.students.updateMany({ lastName: "Doe" }, { $set: { class: "6B" } });

// Add a new field "grade" to all students and set its value to "A"
db.students.updateMany({}, { $set: { grade: "A" } });

// Increment the age of all students by 1 year
db.students.updateMany({}, { $inc: { age: 1 } });

// Find students with reviews by "John Doe"
const studentsWithJohnDoeReviews = db.students
    .find({ "reviews.name": "John Doe" })
    .toArray();
