function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h2>Welcome {props.username}</h2>;
    } else {
        return <h2>Please log in to continue</h2>;
    }
}

//This is same as below
/*
function UserGreeting(props) {
    const welcomeMessage = <h2>Welcome {props.username}</h2>;
    const loginPrompt = <h2>Please log in to continue</h2>;
    return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

or 

function UserGreeting(props) {
    return props.isLoggedIn ? (
        <h2>Welcome {props.username}</h2>
    ) : (
        <h2>Please log in to continue</h2>
    );
}*/

export default UserGreeting;
