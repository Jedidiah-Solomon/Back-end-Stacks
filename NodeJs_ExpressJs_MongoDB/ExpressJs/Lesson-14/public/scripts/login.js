document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

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
            if (data.accessToken) {
                localStorage.setItem("accessToken", data.accessToken);
                console.log(
                    "Token stored:",
                    localStorage.getItem("accessToken")
                );
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
