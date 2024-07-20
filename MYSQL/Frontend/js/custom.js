document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/products")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const productsDiv = document.getElementById("products");
            data.forEach((product) => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                productCard.innerHTML = `
                    <img src="https://via.placeholder.com/150" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p class="price">$${product.price}</p>
                    <p>Orders: ${product.orders}</p>
                `;
                productsDiv.appendChild(productCard);
            });
        });
});

//-----------------Footer----------------//
document.getElementById("footer-year").textContent = new Date().getFullYear();

//--------API to get all product details------//
document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/product-details")
        .then((response) => response.json())
        .then((data) => {
            const productDetailsContainer =
                document.getElementById("product-details");
            productDetailsContainer.innerHTML = "";

            data.forEach((product) => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                productCard.innerHTML = `
                    <img src="https://via.placeholder.com/150" alt="${
                        product.name
                    }">
                    <h2>${product.name}</h2>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p>Quantity Available: ${product.quantity}</p>
                `;

                productDetailsContainer.appendChild(productCard);
            });
        })
        .catch((error) =>
            console.error("Error fetching product details:", error)
        );
});

//--------API to get order summary-----//

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("order-summary")) {
        fetch("/api/order-summary")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                const orderSummaryContainer =
                    document.getElementById("order-summary");
                orderSummaryContainer.innerHTML = "";

                // Create and display the summary overview
                const totalOrderedProducts = data.reduce(
                    (acc, order) => acc + order.quantity,
                    0
                );
                const totalAmount = data
                    .reduce((acc, order) => acc + order.total_amount, 0)
                    .toFixed(2);

                const summaryOverview = document.createElement("div");
                summaryOverview.className = "summary-overview";
                summaryOverview.innerHTML = `
                    <h2>Order Totals</h2>
                    <p>Total Ordered Products: ${totalOrderedProducts}</p>
                    <p>Total Amount: $${totalAmount}</p>
                `;
                orderSummaryContainer.appendChild(summaryOverview);

                // Display the individual order cards
                data.forEach((order) => {
                    const orderCard = document.createElement("div");
                    orderCard.className = "order-card";

                    orderCard.innerHTML = `
                        <h2>User: ${order.user_name}</h2>
                        <p>Product: ${order.product_name}</p>
                        <p>Quantity: ${order.quantity}</p>
                        <p><p>Order Date: ${formatDate(order.order_date)}</p>
                        <p>Amount: $${order.total_amount.toFixed(2)}</p>
                    `;

                    orderSummaryContainer.appendChild(orderCard);
                });
            })
            .catch((error) =>
                console.error("Error fetching order summary:", error)
            );
    }
    function formatDate(dateString) {
        const options = {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-GB", options);
    }
});
