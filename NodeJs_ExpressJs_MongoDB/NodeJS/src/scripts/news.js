// news.js

document.addEventListener("DOMContentLoaded", function () {
    const successMsg = document.querySelector(".success-msg");

    const dismissed = localStorage.getItem("successMsgDismissed");

    if (dismissed === "true") {
        successMsg.style.display = "none";
    }

    setTimeout(function () {
        successMsg.style.display = "none";
        localStorage.setItem("successMsgDismissed", "true");
        console.log("Success message dismissed and localStorage set.");
    }, 5000);
});
