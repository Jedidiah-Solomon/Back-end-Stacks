function Food() {
    const food1 = "Orange";
    const food2 = "Banana";
    const amount = 200;
    const phone_no = "7062957194";
    return (
        <ul>
            <li>Applpe</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{amount.toFixed(2)}</li>
            <li>{phone_no.padStart(11, 0)}</li>
        </ul>
    );
}

export default Food;
