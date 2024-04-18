# Documentations for JavaScript

```
Note
Modules only work with the HTTP(s) protocol.

A web-page opened via the file:// protocol cannot use import / export.
```

```
function displayResult(result) {
    document.getElementById('displayerBox').innerHTML = result;
}


function Calculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}


const viewResult = Calculator(5, 8);
displayResult(viewResult);


export { displayResult };
```
