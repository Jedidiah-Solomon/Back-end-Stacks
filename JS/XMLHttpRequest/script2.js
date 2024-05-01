// Attach an event listener to the button click
$("#userBtn").on("click", function() {
    const userInput = $("#userInput").val().toLowerCase(); // Get the user input
    const userDetails = $("#userDetails"); // Target element to display user details
    const errorBox = $("#errorBox"); // Element to display error messages

    // Load the employees.json file
    userDetails.load("./employees.json", function(response, status, xhr) {
        if (status === "success") {
            const data = JSON.parse(response); // Parse the JSON data
            const user = data.find(item => {
                const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
                return fullName === userInput;//checks if they are equal, if true return it.
            });

            if (user) {
                // Display user details
                userDetails.html(`
                    <p>First Name: ${user.firstName}</p>
                    <p>Last Name: ${user.lastName}</p>
                    <p>Age: ${user.age}</p>
                    <p>Year of Employment: ${user.yearOfEmployment}</p>
                    <p>Hobbies: ${user.hobbies.join(", ")}</p>
                    <p>Address: ${user.address.street}, ${user.address.city}, ${user.address.zipCode}, ${user.address.country}</p>
                `);
                errorBox.text(""); // Clear error message
            } else {
                userDetails.html(""); // Clear user details
                errorBox.text("User not found");
            }
        } else {
            userDetails.html(""); // Clear user details
            errorBox.text("Error fetching user details");
        }
    });
});


/*

Indeed! jQuery simplifies many common tasks in JavaScript, making your code more concise and easier to read. Let’s break down how jQuery streamlined your original code:

Ajax Requests:
In your original code, you used the XMLHttpRequest object to make an asynchronous request to fetch data from the employees.json file.
With jQuery, you can achieve the same result using the .load() method, which internally handles the Ajax request for you.
No need to manually set up the request, handle states, or manage callbacks.
Selectors and DOM Manipulation:
jQuery provides a concise syntax for selecting and manipulating DOM elements.
Instead of using document.getElementById(), you can directly select elements using jQuery selectors (e.g., $("#userInput"), $("#userDetails"), etc.).
Methods like .val(), .html(), and .text() simplify setting and retrieving values or content.
Event Handling:
jQuery simplifies event handling. You can use .on("click", ...) to attach a click event listener to an element.
No need to manually check the readyState or status as jQuery handles this internally.
Parsing JSON:
In your original code, you manually parsed the JSON response using JSON.parse(this.responseText).
With jQuery, the .load() method automatically parses JSON data for you.
Error Handling:
jQuery provides a consistent way to handle success and error scenarios within the .load() callback.
You can focus on the logic without worrying about low-level details.
In summary, jQuery abstracts away many complexities, allowing you to express your intentions more directly. It’s a powerful tool for simplifying common tasks in web development! 😊

*/

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt #p1");
  });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>
Here the h2 is replaced to p with id = p1

<button>Get External Content</button>

</body>
</html>
It is also possible to add a jQuery selector to the URL parameter.

The following example loads the content of the element with id="p1", inside the file "demo_test.txt", into a specific <div> element

The optional callback parameter specifies a callback function to run when the load() method is completed. The callback function can have different parameters:

responseTxt - contains the resulting content if the call succeeds
statusTxt - contains the status of the call
xhr - contains the XMLHttpRequest object


<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html>
The jQuery get() and post() methods are used to request data from the server with an HTTP GET or POST request.

HTTP Request: GET vs. POST
Two commonly used methods for a request-response between a client and server are: GET and POST.

GET - Requests data from a specified resource
POST - Submits data to be processed to a specified resource
GET is basically used for just getting (retrieving) some data from the server. Note: The GET method may return cached data.

POST can also be used to get some data from the server. However, the POST method NEVER caches data, and is often used to send data along with the request.


<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $.get("./demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
</script>
</head>
<body>

<button>Send an HTTP GET request to a page and get the result back</button>

</body>
</html>
Let’s explore the differences between the $.get() and $.load() methods in jQuery:

$.get() Method:
The $.get() method is used to make an Ajax GET request to a specified URL.
It fetches data from the server and passes it to a callback function.
Here’s how it works:
JavaScript

$.get(url, data, function(data, status) {
    // Callback function code here
});
AI-generated code. Review and use carefully. More info on FAQ.
url: The URL to which the request is sent.
data (optional): Key/value pairs to send to the server.
function(data, status): A callback function that executes when the request succeeds. The data parameter contains the response data, and status indicates the request status (e.g., “success,” “error,” etc.).
In your example:
JavaScript

$(document).ready(function() {
    $("button").click(function() {
        $.get("./demo_test.asp", function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});

$.load() Method:
The $.load() method loads data from the server and places the returned HTML into a selected element.
It’s specifically designed for loading content into an element (e.g., a <div>).
Here’s the syntax:
JavaScript

$(selector).load(url, data, callback);


<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $("button").click(function() {
                // Load the content from the URL into the #myBox element
                $("#myBox").load("./demo_test.asp", function(response, status, xhr) {
                    if (status === "success") {
                        // Handle the loaded content (if needed)
                        console.log("Data loaded successfully:", response);
                    } else {
                        console.error("Error loading data:", status);
                    }
                });
            });
        });
    </script>
</head>
<body>
    <div id="myBox"></div> 
    <button>Send an HTTP GET request to a page and get the result back</button>
</body>
</html>


$.load() Callback Parameters:
When using the $.load() method, the callback function receives three parameters:
response: The content loaded from the specified URL.
status: A string indicating the status of the request (e.g., “success,” “error,” etc.).
xhr: The XMLHttpRequest object used for the request (optional).
$.get() Callback Parameters:
For the $.get() method, the callback function also receives two parameters:
data: The data returned from the server (similar to response in $.load()).
status: A string indicating the status of the request (e.g., “success,” “error,” etc.).
Why No xhr in $.get()?:
The absence of xhr in the $.get() callback is intentional.
The $.get() method is a simplified version of Ajax requests, primarily designed for fetching data.
Since $.get() is straightforward and doesn’t expose the underlying XMLHttpRequest object, there’s no need to include it in the callback.
In summary:

Use $.load() when you want to load HTML content into an element and need access to the xhr object.
Use $.get() for simple data retrieval without the need for low-level details.

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $.post("demo_test_post.asp",
    {
      name: "Donald Duck",
      city: "Duckburg"
    },
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
</script>
</head>
<body>

<button>Send an HTTP POST request to a page and get the result back</button>

</body>
</html>
The first parameter of $.post() is the URL we wish to request ("demo_test_post.asp").

Then we pass in some data to send along with the request (name and city).

The ASP script in "demo_test_post.asp" reads the parameters, processes them, and returns a result.

The third parameter is a callback function. The first callback parameter holds the content of the page requested, and the second callback parameter holds the status of the request.

Tip: Here is how the ASP file looks like ("demo_test_post.asp"):

<%
dim fname,city
fname=Request.Form("name")
city=Request.Form("city")
Response.Write("Dear " & fname & ". ")
Response.Write("Hope you live well in " & city & ".")
%>