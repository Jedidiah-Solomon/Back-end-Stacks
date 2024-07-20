// To run single query
router.get("/api/users", (req, res) => {
    const query =
        "INSERT INTO users (name, email, age) VALUES (Aisha Mohammed, aisha.mohammed@example.com, 34)";

    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// To run multiple queries
router.get("/api/users", (req, res) => {
    const query = "INSERT INTO users (name, email, age) VALUES ?";
    const customers = [
        ["Jedidiah Developer", "jedidiah.dev@example.com", 19],
        ["Aisha Mohammed", "aisha.mohammed@example.com", 34],
    ];

    db.query(query, [customers], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//The Fields Object
//The third parameter of the callback function is an array containing information
//about each field in the results.
router.get("/api/users", (req, res) => {
    const query =
        "INSERT INTO users (name, email, age) VALUES (Aisha Mohammed, aisha.mohammed@example.com, 34)";

    db.query(query, (err, results, fields) => {
        if (err) throw err;
        res.json(results);
        console.log(results);
        console.log(fields);
    });
});

/*
[
  FieldPacket {
    catalog: 'def',
    db: 'cookies_sales_records',
    table: 'products',
    orgTable: 'products',
    name: 'id',
    orgName: 'id',
    charsetNr: 63,
    length: 11,
    type: 3,
    flags: 16899,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  },
  FieldPacket {
    catalog: 'def',
    db: 'cookies_sales_records',
    table: 'products',
    orgTable: 'products',
    name: 'name',
    orgName: 'name',
    charsetNr: 33,
    length: 300,
    type: 253,
    flags: 4097,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  },
  FieldPacket {
    catalog: 'def',
    db: 'cookies_sales_records',
    table: 'products',
    orgTable: 'products',
    name: 'price',
    orgName: 'price',
    charsetNr: 63,
    length: 12,
    type: 246,
    flags: 4097,
    decimals: 2,
    default: undefined,
    zeroFill: false,
    protocol41: true
  },
  FieldPacket {
    catalog: 'def',
    db: 'cookies_sales_records',
    table: 'products',
    orgTable: 'products',
    name: 'quantity',
    orgName: 'quantity',
    charsetNr: 63,
    length: 11,
    type: 3,
    flags: 4097,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  }
]


*/
