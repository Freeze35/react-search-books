import {observer} from "mobx-react-lite";
import "./App.css"
import React from "react";
import SearchAndSort from "./components/searchComponent/SearchAndSort";

import AppRouter from "./routes/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = observer(() => {

    return (
        <BrowserRouter>
            <SearchAndSort/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
