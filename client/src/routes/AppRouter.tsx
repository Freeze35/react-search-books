import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {booksRoutes} from "./routes";
import {MAIN_ROUTE} from "../assets/const";

const AppRouter = () => {
    return (
        <Routes>
            {booksRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>)}
            <Route path="*" element={<Navigate replace to={MAIN_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;