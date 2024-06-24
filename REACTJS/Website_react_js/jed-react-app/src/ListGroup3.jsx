import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ListGroup() {
    let countries = ["Nigeria", "Ghana", "USA", "Canada", "China"];
    //countries = [];

    //Hooks: E.g State hook, NOTE EACH COMPONENT HAS ITS OWN STATE. sO ADDING TWO <ListGroup/> will create two independent states
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            {countries.length === 0 && <p>No country found</p>}
            <ul className="list-group">
                {countries.map((country, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item "
                        }
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                    >
                        {country} {country.toLowerCase()}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
