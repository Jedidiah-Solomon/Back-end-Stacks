import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

function ListGroup(props) {
    const { Countries, Heading } = props;
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <p>{Heading}</p>
            {Countries.length === 0 ? (
                <p>No country found</p>
            ) : (
                <ul className="list-group">
                    {Countries.map((country, index) => (
                        <li
                            className={
                                selectedIndex === index
                                    ? "list-group-item active"
                                    : "list-group-item"
                            }
                            key={index}
                            onClick={() => {
                                setSelectedIndex(index);
                            }}
                        >
                            {country}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
ListGroup.propTypes = {
    Heading: PropTypes.string,
    Countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Define default props for ListGroup outside the component function
ListGroup.defaultProps = {
    Heading: "N/A",
    Countries: [], //Note: This is just a placeholder since "No country found" is also checking"
};

export default ListGroup;
