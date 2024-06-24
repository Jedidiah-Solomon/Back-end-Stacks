import "bootstrap/dist/css/bootstrap.css";
import { MouseEvent } from "react";

function ListGroup() {
    let countries = ["Nigeria", "Ghana", "USA", "Canada", "China"];
    //countries = [];
    const handleClick = (event, index, country) => {
        console.log("The Event object:", event);
        console.log(`The Event as String is: ${event}`);
        console.log(`The Event type is: ${event.type}`);
        console.log(`The Index is: ${index}`);
        console.log(`The Country is: ${country}`);
    };

    return (
        <>
            {countries.length === 0 && <p>No country found</p>}
            <ul className="list-group">
                {countries.map((country, index) => (
                    <li
                        className="list-group-item text-success py-4"
                        key={index}
                        onClick={(event) => handleClick(event, index, country)}
                    >
                        {country} {country.toLowerCase()}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
