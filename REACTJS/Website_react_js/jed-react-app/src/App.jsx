import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import ListGroup from "./ListGroup.jsx";
import ContactForm from "./ContactForm.jsx";
import FavoriteColor from "./components/useState/useState.jsx";
import Car from "./components/useState/useState2.jsx";
import MyComponent from "./components/useState/useState3.jsx";
import Button from "./components/Buttons/Button.jsx";
import DataFetchingComponent from "./components/DataFetchingComponent.jsx";
import DataFetchingComponent2 from "./components/DataFetchingComponent2.jsx";
import Component1 from "./NoContext.jsx";
import Component11 from "./Context.jsx";
import AppContext from "../AppContext.jsx";
import UseState1 from "./UseState1.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import UpdaterFuction from "./components/UpdaterFunction.jsx";
import ObjectState from "./ObjectState.jsx";
import ArrayState from "./components/ArrayState.jsx";
import "bootstrap/dist/css/bootstrap.css";

let countries1 = [];
//let countries1 = ["Nigeria", "Ghana", "USA", "Canada", "China"];
let countries2 = ["Japan", "Ethopia", "Zambia"];
let heading = "Countries in the World";

//Contact Form
function App() {
    const handleFormSubmission = (contactData) => {
        // Handle form submission (e.g., send data to backend)
        console.log("Contact Data:", contactData);
        // You can implement API calls, state updates, etc. here
    };

    return (
        <>
            <Header></Header>;<Food></Food>;<Food></Food>;<Footer></Footer>
            <ListGroup Countries={countries1} Heading={heading} />
            <ListGroup Countries={countries2} Heading={heading} />
            <ListGroup Countries={countries2} />
            <div>
                <h1>Contact Form</h1>
                <ContactForm handleFormSubmit={handleFormSubmission} />
            </div>
            <FavoriteColor />
            <Car />
            <MyComponent />
            <div className="mt-5">
                <Button
                    color="secondary"
                    onClick={() => console.log("Secondary button clicked")}
                >
                    Secondary Button
                </Button>
                <Button
                    color="primary"
                    onClick={() => console.log("Primary button clicked")}
                >
                    Primary Button
                </Button>
                <Button
                    color="danger"
                    onClick={() => console.log("Danger button clicked")}
                >
                    Danger Button
                </Button>
                <Button
                    color="success"
                    onClick={() => console.log("Success button clicked")}
                >
                    Success Button
                </Button>
                <Button
                    onClick={() => console.log("N/A button clicked")}
                ></Button>
            </div>
            <DataFetchingComponent />
            <DataFetchingComponent2 />
            <Component1 />
            <Component11 />
            <AppContext />
            <UseState1 />
            <ColorPicker />
            <UpdaterFuction />
            <ObjectState />
            <ArrayState />
        </>
    );
}

export default App;
