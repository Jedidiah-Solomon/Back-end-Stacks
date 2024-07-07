document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("accessToken");
    console.log("Token retrieved from localStorage:", token); // Log the retrieved token

    if (!token) {
        alert("No access token found, please login first.");
        window.location.href = "/login.html";
        return;
    }

    try {
        const response = await fetch("/classroom", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        console.log("Request headers sent:", {
            Authorization: `Bearer ${token}`,
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
