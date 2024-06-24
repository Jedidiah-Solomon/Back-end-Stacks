document.addEventListener("DOMContentLoaded", () => {
    const passwordbox = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", () => {
        // Toggle the password visibility based on checkbox state
        if (checkbox.checked) {
            passwordbox.type = "text"; // Show password
        } else {
            passwordbox.type = "password"; // Hide password
        }
    });
});
console.log("BornToWin");
