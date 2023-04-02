import React from "react";
import App from "../App";
import {render, screen} from "@testing-library/react";
import ContextProvider from "../ContextProvider";
import '@testing-library/jest-dom'

describe("App",  () => {
    it("render App component", () => {
        render(<ContextProvider>
            <App/></ContextProvider>);

        expect(screen.getByText(/serd/i)).toBeInTheDocument()
    })
    it("render App component", () => {
        render(<ContextProvider>
            <App/></ContextProvider>);

        expect(screen.getByText(/serd/i)).toBeInTheDocument()
    })

    /*it("renders the customer's first name.", () => {
        const customer = {firstName: 'Ashley'};
        const component = <App/>;
        const container = document.createElement('div');
        document.body.appendChild(container);

        const root = createRoot(container);

        act(() => root.render(component));

        expect(document.body.textContent).toMatch('Ashley');
    });*/
})