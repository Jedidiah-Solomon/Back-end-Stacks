use("Jvn_Cookies_Sales_Record");

db.orders.aggregate([
    {
        $match: {
            $expr: { $gt: ["$quantity", "$price"] },
        },
    },
]);
