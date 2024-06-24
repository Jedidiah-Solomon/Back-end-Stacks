import React, { useState } from "react";

const ObjectState = () => {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Musatang",
    });

    function handleYearChange(event) {
        setCar((car) => ({ ...car, year: event.target.value }));
    }

    function handleMakeChange(event) {
        setCar((car) => ({ ...car, make: event.target.value }));
    }

    function handleModelChange(event) {
        setCar((car) => ({ ...car, model: event.target.value }));
    }

    return (
        <div>
            <p>
                Your favourite car is {car.year} {car.make} {car.model}
            </p>

            <input type="number" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.make} onChange={handleMakeChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />
        </div>
    );
};

export default ObjectState;

/*

The key difference between the two implementations of handleYearChange (and similarly for handleMakeChange and handleModelChange) lies in how they update the state using the setCar function:

Direct State Update

function handleYearChange(event) {
    setCar({ ...car, year: event.target.value });
}
In this approach, the setCar function directly sets the state to a new object with the updated year property. Here, the current state (car) is spread into a new object, and then the year property is overwritten with the new value from event.target.value.

Functional State Update

function handleYearChange(event) {
    setCar((car) => ({ ...car, year: event.target.value }));
}
In this approach, the setCar function takes a function as an argument. This function receives the current state (car) and returns a new state object with the updated year property. The current state is spread into the new object, and the year property is overwritten with the new value from event.target.value.

Differences and Implications
Handling Asynchronous State Updates:

Direct State Update: The direct approach relies on the current value of car at the time the event handler is executed. If multiple state updates are scheduled in a quick succession, the current state might not reflect the most recent changes.
Functional State Update: The functional approach guarantees that the updater function receives the most recent state, making it safer when multiple updates are queued. React batches state updates and ensures the updater function gets the latest state, avoiding potential issues with stale state values.*/
