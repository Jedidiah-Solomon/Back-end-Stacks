function displayResult(result) {
    document.getElementById('displayerBox').innerHTML = result;
}

document.getElementById('calculateButton').addEventListener('click', function(){
    const num1 = parseFloat(document.getElementById('num1Input').value);
    const num2 = parseFloat(document.getElementById('num2Input').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers for num1 and num2.");
        return;
    }

    // Perform the calculation
    const result = num1 + num2;

    // Display the result
    displayResult(result);
});

export { displayResult }; 
