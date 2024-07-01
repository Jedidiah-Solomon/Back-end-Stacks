document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(
            password
        )}`,
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text) => {
                    throw new Error(text);
                });
            }
            return response.text();
        })
        .then((data) => {
            console.log(data); // Logging server response for debugging
            if (data === "Login successful!") {
                alert("Login successful!");
                // Redirect or perform further actions after successful login
                window.location.href = "/"; // Example redirect
            } else {
                alert(data); // Display error message from the server
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(error.message);
        });
});
