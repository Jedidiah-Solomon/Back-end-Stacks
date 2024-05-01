self.onmessage = function(event) {
    const message = event.data;
    console.log('Message received in worker:', message);

    // Perform heavy calculation or processing
    const result = performHeavyCalculation(message);

    // Send the result back to the main thread
    self.postMessage(result);
};

function performHeavyCalculation(data) {
    if (typeof data === 'object' && data !== null) {
        // Check if the input data is an object
        const name = data.name || 'Unknown';
        const age = data.age || 'Unknown';
        return `Hello, ${name}! Your age is ${age}.`;
    } else {
        // Handle invalid input gracefully
        return 'Invalid input received by the worker.';
    }
}



















//Create a Worker:
//Create a new Worker instance by providing the URL of 
//the script file that you want to run in the background.
//--const worker = new Worker('worker-script.js');--//


//Handle Messages:
//Set up event listeners to handle incoming messages from the worker and respond accordingly.
//-- worker.onmessage = (event) => {
    //console.log('Message received from worker:', event.data);
//};
/*


Send Messages:
Send messages to the worker using the postMessage method.
worker.postMessage('Hello Worker!');

Terminate Worker:
Terminate the worker when it's no longer needed.
worker.terminate();
-------------
self.onmessage = (event) => {
    const message = event.data;
    console.log('Message received in worker:', message);

    // Perform background tasks
    const result = performHeavyCalculation(message);

    // Send result back to the main thread
    self.postMessage(result);
};

function performHeavyCalculation(data) {
    if (typeof data === 'string') {
        // If data is a string, convert it to uppercase
        return data.toUpperCase();
    } else {
        // Handle other types of data (e.g., numbers, objects) gracefully
        return 'Invalid input: ' + String(data);
    }
}







*/