import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const Button = ({ children, color, onClick }) => {
    return (
        <button className={`btn btn-${color}`} onClick={onClick}>
            {children}
        </button>
    );
};

/*----------------or use this---------------------
const Button = (props) => {
    const { children, color, onClick } = props;
    return (
        <button className={`btn btn-${color}`} onClick={onClick}>
            {children}
        </button>
    );
};
*/

// Define props types
Button.propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["primary", "secondary", "danger", "success"])
        .isRequired,
    onClick: PropTypes.func.isRequired,
};

// Define default props
Button.defaultProps = {
    children: "Button",
    color: "primary",
};

export default Button;
