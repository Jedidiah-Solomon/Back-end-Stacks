import React, { useState } from "react";

const ToggleMessage = () => {
    // State variable to track the visibility of the message
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <h2>Toggle Message Example</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Message" : "Show Message"}
            </button>
            {isVisible && (
                <div>
                    <p
                        style={{
                            marginTop: "20px",
                            border: "2px solid #ccc",
                            padding: "10px",
                            color: "red",
                        }}
                    >
                        This is a hidden message that can be toggled.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ToggleMessage;
