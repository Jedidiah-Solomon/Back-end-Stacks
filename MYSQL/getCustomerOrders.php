<?php

// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hungsmeal_group";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve customer ID from GET parameter
$customerId = $_GET['customerId'];

// Prepare SQL query to fetch customer orders
$sql = "SELECT * FROM `Order` WHERE CustomerID = $customerId";

$result = $conn->query($sql);

$orders = array();

// If there are orders, fetch them and add them to the orders array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
}

// Close database connection
$conn->close();

// Output JSON response with customer orders
header('Content-Type: application/json');
echo json_encode($orders);
?>
