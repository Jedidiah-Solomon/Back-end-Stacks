// login.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Login Response:", data);
                document.getElementById("message").style.color = "#1abc11";
                document.getElementById("message").textContent = data.message;
                if (data.message === "Login successful") {
                    window.location.href = "/news";
                } else {
                    throw new Error(data.error || "Login failed");
                }
            })
            .catch((error) => {
                console.error("Login Error:", error);
                document.getElementById("message").style.color = "#bc1111";
                document.getElementById("message").textContent =
                    error.message || "An error occurred. Please try again.";
            });
    });
});
