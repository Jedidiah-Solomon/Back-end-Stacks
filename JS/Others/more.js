// sort() = method used to sort elements of an array in place
//          Sorts elements in lexicographic order not alphabetical
//          lexicographic = (alphabets + numbers + symbols) as strings

/*

    Sorting Strings:
    By default, sort() sorts strings alphabetically.

    const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']


Sorting Numbers:
When sorting numbers, the default behavior is lexicographic (i.e., as strings).
To sort numbers correctly, you need to provide a compare function.


const numbers = [10, 2, 8, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [2, 4, 8, 10]

Inside the sort() method, you’ve provided a compare function (a, b) => a - b.
The compare function subtracts b from a (i.e., a - b).
The purpose of this function is to determine the order in which elements should be sorted.
If the result of a - b is negative, it means a should come before b.
If the result is positive, it means b should come before a.
If the result is zero, the order remains unchanged.

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]

The localeCompare() method in JavaScript allows you to compare two strings based on their sort order within the current locale. It returns a numeric value indicating whether one string comes before, after, or is the same as the other. Let’s explore how it works:


referenceString.localeCompare(compareString);

Parameters:
referenceString: The string against which the compareString is compared.
compareString: The string to compare against.
Return Value:
A negative number if referenceString occurs before compareString.
A positive number if referenceString occurs after compareString.
Zero (0) if they are equivalent.
Examples:


// Example 1: "a" comes before "c" (negative value)
"a".localeCompare("c"); // -2 or -1 (implementation-dependent)

// Example 2: "check" comes after "against" (positive value)
"check".localeCompare("against"); // 2 or 1 (implementation-dependent)

// Example 3: "a" and "a" are equivalent (neutral value of zero)
"a".localeCompare("a"); // 0

const people = [
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Bob", age: 25 },
];
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people); // Output:[{"name": "Alice","age": 30},{    "name": "Bob","age": 25 },{"name": "Charlie","age": 35}]
console.log(people[0]); //{"name": "Alice","age": 30}



*/

// Fisher-Yates algorithm - To shuffle

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards);

console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomNum = Math.floor(Math.random() * (i + 1));
        console.log(randomNum);

        // Swap array[i] and array[randomNum]
        const temp = array[i];
        array[i] = array[randomNum];
        array[randomNum] = temp;
    }
}

// Time Clock
/*
const updateClock = function () {
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`; // Include AM/PM
    document.getElementById("clock").textContent = timeString;
};

updateClock(); // Invoke the function immediately
const intervalId = setInterval(updateClock, 1000); // Update every second

// Clear the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    document.getElementById("clock").textContent = "Happy Birthday!";
}, 10000);
*/

// Countdown Timer for June 16, 2024

// Define a function to update the countdown clock
const updateClock = function () {
    // Set the target date and time (June 16, 2024, midnight)
    const targetDate = new Date("2024-06-16T00:00:00");
    const now = new Date();

    // Calculate the time difference in milliseconds
    const timeDiff = targetDate.getTime() - now.getTime();

    // If the target time has already passed, stop the clock and display a message
    if (timeDiff <= 0) {
        clearInterval(intervalId);
        document.getElementById("clock").textContent = "Happy Birthday!";
        return;
    }

    // Convert the time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    // Format the time string
    const timeString = `${days}D : ${hours
        .toString()
        .padStart(2, "0")}H : ${minutes
        .toString()
        .padStart(2, "0")}M : ${seconds.toString().padStart(2, "0")}S`;
    document.getElementById("clock").textContent = timeString;
};

// Invoke the function immediately
updateClock();

// Update the clock every second
const intervalId = setInterval(updateClock, 1000);
//---------------------------//

document.addEventListener("keydown", (event) => {
    console.log(event);
    console.log(`kEY DOWN IS ${event.key} KEYCODE IS ${event.keyCode}`);
});

document.addEventListener("keydown", (event) => {
    console.log(event);
    console.log(`kEY DOWN IS ${event.key} KEYCODE IS ${event.keyCode}`);
});

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("text");
    const ageInput = document.getElementById("number");

    const inputValue = parseFloat(ageInput.value); // Convert input value to a number

    if (!isNaN(inputValue) && inputValue >= 18) {
        console.log("Passed");
    } else {
        console.log("Not Available");
    }
});

console.log(form);
//--------------slider--------//
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide, 5000);
        console.log(intervalid);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
