import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemedComponent from "./ThemedComponent";

const AppContext = () => (
    <ThemeProvider>
        <ThemedComponent />
    </ThemeProvider>
);

export default AppContext;
