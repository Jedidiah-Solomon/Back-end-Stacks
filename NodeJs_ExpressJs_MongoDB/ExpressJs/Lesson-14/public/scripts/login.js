document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.message === "Login successful") {
                console.log("Login successful, redirecting...");
                alert("Login successful!");
                window.location.href = "/classroom.html";
            } else {
                alert("Login failed");
            }
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    } catch (error) {
        alert("An error occurred: " + error.message);
    }
});
