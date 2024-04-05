function getCustomerDetails() {
    const customerId = document.getElementById("customers").value;
    console.log("Customer ID:", customerId); // Check if customerId is retrieved correctly
  
    // AJAX request to fetch customer details
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `/getCustomerDetails.php?customerId=${customerId}`, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const customer = JSON.parse(xhr.responseText);
          console.log("Customer Details:", customer); // Check if customer details are retrieved correctly
          document.getElementById("customerDetails").innerHTML = `
            <h2>Customer Details</h2>
            <p>Name: ${customer.firstName} ${customer.lastName}</p>
            <p>Email: ${customer.email}</p>
            <p>Phone: ${customer.phone}</p>
            <p>Gender: ${customer.gender}</p>
          `;
        } else {
          console.error("Error:", xhr.status); // Log any errors that occur during the AJAX request
        }
      }
    };
    xhr.send();
  

    // AJAX request to fetch customer orders
    const xhrOrders = new XMLHttpRequest();
    xhrOrders.open("GET", `/getCustomerOrders.php?customerId=${customerId}`, true);
    xhrOrders.onreadystatechange = function() {
        if (xhrOrders.readyState === 4 && xhrOrders.status === 200) {
            const orders = JSON.parse(xhrOrders.responseText);
            const ordersList = orders.map(order => `<li>Order ID: ${order.orderID}, Total Amount: ${order.totalAmount}</li>`).join("");
            document.getElementById("customerOrders").innerHTML = `
                <h2>Customer Orders</h2>
                <ul>${ordersList}</ul>
            `;
        }
    };
    xhrOrders.send();
}
