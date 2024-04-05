<?php
// Database connection parameters
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password
$database = "hungsmeal_group"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the customerId parameter is set
if (isset($_GET['customerId'])) {
    // Sanitize the input to prevent SQL injection
    $customerId = $conn->real_escape_string($_GET['customerId']);

    // Query to fetch customer details from the database
    $sql = "SELECT * FROM Customer WHERE CustomerID = $customerId";

    // Execute the query
    $result = $conn->query($sql);

    // Check if the query was successful
    if ($result->num_rows > 0) {
        // Fetch customer details as an associative array
        $customer = $result->fetch_assoc();

        // Output customer details as JSON
        echo json_encode($customer);
    } else {
        // Error handling if customer is not found
        echo json_encode(array('error' => 'Customer not found'));
    }
} else {
    // Error handling if customerId parameter is not provided
    echo json_encode(array('error' => 'Customer ID parameter is missing'));
}

// Close connection
$conn->close();
?>
