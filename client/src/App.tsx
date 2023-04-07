import {observer} from "mobx-react-lite";
import "./App.css"
import "./styles/fontface.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import SearchAndSort from "./components/searchComponent/SearchAndSort";
import AppRouter from "./routes/AppRouter";
import {ContainerProps} from "react-bootstrap";

const App:React.FC<ContainerProps> = observer(() => {
    return (
        <div>
            <SearchAndSort/>
            <AppRouter/>
        </div>
    );

})

export default App;
