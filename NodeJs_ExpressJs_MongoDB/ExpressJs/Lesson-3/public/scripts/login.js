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
                alert(data.message);
                if (data.message === "Login successful") {
                    this.reset();
                    window.location.href = "/pages/news.html";
                } else {
                    // Handle other cases if needed
                }
            })
            .catch((error) => {
                console.error("Login Error:", error);
                alert("An error occurred. Please check your credentials.");
            });
    });
});
