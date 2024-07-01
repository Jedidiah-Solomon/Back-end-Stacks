document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}`,
    })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            alert("Login successful!");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
