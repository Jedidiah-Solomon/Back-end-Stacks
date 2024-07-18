const database = "Jvn_Cookies_Sales_Record";
// const collection_1 = "orders";
// const collection_2 = "customers";
// const collection_3 = "products";

// Use the database
use(database);

// Define the data
const orders = [
    {
        _id: 0,
        name: "Pepperoni",
        size: "small",
        price: 19,
        quantity: 10,
        date: ISODate("2021-03-13T08:14:30Z"),
    },
    {
        _id: 1,
        name: "Pepperoni",
        size: "medium",
        price: 20,
        quantity: 20,
        date: ISODate("2021-03-13T09:13:24Z"),
    },
    {
        _id: 2,
        name: "Pepperoni",
        size: "large",
        price: 21,
        quantity: 30,
        date: ISODate("2021-03-17T09:22:12Z"),
    },
    {
        _id: 3,
        name: "Cheese",
        size: "small",
        price: 12,
        quantity: 15,
        date: ISODate("2021-03-13T11:21:39.736Z"),
    },
    {
        _id: 4,
        name: "Cheese",
        size: "medium",
        price: 13,
        quantity: 50,
        date: ISODate("2022-01-12T21:23:13.331Z"),
    },
    {
        _id: 5,
        name: "Cheese",
        size: "large",
        price: 14,
        quantity: 10,
        date: ISODate("2022-01-12T05:08:13Z"),
    },
    {
        _id: 6,
        name: "Vegan",
        size: "small",
        price: 17,
        quantity: 10,
        date: ISODate("2021-01-13T05:08:13Z"),
    },
    {
        _id: 7,
        name: "Vegan",
        size: "medium",
        price: 18,
        quantity: 10,
        date: ISODate("2021-01-13T05:10:13Z"),
    },
];

const customers = [
    {
        _id: 0,
        name: "John Doe",
        age: 28,
        gender: "male",
        email: "john.doe@example.com",
        dateJoined: ISODate("2020-05-20T14:14:30Z"),
    },
    {
        _id: 1,
        name: "Jane Smith",
        age: 34,
        gender: "female",
        email: "jane.smith@example.com",
        dateJoined: ISODate("2019-03-13T11:13:24Z"),
    },
    {
        _id: 2,
        name: "Sam Brown",
        age: 22,
        gender: "male",
        email: "sam.brown@example.com",
        dateJoined: ISODate("2021-07-17T09:22:12Z"),
    },
    {
        _id: 3,
        name: "Lucy Black",
        age: 29,
        gender: "female",
        email: "lucy.black@example.com",
        dateJoined: ISODate("2020-01-13T11:21:39.736Z"),
    },
    {
        _id: 4,
        name: "Mark Green",
        age: 42,
        gender: "male",
        email: "mark.green@example.com",
        dateJoined: ISODate("2018-01-12T21:23:13.331Z"),
    },
    {
        _id: 5,
        name: "Linda White",
        age: 31,
        gender: "female",
        email: "linda.white@example.com",
        dateJoined: ISODate("2019-05-12T05:08:13Z"),
    },
];

const products = [
    {
        _id: 0,
        name: "Pepperoni Pizza",
        category: "Food",
        price: 19,
        stock: 100,
        supplier: "Best Pizza Co",
        dateAdded: ISODate("2020-03-13T08:14:30Z"),
    },
    {
        _id: 1,
        name: "Cheese Pizza",
        category: "Food",
        price: 14,
        stock: 200,
        supplier: "Best Pizza Co",
        dateAdded: ISODate("2020-03-13T09:13:24Z"),
    },
    {
        _id: 2,
        name: "Vegan Pizza",
        category: "Food",
        price: 18,
        stock: 150,
        supplier: "Healthy Eats",
        dateAdded: ISODate("2020-03-17T09:22:12Z"),
    },
    {
        _id: 3,
        name: "Soda",
        category: "Drink",
        price: 2,
        stock: 500,
        supplier: "Cool Drinks",
        dateAdded: ISODate("2020-01-13T11:21:39.736Z"),
    },
    {
        _id: 4,
        name: "Water",
        category: "Drink",
        price: 1,
        stock: 1000,
        supplier: "Cool Drinks",
        dateAdded: ISODate("2020-01-12T21:23:13.331Z"),
    },
    {
        _id: 5,
        name: "Salad",
        category: "Food",
        price: 5,
        stock: 300,
        supplier: "Healthy Eats",
        dateAdded: ISODate("2021-01-12T05:08:13Z"),
    },
];

// Insert the data into the collections - Use collection name direct, no need for getCollection()
db.orders.insertMany(orders);
db.customers.insertMany(customers);
db.products.insertMany(products);

print(
    "Inserted " + orders.length + " documents into collection orders collection"
);
print(
    "Inserted " +
        customers.length +
        " documents into collection customers collection"
);
print(
    "Inserted " +
        products.length +
        " documents into collection products collection"
);
