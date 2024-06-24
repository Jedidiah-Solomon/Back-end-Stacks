function Button2() {
    //This is inline css styling
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5PX",
        border: "none",
        cursor: "pointer",
        marginLeft: "10px",
    };
    return <button style={styles}>Subscribe</button>;
}

export default Button2;
