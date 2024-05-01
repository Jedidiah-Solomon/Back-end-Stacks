const worker = new Worker('multiply-worker.js');

worker.postMessage({ num1: 5, num2: 3 });

worker.onmessage = (event) => {
  const result = event.data;
  console.log(`Result: ${result}`);
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Result: ${result}`;
};

//------------------------//


const worker2 = new Worker('worker-script.js');

worker2.onmessage = (event) => {
    console.log(`Message received from worker:', ${event.data}`);
    console.log(event.data);
    worker2.postMessage('Hello Worker!');
    worker.terminate();
};
//---------------------
let worker2;

        function startWorker() {
            //Check to ensure that the Worker interface is supported by the browser
            if (typeof(Worker) !== 'undefined') {
                // Create a new Worker instance
                worker2 = new Worker('worker-script.js');

                // Send data to the worker
                const data = { name: 'John', age: 30 };
                worker2.postMessage(data);

                // Handle messages from the worker
                worker2.onmessage = function(event) {
                    document.getElementById('result2').textContent = event.data;
                };
            } else {
                document.getElementById('result2').textContent = 'Web Workers are not supported in this browser.';
            }
        }





