import React, { useState } from "react";
import "./useState1.css";

function UseState1() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Nkechi");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    /*
        //!isEmployed flips the current value of isEmployed. If isEmployed is false, !isEmployed becomes true, and vice versa.

        When the button is clicked, the toggleEmployedStatus function is called.
        toggleEmployedStatus calls setIsEmployed with the value !isEmployed.
        If isEmployed was false, !isEmployed becomes true. Thus, isEmployed is updated to true.
    */

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };

    //Counter case

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    //Onchange event handler for form input, textarea, select or radio

    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("giftcard");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setUserName(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>
                Change Employment Status
            </button>

            <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>
                    Decrement
                </button>
                <button className="counter-button" onClick={increment}>
                    Increment
                </button>

                <button className="counter-button" onClick={reset}>
                    Reset
                </button>
            </div>

            <div className="form">
                <input
                    type="text"
                    value={userName}
                    onChange={handleNameChange}
                />
                <p className="user-name">User Name: {userName}</p>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Enter ur info"
                />
                <p className="user-name">User Comment: {comment}</p>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Master Card</option>
                    <option value="giftcard">Gift Card</option>
                </select>
                <p>Payment: {payment}</p>
                <label>
                    <input
                        type="radio"
                        value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange}
                    />
                    Pick Up
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange}
                    />
                    Delivery
                </label>
                <br />
                <p className="py-3">Shipping: {shipping}</p>
            </div>
        </div>
    );
}

export default UseState1;
