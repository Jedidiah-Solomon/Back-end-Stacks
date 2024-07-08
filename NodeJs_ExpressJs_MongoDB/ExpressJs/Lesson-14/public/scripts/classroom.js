document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/classroom.html", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies in the request
        });

        console.log("Request headers sent:", {
            "Content-Type": "application/json",
        }); // Log the headers sent with the request

        if (response.ok) {
            const classroomContent = await response.text();
            document.body.innerHTML = classroomContent;
        } else {
            console.error("Unauthorized access. Status code:", response.status);
            alert("Unauthorized access. Please login again.");
            window.location.href = "/login.html";
        }
    } catch (error) {
        console.error("Fetch error:", error);
        alert("An error occurred: " + error.message);
        window.location.href = "/login.html";
    }
});
