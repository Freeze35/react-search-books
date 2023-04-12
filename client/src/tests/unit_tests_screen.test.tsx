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
    /*test("Redirect to page", async() => {
        //send us on page localhost/nopage
        testHelpers(<App/>)

        const input = screen.getByPlaceholderText(/Поиск/i)
        const button_search = screen.getByTestId("button-search")
        //Enter search request
        const text_test = "flowers"
        await userEvent.type(input,  `${text_test}`)
        //Search click
        await userEvent.click(button_search)
        const books = await screen.findAllByTestId("book-item")
        expect(books.length).toBe(10)
        await userEvent.click(books[0])
        //expect(books[0]).toBe("dd")
        //const name_book = await screen.getByTestId("book-page")
        expect(screen.getByTestId("book-page")).toBeInTheDocument()
        //expect our books will be first time 10 books by default
    })*/
})