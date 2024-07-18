const database = "Jvn_Cookies_Sales_Record";
const collection_1 = "orders";
const collection_2 = "customers";
const collection_3 = "products";

// // Use the database
use("Jvn_Cookies_Sales_Record");

// // Run a find command to view items sold on March 13th, 2021.
// const salesOnMarch13th2021 = db
//     .getCollection("orders")
//     .find({
//         date: { $gte: new Date("2021-03-13"), $lt: new Date("2021-03-14") },
//     })
//     .toArray();

// salesOnMarch13th2021.forEach((sale) => {
//     console.log(sale);
// });

// console.log(
//     `${salesOnMarch13th2021.length} sales occurred on March 13th, 2021.`
// );

//  or use
const salesOnMarch13th = db
    .getCollection("orders")
    .find({
        date: {
            $gte: new Date("2021-03-13T00:00:00Z"),
            $lt: ISODate("2021-03-14T00:00:00Z"),
        },
    })
    .count();

console.log(`Number of sales on March 13th, 2021: ${salesOnMarch13th}`);

//---------------Atlas/compass query code--------------------//
// db.orders.find({
//     date: {
//         $gte: new Date("2021-03-13T00:00:00Z"),
//         $lt: new Date("2021-03-14T00:00:00Z")
//     }
// });
//---------------Atlas/compass query code end----------------//

db.getCollection(collection_1).aggregate([
    // Match documents for the year 2021
    {
        $match: {
            date: {
                $gte: new ISODate("2021-01-01"),
                $lt: new ISODate("2022-01-01"),
            },
        },
    },
    // Group by product name and calculate total sales amount
    {
        $group: {
            _id: "$name",
            totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
        },
    },
    // Optionally, sort by totalSaleAmount descending
    { $sort: { totalSaleAmount: -1 } },
]);

// // Count the number of documents in the products collection
// const productCount = db.getCollection("products").countDocuments();

// // Print the result
// // print(`Total number of products: ${productCount}`);

// Aggregate to count unique product names in the orders collection
const result = db.getCollection("orders").aggregate([
    {
        $group: {
            _id: "$name",
            count: { $sum: 1 },
        },
    },
    {
        $project: {
            _id: 0,
            productName: "$_id",
            count: 1,
        },
    },
]);

// // Iterate over the result and print each product name and its count
// result.forEach((doc) => {
//     print(`${doc.productName}: ${doc.count}`);
// });
result.forEach((doc) => {
    console.log(
        ` The no. of ${doc.productName} in the orders colletion is: ${doc.count} \n`
    );
});

db.orders.aggregate([
    // Stage 1: Filter pizza order documents by date range
    {
        $match: {
            date: {
                $gte: new ISODate("2020-01-30"),
                $lt: new ISODate("2022-01-30"),
            },
        },
    },

    // Stage 2: Group remaining documents by date and calculate results
    {
        $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
            totalOrderValue: { $sum: { $multiply: ["$price", "$quantity"] } },
            averageOrderQuantity: { $avg: "$quantity" },
        },
    },

    // Stage 3: Sort   documents by totalOrderValue in descending order
    {
        $sort: { totalOrderValue: -1 },
    },
]);
