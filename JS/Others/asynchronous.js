/*
        Functions running in parallel with other functions are called asynchronous

        A good example is JavaScript setTimeout()

        In the real world, callbacks are most often used with asynchronous functions.

        A typical example is JavaScript setTimeout().

*/

//wait for 3 sec and change the h1 tag

// Craete the function outside
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo1").innerHTML = "I love You !!";
};

// Craete the function inside with function keyword
setTimeout(function(){
    document.getElementById("demo2").innerHTML = "I love You Sir !!";
}, 2000);

// Craete the function inside with arrow function
setTimeout(() => {
    document.getElementById("demo3").innerHTML = "I love You Sir and Ma !!";
}, 2500);

// Craete the function inside with  function keyword and pass all
setTimeout(function() { myFunction2("I love You mpa !!!"); }, 3500);

function myFunction2(value) {
  document.getElementById("demo4").innerHTML = value;
};

//-----Using setInterval() window/global function
//setInterval(function, time);

const timeToday = document.querySelector('#timeToday');
const timeBtn = document.querySelector('#timeBtn');
let intervalId; // Store the interval ID

// Start updating the time every second
intervalId = setInterval(updateTime, 1000);

// Event listener for the button
timeBtn.addEventListener('click', stopTime);

function updateTime() {
    const date = new Date();
    timeToday.innerHTML = `Local Date String: ${date.toLocaleDateString()} <br> 
                           Local Time String: ${date.toLocaleTimeString()} <br>
                           Local String: ${date.toLocaleString()} <br>
                           Hour: ${date.getHours()} <br>
                           Minutes: ${date.getMinutes()} <br>
                           Date: ${date.getDate()} <br>
                           Day: ${date.getDay()} <br>
                           Month: ${date.getMonth()} <br>
                           Year: ${date.getFullYear()}`;
}

function stopTime() {
    clearInterval(intervalId); // Clear the interval using the stored ID
}

//JavaScript Promise Object
/*
    A Promise is an essential concept for handling asynchronous operations in JavaScript. It represents the eventual completion or failure of an asynchronous task and 
    provides a way to handle the results once they are available.
    Here’s what you need to know about Promises:

Promise Basics:
A Promise can be in one of three states:

1. Pending: The initial state when the asynchronous operation is still ongoing.
2. Fulfilled: The state when the operation successfully completes, and a result value is available.
3. Rejected: The state when an error occurs during the operation.

A Promise links the “producing code” (which performs the asynchronous task) with the “consuming code” (which needs the result).

When the producing code obtains the result, it should call one of the two callbacks:

When	    Call
Success	    myResolve(result value)
Error	    myReject(error object)


Promise Syntax
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});
 "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ //},
  //function(error) { /* code if some error */ }
//);


/*
Promise Object Properties

The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.


You cannot access the Promise properties state and result.

You must use a Promise method to handle promises.

Promise How To
Here is how to use a Promise:

myPromise.then(
  function(value) { /* code if successful */// },
  //function(error) { /* code if some error */ }
//);

//Promise.then() takes two arguments, a callback for success and another for failure.

//Both are optional, so you can add a callback for success or failure only.


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let age = 0;

// some code (try to change age to 5)

  if (age == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


// Waiting for a Timeout

// 1. Example Using Callback
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo5").innerHTML = value;
}



//2. Example Using Promises
//Producing code
const myPromise2 = new Promise(function(myResolve, myReject) {
    let age = 17;

    if (age >= 18) {
        setTimeout(function() {
            myResolve("I love You, You can vote now !!");
        }, 3000);
    } else {
        myReject("You can't vote");
    }
});

//Consuming code
myPromise2.then(
    function(value) {
        document.getElementById("demo6").innerHTML = value;
    },
    function(error) {
        document.getElementById("demo6").innerHTML = error;
    }
);
/*
In summary, this code creates a Promise that simulates checking a person’s age. If the age is 18 or older, it resolves with a positive message; otherwise, it rejects with an error message. The consuming code then updates an HTML element based on the Promise’s outcome
*/

//Get a file
/*
function myDisplayer(messageFile) {
    document.getElementById("demo7").innerHTML = messageFile;
  }
  
  function getFile(myCallback) {
    let jedRequest = new XMLHttpRequest();
    jedRequest.onload = function() {
      if (jedRequest.status == 200) {
        myCallback(this.responseText);
        console.log(`Status of your request: ${jedRequest.status}`);
        console.log(this.responseText);
      } else {
        console.log(`Status of your request: ${jedRequest.status}`);
        myCallback("Error: " + jedRequest.status);
      }
    }
    jedRequest.open('GET', "./asynchronous.json");
    jedRequest.send();
  }
  
  getFile(myDisplayer);

  onreadystatechange:
The onreadystatechange event handler is triggered every time the readyState property of an XHR changes.
The readyState represents the current state of the request (e.g., 0 for uninitialized, 1 for open, 2 for sent, 3 for receiving, and 4 for completed).
The onreadystatechange event fires multiple times during the lifecycle of the request (not just once).
You can use it to handle different stages of the request, including intermediate states.
For example, you might use it to track progress or handle specific scenarios based on the readyState.
onload:
The onload event handler fires only once when the entire request has completed successfully (i.e., when the response is fully received).
It is specifically designed for handling the successful completion of the request.
Use it when you need to process the final response data.
Unlike onreadystatechange, it does not fire for intermediate states (e.g., when the request is still being sent or received).
Which One Is Better?:
It depends on your requirements:
Use onreadystatechange if you need to handle different stages of the request (e.g., progress updates, intermediate states, or specific error conditions).
Use onload if you only care about the final result (when the request is complete and successful).
In most cases, if you’re interested in the final response data, onload is simpler and more straightforward.
However, if you have specific use cases (such as tracking progress or handling specific states), onreadystatechange might be more suitable.

*/



  
  // Get the container element where you want to display the user information
const container = document.getElementById("userContainer");

// Fetch the JSON data from the separate file (asy.json)
fetch("./asynchronous.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }
        return response.json();
    })
    .then(users => {
        // Loop through each user and create a <p> element for name and email
        users.forEach(user => {
            const nameElement = document.createElement("p");
            nameElement.textContent = `Name: ${user.first_name} ${user.last_name}`;
            container.appendChild(nameElement);

            const emailElement = document.createElement("p");
            emailElement.textContent = `Email: ${user.email}`;
            container.appendChild(emailElement);
        });
    })
    .catch(error => {
        console.error(error);
    });

    //------------
    // Define the displayOnScreen function
function displayOnScreen(data) {
    const container = document.getElementById("userContainer");

    // Assuming data is an array of user objects
    data.forEach(user => {
        const nameElement = document.createElement("p");
        nameElement.textContent = `Name: ${user.first_name} ${user.last_name}`;
        container.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${user.email}`;
        container.appendChild(emailElement);
    });
}

// Fetch data from the "asynchronous.json" file using onreadystatechange
const jedRequest = new XMLHttpRequest();
jedRequest.onreadystatechange = function() {
    if (jedRequest.readyState === 4) {
        if (jedRequest.status === 200) {
            const users = JSON.parse(jedRequest.responseText);
            displayOnScreen(users); // Call the displayOnScreen function
            console.log(`Status of your request: ${jedRequest.status}`);
        } else {
            console.log(`Status of your request: ${jedRequest.status}`);
        }
    }
};
jedRequest.open('GET', "./asynchronous.json");
jedRequest.send();

// Fetch data from the "asynchronous.json" file using onload
const jedRequest = new XMLHttpRequest();
jedRequest.onload = function() {
        if (jedRequest.status === 200) {
            const users = JSON.parse(jedRequest.responseText);
            displayOnScreen(users); // Call the displayOnScreen function
            console.log(`Status of your request: ${jedRequest.status}`);
        } else {
            console.log(`Status of your request: ${jedRequest.status}`);
        }
    
};
jedRequest.open('GET', "./asynchronous.json");
jedRequest.send();

///---------------






// Define the displayOnScreen function
function displayOnScreen(data) {
    const container = document.getElementById("userContainer");

    // Assuming data is an array of user objects
    data.forEach(user => {
        const nameElement = document.createElement("p");
        nameElement.textContent = `Name: ${user.first_name} ${user.last_name}`;
        container.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${user.email}`;
        container.appendChild(emailElement);
    });
}

// Fetch data from the "asynchronous.json" file using onreadystatechange with 1 - 4
const jedRequest = new XMLHttpRequest();
jedRequest.onreadystatechange = function() {
    switch (jedRequest.readyState) {
        case 1:
            console.log("Request opened (readyState 1)");
            break;
        case 2:
            console.log("Request sent (readyState 2)");
            break;
        case 3:
            console.log("Response being received (readyState 3)");
            break;
        case 4:
            if (jedRequest.status === 200) {
                const users = JSON.parse(jedRequest.responseText);
                displayOnScreen(users); // Call the displayOnScreen function
                console.log(`Status of your request: ${jedRequest.status}`);
            } else {
                console.log(`Error status: ${jedRequest.status}`);
            }
            break;
        default:
            console.log("Unhandled readyState");
    }
};

jedRequest.open('GET', "./asynchronous.json");
jedRequest.send();
