import {screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom'
import SearchAndSort from "../components/searchComponent/SearchAndSort";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { testHelpers } from "./helpers/testhelpers";



describe("App", () => {

    test("search input test",    async () => {
        testHelpers(<SearchAndSort/>)
        const input:any = await screen.findByPlaceholderText(/Поиск/i)
        await userEvent.type(input, "flowers")
        await waitFor(() => expect(input.value).toBe("flowers"))
        expect(input.value).toMatchSnapshot()
    })

    test("Сlick Button Event Search Test",    async () => {
        testHelpers(<App/>)
        // Find our
        const input:any = await screen.findByPlaceholderText(/Поиск/i)
        const button_search:any = await screen.findByTestId("button-search")
        //our input text
        const text_test = "flowers"
        await userEvent.type(input, `${text_test}`)
        //Search click
        await userEvent.click(button_search)
        const books = await screen.findAllByTestId("book-item")
        //expect our books will be first time 10 books by default
        await waitFor(() => expect(books.length).toBeGreaterThan(0))
        await waitFor(() => expect(books.length).toBe(10))
        expect(books).toMatchSnapshot()
    })

    test("Enter Event Search Test",   async () => {
        testHelpers(<App/>)
        const input:any = await screen.findByPlaceholderText(/Поиск/i)
        //Enter event test
        const text_test = "react"
        await userEvent.type(input,  `${text_test}{enter}`)
        const books = await screen.findAllByTestId("book-item")
        //expect our books will be first time 10 books by default
        waitFor(() => expect(books.length).toBeGreaterThan(0))
        waitFor(() => expect(books.length).toBe(10))
    })

})