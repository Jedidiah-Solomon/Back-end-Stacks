// delete.js
document.addEventListener("DOMContentLoaded", function () {
    const deleteForm = document.getElementById("delete-form");

    deleteForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch("/delete", {
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
                console.log("Delete Response:", data);
                alert(data.message);
                deleteForm.reset();
            })
            .catch((error) => {
                console.error("Delete Error:", error);
                alert("An error occurred. Please try again."); // Display generic error message
            });
    });
});
