import React, { useState } from "react";

const ArrayState = () => {
    const [foods, setFoods] = useState(["Apple", "Mango", "Orange", "Banana"]);
    function handleAddFoods() {}

    function handleRemoveFoods() {}

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => {
                    return <li key={index}>{food}</li>;
                })}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFoods}> Add Food</button>
        </div>
    );
};

export default ArrayState;
