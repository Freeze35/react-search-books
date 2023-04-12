import {screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom'
import SearchAndSort from "../components/searchComponent/SearchAndSort";
import App from "../App";
import { testHelpers } from "./helpers/testhelpers";

describe("App", () => {

    test("render App Placeholder Поиск", () => {
        testHelpers(<App/>)
        const buttonLabel = screen.findByLabelText(/Поиск/i)
        waitFor(() => expect(buttonLabel).toBeInTheDocument())
        waitFor(() => expect(buttonLabel).toMatchSnapshot())
    })

    test("Search component exists", () => {
        testHelpers(<SearchAndSort/>)
        const input = screen.findByTestId('search-and-sort')
        waitFor(() => expect(input).toBeInTheDocument())
        waitFor(() => expect(input).toMatchSnapshot())
    })

    test("Redirect to default page (* redirect)", () => {
        //send us on page localhost/nopage
        testHelpers(<App/>,"/nopage")
        const bookslist = screen.getByTestId("books-list")
        expect(bookslist).toBeInTheDocument()
        expect(bookslist).toMatchSnapshot()

    })
})