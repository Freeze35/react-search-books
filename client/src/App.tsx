import {observer} from "mobx-react-lite";
import "./App.css"
import "./styles/fontface.css"
import React from "react";


const SearchAndSort = React.lazy(() => import('./components/searchComponent/SearchAndSort'));
const AppRouter = React.lazy(() => import('./routes/AppRouter'));




const App:React.FC = observer(() => {
    return (
        <div>
            <SearchAndSort/>
            <AppRouter/>
        </div>
    );

})

export default App;
