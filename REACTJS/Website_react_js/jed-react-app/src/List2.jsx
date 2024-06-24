import PropTypes from "prop-types";

function List2(props) {
    const itemList = props.items;
    const category = props.category;

    const foodItems = itemList.map((item) => (
        <li key={item.id}>
            Name - {item.name} Calorie - {item.calorie}
        </li>
    ));

    return (
        <>
            <h2>{category}</h2>
            <ol>{foodItems}</ol>
        </>
    );
}

List2.propTypes = {
    category: PropTypes.string,
    //category: PropTypes.string.isRequired,  //Use this when you dont have default for total compliance
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            category: PropTypes.number,
        })
    ),
};

List2.defaultProps = {
    category: "Category",
    items: [],
};
export default List2;
