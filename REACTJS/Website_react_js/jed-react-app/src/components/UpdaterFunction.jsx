import React, { useState } from "react";

const UpdaterFuction = () => {
    const [count, setCount] = useState(0);

    //This will just increase once and to 1
    function incrementCount() {
        setCount(1);
        setCount(1);
        setCount(1);
    }

    //This is an updater function
    // function incrementCount() {
    //     setCount((prevCount) => prevCount + 1);
    //     setCount((prevCount) => prevCount + 1);
    //     setCount((prevCount) => prevCount + 1);
    // }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </>
    );
};

export default UpdaterFuction;
