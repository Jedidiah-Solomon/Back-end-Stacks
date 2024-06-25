document
    .getElementById("customer-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const msg = document.getElementById("msg").value;

        fetch("/newCustomer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, msg }),
        })
            .then((response) => {
                // Log response headers
                console.log("Response Headers:");
                console.log(response.headers);

                // Handle response data, returns the response for the next `.then()` block
                return response.json();
            })
            .then((data) => {
                console.log("Success:", data);
                alert("Form Submitted successfully!");
                this.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("There was an error adding the customer.");
            });
    });
