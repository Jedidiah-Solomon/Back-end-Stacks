import React, { useState } from "react";

function MyComponent() {
    // Array state with useState
    const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

    /*
    // Function to add an item to the array
    const addItem = () => {
        const newItem = prompt("Enter a new item:");

        if (!newItem || newItem.trim() === "") {
            // Check if newItem is empty or consists only of whitespace
            alert("Please enter a fruit name.");
        } else if (isNaN(newItem)) {
            // Check if newItem is not a number (isNaN returns true for non-numeric values)
            setItems([...items, newItem]); // Add new item to the array
        } else {
            // Handle case where newItem is a number (optional)
            alert("Please enter a valid fruit name.");
        }
    };*/

    const addItem = () => {
        let isValid = false;
        let input;

        //!isValid is true when isValid is false, and vice versa
        while (!isValid) {
            input = prompt("Enter a new item:");

            if (!input || input.trim() === "") {
                alert("Please enter a fruit name.");
            } else if (!isNaN(input)) {
                alert("Please enter a valid fruit name (not a number).");
            } else {
                isValid = true; // Valid input provided
            }
        }

        setItems([...items, input]); // Add new item to the array
    };

    return (
        <div>
            <h1>My Favorite Fruits</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add New Fruit</button>
        </div>
    );
}

export default MyComponent;
