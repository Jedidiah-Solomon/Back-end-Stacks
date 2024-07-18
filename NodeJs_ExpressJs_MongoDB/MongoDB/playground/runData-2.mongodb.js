use("Jvn_Cookies_Sales_Record");

//-----------Comparison Operators------------//

// $eq (Equal)
//Find orders where the product name is "Pepperoni":
db.orders.find({ name: { $eq: "Pepperoni" } });

// $ne (Not Equal)
//Find orders where the product name is not "Pepperoni":
db.orders.find({ name: { $ne: "Pepperoni" } });

// $gt (Greater Than)
//Find orders where the price is greater than 15:
db.orders.find({ price: { $gt: 15 } });

// $gte (Greater Than or Equal)
//Find orders where the price is greater than or equal to 20:
db.orders.find({ price: { $gte: 20 } });

// $lt (Less Than)
//Find orders where the price is less than 15:
db.orders.find({ price: { $lt: 15 } });

// $lte (Less Than or Equal)
//Find orders where the price is less than or equal to 19:
db.orders.find({ price: { $lte: 19 } });

//$in (In Array)
//Find orders where the product name is either "Pepperoni" or "Cheese":
db.orders.find({ name: { $in: ["Pepperoni", "Cheese"] } });

//-----------Logical Operators------------//
// $and -- Find orders where the product name is "Pepperoni" and the price is greater than 15:
db.orders.find({ $and: [{ name: "Pepperoni" }, { price: { $gt: 15 } }] });

// $or -- Find orders where the product name is "Pepperoni" or the price is less than 15:
db.orders.find({ $or: [{ name: "Pepperoni" }, { price: { $lt: 15 } }] });

//$nor --Find orders where the product name is not "Pepperoni" and the price is not less than 15:
db.orders.find({ $nor: [{ name: "Pepperoni" }, { price: { $lt: 15 } }] });

// $not -- Find orders where the product name is not "Pepperoni":
db.orders.find({ name: { $not: { $eq: "Pepperoni" } } });

// $ne -- Find orders where the product name is not "Pepperoni":
db.orders.find({ name: { $ne: "Pepperoni" } });

//-----------Evaluation Operators------------//

// $regex -- Find orders where the product name starts with "P":
db.orders.find({ name: { $regex: /^P/ } });
db.orders.find({ name: { $regex: /^p/i } });

// Explanation
// $regex: This is the regular expression operator used for pattern matching.
// /^p/: This regular expression matches any string that starts with the letter "p". The ^ character signifies the start of the string.
// i: This is the case-insensitive flag, making the regular expression match both uppercase "P" and lowercase "p".

// $text -- First, create a text index on the name field:
db.orders.createIndex({ name: "text" });

//Then, find orders where the product name includes "Pepperoni":
db.orders.find({ $text: { $search: "Pepperoni" } });

// $where -- Find orders where the quantity is greater than the price:
db.orders.find({ $where: "this.quantity > this.price" });
// This might not work due to fear of atlas for code injections, then use

db.orders.aggregate([
    {
        $match: {
            $expr: { $gt: ["$quantity", "$price"] },
        },
    },
]);
