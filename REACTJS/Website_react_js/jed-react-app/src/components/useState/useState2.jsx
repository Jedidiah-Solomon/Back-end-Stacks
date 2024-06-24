import React, { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });

    //Update color | use normal function
    function updateColor() {
        setCar((previousState) => {
            return { ...previousState, color: "blue" };
        });
    }

    //Update model |use arrow function
    const updateModel = () => {
        setCar((previousState) => {
            return { ...previousState, model: "Volvo" };
        });
    };

    //Update model & color - 2 different functions |use arrow function
    const handleUpdate = () => {
        updateModel();
        updateColor(); // Call updateModel and updateColor | 2 functions
    };

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button type="button" onClick={updateColor}>
                Blue
            </button>
            <button type="button" onClick={updateModel}>
                Volvo
            </button>
            <button type="button" onClick={handleUpdate}>
                Blue & Volvo
            </button>
        </>
    );
}
export default Car;
