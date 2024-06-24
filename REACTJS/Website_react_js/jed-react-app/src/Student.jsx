//PROPS
//Import propTypes
import PropTypes from "prop-types";

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
//Craete a proptypes to ensure integrity
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

//Add always a default props fo fallbacks
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

export default Student;
