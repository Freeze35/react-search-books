import {screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import SearchAndSort from "../components/searchComponent/SearchAndSort";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { testHelpers } from "./helpers/testhelpers";



describe("App", () => {

    test("search input test",   async () => {
        testHelpers(<SearchAndSort/>)
        const input:any = screen.getByPlaceholderText(/Поиск/i)
        await userEvent.type(input, "flowers")
        expect(input.value).toBe("flowers")
        expect(input.value).toMatchSnapshot()
    })

    test("Сlick Button Event Search Test",   async () => {

        testHelpers(<App/>)
        // Find our
        const input = screen.getByPlaceholderText(/Поиск/i)
        const button_search = screen.getByTestId("button-search")
        //our input text
        const text_test = "flowers"
        await userEvent.type(input,  `${text_test}`)
        //Search click
        await userEvent.click(button_search)
        const books = await screen.findAllByTestId("book-item")
        //expect our books will be first time 10 books by default
        expect(books.length).toBeGreaterThan(0)
        expect(books.length).toBe(10)
    })

    test("Enter Event Search Test",   async () => {
        testHelpers(<App/>)
        const input = screen.getByPlaceholderText(/Поиск/i)
        //Enter event test
        const text_test = "react"
        await userEvent.type(input,  `${text_test}{enter}`)
        const books = await screen.findAllByTestId("book-item")
        //expect our books will be first time 10 books by default
        expect(books.length).toBeGreaterThan(0)
        expect(books.length).toBe(10)
    })

})