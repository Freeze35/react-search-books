import App from "../App";
import {render,screen} from "@testing-library/react";
import describe from "node:test";

describe("App",()=>{
    it("render App component",()=>{
        render(<App />);
        const linkElement = screen.getByText(/this should exist/i);
        expect(linkElement).toBeInTheDocument();

    })
})