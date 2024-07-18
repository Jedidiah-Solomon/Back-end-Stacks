db.voters_biodata.aggregate([
    // Stage 1: Match documents where age is greater than 30
    {
        $match: { age: { $gt: 30 } },
    },
    // Stage 2: Group documents by state and count the number of voters in each state
    {
        $group: { _id: "$state", totalVoters: { $sum: 1 } },
    },
    // Stage 3: Sort states by total number of voters in descending order
    {
        $sort: { totalVoters: -1 },
    },
    // Stage 4: Project only necessary fields for output
    {
        $project: {
            _id: 0,
            state: "$_id",
            totalVoters: 1,
        },
    },
]);
//load("aggregation.js");
