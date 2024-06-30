document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const passwordInput = document.getElementById("password");
    const requirements = {
        uppercase: document.getElementById("uppercase"),
        lowercase: document.getElementById("lowercase"),
        number: document.getElementById("number"),
        special: document.getElementById("special"),
        length: document.getElementById("length"),
    };

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        const passwordRegex = {
            uppercase: /[A-Z]/,
            lowercase: /[a-z]/,
            number: /\d/,
            special: /[\W_]/,
            length: /.{8,}/,
        };

        for (let key in passwordRegex) {
            if (passwordRegex[key].test(password)) {
                requirements[key].classList.add("valid");
            } else {
                requirements[key].classList.remove("valid");
            }
        }
    });

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = passwordInput.value;

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    document.getElementById("message").style.color = "#1abc11"; // Green color for success
                    document.getElementById("message").textContent =
                        data.message;
                    this.reset();
                } else if (data.error === "Email already exists") {
                    document.getElementById("message").style.color = "#bc1111"; // Red color for error
                    document.getElementById("message").textContent = data.error;
                } else {
                    throw new Error("Signup failed");
                }
            })
            .catch((error) => {
                console.error("Signup Error:", error);
                document.getElementById("message").style.color = "#bc1111"; // Red color for error
                document.getElementById("message").textContent =
                    "An error occurred. Please try again.";
            });
    });
});
