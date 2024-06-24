import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const greeting = "Hello, React!";
    const number = 42;

    return (
        <div>
            {/* Passing props to ChildComponent */}
            <ChildComponent theGreeting={greeting} theNumber={number} />
        </div>
    );
};

export default ParentComponent;
