document.getElementById("setCookie").addEventListener("click", () => {
    document.cookie = "username=John Doe";
    alert("Cookie set: username=John Doe");
});

document.getElementById("getCookie").addEventListener("click", () => {
    alert("Cookies: " + document.cookie);
});

document.getElementById("sendRequest").addEventListener("click", () => {
    fetch("/cookiesByMe")
        .then((response) => response.text())
        .then((data) => {
            alert(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

document.getElementById("postCookie").addEventListener("click", () => {
    fetch("/setCookie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cookieName: "sessionId",
            cookieValue: "abc123",
        }),
    })
        .then((response) => response.text())
        .then((data) => {
            alert(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
