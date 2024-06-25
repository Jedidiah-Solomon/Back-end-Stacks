document.addEventListener("DOMContentLoaded", function () {
    const updateForm = document.getElementById("update-form");
    const errorMessage = document.getElementById("error-message");

    updateForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const msg = document.getElementById("msg").value;

        // Validate message before proceeding
        if (msg.trim() === "") {
            alert("Message cannot be blank!");
            return; // Exit function if message is blank
        }

        fetch("/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, msg }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Update Response:", data);
                alert(data.message); // Display response message to the user
                this.reset();
                if (data.error) {
                    errorMessage.textContent = data.error; // Display server error message
                } else {
                    errorMessage.textContent = ""; // Clear error message if no error
                }
            })
            .catch((error) => {
                console.error("Update Error:", error);
                errorMessage.textContent =
                    "An error occurred. Please try again."; // Display generic error message
            });
    });
});
