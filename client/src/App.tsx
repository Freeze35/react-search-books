import {observer} from "mobx-react-lite";
import "./App.css"
import React from "react";
import SearchAndSort from "./components/searchComponent/SearchAndSort";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App = observer(() => {

    return (
        <BrowserRouter>
            <SearchAndSort/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
