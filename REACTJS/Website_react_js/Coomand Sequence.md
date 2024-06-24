# Create React App with vite

1. npm create vite@latest
2. cd jed-react-app
3. npm install
4. npm run dev

Shortcuts for the server -- (
press r + enter to restart the server
press u + enter to show server url  
 press o + enter to open in browser  
 press c + enter to clear console  
 press q + enter to quit
);

In Jed-react-app, --- npm install bootstrap@5.3.3 to install bootstrap

1. props -- read-only properties that are shared between components.
   A parent component can send data to a child component.
   <Component key=value />

2. propTypes -- a mechanism that ensures that the passed value is of the correct datatype.
   age: PropTypes.number
3. defaultProps -- default values for proops in case they are not passed from the parent component
   name: "Guest"

4. Some imports and meanings

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

a. import React from "react";: Imports the React library, which is necessary
for defining React components and using JSX syntax.

b. import { Link } from "react-router-dom";: Imports the Link component from the react-router-dom library. The Link component
is used to navigate between different routes in a React application.

c. import Slider from "react-slick";: Imports the Slider component from the react-slick library. This component is used to create image sliders or carousels in React applications.
import "slick-carousel/slick/slick.css";: Imports the base CSS styles for the Slick carousel component.
import "slick-carousel/slick/slick-theme.css";: Imports the theme-specific CSS styles for the Slick carousel component.

d. import axios from "axios";: Imports the axios library, which is used for making HTTP requests from a React application. Axios simplifies the process of sending asynchronous
HTTP requests and handling responses.
e. import React, { useEffect, useState } from "react";: Imports the useEffect and useState hooks from the react library. These hooks are fundamental for managing component side effects (with useEffect) and local component state (with useState) in functional components.

### Change vite.config.js file to listen to multiple ports

**before**

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

**now**

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', // Listen on all available network interfaces

    // Configure custom proxies for additional URLs
    proxy: {
      '/localhost': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/localhost/, ''),
      },
    },
  },
});
```

#### Conditional Rendering

<ul>
  <li>Allows you to control what gets rendered in your application based on certain conditions.</li>
  <li>E.g show, hide, or change components</li>
</ul>

```

The useState hook allows functional components to have state, which was previously only possible in class components.

Basic Usage of useState
Import useState from React:

To use the useState hook, you need to import it from the React library.

```

**import React, { useState } from 'react';**

### React hooks

\*\_Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Hook Rules
There are 3 rules for hooks:

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional
   Note: Hooks will not work in React class components.\_\*/

**State generally refers to application data or properties that need to be tracked.**

###### What Can State Hold?

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

```
import React, { useState } from "react";


function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

//Create multiple state Hooks:
function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
//Or, we can just use one state and include an object instead!

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

Updating Objects and Arrays in State
When state is updated, the entire state gets overwritten.

What if we only want to update the color of our car?

If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

```

Note

```
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

or

function updateColor() {
    setCar((previousState) => {
        return { ...previousState, color: "blue" };
    });
}
```

#### React useEffect Hooks

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

<function>: A function containing the side effect logic.
<dependencyArray>: An optional array of dependencies that determines when the effect should run. If not provided, the effect runs after every render.

Let's use a timer as an example.

Example:

```
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}
export default Timer;
```

But wait!! It keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

Example

1. No dependency passed:

useEffect(() => {
//Runs on every render
});

2. An empty array:

useEffect(() => {
//Runs only on the first render
}, []);
Example

3. Props or state values:

useEffect(() => {
//Runs on the first render
//And any time any dependency value changes
}, [prop, state]);
So, to fix this issue, let's only run this effect on the initial render.

Example:
Only run the effect on the initial render:

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />)
```

Example:
Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
```

If there are multiple dependencies, they should be included in the useEffect dependency array.

Effect Cleanup
Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

Example:
Clean up the timer at the end of the useEffect Hook:

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

/*
Note: To clear the timer, we had to name it.
*/
```

```
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    // Step 1: Define state variable 'count'
    const [count, setCount] = useState(0);

    // Step 2: Set up the useEffect hook
    useEffect(() => {
        // Step 3: Create a timer using setTimeout
        const timer = setTimeout(() => {
            // Step 4: Update the 'count' state variable
            setCount((count) => count + 1);
        }, 1000);

        // Step 5: Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [count]); // Step 6: Specify 'count' as a dependency

    // Step 7: Render the component
    return <h1>I've rendered {count} times!</h1>;
}

// Render the Timer component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

```

```
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function LoggerComponent() {
    // Use useEffect without a dependency array
    useEffect(() => {
        console.log("Component rendered or updated");
    });

    return <h1>Hello, useEffect!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoggerComponent />);
```

```
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function DataFetchingComponent() {
const [data, setData] = useState(null);

    // Use useEffect to fetch data on component mount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Fetched Data:</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataFetchingComponent />);

```

Effect Cleanup
Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

```
Clean up the timer at the end of the useEffect Hook:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

Note: To clear the timer, we had to name it.


```

---

The useContext hook in React is a powerful feature that allows you to share state or values across different components without having to pass props down manually at every level. It is particularly useful for managing global state or theme data that needs to be accessed by multiple components in your application.

#### When to Use useContext

Global State Management: When you have state that needs to be accessed by many components, such as user authentication status, theme settings, or language preferences.

Avoiding Prop Drilling: When passing props through multiple levels of components becomes cumbersome and leads to code that is hard to maintain.

#### How useContext Works

###### Create a Context:

You create a context using React.createContext(). This context will hold the value you want to share across components.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

How useContext Works

1. Create a Context:
   You create a context using React.createContext(). This context will hold the value you want to share across components.

import React, { createContext } from 'react';

const MyContext = createContext();

2. Provide the Context:
   Use a Context.Provider component to make the context value available to its child components. This is typically done at a higher level in the component tree.

const MyProvider = ({ children }) => {
const value = { someData: 'Hello, World!' };
return (
<MyContext.Provider value={value}>
{children}
</MyContext.Provider>
);
};

3. Consume the Context:
   Use the useContext hook to access the context value in a component that is a descendant of the provider.

import React, { useContext } from 'react';

const MyComponent = () => {
const contextValue = useContext(MyContext);
return <div>{contextValue.someData}</div>;
};

Let's look at a complete example where we use useContext to manage and access theme settings across a component tree.

Creating the Context:

import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
Providing the Context:

const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};

export default ThemeProvider;
Consuming the Context:

import React, { useContext } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeProvider';

const ThemedComponent = () => {
const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <p>The current theme is {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );

};

const App = () => (
<ThemeProvider>
<ThemedComponent />
</ThemeProvider>
);

export default App;

Summary
Create a Context: Use createContext() to create a context object.
Provide the Context: Use a Context.Provider to pass the context value to child components.
Consume the Context: Use the useContext hook to access the context value within any component.
The useContext hook simplifies the management of shared state and avoids prop drilling, making your React components cleaner and easier to manage.

---

### BrowserRouter

BrowserRouter is a router implementation that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL. It should be used at the top level of your application.

### Routes and Route

Routes is a container for Route elements. Route is used to define individual routes in your application. Each Route specifies a path and the element that should be rendered when the URL matches that path.

### Link

Link is used to create navigation links. It renders an anchor (<a>) element that navigates to different routes defined in your application.

---

Let's create a simple React application with the following structure:

A home page (Home)
An about page (About)
A contact page (Contact)

##### Install React Router

`npm install react-router-dom`

Create Components

#### Home.jsx

```
import React from 'react';

const Home = () => {
return (

<div>
<h1>Home Page</h1>
<p>Welcome to the Home Page!</p>
</div>
);
};

export default Home;
```

#### About.jsx

```
import React from 'react';

const About = () => {
return (

<div>
<h1>About Page</h1>
<p>Learn more about us on this page.</p>
</div>
);
};

export default About;
```

#### Contact.jsx

```
import React from 'react';

const Contact = () => {
return (

<div>
<h1>Contact Page</h1>
<p>Contact us at contact@example.com.</p>
</div>
);
};

export default Contact;
```

### Set Up Routing in App.jsx

```
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
return (
<Router>

<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
<li>
<Link to="/contact">Contact</Link>
</li>
</ul>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

);
};

export default App;

```

##### Explanation

BrowserRouter:

<Router> (aliased from BrowserRouter) wraps the entire application, enabling routing functionality.
Routes and Route:

<Routes> contains all the route definitions.
Each <Route> specifies a path and an element.
path="/" matches the root URL and renders the Home component.
path="/about" matches /about and renders the About component.
path="/contact" matches /contact and renders the Contact component.
Link:

<Link to="/">Home</Link> creates a link to the home page.
<Link to="/about">About</Link> creates a link to the about page.
<Link to="/contact">Contact</Link> creates a link to the contact page.
Running the Application
When you run this application:

The navigation links at the top allow you to switch between different routes.
Clicking on "Home" takes you to the home page (/).
Clicking on "About" takes you to the about page (/about).
Clicking on "Contact" takes you to the contact page (/contact).
The respective components for each route (Home, About, Contact) are rendered based on the URL path.
