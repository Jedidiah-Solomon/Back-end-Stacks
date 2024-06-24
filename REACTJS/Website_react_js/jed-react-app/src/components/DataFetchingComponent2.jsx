import React, { useState, useEffect } from "react";

function DataFetchingComponent2() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/2")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Log data outside of the return statement
    console.log(data);

    // Spacer function to format data into paragraphs
    const Spacer = ({ data }) => {
        return (
            <>
                <p>
                    <strong>User ID:</strong> {data.userId}
                </p>
                <p>
                    <strong>ID:</strong> {data.id}
                </p>
                <p>
                    <strong>Title:</strong> {data.title}
                </p>
                <p>
                    <strong>Body:</strong> {data.body}
                </p>
            </>
        );
    };

    return (
        <div>
            <h1>Fetched Data:</h1>
            {data ? <Spacer data={data} /> : <p>Loading...</p>}
        </div>
    );
}

export default DataFetchingComponent2;
