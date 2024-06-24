function List() {
    const fruits = ["apple", "mango", "pear", "dome", "clove"];
    // Sort the fruits array before mapping
    const sortedFruits = fruits.slice().sort((a, b) => a.localeCompare(b));
    // Map over fruits to generate list items with unique keys
    const listItems = sortedFruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
    ));

    const listItems2 = fruits.map((fruit, index) => (
        <li key={index}>{fruit.toUpperCase()}</li>
    ));
    const listItems3 = fruits.map((fruit, index) => (
        <li key={index}>{fruit}.new</li>
    ));

    const foods = [
        { name: "Moimoi", calorie: 100 },
        { name: "Beans", calorie: 200 },
        { name: "Yam", calorie: 500 },
        { name: "Abacha", calorie: 250 },
    ];
    const lowCalorieFoods = foods.filter((food) => food.calorie < 240);
    // foods.sort((a, b) => a.calorie - b.calorie);//numerically
    //foods.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
    //const foodItems = foods.map((food) => <li>{food.name}</li>);
    //Since react wants us to add a key prop

    const foodItems3 = lowCalorieFoods.map((lowCalorieFood) => (
        <li key={lowCalorieFood.name}>
            Name - {lowCalorieFood.name} Calorie - {lowCalorieFood.calorie}
        </li>
    ));
    const foodItems = foods.map((food) => (
        <li key={food.name}>
            Name - {food.name} Calorie - {food.calorie}
        </li>
    ));

    /*
//Just add id if you know the name is not unique
    const foods2 = [
        { name: "Beans", calorie: 400, id: 1 },
        { name: "Rice", calorie: 200, id: 2 },
        { name: "Yam", calorie: 500, id: 3 },
    ];

    const foodItems2 = foods2.map((food) => (
        <li key={food.id}>
            Name - {food.name} Calorie - {food.calorie}
        </li>
    ));*/

    return (
        <div>
            <ol>{listItems}</ol>
            <ol>{listItems2}</ol>
            <ol>{listItems3}</ol>
            <ol>{foodItems}</ol>
            <ol>{foodItems3}</ol>
        </div>
    );
}

export default List;
