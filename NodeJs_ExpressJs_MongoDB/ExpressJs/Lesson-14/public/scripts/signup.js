document
    .getElementById("signupForm")
    .addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            course_type: document.getElementById("course_type").value,
            state_of_origin: document.getElementById("state_of_origin").value,
            phone_no: document.getElementById("phone_no").value,
        };

        try {
            const response = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("User registered successfully");
                this.reset();
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    });
