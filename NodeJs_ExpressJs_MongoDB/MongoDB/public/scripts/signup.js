document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${encodeURIComponent(
            username
        )}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(
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
            console.log(data);
            alert("Signup successful!");
            this.reset();
            window.location.href = "/login"; // Redirect to login page after successful signup
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(`Signup failed: ${error.message}`);
        });
});
