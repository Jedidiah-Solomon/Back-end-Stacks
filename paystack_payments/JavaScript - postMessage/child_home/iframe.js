// Listen for messages sent from the parent

// window.onmessage = (event) => {
//   if (event.origin === "http://127.0.0.1:4500") {
//     console.log("Message received from parent:", event.data);
//     event.source.postMessage("Hello this is from iframe!", event.origin);
//   }
// }; // Handles only one message thus overides if used again

//   // Listener 2: Sends a response back to the parent window
// window.addEventListener("message", (event) => {
//     if (event.origin === "http://127.0.0.1:4500") {
//       event.source.postMessage("Hello from iframe - Listener 2!", event.origin);
//     }
//   });

// // Listener 1: Logs the message data
// window.addEventListener("message", (event) => {
//   if (event.origin === "http://127.0.0.1:4500") {
//     console.log("Message received from parent:", event.data);
//     event.source.postMessage(
//       "Hello this is from iframe, I received the message - 1!",
//       event.origin
//     );
//   }
// });

// Listener 3: Handles specific message types
window.addEventListener("message", (event) => {
    if (
        event.origin === "http://127.0.0.1:4500" &&
        event.data.type === "paymentData"
    ) {
        console.log(`Data type is: ${event.data.type}`);
        console.log(
            "Special Message Received from parent - Content:",
            event.data.content
        );
        console.log(
            "Special Message Received from parent - PaymentData:",
            event.data.data
        );
    }
});

// // Listener 4: General listener that accepts messages from any origin
// window.addEventListener("message", (event) => {
//   console.log("General listener (any origin) - Message received:", event.data);
//   event.source.postMessage("Response from iframe to any origin", "*");
// });
