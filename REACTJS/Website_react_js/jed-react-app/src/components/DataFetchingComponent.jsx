import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
    const [data, setData] = useState(null);

    // Use useEffect to fetch data on component mount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Fetched Data:</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 4)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default DataFetchingComponent;

/* 
Dependency Array:

The second argument to useEffect is an empty array [].
An empty dependency array means this effect runs only once after the initial render, 
similar to componentDidMount in class components. It will not run again unless the component 
is unmounted and remounted.
*/
