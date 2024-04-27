Event bubbling and event capturing are two different phases of the event propagation model in the Document Object Model (DOM) of web browsers. Both are part of event delegation, which involves handling events on parent elements rather than individual child elements. Let's define each concept:

Event Bubbling
Definition: Event bubbling is the default behavior in which an event starts from the target element that triggered it and then "bubbles" up through its ancestors in the DOM hierarchy until it reaches the root element
`

Event Capturing
Definition: Event capturing is the opposite of event bubbling. It involves the event propagation from the root element down to the target element. The capturing phase occurs before the target element receives the event.

Key Differences

Order: Event capturing goes from the outermost ancestor to the target, while event bubbling goes from the target up to the outermost ancestor.

Default Behavior: Event bubbling is the default behavior in most browsers, but both capturing and bubbling can be used depending on the event listener setup.

Use Cases: Event capturing is less commonly used in practice, whereas event bubbling is widely utilized for event handling.

In practice, when an event occurs on an element, it can be handled during the capturing phase, at the target element, or during the bubbling phase. The propagation path depends on how event listeners are configured and whether the event propagation (event.stopPropagation()) or default behavior (event.preventDefault()) is modified within the event handling process.

With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:

addEventListener(event, function, useCapture);
The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

<!DOCTYPE html>
<html>
<head>
<style>
#myDiv1, #myDiv2 {
  background-color: coral;
  padding: 50px;
}

#myP1, #myP2 {
background-color: white;
font-size: 20px;
border: 1px solid;
padding: 20px;
}
</style>

<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
</head>
<body>

<h2>JavaScript addEventListener()</h2>

<div id="myDiv1">
  <h2>Bubbling:</h2>
  <p id="myP1">Click me!</p>
</div><br>

<div id="myDiv2">
  <h2>Capturing:</h2>
  <p id="myP2">Click me!</p>
</div>

<script>
document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element- bubbling!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element - bubbling!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element-capturing!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element-capturing!");
}, true);
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<head>
<style>
#myDIV {
  background-color: coral;
  border: 1px solid;
  padding: 50px;
  color: white;
  font-size: 20px;
}
</style>
</head>
<body>

<h2>JavaScript removeEventListener()</h2>

<div id="myDIV">
  <p>This div element has an onmousemove event handler that displays a random number every time you move your mouse inside this orange field.</p>
  <p>Click the button to remove the div's event handler.</p>
  <button onclick="removeHandler()" id="myBtn">Remove</button>
</div>

<p id="demo"></p>

<script>
document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
</script>

</body>
</html>

Some other methods:

window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window

window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)

Window Screen
The window.screen object can be written without the window prefix.

Properties:

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

Window History
The window.history object can be written without the window prefix.

To protect the privacy of the users, there are limitations to how JavaScript can access this object.

Some methods:

history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser

<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>

Window Navigator
The window.navigator object can be written without the window prefix.

Some examples:

navigator.cookieEnabled
navigator.appCodeName
navigator.platform

<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>

<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>

<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The appName property returns the application name of the browser:</p>

<p id="demo"></p>

<p>Strange enough, "Netscape" is the application name for IE11, Chrome, Firefox, and Safari.</p>

<script>
document.getElementById("demo").innerHTML = 
"navigator.appName is " + navigator.appName;
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Navigator</h2>

<p>The appCodeName property returns the code name of the browser.</p>

<p>Do not rely on it! "Mozilla" is the application code name for Chrome, Firefox, IE, Safari, and Opera.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
"navigator.appCodeName is " + navigator.appCodeName;
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The product property returns the product name of the browser.</p>

<p>Do not rely on it! Most browsers returns "Gecko" as product name!</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The appVersion property returns version information about the browser:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>

5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36

5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The userAgent property returns the user-agent header sent by the browser to the server:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
navigator.userAgent;
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The platform property returns the browser platform (operating system):</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
"navigator.platform is " + navigator.platform;
</script>

navigator.platform is Win32

</body>
</html>

Win32 is the programming interface (API) for 32-bit and 64-bit Windows operating systems. Starting with Windows 95, developers write applications that call the routines in the Win32 API. See WinRT and UWP.

API Supports Windows

UWP Win 10, Xbox, Surface Hub
Hololens

WinRT Win 8, Win RT

Win32 95/98, NT, 2000, XP, 7, 8 and 10

Win32c 95

Win32s 95, 3.1

Win16 3.0, 3.1

<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The language property returns the browser's language:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.language is " + navigator.language;
</script>

</body>
</html>
<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The onLine property returns true if the browser is online:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.onLine is " + navigator.onLine;
</script>

</body>
</html>
<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The javaEnabled() method returns true if Java is enabled:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"javaEnabled is " + navigator.javaEnabled();
</script>

</body>
</html>

---

Alert Box
An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

Syntax
window.alert("sometext");

alert("I am an alert box!");Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

Syntax
window.prompt("sometext","defaultText");

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>
<p>Line-breaks in a popup box.</p>

<button onclick="alert('Hello\nHow are you?')">Try it</button>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timing</h2>

<p>Click "Try it". Wait 3 seconds. The page will alert "Hello".</p>
<p>Click "Stop" to prevent the first function to execute.</p>
<p>(You must click "Stop" before the 3 seconds are up.)</p>

<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>

<script>
function myFunction() {
  alert("Hello");
}
</script>
</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timing</h2>

<p>A script on this page starts this clock:</p>

<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>

<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
} 
</script>

</body>
</html>

Constraint Validation DOM Properties
Property Description
validity Contains boolean properties related to the validity of an input element.
validationMessage Contains the message a browser will display when the validity is false.
willValidate Indicates if an input element will be validated.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validity Property Example</title>
</head>
<body>

    <p>
        The validity property contains boolean properties that represent the validity state of an input element.

    </p>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <button type="button" onclick="checkValidity()">Check Validity</button>
    </form>

    <script>
        function checkValidity() {
            const usernameInput = document.getElementById('username');
            const validityState = usernameInput.validity;

            console.log('Value Missing:', validityState.valueMissing);
            console.log('Valid:', validityState.valid);
            console.log('Pattern Mismatch:', validityState.patternMismatch);
        }
    </script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Message Example</title>
</head>
<body>
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="button" onclick="displayValidationMessage()">Display Validation Message</button>
    </form>

    <script>
        function displayValidationMessage() {
            const emailInput = document.getElementById('email');
            const validationMessage = emailInput.validationMessage;

            alert(validationMessage);
        }
    </script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Message Example</title>
</head>
<body>
The validationMessage property contains the message that a browser will display when the validity of an input element is false.

    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="button" onclick="displayValidationMessage()">Display Validation Message</button>
    </form>

    <script>
        function displayValidationMessage() {
            const emailInput = document.getElementById('email');
            const validationMessage = emailInput.validationMessage;

            if(validationMessage){
                alert(validationMessage);
            }
            else{
                alert(`Nice mail bro`);
            }
        }
    </script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will Validate Property Example</title>
</head>
<body>

    <p>The willValidate property indicates if an input element will be validated when
        the form is submitted

    avoid using required and pattern as required will override it

    Using willValidate Property:

    The willValidate property checks if an input element will be validated when the form is
     submitted. It's important to note that this property alone doesn't trigger validation; it simply indicates
    whether the input will undergo validation based on its attributes (required, pattern,
     etc.).
    Behavior with required Attribute:

    If an input field has the required attribute, it will always return true for
    willValidate, even if the field is empty. This is because the presence of required indicates that the field must be filled out before form submission, and the browser will validate it accordingly.

    Pattern Validation:

    For pattern-based validation (pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"), the input must match the specified pattern for validation to succeed. However, if the input field is empty and not required, the pattern validation won't trigger unless the field is filled out.
    Checking Validation in JavaScript:
    To accurately check the validity of an input field (including pattern validation),
    use the checkValidity() method on the input element. This method returns true if the
     input is valid based on its constraints (required, pattern, etc.), and false otherwise.

    When the user clicks the “Check Validity” button, the checkValidity() function is called.

It retrieves the validity state of the input element (in this case, the username input field).
The validityState object contains several boolean properties that represent the validity state of the input:
valueMissing: Indicates whether the input value is missing (required but empty).
valid: Indicates whether the input value satisfies all validation constraints (e.g., required, pattern, etc.).
patternMismatch: Indicates whether the input value matches the specified pattern (if any).
Example Usage:
Suppose the user enters a value in the username input field.
Calling checkValidity() would log the following information:
If the value is missing (empty), it would show Value Missing: true.
If the value satisfies all constraints, it would show Valid: true.
If the value doesn’t match the specified pattern (if any), it would show Pattern Mismatch: true.
In summary, the checkValidity() function provides information about the validity state of an input field, which is useful for form validation in web applications.

</p>
    <form>
        <label for="password">Password (must contain at least one number and one symbol):</label>
        <input type="password" id="password" name="password" pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$">
        <button type="button" onclick="checkPasswordValidity()">Check Password Validity</button>
    </form>

    <script>
        function checkPasswordValidity() {
            const passwordInput = document.getElementById('password');
            const willValidate = passwordInput.willValidate;

            console.log('Will Validate:', willValidate);
        }
    </script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will Validate Property Example</title>
</head>
<body>

    <p>The willValidate property indicates if an input element will be validated when
        the form is submitted</p>
    <form>
        <label for="password">Password (must contain at least one number and one symbol):</label>
        <input type="password" id="password" name="password" pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$" required>
        <button type="button" onclick="checkPasswordValidity()">Check Password Validity</button>
    </form>

    <script>
        function checkPasswordValidity() {
            const passwordInput = document.getElementById('password');

            // Check if the input is valid using checkValidity() method
            const isValid = passwordInput.checkValidity();

            console.log('Is Password Valid:', isValid);
        }
    </script>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validity Property Example</title>
</head>
<body>
    Validity Properties
The validity property of an input element contains a number of properties related to the validity of data:

Property Description
customError Set to true, if a custom validity message is set.
patternMismatch Set to true, if an element's value does not match its pattern attribute.
rangeOverflow Set to true, if an element's value is greater than its max attribute.
rangeUnderflow Set to true, if an element's value is less than its min attribute.
stepMismatch Set to true, if an element's value is invalid per its step attribute.
tooLong Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch Set to true, if an element's value is invalid per its type attribute.
valueMissing Set to true, if an element (with a required attribute) has no value.
valid Set to true, if an element's value is valid.

<p>The validity property contains boolean properties that represent the validity state of an input element.</p>
<form>
<label for="username">Username:</label>
<input type="text" id="username" name="username" required>
<button type="button" onclick="checkValidity()">Check Validity</button>
</form>

    <script>
        function checkValidity() {
            console.log("Function called!");
            const usernameInput = document.getElementById('username');
            const validityState = usernameInput.validity;

            console.log('Value Missing:', validityState.valueMissing);
            console.log('Valid:', validityState.valid);
            console.log('Pattern Mismatch:', validityState.patternMismatch);
        }
    </script>

</body>
</html>
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p>If the number is greater than 100 (the input's max attribute), an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  let text;
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" max="100" required>
<button onclick="myFunction()">OK</button>

<p>If the number is greater than 100 (the input's max attribute), an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  let text;
  if (document.getElementById("id1").validity.valueMissing) {
    text = "Value missing";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>

---

The History back() Method
The back() method loads the previous URL in the windows.history list.

It is the same as clicking the "back arrow" in your browser.

Example
<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>

--
The History go() Method
The go() method loads a specific URL from the history list:

Example
<button onclick="myFunction()">Go Back 2 Pages</button>

<script>
function myFunction() {
  window.history.go(-2);
}
</script>
<!DOCTYPE html>
<html>
<body>

<h1>The Window History Object</h1>
<h2>The history.length Property</h2>

<p>Number of URLs in history list:</p>

<p id="demo"></p>

<p>Since this is a new window frame, history.length will always return 1.</p>

<script>
let length = window.history.length;
document.getElementById("demo").innerHTML = length;
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h1>The Window History Object</h1>
<h2>The history.forward Method</h2>

<button onclick="history.forward()">Go Forward</button>

<p>Clicking "Go Forward" will not result in any action, because there is no next page in the history list.</p>

## </body>

localStorage.setItem("name", "John Doe");
localStorage.getItem("name");

sessionStorage.setItem("name", "John Doe");
sessionStorage.getItem("name");
