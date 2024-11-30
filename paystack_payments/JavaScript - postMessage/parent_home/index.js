// Send message to iframe - special
const iframe = document.getElementById("iframe-5500");

// iframe.addEventListener("load", (event) => {
//   if (event.origin === "http://127.0.0.1:5500") {
//     iframe.contentWindow.postMessage(
//       "Hello I am parent window - 1!!",
//       event.origin
//     );
//   }
// });

// Send another message when iframe loads
iframe.addEventListener("load", () => {
    iframe.contentWindow.postMessage(
        {
            type: "paymentData",
            content: "sub-account type",
            data: { name: "John", level: "1", employed: true },
        },
        "http://127.0.0.1:5500"
    );
});

// // Function to send a broadcast message to any listener (using "*")
// function sendBroadcastMessage() {
//   iframe.contentWindow.postMessage(
//     { type: "broadcast", content: "This is a broadcast message to all!" },
//     "*"
//   );
// }

// // Listen for messages from iframe
// window.addEventListener("message", (event) => {
//   if (event.origin === "http://127.0.0.1:5500") {
//     console.log("Message received from iframe - response 1:", event);
//     console.log("Message received from iframe - response 1:", event.data);
//   }
// });
