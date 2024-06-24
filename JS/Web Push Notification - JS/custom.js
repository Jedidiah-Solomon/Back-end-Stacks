document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#msg-btn");
    let msgLink = `https://www.google.com`;

    console.log("Button element!!!!!!:", btn);

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
        return;
    }

    // Function to create and show a notification
    function showNotification(title, body, icon, tag) {
        console.log("Creating notification with:", title, body, icon, tag);
        const options = {
            body: body,
            icon: icon,
            tag: tag,
            requireInteraction: true, // Ensure notification remains visible until interaction
        };
        const notification = new Notification(title, options);
        console.log("Notification created:", notification);
    }

    // Event listener for the button click
    btn.addEventListener("click", () => {
        console.log("Button clicked");

        // Request permission first
        Notification.requestPermission()
            .then((permission) => {
                console.log("Permission result!!!!:", permission);
                if (permission === "granted") {
                    // Call showNotification immediately after permission is granted
                    showNotification(
                        "Today's News!",
                        `Our coding classes are just $50/week. Join now ${msgLink}`,
                        "favicon.ico",
                        "Welcome News!!!"
                    );
                } else {
                    console.log("Notification permission denied");
                    alert(
                        "Notification permission denied by you, please grant access!"
                    );
                }
            })
            .catch((err) => {
                console.error("Error requesting notification permission:", err);
                alert("Error requesting notification permission: " + err);
            });
    });
});
