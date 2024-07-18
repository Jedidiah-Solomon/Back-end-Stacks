const database = "nigeria_election";
const collection = "voters_biodata";

// Use the database
use(database);

// Define the data for 10 persons
const votersData = [
    {
        firstName: "John",
        lastName: "Doe",
        middleName: "Michael",
        email: "john.doe@example.com",
        age: 30,
        religion: "Christianity",
        educationLevel: "Bachelor's Degree",
        state: "Lagos",
        lga: "Ikeja",
        tribe: "Yoruba",
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        middleName: "Ann",
        email: "jane.smith@example.com",
        age: 28,
        religion: "Islam",
        educationLevel: "Master's Degree",
        state: "Kano",
        lga: "Kano Municipal",
        tribe: "Hausa",
    },
    {
        firstName: "David",
        lastName: "Brown",
        middleName: "Oluwaseun",
        email: "david.brown@example.com",
        age: 35,
        religion: "Christianity",
        educationLevel: "PhD",
        state: "Ogun",
        lga: "Abeokuta North",
        tribe: "Yoruba",
    },
    {
        firstName: "Mary",
        lastName: "Johnson",
        middleName: "Grace",
        email: "mary.johnson@example.com",
        age: 25,
        religion: "Christianity",
        educationLevel: "Bachelor's Degree",
        state: "Abuja",
        lga: "Garki",
        tribe: "Igbo",
    },
    {
        firstName: "Ahmed",
        lastName: "Mohammed",
        middleName: "Ali",
        email: "ahmed.mohammed@example.com",
        age: 32,
        religion: "Islam",
        educationLevel: "Master's Degree",
        state: "Kaduna",
        lga: "Kaduna South",
        tribe: "Hausa",
    },
    {
        firstName: "Blessing",
        lastName: "Okon",
        middleName: "Joy",
        email: "blessing.okon@example.com",
        age: 27,
        religion: "Christianity",
        educationLevel: "Bachelor's Degree",
        state: "Akwa Ibom",
        lga: "Uyo",
        tribe: "Ibibio",
    },
    {
        firstName: "James",
        lastName: "Taylor",
        middleName: "Peter",
        email: "james.taylor@example.com",
        age: 29,
        religion: "Christianity",
        educationLevel: "Master's Degree",
        state: "Rivers",
        lga: "Port Harcourt",
        tribe: "Ijaw",
    },
    {
        firstName: "Fatima",
        lastName: "Aliyu",
        middleName: "Aisha",
        email: "fatima.aliyu@example.com",
        age: 31,
        religion: "Islam",
        educationLevel: "Bachelor's Degree",
        state: "Kano",
        lga: "Kano Municipal",
        tribe: "Hausa",
    },
    {
        firstName: "Chinedu",
        lastName: "Nwachukwu",
        middleName: "Emeka",
        email: "chinedu.nwachukwu@example.com",
        age: 26,
        religion: "Christianity",
        educationLevel: "Bachelor's Degree",
        state: "Enugu",
        lga: "Enugu East",
        tribe: "Igbo",
    },
    {
        firstName: "Amina",
        lastName: "Abubakar",
        middleName: "Halima",
        email: "amina.abubakar@example.com",
        age: 33,
        religion: "Islam",
        educationLevel: "PhD",
        state: "Bauchi",
        lga: "Bauchi",
        tribe: "Fulani",
    },
];

// Insert the data into the collection
db[collection].insertMany(votersData);

// -----------Using Mongo shell or Atlas //

// // Switch to the database
// use nigeria_election;

// // Define the data for 10 persons
// var votersData = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         middleName: "Michael",
//         email: "john.doe@example.com",
//         age: 30,
//         religion: "Christianity",
//         educationLevel: "Bachelor's Degree",
//         state: "Lagos",
//         lga: "Ikeja",
//         tribe: "Yoruba"
//     },
//     {
//         firstName: "Jane",
//         lastName: "Smith",
//         middleName: "Ann",
//         email: "jane.smith@example.com",
//         age: 28,
//         religion: "Islam",
//         educationLevel: "Master's Degree",
//         state: "Kano",
//         lga: "Kano Municipal",
//         tribe: "Hausa"
//     },
//     {
//         firstName: "David",
//         lastName: "Brown",
//         middleName: "Oluwaseun",
//         email: "david.brown@example.com",
//         age: 35,
//         religion: "Christianity",
//         educationLevel: "PhD",
//         state: "Ogun",
//         lga: "Abeokuta North",
//         tribe: "Yoruba"
//     },
//     {
//         firstName: "Mary",
//         lastName: "Johnson",
//         middleName: "Grace",
//         email: "mary.johnson@example.com",
//         age: 25,
//         religion: "Christianity",
//         educationLevel: "Bachelor's Degree",
//         state: "Abuja",
//         lga: "Garki",
//         tribe: "Igbo"
//     },
//     {
//         firstName: "Ahmed",
//         lastName: "Mohammed",
//         middleName: "Ali",
//         email: "ahmed.mohammed@example.com",
//         age: 32,
//         religion: "Islam",
//         educationLevel: "Master's Degree",
//         state: "Kaduna",
//         lga: "Kaduna South",
//         tribe: "Hausa"
//     },
//     {
//         firstName: "Blessing",
//         lastName: "Okon",
//         middleName: "Joy",
//         email: "blessing.okon@example.com",
//         age: 27,
//         religion: "Christianity",
//         educationLevel: "Bachelor's Degree",
//         state: "Akwa Ibom",
//         lga: "Uyo",
//         tribe: "Ibibio"
//     },
//     {
//         firstName: "James",
//         lastName: "Taylor",
//         middleName: "Peter",
//         email: "james.taylor@example.com",
//         age: 29,
//         religion: "Christianity",
//         educationLevel: "Master's Degree",
//         state: "Rivers",
//         lga: "Port Harcourt",
//         tribe: "Ijaw"
//     },
//     {
//         firstName: "Fatima",
//         lastName: "Aliyu",
//         middleName: "Aisha",
//         email: "fatima.aliyu@example.com",
//         age: 31,
//         religion: "Islam",
//         educationLevel: "Bachelor's Degree",
//         state: "Kano",
//         lga: "Kano Municipal",
//         tribe: "Hausa"
//     },
//     {
//         firstName: "Chinedu",
//         lastName: "Nwachukwu",
//         middleName: "Emeka",
//         email: "chinedu.nwachukwu@example.com",
//         age: 26,
//         religion: "Christianity",
//         educationLevel: "Bachelor's Degree",
//         state: "Enugu",
//         lga: "Enugu East",
//         tribe: "Igbo"
//     },
//     {
//         firstName: "Amina",
//         lastName: "Abubakar",
//         middleName: "Halima",
//         email: "amina.abubakar@example.com",
//         age: 33,
//         religion: "Islam",
//         educationLevel: "PhD",
//         state: "Bauchi",
//         lga: "Bauchi",
//         tribe: "Fulani"
//     }
// ];

// // Insert the data into the collection
// db.voters_biota.insertMany(votersData);

// // Confirm insertion
// print("Inserted " + votersData.length + " documents into collection voters_biota");
