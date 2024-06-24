import Navbar5 from "./NavBar5";
import Home5 from "./Home5";

import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import ParentComponent from "./parentComponent.jsx";
import ToggleMessage from "./ToggleMessage.jsx";
import List from "./List.jsx";
import List2 from "./List2.jsx";

//For List2

const foods = [
    { name: "Beans", calorie: 400, id: 1 },
    { name: "Rice", calorie: 200, id: 2 },
    { name: "Yam", calorie: 500, id: 3 },
];

const vegetables = [
    { name: "Ugu", calorie: 400, id: 4 },
    { name: "Pumpkin", calorie: 200, id: 5 },
    { name: "Tomato", calorie: 500, id: 6 },
];

//For List2 ended here

function App() {
    return (
        <>
            <div className="App">
                <Navbar5 />
                <div className="content">
                    <Home5 />
                </div>
            </div>
            <List />
            <ToggleMessage />
            <ParentComponent />
            <Student name="Jedybrown" age={39} isStudent={true} />
            <Student name="Paul" age={23} isStudent={false} />
            <Student name="Mantis" age={50} isStudent={false} />
            <Student name="Grace" age={21} isStudent={true} />
            <Student name="Maggi" />
            <Student />
            <UserGreeting isLoggedIn={true} username="Jedynwa" />
            <UserGreeting isLoggedIn={false} username="Jedybrown" />
            {/*foods.length > 0 ? <List2 items={foods} category="Foods" /> : null*/
            /*or use the one below */}
            {foods.length > 0 && <List2 items={foods} category="Foods" />}
            <List2 items={vegetables} category="Vegetables" />
        </>
    );
}

export default App;
