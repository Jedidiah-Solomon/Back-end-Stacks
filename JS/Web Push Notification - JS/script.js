document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#msg-btn");
    let msgLink = `https://www.google.com`;

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
        return;
    }

    //First Notification | Within window
    btn.addEventListener("click", () => {
        Notification.requestPermission()
            .then((permission) => {
                if (permission === "granted") {
                    new Notification("Today's News!", {
                        body: `Our coding classes are just $50/week. Join now ${msgLink}`,
                        icon: "favicon.ico",
                        // tag: "Welcome News", //This will make it not to click many times but overide
                    });
                } else {
                    console.log("Notification permission denied");
                    alert(
                        "Notification permission denied by you, please grant access!"
                    );
                }
            })
            .catch((err) => {
                console.error("Error requesting notification permission:", err);
            });
    });
});

//Second Notification | Outside window
let notification;
let interval;

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        // Store the timestamp when the tab becomes hidden
        const leaveTime = new Date();

        // Create the initial notification
        notification = new Notification("Come back please", {
            body: `You have been gone for 0 seconds`,
            tag: "Come back",
        });

        // Update the notification body periodically with the elapsed time
        interval = setInterval(() => {
            const elapsedTimeSeconds = Math.round(
                (new Date() - leaveTime) / 1000
            );
            // Close the previous notification
            notification.close();
            // Create a new notification with updated content
            notification = new Notification("Come back please", {
                body: `You have been gone for ${elapsedTimeSeconds} seconds`,
                tag: "Come back",
            });
        }, 1000); // Update notification body every second
    } else {
        // Clear the interval and close the notification when the page becomes visible
        if (interval) {
            clearInterval(interval);
        }
        if (notification) {
            notification.close();
        }
    }
});
