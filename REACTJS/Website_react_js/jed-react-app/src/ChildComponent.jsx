import React from "react";

const ChildComponent = (props) => {
    // Accessing props passed down from ParentComponent
    const { theGreeting, theNumber } = props;

    return (
        <div>
            <h1>{theGreeting}</h1>
            <p>The answer to everything is: {theNumber}</p>
        </div>
    );
};

export default ChildComponent;
